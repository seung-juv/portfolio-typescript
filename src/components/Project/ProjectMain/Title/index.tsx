import styled from 'styled-components';

interface TitleProps {
  title: string;
  caption: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

const Text = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.blackColor};
  margin-right: 4rem;
`;

const Caption = styled.span`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${({ theme }) => theme.darkGreyColor};
`;

const Title = ({ title, caption }: TitleProps): React.ReactElement => {
  return (
    <Container>
      <Text>{title}</Text>
      <Caption>{caption}</Caption>
    </Container>
  );
};

export default Title;
