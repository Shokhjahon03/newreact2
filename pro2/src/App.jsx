
import { Fragment } from 'react'
import './App.css'
import Nav from './components/header/Nav'
import Hero from './components/header/Hero'
import Section_1 from './components/main/section_1'
function App() {


  return (
    <Fragment>
      <header>
        <Nav/>
        <Hero/>
      </header>
      <main>
        <Section_1/>
      </main>
    </Fragment>
  )
}

export default App
