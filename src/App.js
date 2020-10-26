import {BrowserRouter, Route} from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Route component={AppRoutes}/>
    </BrowserRouter>
  );
}

export default App;
