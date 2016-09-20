'use strict';

var $ = require('jquery');
var expect = require('chai').expect;
var renderer = require('../src');

function getDOM(html) {
    return $('<wrapper>' + html + '</wrapper>');
}

function createScenario(score, quarter, half, threeQuarters, full) {
    return {
        score: score,
        quarter: quarter,
        half: half,
        threeQuarters: threeQuarters,
        full: full
    };
}

var scenarios = [
    createScenario(5, 0, 0, 0, 5),
    createScenario(4.8, 0, 0, 1, 4),
    createScenario(4.2, 1, 0, 0, 4),
    createScenario(4, 0, 0, 0, 4),
    createScenario(3.5, 0, 1, 0, 3),
    createScenario(2.2, 1, 0, 0, 2),
    createScenario(1.7, 0, 0, 1, 1),
    createScenario(0.5, 0, 1, 0, 0),
    createScenario(0, 0, 0, 0, 0)
];

describe('star-rating-marko', function () {
    scenarios.forEach(function (scenario) {
        it('renders correctly with score=' + scenario.score, function () {
            renderer({score: scenario.score}, function (err, html) {
                var $dom = getDOM(html);
                var $root = $('.star-rating-marko', $dom);
                var $stars = $('.star-rating-marko__icon', $root);
                var $quarter = $('.star-rating-marko__icon--quarter.star-rating-marko__icon--active', $root);
                var $half = $('.star-rating-marko__icon--half.star-rating-marko__icon--active', $root);
                var $threeQuarters = $('.star-rating-marko__icon--three-quarters.star-rating-marko__icon--active', $root);
                var $full = $('.star-rating-marko__icon--full.star-rating-marko__icon--active', $root);

                expect($root.length).to.equal(1);
                expect($stars.length).to.equal(5);
                expect($quarter.length).to.equal(scenario.quarter);
                expect($half.length).to.equal(scenario.half);
                expect($threeQuarters.length).to.equal(scenario.threeQuarters);
                expect($full.length).to.equal(scenario.full);
            });
        });
    });
});
