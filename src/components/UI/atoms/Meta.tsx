import React from 'react';
import styled from 'styled-components';

interface MetaProps {
  category: string;
}

const Container = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  transform: rotate(-90deg);
  transform-origin: left;
  display: flex;
  align-items: center;
  bottom: 10rem;
  &::before {
    content: '';
    display: block;
    width: 8rem;
    height: 1px;
    background-color: ${({ theme }) => theme.darkGreyColor};
    margin-right: 2rem;
  }
`;

const Text = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const Meta = ({ category }: MetaProps): React.ReactElement => {
  return (
    <Container>
      <Text>{category}</Text>
    </Container>
  );
};

export default Meta;
