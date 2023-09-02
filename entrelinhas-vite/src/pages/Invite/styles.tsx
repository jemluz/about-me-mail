import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35fr 7fr 23fr 35fr;
  grid-template-rows: 30fr 20fr 10fr 20fr 10fr;

  height: 100vh;
  color: #fff
`

export const Avatar = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;

  background: red;
  height: 100%;
  width: 100%;
`

export const Links = styled.nav`
  grid-column: 1 / 2;
  grid-row: 3 / 4;

  background: orange;
  height: 100%;
  width: 100%;
`

export const CallToAction = styled.div`
  grid-column: 3 / 4;
  grid-row: 2 / 4;

  background: blue;
  height: 100%;
  width: 100%;
`

export const Footer = styled.footer``