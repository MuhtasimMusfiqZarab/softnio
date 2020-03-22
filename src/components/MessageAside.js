import React, { Component } from "react";

class MessageAside extends Component {
  //showing specific user for active click
  showUsers(sortedObject) {
    return (
      <ul>
        {sortedObject.map(ele => {
          return (
            <li
              key={ele.avator.toString()}
              onClick={() => this.props.initSelectedItem(ele)}
            >
              <div
                className={`nk-msg-item ${ele.isActive}`}
                data-msg-id={ele.id}
              >
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

  render() {
    //sorting the menu
    const sorted = []
      .concat(this.props.menuBarStatus)
      .sort((a, b) => a.item > b.item);

    //sorting the profiles
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

    //make the 1st ones className current and push it to the active object
    console.log("This is firts item", sortedObject[0]);
    // this.props.firstSelectedItem(sortedObject[0]);

    return (
      <div>
        <div className="msg-aside">
          <div className="nk-msg-nav ">
            <ul className="nk-msg-menu ">
              {sorted.map((ele, index) => (
                <li
                  onClick={() => this.props.tabActive(ele.item)}
                  // key={ele.item.toString()}
                  className={`nk-msg-menu-item ${ele.state}`}
                >
                  <a>{ele.item}</a>
                </li>
              ))}
            </ul>
            {/*Topbar menu end */}
            {/* menu  */}
            <div
              // className="search-wrap "
              data-search="search"
              // style={{ width: 100 }}`
            >
              <div className="search-content">
                <a
                  href=""
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
