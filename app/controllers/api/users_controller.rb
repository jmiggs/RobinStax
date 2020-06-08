class Api::UsersController < ApplicationController

    def create
        
        @user = User.new(user_params)
        @user.buying_power = 3000

        if @user.save
            login(@user)
            render("api/users/show")
        else
            render json: @user.errors.full_messages, status: 422
        end

    end

    def show
  
      num_shares = calculateNumShares
      
      @tickers = []

      num_shares.keys.each do |key|
        if num_shares[key] != 0
          @tickers.push( {"ticker": key})
        end
      end

      if @tickers.length == 0
        render json: ["nostocks"]
      else
        render json: @tickers
      end
  
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end


    def calculateNumShares
      user = User.find(current_user.id)
  
      buys = user.transactions.where(transtype: 'buy')
      sells = user.transactions.where(transtype: 'sell')
  
      num_shares = {}
  
      buys.each do |buy|
        if num_shares[buy.symbol]
          num_shares[buy.symbol] += buy.amount
        else
          num_shares[buy.symbol] = buy.amount
        end
      end
  
      sells.each do |sell|
        if num_shares[sell.symbol]
          num_shares[sell.symbol] -= sell.amount
        end
      end
  
      return num_shares
    end
    
end
