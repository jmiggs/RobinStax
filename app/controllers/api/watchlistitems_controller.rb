class Api::WatchlistitemsController < ApplicationController

  def create

    all_wls = params[:wls]
    symbol = params[:sym]

    errFound = 0

    all_wls.keys.each do |key|
      if to_boolean(all_wls[key][:toAdd])
        
        @wlitem = Watchlistitem.new
        @wlitem.ticker = symbol
        @wlitem.list_id = key.to_i

        if @wlitem.save
        else
          errFound += 1
        end

      end
    end

    if errFound > 0
      render json: ['Already in one of your lists']
    else
      render json: ['Succesfully added to your Watchlists']
    end
  end

  def destroy
    @wlitem = Watchlistitem.find_by(list_id: params[:listid], ticker: params[:id])
    @wlitem.destroy
  end


  

  private
  def to_boolean(str)
    str == 'true'
  end
end
