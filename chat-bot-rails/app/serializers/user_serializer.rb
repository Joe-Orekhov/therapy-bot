class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :uusername, :password
end
