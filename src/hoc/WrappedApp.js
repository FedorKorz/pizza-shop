import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import Table from '../components/Main/Table/Table';

const HOC = (Component) => {

  class HOC extends Component {
    render() {
      return (
          <Switch>
            <Route exact path = { this.props.route }>
              <div>
                <Header />
                <Component />
                <Footer />
                <Table />
              </div>
            </Route>
          </Switch>
      );
    }
  }
  return HOC;
};

export default HOC;