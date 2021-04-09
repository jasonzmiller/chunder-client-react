import { BrowserRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/login';
import Trail from './components/trail';
import trailReducer from './reducers/trail-reducer';

const reducers = combineReducers({
  trailReducer
})

const store = createStore(reducers)

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="container-fluid overall-chunder">
          <Route
            path="/login"
            exact={true}
            component={Login}
          />
          <Route
            path="/trail"
            exact={true}
            component={Trail}
          />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
