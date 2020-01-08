import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import Category from "./Category.js";
import Task from "./Task.js";

class App extends React.Component {
  state = {
    filter: "All",
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };

  filterTasks = tasks => {
    return this.state.filter === "All"
      ? tasks
      : tasks.filter(task => task.category === this.state.filter);
  };

  // updateFilter = event => {
  //   if ((event.target.innerText = "All")) {
  //     this.setState({
  //       filter: "All"
  //     });
  //   } else {
  //     this.setState({
  //       filter: event.target.innerText
  //     });
  //   }
  // };

  updateFilter = event => {
    this.setState({
      filter: event.target.innerText
    });
  };

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <Category
          filter={this.state.filter}
          categories={CATEGORIES}
          updateFilter={this.updateFilter}
        />
        <Task
          tasks={this.state.tasks}
          filter={this.state.filter}
          filterTasks={this.filterTasks}
        />
      </div>
    );
  }
}

export default App;
