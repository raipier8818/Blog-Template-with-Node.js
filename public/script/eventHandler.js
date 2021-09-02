var createBtn = document.getElementById('createBtn').firstChild;
var editBtn = document.getElementById('editBtn').lastChild;

createBtn.addEventListener('click', function(){
  console.log('create')
})

editBtn.addEventListener('click', function(){
  console.log('edit');
  alert("Edit is unavailable now.")
})