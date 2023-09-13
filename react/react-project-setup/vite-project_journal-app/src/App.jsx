
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { EntryForm } from './components/EntryForm'
import { Footer } from './components/Footer'
import {EntriesSection} from'./components/EntriesSection'

function App() {
  

  return (
    <>
    <Header>JOURNAL</Header>
    <Main>
      <EntryForm/>
      <EntriesSection/>

    </Main>
    <Footer>Journal App - 2023</Footer>
    
    </>
  )
}

export default App
