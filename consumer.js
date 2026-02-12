const kafka = require('./kafka');

const consumer = kafka.consumer({ groupId: 'orders-group' });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({ topic: 'orders', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const data = JSON.parse(message.value.toString());

      console.log('Received:', {
        topic,
        partition,
        data,
      });

      // 🔥 process your message here
    },
  });
}

module.exports = { startConsumer };
