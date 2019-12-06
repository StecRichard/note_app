import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { create } from "../../store/actions";
import NoteForm from "./NoteForm";
import styledComps from "../../static/styledComps";

class NoteCreate extends Component {
  saveNote = (note) => {
    const { title, body } = note;
    const { create, history } = this.props;
    create({ title: title, body: body });
    history.push("/notes");
  };

  render() {
    const { t } = this.props;

    return (
      <>
        <styledComps.Title>{t("create-title")}</styledComps.Title>
        <NoteForm onSubmit={this.saveNote}/>
      </>
    );
  }
}

const mapDispatchToProps = {
  create
};

export default withTranslation()(
  withRouter(connect(null, mapDispatchToProps)(NoteCreate))
);
