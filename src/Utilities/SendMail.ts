import Mailgen from 'mailgen';
import nodemailer from 'nodemailer'

export const sendEmail = async (email: string ,  subject: string ,  mailgenContent: Mailgen.Content) => {
  // Initialize mailgen instance with default theme and brand configuration
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Joydeep Debnath", 
      link: "youtube.com", // in this you have to enter your website email
    },
  });

  const emailTextual = mailGenerator.generatePlaintext(mailgenContent);

  // Generate an HTML email with the provided contents
  const emailHtml = mailGenerator.generate(mailgenContent);

  // Create a nodemailer transporter instance which is responsible to send a mail
  const transporter = nodemailer.createTransport({
    host:"Joydeep", // Enter Your Name 
    service: 'Gmail',
    port:456,
    secure:true,
    auth: {
        user: "fakegamil32@gmail.com", 
        pass:"coinpjqbzbhwfjbl",  
    
    },
  });

  const mail = {
    from: `Joydeep Debanth   <fakegamil32@gmail.com>`, // We can name this anything. The mail will go to your Mailtrap inbox
    to: email, // receiver's mail
    subject: subject, // mail subject
    text: emailTextual, // mailgen content textual variant
    html: emailHtml, // mailgen content html variant
  };

  try {
    await transporter.sendMail(mail)  
  } catch (error) {
    console.log(
      "Email service failed silently. Make sure you have provided your Valid Details On .env file "
    );
    console.log("Error: ", error);

  }
};



export const WelcomeEmailSend = (name:string, redirectLink:string) => {
  const websiteUrl = "http"
  const websiteName = "Tripura Ecom "
  return {
    body: {
      name:`${name}`,
      intro: `<h3 style=color:#525f7f>Welcome to our app ${name} ! We're very excited to have you on board</h3>.`,
      action: {
        instructions:` <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thanks for submitting your account information. You&#x27;re now ready to make live orders in our website!</p>

        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">You can access Your Account from The Website</p>

        <a href=${websiteUrl} style="background-color:#656ee8;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;display:inline-block;width:100%;padding:10px 10px 10px 10px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:15" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">View Your Account</span><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>

        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />

        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">You havn't finished your email verification yet <!-- --> <a href=${websiteUrl} style="color:#556cd6;text-decoration:none" target="_blank">click here to verify email </a>.</p>

        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Once you&#x27;re verify email, you can recive the order conformation email <!-- -->.</p>


        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">— ${websiteName} </p>
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">${websiteName} Agartala Tripura West </p>
`,
        button: {
          
          color: "#525f7f", // Optional action button color
          text: "Thank You ",
          // link: verificationUrl,
          link:redirectLink
        },
      },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };
};




export const  emailVerificationEmailProducer= (name:string , resetLink:string ) => {
  const websiteName = "Tripura Ecom "

  return {
    body: {
      name:`${name}`,
      intro: `<h3 style=color:#525f7f>Please verify your email</h3>.`,
      action: {
        instructions:` <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thanks you for using our services </p>

        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Please verify your email from the given link before expire </p>

        <a href=${resetLink} style="background-color:#656ee8;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;display:inline-block;width:100%;padding:10px 10px 10px 10px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:15" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">Verify Email</span><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>

        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />


        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Once you&#x27;re verify email, you can recive the order conformation email <!-- -->.</p>


        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">— ${websiteName} </p>
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">${websiteName} Agartala Tripura West </p>`,
        button: {
          
          color: "#525f7f", // Optional action button color
          text: "Thank You ",
          link:resetLink
        },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  }
};
}



export const  passwordResetEmail= (name:string , resetLink:string ) => {
  const websiteName = "Tripura Ecom "

  return {
    body: {
      name:`${name}`,
      intro: `<h3 style=color:#525f7f>Please reset your password</h3>.`,
      action: {
        instructions:` <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thanks you for using our services </p>

        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Please reset your password in link below</p>

        <a href=${resetLink} style="background-color:#656ee8;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;display:inline-block;width:100%;padding:10px 10px 10px 10px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:15" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">Reset Your Password</span><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>

        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />


        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">if you reset your password you can restart your services <!-- -->.</p>


        <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">— ${websiteName} </p>
        <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
        <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">${websiteName} Agartala Tripura West </p>`,
        button: {
          
          color: "#525f7f", // Optional action button color
          text: "Thank You ",
          link:resetLink
        },
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  }
};
}


// export const WelcomeEmailSend = (name:string, redirectLink:string) => {
//   const websiteUrl = "http"
//   const websiteName = "Tripura Ecom "
//   return {
//     body: {
//       name:`${name}`,
//       intro: `<h3 style=color:#525f7f>Welcome to our app ${name} ! We're very excited to have you on board</h3>.`,
//       action: {
//         instructions:` <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
//         <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Thanks for submitting your account information. You&#x27;re now ready to make live orders in our website!</p>

//         <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">You can access Your Account from The Website</p>

//         <a href=${websiteUrl} style="background-color:#656ee8;border-radius:5px;color:#fff;font-size:16px;font-weight:bold;text-decoration:none;text-align:center;display:inline-block;width:100%;padding:10px 10px 10px 10px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%;mso-text-raise:15" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:7.5px">View Your Account</span><span><!--[if mso]><i style="letter-spacing: 10px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a>

//         <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />

//         <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">You havn't finished your email verification yet <!-- --> <a href=${websiteUrl} style="color:#556cd6;text-decoration:none" target="_blank">click here to verify email </a>.</p>

//         <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">Once you&#x27;re verify email, you can recive the order conformation email <!-- -->.</p>


//         <p style="font-size:16px;line-height:24px;margin:16px 0;color:#525f7f;text-align:left">— ${websiteName} </p>
//         <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e6ebf1;margin:20px 0" />
//         <p style="font-size:12px;line-height:16px;margin:16px 0;color:#8898aa">${websiteName} Agartala Tripura West </p>
// `,
//         button: {
          
//           color: "#525f7f", // Optional action button color
//           text: "Thank You ",
//           // link: verificationUrl,
//           link:redirectLink
//         },
//       },
//       outro:
//         "Need help, or have questions? Just reply to this email, we'd love to help.",
//     },
//   };
// };

