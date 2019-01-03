json.team do
  json.extract! @team, :id, :name, :member_ids, :project_ids
end

@team.projects.each do |project|

  json.projects do
    json.set! project.id do
      json.extract! project, :id, :name, :description, :color, :column_ids, :team_id
    end
  end
  json.columns do
    project.columns.each do |column|

      json.set! column.id do
        json.extract! column, :id, :name, :project_id, :task_ids
      end
    end
  end
  json.tasks do
    project.columns.each do |column|

      column.tasks.each do |task|

        json.set! task.id do
          json.extract! task, :id, :title, :description, :completed, :author_id, :column_id, :due_date
        end
      end
    end
  end
end

# json.members do
#   json.extract! @members, :id, :username
# end
