class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :team_id, null: false
      t.timestamps
    end
    add_index :projects, :team_id, unique: true
  end
end
