import { YoutubeLogo } from "@phosphor-icons/react";
import { CallToAction, Avatar, Wrapper, LeftTopContainer, LeftTopContent, LeftBottomConainter, LeftBottomContent, GitHubBtn, LinkedinBtn, YoutubeBtn } from "./styles";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export function Invite() {
  return <>
    <Wrapper>
      <LeftTopContainer>
        <LeftTopContent>
          <Avatar src="https://github.com/anotherjemluz.png" alt="Foto de jemima" />
          <h3>Jemima Luz</h3>
        </LeftTopContent>
      </LeftTopContainer>

      <LeftBottomConainter>
        <LeftBottomContent>
          <GitHubBtn>
            <GitHubLogoIcon />
          </GitHubBtn>
          <LinkedinBtn>
            <LinkedInLogoIcon />
          </LinkedinBtn>
          <YoutubeBtn>
            <YoutubeLogo size={28} weight="fill" />
          </YoutubeBtn>
        </LeftBottomContent>
      </LeftBottomConainter>

      <CallToAction>
        call to action
      </CallToAction>
    </Wrapper>
  </>
}