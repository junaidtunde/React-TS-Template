import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Bowser from 'bowser';
import classnames from 'classnames';
import whenDomReady from 'when-dom-ready';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import history from 'get-history';
import { isMobile, isDesktop, isTablet } from 'helpers';

import './css/style.css';

const root = document.getElementById('root');
const body = document.body;
const originalClassName = body.className;

const applyClassName = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const isSmall = isMobile();

  const className = classnames({
    // [`${parser.getPlatformType()}`]: true,
    desktop: isDesktop(),
    tablet: isTablet(),
    mobile: isSmall,
    small: isSmall,
    large: !isSmall,
    [`${parser.getOSName(true)}`]: true
  });

  if (body) {
    body.className = `${originalClassName} ${className}`.trim();
  }
};

applyClassName();

ReactDOM.render(
  <Router history={history}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>,
  root
);

const onResize = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  if (parser.satisfies({ mobile: { chrome: '>1', safari: '>1' } })) {
    //chrome/safari and mobile
    const height = Math.min(
      document.documentElement.clientHeight,
      window.screen.height,
      window.innerHeight
    );
    if (root) {
      root.setAttribute('style', `height: ${height}px`);
    }
    if (body) {
      body.setAttribute('style', `height: ${height}px`);
    }
  } else {
    if (root) {
      root.removeAttribute('style');
    }
    if (body) {
      body.removeAttribute('style');
    }
  }
  applyClassName();
};

whenDomReady().then(onResize);
['resize', 'orientationchange'].forEach(event => {
  window.addEventListener(event, onResize);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
