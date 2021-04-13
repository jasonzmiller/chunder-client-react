import { BrowserRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/login';
import Trail from './components/trail';
import TrailList from './components/trail-list'
import trailReducer from './reducers/trail-reducer';
import Register from './components/register';
import Profile from './components/profile';

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
            path="/register"
            exact={true}
            component={Register}
          />
          <Route
            path="/profile"
            exact={true}
            component={Profile}
          />
          <Route
            path="/trail-list"
            exact={true}
            component={TrailList}
          />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
