require 'net/http'

class Api::NewsController < ApplicationController

  def index
    url = URI('https://newsapi.org/v2/top-headlines?country=US&category=business&apiKey=8301919d1f424b84ae99257ab31a6067')
    res = Net::HTTP.get_response(url)
 
    render json: res.body
  end
end
