const Mailgun = require('mailgun-js');
const config = require('../../../config/config');

// function to send user email given template and subject
const sendMail = async (toEmail, fromEmail, html, subject, attachmentData) => {
  console.log('** in mailSender', new Date().getTime());
  let mailSendPromise = new Promise((resolve, reject) => {
    // create new mailgun instance with credentials
    let mailgun = new Mailgun({
      apiKey: config.MAILGUN_API_KEY,
      domain: config.MAILGUN_DOMAIN_NAME
    });

    // setup the basic mail data
    let mailData = {
      from: fromEmail,
      to: toEmail,
      subject: subject || '',
      html,
      multipart: true
    };
    if (attachmentData) {
      let attachment = new mailgun.Attachment(attachmentData);
      mailData.attachment = attachment;
    }
    // send your mailgun instance the mailData
    mailgun.messages().send(mailData, (err, body) => {
      if (err) {
        console.log(err);
        reject('Mailgun sending error: ', err);
      } else {
        console.log('proposal sent via Mailgun to', mailData.to);
        resolve(body);
      }
    });
  });
  return mailSendPromise;
};

module.exports = sendMail;
