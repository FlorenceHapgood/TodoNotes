 function testUploadList() {
  console.log("takes a note list and adds it to an element on the index html")
  var noteController = new NoteController;
  noteController.uploadList()
  var element = document.getElementById('app');
  var expectedString = '<ul><li> <div> <a href="#note/0">Favourite Drink: Lem</a> </div> </li></ul>'
  console.log(element)
  assert.isTrue(element.innerHTML === expectedString)
};

testUploadList()





function testUploadList_222() {
 console.log("222222 takes a note list and adds it to an element on the index html")

 function NoteListDouble() {
   this.addNoteCallCounter = 0;
 }

 NoteListDouble.prototype = {
     addNote: function() {
       this.addNoteCallCounter++;
     }
 }

 function NoteListViewDouble() {};

 NoteListViewDouble.prototype = {
   returnListHTML: function() {
      return "<ul><li><div>Favourite Drink: Lem</div></li></ul>";
   }
 };

 var listDouble = new NoteListDouble
 var noteController = new NoteController(listDouble, NoteListViewDouble);
 noteController.uploadList()
 var element = document.getElementById('app');
 var expectedString = "<ul><li><div>Favourite Drink: Lem</div></li></ul>"


 assert.isTrue(element.innerHTML === expectedString)
 assert.isTrue(listDouble.addNoteCallCounter === 1)
};

testUploadList_222()
