export default function(list) {
    return list.reduce((sum, pizza) => pizza.count + sum, 0);
}