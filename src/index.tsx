/* @refresh reload */
import { Route, Router } from '@solidjs/router';
import { render } from 'solid-js/web';
import App from './App';
import { TestPage } from './app/test.page';
import './index.css';
import { RootProviders } from './providers/root-providers';

const root = document.getElementById('root')

if (!root) {
  throw new Error("Wrapper div not found");
}

render(() => {
  return (
    <RootProviders>
      <Router>
        <Route path="/" component={App} />
        <Route path="/test" component={TestPage} />
      </Router>
    </RootProviders>
  )
}, root)