Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :destroy, :show, :index, :update]
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :destroy, :update, :index]
    resources :comments, only: [:create, :destroy, :update]
    resources :friend_requests, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
  end


  root to: "static_pages#root"

end
