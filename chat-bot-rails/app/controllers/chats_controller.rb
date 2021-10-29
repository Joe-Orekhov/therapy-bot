class ChatsController < ApplicationController

  def index 
    render json: Chat.all
  end

def destroy
    Chat.destroy_all
    head :ok
end

  def show
    chatRoom = Chat.find_by(appointment_id: params[:id])
    render json: chatRoom
  end

end
