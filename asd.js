const func = (a, b) => {
  const aString = String(a)
  const bString = String(b)

  if(aString[aString.length-1] === bString[bString.length-1]) {
    console.log(true)
  }else {
    console.log(false)
  }
}

func(1111111119, 159)

const str = 'aacab'

console.log(str[2])