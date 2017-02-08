import { updateIcon } from 'helpers/ui';

const ENDPOINT = 'http://api.openweathermap.org/data/2.5/group';
const ICONS = {
  '01d': 'sunny',
  '02d': 'day-cloud',
  '03d': 'cloud',
  '04d': 'cloud-double',
  '09d': 'rain',
  '10d': 'day-rain',
  '11d': 'day-thunder-storm',
  '13d': 'snow',
  '50d': 'mist',
  '01n': 'night',
  '02n': 'night-cloud',
  '03n': 'cloud',
  '04n': 'cloud-double',
  '09n': 'rain',
  '10n': 'night-rain',
  '11n': 'night-thunder-storm',
  '13n': 'snow',
  '50n': 'mist',
};

export default class Weather {

  constructor(appId) {
    this._appId = appId;
    this._cities = [];
    this._elements = [];
    this._data = {};
  }

  _fetch() {
    return fetch(`${ENDPOINT}?id=${this._cities.join(',')}&units=metric&appid=${this._appId}`)
      .then(response => response.json())
      .then((json) => {
        const list = json.list;

        if (list) {
          list.forEach((item) => {
            this._data[item.id] = item;
          });
        }
      })
      .then(this._updateIcons.bind(this))
      .catch(this._updateIcons.bind(this));
  }

  _updateIcons() {
    this._elements.forEach((el) => {
      const iconEl = el.querySelector('.weather__icon');
      const id = el.dataset.city;
      const weather = this._getWeather(id);

      if (weather) {
        el.setAttribute('title', weather.main);
      }
      updateIcon(iconEl, this._getIcon(id));
    });
  }

  _getWeather(id) {
    const city = this._data[id];
    return city && city.weather && city.weather[0];
  }

  _getIcon(id) {
    const weather = this._getWeather(id);
    return weather ? ICONS[weather.icon] : 'weather-unknown';
  }

  /*----------------------------------------*\
    PUBLIC
  \*----------------------------------------*/

  /**
   * Init all .weather elements in the page
   */
  initAll() {
    this._elements = [...document.querySelectorAll('.weather')];

    this._elements.forEach((el) => {
      this.init(el, false);
    });

    this._fetch();
  }

  /**
   * Init the given element and then possibly fetch the weather
   */
  init(el, fetch = true) {
    const city = el.dataset.city;

    if (city) {
      this._elements.push(el);
      this._cities.push(city);

      if (fetch) {
        this._fetch();
      }
    }
  }

}
