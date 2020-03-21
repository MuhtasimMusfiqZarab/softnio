import React, { Component } from "react";
import MessageAside from "./MessageAside";
import WholeMessage from "./WholeMessage";

class Parent extends Component {
  state = {
    menuBarStatus: [
      { item: "Active", state: "" },
      { item: "Closed", state: "" },
      { item: "Starred", state: "" },
      { item: "All", state: "" }
    ],

    //left  panel profile with message
    leftProfile: [
      {
        avator: "A",
        name: "Abu ",
        date: "14 Jan, 2020",
        title: "Have not received bitcoin yet.",
        body:
          "Hey! I recently bitcoin from you. But still have not received yet.",
        id: 1,
        msgStatus: "lable-tag dot bg-pink",
        status: "Active"
      },
      {
        avator: "B",
        name: "Ishtiyak",
        date: "14 Jan, 2020",
        title: "Have you received the chequq?",
        body: "I have not received the receive check confirmation.",
        id: 2,
        msgStatus: "lable-tag dot bg-while",
        status: "Starred"
      },
      {
        avator: "C",
        name: "Bin Ishtiyak",
        date: "14 Jan, 2020",
        title: "I Did not get the reply.",
        body:
          "Hey! I recently bitcoin from you. But still have not received yet.",
        id: 3,
        msgStatus: "lable-tag dot bg-blue",
        status: "Closed"
      }
    ],

    profiles: [{ userName: "Abu Bin Ishtiyak", dateTime: "14 Jan, 2020" }],

    //which button is currently active right now
    isActive: "Active",

    firstItemOfTheObject: []
  };

  //make the 1st menu active in the top bar

  //searching by topBarName (this is to show  which items to show on the screen)
  makeTopBarActive(item) {
    this.setState({
      isActive: item
    });
  }

  //making the first item active to show in the whole prp
  pushActiveItem = item => {
    this.setState({
      firstItemOfTheObject: this.state.firstItemOfTheObject.push(item)
    });
  };

  //which menu is active(this is to show  which items to show on the screen)
  tabActive = itemName => {
    this.setState({
      isActive: itemName
    });
  };

  render() {
    return (
      <div>
        <MessageAside
          menuBarStatus={this.state.menuBarStatus}
          leftProfile={this.state.leftProfile}
          //making the top bar active
          activeTop={this.makeTopBarActive}
          isActive={this.state.isActive}
          tabActive={this.tabActive}
          isActive={this.state.isActive}
        />
      </div>
    );
  }
}

export default Parent;
