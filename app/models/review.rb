# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  number     :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  corgi_id   :integer
#

class Review < ActiveRecord::Base
  validates :body, :number, null: false
  validates :number, inclusion: 1..5
end
