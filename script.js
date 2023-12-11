const headingArea = document.getElementById('heading');
headingArea.style.textAlign = 'center';
headingArea.style.marginTop = '100px';
headingArea.style.fontSize = '42px';
const sec = document.getElementById('blog-area');
sec.style.padding = '50px 0px 100px 0px';
sec.style.display = 'flex';
sec.style.gap = '30px';
sec.style.justifyContent ='center';
sec.style.maxWidth = '1250px';
sec.style.margin = 'auto';

// Add a media query for screens with a maximum width of 767px (typical for mobile devices)
const mediaQuery = window.matchMedia('(max-width: 767px)');

// Function to apply styles for mobile screens
function handleMobileScreen(e) {
    if (e.matches) {
        sec.style.flexDirection = 'column'; // Stack elements vertically
        sec.style.alignItems = 'center'; // Center items in the container
    } else {
        sec.style.flexDirection = 'row'; // Reset to horizontal layout for larger screens
        sec.style.alignItems = 'initial'; // Reset alignment for larger screens
    }
}

// Initial check and call the function
handleMobileScreen(mediaQuery);

// Add listener for changes in screen width
mediaQuery.addListener(handleMobileScreen);


const image = document.getElementsByClassName('imgg');
for(const singleImage of image){
    singleImage.style.width = '300px';
  
}
const blogCard = document.getElementsByClassName('blog');
for(const blogItem of blogCard){
    blogItem.style.display= 'flex';
    blogItem.style.flexDirection ='column';
    blogItem.style.backgroundColor = 'purple';
    blogItem.style.textAlign = 'center';
    blogItem.style.alignItems = 'center';
    blogItem.style.padding = '20px';
    blogItem.style.color = '#fff';
    blogItem.style.border = '5px solid pink';
    blogItem.style.borderRadius = '14px';
}
// document.getElementsByTagName('img').style.width = '300px'


