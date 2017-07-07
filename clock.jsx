import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {time: (new Date())};
  }
  componentDidMount(){
    this.handle = window.setInterval(()=>{this.tick();},1000);
  }
  componentWillUnmount(){
    clearInterval(this.handle);
  }
  tick(){
    this.setState({time: (new Date())});
  }
  render(){
    return (
      <div>
        <nav>
          <h1>Awesome Clock</h1>
        </nav>
        <section>
          <h2 className="left">Time:</h2>
          <h2 className="right">{this.state.time.getHours()}:
          {this.state.time.getMinutes()}:
        {this.state.time.getSeconds()}</h2>
        </section>
      </div>


    );
  }
}

export default Clock;
