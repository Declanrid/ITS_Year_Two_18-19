function Cactus (canvas) {

    this.canvas     = canvas;
    this.x          = 700;
    this.y          = 440;
    this.sx         = 158;
    this.sy         = 240;
    this.w          = 50;
    this.h          = 70;

    this.ready      = false;
    this.imageUrl   = "Images/Cactus_158x240.png";
    this.baseImage  = new Image();
    var cactus      = this;

    this.baseImage.onload = function () {
        var spritew = 10;
        var spriteh = 10;
        cactus.ready = true;
    };
    this.baseImage.src = this.imageUrl;
}

Cactus.prototype.vx = -5;
Cactus.prototype.draw= function (ctx) {
    if (this.ready) {
        ctx.drawImage(this.baseImage, 0, 0, this.sx, this.sy, this.x, this.y, this.w, this.h);
    console.log(this.vx)
    }
};

Cactus.prototype.tick= function (canvas) {
    this.x += this.vx;
    return (this.x < 0);
};













