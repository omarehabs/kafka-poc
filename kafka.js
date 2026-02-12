const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'], // change to kafka:29092 if inside docker
  // retry: {
  //   initialRetryTime: 300,
  //   retries: 10,
  // },
});

module.exports = kafka;
