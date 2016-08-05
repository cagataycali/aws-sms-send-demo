var Sender = require('aws-sms-send');
var config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxxxxxxxxx',
    region: 'xxxxxxxxxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxxxxxxxxx',
};
var sender = new Sender(config);

/* Create subscribe */
// sender.createSubscribe('+905054146201')
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(err) {
//    console.log(err)
// });

/* Send topic sms */
// sender.sendSms('Sms body topic', 'Topic sms', true)
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(err) {
//    console.log(err)
// });


/* Send direct sms */
// sender.sendSms('Sms body direct', 'Topic sms', false, '+905054146201')
// .then(function(response) {
//   console.log(response);
// })
// .catch(function(err) {
//    console.log(err)
// });
// TODO : All done!
