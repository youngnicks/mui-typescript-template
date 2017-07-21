import * as React from 'react';

import Link from '../Link';
import { createShallow } from 'material-ui/test-utils';

describe('<Link/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Link/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a component', () => {
    const wrapper = shallow(<Link component={Link}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render as a link', () => {
    const wrapper = shallow(<Link to="/test"/>);
    expect(wrapper).toMatchSnapshot();
  });
});
