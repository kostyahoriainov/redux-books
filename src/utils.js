export function mapToArray(obj) {
    return Object.keys(obj).map(key => obj[key]);
}

export function arrayToMap(arr) {
    return arr.reduce( (acc, item) => {
        acc[item.id] = item;
        return acc;
    }, {})
}