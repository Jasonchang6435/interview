// 字符串去空格
const split = function(code) {
  return code.split('\t').join(' ').split(' ').filter(e=>e.trim() != '')
}

const test_split = function() {
  let a = 'a	b ccc   d'
  console.log(split(a))
}