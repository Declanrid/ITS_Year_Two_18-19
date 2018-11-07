var wolf = {

    x:          50,
    y:          50,
    ready:      false,
    imageUrl:   "images/howl.png",
    baseImage:  new Image(),
    draw:       function(ctx){

        var baseImage = this.baseImage;

        ctx.drawImage(baseImage, this.x, this.y);
    },

    tick:       function(canvas){
    },

    initialise: function() {
        this.baseImage.onload = function(){
            this.ready = true;
        };
        this.baseImage.src = this.imageUrl;
    }
};

wolf.initialise();