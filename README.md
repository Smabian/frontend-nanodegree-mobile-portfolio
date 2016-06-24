## Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

How to run index.html through PageSpeed Insights

1. Clone the repository
2. To inspect the site, you will need to run a local server

  In command prompt:
  $> cd /path/to/your-project-folder
  $> Make sure Python is listed in the path by typing 'path' and hitting 'enter'
  $> If it is not listed, you will need to add it by typing path cd /path/to/python; (Example: c:/python35-32;) %path%
  $> This should add a path to python to your project directory.  To start the local sever in python 3 and above, type:
  $> python -m http.server 8080
  $> To start the local server in versions before 3, type:
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
2. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```
  Ngrok will then generate a url that you can use to test in PageSpeed Insights.

3. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

#### To Build the Project
1. Download and install nodeJS, Grunt and NPM.
2. After installing nodeJS, cd to the project directory and type:
   npm install
This will install the node modules and dependencies.  After this, you should be able to run Grunt.


##### Steps taken to achieve PageSpeed score of at least 90:

1. Eliminated render-blocking by loading JS asynchronously
2. Inlined critical CSS and minified JS by using Grunt critical and uglify



####Part 2: Optimize Frames per Second in pizza.html

##### Steps taken to achieve 60 FPS

1. De-nested functions from other functions where necessary so that they don't run more than needed
2. Changed document.querySelector to the more efficient document.getElementById or document.getElementByClassName
3. Calculate number of pizzas based on window height
4. Moved variables outside of for loops where necessary such as in the updatePositions function
5. Used CSS transform instead of style.left
6. Used more efficient requestAnimationFrame
7. Stored phase values in array so it is not necessary to calculate them more than once







