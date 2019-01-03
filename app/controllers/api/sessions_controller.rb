class Api::SessionsController < ApplicationController
  def create #includes teams
    @user = User.includes(:projects).find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    debugger
    if @user
      @team = @user.teams.first
      log_in(@user)
      render 'api/users/show'
    else
      render json: ['The username or password is not correct'], status: 401
    end
  end

  def destroy
    @user = current_user
    @team = @user.teams.first
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['Nobody is signed in'], status: 404
    end
  end
end
