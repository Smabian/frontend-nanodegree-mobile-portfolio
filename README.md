## Getting started

###Part 1: Optimize PageSpeed Insights score

1. Clone the repository
2. To inspect the site, you will need to run a local server

  ```
  1. Go to your project directory
  $> cd /path/to/your-project-folder
  2. Start a simple local python server
  $> python -m SimpleHTTPServer 8080
  ```

3. Open a browser and visit localhost:8080
4. Download and install [ngrok](https://ngrok.com/) to create a tunnel to your local server
5. After installation run ngrok on the port of your local server in your project folder

  ```
  $> ngrok http 8080
  ```
6. Ngrok will then generate a url that you can use to test in PageSpeed Insights.
7. Copy the public URL ngrok gives you and run it through PageSpeed Insights!

#### To Build the Project
1. Download and install nodeJS, Grunt and NPM.
2. After installing nodeJS, cd to the project directory and type:
  ```
  npm install
  ```
After this, you should be able to run Grunt.


##### Optimization steps taken

1. Eliminated render-blocking by loading JS asynchronously
2. Inlined critical CSS and minified JS and CSS by using Grunt critical, uglify, cssmin
3. optimized images to reduce filesize


###Part 2: Optimize Frames per Second

###### Steps taken to achieve 60 FPS

- Update functions where needed so that they don't run more than needed
- Changed document.querySelector to document.getElementByClassName
- Calculate number of pizzas based on window height to reduce the amount of objects created
- Moved variables outside of for loops where necessary such as in the updatePositions function
- Used CSS transform instead of style.left
- Used more efficient requestAnimationFrame
- Stored phase values in array so it is not necessary to calculate them more than once

###### Steps taken to achieve pizza size changing in less then 5ms

- Remove steps out of for loop that only need to run once
- Changed document.querySelector to document.getElementByClassName





