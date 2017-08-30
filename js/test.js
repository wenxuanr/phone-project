var screenAnimateElement = {
    '.screen-1': [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow',
    ],
    '.screen-2': [
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3'
    ],
    '.screen-3': [
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features',
    ],
    '.screen-4': [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_1',
        '.screen-4__type__item_2',
        '.screen-4__type__item_3',
        '.screen-4__type__item_4',
    ],
    '.screen-5': [
        '.screen-5__bg',
        '.screen-5__heading',
        '.screen-5__subheading',
    ]
};

function setScreenAnimate(screenCls) {
    //body code
    var screen = document.querySelector(screenCls); // get current element
    console.log(screen);
    var animateElement = screenAnimateElement[screenCls];
    var isSetAnimateClass = false;
    var isAnimateDone = false;

    screen.onclick = function() {
        if (isSetAnimateClass === false) {
            for (var i = 0; i < animateElement.length; i++) {
                var element = document.querySelector(animateElement[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls + ' ' + animateElement[i].substring(1) + '_animate_init');
            }
            isSetAnimateClass = true;
            return;
        }
        if (isAnimateDone === false) {
            for (var i = 0; i < animateElement.length; i++) {
                var element = document.querySelector(animateElement[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
            }
            isAnimateDone = true;
            return;
        }

        if (isAnimateDone === true) {
            console.log('isAnimateDone2');
            for (var i = 0; i < animateElement.length; i++) {
                var element = document.querySelector(animateElement[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute('class', baseCls.replace('_animate_done', '_animate_init'));
            }
            isAnimateDone = false;
            return;
        }
    }

}

//init => done


setScreenAnimate('.screen-1');
setScreenAnimate('.screen-2');
setScreenAnimate('.screen-3');
setScreenAnimate('.screen-4');
setScreenAnimate('.screen-5');