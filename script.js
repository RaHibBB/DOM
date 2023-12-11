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


