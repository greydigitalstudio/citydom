

const Checkerboard = (props) => {
    return (
<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.538147" width="4.625" height="4.6276" fill={props.selected ? "#2B2F36" : "#A8AAAC"}/>
<rect y="8.04236" width="4.625" height="4.6276" fill={props.selected ? "#2B2F36" : "#A8AAAC"}/>
<rect x="7.75" y="0.538147" width="4.625" height="4.6276" fill={props.selected ? "#2B2F36" : "#A8AAAC"}/>
<rect x="7.75" y="8.04236" width="4.625" height="4.6276" fill={props.selected ? "#2B2F36" : "#A8AAAC"}/>
</svg>
    )}

export default Checkerboard