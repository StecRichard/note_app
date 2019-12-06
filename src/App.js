import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import NoteList from "./components/note/NoteList";
import NotFound from "./components/NotFound";
import NoteDetail from "./components/note/NoteDetail";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import NoteEdit from "./components/note/NoteEdit";
import NoteCreate from "./components/note/NoteCreate";
import styledComps from "./static/styledComps";

function App() {
  return (
    <div>
      <styledComps.PageContainer>
        <Header/>
        <styledComps.ContentContainer>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/notes" component={NoteList}/>
            <Route exact path="/note/detail/:id" component={NoteDetail}/>
            <Route exact path="/note/new" component={NoteCreate}/>
            <Route exact path="/note/edit/:id" component={NoteEdit}/>
            <Route render={() => <NotFound/>}/>
          </Switch>
        </styledComps.ContentContainer>
        <Footer/>
      </styledComps.PageContainer>
    </div>
  );
}

export default App;
