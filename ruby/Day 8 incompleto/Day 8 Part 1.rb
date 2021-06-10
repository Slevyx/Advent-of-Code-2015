acc = 0

File.readlines('input.txt').each do |line|
  line.chomp!
  acc += (line.length - eval(line).length)
end

p acc