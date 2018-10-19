(function(exports) {
  function NoteList() {
     this.list = []

     this.idcounter = 0
  }

  NoteList.prototype.returnList = function() {
    return this.list
  }

  NoteList.prototype.addNote = function(text) {
    note = new Note(text, this.idcounter)
  //  actualText = note.text
    this.list.push(note);
    this.idcounter++
  }

  exports.NoteList = NoteList
})(this);
