const { sendMessage } = require('./producer');

sendMessage('orders', {
  orderId: 342,
  userId: 45,   
  total: 99.5 
});

 