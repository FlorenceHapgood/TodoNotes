(function(exports) {
  function NoteList() {
     this.list = []
  };

  NoteList.prototype.returnList = function() {
    return this.list
  }

  NoteList.prototype.addNote = function(text) {
    note = new Note(text)
    actualText =  note.text
    this.list.push(actualText);
  }

  exports.NoteList = NoteList;
})(this);
