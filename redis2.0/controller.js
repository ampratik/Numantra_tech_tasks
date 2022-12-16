 let axios=require('axios');
const { json } = require('body-parser');
 let redis=require('redis');
 let DEFAULT_EXPIRATION=3600

 let redisClient=redis.createClient({ host: 'redis-11821.c305.ap-south-1-1.ec2.cloud.redislabs.com', port:11821, username: 'Pratik-free-database', password: 'I4a8g8Wj84NixNRrhb0oNWuKP5BPDkao' })

 //Successful connection to redis
redisClient.on('connect', () => {
    console.log('connected to redis successfully!');
})

//unsuccesfull connection to redis
redisClient.on('error', (error) => {
    console.log('Redis connection error :', error);
})

const demo = async (req, res) => {
  res.json("hiii from server side");
};

const photos = async(req,res) => {
  try {
    const albumId = req.query.albumId;
    redisClient.get('photos',async(error,data1)=>{
        if(error)
        console.error(error)
        if(data1!=null){
        return res.status(200).send({status:true,data:JSON.parse(data1)})
        }
        else{
            let result=await axios.get('http://jsonplaceholder.typicode.com/photos' ,
            {params :{albumId}} )
         
            redisClient.setEx('photos',DEFAULT_EXPIRATION,JSON.stringify(result.data))
         
             res
               .status(200)
               .send({
                 status: true,
                 message: "data found successfully from database",
                 data: result.data
               });
        }
    })
    
   
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = { demo ,photos};
