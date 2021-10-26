class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :robot_id, :questionnaire, :review
end
