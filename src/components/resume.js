import { Component } from "react";
import { Res } from "../global";
export default class Resume extends Component {
  render() {
    return (
      <Res
        className="resume"
        src="https://drive.google.com/file/d/1my66AX1S9tTjPMkqMdkQ53Y1UpgVlQyZ/preview"
        type="application/pdf"
        title="resumé"
        allow="autoplay"
        frameBorder="1"
      ></Res>
    );
  }
}
