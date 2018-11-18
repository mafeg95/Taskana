class RemoveIndexFromProjects < ActiveRecord::Migration[5.2]
  def change
    remove_index :projects, :team_id
  end
end
