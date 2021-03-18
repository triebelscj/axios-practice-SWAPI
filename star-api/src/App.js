import './App.css';
import Home from './views/home'
import People from './views/people'
import Planets from './views/planets'
import { Router } from '@reach/router'


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
        <People path="/person/:id" />
        <Planets path="/planet/:id" />
      </Router>
    </div>
  );
}

export default App;
