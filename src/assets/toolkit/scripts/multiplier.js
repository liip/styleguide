export default class Multiplier {

  constructor(el, imageUrl) {
    if (!el || !imageUrl) {
      return;
    }

    this._el = el;
    this._imageUrl = imageUrl;
    this._width = 0;
    this._height = 0;

    this._loadImage();
  }

  _loadImage() {
    this.image = new Image();
    this.image.addEventListener('load', () => {
      this._updateDimensions();
      this._paint();
    }, false);
    this.image.src = this._imageUrl;
  }

  _updateDimensions() {
    this._width = this._el.width = this.image.width;
    this._height = this._el.height = this.image.height;
  }

  _paint() {
    if (this._el.getContext) {
      const context = this._el.getContext('2d');

      // Create the gradient
      const gradient = context.createLinearGradient(
        0.7 * this._width,
        0.125 * this._height,
        0.924 * this._width,
        0.813 * this._height
      );
      gradient.addColorStop(0, '#6EA644');
      gradient.addColorStop(1, '#A4C339');
      context.fillStyle = gradient;
      context.fillRect(0, 0, this._width, this._height);

      // Set blend mode to multiply
      context.globalCompositeOperation = 'multiply';

      // Draw the requested image
      context.drawImage(this.image, 0, 0, this._width, this._height);
    }
  }

}
