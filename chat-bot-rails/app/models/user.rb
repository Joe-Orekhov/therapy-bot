class User < ApplicationRecord
    has_many :appointments
    has_many :robots, through: :appointments

    # validates :password_confirmation, presence: true
    
    validates :password, presence: true
    validates :username, uniqueness: true, presence: true
    has_secure_password
end
