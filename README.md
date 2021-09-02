# Blog Template using Javascript

## Environment

### Device Version

 - OS : Window 10, Window 11
 - CPU : Intel(R) Core(TM) i7-1065G7 CPU @ 1.30GHz  1.50 GHz
 - RAM : 16.0GB

### Program Version - Please check `package.json`
 - NodeJS : 14.7.3
 - npm : 6.14.13
 - pm2 : 5.1.0

----

## Configuration

### post
 - You can write your post using `Markdown`(.md) in this folder in proper form
<br>

####  You must write this header in your post

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