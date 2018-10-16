(function(exports) {
  function NoteListView(noteList){
    this.noteList = noteList
  };

  NoteListView.prototype.returnListHTML = function () {
    return ("<ul><li><div>" + this.noteList.join("</div></li><li><div>") + "</div></li></ul>")
  };

  exports.NoteListView = NoteListView
})(this);
