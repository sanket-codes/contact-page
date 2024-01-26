import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
