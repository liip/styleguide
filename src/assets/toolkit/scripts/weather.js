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
    this.appId = appId;
    this.cities = [];
    this.elements = [];
    this.data = {};
  }

  initAll() {
    const elements = document.querySelectorAll('.weather');

    elements.forEach((el) => {
      this.init(el, false);
    });

    this.fetch()
      .then(this.updateIcons.bind(this));
  }

  init(el, fetch = true) {
    const city = el.dataset.city;

    console.log('init', el);

    if (city) {
      this.elements.push(el);
      this.cities.push(city);

      console.log('init', fetch);

      if (fetch) {
        this.fetch()
          .then(this.updateIcons.bind(this));
      }
    }
  }

  fetch() {
    return fetch(`${ENDPOINT}?id=${this.cities.join(',')}&units=metric&appid=${this.appId}`)
      .then(response => response.json())
      .then((json) => {
        const list = json.list;

        if (list) {
          list.forEach((item) => {
            this.data[item.id] = item;
          });
        }
      });
  }

  updateIcons() {
    this.elements.forEach((el) => {
      const iconEl = el.querySelector('.weather__icon');
      const id = el.dataset.city;
      const weather = this.getWeather(id);

      if (weather) {
        el.setAttribute('title', weather.main);
      }
      updateIcon(iconEl, this.getIcon(id));
    });
  }

  getWeather(id) {
    const city = this.data[id];
    const weather = city && city.weather && city.weather[0];

    return weather;
  }

  getIcon(id) {
    const weather = this.getWeather(id);

    if (weather) {
      return ICONS[weather.icon];
    }

    return 'weather-unknown';
  }

}
