class SessionsController < ApplicationController
    def create
        user = User.find_by_username(params[:username])
    end

    def destroy
        
    end
end
