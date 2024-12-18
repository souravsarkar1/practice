import Footer from "../components/Footer"
import LandingPage1 from "../components/LandingPage1"
import AccountingSteps from "../components/LandingPage2"
import LandingPage3 from "../components/LandingPage3"
import LandingPage4 from "../components/LandingPage4"
import LandingPage5 from "../components/LandingPage5"
import LandingPage6 from "../components/LandingPage6"
import LandingPage7 from "../components/LandingPage7"
import LandingPage8 from "../components/LandingPage8"
import LandingPage9 from "../components/LandingPage9"

const Home = () => {
    return (
        <div className="flex flex-col">
            <LandingPage1 />
            <AccountingSteps />
            <LandingPage3 />
            <LandingPage4 />
            <LandingPage5 />
            <LandingPage6 />
            <LandingPage7 />
            <LandingPage8 />
            <LandingPage9 />
            <Footer />
        </div>
    )
}

export default Home
