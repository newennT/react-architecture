import { Link } from 'react-router-dom'
import styled from 'styled-components'
import DarkLogo from '../../assets/dark-logo.png'
import colors from '../../utils/style/color'


const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
    }
`

function Header(){
    return (
        <NavContainer>
            <Link to="/">
                <HomeLogo src={DarkLogo} />
            </Link>

            <StyledLink to="/">Accueil</StyledLink>
            <StyledLink to="/freelances">Freelances</StyledLink>
            <StyledLink to="/survey/1" $isFullLink>Questionnaire</StyledLink>
        </NavContainer>
    )
}

export default Header