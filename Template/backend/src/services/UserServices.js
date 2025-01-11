// import  UserModel from '../models/UserModel.js';
// import SendEmail  from '../utilities/emailUtility.js';
// import { TokenEncode } from '../utilities/tokenUtility.js';
// import CustomerProfileModel from '../models/CustomerProfileModel.js';
// export const LoginServices= async (req, res)=>{

//     try {
//         let email= req.params.email;
//         let code=Math.floor(100000+Math.random()*900000);
//         let EmailTo = email;
//         let EmailText=` Your Verification otp is ${code}` ;
//         let EmailSubject='OTP Verification';
//         await SendEmail(EmailTo,EmailText,EmailSubject)

//         await UserModel.updateOne({email:email},{$set:{otp:code}},{upsert: true});

//         return {status:"success", message:"6 Digit OTP has been send"}

//     } catch (error) {
//         return {status:"fail", message:"failed "}
//     }
    

// }

