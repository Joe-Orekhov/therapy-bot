class ChatSerializer < ActiveModel::Serializer
  attributes :id, :appointment_id, :is_user, :message
end
