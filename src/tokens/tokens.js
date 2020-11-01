'use strict';

const Token = require('./token');
const Az = require('../az');

/**@type {string[]} */
const TLDs = 'ac|ad|ae|aero|af|ag|ai|al|am|ao|aq|ar|arpa|as|asia|at|au|aw|ax|az|ba|bb|be|bf|bg|bh|bi|biz|bj|bm|bo|br|bs|bt|bv|bw|by|bz|ca|cat|cc|cd|cf|cg|ch|ci|cl|cm|cn|co|com|coop|cr|cu|cv|cw|cx|cz|de|dj|dk|dm|do|dz|ec|edu|ee|eg|es|et|eu|fi|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gov|gp|gq|gr|gs|gt|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|info|int|io|iq|ir|is|it|je|jo|jobs|jp|kg|ki|km|kn|kp|kr|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mil|mk|ml|mn|mo|mobi|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|na|name|nc|ne|net|nf|ng|nl|no|nr|nu|nz|om|org|pa|pe|pf|ph|pk|pl|pm|pn|post|pr|pro|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sx|sy|sz|tc|td|tel|tf|tg|th|tj|tk|tl|tm|tn|to|tr|travel|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|yt|امارات|հայ|বাংলা|бел|中国|中國|الجزائر|مصر|ею|გე|ελ|香港|भारत|بھارت|భారత్|ભારત|ਭਾਰਤ|ভারত|இந்தியா|ایران|ايران|عراق|الاردن|한국|қаз|ලංකා|இலங்கை|المغرب|мкд|мон|澳門|澳门|مليسيا|عمان|پاکستان|پاكستان|فلسطين|срб|рф|قطر|السعودية|السعودیة|السعودیۃ|السعوديه|سودان|新加坡|சிங்கப்பூர்|سورية|سوريا|ไทย|تونس|台灣|台湾|臺灣|укр|اليمن|xxx|zm|aaa|aarp|abarth|abb|abbott|abbvie|abc|able|abogado|abudhabi|academy|accenture|accountant|accountants|aco|active|actor|adac|ads|adult|aeg|aetna|afamilycompany|afl|africa|africamagic|agakhan|agency|aig|aigo|airbus|airforce|airtel|akdn|alfaromeo|alibaba|alipay|allfinanz|allstate|ally|alsace|alstom|americanexpress|americanfamily|amex|amfam|amica|amsterdam|analytics|android|anquan|anz|aol|apartments|app|apple|aquarelle|arab|aramco|archi|army|art|arte|asda|associates|athleta|attorney|auction|audi|audible|audio|auspost|author|auto|autos|avianca|aws|axa|azure|baby|baidu|banamex|bananarepublic|band|bank|bar|barcelona|barclaycard|barclays|barefoot|bargains|baseball|basketball|bauhaus|bayern|bbc|bbt|bbva|bcg|bcn|beats|beauty|beer|bentley|berlin|best|bestbuy|bet|bharti|bible|bid|bike|bing|bingo|bio|black|blackfriday|blanco|blockbuster|blog|bloomberg|blue|bms|bmw|bnl|bnpparibas|boats|boehringer|bofa|bom|bond|boo|book|booking|boots|bosch|bostik|boston|bot|boutique|box|bradesco|bridgestone|broadway|broker|brother|brussels|budapest|bugatti|build|builders|business|buy|buzz|bzh|cab|cafe|cal|call|calvinklein|camera|camp|cancerresearch|canon|capetown|capital|capitalone|car|caravan|cards|care|career|careers|cars|cartier|casa|case|caseih|cash|casino|catering|catholic|cba|cbn|cbre|cbs|ceb|center|ceo|cern|cfa|cfd|chanel|channel|chase|chat|cheap|chintai|chloe|christmas|chrome|chrysler|church|cipriani|circle|cisco|citadel|citi|citic|city|cityeats|claims|cleaning|click|clinic|clinique|clothing|cloud|club|clubmed|coach|codes|coffee|college|cologne|comcast|commbank|community|company|compare|computer|comsec|condos|construction|consulting|contact|contractors|cooking|cookingchannel|cool|corsica|country|coupon|coupons|courses|credit|creditcard|creditunion|cricket|crown|crs|cruise|cruises|csc|cuisinella|cymru|cyou|dabur|dad|dance|date|dating|datsun|day|dclk|dds|deal|dealer|deals|degree|delivery|dell|deloitte|delta|democrat|dental|dentist|desi|design|dev|dhl|diamonds|diet|digital|direct|directory|discount|discover|dish|diy|dnp|docs|dodge|dog|doha|domains|dot|download|drive|dstv|dtv|dubai|duck|dunlop|duns|dupont|durban|dvag|dwg|earth|eat|edeka|education|email|emerck|emerson|energy|engineer|engineering|enterprises|epost|epson|equipment|ericsson|erni|esq|estate|esurance|etisalat|eurovision|eus|events|everbank|exchange|expert|exposed|express|extraspace|fage|fail|fairwinds|faith|family|fan|fans|farm|farmers|fashion|fast|fedex|feedback|ferrari|ferrero|fiat|fidelity|fido|film|final|finance|financial|fire|firestone|firmdale|fish|fishing|fit|fitness|flickr|flights|flir|florist|flowers|flsmidth|fly|foo|foodnetwork|football|ford|forex|forsale|forum|foundation|fox|free|fresenius|frl|frogans|frontdoor|frontier|ftr|fujitsu|fujixerox|fun|fund|furniture|futbol|fyi|gal|gallery|gallo|gallup|game|games|gap|garden|gbiz|gdn|gea|gent|genting|george|ggee|gift|gifts|gives|giving|glade|glass|gle|global|globo|gmail|gmbh|gmo|gmx|godaddy|gold|goldpoint|golf|goo|goodhands|goodyear|goog|google|gop|got|gotv|grainger|graphics|gratis|green|gripe|group|guardian|gucci|guge|guide|guitars|guru|hair|hamburg|hangout|haus|hbo|hdfc|hdfcbank|health|healthcare|help|helsinki|here|hermes|hgtv|hiphop|hisamitsu|hitachi|hiv|hkt|hockey|holdings|holiday|homedepot|homegoods|homes|homesense|honda|honeywell|horse|host|hosting|hot|hoteles|hotmail|house|how|hsbc|htc|hughes|hyatt|hyundai|ibm|icbc|ice|icu|ieee|ifm|iinet|ikano|imamat|imdb|immo|immobilien|industries|infiniti|ing|ink|institute|insurance|insure|intel|international|intuit|investments|ipiranga|irish|iselect|ismaili|ist|istanbul|itau|itv|iveco|iwc|jaguar|java|jcb|jcp|jeep|jetzt|jewelry|jio|jlc|jll|jmp|jnj|joburg|jot|joy|jpmorgan|jprs|juegos|juniper|kaufen|kddi|kerryhotels|kerrylogistics|kerryproperties|kfh|kia|kim|kinder|kindle|kitchen|kiwi|koeln|komatsu|kosher|kpmg|kpn|krd|kred|kuokgroup|kyknet|kyoto|lacaixa|ladbrokes|lamborghini|lamer|lancaster|lancia|lancome|land|landrover|lanxess|lasalle|lat|latino|latrobe|law|lawyer|lds|lease|leclerc|lefrak|legal|lego|lexus|lgbt|liaison|lidl|life|lifeinsurance|lifestyle|lighting|like|lilly|limited|limo|lincoln|linde|link|lipsy|live|living|lixil|loan|loans|locker|locus|loft|lol|london|lotte|lotto|love|lpl|lplfinancial|ltd|ltda|lundbeck|lupin|luxe|luxury|macys|madrid|maif|maison|makeup|man|management|mango|market|marketing|markets|marriott|marshalls|maserati|mattel|mba|mcd|mcdonalds|mckinsey|med|media|meet|melbourne|meme|memorial|men|menu|meo|metlife|miami|microsoft|mini|mint|mit|mitsubishi|mlb|mls|mma|mnet|mobily|moda|moe|moi|mom|monash|money|monster|montblanc|mopar|mormon|mortgage|moscow|moto|motorcycles|mov|movie|movistar|msd|mtn|mtpc|mtr|multichoice|mutual|mutuelle|mzansimagic|nab|nadex|nagoya|naspers|nationwide|natura|navy|nba|nec|netbank|netflix|network|neustar|new|newholland|news|next|nextdirect|nexus|nfl|ngo|nhk|nico|nike|nikon|ninja|nissan|nissay|nokia|northwesternmutual|norton|now|nowruz|nowtv|nra|nrw|ntt|nyc|obi|observer|off|office|okinawa|olayan|olayangroup|oldnavy|ollo|omega|one|ong|onl|online|onyourside|ooo|open|oracle|orange|organic|orientexpress|origins|osaka|otsuka|ott|ovh|page|pamperedchef|panasonic|panerai|paris|pars|partners|parts|party|passagens|pay|payu|pccw|pet|pfizer|pharmacy|philips|photo|photography|photos|physio|piaget|pics|pictet|pictures|pid|pin|ping|pink|pioneer|pizza|place|play|playstation|plumbing|plus|pnc|pohl|poker|politie|porn|pramerica|praxi|press|prime|prod|productions|prof|progressive|promo|properties|property|protection|pru|prudential|pub|pwc|qpon|quebec|quest|qvc|racing|raid|read|realestate|realtor|realty|recipes|red|redstone|redumbrella|rehab|reise|reisen|reit|reliance|ren|rent|rentals|repair|report|republican|rest|restaurant|review|reviews|rexroth|rich|richardli|ricoh|rightathome|ril|rio|rip|rmit|rocher|rocks|rodeo|rogers|room|rsvp|ruhr|run|rwe|ryukyu|saarland|safe|safety|sakura|sale|salon|samsclub|samsung|sandvik|sandvikcoromant|sanofi|sap|sapo|sarl|sas|save|saxo|sbi|sbs|sca|scb|schaeffler|schmidt|scholarships|school|schule|schwarz|science|scjohnson|scor|scot|seat|secure|security|seek|select|sener|services|ses|seven|sew|sex|sexy|sfr|shangrila|sharp|shaw|shell|shia|shiksha|shoes|shopping|shouji|show|showtime|shriram|silk|sina|singles|site|ski|skin|sky|skype|sling|smart|smile|sncf|soccer|social|softbank|software|sohu|solar|solutions|song|sony|soy|space|spiegel|spot|spreadbetting|srl|srt|stada|staples|star|starhub|statebank|statefarm|statoil|stc|stcgroup|stockholm|storage|store|stream|studio|study|style|sucks|supersport|supplies|supply|support|surf|surgery|suzuki|swatch|swiftcover|swiss|sydney|symantec|systems|tab|taipei|talk|taobao|target|tatamotors|tatar|tattoo|tax|taxi|tci|tdk|team|tech|technology|telecity|telefonica|temasek|tennis|teva|thd|theater|theatre|theguardian|tiaa|tickets|tienda|tiffany|tips|tires|tirol|tjmaxx|tjx|tkmaxx|tmall|today|tokyo|tools|top|toray|toshiba|total|tours|town|toyota|toys|trade|trading|training|travelchannel|travelers|travelersinsurance|trust|trv|tube|tui|tunes|tushu|tvs|ubank|ubs|uconnect|unicom|university|uno|uol|ups|vacations|vana|vanguard|vegas|ventures|verisign|versicherung|vet|viajes|video|vig|viking|villas|vin|vip|virgin|visa|vision|vista|vistaprint|viva|vivo|vlaanderen|vodka|volkswagen|volvo|vote|voting|voto|voyage|vuelos|wales|walmart|walter|wang|wanggou|warman|watch|watches|weather|weatherchannel|webcam|weber|website|wed|wedding|weibo|weir|whoswho|wien|wiki|williamhill|win|windows|wine|winners|wme|wolterskluwer|woodside|work|works|world|wow|wtc|wtf|xbox|xerox|xfinity|xihuan|xin|कॉम|セール|佛山|慈善|集团|在线|大众汽车|点看|คอม|八卦|موقع|一号店|公益|公司|香格里拉|网站|移动|我爱你|москва|католик|онлайн|сайт|联通|קום|时尚|微博|淡马锡|ファッション|орг|नेट|ストア|삼성|商标|商店|商城|дети|ポイント|新闻|工行|家電|كوم|中文网|中信|娱乐|谷歌|電訊盈科|购物|クラウド|通販|网店|संगठन|餐厅|网络|ком|诺基亚|食品|飞利浦|手表|手机|ارامكو|العليان|اتصالات|بازار|موبايلي|ابوظبي|كاثوليك|همراه|닷컴|政府|شبكة|بيتك|عرب|机构|组织机构|健康|рус|珠宝|大拿|みんな|グーグル|世界|書籍|网址|닷넷|コム|天主教|游戏|vermögensberater|vermögensberatung|企业|信息|嘉里大酒店|嘉里|广东|政务|xperia|xyz|yachts|yahoo|yamaxun|yandex|yodobashi|yoga|yokohama|you|youtube|yun|zappos|zara|zero|zip|zippo|zone|zuerich'.split(
    '|'
);

const defaults = {
    html: false,
    wiki: false, // TODO: check all cases
    markdown: false, // TODO: check all cases
    hashtags: true,
    mentions: true,
    emails: true,
    links: {
        protocols: true,
        www: false,
        tlds: {},
    },
};

/* TODO: add more named HTML entities */
const HTML_ENTITIES = {
    nbsp: ' ',
    quot: '"',
    gt: '>',
    lt: '<',
    amp: '&',
    ndash: '–',
};

TLDs.forEach(val => (defaults.links.tlds[val] = true));

/**
 * Создает токенизатор текста с заданными опциями.
 *
 * @playground
 * var Az = require('az');
 * var tokens = Az.Tokens('Текст (от лат. textus — «ткань; сплетение, связь, паутина, сочетание») — зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная и полная последовательность символов.');
 * tokens.done();
 * @memberof Az
 */
class Tokens {
    /**
     *
     * @param {string} [text] Строка для разбивки на токены.
     * @param {Object} [config] Опции, применяемые при разбивке.
     * @param {boolean} [config.html=False] Распознавать и выделять в отдельные
     *  токены (типа TAG) HTML-теги. Кроме того, содержимое тегов &lt;style&gt;
     *  и &lt;script&gt; будет размечено как единый токен типа CONTENT.
     * @param {boolean} [config.wiki=False] Распознавать и выделять в отдельные
     *  токены элементы вики-разметки.
     * @param {boolean} [config.markdown=False] Распознавать и выделять в отдельные
     *  токены элементы Markdown-разметки.
     * @param {boolean} [config.hashtags=True] Распознавать и выделять в отдельные
     *  токены хэштеги (строки, начинающиеся с символа «#»).
     * @param {boolean} [config.mentions=True] Распознавать и выделять в отдельные
     *  токены упоминания (строки, начинающиеся с символа «@»).
     * @param {boolean} [config.emails=True] Распознавать и выделять в отдельные
     *  токены е-мейлы (нет, распознавание всех корректных по RFC адресов не
     *  гарантируется).
     * @param {Object} [config.links] Настройки распознавания ссылок. False, чтобы
     *  не распознавать ссылки совсем.
     * @param {boolean} [config.links.protocols=True] Распознавать и выделять в отдельные
     *  токены ссылки с указанным протоколом (http://, https:// и вообще любым другим).
     * @param {boolean} [config.links.www=False] Распознавать и выделять в отдельные
     *  токены ссылки, начинающиеся с «www.».
     * @param {Object} [config.links.tlds] Объект, в котором ключами должны быть
     *  домены верхнего уровня, в которых будут распознаваться ссылки. По умолчанию
     *  текущий список всех таких доменов.
     */
    constructor(text, config) {
        this.tokens = [];
        this.source = '';
        if (typeof text === 'string') {
            this.config = config ? Az.extend(defaults, config) : defaults;
            this.append(text);
        } else {
            this.config = text ? Az.extend(defaults, text) : defaults;
        }
        this.index = -1;
    }

    /**
     * Отправляет ещё один кусок текста на токенизацию. Таким образом вполне
     * допустимо обрабатывать большие документы частями, многократно вызывая этот
     * метод. При этом токен может начаться в одной части и продолжиться в
     * следующей (а закончиться в ещё одной).
     *
     * @param {string} text Строка для разбивки на токены.
     * @param {Object} [config] Опции, применяемые при разбивке. Перекрывают
     *  опции, заданные в конструкторе токенизатора.
     * @see Tokens
     */
    append(text, config) {
        // Для производительности:
        // - как можно меньше операций конкатенции/разбивки строк
        // - вместо сравнения всего токена, проверяем соответствующий ему символ в исходной строке
        // - типы токенов - константы в Tokens, формально это строки, но сравниваем через === (как объекты)
        config = config ? Az.extend(this.config, config) : this.config;
        if (config.links && config.links.tlds === true) {
            config.links.tlds = defaults.links.tlds;
        }

        const offs = this.source.length;
        this.source += text;

        const s = this.source;
        const ts = this.tokens;
        for (let i = offs; i < s.length; i++) {
            let ch = s[i];
            let code = s.charCodeAt(i);

            let append = false;
            let last = ts.length - 1;
            let token = ts[last];
            let st = i;

            if (config.html && ch === ';') {
                // &nbsp;
                if (
                    last > 0 &&
                    token.type === Token.TYPE.WORD &&
                    ts[last - 1].length === 1 &&
                    s[ts[last - 1].st] === '&'
                ) {
                    const name = token.toLowerCase();
                    if (name in HTML_ENTITIES) {
                        ch = HTML_ENTITIES[name];
                        code = ch.charCodeAt(0);

                        last -= 2;
                        token = ts[last];
                        ts.length = last + 1;
                    }
                }
                // &x123AF5;
                // &1234;
                else if (
                    last > 1 &&
                    (token.type === Token.TYPE.NUMBER ||
                        (token.type === Token.TYPE.WORD &&
                            s[token.st] === 'x')) &&
                    ts[last - 1].length === 1 &&
                    s[ts[last - 1].st] === '#' &&
                    ts[last - 1].length === 1 &&
                    s[ts[last - 1].st] === '&'
                ) {
                    if (s[token.st] === 'x') {
                        code = parseInt(token.toString().substr(1), 16);
                    } else {
                        code = parseInt(token.toString(), 10);
                    }
                    ch = String.fromCharCode(code);

                    last -= 3;
                    token = ts[last];
                    ts.length = last + 1;
                }
            }

            let charType = Token.TYPE.OTHER;
            let charUpper = ch.toLocaleLowerCase() !== ch;
            if (code >= 0x0400 && code <= 0x04ff) {
                charType = Token.TYPE.CYRIL;
            }
            if (
                (code >= 0x0041 && code <= 0x005a) ||
                (code >= 0x0061 && code <= 0x007a) ||
                (code >= 0x00c0 && code <= 0x024f)
            )
                charType = Token.TYPE.LATIN;
            if (code >= 0x0030 && code <= 0x0039) {
                charType = Token.TYPE.DIGIT;
            }
            if (code <= 0x0020 || (code >= 0x0080 && code <= 0x00a0)) {
                charType = Token.TYPE.SPACE;
            }
            if ('‐-−‒–—―.…,:;?!¿¡()[]«»"\'’‘’“”/⁄'.indexOf(ch) > -1) {
                charType = Token.TYPE.PUNCT;
            }

            let tokenType = charType;
            let tokenSubType = false;
            if (
                charType === Token.TYPE.CYRIL ||
                charType === Token.TYPE.LATIN
            ) {
                tokenType = Token.TYPE.WORD;
                tokenSubType = charType;
            } else if (charType === Token.TYPE.DIGIT) {
                tokenType = Token.TYPE.NUMBER;
            }

            let lineStart = !token || s[token.st + token.length - 1] === '\n';

            if (config.wiki) {
                if (lineStart) {
                    if (':;*#~|'.indexOf(ch) > -1) {
                        tokenType = Toke.TYPE.MARKUP;
                        tokenSubType = Token.TYPE.NEWLINE;
                    }
                }
                if ('={[|]}'.indexOf(ch) > -1) {
                    tokenType = Token.TYPE.MARKUP;
                }
            }

            if (config.markdown) {
                if (lineStart) {
                    if ('=-#>+-'.indexOf(ch) > -1) {
                        tokenType = Token.TYPE.MARKUP;
                        tokenSubType = Token.TYPE.NEWLINE;
                    }
                }
                if ('[]*~_`\\'.indexOf(ch) > -1) {
                    tokenType = Token.TYPE.MARKUP;
                }
            }

            if (token) {
                if (
                    config.wiki &&
                    ch !== "'" &&
                    token.length === 1 &&
                    s[token.st] === "'" &&
                    last > 0 &&
                    ts[last - 1].type === Token.TYPE.WORD &&
                    ts[last - 1].subType === Token.TYPE.LATIN
                ) {
                    ts[last - 1].length += token.length;

                    last -= 1;
                    ts.length = last + 1;
                    token = ts[last];
                }

                // Preprocess last token
                if (
                    config.links &&
                    config.links.tlds &&
                    (charType === Token.TYPE.PUNCT ||
                        charType === Token.TYPE.SPACE) &&
                    ts.length > 2 &&
                    ts[last - 2].type === Token.TYPE.WORD &&
                    ts[last - 1].length === 1 &&
                    s[ts[last - 1].st] === '.' &&
                    ts[last].type === Token.TYPE.WORD &&
                    token.toString() in config.links.tlds
                ) {
                    // Merge all subdomains
                    while (
                        last >= 2 &&
                        ts[last - 2].type === Token.TYPE.WORD &&
                        ts[last - 1].length === 1 &&
                        (s[ts[last - 1].st] === '.' ||
                            s[ts[last - 1].st] === '@' ||
                            s[ts[last - 1].st] === ':')
                    ) {
                        last -= 2;
                        token = ts[last];
                        token.length +=
                            ts[last + 1].length + ts[last + 2].length;
                        token.allUpper =
                            token.allUpper &&
                            ts[last + 1].allUpper &&
                            ts[last + 2].allUpper;
                    }

                    if (
                        config.emails &&
                        token.indexOf('@') > -1 &&
                        token.indexOf(':') === -1
                    ) {
                        // URL can contain a '@' but in that case it should be in form http://user@site.com or user:pass@site.com
                        // So if URL has a '@' but no ':' in it, we assume it's a email
                        token.type = Token.TYPE.EMAIL;
                    } else {
                        token.type = Token.TYPE.LINK;

                        if (ch === '/') {
                            append = true;
                        }
                    }
                    ts.length = last + 1;
                }

                // Process next char (start new token or append to the previous one)
                else if (token.type === Token.TYPE.LINK) {
                    if (
                        ch === ')' &&
                        last >= 1 &&
                        ts[last - 1].type === Token.TYPE.MARKUP &&
                        ts[last - 1].length === 1 &&
                        s[ts[last - 1].st] === '('
                    ) {
                        tokenType = Token.TYPE.MARKUP;
                    } else if (
                        charType !== Token.TYPE.SPACE &&
                        ch !== ',' &&
                        ch !== '<'
                    ) {
                        append = true;
                    }
                } else if (token.type === Token.TYPE.EMAIL) {
                    if (
                        charType === Token.TYPE.CYRIL ||
                        charType === Token.TYPE.LATIN ||
                        ch === '.'
                    ) {
                        append = true;
                    }
                } else if (
                    token.type === Token.TYPE.HASHTAG ||
                    token.type === Token.TYPE.MENTION
                ) {
                    if (
                        charType === Token.TYPE.CYRIL ||
                        charType === Token.TYPE.LATIN ||
                        charType === Token.TYPE.DIGIT ||
                        ch === '_' ||
                        (ch === '@' && token.indexOf('@') === -1)
                    ) {
                        append = true;
                    }
                } else if (
                    token.type === Token.TYPE.TAG &&
                    (token.quote || s[token.en()] !== '>')
                ) {
                    append = true;
                    if (token.quote) {
                        if (ch === token.quote && s[token.en()] !== '\\') {
                            delete token.quote;
                        }
                    } else if (ch === '"' || ch === "'") {
                        token.quote = ch;
                    }
                } else if (token.type === Token.TYPE.CONTENT) {
                    append = true;
                    if (token.quote) {
                        if (ch === token.quote && s[token.en()] !== '\\') {
                            delete token.quote;
                        }
                    } else if (ch === '"' || ch === "'") {
                        token.quote = ch;
                    } else if (ch === '>') {
                        if (
                            token.length >= 8 &&
                            token.toString().substr(-8) === '</script'
                        ) {
                            token.length -= 8;
                            st -= 8;

                            append = false;
                            tokenType = Token.TYPE.TAG;
                            tokenSubType = Token.TYPE.CLOSING;
                        } else if (
                            token.length >= 7 &&
                            token.toString().substr(-7) === '</style'
                        ) {
                            token.length -= 7;
                            st -= 7;

                            append = false;
                            tokenType = Token.TYPE.TAG;
                            tokenSubType = Token.TYPE.CLOSING;
                        }
                    }
                } else if (
                    token.type === Token.TYPE.TAG &&
                    token.type !== Token.TYPE.CLOSING &&
                    token.length >= 8 &&
                    token.toLowerCase().substr(1, 6) === 'script'
                ) {
                    tokenType = Token.TYPE.CONTENT;
                    tokenSubType = Token.TYPE.SCRIPT;
                } else if (
                    token.type === Token.TYPE.TAG &&
                    token.type !== Token.TYPE.CLOSING &&
                    token.length >= 7 &&
                    token.toLowerCase().substr(1, 5) === 'style'
                ) {
                    tokenType = Token.TYPE.CONTENT;
                    tokenSubType = Token.TYPE.STYLE;
                } else if (
                    config.html &&
                    token.length === 1 &&
                    s[token.st] === '<' &&
                    (charType === Token.TYPE.LATIN || ch === '!' || ch === '/')
                ) {
                    append = true;
                    token.type = Token.TYPE.TAG;
                    if (ch === '!') {
                        token.subType = Token.TYPE.COMMENT;
                    } else if (ch === '/') {
                        token.subType = Token.TYPE.CLOSING;
                    }
                } else if (token.type === Token.TYPE.CONTENT) {
                    append = true;
                } else if (
                    token.type === Token.TYPE.MARKUP &&
                    token.subType === Token.TYPE.TEMPLATE &&
                    (s[token.en()] !== '}' || s[token.en() - 1] !== '}')
                ) {
                    append = true;
                } else if (
                    token.type === Token.TYPE.MARKUP &&
                    token.type === Token.TYPE.LINK &&
                    s[token.en()] !== ')'
                ) {
                    append = true;
                } else if (
                    token.type === Token.TYPE.MARKUP &&
                    s[token.st] === '`' &&
                    token.subType === Token.TYPE.NEWLINE &&
                    charType === Token.TYPE.LATIN
                ) {
                    append = true;
                } else if (
                    charType === Token.TYPE.CYRIL ||
                    charType === Token.TYPE.LATIN
                ) {
                    if (token.type === Token.TYPE.WORD) {
                        append = true;
                        token.subType =
                            token.subType === charType
                                ? token.subType
                                : Token.TYPE.MIXED;
                    } else if (token.type === Token.TYPE.NUMBER) {
                        // Digits + ending
                        append = true;
                        token.subType =
                            token.subType && token.subType !== charType
                                ? Token.TYPE.MIXED
                                : charType;
                    } else if (
                        config.hashtags &&
                        token.length === 1 &&
                        s[token.st] === '#'
                    ) {
                        // Hashtags
                        append = true;
                        token.type = Token.TYPE.HASHTAG;
                    } else if (
                        config.mentions &&
                        token.length === 1 &&
                        s[token.st] === '@' &&
                        (last === 0 || ts[last - 1].type === Token.TYPE.SPACE)
                    ) {
                        // Mentions
                        append = true;
                        token.type = Token.TYPE.MENTION;
                    } else if (
                        charType === Token.TYPE.LATIN &&
                        token.length === 1 &&
                        (s[token.st] === "'" || s[token.st] === '’')
                    ) {
                        append = true;
                        token.type = Token.TYPE.WORD;
                        token.subType = Token.TYPE.LATIN;
                    } else if (token.length === 1 && s[token.st] === '-') {
                        // -цать (?), 3-й
                        append = true;

                        if (last > 0 && ts[last - 1].type === Token.TYPE.NUMBER) {
                            token = ts[last - 1];
                            token.length += ts[last].length;

                            ts.length -= 1;
                        }

                        token.type = Token.TYPE.WORD;
                        token.subType = charType;
                    }
                } else if (charType === Token.TYPE.DIGIT) {
                    if (token.type === Token.TYPE.WORD) {
                        append = true;
                        token.subType = Token.TYPE.MIXED;
                    } else if (token.type === Token.TYPE.NUMBER) {
                        append = true;
                    } else if (
                        token.length === 1 &&
                        (s[token.st] === '+' || s[token.st] === '-')
                    ) {
                        append = true;

                        if (last > 0 && ts[last - 1].type === Token.TYPE.NUMBER) {
                            token = ts[last - 1];
                            token.length += ts[last].length;
                            token.subType = Token.TYPE.RANGE;

                            ts.length -= 1;
                        }

                        token.type = Token.TYPE.NUMBER;
                    } else if (
                        token.length === 1 &&
                        (s[token.st] === ',' || s[token.st] === '.') &&
                        ts.length > 1 &&
                        ts[last - 1].type === Token.TYPE.NUMBER
                    ) {
                        append = true;

                        token = ts[last - 1];
                        token.length += ts[last].length;

                        ts.length -= 1;
                    }
                } else if (charType === Token.TYPE.SPACE) {
                    if (token.type === Token.TYPE.SPACE) {
                        append = true;
                    }
                } else if (
                    token.type === Token.TYPE.MARKUP &&
                    s[token.st] === ch &&
                    "=-~:*#`'>_".indexOf(ch) > -1
                ) {
                    append = true;
                } else if (ch === '.') {
                    if (
                        config.links &&
                        config.links.www &&
                        token.length === 3 &&
                        token.toLowerCase() === 'www'
                    ) {
                        // Links without protocol but with www
                        append = true;
                        token.type = Token.TYPE.LINK;
                    }
                } else if (config.wiki && ch === "'" && s[token.en()] === "'") {
                    if (token.length > 1) {
                        token.length--;
                        st--;
                        tokenType = Token.TYPE.MARKUP;
                    } else {
                        append = true;
                        token.type = Token.TYPE.MARKUP;
                    }
                } else if (
                    ch === '-' ||
                    (token.subType === Token.TYPE.LATIN &&
                        (ch === '’' || ch === "'"))
                ) {
                    if (token.type === Token.TYPE.WORD) {
                        append = true;
                    }
                } else if (ch === '/') {
                    if (
                        config.links &&
                        config.links.protocols &&
                        ts.length > 2 &&
                        ts[last - 2].type === Token.TYPE.WORD &&
                        ts[last - 2].subType === Token.TYPE.LATIN &&
                        ts[last - 1].length === 1 &&
                        s[ts[last - 1].st] === ':' &&
                        ts[last].length === 1 &&
                        s[ts[last].st] === '/'
                    ) {
                        // Links (with protocols)
                        append = true;

                        token = ts[last - 2];
                        token.length += ts[last - 1].length + ts[last].length;
                        token.allUpper =
                            token.allUpper &&
                            ts[last - 1].allUpper &&
                            ts[last].allUpper;
                        token.type = Token.TYPE.LINK;

                        ts.length -= 2;
                    }
                } else if (config.html && ch === ';') {
                    if (
                        last > 0 &&
                        token.type === Token.TYPE.WORD &&
                        ts[last - 1].length === 1 &&
                        s[ts[last - 1].st] === '&'
                    ) {
                        append = true;

                        token = ts[last - 1];
                        token.length += ts[last].length;
                        token.allUpper =
                            token.allUpper && ts[last - 1].allUpper;
                        token.type = Token.TYPE.ENTITY;

                        ts.length -= 1;
                    } else if (
                        last > 1 &&
                        (token.type === Token.TYPE.WORD ||
                            token.type === Token.TYPE.NUMBER) &&
                        ts[last - 1].length === 1 &&
                        s[ts[last - 1].st] === '#' &&
                        ts[last - 2].length === 1 &&
                        s[ts[last - 2].st] === '&'
                    ) {
                        append = true;

                        token = ts[last - 2];
                        token.length += ts[last - 1].length + ts[last].length;
                        token.allUpper =
                            token.allUpper &&
                            ts[last - 1].allUpper &&
                            ts[last].allUpper;
                        token.type = Token.TYPE.ENTITY;

                        ts.length -= 2;
                    }
                } else if (
                    config.markdown &&
                    ch === '[' &&
                    token.length === 1 &&
                    s[token.st] === '!'
                ) {
                    append = true;
                    token.type = Token.TYPE.MARKUP;
                } else if (
                    config.markdown &&
                    ch === '(' &&
                    token.length === 1 &&
                    s[token.st] === ']'
                ) {
                    tokenType = Token.TYPE.MARKUP;
                    tokenSubType = Token.TYPE.LINK;
                } else if (
                    config.wiki &&
                    ch === '{' &&
                    token.length === 1 &&
                    s[token.st] === '{'
                ) {
                    append = true;
                    token.type = Token.TYPE.MARKUP;
                    token.subType = Token.TYPE.TEMPLATE;
                } else if (
                    config.wiki &&
                    ch === '[' &&
                    token.length === 1 &&
                    s[token.st] === '['
                ) {
                    append = true;
                } else if (
                    config.wiki &&
                    ch === ']' &&
                    token.length === 1 &&
                    s[token.st] === ']'
                ) {
                    append = true;
                } else if (config.wiki && ch === '|' && !lineStart) {
                    var found = -1;
                    for (var j = last - 1; j >= 0; j--) {
                        if (
                            ts[j].length === 2 &&
                            s[ts[j].st] === '[' &&
                            s[ts[j].st + 1] === '['
                        ) {
                            found = j;
                            break;
                        }
                        if (
                            (ts[j].length === 1 && s[ts[j].st] === '|') ||
                            ts[j].indexOf('\n') > -1
                        ) {
                            break;
                        }
                    }
                    if (found > -1) {
                        append = true;
                        for (var j = last - 1; j >= found; j--) {
                            token = ts[j];
                            token.length += ts[j + 1].length;
                            token.allUpper =
                                token.allUpper && ts[j + 1].allUpper;
                        }
                        last = found;
                        ts.length = last + 1;
                        token.subType = Token.TYPE.LINK;
                    }
                }
            }

            if (append) {
                token.length++;
                token.allUpper = token.allUpper && charUpper;
            } else {
                token = new Token(
                    s,
                    st,
                    i + 1 - st,
                    ts.length,
                    charUpper,
                    charUpper,
                    tokenType,
                    tokenSubType
                );
                ts.push(token);
            }
        }
        return this;
    }

    /**
     * Завершает токенизацию, возвращая список токенов.
     *
     * Эта и другие функции принимают последними параметрами filter и флаг exclude. Они
     * служат для фильтрации токенов (потому что часто удобнее получать не все токены, а
     * только определенную часть из них).
     *
     * Если в filter передана функция, то параметр exclude игнорируется, а filter вызывается
     * аналогично коллбэку в методе Array.prototype.filter: ей передаются параметры
     * token, index, array (текущий токен, его индекс и общий список токенов). Будут
     * возвращены только токены, для которых функция вернет истинное значение.
     *
     * Если в filter передан массив (или объект с полем length), то возвращаются токены, типы
     * которых либо входят в этот массив (exclude=false), либо не входят в него (exclude=true).
     * Вместо типов можно использовать строки вида 'WORD.LATIN' (тип, символ «точка» и подтип).
     *
     * Если в filter передать объект, то ключами в нём должны быть типы токенов, а значениями -
     * true или false в зависимости от того, включать такие токены в ответ или нет. Как и в случае случае
     * с массивом, в качестве ключей можно использовать строки вида 'WORD.LATIN'.
     * Здесь параметр exclude означает, следует ли ограничить выдачу только теми типами, которые
     * перечислены в filter.
     * Значения с указанием подтипа имеют больший приоритет, чем просто типы. Благодаря этому можно
     * делать такие странные вещи:
     *
     * ```
     * t.done({ 'WORD': false, 'WORD.LATIN': true }, false);
     * ```
     * (то есть вернуть все теги, кроме тегов с типом WORD, но включить теги с подтипом LATIN)
     *
     * @param {Function|String[]|Object} [filter] Типы токенов, по которым нужно
     *  отфильтровать результат (или функция для фильтрации).
     * @param {boolean} [exclude=False] Инвертирует фильтр, т.е. возвращаются
     *  токены со всеми типами, за исключением перечисленных в filter.
     * @returns {Token[]} Список токенов после фильтрации.
     */
    done(filter, exclude) {
        // Finalize tokenizing, return list of tokens
        // For now it just returns tokens, in the future there could be some additional work
        if (!filter) {
            return this.tokens;
        }
        const matcher = getMatcher(filter, exclude);
        const list = this.tokens.map(matcher);
        return list;
    }

    /**
     * Возвращает токен по его индексу.
     *
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {Token|False} Токен или false, если индекс вышел за пределы массива токенов.
     */
    get(index, filter, exclude) {
        if (index < 0) {
            return false;
        }
        if (!filter) {
            return this.tokens[index];
        }
        const matcher = getMatcher(filter, exclude);
        let idx = 0;

        const tokens = this.tokens;

        for (let i = 0, l = tokens.length; i < l; i++) {
            let token = tokens[i];
            if (matcher(token, i, tokens)) {
                if (idx === index) {
                    return tokens;
                }
                idx++;
            }
        }
        return false;
    }

    /**
     * Подсчитывает текущее количество токенов.
     *
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {Number} Число токенов после фильтрации.
     */
    count(filter, exclude) {
        if (!filter) {
            return this.tokens.length;
        }
        const matcher = getMatcher(filter, exclude);
        let count = this.tokens.filter(matcher).length;
        return count;
    }

    /**
     * Получает следующий токен относительно текущей позиции.
     *
     * @param {boolean} moveIndex Следует ли переместить указатель к
     *  следующему токену (в противном случае следующий вызов nextToken вернет
     *  тот же результат)
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {Token|null} Следующий токен или null, если подходящих токенов
     *  впереди нет.
     */
    nextToken(moveIndex, filter, exclude) {
        const matcher = getMatcher(filter, exclude);
        let index = this.index;
        index++;
        const tokens = this.tokens;
        while (index < tokens.length && matcher(tokens[index], index, tokens)) {
            index++;
        }
        if (index < tokens.length) {
            if (moveIndex) {
                this.index = index;
            }
            return tokens[index];
        }
        return null;
    }

    /**
     * Проверяет, является ли следующий (за исключением пробелов) токен знаком
     * препинания или нет.
     *
     * @returns {Token|False} False, если следующий токен не является знаком
     *  препинания, либо сам токен в противном случае.
     */
    punctAhead() {
        const token = this.nextToken(false, [Token.TYPE.SPACE], true);
        return token && token.type === Token.TYPE.PUNCT && token;
    }

    /**
     * Получает предыдущий токен относительно текущей позиции.
     *
     * @param {boolean} moveIndex Следует ли переместить указатель к
     *  предыдущему токену (в противном случае следующий вызов prevToken вернет
     *  тот же результат)
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {Token|null} Предыдущий токен или null, если подходящих токенов
     *  позади нет.
     */
    prevToken(moveIndex, filter, exclude) {
        const matcher = getMatcher(filter, exclude);
        let index = this.index;
        index--;
        const tokens = this.tokens;
        while (index >= 0 && matcher(tokens[index], index, tokens)) {
            index--;
        }
        if (index >= 0) {
            if (moveIndex) {
                this.index = index;
            }
            return tokens[index];
        }
        return null;
    }

    /**
     * Проверяет, является ли предыдущий (за исключением пробелов) токен знаком
     * препинания или нет.
     *
     * @returns {Token|False} False, если предыдущий токен не является знаком
     *  препинания, либо сам токен в противном случае.
     */
    punctBehind() {
        const token = this.prevToken(false, [Token.TYPE.SPACE], true);
        return token && token.type === Token.TYPE.PUNCT && token;
    }

    /**
     * Проверяет, есть ли впереди текущей позиции токены, удовлетворяющие фильтру.
     *
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {boolean} True если впереди есть хотя бы один подходящий токен,
     *  и False в противном случае.
     */
    hasTokensAhead(filter, exclude) {
        return this.nextToken(false, filter, exclude) !== null;
    }

    /**
     * Проверяет, есть ли позади текущей позиции токены, удовлетворяющие фильтру.
     *
     * @param {Function|String[]|Object} [filter] См. описание метода done.
     * @param {boolean} [exclude=False] См. описание метода done.
     * @returns {boolean} True если позади есть хотя бы один подходящий токен,
     *  и False в противном случае.
     */
    hasTokensBehind(filter, exclude) {
        return this.prevToken(false, filter, exclude) !== null;
    }
}

function alwaysTrue() {
    return true;
}

function getMatcher(filter, exclude) {
    if (!filter) {
        return alwaysTrue();
    }
    if (typeof filter === 'function') {
        return filter;
    }
    let types = filter;
    let exclusive;
    if ('length' in filter) {
        exclusive = !exclude;
        types = {};
        for (let i = 0; i < filter.length; i++) {
            types[filter[i]] = true;
        }
    } else {
        exclusive = exclude;
        exclude = false;
    }
    return function (token, index, array) {
        if (token.subType) {
            var sub = token.type + '.' + token.subType;
            if (sub in types) {
                return types[sub] !== exclude;
            }
        }
        if (token.type in types) {
            return types[token.type] !== exclude;
        } else {
            return !exclusive;
        }
    };
}

module.exports = (text, config) => {
    return new Tokens(text, config);
};
