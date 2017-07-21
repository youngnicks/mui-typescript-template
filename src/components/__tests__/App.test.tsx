import * as React from 'react';

import App from '../App';
import { createShallow } from 'material-ui/test-utils';

describe('<App/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toMatchSnapshot();
  });
});
