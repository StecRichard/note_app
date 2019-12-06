import React, { Component } from "react";
import { withTranslation } from "react-i18next";
import { edit, getNote } from "../../store/actions";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import NoteForm from "./NoteForm";
import styledComps from "../../static/styledComps";
import Loading from "../Loading";

class NoteEdit extends Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  saveNote = ({ title, body }) => {
    const id = this.props.match.params.id;

    this.props.edit({ id: id, title: title, body: body });
    this.props.history.push("/notes/");
  };

  render() {
    const { t, note } = this.props;

    if (!note) {
      return (
        <Loading/>
      );
    } else {
      return (
        <>
          <styledComps.Title>{t("edit-title")}</styledComps.Title>
          <NoteForm
            title={note.title}
            body={note.body}
            onSubmit={this.saveNote}
          />
        </>
      );
    }
  }
}

const mapStateToProps = ({ noteDetailReducer: { note } }) => ({
  note
});

const mapDispatchToProps = {
  edit,
  getNote
};

export default withTranslation()(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteEdit))
);
