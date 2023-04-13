const {createApp} = Vue;

createApp({

  data(){
    return{
      imgCounter: 0,
      imgDB : [
        {
          src: './img/01.webp',
          alt: 'img',
          isActive: true
        },
        {
          src: './img/02.webp',
          alt: 'img',
          isActive: false
        },
        {
          src: './img/03.webp',
          alt: 'img',
          isActive: false
        },
        {
          src: './img/04.webp',
          alt: 'img',
          isActive: false
        },
        {
          src: './img/05.webp',
          alt: 'img',
          isActive: false
        }
      ],
      active: 'active',
      isPlaying: false
    }
  },

  methods:{

    bottonBwd(){

      if(this.imgCounter > 0){

        this.imgCounter--;
        this.getClassActive(this.imgCounter);

      }else{

        this.imgCounter = this.imgDB.length - 1;
        this.getClassActive(this.imgCounter);

      }
    },

    bottonFwd(){

      if(this.imgCounter < this.imgDB.length - 1){

        this.imgCounter++;
        this.getClassActive(this.imgCounter);

      }else{

        this.imgCounter = 0;
        this.getClassActive(this.imgCounter);

      }
    },

    imgActivate(index){
      this.imgCounter = index;
      this.getClassActive(index);
    },

    getClassActive(index){
      this.imgDB.forEach(image => {
        image.isActive = false;
      });
      this.imgDB[index].isActive = true;
      //console.log(this.imgDB[index].isActive);
    },

    play(){
      console.log('ciao');
    }

  },

  mounted(){
    //console.log(this.imgCounter);
  }

}).mount('#app');





// const sliderArr = [];
// const msSlider = document.querySelector('.ms-slider');
// const msThumbs = document.querySelector('.ms-thumbnails');
// const msBtnFwd = document.querySelector('.ms-slider-controller.forward');
// const msBtnBwd = document.querySelector('.ms-slider-controller.backward');
// const msBtnCss = document.querySelector('.ms-wrapper .css-btn');
// const basicCss = "./css/style.css";
// const bonusCss = "./css/style-bonus.css";
// let displayBonus = false;

// const cssLink = document.getElementsByTagName('link');

// cssLink[3].href = basicCss;

// msBtnCss.addEventListener('click', function(){
//   if (!displayBonus){
//     msBtnCss.innerHTML = 'display basic style';
//     cssLink[3].href = bonusCss;
//     displayBonus = !displayBonus;
//   } else{
//     msBtnCss.innerHTML = 'display bonus style';
//     cssLink[3].href = basicCss;
//     displayBonus = !displayBonus;
//   }
// });

// console.log(cssLink[3], msBtnCss);

// let imgCounter = 0;

// function parentMultiple(parent, child){
//   const imgTag = new Image;
//   imgTag.src = child.src;
//   parent.append(imgTag);
// }

// for (let i = 0; i < 5; i++){
//   const msImg = document.createElement('img');
//   const msImgCont = document.createElement('div');

//   msImg.src = `./img/0${i+1}.webp`;
//   parentMultiple(msImgCont, msImg);

//   msImg.classList.add('d-none');
//   msImgCont.classList.add('ms-img-cont');

//   sliderArr.push(msImg);

//   msSlider.append(sliderArr[i]);
//   msThumbs.append(msImgCont);
// }

// sliderArr[imgCounter].classList.remove('d-none');
// const sliderThumb = document.getElementsByClassName('ms-img-cont');
// sliderThumb[imgCounter].classList.add('active');


// msBtnFwd.addEventListener('click', function(){
//   if(imgCounter < (sliderArr.length - 1)){

//     sliderArr[imgCounter].classList.add('d-none');
//     sliderThumb[imgCounter].classList.remove('active');

//     sliderArr[++imgCounter].classList.remove('d-none');
//     sliderThumb[imgCounter].classList.add('active');

//   }else{

//     sliderArr[imgCounter].classList.add('d-none');
//     sliderThumb[imgCounter].classList.remove('active');

//     imgCounter = 0;

//     sliderArr[imgCounter].classList.remove('d-none');
//     sliderThumb[imgCounter].classList.add('active');

//   }
// });

// msBtnBwd.addEventListener('click', function(){
//   if(imgCounter > 0){

//     sliderArr[imgCounter].classList.add('d-none');
//     sliderThumb[imgCounter].classList.remove('active');

//     sliderArr[--imgCounter].classList.remove('d-none');
//     sliderThumb[imgCounter].classList.add('active');

//   }else{

//     sliderArr[imgCounter].classList.add('d-none');
//     sliderThumb[imgCounter].classList.remove('active');

//     imgCounter = sliderArr.length - 1;

//     sliderArr[imgCounter].classList.remove('d-none');
//     sliderThumb[imgCounter].classList.add('active');

//   }
// });

// for (let i = 0; i < sliderThumb.length; i++){
//   sliderThumb[i].addEventListener('click', function(){
//     if (imgCounter != i){
//       sliderArr[imgCounter].classList.add('d-none');
//       sliderThumb[imgCounter].classList.remove('active');
//     }
//     imgCounter = i;
    
//     sliderArr[i].classList.remove('d-none');
//     sliderThumb[i].classList.add('active');    
//   });
// }
