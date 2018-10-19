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

   // NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function () {
   //      window.addEventListener("hashchange", showNoteForcurrentPage());
   //    };
   //
   //   NoteController.prototype.showNoteForcurrentPage = function() {
   //      showNote(getNoteIdFromUrl(window.location));
   //    };
   //
   //  NoteController.prototype.getNoteIdFromUrl = function(location) {
   //      return location.hash.split("#")[1]; //we're taking the noteid from the url so we know which note to get
   //    };
   //
   //  NoteController.prototype.showNote = function(noteId) {
   //
   //      var note = this.notelist.list[noteId].text
   //
   //      document
   //        .getElementById("noteText")
   //        .innerHTML = note;
   //    };


 exports.NoteController = NoteController;
})(this);


//
// var noteController = new NoteController()
// noteController.makeUrlChangeShowNoteForCurrentPage()
