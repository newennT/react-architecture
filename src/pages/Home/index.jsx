import styled from "styled-components";
import { StyledLink } from '../../utils/style/Atoms'
import HomeIllustration from '../../assets/home-illustration.svg'

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
    return (
      <HomeWrapper>
        <HomeContainer>
          <LeftCol>
            <StyledTitle>
              Repérez vos besoins, on s’occupe du reste, avec les meilleurs
              talents
            </StyledTitle>
            <StyledLink to="/survey/1" $isFullLink>
              Faire le test
            </StyledLink>
          </LeftCol>
          <Illustration src={HomeIllustration} />
        </HomeContainer>
      </HomeWrapper>
    )
  }

export default Home;