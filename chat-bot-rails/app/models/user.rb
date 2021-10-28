class User < ApplicationRecord
    has_many :appointments
    has_many :robots, through: :appointments

    validates :username, uniqueness: true
    has_secure_password
end
