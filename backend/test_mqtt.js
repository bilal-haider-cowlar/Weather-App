const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://test.mosquitto.org')

client.on('connect', function () {
  client.subscribe('bilal', function (err) {
    if (!err) {
      client.publish('bilal', 'Hello mqtt from node server')
    }
  })
})

client.on('message', function (topic, message) {
  console.log(topic)
  console.log("This is the same client that is publishing data. Data:",message.toString())
  client.end()
})