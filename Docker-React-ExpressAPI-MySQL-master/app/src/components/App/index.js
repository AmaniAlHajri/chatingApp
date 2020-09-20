import React from 'react';
import Chat from '../ChatPage';
import ContactList from "../ContactListPage";
import { Route, Switch } from 'react-router-dom';

export default function App() {
    return (
      <div className="App">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
          <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
          <Switch>
              <Route path="/" component={ContactList} exact />
              <Route path="/msg" component={Chat} />
          </Switch>
    </div>
    );
}
