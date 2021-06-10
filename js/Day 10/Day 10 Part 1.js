const INPUT_STRING = "1113222113";
const ITERATIONS = 40;

const look_and_say = (str) => {
    let result_string = "";
    let counter = 1;
    for(idx = 0; idx < str.length; idx++){
        if(str[idx] == str[idx+1]){
            counter += 1;
        }
        else{
            result_string = result_string.concat(`${counter}${str[idx]}`);
            counter = 1;
        }
    }
    return result_string
};

let result_string = INPUT_STRING;
for(i = 0; i < ITERATIONS; i++) {
    result_string = look_and_say(result_string);
}

console.log(result_string.length);