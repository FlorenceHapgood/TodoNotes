(function(exports) {
  function NoteListView(noteList){
    this.noteList = noteList //I think the problem is that I'm passing in a notelist object not an array
    console.log(this.noteList)
  };

  NoteListView.prototype.returnListHTML = function () {
    var array = this.noteList.returnList()
    var shortArray = array.map(item => item.substring(0, 20))
    return "<ul><li><div>" + shortArray.join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteListView = NoteListView
})(this);
