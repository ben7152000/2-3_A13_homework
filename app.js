const express = require('express')
const app = express()
const PORT = 3000

// const dataFns = require('date-fns')
// const responseTime = require('response-time')

// app.use(responseTime((req, res , time) => {
//   const formatTime = dataFns.format(new Date (), 'yyyy-MM-dd HH:mm:ss')
//   console.log(`${formatTime} | ${req.method} from ${req.originalUrl} | total time : ${time} ms`)
// }))

function formatDate (req, res, next) {
  const date = new Date().toISOString().substr(0, 19).replace('T', ' ')
  const reqTime = Date.now()
  res.on('finish', () => {
    const cycleTime = Date.now() - reqTime
    console.log(`${date} | ${req.method} from ${req.originalUrl} | total time : ${cycleTime} ms`)
  })
  next () 
}

app.use(formatDate)

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.listen(PORT, console.log(`App running on port ${PORT}`))
