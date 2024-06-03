# Blog Template using Javascript

## Configuration

### post
 - You can write your post using `Markdown`(.md) in this folder in proper form
<br>

####  You must write this header in your post (`post` directory)

```
---
title : Post Title
category : Post Category
date : Post Date
---
```

### public
 - css : css files
 - img : img files (you can change your image : `profile.png`)
 - json : json files (you can change your information of blog : `info.json`)
 - script : javascript files

### views
 - There are pug files that view the blog pages.

### package.json
 - You can check this project's information.

### server.js
 - Main Router

----

## Usage
 - Download this file.
 - Run this blog using server or cloud service. (I'm using Heroku)

----

## Setting

### `info.json`

```json
{
    "main" :{
        "title": "Blog Title",
        "description": "Blog Description"
    },
    
    "profile" : {
        "name" : "Profile Name",
        "introduce"  : "Profile Introduce",
        "email" : "Email",
        "instagram" : "Instagram ID",
        "github" : {
            "address": "Github Address",
            "id" : "Github ID"
        }
    },
    "address" : "Address you do hosting",
    "static" : "Static Folder Path",
    "port" : "Your Port"
}

```

### `main.pug`

 - Main Page : You can set your blog's main page.

### `footer.pug`

 - Footer : You can set your footer.