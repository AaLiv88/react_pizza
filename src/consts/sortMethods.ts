interface ISortMethod {
    name: string;
    type: string;
}

const sortMethods: ISortMethod[] = [
    { name: "сначало популярное", type: "rating" },
    { name: "сначало дорогое", type: "price" },
    { name: "сначало дешевое", type: "-price" },
    { name: "алфавиту", type: "title" },
];

export default sortMethods;