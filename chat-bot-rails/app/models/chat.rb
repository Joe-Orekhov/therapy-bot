class Chat < ApplicationRecord
    belongs_to :appointment
    has_many :complexUserMessages
    
    validates :message, presence: true

    def self.recent_chat
        split_message = self.last.message.split(' ')
    end
   
end
