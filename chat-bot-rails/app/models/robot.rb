class Robot < ApplicationRecord
    has_many :appointments
    has_many :users, through: :appointments
    has_one :feeling
    has_many :chats, through: :appointments


    # THIS FILTERS THE SENTENCE TO FIND KEY FEELING WORDS
    def self.feeling_search
        user_message = Chat.last.message
        split_message = user_message.split(' ')
        feeling_list = split_message.map {|message| Feeling.find_by(name: message)}

        selecting_feels = feeling_list.map do |feeling| 
            if !feeling
              return feeling
            end
          end

                if !!selecting_feels
                  randomizer = rand(3)
                    if feeling.idacator === 0
# .................................................................NEGATIVE
                      if randomizer === 1
                        return "I am sorry to hear you feel #{feeling.name}. How come you feel #{feeling.name}?"
                      elsif randomizer === 2
                        return "Oh No! Its the worst when you feel #{feeling.name}. Whats causing you to feel #{feeling.name}?"
                      elsif randomizer === 3
                        return "That bad huh? I hate it when I feel #{feeling.name}. What could make you feel better?"
                      else 
                        return "Wow, #{feeling.name} seemed pretty heavy. Could you expand?"
                      end
                    elsif feeling.idacator === 1
# .................................................................NEUTRAL
                      if randomizer === 1
                        return "Are you sure you feel just '#{feeling.name}'?"
                      elsif randomizer === 2
                        return "Could you expand what you mean by, #{feeling.name}?"
                      elsif randomizer === 3
                        return "I wish You would exapand what you mean by #{feeling.name}?"
                      else 
                        return "When I say, '#{feeling.name}', Im trying to avoid shareing my feelings... Im here for you could you be honest with me? How are you?"
                      end
                    elsif feeling.idacator === 2
# .................................................................POSITIVE
                      if randomizer === 1
                        return "Im glad to hear your feeling #{feeling.name}! Why do you feel #{feeling.name}?"
                      elsif randomizer === 2
                        return  "Thats good thats good! Whats causing you to feel #{feeling.name}?"
                      elsif randomizer === 3
                        return  "Music to my hypothetical ears! Why do you feel #{feeling.name}?"
                      else 
                        return "That #{feeling.name}!! HAHA, why though?"
                      end
                else
                  return false
                end
                    
                end
    end





end