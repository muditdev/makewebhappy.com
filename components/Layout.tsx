import { ReactNode } from 'react';
import Header from 'components/Header';
import Link from 'next/link';
import PageTransition from 'components/PageTransition';
import styled from 'styled-components';

const Footer = styled.footer`
  width: 100%;
  padding: 30px 0;
  border-top: 1px solid var(--border);
  p {
    opacity: 0.3;
  }
  .copy {
    text-align: center;
  }
`;

const Links = styled.ul`
  display: grid;
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  li {
    margin-bottom: 0;
    color: var(--textTinted);
    font-weight: 500;
    transition: color 0.2s ease-out;

    &:hover,
    &:focus {
      color: var(--text);
    }
  }
`;
type Props = {
  children: ReactNode;
};

const footerLinks = [];

const Layout = ({ children }: Props): JSX.Element => (
  <>
    <Header />
    <main>
      <PageTransition>{children}</PageTransition>
    </main>
    <Footer>
      <Links>
        {footerLinks.map(link => (
          <li key={link.name}>
            <Link href={link.url}>
              <a>{link.name}</a>
            </Link>
          </li>
        ))}
      </Links>
      <p className="copy">&copy; makewebhappy {new Date().getFullYear()}</p>
    </Footer>
  </>
);

export default Layout;
