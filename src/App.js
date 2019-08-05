import React from 'react';
import ToDoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';


const todoData = [
  {
    task: 'Vaccuum House',
    id: 123,
    purchased: false
  },
  {
    task: 'Clean Bathroom',
    id: 124,
    purchased: false
  },
  {
    task: 'Wash Dishes',
    id: 1235,
    purchased: false

  },
  {
    task: 'Laundry',
    id: 1246,
    purchased: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
      this.state = {
        name: 'Alexis',
        todo: todoData
      };
  }

  toggleItem = id => {
    console.log(id);

    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            purchased: !item.purchased
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      purchased: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearPurchased = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.purchased)

    });
  };
  
  render() {
    return (
      <div className= "App">
          <div className= "header">
            <h2>Welcome to your Todo App!</h2>
            <ToDoForm addItem={this.addItem} />
          </div>
        <ToDoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
