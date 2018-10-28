import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import SellingItems from '../components/Main/Goods/SellingItems';
import styles from './wrapped-selling-items.css'

const HOC = () => {

  class HOC extends Component {
    render() {
      return (
          <Switch>
            <Route exact path = { this.props.route }>
              <div>
                <Header />
                <div className = 'container'>
                  <SellingItems state = { this.props.state } />
                </div>
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