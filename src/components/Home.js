import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { withTranslation } from "react-i18next";

class Home extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <>
        <Jumbotron>
          <h1>{t("welcome")}</h1>
        </Jumbotron>
      </>
    );
  }
}

export default withTranslation()(Home);
