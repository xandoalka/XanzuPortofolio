import React from 'react';
import Nav from '../component/Nav';

const Error = ({ message }) => {
  return (
    <>
        <Nav></Nav>
        <div className="bg-black-glass flex justify-center items-center flex-col text-white p-4 h-screen">
            <h1 className="text-4xl font-bold mb-4">Error Page</h1>
            <p>{message}</p>
        </div>
    </>
  );
};

export default Error;