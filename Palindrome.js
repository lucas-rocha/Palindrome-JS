function isPalindrome(string) {
  let re = /[\W_]/g
  let str = string.toLowerCase().replace(re, '')
  let len = str.length
  for(let i = 0; i < len / 2; i++) {
    if(str[i] !== str[len - 1 - i]) {
      return false
    }
  }
  return true
}

console.log(isPalindrome('Luz azul')) // Deve retornar true
console.log(isPalindrome('O lobo ama o bolo'))  // Deve retornar true
console.log(isPalindrome('Oi')) // Deve retornar false
