class Api::ProjectsController < ApplicationRecord
  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])
    if @project.update(project_params)
      render json: 'api/projects/show'
    else
      render json: @project.errors.full_messages, status: 422
    end
  end

  def show
    @project = Project.find(params[:id])
    render :show
  end

  def index
    @projects = current_user.projects
    render :index
  end

  def destroy
    @project = Project.find(params[:id])
   #check for current_user.id == to project.user_id
    @project.destroy
    render json: 'api/projects/show'
  end

  private

  def project_params
    params.require(:project).permit(:description, :name)
  end
end
