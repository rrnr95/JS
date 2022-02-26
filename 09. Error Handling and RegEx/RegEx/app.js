// re means regular expression
// let re;

// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // g = global search

// console.log(re);
// console.log(re.source);

// // exec() - Return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// // match() - Returns result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// // search() - Returns index of first match or -1
// const str = 'Hey, Hello There';
// const result = str.search(re);
// console.log(result);

// // replace() - Returns new string with some or all matches
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

//------------------------------------------------------------

// PART 2 and 3

let re;

// Literal caracters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
re = /^h/i;         // Must start with 'h'
re = /world$/i;     // Must end with 'world'
re = /^h$/i;        // Must start and end with 'h'
re = /^h.llo$/i;    // Matches any character one time
re = /^h*llo$/i;    // Matches any character 0 or more times
re = /gre?a?y/i;    // Optional character
re = /gre?a?y\?/i;  // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;      // Must be an 'a' or an 'e'
re = /[GF]ay/;        // Must be a 'G' or a 'F'
re = /[^GF]ay/;       // Match anything but a 'G' or a 'F'
re = /^[GF]ay/;       // Must begin with a 'G' or a 'F'
re = /[A-Z]ray/;      // Match any uppercase letter
re = /[a-z]ray/;      // Match any lowercase letter
re = /[A-Za-z]ray/;   // Match any  letter
re = /[0-9][0-9]ray/; // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;      // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;    // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;     // Must occur at least {m} times

// Paretheses () - Grouping
re = /^([0-9]x){3}$/

// Shorthand Character Classes
re = /\w/;      // Word character - alphanumeric or _
re = /\w+/;     // + = one or more
re = /\W/;      // Non-Word character
re = /\d/;      // Match any digit
re = /\d+/;     // Match any digit 0 or more times
re = /\D/;      // Match any Non-digit
re = /\s/;      // Match whitespace char
re = /\S/;      // Match non-whitespace char
re = /Hell\b/i; // Word boundary

// Assertions
re = /x(?=y)/;  // Match x only if followed by y
re = /x(?!y)/;  // Match x only if NOT followed by y

// String to match
const str  = 'Hello World';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);