import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import useInput from '#hooks/useInput';
import Button from '#components/UI/atoms/Button';
import Input from '#components/UI/atoms/Input';
import Textarea from '#components/UI/atoms/Textarea';
import Label from '#components/UI/atoms/Label';
import FormRow from '#components/UI/molecules/FormRow';

const Container = styled.div`
  width: 60%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Title = styled.h2`
  font-size: 5.8rem;
  font-weight: bold;
  margin-bottom: 3.5rem;
`;

const SubTitle = styled.h5`
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 5rem;
  line-height: 1.8;
`;

const FormContainer = styled.form`
  width: 60%;
  display: flex;
  flex-flow: column nowrap;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
`;

const EFormRow = styled(FormRow)`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const ELabel = styled(Label)`
  flex-basis: 15rem;
  @media screen and (max-width: 425px) {
    flex-basis: 3rem;
  }
`;

const EInput = styled(Input)`
  flex: 1;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const ETextarea = styled(Textarea)`
  flex: 1;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;

const Submit = styled(Button)`
  align-self: flex-end;
`;

const Contact = (): React.ReactElement => {
  const name = useInput('');
  const email = useInput('');
  const phone = useInput('');
  const content = useInput('');

  const onSubmit = React.useCallback(e => {
    e.preventDefault();
  }, []);

  return (
    <Container>
      <Head>
        <title>Seung Ju | Contact</title>
      </Head>
      <Title>Contact</Title>
      <SubTitle>
        Thank you for visiting Seung ju&apos;s website.
        <br />
        Please feel free to contact me if you have any questions
      </SubTitle>
      <FormContainer onSubmit={onSubmit}>
        <EFormRow>
          <ELabel htmlFor='name'>Name*</ELabel>
          <EInput {...name} id='name' type='text' placeholder='Name' />
        </EFormRow>
        <EFormRow>
          <ELabel htmlFor='email'>Email*</ELabel>
          <EInput {...email} id='email' type='email' placeholder='Email' />
        </EFormRow>
        <EFormRow>
          <ELabel htmlFor='phone'>Phone</ELabel>
          <EInput
            {...phone}
            id='phone'
            type='text'
            placeholder='Phone'
            autoComplete='tel-national'
          />
        </EFormRow>
        <EFormRow>
          <ELabel htmlFor='content'>Content*</ELabel>
          <ETextarea {...content} id='content' rows={7} placeholder='Content' />
        </EFormRow>
        <Submit type='submit'>Submit</Submit>
      </FormContainer>
    </Container>
  );
};

export default Contact;
