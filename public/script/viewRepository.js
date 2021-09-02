const axios = require('axios');

module.exports = {
    github: function(repolist){
        var html = "";
        
        repolist.forEach(repo => {
            html +=
            `
            <div id="repos">
                <div id="name" style="height: 30px;"><a href="${repo.html_url}">${repo.name}</a></div>
                <div id="des" style="height: 30px; font-size: 15px;">${repo.description == null ? " " : repo.description}</div>
                <div id="language">
                </div>
            </div>
            
            `
        });

        
        return html;
    },
    getLang : function(link){    
        return axios.get(link).then((data) => {
            // console.log(Object.keys(data.data));
            return Object.keys(data.data);
        })
    }
}