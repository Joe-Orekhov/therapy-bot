class FeelingsController < ApplicationController

  def show
      feels = Feeling.find_by(name: params[:id])
        if !!feels 
          render json: feels
        end
  end
end
