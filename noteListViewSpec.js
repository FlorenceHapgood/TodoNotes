 (function (exports) {
   function testReturnListHTML() {
     var noteList = new NoteList()
     noteList.addNote("Thing")
     noteList.addNote("Stuff")
     var noteListView = new NoteListView(noteList);
     var listItem = noteListView.returnListHTML()
     var idealListItem = "<ul><li><div>Thing</div></li><li><div>Stuff</div></li></ul>"
     return assert.isSame(listItem, idealListItem)
     console.log("hi")
   }

exports.testReturnListHTML = testReturnListHTML
//  testReturnListHTML()
 })(this);
