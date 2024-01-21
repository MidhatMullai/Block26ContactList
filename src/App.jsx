import { useState } from 'react'
import './App.css'

const [contacts, setContacts] = useState(dummyContacts)

export default function App() {
  return (
    <>
      <ContactList />
    </>
  );
}

