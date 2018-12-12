class AddDetailsToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :completed, :boolean
    rename_column :tasks, :body, :description
  end
end
