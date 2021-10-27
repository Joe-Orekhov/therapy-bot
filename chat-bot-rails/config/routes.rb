Rails.application.routes.draw do
  resources :feelings, only: [:show]
  resources :chats
  resources :robots
  resources :appointments
  resources :users
  # get "/hello", to: "application#hello_world"
  post "/word_search", to: "robots#word_search"

end