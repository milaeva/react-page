import React, { Component, Fragment } from 'react';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List';
import Countries from './countries.json';
import AppBar from 'material-ui/AppBar';

import Pagination from './Pagination';

export default class App extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 10,
  };
  handlePageChange = pageNumber => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  render() {
    const { currentPage, itemsPerPage } = this.state;
    const itemStart = (currentPage - 1) * itemsPerPage;
    const itemEnd = itemStart + itemsPerPage;

    const countriesToShow = Countries.slice(itemStart, itemEnd);
    return (
      <Fragment>
        <AppBar title={'Countries List'} showMenuIconButton={false} />
        <br />
        <List>
          {countriesToShow.map(c => (
            <ListItem key={c}>{c}</ListItem>
          ))}
        </List>
        <br />
        <Pagination
          perPage={itemsPerPage}
          total={Countries.length}
          onChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </Fragment>
    );
  }
}
