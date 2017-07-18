import * as React from 'react';

import Link from '../../components/Link';

const Home: React.StatelessComponent<{}> = () => (
  <div>
    <h2>Home Page</h2>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </div>
);

export default Home;
