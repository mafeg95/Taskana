@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :name, :description, :color, :team_id, :column_ids
  end
end
