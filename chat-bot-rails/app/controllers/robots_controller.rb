class RobotsController < ApplicationController

    require 'rest-client'


  def word_search
    partOfSpeechHash = {}
    user_input = params[:user_input]
      user_input.split(' ').map { |t| 
        url = "https://api.dictionaryapi.dev/api/v2/entries/en/#{t}"
        json_resp = RestClient.get(url)
        hash = JSON.parse(json_resp)
        partOfSpeechHash[t] = hash[0]["meanings"][0]["partOfSpeech"]
      }
    if !!partOfSpeechHash
      render json: partOfSpeechHash, status: :accepted
    else
      render json: {error: "Unknown word"}, status: :unprocessable_entity
    end
  end

end
