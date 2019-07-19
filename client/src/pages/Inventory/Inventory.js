import React, { Component } from "react";

componentDidMount() {
    this.loadItems();
  }

  // Loads all Items  and sets them to this.state.items
  loadItems = () => {
    API.getItems()
      .then(res =>
        this.setState({ items: res.data, type: "", rarity: "" })
      )
      .catch(err => console.log(err));
  };

export default Inventory