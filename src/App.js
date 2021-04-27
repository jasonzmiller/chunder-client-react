import { BrowserRouter, Route } from 'react-router-dom';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import MountainList from './components/mountain-list';
import Weather from './components/weather';
import TrailList from './components/trail-list'
import trailReducer from './reducers/trail-reducer';
import weatherReducer from './reducers/weather-reducer';
import MountainView from './components/mountain-view';
import Trail from './components/trail';
import TrailView from './components/trail-view';

const reducers = combineReducers({
  trailReducer,
  weatherReducer
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
            path="/mountains"
            exact={true}
            component={MountainList}
          />
          <Route
            path="/:uid/mountains"
            exact={true}
            component={MountainList}
          />
          <Route
            path="/mountains/:mountainId"
            exact={true}
            component={MountainView}
          />
          <Route
            path="/trail-list"
            exact={true}
            component={TrailList}
          />
          <Route
            path="/mountains/:mountainId/trails/:trailId"
            exact={true}
            component={TrailView}
          />
          <Route
            path="/mountains/:mountainId/weather"
            exact={true}
            component={Weather}
          />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
