class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def create
    @task = Task.new(task_params)
    @task.column_id = params[:column_id]
    @task.author_id = current_user.id
    if @task.save
      render :show
    else

      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
      render :show
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy
    render :show
  end

  private

  def task_params
    params.require(:task).permit(:title, :body, :due_date)
  end
end
