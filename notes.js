//a collection of items
const notes = ["note1", "note2", "note3"]
console.log(notes[1]);
notes[1]="something else";

notes.forEach(function (item,index) {
    console.log(`${index}--${item}`);
});
let index = notes.findIndex(function(note) {
    return note==="note";
});
notes.forEach(function (note,position) {
    console.log(note);
    console.log(position);

    

    
});