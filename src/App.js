import React from "react";
import Header from "./components/Header.js";
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';

export default function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path="/characters/:id">
          <CharacterDetails />
        </Route>
        <Route path="/characters">
          <CharacterList />
        </Route>
        <Route path="/">
          <WelcomePage />
        </Route>
      </Switch>
    </main>
  );
}
