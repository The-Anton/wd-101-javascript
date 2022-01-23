let isValidPassphrase = (text) => {
    // Fill your code in here, within the braces { ... } of the function `isValidPassphrase`.
    // We'll learn more about functions in the next level. For now, just write your code "inside" it.
  
    // First step. Let's split the text into different words. How do we do that?
    let words = text.split(" ");

    // How do we ensure that there are four words?
    let minimumFourWords = words.length >= 4;

    // Since the number of words in our passphrase is unknown, let's check each word,
    // regardless of how many there are.
    let minimumTwoCharsEach = words.every(word => word.length >= 2);
  
    // Finally, let's check if both conditions are true...
    let conditionsSatisfied = minimumFourWords && minimumTwoCharsEach;
  
    // Let's "return" the value from this function. We'll learn more about this in the next level.
    return conditionsSatisfied;
  }
  
  // Don't alter the `module.exports` line below - if you want to test your code, copy and
  // paste the function, starting from `let isValidPassphrase = ...` to the final closing
  // brace `}` into the browser's console, and call the function with different values.
  //
  // For example: `isValidPassphrase("this should be enough")`
  //
  // IMPORTANT: However, please make sure that you include this line (unchanged) in the JS
  // file that you upload to Pupilfirst LMS. It lets our automated tests "pick up" your
  // function and use it.
  module.exports = isValidPassphrase;
