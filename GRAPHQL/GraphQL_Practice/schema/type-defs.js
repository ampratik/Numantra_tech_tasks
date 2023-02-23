const { gql } = require("apollo-server");

const typeDefs = gql`

type User{
id:ID!
name:String!
userName:String!
age:Int!
natinaliity:Natinaliity
friends:[User]
favoriteMovie:[Movie]

}

type Movie{
id:ID!
movieName:String!
releaseDate:Int!
IsOnNetflix:Boolean!
}

type Query {

users:[User!]!

user(id:ID!):User!

Movies:[Movie!]!

Movie(movieName:String!):Movie!

}

input CreateUserInsert{
name:String!
userName:String!
age:Int!
natinaliity:Natinaliity=Japan

}

input updateUserNameInsert{
id:ID!
newUserName:String!
}

type Mutation {

CreateUser(input:CreateUserInsert!):User

updateUserName(input:updateUserNameInsert!):User

deleteUser(id:ID!):User
 


}




enum Natinaliity {
canada 
America
brazil
Japan
India

}

`;

module.exports = { typeDefs };
