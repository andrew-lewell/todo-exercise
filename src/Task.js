import React from "react";

class Task extends React.Component {
  render() {
    const { tasks, filter, filterTasks } = this.props;

    return (
      <div className="tasks">
        <h5>Tasks</h5>
        <div>
          {filterTasks(tasks).map(t => {
            return (
              <div className="task">
                <div className="label">{t.category}</div>
                <div className="text">{t.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Task;
