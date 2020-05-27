class Api::TransactionsController < ApplicationController

  def create

    @transaction = Transaction.new

    symbol = params[:data][:symbol].upcase

    @asset = Asset.find_by(symbol: symbol)
 

    ## add errors here
    @transaction.user_id = current_user.id
    @transaction.asset_id = @asset.id
    @transaction.symbol = params[:data][:symbol].upcase

    if params[:data][:amount] == nil
      render json: [`youre not buying anything`], status: 419
    end
    @transaction.amount = params[:data][:amount]
    @transaction.cost = params[:data][:cost]
    @transaction.transtype = params[:data][:transtype]

    totalcost = @transaction.amount * @transaction.cost
    
    @transaction.totalcost = totalcost
    @transaction.save

    # render('api/transactions/show')
  end

  def show 
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

    @num_shares = num_shares

    render json: @num_shares
  end



end
