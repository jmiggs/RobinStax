
class Api::AssetsController < ApplicationController

  def index
  
    @assets = Asset.all


    render("api/assets/index")
  end

  def create

    rawdata = params[:data].values
    parseddata = []

    (0...rawdata.length).each do |i|

      if !Asset.find_by(symbol: rawdata[i][:symbol])
        @asset = Asset.new(symbol: rawdata[i][:symbol])
        @asset.save
      end
     
    end

    @assets = Asset.all

    render json:("api/assets/show")
  end


  def show
    @user = User.find(current_user.id)

    if @user
      render('api/assets/show')
    end

  end


  

end
