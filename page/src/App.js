import React, { Component, Fragment } from 'react';
import ListItem from 'material-ui/List/ListItem';
import List from 'material-ui/List';
import Countries from './countries.json';
import AppBar from 'material-ui/AppBar';
import TextDefault from 'material-ui/TextField';
export default class App extends Component {
  state = {
    query: '',
    order: true,
  };
  handleSort = () => {
    this.setState({
      order: !this.state.order,
    });
  };
  render() {
    const { query, order } = this.state;
    const filtredCountries = Countries.filter(c =>
      c.toLowerCase().includes(query.toLowerCase())
    );
    return (
      <Fragment>
        <AppBar title={'Countries List'} showMenuIconButton={false} />
        <TextDefault
          onChange={e =>
            this.setState({
              query: e.target.value,
            })
          }
          hintText="Search Country"
          floatingLabelText="Country"
        />
        {query && (
          <p>
            Found {filtredCountries.length} / {Countries.length}
          </p>
        )}
        <br />
        <button onClick={this.handleSort}>Sort</button>

        <List>
          {order
            ? filtredCountries.map(function(el) {
                return <ListItem key={el}>{el}</ListItem>;
              })
            : [...filtredCountries].reverse().map(function(el) {
                return <ListItem key={el}>{el}</ListItem>;
              })}
        </List>
      </Fragment>
    );
  }
}
