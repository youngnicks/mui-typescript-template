import * as React from 'react';

import AppFrame from '../AppFrame';
import { createShallow } from 'material-ui/test-utils';

describe('<AppFrame/>', () => {
  let shallow;

  beforeEach(() => {
    shallow = createShallow();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<AppFrame/>);
    expect(wrapper).toMatchSnapshot();
  });
});
