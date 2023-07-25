import Collapsible from "../Collapse"

const CollapseList = (engagements) => {
    return (
    <ul className="about">
        {engagements.map(engagement =>
            Collapsible(engagement)
        )}
    </ul>
    )
}

export default CollapseList