class ChatsController < ApplicationController
  before_action :set_chat, only: [:show, :destroy]

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

  private

  def set_chat
    @chat = Chat.find([params[:id]])
  end

end
