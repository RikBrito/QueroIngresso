import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import Demo from '../../App';
import ReactDOM from 'react-dom';
ReactDOM.render(<Demo />, document.querySelector('#root'));
 
const HomeRoutes = createStackNavigator(
  {
    Home: { screen: Home },
  },
  { headerMode: 'none' }
);

export default createAppContainer(HomeRoutes);