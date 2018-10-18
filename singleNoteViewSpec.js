function testSingleNoteView() {
  console.log("sparkly........")
  var note = new Note("elephant")
  var singleNoteView = new SingleNoteView(note)
  var realVersion = singleNoteView.singleNoteHTML()
  var idealVersion = ("<div>elephant</div>")
  assert.isTrue(realVersion === idealVersion)

}

testSingleNoteView()
