const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            textClass: "",
            ImgHand: "",
            imgClass:"",
        }
    },
    methods: {
        btnClick: function () {
            console.log("btn clicked");
            this.textClass = "show_text";
            this.imgHand = "imgs/hi.png";
            this.imgClass = "show_img";
        }
    }
}).mount('#app');

