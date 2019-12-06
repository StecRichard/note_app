import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const NavDropdownStyled = styled(NavDropdown)`
  a {
    color: gray;
  }
  a:hover {
    color: white;
  }
`;

class Header extends React.Component {
  render() {
    const { t, i18n } = this.props;

    return (
      <Navbar fixed="top" bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>Note App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>{t("home")}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/notes">
              <Nav.Link>{t("note-list")}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <NavDropdownStyled title={t("language")} id="basic-nav-dropdown">
          <NavDropdown.Item onClick={() => i18n.changeLanguage("en")}>
            EN
          </NavDropdown.Item>
          <NavDropdown.Item onClick={() => i18n.changeLanguage("cs")}>
            CS
          </NavDropdown.Item>
        </NavDropdownStyled>
      </Navbar>
    );
  }
}

export default withTranslation()(Header);
