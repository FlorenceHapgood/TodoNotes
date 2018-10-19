
   function testReturnListHTML() {
     var noteList = new NoteList()
     noteList.addNote("Thing")
     noteList.addNote("Stuff")
     var noteListView = new NoteListView(noteList);
     var listItem = noteListView.returnListHTML()
     var idealListItem = "<ul><li><div>Thing</div></li><li><div>Stuff</div></li></ul>"
     console.log(listItem)
     console.log(idealListItem)
     console.log("hi")
     return assert.isSame(listItem, idealListItem)

   }


  testReturnListHTML()

  function testReturnListHTMLForLongNotes() {
    var noteList = new NoteList()
    noteList.addNote("123456789012345678901234567890")
    noteList.addNote("123456789012345678901234567890")
    var noteListView = new NoteListView(noteList);
    var listItem = noteListView.returnListHTML()
    var idealListItem = "<ul><li><div>12345678901234567890</div></li><li><div>12345678901234567890</div></li></ul>"
    console.log(listItem)
    console.log(idealListItem)
    console.log("Yello")
    return assert.isSame(listItem, idealListItem)

  }


 testReturnListHTMLForLongNotes()
