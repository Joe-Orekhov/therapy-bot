class Robot < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_one :feeling



    def robo_logic(word)
        byebug
        puts "#{word}"
    end
end
