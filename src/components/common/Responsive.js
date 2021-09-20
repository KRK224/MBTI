import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  position: relative;
  top: 4rem;
  padding: 0 1rem;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%
  }
`;


const Responsive = ({children, ...rest}) =>{
  return (
    <ResponsiveBlock {...rest}>
      <div>
        Responsive 창입니다.
      </div>
      {children}
    </ResponsiveBlock>
  );
}

export default Responsive;