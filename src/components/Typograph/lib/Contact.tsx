import React from 'react';
import styled from 'styled-components';
import { ContactProps } from '../Typograph';

const ContactContainer = styled.div`
  display: flex;
  flex: 1 1 50%;
  align-items: center;
  height: 2rem;
  &:not(:last-child):not(:nth-last-child(2)) {
    margin-bottom: 1rem;
  }
`;

const Icon = styled.div`
  margin-right: 0.5rem;
`;

const Text = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const Contact = ({ icon, label, ...props }: ContactProps): React.ReactElement => (
  <ContactContainer {...props}>
    <Icon>{icon}</Icon>
    <Text>{label}</Text>
  </ContactContainer>
);

export default Contact;
