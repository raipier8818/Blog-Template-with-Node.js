// https://html5up.net/stellar

module.exports = {
    mainPage: function (main, body) {
        var headHeight = 354;

        return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>Lake's Blog</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../public/css/index.css">
        </head>

        <body>
            <div class="header">
                <div class="circle_image">
                    <img src="../public/img/profile.png" alt="profile_image" class="image">
                </div>
                <div class="title"><a href="/">${main.title}</a></div>
                <div class="description">${main.description}</div>    
            </div>
            
            <div class="wrapper">
                <div class="nav">
                    <table>
                        <td><a href="login">Log In</a></td>
                        <td><a href="profile">Profile</a></td>
                        <td><a href="post">Posts</a></td>
                        <td><a href="category">Category</a></td>
                    </table>
            
                </div>
                <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
                <script>
                    onscroll = function(){
                        var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
                        //console.log(scrollPos);
                        if(scrollPos > ${headHeight}){
                            $('.nav').css("position", "fixed");
                            $('.nav').css("top", "0");
                            
                            $('.nav').css("height", "60");
                            $('.nav table').css("transform", "scale(0.8)");

                        }
                        else{ 
                            $('.nav').css("height", "80");
                            $('.nav').css("position", "relative");
                            $('.nav table').css("transform", "scale(1,1)");
                        }
                    }

                    onscroll();
                </script>
            
                <div class="body">
                    ${body} 
                </div>
            </div>

            <div class="footer">

                footer area
            </div>
            
        </body>

        </html>
        `
    },

    login_page: function (main) {
        return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>Lake's Blog</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../public/css/index.css">
        </head>

        <body>
            <div class="header">
                <div class="circle_image">
                    <img src="../public/img/profile.png" alt="profile_image" class="image">
                </div>
                <div class="title"><a href="/">${main.title}</a></div>
                <div class="description">${main.description}</div>    
            </div>
                <div id="login-page">
                    <form action="/login" method="POST">
                        <div id="login">
                            <script src="../public/js/login.js"></script>
                            <p>Sign In</p>
                            <input type="text" id="email" name="userId" placeholder="username or email">
                            <input type="password" id="password" name="userPassword" placeholder="password"><br>
                            <input id="loginBtn" type="submit" value = "Login">
                            <p>Or login with</p>
                        </div>
                    </form>
                    <div id="extLogin">
                        <div><img src="../public/img/facebook_login.png" alt="facebook"></div>
                        <div><img src="../public/img/google_login.png" alt="google"></div>
                    </div>
                    <a id="signUp" href="">Sign Up</a>
                </div>
            <div class="footer">

                footer area
            </div>
            
        </body>

        </html>
        
        `
    },


    profile_page: function (profile, github) {
        return `
        
        <div class="profile">
            <div class="profile_wrapper">
                <img src="./public/img/profile.png" alt="profile_image">
                <div class="name">${profile.name}</div>
                <div class="introduce">${profile.introduce}</div>
            </div>
            <div class="info">
                <div class="email">Email<br>
                    <p>${profile.email}</p>
                </div>
                <div class="intagram">Instagram<br>
                    <p>${profile.instagram}</p>
                </div>
                <div class="github">Github<br>
                    <p>${profile.github.address}</p>
                </div>
            </div>
        </div>

        <div id="github">
            ${github}
        </div>
        <script type="text/javascript" src="./public/script/viewRepository.js"></script>
    
        `
    },

    post_list_page: function (post_list_object) {
        var list = `<ol class="post_list" style="grid-template-rows: repeat(10,1fr);">`;
        for (var i = 0; i < Object.keys(post_list_object).length; i++) {
            var postkey = Object.keys(post_list_object)[i];
            list += `
            <li class="post">
                <div class="category">${post_list_object[postkey].category}</div>
                <div class="post_title"><a href="post?id=${post_list_object[postkey].id}">${post_list_object[postkey].title}</a></div>
                <div class="time">${post_list_object[postkey].date}</div>
            </li>
            `;
        }
        list += `
        </ol>
        `;

        return list;
    },
    category_page: function (router, categories) {
        var html = "";
        console.log(categories);
        var categoryKeys = Object.keys(categories);
        categoryKeys.forEach(category => {
            var sector = categories[category];
            html +=
                `
            <div class="sector">
                <div class="category">${category}</div>
            `
            sector.forEach(post => {
                html +=
                    `
                <ul>
                    <li class="post_category">
                        <div><a href="post?id=${post.id}">${post.title}</a></div>
                        <div>${post.date}</div>
                    </li>
                </ul>
                `
            });
            html += `</div>`;
        });
        return html;
    },

    Error_Page: function (error_num, error_description) {
        return `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>Lake's Blog</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="../public/css/index.css">
        </head>

        <body>
            <div class="header">
                <div class="title" style = "margin-top:150px;">${error_num}</div>
                <div class="description">${error_description}</div>    
                <div class="return"><a href = "/">return to main</a></div>    
            </div>

            
        </body>

        </html>
        
        `
    }
}