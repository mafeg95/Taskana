@projects.each do |project|
  json.set! project.id do
    json.extract! project :id, :description
  end
end
