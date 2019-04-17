#  Givewith Exercise: React-Based Image Carousel

## Getting Started

The following instructions will get you started with running this project on your local machine.

### Prerequisites

This project was intially created with [create-react-app](https://github.com/facebook/create-react-app), per instructions to run this project:

**You’ll need to have Node 8.10.0 or later on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to easily switch Node versions between different projects. - via [create-react-app](https://github.com/facebook/create-react-app) github page.

### Deployment
Clone the repo to your local machine, go to the root directory of the repo and start the development server

```sh
$ cd image-carousel
$ npm start
```

The browser window should automatically load with (default) http://localhost:3000/, access to the react project.

## My Steps to Completing this Project:

My first approach at this assignment was trying to figure out how to dynamically read the contents in the images folder. (Took a ton of my time!) After tons of research, I couldn’t figure it out, and most StackOverflow articles that explained how to display local images had hardcoded filenames of the images used, so my state contains an array of the image filenames. The state also includes the current image index that should be rendered to the webpage
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/state_image.png)
The images live in the public directory.

Next step was displaying the image. I created an ImageComponent that takes the path of the image as a prop and displays the image using an img element. This element will scale with the browser window.
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/imagecomponent_image.png)

For the arrows, I created an ArrowComponent that will handle the left and right arrows. I used the HTML Left and Right Symbols and implemented their onClick methods to increment the state index of which image should be displayed according to the state. In some images, it wasn’t too obvious that the arrows were there, and I found the best position to be at the top of the ImageComponent.
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/arrowcomponent_image.png)
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/arrowhandlers_image.png)

The next thing was figuring out how to make dots. I took advantage of this [nice resource](https://www.w3schools.com/howto/howto_css_circles.asp) which helped me create my DotComponent.
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/dotcomponent_image.png)
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/dotcss_image.png)
I wanted to indicate which current “dot” (index of image) we are looking at, so the way I handled that was when re-rendering the dots component, I declare a *selectedDot* variable, which represents the name of the css class used to create these dots ("dots"). Iterating through the images, if the index equals states current index of the image, selectedDot is now “dots selected” where “selected” is the css subclass of “dots” that overrides the background-color to purple, making it correspond to index of the current image we are looking at.
![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/dotcomponentrender_image.png)

With all these components (and a lot of styling), I successfully implemented a React-Base Image Carousel!

![state](https://raw.githubusercontent.com/issacholguin/image-carousel/master/readme_images/webpage_image.png)

#### Feedback:
* I spent longer than a “few” hours. (Maybe 5-6 in a couple of sessions). I’d say this is my own willingness though. I got a little carried away and was picky with some things I hoped to accomplish, and there are some things I still want to work on. Nevertheless, thank you for respecting my time!
* Great take-home exercise for candidates! I really enjoyed my time making this. Very fun project to work on!

#### Future Implementation Thoughts:
* **Image Transitions**. At the end of my work I realized I did not include this! But definitely will in later implementations.
* Take a list of links to images and display those.
* Resize-able Image Window.









