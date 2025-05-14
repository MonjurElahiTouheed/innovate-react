import  Features  from "./components/Features/Features"
import Banner from "./components/Banner/Banner"
import Content from "./components/Content/Content"
import Navbar from "./components/Navbar/Navbar"
import Integration from "./components/Integration/Integration"
import Services from "./components/Services/Services"
import Facts from "./components/Facts/Facts"
import CTA from "./components/CTA/CTA"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Content></Content>
      <Features></Features>
      <Integration></Integration>
      <Services></Services>
      <Facts></Facts>
      <Footer></Footer>
    </>
  )
}

export default App
