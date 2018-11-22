class Api::ColumnsController < ApplicationController
  before_action :require_logged_in

  def create
    @column = Column.new(column_params)
    @column.project_id = params[:project_id]
    if @column.save
      render :show
    else
      render json: @column.errors.full_messages, status: 422
    end
  end

  # def index
  #   @project = Project.find(params[:project_id])
  #   @columns = @project.columns
  #   render 'api/projects/show'
  # end

  def update
    @column = Column.find(params[:id])
    if @column.update(column_params)
      render :show
    else
      render json: @column.errors.full_messages, status: 422
    end
  end

  def destroy
    @column = Column.find(params[:id])
    @column.destroy
    render :show
  end

  private

  def column_params
    params.require(:column).permit(:name)
  end

end