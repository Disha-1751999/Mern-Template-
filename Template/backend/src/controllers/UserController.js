// import {LoginServices, OtpVerificationServices, SaveProfileServices, ReadProfileServices} from '../services/UserServices.js';

// export const Login= async (req, res)=>{
//     let result= await LoginServices(req);
//     res.status(200).json(result);
// }

// export const OtpVerification= async (req, res)=>{
//     let result= await OtpVerificationServices(req);
   
//     if(result.status=='success'){
//         let cookieOption={expires:new Date(Date.now()+24*6060*1000), httpOnly:false}
//         res.cookie('token',result['token'],cookieOption);
//         res.status(200).json(result);  
//     }else{
//         res.status(400).json({"message":result['message']});
//     }
    
// }
