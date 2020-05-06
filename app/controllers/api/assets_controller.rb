
class Api::AssetsController < ApplicationController

  def create

    rawdata = params[:data].values
    parseddata = []

    (0...rawdata.length).each do |i|

      if !Asset.find_by(ticker: rawdata[i][:symbol])
        @asset = Asset.new(ticker: rawdata[i][:symbol])
        @asset.save
      end
     
    end

    @assets = Asset.all

    render json:("api/assets/show")
  end
  

end
