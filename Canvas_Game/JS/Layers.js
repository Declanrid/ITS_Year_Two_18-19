function Layer(canvas, imageURL, speed){

    this.canvas     = canvas;
    this.ctx        = canvas.getContext("2d");
    this.ready      = false;
    this.image      = getImage(imageURL,this);
    this.x          = 0;
    this.y          = 0;
    this.sx         = 300;
    this.sy         = 250;
    this.vsx        = speed + 2;
    this.vsy        = 0;

}

function getImage(imageURL,layer){
    var image = new Image();
    image.onload = function(){
        layer.ready = true;
    };
    image.src = imageURL;

    return image;

}

Layer.prototype.draw = function (){
    var cw  = this.canvas.width;
    var sw  = this.image.width;
    var dx  = sw - this.sx;

    if (dx<0) {
        this.sx = -dx;
        dx  = sw - this.sx
    }
    this.ctx.drawImage(
        this.image,
        this.sx,
        this.sy,
        cw,
        this.canvas.height,
        0,0,
        cw,
        this.canvas.height
    );

   if (cw > dx){
       this.ctx.drawImage(
            this.image,
            0,
            this.sy,
            sw - dx,
            this.canvas.height,
            dx,
            0,
            sw - dx,
            this.canvas.height,
        )
    }

};

Layer.prototype.tick = function (){
    this.sx += this.vsx;
    this.sy += this.vsy;
};
