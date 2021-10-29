Rails.application.routes.draw do
  resources :complex_user_messages
  resources :robots
  resources :appointments
  resources :chats, only: [:index, :destroy]
  resources :feelings, only: [:show]
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:index, :show, :create]
  
  get "/word_search", to: "robots#word_search"

  # me endpoint allows react app to remember whether we are logged in or not
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

end