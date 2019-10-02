import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeRoute from './home';
import AuthRoute from './auth';
import Demo from '../../src/pages/explorer/explorer';
import ReactDOM from 'react-dom';
ReactDOM.render(<Demo />, document.querySelector('#root'));

const Routes = createStackNavigator(
  {
    Home: { screen: HomeRoute },
   
  },
  { headerMode: 'none' }
);

export default createAppContainer(Routes);