import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Characters from './containers/Characters';
import CharacterDetail from './components/CharacterDetail';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>

          <Route path="/" exact={true} 
            render={routerProps => (
              <Characters {...routerProps} />
            )} />

          <Route path="/character/:id"
            render={routerProps => (
              <CharacterDetail {...routerProps} />
            )} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
