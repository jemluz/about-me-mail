import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35fr 7fr 23fr 35fr;
  grid-template-rows: 30fr 20fr 10fr 20fr 10fr;

  height: 100vh;
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
`

export const Avatar = styled.img`
  height: 10rem;
  width: 10rem;

  border-radius: 99px;
  border: 3px solid #E3E3E3;
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