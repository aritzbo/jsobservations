/*
Converting a string title and returning the hyphenated version of the URL for a more accesible approach. Following the usual and conventional requirements:
-- The input is a string with spaces and title-cased words
-- The output is a string with the spaces between words replaced by a hyphen (-)
-- The output should be all lower-cased letters
-- The output should not have any spaces
*/

function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(obj => {return obj !== ""})
    .join("-")
    .toLowerCase()
}

urlSlug("Hold The Door") // Returns "hold-the-door"
