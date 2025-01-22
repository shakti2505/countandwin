import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">Winter</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    font-size: large;
    font-family: inherit;
    font-weight: bold;
    color: #0011ff;
    background-color: #f8f8fd;
    padding: 0.8em 2.2em;
    border-radius: 50em;
    border: 6px solid #8b93f8;
    box-shadow: 0px 8px #1f35ff;
  }
  .button:active {
    position: relative;
    top: 8px;
    border: 6px solid #646fff;
    box-shadow: 0px 0px;
  }`;

export default Button;
