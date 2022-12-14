import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import { LoginForm } from "./components/Login/LoginComponent";
import { Header } from "./components/Header/Header";
import { Feed } from "./containers/Feed/Feed";
import { Home } from "./components/Home/Home";
import { QuestionPage } from "./components/Questions/QuestionPage";
import { QuestionForm } from "./containers/Forums/Questions/NewQuestion";
import { ReplyForm } from "./components/Replies/Reply";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
  useHistory,
  NavLink,
} from "react-router-dom";
import React from "react";
import { selectPass } from "./components/Login/LoginSlice";
import { useSelector, Provider } from "react-redux";
import store from "./store";
import reportWebVitals from "./reportWebVitals";
import { Forums } from "./containers/Forums/Forums";
import { SignUpForm } from "./components/Login/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signUp">
        <SignUpForm/>
      </Route>
      <Route exact path="/">
        <main>
          <h1>
            Welcome to <br />
            Peer 2 Peer University
            <br />
            the home of <br />
            learning circles
          </h1>
        </main>
      </Route>
      <Route exact path="/feed">
        <Feed />
      </Route>
 
        <Route exact path="/forums/:id">
          <QuestionPage />
        </Route>
        <Route exact path="/forums/:qid/:rid">
          <replyForm/>
        </Route>
        <Route exact path="/forums">
          <Forums />
        </Route>
        <Route exact path="/quest">
          <QuestionForm/>
        </Route>
        <Route exact path="/reply/:id/:title">
          <ReplyForm/>
        </Route>

      <footer>
        <p>BazaTech&copy;</p>
        <p>BazaChat&trade;</p>
        <p>About</p>
        <p>Hire me</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </Router>
);

export default App;
