function SkipSectionButton({ skipTo, children }) {
    return(
        <div className="skip-section-btn-wrapper">
            <a href={`#${skipTo}`} className="skip-section-btn secondary-btn">
            {children}
            </a>     
        </div>          
    )
}

export default SkipSectionButton;
