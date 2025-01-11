// import axios from "axios";

// export const FetchProducts=async()=>{
//     let response= await axios.get('https://cart-api.teamrabbil.com/api/product-list')
//     if(response.data.msg=='success'){
//         return response.data
//     }
//     else{
//         return []
//     }
// }
// export const FetchCartProducts=async()=>{
//     let header={'headers':{'token':sessionStorage.getItem('token')}}
//     let response= await axios.get('https://cart-api.teamrabbil.com/api/cart-list',header)
//     console.log(response)
//     if(response.data.msg=='success'){
//         return response.data
//     }
//     else{
//         return []
//     }
// }


// export const Login=async(email)=>{
//     let response= await axios.post('https://cart-api.teamrabbil.com/api/user-login', {UserEmail:email})
//     if(response.data.msg=='success'){
//         return response.data
//     }
//     else{
//         return []
//     }
// }

// export const EmailVerify=async(otp)=>{
//     try {
//         let email=sessionStorage.getItem('email')
//         console.log(email)
//         console.log(otp)
//         let response= await axios.post('https://cart-api.teamrabbil.com/api/verify-login',{UserEmail:email,OTP: otp})
//         console.log(response.data)
//         if(response.data.msg=='success'){
//             return response
//         }
//         else{
//             return []
//         }
//     } catch (error) {
//         console.log(error.toString())
//     }
   
// }

// export const AddToCart=async(id)=>{
//     try {
//         let header={'headers':{'token':sessionStorage.getItem('token')}}
//         let response= await axios.get(`https://cart-api.teamrabbil.com/api/create-cart/${id}`,header)
//         console.log(response.data)
//         if(response.data.msg=='success'){
//             return response.data
//         }
//         else{
//             return []
//         }
//     } catch (error) {
//         console.log(error.toString())
//     }
   
// }



// export const RemoveCart=async(id)=>{
//     try {
//         let header={'headers':{'token':sessionStorage.getItem('token')}}
//         let response= await axios.get(`https://cart-api.teamrabbil.com/api/remove-cart/${id}`,header)
//         console.log(response.data)
//         if(response.data.msg=='success'){
//             return response.data
//         }
//         else{
//             return []
//         }
//     } catch (error) {
//         console.log(error.toString())
//     }
   
// }

