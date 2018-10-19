(function(exports) {
  function NoteController(notelist = new NoteList(), anything = NoteListView) {
    this.notelist = notelist
    this.notelist.addNote("Favourite Drink: Lemonade")
    //this.id = this.notelist.
    this.noteListView = new anything(this.notelist)
  }

  NoteController.prototype.uploadList = function() {

    var element = document.getElementById('app');
    element.innerHTML = this.noteListView.returnListHTML()


  };


 exports.NoteController = NoteController;
})(this);


//var test = new NoteController()
//test.uploadList()
