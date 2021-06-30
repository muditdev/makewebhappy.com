import ThemeSwitch from 'components/ThemeSwitch';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import CustomLink from 'happyui/CustomLink';
import { Button } from 'happyui/Button';
import BrandLogo from './BrandLogo';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Coaching', path: '/coaching' },
];
const CTA = { name: 'Contact', path: '/contact' };
const HeaderContainer = styled.div`
  position: relative;
  /* position: sticky; */
  top: -1px;
  right: 0;
  left: 0;
  z-index: 4;
  /* background-color: var(--headerBg); */
  backdrop-filter: saturate(180%) blur(20px);
  padding: ${props => props.theme.padding.md} 0;
`;
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: ${props => props.theme.container.md};
  margin: 0 auto;
`;
const Nav = styled.nav`
  display: flex;
  align-items: center;
  ul {
    display: flex;
    a {
      display: block;
      font-weight: 600;
      font-size: ${props => props.theme.fontsize.md};
      padding: ${props => props.theme.padding.md};
      color: ${props => props.theme.colors.text};
    }
  }
`;

const Header = (): JSX.Element => {
  const router = useRouter();
  const pathname = router.pathname.split('/[')[0]; // active paths on dynamic subpages
  return (
    <HeaderContainer>
      <StyledHeader>
        <CustomLink path="/">
          <BrandLogo />
        </CustomLink>
        <Nav>
          <ul>
            {links.map(({ name, path }) => (
              <li key={path} className={pathname === path ? 'linkActive' : 'link'}>
                <CustomLink path={path}>{name}</CustomLink>
              </li>
            ))}
          </ul>

          <CustomLink path={CTA.path}>
            <Button variant="rounded">{CTA.name}</Button>
          </CustomLink>

          <ThemeSwitch />
        </Nav>
      </StyledHeader>
    </HeaderContainer>
  );
};

export default Header;
