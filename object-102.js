//using functions in objects

let mybook={
    tittle:`Harry Potter`,
    author:`JK Rowling`,
    pagecount:`600`,
};

let mybook2={
    tittle:`Safe Harbour`,
    author:`Danniel Steel`,
    pagecount:`700`,
};

let getsummary=function(book) {
    return{
        summary:`${book.tittle}by ${book.author}`,
    };
};
let booksummary=getsummary(mybook1);
console.log(booksummary.summary);