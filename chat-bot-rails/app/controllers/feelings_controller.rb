class FeelingsController < ApplicationController

  def show
    feels = Feeling.find_by(name: params[:id])
    feeling
    if !!feels 
      render json: feels
    else 
      render json: { error: 'feeling not found'}, status: :not_found
    end
  end
end
