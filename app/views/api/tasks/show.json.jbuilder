json.task do
  json.extract! @task, :id, :title, :body, :author_id, :column_id
end
