(function(exports) {
  function Note(text) {
    this.text = text;
  };

  Note.prototype.returnText = function(){
    return this.text
  };

  exports.Note = Note;
})(this);






// var CreateNote = function(heading, text) {
//     return {
//         title: heading,
//         body: text
//     }
// };
//
// module.exports.CreateNote = CreateNote;
