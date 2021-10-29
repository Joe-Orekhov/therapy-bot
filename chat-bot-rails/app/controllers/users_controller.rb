class UsersController < ApplicationController
    skip_before_action :confirm_authentication
    before_action :set_user, only: [:show]

    #### DO WE NEED THIS  ?
    # wrap_parameters :user, include: [:name, :username, :password, :password_confirmation]

    def index
        @users = User.all
        render json: @users
    end
    
    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: { error: "No active session" }, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            # set user as current user - allows them to login!!
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: @users.errors, status: :unprocessable_entiy
        end
    
    def destroy
        @users.destroy
    end
end
    private

    def user_params
        params.permit[:name, :username, :password, :password_confirmation]
    end

    def set_user
        @user = User.find([params[:id]])
    end
end