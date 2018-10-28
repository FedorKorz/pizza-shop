import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import SellingItems from '../components/Main/Goods/SellingItems';

const HOC = () => {

  class HOC extends Component {
    render() {
      return (
          <Switch>
            <Route exact path = { this.props.route }>
              <div>
                <Header />
                <SellingItems state = { this.props.state } />
                <Footer />
              </div>
            </Route>
          </Switch>
      );
    }
  }
  return HOC;
};

export default HOC;