class Iex::DataController < ApplicationController


  def show
    
    datahash = iex_search(params[:asset][:symbol])

    @info = Info.new(symbol: params[:asset][:symbol], price: datahash[:price], open: datahash[:open], close: datahash[:close] )

    if @info
      render json: @info
    end
  end



  def asset_params
    params.require(:asset).permit(:symbol)
  end
  
  def iex_search(sym)

    client = IEX::Api::Client.new(publishable_token: 'Tpk_9f75ee855e3444609eb777c88e3d4aae', secret_token: 'secret_token', endpoint: 'https://sandbox.iexapis.com/v1')
    quote = client.quote(sym)
    

    infohash = {}
    
    # # return client.price(sym)

    infohash[:price] = client.price(sym)
    infohash[:open] = 1
    infohash[:close] = 1

    return infohash

    # return infohash

  end
end



