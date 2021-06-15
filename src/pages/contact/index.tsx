import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import useInput, { InputReturnProps } from '#hooks/useInput';
import Input from '#components/Input';
import Button from '#components/Button';
import Form from '#components/Form';
import { useMutation } from '@apollo/client';
import { SEND_MAIL } from '#apis/mail';

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

const FormRow = styled(Form.Row)`
  margin-bottom: 2rem;
`;

const Submit = styled(Button.Default)`
  align-self: flex-end;
`;

const Contact = (): React.ReactElement => {
  const name: InputReturnProps<string> = useInput('');
  const email: InputReturnProps<string> = useInput('');
  const phone: InputReturnProps<string> = useInput('');
  const content: InputReturnProps<string> = useInput('');
  const [sendMail, { loading }] = useMutation(SEND_MAIL);

  const handleSendMail = () => {
    return sendMail({
      variables: {
        from: 'kingsky32@gmail.com',
        to: 'kingsky32@gmail.com',
        subject: '[Portfolio] Contact Test',
        text: `${name.value}, ${email.value}, ${phone.value}, ${content.value}`,
      },
    });
  };

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (name.value.length === 0) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (email.value.length === 0) {
      alert('이메일을 입력해주세요.');
      return;
    }
    if (phone.value.length === 0) {
      alert('전화번호 입력해주세요.');
      return;
    }
    if (content.value.length === 0) {
      alert('내용을 입력해주세요.');
      return;
    }
    try {
      await handleSendMail();
    } catch (error) {
      console.warn(error);
      alert(error);
    }
  };

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
        <FormRow label='Name*'>
          <Input.Default {...name} id='name' type='text' placeholder='Name' />
        </FormRow>
        <FormRow label='Email*'>
          <Input.Default {...email} id='email' type='text' placeholder='Email' />
        </FormRow>
        <FormRow label='Phone'>
          <Input.Default {...phone} id='phone' type='text' placeholder='Phone' />
        </FormRow>
        <FormRow label='Content*'>
          <Input.Textarea {...content} id='content' rows={7} placeholder='Content' />
        </FormRow>

        <Submit type='submit'>Submit</Submit>
      </FormContainer>
    </Container>
  );
};

export default Contact;
