
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'MQTT_TOPIC';
var message = 'hello client';

client.on('connect',function(){
    setInterval(function(){
        client.publish(topic,message);
        console.log('Sent',message);
    },5000);
});
