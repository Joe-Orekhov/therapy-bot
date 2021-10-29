class RobotsController < ApplicationController

    require 'rest-client'


  def word_search
    user_split_message = Chat.recent_chat
    robo_responce = Robot.feeling_search
    partOfSpeechHash = {}

    # user_split_message.map { |t| 
    #   url = "https://api.dictionaryapi.dev/api/v2/entries/en/#{t}"
    #   json_resp = RestClient.get(url)
    #   hash = JSON.parse(json_resp)
    #   partOfSpeechHash[hash[0]["meanings"][0]["partOfSpeech"]] = t
    #   ComplexUserMessage.create(message: partOfSpeechHash, chat_id: 1)
    # }

    if !robo_responce
      randomizer = rand(12)
      rando_Splito = rand(4)
      if randomizer === 1
        hack_response = "Could you expand on '#{user_split_message.drop(2).join(' ')}'?"
      elsif randomizer === 2
        hack_response = "Yeah that sounds very troubling... Could you explain what you mean by, #{user_split_message.drop(3).join(' ')}"
      elsif randomizer === 3
        hack_response = "What do you mean by '#{user_split_message.drop(4).join(' ')}'"
      elsif randomizer === 4
        hack_response = "Could you expand what you mean?"
      elsif randomizer === 5
        hack_response = "No, no, of cource. I agree that would make me feel the same way."
      elsif randomizer === 6
        hack_response = "How does #{user_split_message.drop(4).join(' ')} make you feel?"
      elsif randomizer === 7
        hack_response = "I can't believe they would #{user_split_message.drop(2).join(' ')}. How does that make you feel?"
      elsif randomizer === 8
        hack_response = "How offten would you say you #{user_split_message.drop(3).join(' ')}? And why?"
      elsif randomizer === 9
        hack_response = "Would mind expanding you thought prosses?"
      elsif randomizer === 10
        hack_response = "Trust me I can see how #{user_split_message.reverse.drop(4).join(' ')} would make you feel. Are you at lest trying to move past it?"
      elsif randomizer === 11
        hack_response = "Yeah that doesnt make since, '#{user_split_message.drop(5).join(' ')}'. What do you mean by '#{user_split_message.pop(3)}'?"
      elsif randomizer === 12
        hack_response = "My mother use to say '#{user_split_message.drop(3).join(' ')}' all the time. How does that effect you?"
      else
        hack_response = "Im not quite fallowing could you explain some more?"
      end
      
    else 
      chat2 = Chat.create(appointment_id: User.first.id, is_user: false, message: robo_responce )
      render json: true, status: :ok
    end
    chat2 = Chat.create(appointment_id: User.first.id, is_user: false, message: hack_response )
  end

    

end
