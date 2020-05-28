class Api::WatchlistsController < ApplicationController

  def index
    # @watchlists = Watchlist.find_by(user_id: current_user.id)
    @watchlists = Watchlist.all
    render('api/watchlists/show')
  end

  
  def create
    wl = Watchlist.new

    wl.user_id = current_user.id
    wl.name = params[:data][:listName]

    if wl.save
      @watchlists = Watchlist.all
      render("api/watchlists/show")
    else
      render json: wl.errors.full_messages
    end


  end
end
