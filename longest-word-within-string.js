// A simple function to return the character length of the longest word in a provided string
function longestWordLength(str) {
  var words = str.split(" ");
  var maxLength = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  return maxLength;
}

longestWordLength("The quick brown fox jumped over the lazy dog"); // Returns 6
