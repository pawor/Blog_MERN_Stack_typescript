import { Twilio } from 'twilio'

const accountSid = `${process.env.TWILIO_ACCOUNT_SID}`;
const authToken = `${process.env.TWILIO_AUTH_TOKEN}`;
const from = `${process.env.TWILIO_PHONE_NUMBER}`;
const client = new Twilio(accountSid,authToken)

export const sendSms = (to:string,body:string,txt:string) => {
    try{
        client.messages
        .create({
            body:`BlogTabby ${txt} - ${body}`,
            from,
            to
        })
        .then(message => console.log(message.sid));
    }catch (err){
        console.log(err)
    }
}

client.messages
    .create({
        body:'This is the ship that made the Kessel Run in fourteen parsecs?',
        from:'+15017122661',
        to:'+15558675310'
    })
    .then(message => console.log(message.sid));