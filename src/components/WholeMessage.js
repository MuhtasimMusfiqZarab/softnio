import React, { Component } from "react";

class WholeMessage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="nk-msg-body bg-white profile-shown current">
          <div className="nk-msg-head">
            <h4 className="title d-none d-lg-block">
              Unable to select currency when order
            </h4>
            <div className="nk-msg-head-meta">
              <div className="d-none d-lg-block">
                <ul className="nk-msg-tags">
                  <li>
                    <span className="label-tag">
                      <em className="icon ni ni-flag-fill"></em>{" "}
                      <span>Technical Problem</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="d-lg-none">
                <a
                  href="#"
                  className="btn btn-icon btn-trigger nk-msg-hide ml-n1"
                >
                  <em className="icon ni ni-arrow-left"></em>
                </a>
              </div>
              <ul className="nk-msg-actions">
                <li>
                  <a href="#" className="btn btn-dim btn-sm btn-outline-light">
                    <em className="icon ni ni-check"></em>
                    <span>Mark as Closed</span>
                  </a>
                </li>
                {/* <li><span className="badge badge-dim badge-success badge-sm"><em className="icon ni ni-check"></em><span>Closed</span></span></li>  */}
                <li className="d-lg-none">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm btn-white btn-light profile-toggle"
                  >
                    <em className="icon ni ni-info-i"></em>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="btn btn-icon btn-sm btn-white btn-light dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <em className="icon ni ni-more-h"></em>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="link-list-opt no-bdr">
                      <li>
                        <a href="#">
                          <em className="icon ni ni-user-add"></em>
                          <span>Assign To Member</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <em className="icon ni ni-archive"></em>
                          <span>Move to Archive</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <em className="icon ni ni-done"></em>
                          <span>Mark as Close</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          msg rep
          <div className="nk-msg-reply nk-reply" data-simplebar>
            <div className="nk-msg-head py-4 d-lg-none">
              <h4 className="title">Unable to select currency when order</h4>
              <ul className="nk-msg-tags">
                <li>
                  <span className="label-tag">
                    <em className="icon ni ni-flag-fill"></em>{" "}
                    <span>Technical Problem</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="nk-reply-item">
              <div className="nk-reply-header">
                <div className="user-card">
                  <div className="user-avatar sm bg-blue">
                    <span>AB</span>
                  </div>
                  <div className="user-name">Abu Bin Ishtiyak</div>
                </div>
                <div className="date-time">14 Jan, 2020</div>
              </div>
              <div className="nk-reply-body">
                <div className="nk-reply-entry entry">
                  <p>Hello team,</p>
                  <p>
                    I am facing problem as i can not select currency on buy
                    order page. Can you guys let me know what i am doing doing
                    wrong? Please check attached files.
                  </p>
                  <p>
                    Thank you <br /> Ishityak
                  </p>
                </div>
                <div className="attach-files">
                  <ul className="attach-list">
                    <li className="attach-item">
                      <a className="download" href="#">
                        <em className="icon ni ni-img"></em>
                        <span>error-show-On-order.jpg</span>
                      </a>
                    </li>
                    <li className="attach-item">
                      <a className="download" href="#">
                        <em className="icon ni ni-img"></em>
                        <span>full-page-error.jpg</span>
                      </a>
                    </li>
                  </ul>
                  <div className="attach-foot">
                    <span className="attach-info">2 files attached</span>
                    <a className="attach-download link" href="#">
                      <em className="icon ni ni-download"></em>
                      <span>Download All</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="nk-reply-form">
              <div className="nk-reply-form-header">
                <ul className="nav nav-tabs-s2 nav-tabs nav-tabs-sm">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#reply-form"
                    >
                      Reply
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#note-form">
                      Private Note
                    </a>
                  </li>
                </ul>
                <div className="nk-reply-form-title">
                  <div className="title">Reply as:</div>
                  <div className="user-avatar xs bg-purple">
                    <span>IH</span>
                  </div>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane active" id="reply-form">
                  <div className="nk-reply-form-editor">
                    <div className="nk-reply-form-field">
                      <textarea
                        className="form-control form-control-simple no-resize"
                        placeholder="Hello"
                      ></textarea>
                    </div>
                    <div className="nk-reply-form-tools">
                      <ul className="nk-reply-form-actions g-1">
                        <li className="mr-2">
                          <button className="btn btn-primary" type="submit">
                            Reply
                          </button>
                        </li>
                        <li>
                          <div className="dropdown">
                            <a
                              className="btn btn-icon btn-sm btn-tooltip"
                              data-toggle="dropdown"
                              title="Templates"
                              href="#"
                            >
                              <em className="icon ni ni-hash"></em>
                            </a>
                            <div className="dropdown-menu">
                              <ul className="link-list-opt no-bdr link-list-template">
                                <li className="opt-head">
                                  <span>Quick Insert</span>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>Thank you message</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>Your issues solved</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span>Thank you message</span>
                                  </a>
                                </li>
                                <li className="divider" />
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-file-plus"></em>
                                    <span>Save as Template</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <em className="icon ni ni-notes-alt"></em>
                                    <span>Manage Template</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Upload Attachment"
                            href="#"
                          >
                            <em className="icon ni ni-clip-v"></em>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Insert Emoji"
                            href="#"
                          >
                            <em className="icon ni ni-happy"></em>
                          </a>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Upload Images"
                            href="#"
                          >
                            <em className="icon ni ni-img"></em>
                          </a>
                        </li>
                      </ul>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle btn-trigger btn btn-icon mr-n2"
                          data-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-v"></em>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <a href="#">
                                <span>Another Option</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>More Option</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="note-form">
                  <div className="nk-reply-form-editor">
                    <div className="nk-reply-form-field">
                      <textarea
                        className="form-control form-control-simple no-resize"
                        placeholder="Type your private note, that only visible to internal team."
                      ></textarea>
                    </div>
                    <div className="nk-reply-form-tools">
                      <ul className="nk-reply-form-actions g-1">
                        <li className="mr-2">
                          <button className="btn btn-primary" type="submit">
                            Add Note
                          </button>
                        </li>
                        <li>
                          <a
                            className="btn btn-icon btn-sm"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Upload Attachment"
                            href="#"
                          >
                            <em className="icon ni ni-clip-v"></em>
                          </a>
                        </li>
                      </ul>
                      <div className="dropdown">
                        <a
                          href="#"
                          className="dropdown-toggle btn-trigger btn btn-icon mr-n2"
                          data-toggle="dropdown"
                        >
                          <em className="icon ni ni-more-v"></em>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <ul className="link-list-opt no-bdr">
                            <li>
                              <a href="#">
                                <span>Another Option</span>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span>More Option</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default WholeMessage;
