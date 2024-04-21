// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case,
// and spacing.

// We'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same
// case (lower or upper case) in order to check for palindromes.

function removePunctuation(str){
  return str.replace(/[\W_]/g,"").toLocaleLowerCase()
}

function palindrome(str){
  let tmp = removePunctuation(str)
  for(let i = 0, j = tmp.length-1; i < j; i++, j--){
    if(tmp[i] != tmp[j])
      return false
  }
  return true
}

let ch = "_eye"
console.log(removePunctuation(ch))
console.log(palindrome(ch))