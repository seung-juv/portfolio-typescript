import Link from 'next/link';
import styled from 'styled-components';
import { Url } from 'url';

interface SubTitleProps {
  label: string;
  href: string | Url;
  className?: string;
}

const Container = styled.div`
  display: inline-block;
  a {
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.blackColor};
    &:hover::after {
      width: 12rem;
    }
    &::after {
      content: '';
      display: block;
      width: 8rem;
      height: 1px;
      background-color: ${({ theme }) => theme.blackColor};
      margin-left: 2rem;
      ${({ theme }) => theme.transition};
    }
  }
`;

const SubTitle = ({ label, href, className }: SubTitleProps): React.ReactElement => {
  return (
    <Container className={className}>
      {href ? (
        <Link href={href}>
          <a>{label}</a>
        </Link>
      ) : null}
    </Container>
  );
};

export default SubTitle;
