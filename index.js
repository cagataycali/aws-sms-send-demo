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

// sender.init('+905054146201');
// sender.createSubscribe('+905054146201').then(function(response) {
//   console.log(response);
// })
//
// sender.sendSms('Sms body topic', 'Topic sms', true).then(function(response) {
//   console.log(response);
// });
// sender.sendSms('Sms body direct', 'Topic sms', false, '+905054146201').then(function(response) {
//   console.log(response);
// })
// TODO : All done!
