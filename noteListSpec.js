
  function testReturnList() {
    var noteList = new NoteList();
    assert.isTrue(noteList.returnList() === noteList.list)
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



     NoteList.prototype.returnList = function() {
       return this.list
     }
