let match_suffix = num => {

    // convert number to string
    let number_to_string = num.toString();

    // convert string to array
    let string_to_array = number_to_string.split("");

    // accessing the last element and returning an integer
    let final_digit = parseInt(string_to_array[string_to_array.length - 1]);

    // add the correct suffix
    switch (final_digit) {
        
        case 1:
            string_to_array.push("st");
            break;
        case 2:
            string_to_array.push("nd");
            break;
        case 3:
            string_to_array.push("rd");
            break;
        default:
            string_to_array.push("th");
    }

    // convert back to string
    let matched_suffix = string_to_array.join("");

    return matched_suffix;
}

console.log(match_suffix(101)); // 101st
console.log(match_suffix(2));   // 2nd
console.log(match_suffix(33));  // 33rd
console.log(match_suffix(54));  // 54th