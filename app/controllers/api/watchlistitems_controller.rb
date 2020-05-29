class Api::WatchlistitemsController < ApplicationController

  def create

    all_wls = params[:wls]
    symbol = params[:sym]

    errMessages = []

    all_wls.keys.each do |key|
      if to_boolean(all_wls[key][:toAdd])
        
        @wlitem = Watchlistitem.new
        @wlitem.ticker = symbol
        @wlitem.list_id = key.to_i
        @wlitem.save

      end
    end

    if errMessages.length > 0
      render json: ['failure']
    else
      render json: ['Succesfully added to your Watchlists']
    end
  end

  private
  def to_boolean(str)
    str == 'true'
  end
end
