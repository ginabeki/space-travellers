import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import { RocketsContainer } from '../components/pages/Rockets/RocketsContainer';

describe('Rocket Component Test ', () => {
  it('Expected to render Rocket contents', () => {
    const ProfileComponent = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <RocketsContainer />
        </Router>
      </Provider>,
    ).toJSON();
    expect(ProfileComponent).toMatchSnapshot();
  });
});
