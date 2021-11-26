"use strict";

document.addEventListener('DOMContentLoaded', function () {
	//#region Параллакс
	var parallax = document.querySelector('.parallax');

	if (document.body.clientWidth > 1024) {
		if (parallax) {
			var setMouseParallaxStyle = function setMouseParallaxStyle() {
				var distX = coordXPercent - positionX;
				var distY = coordYPercent - positionY;

				positionX += distX * speed;
				positionY += distY * speed;

				clouds.style.cssText = 'transform: translate(' + positionX / forClouds + '%,' + positionY / forClouds + '%);';
				ocean.style.cssText = 'transform: translate(' + positionX / forOcean + '%,' + positionY / forOcean + '%);';
				iceberg.style.cssText = 'transform: translate(' + positionX / forIceberg + '%,' + positionY / forIceberg + '%);';

				requestAnimationFrame(setMouseParallaxStyle);
			};

			var clouds = document.querySelector('.images-parallax__clouds');
			var ocean = document.querySelector('.images-parallax__ocean');
			var iceberg = document.querySelector('.images-parallax__iceberg');

			var forClouds = 100;
			var forOcean = -60;
			var forIceberg = 70;

			var speed = 0.04;

			var positionX = 0;
			var positionY = 0;
			var coordXPercent = 0;
			var coordYPercent = 0;

			setMouseParallaxStyle();

			parallax.addEventListener('mousemove', function (e) {
				var parallaxWidth = parallax.offsetWidth;
				var parallaxHeight = parallax.offsetHeight;

				var coordX = e.pageX - parallaxWidth / 2;
				var coordY = e.pageY - parallaxHeight / 2;

				coordXPercent = coordX / parallaxWidth * 100;
				coordYPercent = coordY / parallaxHeight * 100;
			});
		}
	}
	//#endregion 

	//#region Курсор
	if (document.body.clientWidth > 1024) {
		(function () {
			var mouseCoords = function mouseCoords(e) {
				mouseX = e.pageX;
				mouseY = e.pageY;
			};

			var cursor = document.getElementById('cursor'),
			    aura = document.getElementById('aura'),
			    links = document.getElementsByTagName('a'),
			    buttons = document.getElementsByTagName('button'),
			    formElements = document.querySelectorAll('.form-control'),
			    body = document.body;

			var mouseX = 0,
			    mouseY = 0,
			    posX = 0,
			    posY = 0;

			gsap.to({}, .01, {
				repeat: -1,
				onRepeat: function onRepeat() {
					posX += (mouseX - posX) / 5;
					posY += (mouseY - posY) / 5;

					gsap.set(cursor, {
						css: {
							left: mouseX - 3,
							top: mouseY - 3
						}
					});
					gsap.set(aura, {
						css: {
							left: posX - 22,
							top: posY - 22
						}
					});
				}
			});

			for (var i = 0; i < links.length; i++) {
				var link = links[i];
				link.addEventListener('mouseover', function () {
					cursor.classList.add('_active');
					aura.classList.add('_active');
				});
				link.addEventListener('mouseout', function () {
					cursor.classList.remove('_active');
					aura.classList.remove('_active');
				});
			}

			for (var _i = 0; _i < buttons.length; _i++) {
				var button = buttons[_i];
				button.addEventListener('mouseover', function () {
					cursor.classList.add('_active');
					aura.classList.add('_active');
				});
				button.addEventListener('mouseout', function () {
					cursor.classList.remove('_active');
					aura.classList.remove('_active');
				});
			}

			for (var _i2 = 0; _i2 < formElements.length; _i2++) {
				var formElement = formElements[_i2];
				formElement.addEventListener('mouseover', function () {
					cursor.classList.add('_active');
					aura.classList.add('_active');
				});
				formElement.addEventListener('mouseout', function () {
					cursor.classList.remove('_active');
					aura.classList.remove('_active');
				});
			}

			body.addEventListener('mousemove', function (e) {
				mouseCoords(e);
				cursor.classList.remove('_hidden');
				aura.classList.remove('_hidden');
			});

			body.addEventListener('mouseout', function () {
				cursor.classList.add('_hidden');
				aura.classList.add('_hidden');
			});
		})();
	}
	//#endregion

	//#region Шапка
	// Плавающая шапка
	var lastScroll = 0;
	var defaultOffset = 500;
	var header = document.querySelector('.header');

	var scrollPosition = function scrollPosition() {
		return window.pageYOffset || document.documentElement.scrollTop;
	};
	var containHide = function containHide() {
		return header.classList.contains('_hide');
	};
	window.addEventListener('scroll', function () {
		if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
			header.classList.add('_hide');
		} else if (scrollPosition() < lastScroll && containHide()) {
			header.classList.remove('_hide');
		}
		if (lastScroll > defaultOffset) {
			header.classList.add('_paint');
		} else {
			header.classList.remove('_paint');
		}

		lastScroll = scrollPosition();
	});
	//#endregion
});
//# sourceMappingURL=index.js.map
