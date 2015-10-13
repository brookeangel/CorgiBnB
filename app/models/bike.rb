# == Schema Information
#
# Table name: bikes
#
#  id             :integer          not null, primary key
#  description    :text
#  lat            :float            not null
#  lng            :float            not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  image_url      :string
#  people_comfort :integer
#

class Bike < ActiveRecord::Base
  validates :lat, :lng, presence: true


  def self.in_bounds(bounds, humanBounds)
    sql_bounds = {
      swlat: bounds["southWest"]["lat"].to_f,
      swlng: bounds["southWest"]["lng"].to_f,
      nelat: bounds["northEast"]["lat"].to_f,
      nelng: bounds["northEast"]["lng"].to_f,
      minpeople: humanBounds["min"].to_i,
      maxpeople: humanBounds["max"].to_i
    }

    Bike.where(<<-SQL, sql_bounds)
      (bikes.lng BETWEEN :swlng AND :nelng) AND
      (bikes.lat BETWEEN :swlat AND :nelat) AND
      (bikes.people_comfort BETWEEN :minpeople AND :maxpeople)
    SQL
  end

end
