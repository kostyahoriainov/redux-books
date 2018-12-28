import { categories } from '../books';
import { arrayToMap } from '../utils';

console.log(categories)
const defaultState = arrayToMap(categories);
console.log(defaultState)

export default (state = defaultState, action) => {

    return state
}