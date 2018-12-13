class ChangeDateColumnInTasks < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :due_date
    add_column :tasks, :due_date, :date
  end
end
