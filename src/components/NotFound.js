import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { withTranslation } from "react-i18next";

const ErrorContainer = styled.div`
  text-align: center;
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

class NotFound extends Component {
  render() {
    const { t } = this.props;

    return (
      <ErrorContainer>
        <h1>{t("notFound")}</h1>
        <FontAwesomeIcon icon={faFrown} size={"5x"}/>
      </ErrorContainer>
    );
  }
}

export default withTranslation()(NotFound);
