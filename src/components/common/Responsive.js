import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0 1rem;
  width: 60%;
  margin: 5rem auto;

  @media (max-width: 1024px) {
    margin: 3rem auto;
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }
`;


const Responsive = ({children, ...rest}) =>{
  return (
    <ResponsiveBlock {...rest}>
      {children}
    </ResponsiveBlock>
  );
}

export default Responsive;