class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def render_error(model)
    render json: { errors: modele.errors.full_messages.join(',') }, status: 422 
  end
end
