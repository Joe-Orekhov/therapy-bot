class RobotsController < ApplicationController

    require 'rest-client'


  def word_search
    user_split_message = Chat.recent_chat
    user_responce = Robot.feeling_search
    partOfSpeechHash = {}

    user_split_message.map { |t| 
      url = "https://api.dictionaryapi.dev/api/v2/entries/en/#{t}"
      json_resp = RestClient.get(url)
      hash = JSON.parse(json_resp)
      partOfSpeechHash[hash[0]["meanings"][0]["partOfSpeech"]] = t
      ComplexUserMessage.create(message: partOfSpeechHash, chat_id: 1)
    }
    if !user_responce
      ender json: "NO FEELINGS"
      # randomizer = rand(20)
    else 
      puts "true"
      byebug
      render json: user_responce
    end
  end

    

end
