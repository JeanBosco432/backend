const express=require('express');
const nodemailer=require('nodemailer');
const mailtemplate=require('./mailtemplate');
const app=express();
const port=3000;
const cors=require('cors');


app.use(express.json());
app.use(cors());



  const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'bosco29962355977@gmail.com',
            pass:'ekjh qtdn ozeo zmdi'
        }
    });

app.post('/send-email',(req,res)=>{
    const {nom,email,message,note}=req.body;
    if(!nom||!email||!message){
        return res.status(400).json({success:false,error:true,message:'vous devez fournir votre email, laisser un message et une note'});
            
    }

  
const template= mailtemplate(message,note,nom)
    const mailOptions={
        from: email,
        to:'bosco29962355977@gmail.com',
            subject:'Nouveau avis soumis',
        html: template
    };

    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.error(error);
            res.status(500).json({success:false,error:true,message:'Error sending email'});
        }else{
            console.log('Email sent:'+info.response);
            res.status(200).json({success:true,error:false,message:"Email sent successfully"});
        }
    });
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});