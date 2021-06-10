ROUTES = []

File.open("input.txt", "r") do |f|
    f.each_line do |line|
      line_to_a = line.split(" ")
      ROUTES << {origin: line_to_a[0], destination: line_to_a[2], distance: line_to_a[4].to_i}
      ROUTES << {origin: line_to_a[2], destination: line_to_a[0], distance: line_to_a[4].to_i}
    end
end

def places_list(routes)
  places = []
  routes.each do |route|
    places << route[:origin] << route[:destination]
  end
  places
end

places = places_list(ROUTES).uniq!
