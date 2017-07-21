import * as React from 'react';

import AboutIndex from '../index';
import { createShallow } from 'material-ui/test-utils';

describe('<About/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<AboutIndex/>);
    expect(wrapper).toMatchSnapshot();
  });
});
