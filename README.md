YT link:
https://www.youtube.com/watch?v=FXpIoQ_rT_c

The video is seperated in mutliple time stamps with each having its own topic and changing/adding something to the code
Now in order to properly show the value and comments added i will commit after each timestamp and leave the infos in the code comments  


### What is Vue.js? 
[0:01:03](https://www.youtube.com/watch?v=FXpIoQ_rT_c&t=63s) 

**How is Vue helpful:**
allows you create Dynamic Applications
has tools for Code Organization
increases the Speed of Development
has helpful Dev Tools
Helps with Scaling web applications

**Features & Benefits**
is a Virtual DOM -> makes JS faster and more efficient
it's Lightweight so small file size
is progressive as in easily usable for any kind of scenario from small to gigantic 
allows you to chose which features you want add from the Vue Ecosystem
it's Flexible as it lets you chose the different tools on your own or pick ones that Vue recommends 
it allows for incrementally adoptability as you can go page for page and change the website to new code without having to rewrite the whole thing from the bottom up

### Vue 3 Setup 
[0:05:40](https://www.youtube.com/watch?v=FXpIoQ_rT_c&t=340s) 
https://vuejs.org/guide/quick-start.html

Use this for direct use without creating the project as a vue project:
```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
```

or use a vue project from the get go (without the '$')

```
$ npm create vue@latest

$ cd <your-project-name>
$ npm install
$ npm run dev

$ npm run build

```

### App demo
After the point of App demo in the video, she pulls up a complete html and css project which was linked in the description of the video via github 
which i copied because i don't want to type off everything she shows and in order to learn vue i can't just make my own without knowing what is needed so i just copied it

also i can't explain what the json files are for in the json files so i will do it here as well
package.json:
first parte contains some metadata of the project
the script section contains the start server which compiles the styles(sass) and serves our application for us as well as some other stuff i guess

src contains all the main stuff of code we use and write


