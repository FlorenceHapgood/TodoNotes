(function(exports) {
  function NoteList() {
     this.list = []
  };

  NoteList.prototype.returnList = function() {
    return this.list
  }

  NoteList.prototype.addNote = function(note) {
    this.list.push(note);
  }

  exports.NoteList = NoteList;
})(this);
