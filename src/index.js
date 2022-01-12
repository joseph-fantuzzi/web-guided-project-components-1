// TASK 0- Motivate demoing a small makeImage component
//  that takes an { imgURL } and returns an img element.
//  Then loop over these URLs making images as you go:
const imageData = [
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-tibetan/n02108551_978.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_3398.jpg' },
  { imageURL: 'https://images.dog.ceo/breeds/mastiff-bull/n02108422_2947.jpg' },
]
// const makeImage = (image) => {}
function makeImage({ imageURL }) {
  // const imageURL = image.imageURL
  const dogImg = document.createElement('img');
  dogImg.src = imageURL;
  dogImg.style.height = '10em';
  return dogImg;
}

imageData.forEach(imgObj => {
  const imgElement = makeImage(imgObj);
  // document.body.prepend(imgElement);
})
// TASK 1- Import the data we need to "hydrate" our component.
//  On the one hand, the default export from data/panelData.js
//  On the other hand, the default export from data/constants.js
//  Destructure `open` and `close` from the constants
import panelData from './data/panelData';
import constants from './data/constants';
import linkData from './data/linkData';

const { open, close } = constants;
/**
 * const open = constants.open;
 * const close = constants.close;
 */

// TASK 2- Verify our imports using log statements
// console.log(panelData); // log the panelData
// console.log(open); // log the open arrow
// console.log(close); // log the close arrow


// TASK 3- Comment out the div.panel from index.html and grab its parent element.
//  We will generate the panel with code, and we'll need the parent
//  so we can append the code-generated panel to the DOM.
const accordion = document.querySelector('.accordion');


// TASK 4- Create a function 'makePanel' that creates a panel exactly as you see it in the HTML.
function makePanel(panelData) {


  // TASK 5- Instantiate all the elements needed for a panel
  const panel = document.createElement('div');
  const panelBar = document.createElement('div');
  const panelContent = document.createElement('div');
  const panelTitle = document.createElement('h3');
  const panelButtons = document.createElement('div');
  const openButton = document.createElement('button');
  const closeButton = document.createElement('button');


  // TASK 6- Setup the structure of our elements
  /*
    <div>                   // panel
      <div>                 // panelBar
        <h3></h3>           // panelTitle
        <div>               // panelButtons 
          <button></button> // openButton
          <button></button> // closeButton
        </div>
      </div>
      <div></div>           // panelContent
    </div>
  */
  panel.appendChild(panelBar);
  panel.appendChild(panelContent); // <div><div></div><div></div></div>
  panelBar.appendChild(panelTitle);
  panelBar.appendChild(panelButtons);
  panelButtons.appendChild(openButton);
  panelButtons.appendChild(closeButton);

  // TASK 7- Add proper class names to our elements (See index.html for reference)
  // paying attention to the elements that need to start out hidden
  // <!-- Remove this -->
  // <div class="panel">
  //   <div class="panel-bar">
  //     <h3>Title of Panel</h3>
  //     <div class="panel-buttons">
  //       <button class="panel-btn-open">&#9660</button>
  //       <button class="panel-btn-close hide-btn">Close</button>
  //     </div>
  //   </div>
  //   <div class="panel-content toggle-on">
  //     Content of panel
  //   </div>
  // </div>
  // <!-- Remove this -->
  panel.classList.add('panel');
  panelBar.classList.add('panel-bar');
  panelButtons.classList.add('panel-buttons');
  openButton.classList.add('panel-btn-open');
  closeButton.classList.add('panel-btn-close', 'hide-btn');
  panelContent.classList.add('panel-content');

  // TASK 8- Set text content using arguments as raw material
  //  and also using the open and close arrows imported at the top of the file
  panelTitle.textContent = panelData.title;
  panelContent.textContent = panelData.content;
  openButton.textContent = open;
  closeButton.textContent = close;

  // TASK 9- When the 'open' or 'close' buttons are clicked, the content is toggled on/off:
  //  - the open button needs to go away (the 'hide-btn' class name controls this)
  //  - the close button needs to show (the 'hide-btn' class name controls this)
  //  - the contents need to show (the 'toggle-on' class name controls this)
  panelButtons.addEventListener('click', evt => {
    openButton.classList.toggle('hide-btn');
    closeButton.classList.toggle('hide-btn');
    panelContent.classList.toggle('toggle-on');
  })

  // don't forget to return the panel!
  return panel;
}

// const testData = { title: 'foo', content: 'bar' };
// const testPanel = makePanel(testData);
// const testPanel = makePanel({ title: 'foo', content: 'bar' });
// accordion.appendChild(testPanel);

// TASK 10- Loop through the panelData we imported from the data folder
//  creating panels for each content and title and append them to the DOM.
//  We can do this with a single forEach, or with a map and a forEach.
const panelElems = panelData.map(data => {
  return makePanel(data);
})

panelElems.forEach(elem => {
  accordion.appendChild(elem);
})

panelData.forEach(data => {
  const elem = makePanel(data);
  accordion.appendChild(elem);
})

/**
 * map => iterates over an array doing something with each value and returns a new array
 * filter => iterates over an array and returns a new array with values that match a conditional
 * reduce => iterates over an array and returns a singular value
 */
// [STRETCH] Comment out the links inside the nav and
// write a linkMaker that takes { href, className, text }
// and returns an anchor tag with the right href, class and textContent.
// Loop over the 'linkData' in the data folder, generate anchor tags
// and append them to the nav.

{/* <a href="#" class="nav-item">Home</a>
<a href="#" class="nav-item">About</a>
<a href="#" class="nav-item">Blog</a>
<a href="#" class="nav-item">Contact</a> */}

function linkMaker({ href, className, text }) {
  // const href = obj.href
  // const className = obj.className;
  // const text = obj.text;
  const link = document.createElement('a');
  link.href = href;
  link.className = className;
  link.textContent = text;
  return link;
}

// document.body.prepend(linkMaker({ href: 'https://www.loremipsum.com', className: 'blah', text: 'blah'}));
linkData.forEach(data => {
  const linkElem = linkMaker(data);
  document.querySelector('.main-nav').appendChild(linkElem);
})