import React from "react";
import Navbar from "react-bootstrap/Navbar";
import styledComps from "../../static/styledComps";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

const GITHUB_URL = "https://github.com/StecRichard/note_app";
const PROROCKETEERS_URL = "https://www.prorocketeers.com";

const UnstyledFooter = ({ className }) => (
  <Navbar sticky='bottom' bg="dark" expand="lg" className={className}>
    <Navbar.Collapse id="basic-navbar-nav">
      Note App - Created by Richard Štec
    </Navbar.Collapse>
    <styledComps.IconLink href={GITHUB_URL}><FontAwesomeIcon icon={faCodeBranch} size="2x"/></styledComps.IconLink>
    <styledComps.IconLink href={PROROCKETEERS_URL}><FontAwesomeIcon icon={faRocket} size="2x"/></styledComps.IconLink>
  </Navbar>
);

const StyledFooter = styled(UnstyledFooter)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 6vh;
  min-height: 50px !important;
  color: white;
`;

class Footer extends React.Component {
  render() {
    return <StyledFooter></StyledFooter>;
  }
}

export default Footer;
