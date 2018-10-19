  function testReturnText() {
    var note = new Note("someText");
  return assert.isSame(note.returnText(), "someText")

  }


 function testReturnID() {
   var note = new Note("someText", 97)
   return assert.isSame(note.returnID(), 97)
 }

testReturnText()
testReturnID()
