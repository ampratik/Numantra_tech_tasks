const { UserList,MovieList } = require("../fakeData");

const _ = require("lodash");

const resolvers = {
  Query: {

    //USER RESOLVERS 
    users() {
      return UserList;
    },

    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, {id: Number(id) });
      return user;
    },

    //MOVIE RESOLVERS 

    Movies:()=>{
    return MovieList
    },

    Movie:(parent, args)=>{
     const movieName=args.movieName;
     const movie=_.find(MovieList,{movieName:movieName})
     return movie;

    },
     
  },

  User:{
    favoriteMovie:()=>{
    let m= _.filter(MovieList,{IsOnNetflix:true})
    console.log(m)
    return m
    
    }
  },

 Mutation:{
  CreateUser:(parent,args)=>{
   const user=args.input;
   const lastId=UserList[UserList.length-1].id;
   user.id=lastId+1;
   UserList.push(user);
   return user;
  },

  updateUserName:(parent,args )=>{
    const {id,newUserName}= args.input;
    let userUpdated;
  UserList.forEach((user)=>{
    if(user.id==id){
      user.userName=newUserName;
      userUpdated=user;
    }
  })
  return userUpdated;
  },

  deleteUser:(parent,args)=>{
    const id=args.id;
    _.remove(UserList,(user)=> user.id==id)
     
    return null;
    // return {status:true , Message:"User deleted successfully"};
}


 }

};

module.exports = { resolvers };
