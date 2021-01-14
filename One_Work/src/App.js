import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0,
      items: []
    };  
  }

  increase = () => {
    this.setState(prevState => ({
      counter: prevState.counter +1
    }));
  };
  oNincrease = () => {
    this.setState(prevState => ({
      counter: prevState.counter = 0
    }));
  };

 
   
  addItem() {
    this.state.items.push('Нормально'); 
    this.setState({items: this.state.items}); 
  }

  render() {
    const list = this.state.items.map((item, index) => {
			return <li key={index}>{item}</li>;
    }); 
    
    return(
     <div className="wrapper">
       	<div>
				<ul>
					{list}
				</ul>
			</div>
        <span>{this.state.counter}</span>
        <button onClick={this.increase}>клик</button>
        <button onClick={this.oNincrease}>Обнулить</button>
        <button onClick={this.addItem.bind(this)}>добавить текст</button>
      </div>
  );
}

}


export default App;
