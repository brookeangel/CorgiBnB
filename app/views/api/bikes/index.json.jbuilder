json.array! @bikes do |bike|
  json.extract! bike, :lat, :lng, :description, :id, :image_url, :people_comfort
end
