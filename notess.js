const note=[
    {
        title:"my next step",
        body:"awesome spain it is",
    },
    {
        title:"attend book session",
        body:"london arts",
    },
    {
        title:"book i am reading",
        body:"safe habour",
    },
    {
        title:"java script conference",
        body:"amsterdam center,netherlands",
    },
    {
        title:"formulae1",
        body:"qatar rally",
    },
];
//console.log(note[3].boby);
//note.forEach(function (item) {
    //console.log(item.body);

   
   // const findnote=function (notesdata,notetitle) {
       // return notesdata.find(function (item) {
         //   return item.title===notetitle;
            
       // });
        
   // };
    //console.log(findnote(note,"attend book session"));

    const findNote=function (notesData, noteTitle) {
        return notesData.findIndex(function (item) {
            return item.title===noteTitle;
          
        });
    };
        console.log(findNote(note,"attend book session"))