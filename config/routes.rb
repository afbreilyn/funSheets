Rails.application.routes.draw do

  resources :skills
  resources :characters
  
  devise_for :users
  
  root to: "home#index"
end
