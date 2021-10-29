class Chat < ApplicationRecord
    belongs_to :appointment
    has_many :complexUserMessages
    

    def self.recent_chat
        split_message = self.last.message.split(' ')
    end
   
end
