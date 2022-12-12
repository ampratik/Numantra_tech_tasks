const redis = require("redis");
const { promisify } = require("util");
const userModel=require('../model/userModel')

//Connection to Redis
const redisClient = redis.createClient({ host: 'redis-11821.c305.ap-south-1-1.ec2.cloud.redislabs.com', port:11821, username: 'Pratik-free-database', password: 'I4a8g8Wj84NixNRrhb0oNWuKP5BPDkao' });

//Successful connection to redis
redisClient.on('connect', () => {
    console.log('connected to redis successfully!');
})

//unsuccesfull connection to redis
redisClient.on('error', (error) => {
    console.log('Redis connection error :', error);
})

//Connection setup for redis
const SET_ASYNC = promisify(redisClient.SET).bind(redisClient);
const GET_ASYNC = promisify(redisClient.GET).bind(redisClient);



getUserUsingRedis=async (req,res)=>{
    try{
        let age=req.body.Gender
        
    let result=await GET_ASYNC(`${age}`)
    if(result){
      return res.status(200).send({status:true,message:"data come from redis cache", data:result})
}
   let res1=await userModel.find({Gender:age})
   res.status(200).send({status:true,message:"data come from mongodb cache", data:res1})
      await SET_ASYNC(age,JSON.stringify(res1))
  
}
catch(error){
    res.send(error.message)
}
}






module.exports={getUserUsingRedis}