// Match a Specific Word
// Example: "I love JavaScript" -> true; "I love javascript" -> false
const matchJavaScript = (string) => {
  if (typeof string === "string") {
    let pattern = /JavaScript/;
    let result = pattern.test(string);
    return result;
  } 
  if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};

// // Validate Email Address
// // Example: "test@example.com" -> true; "invalid-email" -> false
const validateEmail = (string) => {
  if (typeof string === "string") {
    let pattern = /.com/gi;
    let result = pattern.test(string);
    return result;
  }
   
  if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};

// Extract Numbers
// Example: "abc123def456" -> ["123", "456"]; "no numbers" -> []
const extractNumbers = (string) => {
  if (typeof string === "string") {
    let pattern = /(\d+)/g;
    let result = string.match(pattern);
    if (result == null) {
      return [];
    } else {
    return result;}
  }
   
  if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};


// // Replace Whitespace
// // Example: "Hello World" -> "Hello_World"; "a b c" -> "a_b_c"
const replaceWhitespace = (string) => {
  if ((typeof string === "string") && (string.includes(" ") == true)) {
    let result = string.replace(/ +/g, "_");
    return result;
  } 
  if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};
// Validate Phone Number
// Example: "(123) 456-7890" -> true; "123-456-7890" -> false
const validatePhoneNumber = (string) => {
  if (typeof string === "string") {
   let pattern = /^\(\d{3}\) \d{3}-\d{4}$/;
   let result = pattern.test(string);
    return result;}
  if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};

// Extract Hexadecimal Colors
// Example: "Colors: #FFF, #123ABC" -> ["#FFF", "#123ABC"]; "no colors" -> []
const extractHexColors = (string) => {
  if (typeof string === "string") {
    let pattern = /\#+[\w]{3,6}/g;
    let result = string.match(pattern);
      if (result == null) {
        return []
      } else {
        return result;
      }
}
   if (typeof string !== "string") {
    throw new Error('Input must be a string');
  }
};

// // Validate URL
// // Example: "https://example.com" -> true; "ftp://example.com" -> false
// const validateUrl = () => {};

// // Validate Dates
// // Example: "12/25/2023" -> true; "25/12/2023" -> false
// const validateDate = () => {};

// // Count Vowels
// // Example: "hello" -> 2; "xyz" -> 0
// const countVowels = () => {};

// // Extract Domain Names
// // Example: "test@example.com" -> "example.com"; "invalid" -> null
// const extractDomain = () => {};

// // Match HTML Tags
// // Example: "<div><p>Hello</p></div>" -> ["<div>", "<p>", "</p>", "</div>"]; "text" -> []
// const matchHtmlTags = () => {};

// // Find Capitalized Words
// // Example: "Hello World" -> ["Hello", "World"]; "no caps" -> []
// const findCapitalizedWords = () => {};

// // Match Repeated Words
// // Example: "This is is a test test" -> ["is is", "test test"]; "no repeats" -> []
// const matchRepeatedWords = () => {};

// // Validate Password
// // Example: "Password1" -> true; "password" -> false
// const validatePassword = () => {};

// // Match Unicode Characters
// // Example: "😀" -> ["😀"]; "abcABC" -> ["a", "b", "c", "A", "B", "C"]
// const matchUnicodeChars = () => {};

// // Validate Credit Card Numbers
// // Example: "1234-5678-9012-3456" -> true; "1234-5678" -> false
// const validateCreditCard = () => {};

// // Replace Non-Word Characters
// // Example: "hello world!" -> "hello-world-"; "Hello@World" -> "Hello-World"
// const replaceNonWordChars = () => {};

// // Split by Multiple Delimiters
// // Example: "a,b|c;d" -> ["a", "b", "c", "d"]; "one|two;three,four" -> ["one", "two", "three", "four"]
// const splitByDelimiters = () => {};

// // Check Multiline Start
// // Example: "hello\nworld\nhello" -> ["hello", "hello"]; "Hello\nworld" -> []
// const checkMultilineStart = () => {};

// // Validate U.S. Street Address
// // Example: "123 N Olive Lane\nCity, ST 12345" -> true; "123 Olive Lane, City ST 12345" -> false
// const validateUSAddress = () => {};

module.exports = {
  matchJavaScript,
  validateEmail,
  extractNumbers,
  replaceWhitespace,
  validatePhoneNumber,
  extractHexColors,
  // validateUrl,
  // validateDate,
  // countVowels,
  // extractDomain,
  // matchHtmlTags,
  // findCapitalizedWords,
  // matchRepeatedWords,
  // validatePassword,
  // matchUnicodeChars,
  // validateCreditCard,
  // replaceNonWordChars,
  // splitByDelimiters,
  // checkMultilineStart,
  // validateUSAddress,
};
