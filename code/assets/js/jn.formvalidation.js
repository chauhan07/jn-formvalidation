/*************************************/
/*************************************/
/*************************************/
/*************************************/
/************** JN FORM **************/
/**************VALIDATION*************/
/*************************************/
/*************************************/
/*************************************/
/*************************************/

/*
 *   Version: 1.0.0                                                                 
 *   Author: Aditya Chauhan                                                         
 *   License: MIT                                                                   
 *   Description: This script provides the validation logic for form fields such    
 *   as email, password, text, and other input types. It highlights invalid         
 *   fields and displays error messages accordingly.                                
*/


function _0x2be1() {
    const _0x439a3a = [
        "Please\x20enter\x20a\x20valid\x20month.",
        "SELECT",
        "tagName",
        "forEach",
        "password",
        "Please\x20enter\x20a\x20valid\x20number.",
        "background:rgb(153,\x2031,\x200);\x20color:\x20#ffffff;\x20display:\x20block;padding:5px\x2015px;border-radius:7px",
        "search",
        "createElement",
        "toLowerCase",
        "div",
        "test",
        ".jn-input-wrap",
        "7546987bgTpEt",
        "1px\x20solid\x20#ff2200",
        "important",
        "jnSetupValidation",
        "select",
        "4321816zAcHxN",
        "email",
        "range",
        "77337NrdRFb",
        "TEXTAREA",
        "tel",
        "date",
        "3660745uydEbq",
        "Please\x20enter\x20a\x20valid\x20password.",
        "checkbox",
        "image/png",
        "getAttribute",
        "type",
        "textContent",
        "querySelectorAll",
        "This\x20option\x20must\x20be\x20checked.",
        "remove",
        "number",
        "image/gif",
        "showErrorMessages",
        "some",
        "Please\x20enter\x20a\x20valid\x20url",
        "1397240bHWBoq",
        "Please\x20select\x20a\x20color.",
        "add",
        "input[name=\x22",
        "74kTQsGJ",
        "textarea",
        "Please\x20enter\x20some\x20text.",
        "Please\x20enter\x20a\x20valid\x20date\x20and\x20time.",
        "7029666hNnfmN",
        "radio",
        "target",
        "text",
        "Please\x20select\x20an\x20option.",
        "jn-error-message",
        "addEventListener",
        "%cForm\x20Class\x20is\x20not\x20added",
        "querySelector",
        "submit",
        "checked",
        "datetimeLocal",
        "from",
        "file",
        "time",
        "style",
        "month",
        "week",
        "name",
        "error-outline",
        "classList",
        "errorMessages",
        "Please\x20enter\x20a\x20valid\x20date.",
        "files",
        "datetime-local",
        "log",
        "color",
        "preventDefault",
        "Please\x20enter\x20a\x20valid\x20week.",
        "13732aRiIWA",
        ".jn-input-wrap\x20.jn-error-message",
        ".jn-input-wrap\x20input,\x20.jn-input-wrap\x20select,\x20.jn-input-wrap\x20textarea",
        "setProperty",
        "formClass",
    ];
    _0x2be1 = function () {
        return _0x439a3a;
    };
    return _0x2be1();
}
const _0x3e301c = _0x1726;
(function (_0x24b9e2, _0x5b6caa) {
    const _0x30f773 = _0x1726,
        _0x5d4b98 = _0x24b9e2();
    while (!![]) {
        try {
            const _0x2b4ac7 =
                -parseInt(_0x30f773(0x107)) / 0x1 +
                (parseInt(_0x30f773(0xe6)) / 0x2) * (parseInt(_0x30f773(0xcf)) / 0x3) +
                -parseInt(_0x30f773(0x11e)) / 0x4 +
                parseInt(_0x30f773(0xd3)) / 0x5 +
                -parseInt(_0x30f773(0xea)) / 0x6 +
                parseInt(_0x30f773(0x119)) / 0x7 +
                parseInt(_0x30f773(0xe2)) / 0x8;
            if (_0x2b4ac7 === _0x5b6caa) break;
            else _0x5d4b98["push"](_0x5d4b98["shift"]());
        } catch (_0x1a645b) {
            _0x5d4b98["push"](_0x5d4b98["shift"]());
        }
    }
})(_0x2be1, 0xa44cb);
class JnFormValidation {
    constructor(_0x415cd8 = {}) {
        const _0x23338a = _0x1726;
        (this[_0x23338a(0x10b)] = _0x415cd8[_0x23338a(0x10b)] || ""), (this["showErrorMessages"] = _0x415cd8[_0x23338a(0xdf)] !== undefined ? _0x415cd8[_0x23338a(0xdf)] : !![]);
        const _0x25cc5b = {
            email: "Please\x20enter\x20a\x20valid\x20email\x20address.",
            text: _0x23338a(0xe8),
            password: _0x23338a(0xd4),
            tel: "Please\x20enter\x20a\x20valid\x20phone\x20number.",
            number: _0x23338a(0x111),
            checkbox: _0x23338a(0xdb),
            radio: _0x23338a(0xee),
            select: _0x23338a(0xee),
            textarea: "Please\x20enter\x20some\x20text.",
            file: "Please\x20upload\x20a\x20valid\x20file.",
            search: "Please\x20type\x20for\x20search",
            url: _0x23338a(0xe1),
            date: _0x23338a(0x100),
            time: "Please\x20enter\x20a\x20valid\x20time.",
            datetimeLocal: _0x23338a(0xe9),
            month: _0x23338a(0x10c),
            week: _0x23338a(0x106),
            range: "Please\x20enter\x20a\x20valid\x20range.",
            color: _0x23338a(0xe3),
        };
        (this["errorMessages"] = { ..._0x25cc5b, ..._0x415cd8[_0x23338a(0xff)] }), this[_0x23338a(0x11c)]();
    }
    [_0x3e301c(0x11c)]() {
        const _0x46a399 = _0x3e301c;
        if (this[_0x46a399(0x10b)] === "") {
            console[_0x46a399(0x103)](_0x46a399(0xf1), _0x46a399(0x112));
            return;
        }
        jn_validator(this);
    }
}
function _0x1726(_0x56e60b, _0x13b77b) {
    const _0x2be1cf = _0x2be1();
    return (
        (_0x1726 = function (_0x17264f, _0x2b9931) {
            _0x17264f = _0x17264f - 0xce;
            let _0x51e95f = _0x2be1cf[_0x17264f];
            return _0x51e95f;
        }),
        _0x1726(_0x56e60b, _0x13b77b)
    );
}
function jn_validator(_0x1a4155) {
    const _0x5210d8 = _0x3e301c,
        _0x1dd657 = _0x1a4155["showErrorMessages"];
    function _0x8c014b(_0x4c7346) {
        const _0x331649 = _0x1726;
        _0x4c7346[_0x331649(0x105)]();
        const _0x1231ff = _0x4c7346[_0x331649(0xec)];
        _0xf098b0(_0x1231ff), _0x4a4b7f(_0x1231ff), _0x1e41f9();
        const _0x511167 = _0x1231ff["querySelectorAll"](_0x331649(0x118));
        let _0x4a0604 = !![];
        _0x511167[_0x331649(0x10f)]((_0x3106df) => {
            const _0x1da946 = _0x331649,
                _0x1df2e4 = _0x3106df[_0x1da946(0xf2)]("input,\x20select,\x20textarea");
            if (_0x1df2e4) {
                let _0x4a4a13;
                _0x1df2e4["tagName"] == _0x1da946(0x10d) || _0x1df2e4[_0x1da946(0x10e)] == _0x1da946(0xd0) ? (_0x4a4a13 = _0x1df2e4[_0x1da946(0x10e)][_0x1da946(0x115)]()) : (_0x4a4a13 = _0x1df2e4["getAttribute"](_0x1da946(0xd8)));
                const _0x59235d = _0x1df2e4["value"]["trim"]();
                switch (_0x4a4a13) {
                    case "email":
                        !_0x34a3cf(_0x59235d) && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0x11f)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xed):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0xed)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0x110):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)]["password"]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xd1):
                        !_0x55cceb(_0x59235d) && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xd1)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "number":
                        !_0x3673d7(_0x59235d) && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0xdd)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "checkbox":
                        var _0x1c08de = _0x1df2e4[_0x1da946(0xd7)]("name"),
                            _0x42cf09 = _0x1231ff[_0x1da946(0xda)](_0x1da946(0xe5) + _0x1c08de + "\x22]"),
                            _0xdaa62f = Array[_0x1da946(0xf6)](_0x42cf09)["some"]((_0x37bf5f) => _0x37bf5f[_0x1da946(0xf4)]);
                        !_0xdaa62f && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xd5)]) : _0x42cf09[_0x1da946(0x10f)]((_0x8966b4) => _0x167f71(_0x8966b4)), (_0x4a0604 = ![]));
                        break;
                    case "radio":
                        var _0x1c08de = _0x1df2e4["getAttribute"](_0x1da946(0xfc)),
                            _0x42cf09 = _0x1231ff[_0x1da946(0xda)](_0x1da946(0xe5) + _0x1c08de + "\x22]"),
                            _0xdaa62f = Array["from"](_0x42cf09)[_0x1da946(0xe0)]((_0x322fe1) => _0x322fe1["checked"]);
                        !_0xdaa62f && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xeb)]) : _0x42cf09["forEach"]((_0x16e85a) => _0x167f71(_0x16e85a)), (_0x4a0604 = ![]));
                        break;
                    case "select":
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0x11d)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xe7):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xe7)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "file":
                        const _0x35ceae = _0x1df2e4[_0x1da946(0x101)][0x0];
                        !_0x514dd0(_0x35ceae) && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0xf7)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0x113):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0x113)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "url":
                        !_0x409575(_0x59235d) && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)]["url"]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xd2):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xd2)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xf8):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xf8)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0x102):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xf5)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "month":
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xfa)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case "week":
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0xfb)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0xce):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155["errorMessages"][_0x1da946(0xce)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    case _0x1da946(0x104):
                        _0x59235d === "" && (_0x1dd657 ? _0x1ffb75(_0x3106df, _0x1a4155[_0x1da946(0xff)][_0x1da946(0x104)]) : _0x167f71(_0x1df2e4), (_0x4a0604 = ![]));
                        break;
                    default:
                        break;
                }
            }
        }),
            _0x4a0604 && _0x4c7346[_0x331649(0xec)]["submit"]();
    }
    function _0x1ffb75(_0x107002, _0x2aa074) {
        const _0x8c8407 = _0x1726,
            _0x3eaaa5 = document[_0x8c8407(0x114)](_0x8c8407(0x116));
        _0x107002[_0x8c8407(0xfe)]["add"]("jn-error-wrap"), _0x3eaaa5[_0x8c8407(0xfe)][_0x8c8407(0xe4)](_0x8c8407(0xef)), (_0x3eaaa5[_0x8c8407(0xd9)] = _0x2aa074), _0x107002["appendChild"](_0x3eaaa5);
    }
    function _0xf098b0(_0x3b3fe5) {
        const _0x3f3904 = _0x1726;
        _0x3b3fe5[_0x3f3904(0xda)](_0x3f3904(0x118))[_0x3f3904(0x10f)]((_0x3fc2c7) => {
            const _0x574e10 = _0x3f3904;
            _0x3fc2c7[_0x574e10(0xfe)]["remove"]("jn-error-wrap");
        });
    }
    function _0x4a4b7f(_0x85fdf8) {
        const _0x17b4fa = _0x1726,
            _0xaf892c = _0x85fdf8[_0x17b4fa(0xda)](_0x17b4fa(0x108));
        _0xaf892c["forEach"]((_0x4b84d0) => {
            const _0x585d97 = _0x17b4fa;
            _0x4b84d0[_0x585d97(0xdc)]();
        });
    }
    function _0x167f71(_0x592d57) {
        const _0x38e2d0 = _0x1726;
        _0x592d57[_0x38e2d0(0xf9)][_0x38e2d0(0x10a)]("outline", _0x38e2d0(0x11a), _0x38e2d0(0x11b));
    }
    function _0x1e41f9() {
        const _0xd57a26 = _0x1726,
            _0x287a09 = document["querySelectorAll"](_0xd57a26(0x109));
        _0x287a09[_0xd57a26(0x10f)]((_0x139b79) => {
            const _0x144a7e = _0xd57a26;
            _0x139b79[_0x144a7e(0xfe)][_0x144a7e(0xdc)](_0x144a7e(0xfd));
        });
    }
    function _0x34a3cf(_0xe3ba24) {
        const _0x4e87cc = _0x1726,
            _0x5637b8 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return _0x5637b8[_0x4e87cc(0x117)](_0xe3ba24);
    }
    function _0x55cceb(_0x19958c) {
        const _0x6b12ab = _0x1726,
            _0x72d7a1 = /^\d{10}$/;
        return _0x72d7a1[_0x6b12ab(0x117)](_0x19958c);
    }
    function _0x409575(_0x41edf8) {
        const _0x3ab602 = _0x1726,
            _0x3e0cee = /^(ftp|http|https):\/\/[^ "]+$/;
        return _0x3e0cee[_0x3ab602(0x117)](_0x41edf8);
    }
    function _0x3673d7(_0x457073) {
        const _0x5e67c2 = /^\d+$/;
        return _0x5e67c2["test"](_0x457073);
    }
    function _0x514dd0(_0x85fdcb) {
        const _0x1af5e3 = _0x1726;
        if (!_0x85fdcb) return ![];
        const _0x7c4b6b = _0x85fdcb[_0x1af5e3(0xd8)];
        return _0x7c4b6b === _0x1af5e3(0xd6) || _0x7c4b6b === "image/jpeg" || _0x7c4b6b === _0x1af5e3(0xde) || _0x7c4b6b === "application/pdf";
    }
    const _0xd6187f = document[_0x5210d8(0xda)](_0x1a4155[_0x5210d8(0x10b)]);
    _0xd6187f[_0x5210d8(0x10f)]((_0x1463ab) => {
        const _0x30e27d = _0x5210d8;
        _0x1463ab[_0x30e27d(0xf0)](_0x30e27d(0xf3), _0x8c014b);
    });
}
