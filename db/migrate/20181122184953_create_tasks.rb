class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.text :body
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :assignee_id
      t.datetime :due_date
      t.integer :column_id, null: false
      t.timestamps
    end
    add_index :tasks, :author_id
    add_index :tasks, :assignee_id
    add_index :tasks, :column_id
  end
end
