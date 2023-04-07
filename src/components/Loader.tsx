import React from 'react';
import Logo from '../img/logo.svg';

export default function Loader() {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      <img
        src={Logo}
        width={300}
        height={300}
        alt="Loading anination"
        className="animate"
      />
    </div>
  );
}
