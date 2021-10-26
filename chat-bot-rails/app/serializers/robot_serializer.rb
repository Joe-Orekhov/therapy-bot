class RobotSerializer < ActiveModel::Serializer
  attributes :id, :name, :feelings_list, :responses
end
