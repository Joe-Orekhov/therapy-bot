class SessionsController < ApplicationController
    before_action :set_session, only: [:destroy]

    def create
        user = User.find_by(username: params[:username])
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
            head :no_content
            # session.clear is an alternative
            # leaving out render will give us a 200 status if successful
        else
            render json: { error: "No active session" }, status: :unprocessable_entity
        end
    end

    private

    def set_session
        @session = Session.find([params[:id]])
    end
end