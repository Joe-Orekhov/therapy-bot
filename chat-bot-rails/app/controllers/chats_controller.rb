class ChatsController < ApplicationController
  before_action :set_chat, only: [:show, :destroy]

  def index 
    render json: Chat.all
  end

  def create
    newChat = Chat.create(appointment_id: Appointment.first.id, is_user: true, message: params[:message])
    render json: true, status: :created
  end

  def destroy
    byebug
      Chat.destroy_all
      Chat.create(appointment_id: appo1.id, is_user: false, message: "Hey, how are you doing today?")
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
