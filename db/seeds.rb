SF_COORDS = [
  [37, -122, "This corgi is the bomb.", "http://placecorgi.com/400/300"],
  [37.78, -122.21, "You'll never need another corgi.", "http://placecorgi.com/400/299"],
  [37.45, -122, "It only peed on my rug once.", "http://placecorgi.com/400/298"],
  [37, -122.01, "My dearest corgi.", "http://placecorgi.com/400/301"],
  [37.67, -122, "You know you want to rent my corgi.", "http://placecorgi.com/400/302"],
  [37, -122.29, "Can deliver.", "http://placecorgi.com/399/300"],
  [37.06, -122.76, "The luxury corgi of your dreams.", "http://placecorgi.com/398/300"],
  [37.81, -122.47, "If you won't rent this corgi you don't love corigs.", "http://placecorgi.com/397/300"],
  [37.22, -122.01, "I need the cash.", "http://placecorgi.com/401/300"],
  [37.44, -122.46, "Was a poodle at birth.", "http://placecorgi.com/402/300"],
  [37.35, -122.24, "You will love this luxurious corgi.", "http://placecorgi.com/403/300"],
]

SF_COORDS.each do |coord|
  Bike.create!({
    lat: coord[0],
    lng: coord[1],
    description: coord[2],
    image_url: coord[3],
    people_comfort: (1..100).to_a.sample
    })
end
