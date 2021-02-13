const express = require('express')
const app = express()

const dataFns = require('date-fns')
const responseTime = require('response-time')

const PORT = 3000

app.use(responseTime((req, res , time) => {
  const formatTime = dataFns.format(new Date (), 'yyyy-MM-dd HH:mm:ss')
  console.log(`${formatTime} | ${req.method} from ${req.originalUrl} | total time : ${time} ms`)
}))

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
