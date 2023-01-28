import React from "react";

function SkipSectionButton({ skipTo, children }: { skipTo: string, children: React.ReactNode }) {
  return (
    <div className="skip-section-btn-wrapper">
      <a href={`#${skipTo}`} className="skip-section-btn secondary-btn">
        {children}
      </a>
    </div>
  );
}

export default SkipSectionButton;
