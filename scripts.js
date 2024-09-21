// Get elements
const myImg = document.getElementById('myImg');
const imgSrc = document.getElementById("imgSrc");
const imgTitle = document.getElementById('imgTitle');
const imgAlt = document.getElementById('imgAlt');
const setContentBtn = document.getElementById('setContentBtn');



setContentBtn.addEventListener('click', function () {
  if(imgSrc.value){
    myImg.src = imgSrc.value;
    imgSrc.value = '';
  }
 
  if (imgTitle.value) {
    myImg.title = imgTitle.value
    imgTitle.value = '';
  }

  if (imgAlt.value) {
    myImg.alt = imgAlt.value;
    imgAlt.value = '';
  }

})











