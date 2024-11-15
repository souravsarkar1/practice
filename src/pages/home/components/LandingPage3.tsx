import backgroundImage from "../../../assets/landingpage/secondlandingPage.jpg"
const LandingPage3 = () => {
    return (
        <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '0',
            background: `linear-gradient(270deg, #186b9f 26.03%, rgba(14, 103, 117, 0.853) 43.59%, rgba(34, 72, 89, 0) 74.13%), url(${backgroundImage}), #224859`,
            transform: 'matrix(-1, 0, 0, 1, 0, 0)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>

        </div>
    )
}

export default LandingPage3