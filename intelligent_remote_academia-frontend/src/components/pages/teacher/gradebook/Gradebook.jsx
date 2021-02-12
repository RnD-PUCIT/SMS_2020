import React from 'react';
import GradedActivityForm from './GradedActivityForm';

const Gradebook = () => {
  return (
    <React.Fragment>
      <GradedActivityForm
        button={{ text: 'Create', variant: 'contained', color: 'primary' }}
      />
    </React.Fragment>
  );
};

export default Gradebook;
