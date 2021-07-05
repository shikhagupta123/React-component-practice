import React from "react";
import Card from "./card";
import Heading from "./Heading";
import contacts from "../contacts";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      {contacts.map(createCard)}
      {/* <Card 
    name={contact[0].name}
    imgURL={contact[0].imgURL}
    phone={contact[0].phone}
    email={contact[0].email}
    />
    <Card 
    name={contact[1].name}
    imgURL={contact[1].imgURL}
    phone={contact[1].phone}
    email={contact[1].email}
    />
    <Card 
    name={contact[2].name}
    imgURL={contact[2].imgURL}
    phone={contact[2].phone}
    email={contact[2].email}
    /> */}
    </div>
  );
}

export default App;
