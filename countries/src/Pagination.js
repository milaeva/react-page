import React, { Component } from 'react';

export default class Pagination extends Component {
  renderPagination() {
    const { perPage, total, onChange } = this.props;
    const pagesCount = Math.ceil(total / perPage);
    return Array.from(Array(pagesCount), (v, i) => (
      <button
        className={i + 1 === this.props.currentPage ? 'active' : ''}
        key={i}
        onClick={() => onChange(i + 1)}
      >
        {i + 1}
      </button>
    ));
  }
  render() {
    const { currentPage, total, perPage, onChange } = this.props;
    return (
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
        >
          Prev
        </button>
        {this.renderPagination()}
        <button
          disabled={Math.ceil(total / perPage) === currentPage}
          onClick={() => onChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    );
  }
}
