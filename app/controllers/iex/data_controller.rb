class Iex::DataController < ApplicationController


  def show
    @price = init_client(params[:symbol])

    @price.instance_variable_set(:sym, params[:symbol])
    @price.instance_variable_set(:price, @price)

    if @price
      render "api/iex/data/show"
    end
  end



  def asset_params
    params.require(:asset).permit(:symbol)
  end
  

  def init_client(sym)

    client = IEX::Api::Client.new(publishable_token: Rails.application.credentials.iex[:api_key] , secret_token: 'secret_token', endpoint: 'https://sandbox.iexapis.com/v1')

    return client.price(sym)

  end
end



