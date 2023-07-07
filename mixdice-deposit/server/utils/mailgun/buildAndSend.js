const sendMail = require('./sendMail');
const fs = require('fs');
const handlebars = require('handlebars');

module.exports = async (
  from,
  to,
  htmlData,
  subject,
  templateName = 'template.html'
) => {
  let html = fs.readFileSync(__dirname + '/' + templateName);
  let template = handlebars.compile(html.toString());
  let data = {
    from,
    to,
    html: template(htmlData),
    subject: subject || ''
  };
  try {
    await sendMail(data.to, data.from, data.html, data.subject);
  } catch (err) {
    console.log(err);
    throw new Error('An error occured while sending a mail');
  }
};
