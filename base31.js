/* Copyright 2007-2015 TRANSLIT.CC. All rights reserved. All materials and code are protected by international copyright law. */
var t = {
    txt: document.getElementById("txt"),
    mAuto: true,
    mBil: true,
    mPril: true,
    mLng1: "en",
    mLng2: "ru",
    mTag: false,
    iTag: false,
    mUp: true,
    mTa: 2,
    mTags: true,
    mCaps: false,
    mEx: new Date("January 1, 2010 00:00:00"),
    mRt: 5 * 20000,
    mSet: 0,
    mSets: [
        ['Universal', 'Our own compilation', '<div><a href="javascript:t.n(2)">а</a></div><div>a</div><div><a href="javascript:t.n(20)">и</a></div><div>i</div><div><a href="javascript:t.n(38)">с</a></div><div>s</div><div><a href="javascript:t.n(56)">ъ</a></div><div>&quot;</div><div><a href="javascript:t.n(4)">б</a></div><div>b</div><div><a href="javascript:t.n(22)">й</a></div><div>j</div><div><a href="javascript:t.n(40)">т</a></div><div>t</div><div><a href="javascript:t.n(58)">ы</a></div><div>y</div><div><a href="javascript:t.n(6)">в</a></div><div class="sm1"><strong>v</strong>,w</div><div><a href="javascript:t.n(24)">к</a></div><div>k</div><div><a href="javascript:t.n(42)">у</a></div><div>u</div><div><a href="javascript:t.n(60)">ь</a></div><div>&#39;</div><div><a href="javascript:t.n(8)">г</a></div><div>g</div><div><a href="javascript:t.n(26)">л</a></div><div>l</div><div><a href="javascript:t.n(44)">ф</a></div><div>f</div><div><a href="javascript:t.n(62)">э</a></div><div class="sm1"><strong>je</strong>,ä</div><div><a href="javascript:t.n(10)">д</a></div><div>d</div><div><a href="javascript:t.n(28)">м</a></div><div>m</div><div><a href="javascript:t.n(46)">х</a></div><div class="sm1"><strong>h</strong>,x</div><div><a href="javascript:t.n(64)">ю</a></div><div class="sm2"><strong>ju</strong>,<br/>yu,ü</div><div><a href="javascript:t.n(12)">е</a></div><div>e</div><div><a href="javascript:t.n(30)">н</a></div><div>n</div><div><a href="javascript:t.n(48)">ц</a></div><div>c</div><div><a href="javascript:t.n(66)">я</a></div><div class="sm2"><strong>ja</strong>,<br/>ya,q</div><div><a href="javascript:t.n(14)">ё</a></div><div class="sm2"><strong>jo</strong>,<br/>yo,ö</div><div><a href="javascript:t.n(32)">о</a></div><div>o</div><div><a href="javascript:t.n(50)">ч</a></div><div>ch</div><div><a href="javascript:t.c(&quot;№&quot;)">№</a></div><div>#</div><div><a href="javascript:t.n(16)">ж</a></div><div>zh</div><div><a href="javascript:t.n(34)">п</a></div><div>p</div><div><a href="javascript:t.n(52)">ш</a></div><div>sh</div><div><a href="javascript:t.c(&quot;«&quot;)">«</a></div><div></div><div><a href="javascript:t.n(18)">з</a></div><div>z</div><div><a href="javascript:t.n(36)">р</a></div><div>r</div><div><a href="javascript:t.n(54)">щ</a></div><div class="sm1">shh</div><div><a href="javascript:t.c(&quot;»&quot;)">»</a></div><div></div>', {
            A: "А",
            a: "а",
            B: "Б",
            b: "б",
            V: "В",
            v: "в",
            G: "Г",
            g: "г",
            D: "Д",
            d: "д",
            E: "Е",
            e: "е",
            Z: "З",
            z: "з",
            I: "И",
            i: "и",
            J: "Й",
            j: "й",
            K: "К",
            k: "к",
            L: "Л",
            l: "л",
            M: "М",
            m: "м",
            N: "Н",
            n: "н",
            O: "О",
            o: "о",
            P: "П",
            p: "п",
            R: "Р",
            r: "р",
            S: "С",
            s: "с",
            T: "Т",
            t: "т",
            U: "У",
            u: "у",
            F: "Ф",
            f: "ф",
            X: "Х",
            x: "х",
            H: "Х",
            h: "х",
            C: "Ц",
            c: "ц",
            W: "В",
            w: "в",
            "ъъ": "Ъ",
            "\u0022": "ъ",
            Y: "Ы",
            y: "ы",
            "ьь": "Ь",
            "\u0027": "ь",
            Ä: "Э",
            ä: "э",
            Ö: "Ё",
            ö: "ё",
            Ü: "Ю",
            ü: "ю",
            "#": "№",
            ЙЕ: "Э",
            Йе: "Э",
            йе: "э",
            ЙО: "Ё",
            Йо: "Ё",
            йо: "ё",
            ЫО: "Ё",
            Ыо: "Ё",
            ыо: "ё",
            ЙУ: "Ю",
            Йу: "Ю",
            йу: "ю",
            ЫУ: "Ю",
            Ыу: "Ю",
            ыу: "ю",
            Q: "Я",
            q: "я",
            ЙА: "Я",
            Йа: "Я",
            йа: "я",
            ЫА: "Я",
            Ыа: "Я",
            ыа: "я",
            ЦХ: "Ч",
            Цх: "Ч",
            цх: "ч",
            СХ: "Ш",
            Сх: "Ш",
            сх: "ш",
            ЗХ: "Ж",
            Зх: "Ж",
            зх: "ж",
            ШХ: "Щ",
            Шх: "Щ",
            шх: "щ",
            "#": "№"
        }, {
            А: "A",
            а: "a",
            Б: "B",
            б: "b",
            В: "V",
            в: "v",
            Г: "G",
            г: "g",
            Д: "D",
            д: "d",
            Е: "E",
            е: "e",
            Ё: "Jo",
            ё: "jo",
            Ж: "Zh",
            ж: "zh",
            З: "Z",
            з: "z",
            И: "I",
            и: "i",
            Й: "J",
            й: "j",
            К: "K",
            к: "k",
            Л: "L",
            л: "l",
            М: "M",
            м: "m",
            Н: "N",
            н: "n",
            О: "O",
            о: "o",
            П: "P",
            п: "p",
            Р: "R",
            р: "r",
            С: "S",
            с: "s",
            Т: "T",
            т: "t",
            У: "U",
            у: "u",
            Ф: "F",
            ф: "f",
            Х: "H",
            х: "h",
            Ц: "C",
            ц: "c",
            Ч: "Ch",
            ч: "ch",
            Ш: "Sh",
            ш: "sh",
            Щ: "Shh",
            щ: "shh",
            Ъ: "\"\"",
            ъ: "\"",
            Ы: "Y",
            ы: "y",
            Ь: "''",
            ь: "'",
            Э: "Je",
            э: "je",
            Ю: "Ju",
            ю: "ju",
            Я: "Ja",
            я: "ja",
            "№": "#"
        }],
        ['GOST 7.79 B', 'GOST 7.79-2000 (System B) Standard', '<div><a href="javascript:t.n(2)">а</a></div><div>a</div><div><a href="javascript:t.n(20)">и</a></div><div>i</div><div><a href="javascript:t.n(38)">с</a></div><div>s</div><div><a href="javascript:t.n(56)">ъ</a></div><div>&quot;</div><div><a href="javascript:t.n(4)">б</a></div><div>b</div><div><a href="javascript:t.n(22)">й</a></div><div>j</div><div><a href="javascript:t.n(40)">т</a></div><div>t</div><div><a href="javascript:t.n(58)">ы</a></div><div>y</div><div><a href="javascript:t.n(6)">в</a></div><div>v</div><div><a href="javascript:t.n(24)">к</a></div><div>k</div><div><a href="javascript:t.n(42)">у</a></div><div>u</div><div><a href="javascript:t.n(60)">ь</a></div><div>&#39;</div><div><a href="javascript:t.n(8)">г</a></div><div>g</div><div><a href="javascript:t.n(26)">л</a></div><div>l</div><div><a href="javascript:t.n(44)">ф</a></div><div>f</div><div><a href="javascript:t.n(62)">э</a></div><div>eh</div><div><a href="javascript:t.n(10)">д</a></div><div>d</div><div><a href="javascript:t.n(28)">м</a></div><div>m</div><div><a href="javascript:t.n(46)">х</a></div><div>x</div><div><a href="javascript:t.n(64)">ю</a></div><div>yu</div><div><a href="javascript:t.n(12)">е</a></div><div>e</div><div><a href="javascript:t.n(30)">н</a></div><div>n</div><div><a href="javascript:t.n(48)">ц</a></div><div>с</div><div><a href="javascript:t.n(66)">я</a></div><div>ya</div><div><a href="javascript:t.n(14)">ё</a></div><div>yo</div><div><a href="javascript:t.n(32)">о</a></div><div>o</div><div><a href="javascript:t.n(50)">ч</a></div><div>ch</div><div><a href="javascript:t.c(%22№%22)">№</a></div><div>#</div><div><a href="javascript:t.n(16)">ж</a></div><div>zh</div><div><a href="javascript:t.n(34)">п</a></div><div>p</div><div><a href="javascript:t.n(52)">ш</a></div><div>sh</div><div><a href="javascript:t.c(%22«%22)">«</a></div><div></div><div><a href="javascript:t.n(18)">з</a></div><div>z</div><div><a href="javascript:t.n(36)">р</a></div><div>r</div><div><a href="javascript:t.n(54)">щ</a></div><div class="sm1">shh</div><div><a href="javascript:t.c(%22»%22)">»</a></div><div></div>', {
            A: "А",
            a: "а",
            B: "Б",
            b: "б",
            V: "В",
            v: "в",
            G: "Г",
            g: "г",
            D: "Д",
            d: "д",
            E: "Е",
            e: "е",
            Z: "З",
            z: "з",
            I: "И",
            i: "и",
            J: "Й",
            j: "й",
            K: "К",
            k: "к",
            L: "Л",
            l: "л",
            M: "М",
            m: "м",
            N: "Н",
            n: "н",
            O: "О",
            o: "о",
            P: "П",
            p: "п",
            R: "Р",
            r: "р",
            S: "С",
            s: "с",
            T: "Т",
            t: "т",
            U: "У",
            u: "у",
            F: "Ф",
            f: "ф",
            X: "Х",
            x: "х",
            C: "Ц",
            c: "ц",
            "ъъ": "Ъ",
            "\u0022": "ъ",
            Y: "Ы",
            y: "ы",
            "ьь": "Ь",
            "\u0027": "ь",
            ЕH: "Э",
            Еh: "Э",
            еh: "э",
            ЫО: "Ё",
            Ыо: "Ё",
            ыо: "ё",
            ЫУ: "Ю",
            Ыу: "Ю",
            ыу: "ю",
            ЫА: "Я",
            Ыа: "Я",
            ыа: "я",
            ЦH: "Ч",
            Цh: "Ч",
            цh: "ч",
            "СH": "Ш",
            "Сh": "Ш",
            "сh": "ш",
            ЗH: "Ж",
            Зh: "Ж",
            зh: "ж",
            ШХ: "Щ",
            Шх: "Щ",
            шх: "щ",
            "#": "№"
        }, {
            А: "A",
            а: "a",
            Б: "B",
            б: "b",
            В: "V",
            в: "v",
            Г: "G",
            г: "g",
            Д: "D",
            д: "d",
            Е: "E",
            е: "e",
            Ё: "Yo",
            ё: "yo",
            Ж: "Zh",
            ж: "zh",
            З: "Z",
            з: "z",
            И: "I",
            и: "i",
            Й: "J",
            й: "j",
            К: "K",
            к: "k",
            Л: "L",
            л: "l",
            М: "M",
            м: "m",
            Н: "N",
            н: "n",
            О: "O",
            о: "o",
            П: "P",
            п: "p",
            Р: "R",
            р: "r",
            С: "S",
            с: "s",
            Т: "T",
            т: "t",
            У: "U",
            у: "u",
            Ф: "F",
            ф: "f",
            Х: "X",
            х: "x",
            Ц: "C",
            ц: "c",
            Ч: "Ch",
            ч: "ch",
            Ш: "Sh",
            ш: "sh",
            Щ: "Shh",
            щ: "shh",
            Ъ: "\"\"",
            ъ: "\"",
            Ы: "Y",
            ы: "y",
            Ь: "''",
            ь: "'",
            Э: "Eh",
            э: "eh",
            Ю: "Yu",
            ю: "yu",
            Я: "Ya",
            я: "ya",
            "№": "#"
        }],
        ['ISO 9', 'ISO 9:1995 Standard', '<div><a href="javascript:t.n(2)">а</a></div><div>a</div><div><a href="javascript:t.n(20)">и</a></div><div>i</div><div><a href="javascript:t.n(38)">с</a></div><div>s</div><div><a href="javascript:t.n(56)">ъ</a></div><div>&quot;</div><div><a href="javascript:t.n(4)">б</a></div><div>b</div><div><a href="javascript:t.n(22)">й</a></div><div>j</div><div><a href="javascript:t.n(40)">т</a></div><div>t</div><div><a href="javascript:t.n(58)">ы</a></div><div>y</div><div><a href="javascript:t.n(6)">в</a></div><div>v</div><div><a href="javascript:t.n(24)">к</a></div><div>k</div><div><a href="javascript:t.n(42)">у</a></div><div>u</div><div><a href="javascript:t.n(60)">ь</a></div><div>&#39;</div><div><a href="javascript:t.n(8)">г</a></div><div>g</div><div><a href="javascript:t.n(26)">л</a></div><div>l</div><div><a href="javascript:t.n(44)">ф</a></div><div>f</div><div><a href="javascript:t.n(62)">э</a></div><div>è</div><div><a href="javascript:t.n(10)">д</a></div><div>d</div><div><a href="javascript:t.n(28)">м</a></div><div>m</div><div><a href="javascript:t.n(46)">х</a></div><div>h</div><div><a href="javascript:t.n(64)">ю</a></div><div>û</div><div><a href="javascript:t.n(12)">е</a></div><div>e</div><div><a href="javascript:t.n(30)">н</a></div><div>n</div><div><a href="javascript:t.n(48)">ц</a></div><div>c</div><div><a href="javascript:t.n(66)">я</a></div><div>â</div><div><a href="javascript:t.n(14)">ё</a></div><div>ë</div><div><a href="javascript:t.n(32)">о</a></div><div>o</div><div><a href="javascript:t.n(50)">ч</a></div><div>č</div><div><a href="javascript:t.c(%22№%22)">№</a></div><div>#</div><div><a href="javascript:t.n(16)">ж</a></div><div>ž</div><div><a href="javascript:t.n(34)">п</a></div><div>p</div><div><a href="javascript:t.n(52)">ш</a></div><div>š</div><div><a href="javascript:t.c(%22«%22)">«</a></div><div></div><div><a href="javascript:t.n(18)">з</a></div><div>z</div><div><a href="javascript:t.n(36)">р</a></div><div>r</div><div><a href="javascript:t.n(54)">щ</a></div><div>ŝ</div><div><a href="javascript:t.c(%22»%22)">»</a></div><div></div>', {
            A: "А",
            a: "а",
            B: "Б",
            b: "б",
            V: "В",
            v: "в",
            G: "Г",
            g: "г",
            D: "Д",
            d: "д",
            E: "Е",
            e: "е",
            Ë: "Ё",
            ë: "ё",
            Ž: "Ж",
            ž: "ж",
            Z: "З",
            z: "з",
            I: "И",
            i: "и",
            J: "Й",
            j: "й",
            K: "К",
            k: "к",
            L: "Л",
            l: "л",
            M: "М",
            m: "м",
            N: "Н",
            n: "н",
            O: "О",
            o: "о",
            P: "П",
            p: "п",
            R: "Р",
            r: "р",
            S: "С",
            s: "с",
            T: "Т",
            t: "т",
            U: "У",
            u: "у",
            F: "Ф",
            f: "ф",
            H: "Х",
            h: "х",
            C: "Ц",
            c: "ц",
            Č: "Ч",
            č: "ч",
            Š: "Ш",
            š: "ш",
            Ŝ: "Щ",
            ŝ: "щ",
            "\u0022": "ъ",
            "ъъ": "Ъ",
            Y: "Ы",
            y: "ы",
            "\u0027": "ь",
            "ьь": "Ь",
            È: "Э",
            è: "э",
            Û: "Ю",
            û: "ю",
            Â: "Я",
            â: "я",
            "#": "№"
        }, {
            А: "A",
            а: "a",
            Б: "B",
            б: "b",
            В: "V",
            в: "v",
            Г: "G",
            г: "g",
            Д: "D",
            д: "d",
            Е: "E",
            е: "e",
            Ё: "Ë",
            ё: "ë",
            Ж: "Ž",
            ж: "ž",
            З: "Z",
            з: "z",
            И: "I",
            и: "i",
            Й: "J",
            й: "j",
            К: "K",
            к: "k",
            Л: "L",
            л: "l",
            М: "M",
            м: "m",
            Н: "N",
            н: "n",
            О: "O",
            о: "o",
            П: "P",
            п: "p",
            Р: "R",
            р: "r",
            С: "S",
            с: "s",
            Т: "T",
            т: "t",
            У: "U",
            у: "u",
            Ф: "F",
            ф: "f",
            Х: "H",
            х: "h",
            Ц: "C",
            ц: "c",
            Ч: "Č",
            ч: "č",
            Ш: "Š",
            ш: "š",
            Щ: "Ŝ",
            щ: "ŝ",
            Ъ: "\"\"",
            ъ: "\"",
            Ы: "Y",
            ы: "y",
            Ь: "''",
            ь: "'",
            Э: "È",
            э: "è",
            Ю: "Û",
            ю: "û",
            Я: "Â",
            я: "â",
            "№": "#"
        }]
    ],
    tlng: function() {
        t.mPril = !t.mPril;
        t.sc("mode_primlang", t.mPril, t.mEx);
        var lst = document.getElementsByTagName("div");
        for (var i = 0; i < lst.length; i++) {
            if ((lst[i].className == "en") && t.mPril) lst[i].style.display = "";
            else if ((lst[i].className == "en") && !t.mPril) lst[i].style.display = "none";
            if ((lst[i].className == "ru") && t.mPril) lst[i].style.display = "none";
            else if ((lst[i].className == "ru") && !t.mPril) lst[i].style.display = "";
        }
        t.fc();
    },
    c: function(x, n) {
        var txt = document.getElementById("txt");
        if (txt.selectionStart >= 0) {
            var sTop = txt.scrollTop;
            var pStart = txt.selectionStart;
            var pEnd = txt.selectionEnd;
            if (n > 1) {
                pStart = pStart - n + 1;
            }
            txt.value = txt.value.substring(0, pStart) + x + txt.value.substring(pEnd, txt.value.length);
            txt.selectionStart = pStart + x.length;
            txt.selectionEnd = txt.selectionStart;
            txt.scrollTop = sTop;
        } else if (document.selection) {
            if (n > 1) {
                txt.focus();
                var sel = document.selection.createRange();
                sel.moveStart('character', 1 - n);
                sel.text = x;
                sel.select();
            } else {
                txt.focus();
                var range = document.selection.createRange();
                range.text = x;
                range.select();
            }
        } else {
            txt.value += x;
        }
        txt.focus();
    },
    n: function(x) {
        if (t.mCaps) {
            x--;
        }
        var cnt = 0;
        var chr;
        for (i in t.mSets[t.mSet][4]) {
            cnt++;
            if (cnt == x) chr = i;
        };
        var txt = document.getElementById("txt");
        if (document.selection) {
            txt.focus();
            var sel = document.selection.createRange();
            sel.text = chr;
            sel.select();
        } else if (txt.selectionStart) {
            var sTop = txt.scrollTop;
            var pStart = txt.selectionStart;
            var pEnd = txt.selectionEnd;
            txt.value = txt.value.substring(0, pStart) + chr + txt.value.substring(pEnd, txt.value.length);
            txt.selectionStart = pStart + 1;
            txt.selectionEnd = pStart + 1;
            txt.scrollTop = sTop;
        } else {
            txt.value += chr;
        }
        txt.focus();
    },
    fc: function() {
        document.getElementById("txt").focus();
    },
    sw: function() {
        var cdl = document.getElementById("codelist");
        if (t.mSet == cdl.selectedIndex) return;
        document.getElementById("work-right-body-content").innerHTML = t.mSets[cdl.selectedIndex][2];
        t.mSet = cdl.selectedIndex;
        t.sc("mode_charset", t.mSet, t.mEx);
    },
    sc: function(nm, vl, ex) {
        document.cookie = nm + "=" + escape(vl) + ((ex) ? ";expires=" + ex.toGMTString() : "");
    },
    tacf: function() {
        var tac = document.getElementById("togConv");
        if (t.mAuto) {
            tac.className = "off";
            tac.title = "TURN ON automatic conversion (or press ESC)";
        } else {
            tac.className = "on";
            tac.title = "TURN OFF automatic conversion (or press ESC)";
        }
        t.mAuto = !t.mAuto;
        t.sc("mode_autoconvert", t.mAuto, t.mEx);
        t.fc();
    },
    tstf: function() {
        var tst = document.getElementById("togTags");
        if (t.mTags) {
            tst.className = "off";
            tst.title = "TURN ON detection of HTML and BB tags";
        } else {
            tst.className = "on";
            tst.title = "TURN OFF detection of HTML and BB tags";
        }
        t.mTags = !t.mTags;
        t.sc("mode_skiptags", t.mTags, t.mEx);
        t.fc();
    },
    cntf: function(e) {
        if (!e) var e = window.event;
        if (e.type == "keydown" && e.keyCode == 27) {
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
            t.tacf();
        }
        if (e.type == "keyup" && e.keyCode == 27) t.fc();
        var txt = document.getElementById("txt");
        if (txt.value.length) txt.className = "tx1";
        else txt.className = "tx0";
        document.getElementById("txtcount").innerHTML = document.getElementById("txt").value.length;
    },
    tcps: function() {
        if (t.mCaps) {
            document.getElementById("work-right-body-content").style.textTransform = "none";
            document.getElementById("togCaps").className = "off";
        } else {
            document.getElementById("work-right-body-content").style.textTransform = "uppercase";
            document.getElementById("togCaps").className = "on";
        }
        t.mCaps = !t.mCaps;
        t.fc();
    },
    go: function(dir) {
        var txt = document.getElementById("txt");
        if (txt.value == "") return;
        var text = "";
        if (txt.selectionStart >= 0) {
            var sTop = txt.scrollTop;
            var s = txt.selectionStart;
            var e = txt.selectionEnd;
            if (s != e) {
                var l = txt.value.substring(0, s);
                var r = txt.value.substring(e, txt.value.length);
                text = (dir) ? t._gob(txt.value.substring(s, e)) : t._gof(txt.value.substring(s, e));
                txt.value = l + text + r;
                txt.selectionStart = s;
                txt.selectionEnd = s + text.length;
            } else {
                var l = txt.value.substring(0, s);
                l = (dir) ? t._gob(l) : t._gof(l);
                txt.value = (dir) ? t._gob(txt.value) : t._gof(txt.value);
                txt.selectionStart = txt.selectionEnd = l.length;
            }
            txt.scrollTop = sTop;
        } else if (document.selection) {
            txt.focus();
            var sel = document.selection.createRange();
            if (sel.text) {
                sel.text = (dir) ? t._gob(sel.text) : t._gof(sel.text);
            } else txt.value = (dir) ? t._gob(txt.value) : t._gof(txt.value);
        } else txt.value = (dir) ? t._gob(txt.value) : t._gof(txt.value);
        txt.focus();
    },
    _gof: function(text) {
        var cy = "";
        var prev = "";
        t.iTag = false;
        var ctr = false;
        if (t.mTags && (text.search(/[\[\]<>]/) != -1)) ctr = true;
        for (i = 0; i < text.length; i++) {
            if (ctr) {
                if (text.substr(i, 1) == "[" || text.substr(i, 1) == "<") {
                    t.iTag = true;
                    cy += text.substr(i, 1);
                    prev = text.substr(i, 1);
                    continue;
                } else if (text.substr(i, 1) == "]" || text.substr(i, 1) == ">") {
                    t.iTag = false;
                    cy += text.substr(i, 1);
                    prev = text.substr(i, 1);
                    continue;
                }
                if (t.iTag) {
                    cy += text.substr(i, 1);
                    prev = text.substr(i, 1);
                    continue;
                }
            }
            var rusText = t.mSets[t.mSet][3][text.substr(i, 1)];
            if (!rusText) rusText = text.substr(i, 1);
            var rusDuo = t.mSets[t.mSet][3][prev + rusText];
            if (rusDuo && prev) {
                cy = cy.substr(0, cy.length - 1) + rusDuo;
                prev = rusDuo;
            } else {
                cy += rusText;
                prev = rusText;
            }
        }
        return cy;
    },
    _gob: function(text) {
        var tr = "";
        for (i = 0; i < text.length; i++) {
            if (t.mSets[t.mSet][4][text.substr(i, 1)]) tr += t.mSets[t.mSet][4][text.substr(i, 1)];
            else tr += text.substr(i, 1);
        }
        return tr;
    },
    ini: function() {
        var txt = document.getElementById("txt");
        txt.onfocus = txt.onchange = txt.onkeyup = txt.onkeydown = t.cntf;
        txt.onkeypress = t.cnv;
        t.fc();
        t.ldc();
    },
    cnv: function(e) {
        if (!e) var e = window.event;
        if (!t.mAuto) return true;
        var k;
        if (e.which) k = e.which;
        else if (e.clientX) k = e.keyCode;
        if (k < 34 || !k || e.altKey || e.ctrlKey) return true;
        var keychar = String.fromCharCode(k);
        if (t.mTags && (keychar == "[" || keychar == "<")) {
            t.mTag = true;
            return true;
        }
        if (t.mTags && (keychar == "]" || keychar == ">")) {
            t.mTag = false;
            return true;
        }
        if (t.mTags && t.mTag) return true;
        var pos = "",
            prev1 = "";
        var txt = document.getElementById("txt");
        if (txt.selectionStart >= 0) {
            pos = txt.selectionStart;
            prev1 = txt.value.charAt(pos - 1);
        } else if (document.selection) {
            txt.focus();
            var sel = document.selection.createRange();
            var oldl = sel.text.length;
            sel.moveStart('character', -1);
            if (sel.text.length > oldl) prev1 = sel.text.charAt(0);
        }
        var rusText = t.mSets[t.mSet][3][keychar];
        if (!rusText) rusText = keychar;
        var rusDuo = t.mSets[t.mSet][3][prev1 + rusText];
        if (rusDuo && prev1) {
            t.c(rusDuo, 2);
            return false;
        } else if (rusText) {
            t.c(rusText);
            return false;
        } else {
            return true;
        }
    },
    ldc: function() {
        document.write('<img src="http://whos.amung.us/widget/translit.png" width="0" height="0" border="0" alt=""/><img src="http://top.rusrek.com/button.php?u=translit" alt="" width="0" height="0" border="0" alt="" />')
    },
    trans: function(d, q) {
        document.getElementById("dir").value = d;
        document.getElementById("src").value = t.u2k(q);
        document.trans.submit();
    },
    u2k: function(u) {
        var k = "",
            n, d = -848,
            t = 128;
        for (i = 0; i < u.length; i++) {
            n = u.charCodeAt(i);
            if (n > t) {
                n = n + d;
                k = k + "&#" + n + ";";
            } else k = k + u.charAt(i);
        }
        return k;
    },
    dmr: function() {
        var advlist = document.getElementById("advlist");
        if (advlist.selectedIndex == 0) return;
        var txt = document.getElementById("txt");
        if (advlist.selectedIndex == 1) {
            var spl = new spellChecker(txt);
            spl.openChecker();
            advlist.selectedIndex = 0;
            return;
        }
        var query, big = false;
        if (txt.selectionStart >= 0) {
            if (txt.selectionStart != txt.selectionEnd) {
                query = txt.value.substring(txt.selectionStart, txt.selectionEnd);
            } else query = txt.value;
        } else if (document.selection) {
            txt.focus();
            var sel = document.selection.createRange();
            if (sel.text != "") query = sel.text;
            else query = txt.value;
        } else query = txt.value;
        query = query.replace(/^\s+|\s+$/g, "");
        if (query.indexOf(" ") != -1) big = true;
        switch (advlist.selectedIndex) {
            case 2:
                window.open("http://www.google.ru/custom?q=" + encodeURI(query) + "&sa=Search&client=pub-0113441673686829&forid=1&channel=7766236690&ie=UTF-8&oe=UTF-8&cof=GALT%3A%23008000%3BGL%3A1%3BDIV%3A%23FFFFFF%3BVLC%3A663399%3BAH%3Acenter%3BBGC%3AFFFFFF%3BLBGC%3AFFFFFF%3BALC%3A0000FF%3BLC%3A0000FF%3BT%3A000000%3BGFNT%3A0000FF%3BGIMP%3A0000FF%3BLH%3A77%3BLW%3A176%3BL%3Ahttp%3A%2F%2Fwww.google.ru%2Fintl%2Fru%2Fimages%2FLogo_60wht.gif%3BS%3Ahttp%3A%2F%2Fwww.google.ru%2F%3BLP%3A1%3BFORID%3A1&hl=ru");
                break;
            case 3:
                window.open("http://www.yandex.ru/yandsearch?text=" + encodeURI(query));
                break;
            case 4:
                window.open("http://www.rambler.ru/srch?set=www&words=" + encodeURI(query));
                break;
            case 5:
                (big) ? t.trans("re", query): window.open("http://www.ver-dict.ru/online/?base=0&dictionary=re&word=" + encodeURI(query) + "#result");
                break;
            case 6:
                (big) ? t.trans("rg", query): window.open("http://www.ver-dict.ru/online/?base=0&dictionary=rg&word=" + encodeURI(query) + "#result");
                break;
            case 7:
                (big) ? t.trans("rf", query): window.open("http://www.ver-dict.ru/online/?base=0&dictionary=rf&word=" + encodeURI(query) + "#result");
                break;
            case 8:
                (big) ? t.trans("rs", query): window.open("http://www.ver-dict.ru/online/?base=0&dictionary=rs&word=" + encodeURI(query) + "#result");
                break;
        }
        advlist.selectedIndex = 0;
    }
}
