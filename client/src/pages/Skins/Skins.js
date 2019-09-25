import React, { Component } from "react";
import API from "../../utils/API"
import SteamAPI from "../../utils/SteamAPI";
import axios from "axios"

export default class Skins extends React.Component {
  state={
    posts: [],
  }

 apiSearch(){
   axios
    .get(`http://api.steamapis.com/market/items/489940?api_key=b1eQml-g5_-9vAshjf0X-anQHAQ`)
    .then(res => {
      console.log(res.data.data)
      this.setState({posts: res.data.data})
    })
 }
 
 componentDidMount(){
   this.apiSearch()
   console.log(this.state.posts)
 }

 render(){
   const { posts } = this.state;
   const postList = posts.length ? (
     posts.map(post => {
       return(
         <div className="post card" key={post.market_name}>
           <div className="card-content">
             <ol className="card-title">{post.market_name}</ol>
             <p>{posts.market_name}</p>
           </div>
         </div>

       )
     }
     )
   ) : (
     <div className="center">Loading...</div>)
     return(
     <div className="container">
       <h4 clasName="center">
         Loading...
       </h4>
       {postList}
     </div>
    )
   
 }
}



