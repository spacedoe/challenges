// import { cards } from "./utils/data.js";
// import { Header } from "./components/Header/Header.js";
// import { handleFormSubmit } from "./components/Form/Form.js";
// import { Form } from "./components/Form/Form.js";
// import { Bookmark } from "./components/Bookmark/Bookmark.js";
// import { Card } from "./components/Card/Card.js";
// import { CardList } from "./components/CardList/CardList.js";
import { App } from "./components/App/App.js";
// Store the cards in a global state

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

render();
