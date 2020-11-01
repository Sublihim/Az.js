'use strict';

let fs;
if (
    typeof require != 'undefined' &&
    typeof exports === 'object' &&
    typeof module !== 'undefined'
) {
    fs = require('fs');
}

const ResponceType = {
    JSON: 'json',
    ARRAY_BUFFER: 'arraybuffer',
};

/**
 *
 * @param {string} url
 * @param {Az.ResponceType} responseType
 * @param {Function} callback
 */
function load(url, responseType, callback) {
    if (fs) {
        Az._loadFs(url, responseType, callback);
    } else {
        Az._loadRequest(url, responseType, callback);
    }
}

/** */
function extend() {
    const result = {};
    for (let i = 0; i < arguments.length; i++) {
        for (let key in arguments[i]) {
            result[key] = arguments[i][key];
        }
    }
    return result;
}

/**
 *
 * @param {string} url
 * @param {Az.ResponceType} responseType
 * @param {Function} callback
 */
function _loadFs(url, responseType, callback) {
    fs.readFile(
        url,
        {
            encoding: responseType === Az.ResponceType.JSON ? 'utf8' : null,
        },
        (err, data) => {
            if (err) {
                callback(err);
                return;
            }

            if (responseType === Az.ResponceType.JSON) {
                callback(null, JSON.parse(data));
            } else if (responseType === Az.ResponceType.ARRAY_BUFFER) {
                if (data.buffer) {
                    callback(null, data.buffer);
                } else {
                    const ab = new ArrayBuffer(data.length);
                    const view = new Uint8Array(ab);
                    for (let i = 0; i < data.length; ++i) {
                        view[i] = data[i];
                    }
                    callback(null, ab);
                }
            } else {
                callback(new Error('Unknown responseType'));
            }
        }
    );
}

/**
 *
 * @param {string} url
 * @param {Az.ResponceType} responseType
 * @param {Function} callback
 */
function _loadRequest(url, responseType, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = responseType;

    xhr.onload = function (e) {
        if (xhr.response) {
            callback && callback(null, xhr.response);
        }
    };

    xhr.send(null);
}

module.exports = {
    load: load,
    extend: extend,
    ResponceType: ResponceType,
    Tokens: require('./tokens/tokens'),
};
