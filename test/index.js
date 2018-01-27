'use strict';

require('marko/node-require').install();
var expect = require('chai').expect;
var cheerio = require('cheerio');
var renderer = require('../src');

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

describe('marko-star-rating', function () {
    scenarios.forEach(function (scenario) {
        it('renders correctly with score=' + scenario.score, function () {
            renderer({score: scenario.score}, function (err, html) {
                var $ = cheerio.load(html);
                var $root = $('.star-rating');
                var $stars = $('.star-rating__icon', $root);
                var $quarter = $('.star-rating__icon--quarter.star-rating__icon--active', $root);
                var $half = $('.star-rating__icon--half.star-rating__icon--active', $root);
                var $threeQuarters = $('.star-rating__icon--three-quarters.star-rating__icon--active', $root);
                var $full = $('.star-rating__icon--full.star-rating__icon--active', $root);

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
