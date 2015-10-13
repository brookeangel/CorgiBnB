json.array! @reviews do |review|
  json.extract! review, :corgi_id, :body, :number
end
