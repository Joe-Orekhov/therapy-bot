class Robot < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_one :feeling
end
