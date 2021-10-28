class ApplicationController < ActionController::API
  include ActionController::Cookies
  

  private

  def current_user
    # initialize current_user variable
    # current_user set once and can be referenced as needed throughout app
    @current_user ||= User.find_by_id(session[:user_id])
    # if current_user returns nil, results in 401
  end

end

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end