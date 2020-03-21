import React, { Component } from "react";
// import Active from "./Active";
// import Closed from "./Closed";
// import Starred from "./Starred";
// import All from "./All";
import WholeMessage from "./WholeMessage";

class MessageAside extends Component {
  state = {};

  //handle click for each menu item above
  handleClick = item => {
    //run parent function for activate clicking
    console.log("asdfffffffff");
    console.log("Here is the item", item);
    this.props.tabActive(item);
    console.log("After Change tab item", this.props.isActive);
  };

  passingProp(item) {
    console.log("Item  received for passing", item);

    // return <WholeMessage />;

    //from here pass the prop to whle message
  }

  //showing specific user for active click
  showUsers(sortedObject) {
    console.log(sortedObject);

    return (
      <ul>
        {sortedObject.map(ele => {
          return (
            <li
              key={ele.avator.toString()}
              onClick={() => this.passingProp(ele)}
            >
              <div className="nk-msg-item current" data-msg-id="1">
                <div className="nk-msg-media user-avatar">
                  <span>{ele.avator}</span>
                </div>
                <div className="nk-msg-info">
                  <div className="nk-msg-from">
                    <div className="nk-msg-sender">
                      <div className="name">{ele.name}</div>
                      <div className={`${ele.msgStatus}`}></div>
                    </div>
                    <div className="nk-msg-meta">
                      <div className="attchment">
                        <em className="icon ni ni-clip-h"></em>
                      </div>
                      <div className="date">{ele.date}</div>
                    </div>
                  </div>
                  <div className="nk-msg-context">
                    <div className="nk-msg-text">
                      <h6 className="title">{ele.title}</h6>
                      <p>{ele.body}</p>
                    </div>
                    <div className="nk-msg-lables">
                      <div className="asterisk">
                        <a href="#">
                          <em className="asterisk-off icon ni ni-star"></em>
                          <em className="asterisk-on icon ni ni-star-fill"></em>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  //make the top menu bar active if pressed
  handlePress() {
    console.log("The top bar is pressed");
  }

  render() {
    //sorting the menu
    const sorted = []
      .concat(this.props.menuBarStatus)
      .sort((a, b) => a.item > b.item);

    // console.log(sorted);

    //sorted accooording to active or not
    let sortedObject;
    if (this.props.isActive == "" || this.props.isActive == "All") {
      sortedObject = []
        .concat(this.props.leftProfile)
        .sort((a, b) => a.userName > b.userName);
    } else {
      sortedObject = []
        .concat(this.props.leftProfile)
        .filter(ele => ele.status === this.props.isActive)
        .sort((a, b) => a.userName > b.userName);
    }

    //then filter accorging to msg status

    // console.log(sortedObject);

    return (
      // topbar menu------------------------------------
      <div>
        <div className="msg-aside">
          <div className="nk-msg-nav ">
            <ul className="nk-msg-menu ">
              {sorted.map((ele, index) => (
                <li
                  onClick={() => this.handleClick(ele.item)}
                  key={ele.item.toString()}
                  className={`nk-msg-menu-item ${ele.state} current`}
                >
                  <a>{ele.item}</a>
                </li>
              ))}
            </ul>
            {/*Topbar menu end */}
            {/* menu  */}
            <div
              className="search-wrap "
              data-search="search"
              // style={{ width: 100 }}`
            >
              <div className="search-content">
                <a
                  href="#"
                  className="search-back btn btn-icon toggle-search"
                  data-target="search"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
                <input
                  type="text"
                  className="form-control border-transparent form-focus-none"
                  placeholder="Search by user or message"
                />
                <button className="search-submit btn btn-icon">
                  <em className="icon ni ni-search"></em>
                </button>
              </div>
            </div>
            {/*search wrap ends */}
          </div>

          {/* message list  */}

          {/* function to know which user to show*/}
          <div>{this.showUsers(sortedObject)}</div>
        </div>
      </div>
    );
  }
}

export default MessageAside;
