class RobotsController < ApplicationController

    require 'rest-client'


  def word_search


    byebug

    partOfSpeechHash = {}
    user_input = params[:user_input]

      user_input.split(' ').map { |t| 
        url = "https://api.dictionaryapi.dev/api/v2/entries/en/#{t}"
        json_resp = RestClient.get(url)
        hash = JSON.parse(json_resp)
        partOfSpeechHash[hash[0]["meanings"][0]["partOfSpeech"]] = t
      }

  
  end

end
