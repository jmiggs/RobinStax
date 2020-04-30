Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  namespace :iex, defaults: {format: :json} do
    resource :data, only: [:show]
  end

  root "static#root"
end
