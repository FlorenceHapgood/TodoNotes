(function(exports) {
  function testReturnList() {
    var noteList = new NoteList();
    return assert.isSame(noteList.returnList(), noteList.list)
  }


  exports.testReturnList = testReturnList
})(this);
