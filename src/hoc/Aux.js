// Higher Order Component - wrap other components to add a certain functionality

// only returning what's between the tags
const aux = (props) => props.children;
/*
const aux = (props) => {
    return ({props.children})
}*/

export default aux;