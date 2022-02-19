//this converts everything to lowercase then replaces whatever that isn an alphabet or number with an empty space
// then splits,reverses the string and merge 
//finally check if they are thesame


const isPalindrome = s => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi,'');
  return s === s.split('').reverse().join('')
}