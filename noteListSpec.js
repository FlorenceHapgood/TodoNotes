(function(exports) {
  function testReturnList() {
    var noteList = new NoteList();
    if (assert.isSame(noteList.returnList(), noteList.list) === true) {
      console.log("This test is passing!")
    }
  }

//testReturnList()
  exports.testReturnList = testReturnList
})(this);


(function(exports) {
  function testaddNote() {
    var noteList = new NoteList();
    noteList.addNote("text")
    return assert.includes(noteList.list, "text")
  }

  exports.testaddNote = testaddNote
})(this);
