'use strict';

/**
 * @enum {string}
 */
const TokensType = {
    WORD: 'WORD',
    NUMBER: 'NUMBER',
    OTHER: 'OTHER',
    DIGIT: 'DIGIT',
    CYRIL: 'CYRIL',
    LATIN: 'LATIN',
    MIXED: 'MIXED',
    PUNCT: 'PUNCT',
    SPACE: 'SPACE',
    MARKUP: 'MARKUP',
    NEWLINE: 'NEWLINE',
    EMAIL: 'EMAIL',
    LINK: 'LINK',
    HASHTAG: 'HASHTAG',
    MENTION: 'MENTION',
    TAG: 'TAG',
    CONTENT: 'CONTENT',
    SCRIPT: 'SCRIPT',
    STYLE: 'STYLE',
    COMMENT: 'COMMENT',
    CLOSING: 'CLOSING',
    TEMPLATE: 'TEMPLATE',
    RANGE: 'RANGE',
    ENTITY: 'ENTITY',
};

/**
 * Токен, соответствующий некоторой подстроке в представленном на вход тексте.
 */
class Token {
    /**
     *
     *
     * @property {string} type Тип токена.
     * @property {string} subType Подтип токена.
     * @property {number} st Индекс первого символа, входящего в токен.
     * @property {number} en Индекс последнего символа, входящего в токен.
     * @property {number} length Длина токена.
     * @property {boolean} firstUpper True, если первый символ токена является заглавной буквой.
     * @property {boolean} allUpper True, если все символы в токене являются заглавными буквами.
     */
    constructor(
        source,
        st,
        length,
        index,
        firstUpper,
        allUpper,
        type,
        subType
    ) {
        this.source = source;
        this.st = st;
        this.length = length;
        this.index = index;
        this.firstUpper = firstUpper;
        this.allUpper = allUpper;
        this.type = type;
        this.subType = subType;
        this._str === '';
    }

    /** @returns {string} */
    toString() {
        if (!this._str || this._str.length !== this.length) {
            this._str = this.source.substr(this.st, this.length);
        }
        return this._str;
    }

    /**
     *
     * @param {string} str
     * @returns {number}
     */
    indexOf(str) {
        if (str.length === 1) {
            for (let i = 0; i < this.length; i++) {
                if (this.source[this.st + i] === str) {
                    return i;
                }
            }
            return -1;
        }
        return this.toString().indexOf(str);
    }

    /** @returns {string} */
    toLowerCase() {
        this.toString().toLocaleLowerCase();
    }

    /** @returns {boolean} */
    isCapitalized() {
        return this.firstUpper && !this.allUpper;
    }

    /** @returns {number} */
    en() {
        return this.st + this.length - 1;
    }
}

Token.TYPE = TokensType;

module.exports = Token;
