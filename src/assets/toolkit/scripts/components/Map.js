export default class Map {

  constructor(el) {
    this._el = el;

    this._haikuEl = this._el.querySelector('.haiku');
    this._mapRadialEl = this._el.querySelector('.map__radial');
    this._toggleMapBackground = this._toggleMapBackground.bind(this);

    this._addEventListeners();
  }

  _addEventListeners() {
    this._haikuEl.addEventListener('mouseover', this._toggleMapBackground.bind(this));
    this._haikuEl.addEventListener('mouseout', this._toggleMapBackground.bind(this));
  }

  _removeEventListeners() {
    this._haikuEl.removeEventListener('mouseover', this._toggleMapBackground);
    this._haikuEl.removeEventListener('mouseout', this._toggleMapBackground);
  }

  _toggleMapBackground(e) {
    const office = e.target.id.split('mapOffice-');
    if (office[1]) {
      const radialOfficeClass = 'map__radial-' + office[1];
      this._mapRadialEl.classList.add(radialOfficeClass);
    }
    if (e.type === 'mouseout') {
      this._mapRadialEl.className = 'map__radial';
    }
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  destroy() {
    this._removeEventListeners();
  }

}
