function SkipButton({ skipTo, children }) {
    return(
        <>
            <div className="skip-btn-wrapper">
                <a href={`#${skipTo}`} className="skip-btn secondary-btn">
                {children}
                </a>     
            </div>          
        </>
    )
}

export default SkipButton;
