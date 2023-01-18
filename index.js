var express = require('express');
var app = express();
var request = require('request');
var apiUrl = 'https://example.com/api/process';

exports.eejsBlock_editbarMenuRight = function (hook_name, args, cb) {
    args.content = args.content + '<li><a id="submit-btn" title="Submit" class="button-icon icon icon-info">Submit</a></li>';
    return cb();
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
    args.content = args.content +
    '<script>' +
    'document.getElementById("submit-btn").addEventListener("click", function() {' +
        'var padText = pad.getText();' +
        'request.post({' +
            'url: apiUrl,' +
            'json: true,' +
            'body: {' +
              'text: padText' +
            '}' +
        '}, function(error, response, body) {' +
            'if (!error && response.statusCode === 200) {' +
                'alert("Your essay has been submitted");' +
            '} else {' +
                'console.error("There was an error submitting your essay. Specifically: ", error);' +
            '}' +
        '});' +
    '});' +
    '</script>';
    return cb();
};
