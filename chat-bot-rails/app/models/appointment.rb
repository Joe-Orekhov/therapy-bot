class Appointment < ApplicationRecord
    has_many :chats 
    belongs_to :user
    belongs_to :robot
end
