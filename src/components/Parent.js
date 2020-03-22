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
        status: "Active",
        ifCurrent: ""
      },
      {
        avator: "B",
        name: "Ishtiyak",
        date: "14 Jan, 2020",
        title: "Have you received the chequq?",
        body: "I have not received the receive check confirmation.",
        id: 2,
        msgStatus: "lable-tag dot bg-while",
        status: "Starred",
        ifCurrent: ""
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
        status: "Closed",
        ifCurrent: ""
      }
    ],

    profiles: [{ userName: "Abu Bin Ishtiyak", dateTime: "14 Jan, 2020" }],

    //which button is currently active right now (initially show the active item)
    isActive: "Active",

    selectedObject: {
      //this is initial one
      avator: "A",
      name: "Abu ",
      date: "14 Jan, 2020",
      title: "Have not received bitcoin yet.",
      body:
        "Hey! I recently bitcoin from you. But still have not received yet.",
      id: 1,
      msgStatus: "lable-tag dot bg-pink",
      status: "Active"
    }
  };

  //unclicked 1ft itme
  // firstSelectedItem = item => {
  //   console.log("Thisis theitme", item);
  //   this.setState({
  //     selectedObject: item
  //   });
  // };

  //initializing selected item
  initSelectedItem = itemName => {
    //find the active item to set its status as active
    const i = this.state.leftProfile.findIndex(item => {
      console.log("Here is the item", item);
      console.log("Her eis the itemName", itemName);
      return item.name === itemName.name;
    });

    console.log("Here is the index", i);
    // //make a copy of the state
    let leftProfile = [...this.state.leftProfile];
    // //make all the other tab inactive
    leftProfile.forEach(ele => (ele.isActive = ""));
    // //make the required tab active
    leftProfile[i].isActive = "current";

    //saving the object to be sent
    this.setState({
      selectedObject: itemName
    });
  };

  //(used)which menu is active(this is to show  which items to show on the screen)
  tabActive = itemName => {
    //find the active item to set its status as active
    const i = this.state.menuBarStatus.findIndex(item => {
      return item.item === itemName;
    });
    //make a copy of the state
    let menuBarStatus = [...this.state.menuBarStatus];
    //make all the other tab inactive
    menuBarStatus.forEach(ele => (ele.state = ""));
    //make the required tab active
    menuBarStatus[i].state = "active";
    this.setState({
      menuBarStatus
    });

    //
    this.setState({
      isActive: itemName
    });
  };

  render() {
    return (
      <div className="nk-msg">
        <MessageAside
          menuBarStatus={this.state.menuBarStatus}
          leftProfile={this.state.leftProfile}
          isActive={this.state.isActive}
          tabActive={this.tabActive}
          initSelectedItem={this.initSelectedItem}
          //select the first item
          firstSelectedItem={this.firstSelectedItem}
        />
        {/*sending the selected message as a prop*/}
        <WholeMessage item={this.state.selectedObject} />
      </div>
    );
  }
}

export default Parent;
