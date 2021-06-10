INPUT_STRING = "1113222113"
ITERATIONS = 50

def look_and_say(str)
    result_string = ""
    counter = 1
    (0...str.length).each do |idx|
        if(str[idx] == str[idx+1])
            counter += 1
        else
            result_string << "#{counter}#{str[idx]}"
            counter = 1
        end
    end
    return result_string
end

result_string = INPUT_STRING
ITERATIONS.times {
    result_string = look_and_say(result_string)
}

p result_string.length
