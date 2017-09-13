require 'api_constraints'

TravelPlannerApi::Application.routes.draw do
  mount SabisuRails::Engine => "/sabisu_rails"

    resources :users,  :only => [:create, :show, :index]
    resources :trips, :only => [:create, :show, :index, :update, :destroy]
    devise_for :users, controllers: { sessions: 'sessions'}

end
