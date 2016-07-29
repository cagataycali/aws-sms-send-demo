var Sender = require('aws-sms-send');
var config = {
  AWS: {
    accessKeyId: 'xxxxxxxxxx',
    secretAccessKey: 'xxxxxxxxxx',
    region: 'xxxxxxxxxx',
  },
  topicArn: 'xxxxxxxxxx',
};
var sender = new Sender(config);

// sender.createSubscribe('+905054146201');
// sender.sendSms('Sms body topic', 'Topic sms', true);
// sender.sendSms('Sms body direct', 'Topic sms', false, '+905054146201');
// TODO : @cagatay, please read doc.
