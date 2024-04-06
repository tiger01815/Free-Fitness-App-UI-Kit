import React, { Component } from "react";
import LinearGradient from "react-native-linear-gradient";
import { Text } from "react-native";

export class GradientHelper extends Component {
  render() {
    const {
      style,
      color1,
      color2,
      start = { x: 1, y: 1 },
      end = { x: 0, y: 0 },
      child
    } = this.props;
    return (
        <LinearGradient
            colors={[color1, color2]}
            start={start}
            // end={end}
            style={style}
        >
            {child}
        </LinearGradient>
    );
  }
}