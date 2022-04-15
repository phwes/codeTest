import React from "react";

class RemoteJson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const res = await fetch(this.props.url);
    const jsonRes = await res.json();
    console.log(jsonRes);
    this.setState({ text: jsonRes });
  }

  render() {
    if (!this.state.text) return null;
    return this.state.text.map((obj) => {
      return (
        <div className="RemoteJson">
          <h4>{obj.user.name}</h4>
          <img src={obj.user.img} width="10%" />
          <p>{obj.content}</p>
        </div>
      );
    });
  }
}

export default RemoteJson;
