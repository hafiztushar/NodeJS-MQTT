//subscriber

var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1234');
var topic = 'MQTT_TOPIC';

client.on('message',function(topic,message){
    message = message.toString();
    console.log(message);
});

client.on('connect',function(){
    client.subscribe(topic);
});