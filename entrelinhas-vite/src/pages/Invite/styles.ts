import styled from "styled-components";

// font-family: 'Changa', sans-serif;
// font-family: 'Nova Square', cursive;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35fr 7fr 23fr 35fr;
  grid-template-rows: 30fr 20fr 10fr 20fr 10fr;

  height: 100vh;
  color: #292929;
`

export const LeftTopContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  height: 100%;
  width: 100%;

  border-bottom: 3px solid #E3E3E3;

  display: flex;
  justify-content: flex-end;
`

export const LeftTopContent = styled.div`
  width: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-family: 'Nova Square', cursive;
    -webkit-font-smoothing: antialiased;
  }
`

export const Avatar = styled.img`
  height: 8rem;
  width: 8rem;

  border-radius: 99px;
  border: 3px solid #E3E3E3;
`

export const LeftBottomConainter = styled.div`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: flex-end;
`

export const LeftBottomContent = styled.nav`
  width: 200px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    padding: .5rem .6rem .3rem .6rem;
    border-radius: 12px;

    transition: all .2s ease;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 28px;
      height: 28px;
    }
  }
`

export const GitHubBtn = styled.a`
  color: #0A0A0A;
  background-color: #E6E6E6;

  &:hover {
    color: #fff;
    background-color: #0A0A0A;
  }
`

export const LinkedinBtn = styled.a`
  color: #3880D6;
  background-color: #EBF2FB;

  &:hover {
    color: #fff;
    background-color: #3880D6;
  }
`

export const YoutubeBtn = styled.a`
  color: #EF5330;
  background-color: #FDEEEA;

  &:hover {
    color: #fff;
    background-color: #EF5330;
  }
`

export const CallToAction = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 4;

  background: blue;
  height: 100%;
  width: 100%;
`

export const Footer = styled.footer``