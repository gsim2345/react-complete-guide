// Higher Order Component - wrap other components to add a certain functionality

// we can also add a certain logic to a component, that will be used in all of the wrapped components, and not want to write to each of them. fx: share a logged in user.

// only returning what's between the tags
const aux = (props) => props.children;
/*
const aux = (props) => {
    return ({props.children})
}*/

export default aux;