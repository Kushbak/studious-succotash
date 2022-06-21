const path = require('path') // Импортирование библиотеки path
const http = require('http')

// /orders
// /cart

const server = http.createServer((request, response) => {
  if (request.method === 'GET') {
    switch (request.url) {
      case '/':
        response.writeHead(200, {
          'Content-Type': 'text/html; charset=utf8'
        })

        response.end('Вы на ГЛАВНОЙ СТРАНИЦЕ!')
        break
      case '/orders':
        // response.write('Застряли')
        response.writeHead(200, {
          'Content-Type': 'text/html; charset=utf8'
        })
        response.end('Вы на странице товаров')
        break
      case '/cart':
        response.writeHead(200, {
          'Content-Type': 'text/html; charset=utf8'
        })
        response.end('Вы на странице Корзины')
        break
      case '/api/cart':
        response.writeHead(200, {
          'Content-Type': 'text/json'
        })
        const users = [
          { name: 'Kushbak' }, 
          { name: 'Kushbak2' }
        ]
        response.end(JSON.stringify(users))
        break
      default:
        response.writeHead(200, {
          'Content-Type': 'text/html; charset=utf8'
        })
        response.end('404. Страница не найдена(((')
    }
  } else if(request.method === 'POST') {
    const body = []
    response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'Access-Control-Allow-Origin': 'localhost:3000',
    })
    request.on('data',(data) => {
        body.push(Buffer.from(data))
    })
    request.on('end', () => {
        const message = body[0].toString()

        response.end(`
            <h1>Ваше сообщение: ${message}</h1>
        `) 
    })
}
})

server.listen(3000, () => {
  console.log('Server started')
})


// http://localhost:3000/orders
// /orders => endpoint