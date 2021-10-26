Rails.application.routes.draw do
  resources :chats
  resources :robots
  resources :appointments
  resources :users
  # get "/hello", to: "application#hello_world"
end