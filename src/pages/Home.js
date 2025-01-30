import Hero from "../components/Hero"
import Features from "../components/Features"
import ProductGrid from "../components/ProductGrid"
// import Why from "../components/Why"
import Feedback from "../components/FeedBack"
import Section from "../components/Section"

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid display={4} />
      <Section/>
      <Feedback/>
    </>
  )
}

export default Home

