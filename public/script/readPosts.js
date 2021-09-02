var { Remarkable } = require('remarkable');
var md = new Remarkable();
var html2pug = require('html2pug');
var fs = require('fs');

var MarkdownInfo = function (dataObj) {
  var line = dataObj.html.split(/\r\n|\n/);
  // console.log("line : ",line);

  if (line[0] == '---') {
    var i = 1;
    for (; i < line.length; i++) {

      if (line[i] === '---') {
        break;
      }

      else {
        if (line[i].length === 0) continue;
        var temp = line[i].split(/ : |:/);

        if (temp[0] === "title") {
          dataObj[`${temp[0]}`] = temp[1];
        }

        if (temp[0] === "category") {
          dataObj[`${temp[0]}`] = temp[1];
        }

        if (temp[0] === "date") {
          dataObj[`${temp[0]}`] = temp[1];
        }
      }
    }
  }


  var str = "";
  i += 1;
  // // console.log(i);
  for (; i < line.length; i++) {
    str += line[i] + "\n";
  }

  if(dataObj.title == '') dataObj.title = 'untitled'

  // console.log("first : ", dataObj);

  dataObj.html = str;

  dataObj.html = md.render(dataObj.html);

  // console.log("second : ", dataObj);
  dataObj.html = `<div class = "content">` + dataObj.html;
  dataObj.html += `</div>`;

  // console.log("third : " , dataObj);

  dataObj.pug = html2pug(dataObj.html, { tabs: false })

  return dataObj;
}

module.exports = {
  list: function (path) {
    var dir = fs.readdirSync(path, 'utf-8');
    // console.log(dir);
    var postList = {};
    for (var i = 0; i < dir.length; i++) {
      var temp = dir[i];
      var suffix = temp.substr(temp.length - 3, temp.length);
      // console.log(suffix);
      if (suffix === '.md' || suffix === '.MD') {
        var body = fs.readFileSync(`${path}/${temp}`, 'utf-8');
        // // console.log(body);  
        postList[`${temp}`] = MarkdownInfo({ html: body });
        (postList[`${temp}`])["id"] = i;
      }
    }

    // console.log(postList);
    return postList;
  },

  findFilebyId: function (post_list_object, id) {
    // // console.log(Object.keys(post_list_object));
    for (var i = 0; i < Object.keys(post_list_object).length; i++) {
      var postkey = Object.keys(post_list_object)[i];
      // // console.log(post_list_object[postkey].id);
      // // console.log(id);

      if (post_list_object[postkey].id == id) return postkey;
    }

    return undefined;
  },

  
  write: function(fileName, content){
    var temp = fs.writeFile('post/' + fileName + '.MD', content, (err) => {
      if(err){
        console.log(err);
      }
    })

    return temp;
  }
}
