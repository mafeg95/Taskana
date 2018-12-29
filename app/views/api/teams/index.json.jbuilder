@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :name, :project_ids, :member_ids
    # if @current_team.id == team.id
    #   @members.each do |member|
    #     json.set! member.id do
    #       json.extract! member, :id, :username
    #     end
    #   end
    # end
  end
end
