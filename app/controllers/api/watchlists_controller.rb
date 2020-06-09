class Api::WatchlistsController < ApplicationController

  def index
    # @watchlists = Watchlist.find_by(user_id: current_user.id)
    @watchlists = Watchlist.where(user_id: current_user.id)

    render('api/watchlists/show')
  end

  
  def create
    wl = Watchlist.new

    wl.user_id = current_user.id
    wl.name = params[:data]

    if wl.save
      @watchlists = Watchlist.all
      render("api/watchlists/show")
    else
      render json: ['Name has been taken'], status: 422
    end
  end

  def show
 
    @wl = Watchlist.find(params[:id])

    if @wl
      render('api/watchlists/single')
    else
      render json: @wl.errors.full_messages
    end
  end

  def destroy
    wl = Watchlist.find(params[:id])
    wl.destroy
  end

end
