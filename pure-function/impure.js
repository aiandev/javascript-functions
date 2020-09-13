// This counter function will run differently every time, 
// so this is not a pure function.
initValue = 0 
const counter = (increase) => {
    initValue += increase;
    return initValue
}
module.exports = {counter,initValue};