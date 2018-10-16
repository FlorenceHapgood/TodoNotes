(function(exports) {
  function NoteList() {
     this.list = []
  };

  NoteList.prototype.returnNoteList = function() {
    return this.list
  }

  // function.prototype.AddNote(note) {
  //   this.list.push(note);
  // }

  exports.NoteList = NoteList;
})(this);
