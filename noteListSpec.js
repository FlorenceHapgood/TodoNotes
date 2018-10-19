
  function testReturnList() {
    var noteList = new NoteList();
    if (assert.isSame(noteList.returnList(), noteList.list) === true) {
      console.log("This test is passing!")
    }
  }

   testReturnList()

  function testaddNote() {
    var noteList = new NoteList();
    noteList.addNote("text")
    return assert.includes(noteList.list, "text")
  }


   testaddNote()


   function testAddNoteIncrementsCounter() {
     var noteList = new NoteList()
     noteList.addNote("text")
     assert.isSame(noteList.idcounter, 1)
   }

   testAddNoteIncrementsCounter()
