
function Footer({ className }) {
    return <div className={`attribution text-center ${className} `}>
        <span>Challenge by </span>
        <a style={{ fontSize: "inherit" }} className="text-blue-800 hover:text-blue-500" href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor</a>.
        <span> Coded by </span>
        < a style={{ fontSize: "inherit" }} className="text-blue-800 hover:text-blue-500" href="mailto:tohid_d.milan@yahoo.com" >
            Tohid Dalaei Milan</a >.
    </div >
}

export default Footer