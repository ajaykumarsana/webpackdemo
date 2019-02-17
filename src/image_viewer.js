//import big from '../assets/big.jpg';
import small from '../assets/small.jpg';
import './css/image_viewer.css';

export default () => {
    const img = document.createElement('img');
    img.src = small;
    document.body.appendChild(img);
}


// const imgBig = document.createElement('img');
// imgBig.src = big;
// img.src = "http://lorempixel.com/400/400";
// document.body.appendChild(imgBig);