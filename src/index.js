import React from "react";
import ReactDom from "react-dom";
import Lodar from "./lodar";
import ErrorMsg from "./Error";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  state = { lat: null, len: null, errMessage: "" };
  //One time run
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (Position) =>
        this.setState({
          lat: Position.coords.latitude,
          len: Position.coords.longitude,
        }),
      (err) => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      const message = this.state.errMessage;
      return <ErrorMsg Error={message} />;
    }
    if (this.state.lat && !this.state.errMessage) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Lodar />;
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
