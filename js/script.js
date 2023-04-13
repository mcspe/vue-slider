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
      playTimingFunct: null,
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
      if (!this.isPlaying){
        this.isPlaying = !this.isPlaying;
        this.playTimingFunct = setInterval(() => {
          this.bottonFwd();
        }, 1500);
      }
      else{
        clearInterval(this.playTimingFunct);
        this.isPlaying = !this.isPlaying;
      }
    },

    togglePlay(isMouseHover){
      if (this.isPlaying){
        if(isMouseHover){
          clearInterval(this.playTimingFunct);
        }else{
          this.playTimingFunct = setInterval(() => {
            this.bottonFwd();
          }, 1500);
        }
      }
    }

  },

  mounted(){
    //console.log(this.imgCounter);
  }

}).mount('#app');