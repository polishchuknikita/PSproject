$(document).ready( () => {
	if(!device.desktop()) {
		$('.offer-file').toggleClass('mobile');
	} else {
		$('.offer-file').toggleClass('desktop')
	}

		const scrollPxTopItem = (scroll, dynamic, static) => {
			return (scroll * dynamic) + static + 'px';
		}
		const scrollPxLeftItem = (scroll, dynamic, static) => {
			return (scroll * dynamic) + static + 'px';
		}
		const scrollPxRotateItem = (scroll, dynamic, static) => {
			return "rotate(" + (static + (scroll * dynamic)) + "deg)";
		}
		const scrollPxScaleItem = (scroll, dynamic, static) => {
			return "scale(" + (static - (scroll * dynamic)) + ")";
		}
		const scrollPxWidthItem = (scroll, dynamic, static) => {
			return static - (scroll * dynamic) + 'px';
		}
		const scrollPxHeightItem = (scroll, dynamic, static) => {
			return static - (scroll * dynamic) + 'px';
		}
		const scrollPxOpacityItem = (scroll, dynamic) => {
			return (scroll * dynamic);
		}
		const scrollPxTransformTextOffer = (scroll, dymanic, static) => {
			return 'translateX(' + (static + (scroll * dymanic)) + 'px)';
		}
		if ($(this).width() >= 1400) {
			$(window).scroll( () => {
				let scrollPx = $(window).scrollTop();
				
				let secondFigureScrollTop = scrollPx - 580;
				let thirdFigureScrollTop = scrollPx - 1050;
				let fourthFigureScrollTop = scrollPx - 1450;
				let fifthFigureScrollTop = scrollPx - 1850;
		
				let firstItemTextTransform = scrollPx - 450;
				let secondItemTextTransform = scrollPx - 850;
				let thirdItemTextTransform = scrollPx - 1250;
				let fourthItemTextTransform = scrollPx - 1650;
				let fifthItemTextTransform = scrollPx - 2050;
		
				let firstItemOpacity = scrollPx - 500;
				let secondItemOpacity = scrollPx - 900;
				let thirdItemOpacity = scrollPx - 1300;
				let fourthItemOpacity = scrollPx - 1700;
				let fifthItemOpacity = scrollPx - 2450;
		
				let startFigureHeader = {
					top: '-111px',
					left: '-63px',
					transform: 'rotate(15deg)',
					width: '1000px',
					height: '900px',
				}

				let firstFigureHeader = {
					opacity: scrollPxOpacityItem(scrollPx, 0.001),
					top: scrollPxTopItem(scrollPx, 1.13, 0),
					left: scrollPxLeftItem(scrollPx, 0.6781, -63),
					transform: scrollPxRotateItem(scrollPx, 0.245, 15),
					width: scrollPxWidthItem(scrollPx, 0.7363, 1000),
					height: scrollPxHeightItem(scrollPx, 0.5545, 900) 
				}
				let firstFigureHeaderStatic = {
					opacity: '0',
					top: '635px',
					left: '309px',
					transform: 'rotate(150deg)',
					width: '600px',
					height: '600px',
				}
		
				let secondFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(secondFigureScrollTop, 1.175, 635),
					left: scrollPxLeftItem(secondFigureScrollTop, 0.654, 311),
					transform: scrollPxRotateItem(secondFigureScrollTop, 0.3243, 150)
				}
				let secondFigureHeaderStatic = {
					opacity: '0',
					top: '1070px',
					left: '309px',
					transform: 'rotate(150deg)',
					transition: 'all 0s ease'
				}
		
				let thirdFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(thirdFigureScrollTop, 1.4833, 1125),
					left: scrollPxLeftItem(thirdFigureScrollTop, 0.8067, 311),
					transform: scrollPxRotateItem(thirdFigureScrollTop, 0.4, 150)
				}
				let thirdFigureHeaderStatic = {
					opacity: '0',
					top: '1570px',
					left: '309px',
					transform: 'rotate(150deg)'
				}
		
				let fourthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fourthFigureScrollTop, 1.4333, 1620),
					left: scrollPxLeftItem(fourthFigureScrollTop, 0.8067, 311),
					transform: scrollPxRotateItem(fourthFigureScrollTop, 0.4, 150)
				}
				let fourthFigureHeaderStatic = {
					opacity: '0',
					top: '2060px',
					left: '309px',
					transform: 'rotate(150deg)'
				}
		
				let fifthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fifthFigureScrollTop, 1.433, 2120),
					left: scrollPxLeftItem(fifthFigureScrollTop, 0.8067, 311),
					transform: scrollPxRotateItem(fifthFigureScrollTop, 0.4, 150)
				}
				let fifthFigureHeaderStatic = {
					opacity: '0',
					top: '2555px',
					left: '553px',
					transform: 'rotate(270deg)'
				}

				if(scrollPx > 0 && scrollPx < 50) {
					$('.offer__svg svg').css('left', '-58px');
					$('.offer__svg svg').css('top', '-25px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}
				if(scrollPx <= 550) {
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				}
				if(scrollPx > 0 && scrollPx <= 550) {
					$('.offer__svg svg').css(firstFigureHeader);
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer__svg path').css('transform', scrollPxScaleItem(scrollPx, 0.0006, 1.33));
					if (scrollPx > 450) {
						$('.offer-details-list__text_first').css('transform', scrollPxTransformTextOffer(firstItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_first').css('opacity', scrollPxOpacityItem(firstItemTextTransform, 0.02));
						$('.offer-details-list__item_first').css('opacity', (-0.5 + (scrollPxOpacityItem(firstItemOpacity, 0.02))));
					} else {
						$('.offer-details-list__text_first').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_first').css('opacity', '0');
						$('.offer-details-list__item_first').css('opacity', '0');
					}
					if (scrollPx > 550) {
						$('.offer-details-list__text_first').css('opacity', '1');
					}
				}
				if (scrollPx > 550 && scrollPx <= 580) {
					$('.offer__svg svg').css(firstFigureHeaderStatic);
					$('.offer-details-list__item_first').css('opacity', '1');
					$('.offer__svg path').css('transform', 'scale(1)');
				}
				if (scrollPx > 580 && scrollPx <= 950) {
					$('.offer__svg svg').css(secondFigureHeader);
					if (scrollPx > 600) {
						$('.offer-details__info').css('position', 'fixed');
						$('.offer-details__info').css('transform', 'translate(-800px, -570px)');
						$('.offer-details__info').css('top', 'inherit');
						$('.offer-details__info').css('left', 'inherit');
					} else {
						$('.offer-details__info').css('position', 'static');
					}
					if (scrollPx > 850) {
						$('.offer-details-list__text_second').css('transform', scrollPxTransformTextOffer(secondItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_second').css('opacity', scrollPxOpacityItem(secondItemTextTransform, 0.02));
						$('.offer-details-list__item_second').css('opacity', (scrollPxOpacityItem(secondItemOpacity, 0.04)));
					} else {
						$('.offer-details-list__text_second').css('transform', 'translateX(0px)');
						$('.offer-details-list__item_second').css('opacity', '0');
						$('.offer-details-list__text_second').css('opacity', '0');
					}
					if (scrollPx > 950) {
						$('.offer-details-list__text_second').css('opacity', '1');
					}
				}
				if (scrollPx > 950 && scrollPx <= 1050) {
					$('.offer__svg svg').css(secondFigureHeaderStatic);
				}
				if (scrollPx > 1000) {
					$('.offer-details-list__item_second').css('opacity', '1');
				}
				if (scrollPx > 1050 && scrollPx <= 1350) {
					$('.offer__svg svg').css(thirdFigureHeader);
					if (scrollPx > 1250) {
						$('.offer-details-list__text_third').css('transform', scrollPxTransformTextOffer(thirdItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_third').css('opacity', scrollPxOpacityItem(thirdItemTextTransform, 1));
						$('.offer-details-list__item_third').css('opacity', (scrollPxOpacityItem(thirdItemOpacity, 1)));
					} else {
						$('.offer-details-list__text_third').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_third').css('opacity', '0');
						$('.offer-details-list__item_third').css('opacity', '0');
					}
					if (scrollPx > 1350) {
						$('.offer-details-list__text_third').css('opacity', '1');
					}
				}
				if (scrollPx > 1350 && scrollPx <= 1450) {
					$('.offer__svg svg').css(thirdFigureHeaderStatic);
				}
				if(scrollPx > 1400) {
					$('.offer-details-list__item_third').css('opacity', '1');
				}
				if (scrollPx > 1450) {
					$('.offer-details-list__text_third').css('opacity', '1');
				}
				if (scrollPx > 1450 && scrollPx <= 1750) {
					$('.offer__svg svg').css(fourthFigureHeader);
					if (scrollPx > 1600) {
						$('.offer-details-list__text_fourth').css('transform', scrollPxTransformTextOffer(fourthItemTextTransform, 0.3, -45));
						$('.offer-details-list__text_fourth').css('opacity', scrollPxOpacityItem(fourthItemTextTransform, 0.0067));
						$('.offer-details-list__item_fourth').css('opacity', (scrollPxOpacityItem(fourthItemOpacity, 0.02)));
					} else {
						$('.offer-details-list__text_fourth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fourth').css('opacity', '0');
						$('.offer-details-list__item_fourth').css('opacity', '0');
					}
				}
				if (scrollPx > 1750) {
					$('.offer-details-list__text_fourth').css('opacity', '1');
				}
				if (scrollPx > 1750 && scrollPx <= 1850) {
					$('.offer__svg svg').css(fourthFigureHeaderStatic);
				}
				if (scrollPx > 1850 && scrollPx <= 2150) {
					$('.offer__svg svg').css(fifthFigureHeader);
					if (scrollPx > 2000) {
						$('.offer-details-list__text_fifth').css('transform', scrollPxTransformTextOffer(fifthItemTextTransform, 0.3, -45));
						$('.offer-details-list__text_fifth').css('opacity', scrollPxOpacityItem(fifthItemTextTransform, 0.0067));
						$('.offer-details-list__item_fifth').css('opacity', (scrollPxOpacityItem(fifthItemOpacity, 0.02)));
					} else {
						$('.offer-details-list__text_fifth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fifth').css('opacity', '0');
						$('.offer-details-list__item_fifth').css('opacity', '0');
					}
				}
				if (scrollPx > 2020) {
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				} else if (scrollPx > 550 && scrollPx < 2020) {
					$('.offer-details__info').css('position', 'fixed');
					$('.offer-details__info').css('transform', 'translate(-800px, -570px)');
					$('.offer-details__info').css('top', 'inherit');
					$('.offer-details__info').css('left', 'inherit');
					$('.offer-details__info').css('margin-right', '0px');
				}
				if(scrollPx > 2020) {
					$('.offer-details-list__item_fourth').css('opacity', '1');
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				}
				if (scrollPx > 2150) {
					$('.offer__svg svg').css(fifthFigureHeaderStatic);
					$('.offer-details-list__item_fifth').css('opacity', '1');
					$('.offer-details-list__text').css('opacity', '1');
				} 
				
				if (scrollPx == 0) {
					$('.offer__svg svg').css(startFigureHeader);
				}
			
			})
		} else if ($(this).width() >= 1280 && $(this).width() <= 1399) {
			$(window).scroll( () => {
				let scrollPx3 = $(window).scrollTop();
				
				let secondFigureScrollTop = scrollPx3 - 580;
				let thirdFigureScrollTop = scrollPx3 - 1050;
				let fourthFigureScrollTop = scrollPx3 - 1450;
				let fifthFigureScrollTop = scrollPx3 - 1850;
		
				let firstItemTextTransform = scrollPx3 - 450;
				let secondItemTextTransform = scrollPx3 - 850;
				let thirdItemTextTransform = scrollPx3 - 1250;
				let fourthItemTextTransform = scrollPx3 - 1650;
				let fifthItemTextTransform = scrollPx3 - 2050;
		
				let firstItemOpacity = scrollPx3 - 500;
				let secondItemOpacity = scrollPx3 - 900;
				let thirdItemOpacity = scrollPx3 - 1300;
				let fourthItemOpacity = scrollPx3 - 1700;
				let fifthItemOpacity = scrollPx3 - 2450;
		
				let startFigureHeader = {
					top: '-25px',
					left: '-58px',
					transform: 'rotate(15deg)',
					opacity: 0,
					width: '920px',
					height: '900px'
				}

				let firstFigureHeader = {
					opacity: scrollPxOpacityItem(scrollPx3, 0.002),
					top: scrollPxTopItem(scrollPx3, 1.1454, 0),
					left: scrollPxLeftItem(scrollPx3, 0.683, -63),
					transform: scrollPxRotateItem(scrollPx3, 0.245, 15),
					width: scrollPxWidthItem(scrollPx3, 0.7363, 1000),
					height: scrollPxHeightItem(scrollPx3, 0.5545, 900) 
				}
				let firstFigureHeaderStatic = {
					opacity: '0',
					top: '630px',
					left: '313px',
					transform: 'rotate(150deg)',
					width: '600px',
					height: '600px',
				}
		
				let secondFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(secondFigureScrollTop, 1.188, 630),
					left: scrollPxLeftItem(secondFigureScrollTop, 0.6405, 313),
					transform: scrollPxRotateItem(secondFigureScrollTop, 0.3243, 150)
				}
				let secondFigureHeaderStatic = {
					opacity: '0',
					top: '1060px',
					left: '313px',
					transform: 'rotate(150deg)',
					transition: 'all 0s ease'
				}
		
				let thirdFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(thirdFigureScrollTop, 1.4666, 1110),
					left: scrollPxLeftItem(thirdFigureScrollTop, 0.79, 313),
					transform: scrollPxRotateItem(thirdFigureScrollTop, 0.4, 150)
				}
				let thirdFigureHeaderStatic = {
					opacity: '0',
					top: '1620px',
					left: '313px',
					transform: 'rotate(150deg)'
				}
		
				let fourthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fourthFigureScrollTop, 1.43333, 1620),
					left: scrollPxLeftItem(fourthFigureScrollTop, 0.79, 313),
					transform: scrollPxRotateItem(fourthFigureScrollTop, 0.4, 150)
				}
				let fourthFigureHeaderStatic = {
					opacity: '0',
					top: '2195px',
					left: '313px',
					transform: 'rotate(150deg)'
				}
		
				let fifthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fifthFigureScrollTop, 1.16, 2195),
					left: scrollPxLeftItem(fifthFigureScrollTop, 0.79, 313),
					transform: scrollPxRotateItem(fifthFigureScrollTop, 0.4, 150)
				}
				let fifthFigureHeaderStatic = {
					opacity: '0',
					top: '2543px',
					left: '550px',
					transform: 'rotate(270deg)'
				}

				if(scrollPx3 > 0 && scrollPx3 < 50) {
					$('.offer__svg svg').css('left', '-58px');
					$('.offer__svg svg').css('top', '-25px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}
				if(scrollPx3 <= 550) {
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				}
				if(scrollPx3 > 0 && scrollPx3 <= 550) {
					$('.offer__svg svg').css(firstFigureHeader);
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer__svg path').css('transform', scrollPxScaleItem(scrollPx3, 0.0006, 1.33));
					if (scrollPx3 > 450) {
						$('.offer-details-list__text_first').css('transform', scrollPxTransformTextOffer(firstItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_first').css('opacity', scrollPxOpacityItem(firstItemTextTransform, 0.02));
						$('.offer-details-list__item_first').css('opacity', (-0.5 + (scrollPxOpacityItem(firstItemOpacity, 0.02))));
					} else {
						$('.offer-details-list__text_first').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_first').css('opacity', '0');
						$('.offer-details-list__item_first').css('opacity', '0');
					}
				}
				if (scrollPx3 > 550) {
					$('.offer-details-list__text_first').css('opacity', '1');
				}
				if (scrollPx3 > 550 && scrollPx3 <= 580) {
					$('.offer__svg svg').css(firstFigureHeaderStatic);
					$('.offer-details-list__item_first').css('opacity', '1');
					$('.offer__svg path').css('transform', 'scale(1)');
				}
				if (scrollPx3 > 580 && scrollPx3 <= 950) {
					$('.offer__svg svg').css(secondFigureHeader);
					if (scrollPx3 > 600) {
						$('.offer-details__info').css('position', 'fixed');
						$('.offer-details__info').css('transform', 'translate(-800px, -570px)');
						$('.offer-details__info').css('top', 'inherit');
						$('.offer-details__info').css('left', 'inherit');
					} else {
						$('.offer-details__info').css('position', 'static');
					}
					if (scrollPx3 > 850) {
						$('.offer-details-list__text_second').css('transform', scrollPxTransformTextOffer(secondItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_second').css('opacity', scrollPxOpacityItem(secondItemTextTransform, 0.02));
						$('.offer-details-list__item_second').css('opacity', (scrollPxOpacityItem(secondItemOpacity, 0.04)));
					} else {
						$('.offer-details-list__text_second').css('transform', 'translateX(0px)');
						$('.offer-details-list__item_second').css('opacity', '0');
						$('.offer-details-list__text_second').css('opacity', '0');
					}
				}
				if (scrollPx3 > 950) {
					$('.offer-details-list__text_second').css('opacity', '1');
				}
				if (scrollPx3 > 950 && scrollPx3 <= 1050) {
					$('.offer__svg svg').css(secondFigureHeaderStatic);
				}
				if (scrollPx3 > 1000) {
					$('.offer-details-list__item_second').css('opacity', '1');
				}
				if (scrollPx3 > 1050 && scrollPx3 <= 1350) {
					$('.offer__svg svg').css(thirdFigureHeader);
					if (scrollPx3 > 1250) {
						$('.offer-details-list__text_third').css('transform', scrollPxTransformTextOffer(thirdItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_third').css('opacity', scrollPxOpacityItem(thirdItemTextTransform, 1));
						$('.offer-details-list__item_third').css('opacity', (scrollPxOpacityItem(thirdItemOpacity, 1)));
					} else {
						$('.offer-details-list__text_third').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_third').css('opacity', '0');
						$('.offer-details-list__item_third').css('opacity', '0');
					}
				}
				if (scrollPx3 > 1350) {
					$('.offer-details-list__text_third').css('opacity', '1');
				}
				if (scrollPx3 > 1350 && scrollPx3 <= 1450) {
					$('.offer__svg svg').css(thirdFigureHeaderStatic);
				}
				if(scrollPx3 > 1400) {
					$('.offer-details-list__item_third').css('opacity', '1');
				}
				if (scrollPx3 > 1450 && scrollPx3 <= 1750) {
					$('.offer__svg svg').css(fourthFigureHeader);
					if (scrollPx3 > 1600) {
						$('.offer-details-list__text_fourth').css('transform', scrollPxTransformTextOffer(fourthItemTextTransform, 0.3, -45));
						$('.offer-details-list__text_fourth').css('opacity', scrollPxOpacityItem(fourthItemTextTransform, 1));
						$('.offer-details-list__item_fourth').css('opacity', (scrollPxOpacityItem(fourthItemOpacity, 1)));
					} else {
						$('.offer-details-list__text_fourth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fourth').css('opacity', '0');
						$('.offer-details-list__item_fourth').css('opacity', '0');
					}
				}
				if (scrollPx3 > 1750) {
					$('.offer-details-list__text_fourth').css('opacity', '1');
				}
				if (scrollPx3 > 1750 && scrollPx3 <= 1850) {
					$('.offer__svg svg').css(fourthFigureHeaderStatic);
				}
				if (scrollPx3 > 1850 && scrollPx3 <= 2150) {
					$('.offer__svg svg').css(fifthFigureHeader);
					if (scrollPx3 > 2050) {
						$('.offer-details-list__text_fifth').css('transform', scrollPxTransformTextOffer(fifthItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_fifth').css('opacity', scrollPxOpacityItem(fifthItemTextTransform, 0.01));
						$('.offer-details-list__item_fifth').css('opacity', (scrollPxOpacityItem(fifthItemOpacity, 0.04)));
					} else {
						$('.offer-details-list__text_fifth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fifth').css('opacity', '0');
						$('.offer-details-list__item_fifth').css('opacity', '0');
					}
				}
				if (scrollPx3 > 2020) {
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				} else if (scrollPx3 > 550 && scrollPx3 < 2020) {
					$('.offer-details__info').css('position', 'fixed');
					$('.offer-details__info').css('transform', 'translate(0px, 0px)');
					$('.offer-details__info').css('top', '100px');
					$('.offer-details__info').css('left', '97px');
					$('.offer-details__info').css('margin-right', '0px');
				}
				if(scrollPx3 > 2020) {
					$('.offer-details-list__item_fourth').css('opacity', '1');
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '48px');
				}
				if (scrollPx3 > 2150) {
					$('.offer__svg svg').css(fifthFigureHeaderStatic);
					$('.offer-details-list__item_fifth').css('opacity', '1');
					$('.offer-details-list__text').css('opacity', '1');
				}
				if (scrollPx3 == 0) {
					$('.offer__svg svg').css(startFigureHeader);
				}
			
			})
		} else if ($(this).width() >= 1200 && $(this).width() <= 1279) {
			$(window).scroll( () => {
				let scrollPx2 = $(window).scrollTop();
				
				let secondFigureScrollTop = scrollPx2 - 580;
				let thirdFigureScrollTop = scrollPx2 - 1050;
				let fourthFigureScrollTop = scrollPx2 - 1450;
				let fifthFigureScrollTop = scrollPx2 - 1850;
		
				let firstItemTextTransform = scrollPx2 - 450;
				let secondItemTextTransform = scrollPx2 - 850;
				let thirdItemTextTransform = scrollPx2 - 1250;
				let fourthItemTextTransform = scrollPx2 - 1650;
				let fifthItemTextTransform = scrollPx2 - 2050;
		
				let firstItemOpacity = scrollPx2 - 500;
				let secondItemOpacity = scrollPx2 - 900;
				let thirdItemOpacity = scrollPx2 - 1300;
				let fourthItemOpacity = scrollPx2 - 1700;
				let fifthItemOpacity = scrollPx2 - 2450;
		
				let startFigureHeader = {
					top: '-111px',
					left: '-63px',
					transform: 'rotate(15deg)',
					width: '1000px',
					height: '900px',
				}

				let firstFigureHeader = {
					opacity: scrollPxOpacityItem(scrollPx2, 0.001),
					top: scrollPxTopItem(scrollPx2, 1.2963, 0),
					left: scrollPxLeftItem(scrollPx2, 0.381, -63),
					transform: scrollPxRotateItem(scrollPx2, 0.245, 15),
					width: scrollPxWidthItem(scrollPx2, 0.7363, 1000),
					height: scrollPxHeightItem(scrollPx2, 0.5545, 900) 
				}
				let firstFigureHeaderStatic = {
					opacity: '0',
					top: '710px',
					left: '147px',
					transform: 'rotate(150deg)',
					width: '600px',
					height: '600px',
				}
		
				let secondFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(secondFigureScrollTop, 1.1892, 710),
					left: scrollPxLeftItem(secondFigureScrollTop, 0.654, 147),
					transform: scrollPxRotateItem(secondFigureScrollTop, 0.3243, 150)
				}
				let secondFigureHeaderStatic = {
					opacity: '0',
					top: '1200px',
					left: '147px',
					transform: 'rotate(150deg)',
					transition: 'all 0s ease'
				}
		
				let thirdFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(thirdFigureScrollTop, 1.5, 1200),
					left: scrollPxLeftItem(thirdFigureScrollTop, 0.8067, 147),
					transform: scrollPxRotateItem(thirdFigureScrollTop, 0.4, 150)
				}
				let thirdFigureHeaderStatic = {
					opacity: '0',
					top: '1650px',
					left: '147px',
					transform: 'rotate(150deg)'
				}
		
				let fourthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fourthFigureScrollTop, 1.4666, 1700),
					left: scrollPxLeftItem(fourthFigureScrollTop, 0.8067, 147),
					transform: scrollPxRotateItem(fourthFigureScrollTop, 0.4, 150)
				}
				let fourthFigureHeaderStatic = {
					opacity: '0',
					top: '2195px',
					left: '147px',
					transform: 'rotate(150deg)'
				}
		
				let fifthFigureHeader = {
					opacity: '1',
					top: scrollPxTopItem(fifthFigureScrollTop, 1.46, 2195),
					left: scrollPxLeftItem(fifthFigureScrollTop, 0.8067, 147),
					transform: scrollPxRotateItem(fifthFigureScrollTop, 0.4, 150)
				}
				let fifthFigureHeaderStatic = {
					opacity: '0',
					top: '2633px',
					left: '390px',
					transform: 'rotate(270deg)'
				}

				if(scrollPx2 > 0 && scrollPx2 < 50) {
					$('.offer__svg svg').css('left', '-58px');
					$('.offer__svg svg').css('top', '-25px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}
				if(scrollPx2 <= 550) {
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				}
				if(scrollPx2 > 0 && scrollPx2 <= 550) {
					$('.offer__svg svg').css(firstFigureHeader);
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer__svg path').css('transform', scrollPxScaleItem(scrollPx2, 0.0006, 1.33));
					if (scrollPx2 > 450) {
						$('.offer-details-list__text_first').css('transform', scrollPxTransformTextOffer(firstItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_first').css('opacity', scrollPxOpacityItem(firstItemTextTransform, 0.02));
						$('.offer-details-list__item_first').css('opacity', (-0.5 + (scrollPxOpacityItem(firstItemOpacity, 0.02))));
					} else {
						$('.offer-details-list__text_first').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_first').css('opacity', '0');
						$('.offer-details-list__item_first').css('opacity', '0');
					}
				}
				if (scrollPx2 > 550) {
					$('.offer-details-list__text_first').css('opacity', '1');
				}
				if (scrollPx2 > 550 && scrollPx2 <= 580) {
					$('.offer__svg svg').css(firstFigureHeaderStatic);
					$('.offer-details-list__item_first').css('opacity', '1');
					$('.offer__svg path').css('transform', 'scale(1)');
				}
				if (scrollPx2 > 580 && scrollPx2 <= 950) {
					$('.offer__svg svg').css(secondFigureHeader);
					if (scrollPx2 > 600) {
						$('.offer-details__info').css('position', 'fixed');
						$('.offer-details__info').css('transform', 'translate(-800px, -570px)');
						$('.offer-details__info').css('top', 'inherit');
						$('.offer-details__info').css('left', 'inherit');
					} else {
						$('.offer-details__info').css('position', 'static');
					}
					if (scrollPx2 > 850) {
						$('.offer-details-list__text_second').css('transform', scrollPxTransformTextOffer(secondItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_second').css('opacity', scrollPxOpacityItem(secondItemTextTransform, 0.02));
						$('.offer-details-list__item_second').css('opacity', (scrollPxOpacityItem(secondItemOpacity, 0.04)));
					} else {
						$('.offer-details-list__text_second').css('transform', 'translateX(0px)');
						$('.offer-details-list__item_second').css('opacity', '0');
						$('.offer-details-list__text_second').css('opacity', '0');
					}
				}
				if (scrollPx2 > 950) {
					$('.offer-details-list__text_second').css('opacity', '1');
				}
				if (scrollPx2 > 950 && scrollPx2 <= 1050) {
					$('.offer__svg svg').css(secondFigureHeaderStatic);
				}
				if (scrollPx2 > 1000) {
					$('.offer-details-list__item_second').css('opacity', '1');
				}
				if (scrollPx2 > 1050 && scrollPx2 <= 1350) {
					$('.offer__svg svg').css(thirdFigureHeader);
					if (scrollPx2 > 1250) {
						$('.offer-details-list__text_third').css('transform', scrollPxTransformTextOffer(thirdItemTextTransform, 0.45, -45));
						$('.offer-details-list__text_third').css('opacity', scrollPxOpacityItem(thirdItemTextTransform, 1));
						$('.offer-details-list__item_third').css('opacity', (scrollPxOpacityItem(thirdItemOpacity, 1)));
					} else {
						$('.offer-details-list__text_third').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_third').css('opacity', '0');
						$('.offer-details-list__item_third').css('opacity', '0');
					}
				}
				if (scrollPx2 > 1350) {
					$('.offer-details-list__text_third').css('opacity', '1');
				}
				if (scrollPx2 > 1350 && scrollPx2 <= 1450) {
					$('.offer__svg svg').css(thirdFigureHeaderStatic);
				}
				if(scrollPx2 > 1400) {
					$('.offer-details-list__item_third').css('opacity', '1');
				}
				if (scrollPx2 > 1450 && scrollPx2 <= 1750) {
					$('.offer__svg svg').css(fourthFigureHeader);
					if (scrollPx2 > 1600) {
						$('.offer-details-list__text_fourth').css('transform', scrollPxTransformTextOffer(fourthItemTextTransform, 0.3, -45));
						$('.offer-details-list__text_fourth').css('opacity', scrollPxOpacityItem(fourthItemTextTransform, 0.0067));
						$('.offer-details-list__item_fourth').css('opacity', (scrollPxOpacityItem(fourthItemOpacity, 0.02)));
					} else {
						$('.offer-details-list__text_fourth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fourth').css('opacity', '0');
						$('.offer-details-list__item_fourth').css('opacity', '0');
					}
				}
				if (scrollPx2 > 1750) {
					$('.offer-details-list__text_fourth').css('opacity', '1');
				}
				if (scrollPx2 > 1750 && scrollPx2 <= 1850) {
					$('.offer__svg svg').css(fourthFigureHeaderStatic);
				}
				if (scrollPx2 > 1850 && scrollPx2 <= 2150) {
					$('.offer__svg svg').css(fifthFigureHeader);
					if (scrollPx2 > 2000) {
						$('.offer-details-list__text_fifth').css('transform', scrollPxTransformTextOffer(fifthItemTextTransform, 0.3, -45));
						$('.offer-details-list__text_fifth').css('opacity', scrollPxOpacityItem(fifthItemTextTransform, 0.0067));
						$('.offer-details-list__item_fifth').css('opacity', (scrollPxOpacityItem(fifthItemOpacity, 0.02)));
					} else {
						$('.offer-details-list__text_fifth').css('transform', 'translateX(0px)');
						$('.offer-details-list__text_fifth').css('opacity', '0');
						$('.offer-details-list__item_fifth').css('opacity', '0');
					}
				}
				if (scrollPx2 > 2020) {
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '60px');
				} else if (scrollPx2 > 550 && scrollPx2 < 2020) {
					$('.offer-details__info').css('position', 'fixed');
					$('.offer-details__info').css('transform', 'translate(0px, 0px)');
					$('.offer-details__info').css('top', '200px');
					$('.offer-details__info').css('left', '120px');
					$('.offer-details__info').css('margin-right', '0px');
				}
				if(scrollPx2 > 2020) {
					$('.offer-details-list__item_fourth').css('opacity', '1');
					$('.offer-details__info').css('position', 'relative');
					$('.offer-details__info').css('top', '1470px');
					$('.offer-details__info').css('left', '0');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
					$('.offer-details__info').css('margin-right', '48px');
				}
				if (scrollPx2 > 2150) {
					$('.offer__svg svg').css(fifthFigureHeaderStatic);
					$('.offer-details-list__item_fifth').css('opacity', '1');
					$('.offer-details-list__text').css('opacity', '1');
				} 
			
			})
		} else if($(this).width() >= 992) {
			$(window).scroll(() => {
				let scrollPxMob = $(window).scrollTop();

				const scrollPxTransformYTextOffer = (scroll, dynamic, static) => {
					return 'translateY(' + (static + (scroll * dynamic)) + 'px';
				}
				
				let firstFigureHeaderMob = {
					opacity: scrollPxOpacityItem(scrollPxMob, 0.0015),
					top: scrollPxTopItem(scrollPxMob, 1.022, 0),
					left: scrollPxLeftItem(scrollPxMob, 0.2, 0),
					transform: scrollPxRotateItem(scrollPxMob, 0.193, 15),
					width: scrollPxWidthItem(scrollPxMob, 0.5714, 1000),
					height: scrollPxHeightItem(scrollPxMob, 0.4286, 900) 
				}

				let secondFigureHeaderStaticMob = {
					top: '1153px',
					left: '137px',
					width: '600px',
					height: '600px',
					transform: 'rotate(150deg)'
				}

				let secondFigureHeaderMob = {
					opacity: '1',
					top: scrollPxTopItem((scrollPxMob - 720), 0.9125, 715),
					left: scrollPxLeftItem((scrollPxMob - 720), 0.5021, 137),
					transform: scrollPxRotateItem((scrollPxMob - 720), 0.25, 150),
					transition: 'all 0s ease'
				}

				let thirdFigureHeaderStaticMob = {
					opacity: '0',
					top: '1705px',
					left: '137px',
					transform: 'rotate(150deg)'
				}

				let thirdFigureHeaderMob = {
					opacity: '1',
					top: scrollPxTopItem((scrollPxMob - 1220), 0.8627, 1210),
					left: scrollPxLeftItem((scrollPxMob - 1220), 0.4745, 137),
					transform: scrollPxRotateItem((scrollPxMob - 1220), 0.2353, 150)
				}

				let fourthFigureHeaderStaticMob = {
					opacity: '0',
					top: '2143px',
					left: '137px',
					transform: 'rotate(150deg)'
				}

				let fourthFigureHeaderMob = {
					opacity: '1',
					top: scrollPxTopItem((scrollPxMob - 1750), 0.9521, 1705),
					left: scrollPxLeftItem((scrollPxMob - 1750), 0.5260, 137),
					transform: scrollPxRotateItem((scrollPxMob - 1750), 0.26, 150)
				}

				let fifthFigureHeaderMob = {
					opacity: '1',
					top: scrollPxTopItem((scrollPxMob - 2240), 1.2083, 2200),
					left: scrollPxLeftItem((scrollPxMob - 2240), 0.6722, 137),
					transform: scrollPxRotateItem((scrollPxMob - 2240), 0.333, 150)
				}

				if(scrollPxMob == 0) {
					$('.offer__svg svg').css('left', '-55px');
					$('.offer__svg svg').css('top', '-20px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}
				
				if(scrollPxMob <= 300) {
					$('.offer__text').css('transform', scrollPxTransformYTextOffer(scrollPxMob, 0.7, 0));
				}
				if (scrollPxMob <= 700) {
					$('.offer__svg svg').css(firstFigureHeaderMob)
					$('.offer__svg path').css('transform', scrollPxScaleItem(scrollPxMob, 0.00047, 1.33));
					if (scrollPxMob > 500) {
						$('.offer-details-list__text_first').css('opacity', scrollPxOpacityItem((scrollPxMob - 500), 0.005));
						$('.offer-details-list__text_first').css('transform', scrollPxTransformTextOffer((scrollPxMob - 500), 0.225, -45));
						$('.offer-details-list__item_first').css('opacity', scrollPxOpacityItem((scrollPxMob - 500), 0.005));
					}
				}
				if (scrollPxMob > 700) {
					$('.offer-details-list__text_first').css('opacity', '1');
				}
				if(scrollPxMob > 720 && scrollPxMob <= 1200) {
					$('.offer__svg svg').css(secondFigureHeaderMob)
					if (scrollPxMob > 1000) {
						$('.offer-details-list__text_second').css('opacity', scrollPxOpacityItem((scrollPxMob - 1000), 0.005));
						$('.offer-details-list__text_second').css('transform', scrollPxTransformTextOffer((scrollPxMob - 1000), 0.225, -45));
						$('.offer-details-list__item_second').css('opacity', scrollPxOpacityItem((scrollPxMob - 1000), 0.005));
					}
				}
				if (scrollPxMob > 1200) {
					$('.offer-details-list__text_second').css('opacity', '1');
				}
				if (scrollPxMob > 1200 && scrollPxMob <= 1210) {
					$('.offer__svg svg').css('opacity', '0');
				}
				if(scrollPxMob > 1210 && scrollPxMob <= 1220) {
					$('.offer__svg svg').css(secondFigureHeaderStaticMob)
				}
				if(scrollPxMob > 1220 && scrollPxMob <= 1730) {
					$('.offer__svg svg').css(thirdFigureHeaderMob)
					if (scrollPxMob > 1530) {
						$('.offer-details-list__text_third').css('opacity', scrollPxOpacityItem((scrollPxMob - 1530), 0.005));
						$('.offer-details-list__text_third').css('transform', scrollPxTransformTextOffer((scrollPxMob - 1530), 0.225, -45));
						$('.offer-details-list__item_third').css('opacity', scrollPxOpacityItem((scrollPxMob - 1530), 0.005));
					}
				}
				if (scrollPxMob > 1730) {
					$('.offer-details-list__text_third').css('opacity', '1');
				}
				if(scrollPxMob > 1735 && scrollPxMob <= 1745) {
					$('.offer__svg svg').css(thirdFigureHeaderStaticMob);
				}
				if(scrollPxMob > 1750 && scrollPxMob <= 2210) {
					$('.offer__svg svg').css(fourthFigureHeaderMob)
					if(scrollPxMob > 1910) {
						$('.offer-details-list__text_fourth').css('opacity', scrollPxOpacityItem((scrollPxMob - 1910), 0.005));
						$('.offer-details-list__text_fourth').css('transform', scrollPxTransformTextOffer((scrollPxMob - 1910), 0.225, -65));
						$('.offer-details-list__item_fourth').css('opacity', scrollPxOpacityItem((scrollPxMob - 1910), 0.005));
					}
				}
				if (scrollPxMob > 2210) {
					$('.offer-details-list__text_fourth').css('opacity', '1');
				}
				if(scrollPxMob > 2225 && scrollPxMob <= 2235) {
					$('.offer__svg svg').css(fourthFigureHeaderStaticMob);
				}
				if(scrollPxMob > 2240 && scrollPxMob <= 2600) {
					$('.offer__svg svg').css(fifthFigureHeaderMob)
					if(scrollPxMob > 2400) {
						$('.offer-details-list__text_fifth').css('opacity', scrollPxOpacityItem((scrollPxMob - 2400), 0.005));
						$('.offer-details-list__text_fifth').css('transform', scrollPxTransformTextOffer((scrollPxMob - 2400), 0.225, -45));
						$('.offer-details-list__item_fifth').css('opacity', scrollPxOpacityItem((scrollPxMob - 2400), 0.005));
					}
				}
				if(scrollPxMob <= 720) {
					$('.offer-details__info').css('position', 'static');
					$('.offer-details__info').css('transform', 'translate(0, 0)');
				}
				if(scrollPxMob > 720 && scrollPxMob <= 2225) {
					$('.offer-details__info').css('position', 'fixed')
					$('.offer-details__info').css('transform', 'translate(-644px, -720px)');
					$('.offer-details__info').css('top', 'inherit');
					$('.offer-details__info').css('left', 'inherit');
				}
				if(scrollPxMob > 2225) {
					$('.offer-details__info').css('position', 'relative')
					$('.offer-details__info').css('left', '0')
					$('.offer-details__info').css('top', '1480px')
					$('.offer-details__info').css('transform', 'translate(0, 0)');
				} else if (scrollPxMob > 550 && scrollPxMob < 2225) {
					$('.offer-details__info').css('position', 'fixed');
					$('.offer-details__info').css('transform', 'translate(0px, 0px)');
					$('.offer-details__info').css('top', '205px');
					$('.offer-details__info').css('left', '42px');
					$('.offer-details__info').css('margin-right', '0px');
				}
				if (scrollPxMob > 2600) {
					$('.offer-details-list__text').css('opacity', '1');
				}

			})
		}
		if(($(this).width() >= 1400)) {
			$(window).scroll( () => {
				let scrollPx2 = $(window).scrollTop();
				if(scrollPx2 == 0) {
					$('.offer__svg svg').css('left', '-58px');
					$('.offer__svg svg').css('top', '-25px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}

				if (scrollPx2 < 200) {
					$('.offer__text').css('transform', scrollPxTransformTextOffer(scrollPx2, 0.525, 0));
				} else {
					$('.offer__text').css('transform', 'translateX(105px)');
				}
			})
		} else if(($(this).width() >= 1200) && ($(this).width() <= 1300)) {
			$(window).scroll( () => {
				let scrollPx3 = $(window).scrollTop();
				if(scrollPx3 == 0) {
					$('.offer__svg svg').css('left', '-58px');
					$('.offer__svg svg').css('top', '-25px');
					$('.offer__svg svg').css('opacity', '0.1');
					$('.offer__svg svg').css('width', '920px');
				}

				if (scrollPx3 < 200) {
					$('.offer__text').css('transform', scrollPxTransformTextOffer(scrollPx3, 0.1, 0));
				} else {
					$('.offer__text').css('transform', 'translateX(20px)');
				}
			})
		}
});

