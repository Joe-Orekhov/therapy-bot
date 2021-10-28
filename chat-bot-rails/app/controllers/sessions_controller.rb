class SessionsController < ApplicationController
    def create
        user = User.find_by_username(params[:username])
        # if user exists, call authenticate on user
        if user&.authenticate(params[:password])
            # setting user.id as the session id (current user) shows logged in version of the app
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "invalid credentials" }, status: :unauthorized
        end
    end

    def destroy
        if current_user
            session.delete :user_id
            # session.clear is an alternative
            # leaving out render will give us a 200 status if successful
        else
            render json: { error: "No active session" }, status: :unprocessable_entity
        end
    end
end
