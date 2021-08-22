import { Component } from "react";
import { Res } from "../global";
import file from "../resume.pdf";
export default class Resume extends Component {
  render() {
    return (
      <Res           className="resume"
      src="https://drive.google.com/file/d/1Xe4hOr0betBeiiLZjhaI7knFXpPGFr3-/preview"      type="application/pdf"
      title="title"
      allow="autoplay">
      </Res>
    );
  }
}
