module.exports = function check(str, bracketsConfig) {
 for (let i = str.length; i >= 0; i--) {
    for (let j=0; j< bracketsConfig.length; j++) {
      let bracket = bracketsConfig[j].join('')
      if (str.includes(bracket)) {
        str = str.replace(bracket, '')
      }
    }
  }
  return str === '' ? true: false;
}




