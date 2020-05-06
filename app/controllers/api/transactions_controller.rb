class Api::TransactionsController < ApplicationController

  def create

    @transaction = Transaction.new

    @asset = Asset.find_by(params[:data][:symbol])


    ## add errors here
    @transaction.users_id = current_user.id
    @transaction.assets_id = @asset.id
    @transaction.amount = params[:data][:amount]
    @transaction.cost = params[:data][:cost]
    @transaction.transtype = params[:data][:transtype]

    totalcost = @transaction.amount * @transaction.cost
    
    @transaction.totalcost = totalcost
    @transaction.save

    render('api/transactions/show')
  end


end
