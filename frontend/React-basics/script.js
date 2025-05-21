console.log("hello-1");
console.log("hello-2");
console.log("hello-3");


async function main() {

const response = await fetch("https://dummyjson.com/products")
const result = await response.json()

console.log("main:",result)

}
main()