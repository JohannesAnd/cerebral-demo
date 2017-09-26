import React from 'react';

import { Wrapper, Checkmark, Box } from './elements';

export default function Check({ className, checked, onClick }) {
  return (
    <Wrapper className={className} onClick={onClick}>
      <Checkmark checked={checked} style={{ color: 'green' }} />
      <Box style={{ color: checked ? 'green' : 'red' }} />
    </Wrapper>
  );
}
