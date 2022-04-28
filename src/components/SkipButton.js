function SkipButton({ skipTo }) {
    return(
        <>
            <div className="skip-proj-btn-wrapper">
                <a href={`#${skipTo}`} className="skip-proj-btn secondary-btn">
                Skip Projects
                </a>     
            </div>          
        </>
    )
}

export default SkipButton;