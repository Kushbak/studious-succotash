const fs = require('fs')
// CRUD  - Create Read Update Delete

exports.addUser = (user) => {
  const data = fs.readFileSync('./text.txt')
  if(!data) throw data
  
  const users = JSON.parse(data.toString())
  users.push(user)

  fs.writeFileSync('./text.txt', JSON.stringify(users))
}

exports.getUsers = () => {
  const data = fs.readFileSync('./text.txt')
  if(!data) throw data
  const users = JSON.parse(data.toString())

  return users
}

exports.updateUser = (username, userData) => {
  const data = fs.readFileSync('./text.txt')
  if(!data) throw data
  const users = JSON.parse(data.toString())

  const updatedUsers = users.map(item => {
    if(item.username === username) return userData
    return item
  })

  fs.writeFileSync('./text.txt', JSON.stringify(updatedUsers))
}

exports.deleteUser = (username) => {
  const data = fs.readFileSync('./text.txt')
  if(!data) throw data
  const users = JSON.parse(data.toString())

  const updatedUsers = users.filter(item => {
    return item.username !== username
  })

  fs.writeFileSync('./text.txt', JSON.stringify(updatedUsers))
}
