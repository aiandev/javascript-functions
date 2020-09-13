/**
 * When the values of the radius are the same, 
 * the function always returns the same result. And the execution of the function has no effect on the outside of the function, so this is a pure function.
 * @param int radius 
 * @return float result;
 */
const circleArea = (radius) => {
    return radius * radius * 3.14
}
module.exports = circleArea