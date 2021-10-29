class UsersController < ApplicationController
    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: { error: "Not authorized, therefore no active session" }, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            # set user as current user - allows them to login!!
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors, status: :unprocessable_entiy
        end
    end

    private

    def user_params
        params.permit[:username, :password, :password_confirmation]
    end

end

