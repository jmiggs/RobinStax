class Api::TransactionsController < ApplicationController

  def create



    ## check user's buying power against the current transaction total cost for sufficiency
    target_user = User.find(current_user.id)
    totalcost = params[:data][:amount].to_i * params[:data][:amount].to_i

    # if params[:data][:transtype] == 'buy' && target_user.buying_power < totalcost
    #   render json: ['Insufficient Buying Power'], status: 422
    # end

    #
  
    # if params[:data][:transtype] == "buy"
    #   target_user.buying_power -= totalcost
    #   target_user.save
    # else
    #   target_user.buying_power += totalcost
    #   target_user.save
    # end

    symbol = params[:data][:symbol].upcase
    @transaction = Transaction.new
    @asset = Asset.find_by(symbol: symbol)
  
    #create and assign transaction attributes
    @transaction.user_id = current_user.id
    @transaction.asset_id = @asset.id
    @transaction.symbol = params[:data][:symbol].upcase
    @transaction.amount = params[:data][:amount]
    @transaction.cost = params[:data][:cost]
    @transaction.transtype = params[:data][:transtype]

    @transaction.totalcost = totalcost
    @transaction.save


    # render('api/transactions/show')
  end

  def show 
    user = User.find(current_user.id)

    buys = user.transactions.where(transtype: 'buy')
    sells = user.transactions.where(transtype: 'sell')
    buying_power = 3000

    num_shares = {}

    buys.each do |buy|
      if num_shares[buy.symbol]
        num_shares[buy.symbol] += buy.amount
      else
        num_shares[buy.symbol] = buy.amount
      end

      buying_power -= buy.cost * buy.amount
    end

    sells.each do |sell|    
      if num_shares[sell.symbol]
        num_shares[sell.symbol] -= sell.amount
      end

      buying_power += sell.cost * sell.amount
    end

    num_shares[:bP] = buying_power

    @num_shares = num_shares

    render json: @num_shares

  end

  private

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
