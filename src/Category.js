import React from "react";

class Category extends React.Component {
  render() {
    const { filter, categories, updateFilter } = this.props;

    return (
      <div className="categories">
        <h5>Category filter</h5>
        {categories.map(category => {
          return (
            <button
              onClick={updateFilter}
              className={filter === category ? "selected" : undefined}
            >
              {category}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Category;
