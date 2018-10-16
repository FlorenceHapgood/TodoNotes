// function testCreateNoteIncludesNoteText() {
//   var note = new Note("someText");
//   var hash = note.CreateNote();
//   assert.hashIncludes(hash, "someText");
// };
//
// testCreateNoteIncludesNoteText()

(function(exports) {
  function testReturnText() {
    var note = new Note("someText");
  return assert.isSame(note.returnText(), "someText")

  }

  


  exports.testReturnText = testReturnText
})(this);
