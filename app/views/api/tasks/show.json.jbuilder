json.task do
  json.extract! @task, :id, :title, :description, :author_id, :completed, :column_id
end
