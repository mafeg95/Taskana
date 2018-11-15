# == Schema Information
#
# Table name: projects
#
#  id          :bigint(8)        not null, primary key
#  name        :string           not null
#  description :text             not null
#  team_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Project < ApplicationRecord
  validates :name, :team_id, presence: true, uniqueness: true
  validates :description, presence: true

  # team id will serve as user id for now
  belongs_to :user,
    primary_key: :id,
    foreign_key: :team_id,
    class_name: :User


end