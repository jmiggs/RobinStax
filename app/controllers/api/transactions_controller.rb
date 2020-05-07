class Api::TransactionsController < ApplicationController

  def create

    @transaction = Transaction.new

    symbol = params[:data][:symbol].upcase

    @asset = Asset.find_by(ticker: symbol)
 

    ## add errors here
    @transaction.user_id = current_user.id
    @transaction.asset_id = @asset.id

    if params[:data][:amount] == nil
      render json: [`youre not buying anything`], status: 419
    end
    @transaction.amount = params[:data][:amount]
    @transaction.cost = params[:data][:cost]
    @transaction.transtype = params[:data][:transtype]

    totalcost = @transaction.amount * @transaction.cost
    
    @transaction.totalcost = totalcost
    @transaction.save

    render('api/transactions/show')
  end


end
