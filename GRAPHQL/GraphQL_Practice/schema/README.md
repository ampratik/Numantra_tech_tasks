Queries Written For Executing GraphQL Functions/ Resolvers 

1>>>>>>

 query getAllUsers {
  users {
    id
    name
    userName
    age
  natinaliity
  friends{
    name
    natinaliity
  }
    
  }
}


2>>>>>>

query getAllUser($userId: ID!) {
 user(id: $userId) {
   name
   userName
   age 
   natinaliity
   friends{
   name
   }
 }
}