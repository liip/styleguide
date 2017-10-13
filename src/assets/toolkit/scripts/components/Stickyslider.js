import skrollr from 'skrollr';
import stickyfill from 'stickyfilljs';

export default class StickySlider {

	constructor(stickySlider) {
		this._stickySlider = stickySlider;
		this._stickySliderOverlays = document.getElementById('scrolloverlays');
		this._alwaysSticky = this._stickySlider.querySelector('.is-alwayssticky');
		this._desktopSticky = this._stickySlider.querySelector('.is-desktopsticky');
		this._viewportHeight = window.innerHeight;

		this._checkStickySupport = this._checkStickySupport.bind(this);
		this._skrollrStart = this._skrollrStart.bind(this);
		this._mobileScrolling = this._mobileScrolling.bind(this);

		this._checkStickySupport();
		this._skrollrStart();

		this._addEventListeners();
	}

	_checkStickySupport() {
		const el = document.createElement("a"),
				mStyle = el.style;
		mStyle.cssText = "position:sticky;position:-webkit-sticky;position:-ms-sticky;";
		return mStyle.position.indexOf("sticky") !== -1;
	}

	_skrollrStart() {
		document.body.classList.add("no-overflow");
		if(!this._checkStickySupport()) {
	    // sticky polyfill for IE for always sticky elements
	    stickyfill.add(this._alwaysSticky);
	    if(window.innerWidth >= 768){
	      stickyfill.add(this._desktopSticky);
	    }
		}
		this._viewportHeight = window.innerHeight;
		let elH = this._stickySlider.offsetHeight;
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			this._stickySlider.classList.remove("no-skrollr");
			skrollr.init({
				forcedHeight: false,
				constants: {
					distance: elH / 4,
					distance2: elH / 2,
					distance3: elH / 4 * 3
				}
			});
		}
	}

	_mobileScrolling() {
		let elOffset = this._stickySliderOverlays.getBoundingClientRect();
		let top = Math.ceil(elOffset.top / 5) * 5;
		//let halfOfViewport = Math.ceil(Math.floor(this._viewportHeight / 2) / 5) * 5;
		if (top > 0) {
			this._stickySlider.setAttribute("data-current", 1);
		} else if (top <= 0 && top >= -this._viewportHeight) {
			this._stickySlider.setAttribute("data-current", 2);
		} else if (top <= -this._viewportHeight && top >= -(this._viewportHeight * 2)) {
			this._stickySlider.setAttribute("data-current", 3);
		} else {
			this._stickySlider.setAttribute("data-current", 4);
		}
	}

	_addEventListeners(){
		window.addEventListener('scroll', this._mobileScrolling)
		window.addEventListener('resize', this._skrollrStart)
	}
}
