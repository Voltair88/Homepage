import { Component } from "react";
import { Res } from "../global";
export default class Resume extends Component {
  render() {
    return (
      <Res
        className="resume"
        src="https://drive.google.com/file/d/1Xe4hOr0betBeiiLZjhaI7knFXpPGFr3-/preview"
        type="application/pdf"
        title="resume"
        allow="autoplay"
        frameBorder="1"
      ></Res>
    );
  }
}
