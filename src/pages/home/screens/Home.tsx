import LandingPage1 from "../components/LandingPage1"
import AccountingSteps from "../components/LandingPage2"
import LandingPage3 from "../components/LandingPage3"
import LandingPage4 from "../components/LandingPage4"
import LandingPage5 from "../components/LandingPage5"

const Home = () => {
    return (
        <div>
            <LandingPage1 />
            <AccountingSteps />
            <LandingPage3 />
            <LandingPage4 />
            <LandingPage5 />
        </div>
    )
}

export default Home
