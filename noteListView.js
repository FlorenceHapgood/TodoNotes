(function(exports) {
  function NoteListView(noteList){
    this.noteList = noteList //I think the problem is that I'm passing in a notelist object not an array
  };

  NoteListView.prototype.returnListHTML = function () {

    var array = this.noteList.returnList()
    var startList = "<ul>"
    var htmlstring = array.map( item => '<li> <div> <a href = "#note/' + item.id + '">' + item.text.substring(0, 20) + '</a> </div> </li>').join('')
    var endList = "</ul>"
    return startList + htmlstring + endList
  };



  exports.NoteListView = NoteListView
})(this);
