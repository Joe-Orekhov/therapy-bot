Rails.application.routes.draw do
  # resources :chats
  # resources :appointments
  resources :feelings, only: [:show]
  resources :sessions, only: [:create, :destroy]
  resources :users, only: [:index, :show, :create]
  
  post "/word_search", to: "robots#word_search"

  # me endpoint allows react app to remember whether we are logged in or not
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"

end