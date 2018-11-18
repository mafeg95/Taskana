class Api::ProjectsController < ApplicationController
  def create

    @project = Project.new(project_params)
    @project.team_id = current_user.id

    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    #
    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def index
    @projects = Project.all
    render :index
  end

  def destroy
    @project = Project.find(params[:id])
   #check for current_user.id == to project.user_id
    @project.destroy
    render :index
  end

  private

  def project_params
    params.require(:project).permit(:description, :name)
  end
end
