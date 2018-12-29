json.partial! 'api/teams/team', team: @team

json.members do
  json.extract! @members, :id, :username
end
