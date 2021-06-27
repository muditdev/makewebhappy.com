import Link from 'next/link';
import ThemeSwitch from 'components/ThemeSwitch';
import { useRouter } from 'next/router';
import Logo from 'assets/logo.svg';
import styled from 'styled-components';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Coaching', path: '/lol' },
  { name: 'Reach me', path: '/test' },
];

const HeaderContainer = styled.header`
  .header {
    position: fixed;
    top: -1px;
    right: 0;
    left: 0;
    z-index: 4;
    background-color: var(--headerBg);
    backdrop-filter: saturate(180%) blur(20px);
  }

  .spacer {
    height: 60px;
    margin-bottom: 30px;

    @media (min-width: 480px) {
      height: 84px;
      margin-bottom: 80px;
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: var(--siteWidth);
    margin: 0 auto;
    padding: 10px 15px;

    @media (min-width: 480px) {
      padding: 20px 30px;
    }
  }

  .logo {
    display: block;
    margin-bottom: 0;

    img {
      width: 39px;
      height: 38px;

      @media (min-width: 480px) {
        width: 45px;
        height: 45px;
      }
    }
  }

  .link {
    margin-left: 25px;
    padding: 4px 0;
    opacity: 0.6;

    &:hover,
    &:focus {
      opacity: 1;
    }

    @media (min-width: 768px) {
      margin-right: 75px;
      margin-left: 0;
    }
  }

  .linkActive {
    margin-left: 25px;
    padding: 4px 0;
    opacity: 0.6;

    &:hover,
    &:focus {
      opacity: 1;
    }

    @media (min-width: 768px) {
      margin-right: 75px;
      margin-left: 0;
    }
    box-shadow: 0 2px 0 var(--brand);
    opacity: 1;
  }
`;
const Nav = styled.nav`
  position: relative;
  top: -2px;
  display: flex;
  align-items: center;

  @media (min-width: 480px) {
    top: 0;
  }

  ol.links {
    display: flex;
    margin-right: 0;
    margin-bottom: 0;
    padding: 0;
    font-weight: 700;
    font-size: 14px;
    list-style: none;

    @media (min-width: 370px) {
      font-size: 17px;
    }

    @media (min-width: 480px) {
      margin-right: 25px;
    }
  }
`;
const Header = (): JSX.Element => {
  const router = useRouter();

  const pathname = router.pathname.split('/[')[0]; // active paths on dynamic subpages
  return (
    <HeaderContainer>
      <header className="header">
        <div className="container">
          <Link href="/">
            <a className="logo">
              <Logo
                style={{
                  fill: 'white',
                }}
              />
            </a>
          </Link>
          <Nav>
            <ol>
              {links.map(({ name, path }) => (
                <li key={path} className={pathname === path ? 'linkActive' : 'link'}>
                  <Link href={path}>
                    <a>{name}</a>
                  </Link>
                </li>
              ))}
            </ol>
            <ThemeSwitch />
          </Nav>
        </div>
      </header>
      <div className="spacer" />
    </HeaderContainer>
  );
};

export default Header;
