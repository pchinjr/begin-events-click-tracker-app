const arc = require('@architect/functions')
const data = require('@begin/data')
const table = 'interactions'
const key = 'clicks'

async function myEvent(event) {
  let { name } = event
  await data.incr({
    table,
    key,
    prop: name
  })
  console.log(event)
  return
}

exports.handler = arc.events.subscribe(myEvent)
