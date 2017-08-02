const OFFICE_COORDINATES = {
  zh: {
    top: '0.092em',
    left: '0.336em',
    width: '0.260em',
    height: '0.183em',
  },
  be: {
    top: '0.160em',
    left: '0.198em',
    width: '0.229em',
    height: '0.168em',
  },
  fr: {
    top: '0.183em',
    left: '0.145em',
    width: '0.183em',
    height: '0.115em',
  },
  ls: {
    top: '0.290em',
    left: '0.046em',
    width: '0.198em',
    height: '0.130em',
  },
  sg: {
    top: '0.053em',
    left: '0.504em',
    width: '0.267em',
    height: '0.168em',
  },
};

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
    e.stopPropagation();
    const office = e.target.id.split('mapOffice-');
    if (office[1]) {
      const radialOfficeClass = 'map__radial-' + office[1];

      setTimeout(() => {
        this._mapRadialEl.style.top = OFFICE_COORDINATES[office[1]].top;
        this._mapRadialEl.style.left = OFFICE_COORDINATES[office[1]].left;
        this._mapRadialEl.style.width = OFFICE_COORDINATES[office[1]].width;
        this._mapRadialEl.style.height = OFFICE_COORDINATES[office[1]].height;

        this._mapRadialEl.classList.add(radialOfficeClass, 'map__radial--fadein');
      }, 500);
    }
    if (e.type === 'mouseout') {
      this._mapRadialEl.classList.remove('map__radial--fadein');
      setTimeout(() => {
        this._mapRadialEl.className = 'map__radial';
      }, 500);
    }
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  destroy() {
    this._removeEventListeners();
  }

}
