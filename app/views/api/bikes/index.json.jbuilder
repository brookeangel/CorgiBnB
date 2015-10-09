json.array! @bikes do |bike|
  json.extract! bike, :lat, :lng, :description
end
