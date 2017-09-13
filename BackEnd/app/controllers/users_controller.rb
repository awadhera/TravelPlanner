class UsersController < ApplicationController

  respond_to :json
  skip_before_action :verify_authenticity_token
  before_filter :authenticate_user_from_token!, only: [:show]
  before_filter :authenticate_user!, only: [:show]

  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :ok
      return
    else
      warden.custom_failure!
      render :json=> user.errors, :status=>422
    end
  end

  def show
    respond_with current_user
  end

  def index
      respond_with search(params)
  end

  def search(params = {})
    usermatch = User.search_equal_email(params[:email]) if params[:email]
    if(usermatch)
      return usermatch;
    else
      return nil;
    end
  end

  def user_params
      params.require(:data).require(:attributes).permit(:email, :password, :password_confirmation)
  end

end
