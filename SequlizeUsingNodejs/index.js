const Sequelize=require('sequelize');
const sequelize=new Sequelize('sequelize_data','root','password',{
    dialect:'mysql'
});

sequelize.authenticate().then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log(err.message)
})


const User=sequelize.define('user',{
    userId:{
     type:Sequelize.DataTypes.INTEGER,
     primaryKey:true,
     autoincrement:true
    },
    userName:{
        type:Sequelize.DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.DataTypes.STRING,
    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:21
    }
},{
    freezTableName:true,
    timeStamps:false
})

User.sync().then((data)=>{
    console.log('table and model synced successsfully!');
})
.catch((err)=>{
    console.log(err.message)
})