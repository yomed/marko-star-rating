'use strict';

var template = require('./template.marko');

function buildModel(input) {
    input = input || {};
    input.score = input.score || 0;
    var score = (Math.round(input.score * 4) / 4).toFixed(2); // round to quarter
    var scoreString = score + '';
    var stars = ['', '', '', '', ''];
    var starClass;
    var starType;

    stars.forEach(function (val, i) {
        starClass = 'star-rating__icon';
        starType = '';

        if (score >= i + 1) {
            starType = 'full';
        }

        if (score - i < 1 && score - i > 0) {
            starType = 'quarter';
            if (scoreString.includes('.75')) {
                starType = 'three-quarters';
            } else if (scoreString.includes('.50')) {
                starType = 'half';
            }
        }

        if (starType) {
            starClass += ' star-rating__icon--' + starType;
            starClass += ' star-rating__icon--active';
        }

        stars[i] = starClass;
    });

    return {
        stars: stars
    };
}

module.exports = function render(input, out) {
    template.render(buildModel(input), out);
};
