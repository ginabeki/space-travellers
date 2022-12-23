import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import Mission from '../components/pages/Missions/Mission';

describe('Mission Component Test ', () => {
  it('Expected to render Mission contents', () => {
    const ProfileComponent = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Mission />
        </Router>
      </Provider>,
    ).toJSON();
    expect(ProfileComponent).toMatchSnapshot();
  });
});
