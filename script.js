function isPalindrome(word) {
    // Iterate from the beginning of the string to the middle
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      // Find the corresponding index from the end
      const endIndex = word.length - 1 - startIndex;
      
      // Compare the characters
      if (word[startIndex] !== word[endIndex]) {
        return false; // If they don't match, it's not a palindrome
      }
    }
  
    return true; // If all characters match, it's a palindrome
  }
  
  // Test cases
  if (require.main === module) {
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("mom"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("abba"));
  
    console.log("");
  
    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("hi"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  