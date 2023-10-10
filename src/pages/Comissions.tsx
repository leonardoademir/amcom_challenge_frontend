import React from 'react';
import { getSells } from '../services';

const Comissions = () => {
  getSells('')
    .then(() => {
      console.log('getSells function completed successfully.');
    })
    .catch((error) => {
      console.error('Error calling getSells:', error);
    });

  return <div>Comissions</div>;
};

export default Comissions;
