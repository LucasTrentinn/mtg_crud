import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return(
      <div>
        <footer className="footer" style={{display: 'flex', justifyContent: 'center'}}>
          <span className="text-muted"> All rights reserved </span>
        </footer>
      </div>
    )
  }
}