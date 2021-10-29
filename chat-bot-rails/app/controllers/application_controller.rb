class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :confirm_authentication
  
  private

  def current_user
    # initialize current_user variable
    # current_user set once and can be referenced as needed throughout app
    @current_user ||= User.find_by_id(session[:user_id])
    # if current_user returns nil, results in 401
  end

  # def confirm_authenication
  #   # you pretty much need to be logged in to do/see anything - reason for adding this to application controller instead of specific controllers
  #   render json: { error: "You must be logged in to do that"}, status: :unauthorized unless current_user
  # end

end