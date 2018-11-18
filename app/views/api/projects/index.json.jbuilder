@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :name, :description
  end
end
