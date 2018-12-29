class Api::TeamsController < ApplicationController
  before_action :require_logged_in

  def create
    @team = Team.new(team_params)
    Membership.create!(team_id: @team.id, member_id: current_user.id)
    @members = team.members
    if @team.save
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def update
    @team = Team.find(params[:id])
    if @team.update(team_params)
      render :show
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def destroy #remove?

  end

  def show
    @team = Team.includes(projects: [:columns]).find(params[:id])
    render :show
  end

  def index
    @teams = current_user.teams #figure out how to optimize later

    #@current_team = Team.find(params[:id]) #make sure to be able to have secure routes so that only a member can access the route.
    #@members = current_team.find(params[:id]).members
    render :index
  end

  private

  def team_params
    params.require(:team).permi(:name)
  end

end
