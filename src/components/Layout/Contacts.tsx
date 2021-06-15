import React from 'react';
import styled from 'styled-components';
import Icon from '#components/Icon';
import Button from '#components/Button';
import Typograph from '#components/Typograph';

const Container = styled.div`
  width: 100%;
`;

const ContactsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 2.5rem;
`;

const Contacts = (props: React.HTMLAttributes<HTMLDivElement>): React.ReactElement => {
  return (
    <Container {...props}>
      <Button.Link href='/contact'>Contact</Button.Link>
      <ContactsContainer>
        <Typograph.Contact icon={<Icon.Call size={1.6} />} label='010. 8327. 3235' />
        <Typograph.Contact icon={<Icon.Instagram size={1.6} />} label='@kingsky32' />
        <Typograph.Contact icon={<Icon.Mail size={1.6} />} label='kingsky32@gmail.com' />
        <Typograph.Contact icon={<Icon.Github size={1.6} />} label='@kingsky32' />
        <Typograph.Contact icon={<Icon.Facebook size={1.6} />} label='@kingsky32' />
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
