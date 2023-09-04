import { CallToAction, Avatar, Wrapper, Links, LeftTopContainer, LeftTopContent } from "./styles";

export function Invite() {
  return <>
    <Wrapper>
      <LeftTopContainer>
        <LeftTopContent>
          <Avatar src="https://github.com/anotherjemluz.png" alt="Foto de jemima" />
          <h3>Jemima Luz</h3>
        </LeftTopContent>
      </LeftTopContainer>

      <Links> links </Links>
      <CallToAction>
        call to action
      </CallToAction>
    </Wrapper>
  </>
}