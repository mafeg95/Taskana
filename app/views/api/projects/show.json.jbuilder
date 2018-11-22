json.project do
  json.extract! @project, :id, :name, :description, :color, :column_ids
end

json.columns do
  @project.columns.each do |column|
    json.set! column.id do
      json.extract! column, :id, :name, :project_id
    end
  end
end
