Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :assets, only: [:create, :show, :index]
    resources :transactions, only: [:create, :show]
    resources :watchlists
    resources :watchlistitems, only: [:create, :destroy]
    resources :news
  end

  root "static#root"
end
