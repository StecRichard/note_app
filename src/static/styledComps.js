import styled from "styled-components";
import Button from "react-bootstrap/Button";

const styledComps = {
  Title: styled.h1`
    font-size: 1.5em;
    text-align: center;
    margin: 10px;
  `,
  Centered: styled.div`
    width: 50%;
    margin: 0 auto;
  `,
  TextCentered: styled.div`
    text-align: center;
  `,
  PageContainer: styled.div`
    position: relative;
  `,
  ContentContainer: styled.div`
    padding-top: 4rem;
    min-height: 94vh;
    position: relative;
  `,
  IconLink: styled.a`
    margin: 5px;
  `,
  StyledButton: styled(Button)`
    margin: 5px 5px;
  `
};

export default styledComps;
