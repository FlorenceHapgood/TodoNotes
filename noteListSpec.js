(function(exports) {
  function testReturnList() {
    var noteList = new NoteList();
    return assert.isSame(noteList.returnList(), noteList.list)
  }


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
