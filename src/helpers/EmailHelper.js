
const emailjs = require('emailjs-com');

const credentials = {
  service_id: 'service_zmrpsgk',
  template_id: 'template_zfv00oa',
  user_id: 'bIChngExUJenTbnv5',
};

const EmailHelper = {
  registerUser: async (email, username) => {
    try {
      const response = await emailjs.send(
        credentials.service_id,
        credentials.template_id,
        {
          to_email: email,
          message: `Usuario ${username} creado correctamente, utilice este usuario y la contraseña que ingresó para entrar a la plataforma`,
        },
        credentials.user_id
      );
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  },

  confirmAccount: async (email, username, password) => {
    try {
      const response = await emailjs.send(
        credentials.service_id,
        credentials.template_id,
        {
          to_email: email,
          message: `Usuario ${username} creado correctamente, utilice la contraseña ${password}`,
        },
        credentials.user_id
      );
      console.log('Email sent successfully:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
};

module.exports = EmailHelper;

