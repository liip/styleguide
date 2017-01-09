export default class Multiplier {

  constructor(el, imageUrl) {
    if (!el || !imageUrl) {
      return;
    }

    this.el = el;
    this.imageUrl = imageUrl;
    this.width = 0;
    this.height = 0;

    this.loadImage();
  }

  loadImage() {
    this.image = new Image();
    this.image.addEventListener('load', () => {
      this.updateDimensions();
      this.paint();
    }, false);
    this.image.src = this.imageUrl;
  }

  updateDimensions() {
    this.width = this.el.width = this.image.width;
    this.height = this.el.height = this.image.height;
  }

  paint() {
    if (this.el.getContext) {
      const context = this.el.getContext('2d');

      // Create the gradient
      const gradient = context.createLinearGradient(
        0.7 * this.width,
        0.125 * this.height,
        0.924 * this.width,
        0.813 * this.height,
      );
      gradient.addColorStop(0, '#6EA644');
      gradient.addColorStop(1, '#A4C339');
      context.fillStyle = gradient;
      context.fillRect(0, 0, this.width, this.height);

      // Set blend mode to multiply
      context.globalCompositeOperation = 'multiply';

      // Draw the requested image
      context.drawImage(this.image, 0, 0, this.width, this.height);
    }
  }

}
