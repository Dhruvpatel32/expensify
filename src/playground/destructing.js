console.log("destructing is running");
const book={
    name:"stories we nevew tells",
    author:" Savi sharma",
    detailes:{
        publisher:"one nd twoo",
        pages:"264"
    }
}

const {publisher,pages}=book.detailes
console.log(`${publisher} is a famous book by ${pages}`);