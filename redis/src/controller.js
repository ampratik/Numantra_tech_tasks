const axios=require('axios')


// const photos= async (req,res)=>{
//     try{
//      const albumId=req.query.albumId
//      const data= await axios.get('http://jsonplaceholder.typicode.com/photos' ,{param:{albumId}})
//      res.status(200).json({status:true,message:"data found successfully from database" ,data:data})
// }catch(error){
//     console.log(error.message)
//     res.status(400).json(error.message)
// }
// }


const demo=async(req,res)=>{
res.send("hii from server side")
}







module.exports={photos,demo}


