const express=require('express');
const mailtemplate=require('./mailtemplate');
const app=express();
const port=3000;
const cors=require('cors');
const{ Resend } = require('resend');
const dotenv=require('dotenv');
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(express.json());
app.use(cors());



  

app.post('/send-email',async(req,res)=>{
    const {nom,email,message,note}=req.body;
    if(!nom||!email||!message){
        return res.status(400).json({success:false,error:true,message:'vous devez fournir votre email, laisser un message et une note'});
            
    }


await resend.emails.send({
  from:"Mon portfolio <onboarding@resend.dev>",
  to:"jean-bosco.houndekon@etu.u-paris.fr",
  subject: 'nouveau avis reçu',
  html: mailtemplate(message,note,nom,email)
});
    res.status(200).json({success:true,message:'Email envoyé avec succès'});

});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})