import React, { useState } from "react";

const Collapsible = (prop) => {
    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }
    
    return (
        <li key={prop.id} className="collapsible">
            <p className="collapsible__title">
                {prop.name}
                <i className={isOpen ? "fa fa-chevron-up animation" : "fa fa-chevron-up animation-reverse"} onClick={handleClick}></i>
            </p>
            <div className="collapsible__content">
                <p className={isOpen ? "collapsible__content--show" : "collapsible__content--hide"}>{prop.description}</p>
            </div>
        </li>
    )
    
}

export default Collapsible;