// (function (exports) {
   function testReturnListHTML() {
     var noteListView = new NoteListView(["Thing", "Stuff"]);
     var listItem = noteListView.returnListHTML()
     var idealListItem = "<ul><li><div>Thing</div></li><li><div>Stuff</div></li></ul>"
     return assert.isSame(listItem, idealListItem)
     console.log("hi")
   }

//exports.testReturnListHTML = testReturnListHTML
  testReturnListHTML()
// })(this);

//["Thing", "Stuff", "More stuff"]


//"<ul><li><div>Thing</div></li><li><div>Stuff</div></li></ul>"
