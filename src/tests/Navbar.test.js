import TestRenderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

describe('Navbar Component Test', () => {
  it('Expected to render Navbar contenents', () => {
    const NavbarComponent = TestRenderer.create(
      <Router>
        <Navbar />
      </Router>,
    ).toJSON();
    expect(NavbarComponent).toMatchSnapshot();
  });
});
