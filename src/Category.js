import React from "react";

class Category extends React.Component {
  render() {
    return (
      <div className="categories">
        <h5>Category filter</h5>
        {this.props.categories.map(c => {
          return <button>{c}</button>;
        })}
      </div>
    );
  }
}

export default Category;
