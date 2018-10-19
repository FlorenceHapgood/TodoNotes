
   function testReturnListHTML() {
     var noteList = new NoteList()
     noteList.addNote("Thing")
     noteList.addNote("Stuff")
     var noteListView = new NoteListView(noteList);
     var listItem = noteListView.returnListHTML()
     var idealListItem = '<ul><li> <div> <a href = "#note/0">Thing</a> </div> </li><li> <div> <a href = "#note/1">Stuff</a> </div> </li></ul>'
     console.log(listItem)
     console.log(idealListItem)
     return assert.isSame(listItem, idealListItem)

   }


  testReturnListHTML()

  function testReturnListHTMLForLongNotes() {
    var noteList = new NoteList()
    noteList.addNote("123456789012345678901234567890")
    noteList.addNote("123456789012345678901234567890")
    var noteListView = new NoteListView(noteList);
    var listItem = noteListView.returnListHTML()
    var idealListItem = '<ul><li> <div> <a href = "#note/0">12345678901234567890</a> </div> </li><li> <div> <a href = "#note/1">12345678901234567890</a> </div> </li></ul>'
    return assert.isSame(listItem, idealListItem)

  }


 testReturnListHTMLForLongNotes()
