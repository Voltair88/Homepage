import { Component } from "react";
import { Res } from "../global";
import file from "../resume.pdf";

export default class Resume extends Component {
  render() {
    return (
      <Res           className="resume"
      src={file}
      type="application/pdf"
      title="title">
      </Res>
    );
  }
}
