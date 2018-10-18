(function(exports) {
  function NoteListView(noteList){
    this.noteList = noteList //I think the problem is that I'm passing in a notelist object not an array
    console.log(this.noteList)
  };

  NoteListView.prototype.returnListHTML = function () {
    var array = this.noteList["list"]
    return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView
})(this);
