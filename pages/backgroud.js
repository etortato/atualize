import React, { Component } from "react";
import Image from "next/image";

export default class Background extends Component {
  render() {
    return (
        <div>
          <Image src="/1.jpg" layout="fill" />
        </div>
    );
  }
}
