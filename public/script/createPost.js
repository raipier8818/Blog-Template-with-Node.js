// var postContent = document.getElementById('postContent')
// var lineHeight = 16;
// postContent.style.fontSize = lineHeight;
// function resizeTextArea(){
//   postContent.style.height = "1px";
//   postContent.style.height = (postContent.scrollHeight + lineHeight) + "px";  
// }
// resizeTextArea()


var postDate = document.getElementById('postDate');
var today = new Date();
postDate.value = today.getFullYear() + "-" + ((today.getMonth() + 1 >= 10) ? (today.getMonth() + 1) : ("0" + (today.getMonth() + 1))) + "-" + (today.getDate() >= 10 ? today.getDate() : "0" + today.getDate()); 


var directCategory = document.getElementById('directCategory');
var categoryOption = document.getElementById('categoryOption');
var category = categoryOption.value;
directCategory.style.visibility = 'hidden'


categoryOption.addEventListener('change', () => {
  if(categoryOption.value == 'direct'){
    directCategory.style.visibility = 'visible'
    directCategory.value = "";
    postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + "" + '\n' + 'date : ' + postDate.value + '\n' + '---\n';
  }else{
    directCategory.style.visibility = 'hidden'
    category = categoryOption.value;
    postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + category + '\n' + 'date : ' + postDate.value + '\n' + '---\n';
  }
})

var postTitle = document.getElementById('postTitle');
var postContent = document.getElementById('postContent');
// var categories = [];

postContent.value = postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + category + '\n' + 'date : ' + postDate.value + '\n' + '---\n';

postTitle.addEventListener('input', () => {
  postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + category + '\n' + 'date : ' + postDate.value + '\n' + '---\n';
})

postDate.addEventListener('input', () => {
  postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + category + '\n' + 'date : ' + postDate.value + '\n' + '---\n';
})

directCategory.addEventListener('input', () => {
  category = directCategory.value;
  postContent.value = '---\n' + 'title : ' + postTitle.value + '\n' + 'category : ' + category + '\n' + 'date : ' + postDate.value + '\n' + '---\n';
})

// postContent.addEventListener('input', () => {
//   var postInfo = postContent.value.split(/\r\n|\n/);
//   // console.log(postInfo);

//   var title = postInfo[1].split(' ').slice(2).join(' ');
//   console.log(title);

//   var category = postInfo[2].split(' ').slice(2).join(' ');
  
  


//   var date = postInfo[3].split(' ')[2];

//   postTitle.value = title
//   postDate.value = date
// })