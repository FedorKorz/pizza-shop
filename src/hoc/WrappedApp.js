import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import styles from './wrapped-selling-items.css';

const HOC = (Component) => {

  class HOC extends React.Component {
    render() {
      return (
          <Switch>
            <Route exact path = { this.props.route }>
              <div>
                <Header />
                <div class = 'container'>
                  <Component />     
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

// Class component, wrapper, created to avoid duplication of switch / router and also to control the route.