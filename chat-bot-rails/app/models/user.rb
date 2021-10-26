class User < ApplicationRecord
    has_many :appointments
    has_many :robots, through: :appointments
end
