(function(exports) {
  function Note(text, id) {
    this.text = text;
    this.id = id
  };

  Note.prototype.returnText = function(){
    return this.text
  };

  Note.prototype.returnID = function(){
    return this.id
  }


  exports.Note = Note;
})(this);
