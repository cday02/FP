import React, { Component } from "react";
import API from "../../utils/API"
import SteamAPI from "../../utils/SteamAPI";
import axios from "axios";
import { SaveBtn } from "../../Form"
export default class Skins extends React.Component {

  state={
    posts: [],
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

 apiSearch(){
   axios
    .get(`http://api.steamapis.com/market/items/489940?api_key=b1eQml-g5_-9vAshjf0X-anQHAQ`)
    .then(res => {
      this.setState({posts: res.data.data.slice(408)})
    })
 }

 handleFormSubmit = event => {
   alert('value' + this.state.value)
  //  event.preventDefault();
  //  let id = event.target.id;
  //  API.saveItem({
  //    marketname: this.state.posts.market_name,
  //    rarity: this.state.posts.border_color,
  //    nameid: this.state.posts.name_id
  //   //  avgprice: this.state.posts.prices.mean,
  //   //  safeprice: this.state.posts.prices.safe
  //   })
    .then(res =>  console.log(res.data))
    .catch(err => console.log(err));
  event.target.hidden = true; 
 }
 
 componentDidMount(){ 
  this.apiSearch();
   console.log(this.state.posts)
 }

 render(){
   const { posts } = this.state;
   const postList = posts.length ? (
     posts.map(post => {
       return(
         
         <div className="post card"
           style={{
             position: "flex",
             width:300,
                   }}
           key={post._id}>
            <img
              style={{width: 200, height: 150}}
              src={post.image}
              alt="this cannot display" />
            <div className="card-content">
            <SaveBtn
                 
               id={posts.market_name}
               onClick={this.handleFormSubmit}
               hidden={false}
              >Add to Cart</SaveBtn>
             <div className="card-title">{post.market_name}</div>
             <p>Price: ${post.prices.mean}</p>
           </div> 
           
         </div>

       )
     }
    )
   ) : (
     <div className="center">Loading...</div>)
     return(
     <div className="post card">
       <h4 clasName="center">
         Available Skins
       </h4>
       {postList}
     </div>
    )
   
 }
}



