// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data11-20.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "anyway",
        pos: "副",
        ipa: "/ˈeniweɪ/",
        cn: "无论如何，不管怎样；总之",
        jp: "とにかく、いずれにせよ、どうあれ",
        family: "anyways / anyhow",
        tips: "在听力Part 3/4中经常作为语气转折词出现，用来引出说话者真正的意图或接下来的实际行动。",
        desc: "We will go anyway."
    },
    {
        word: "following",
        pos: "前/形/名",
        ipa: "/ˈfɑːloʊɪŋ/",
        cn: "在……之后；接下来的，随后的",
        jp: "〜の後に；次の、続く",
        family: "follow / follower / followed",
        tips: "作介词时相当于 after，常考搭配：following the meeting（会议之后）。作形容词时常搭配 the following year（随后的第二年）。",
        desc: "Read the following text."
    },
    {
        word: "refer",
        pos: "動",
        ipa: "/rɪˈfɜːr/",
        cn: "参考，查阅；提及，谈到",
        jp: "参照する、言及する、問い合わせる",
        family: "reference / referral / referred",
        tips: "不及物动词，核心搭配为 refer to。在阅读Part 7中经常考查 'What does the word refer to?'（这个词指的是什么？）或 'refer to the manual'（查阅手册）。",
        desc: "Please refer to page 5."
    },
    {
        word: "employee",
        pos: "名",
        ipa: "/ɪmˈplɔɪiː/",
        cn: "雇员，员工",
        jp: "従業員、社員",
        family: "employ / employer / employment",
        tips: "与 employer（雇主）相对。常用搭配：employee benefits（员工福利），employee productivity（员工生产力）。",
        desc: "He is a new employee."
    },
    {
        word: "offer",
        pos: "動/名",
        ipa: "/ˈɔːfər/",
        cn: "提供，出价；录取通知，提议",
        jp: "提供する、申し出る；申し出、オファー",
        family: "offering / offered",
        tips: "商务场景极高频：job offer（工作机会/录取通知书），offer a discount（提供折扣）。可作及物动词或双宾语动词。",
        desc: "They offer a big discount."
    },
    {
        word: "likely",
        pos: "形/副",
        ipa: "/ˈlaɪkli/",
        cn: "很有可能的；很有可能地",
        jp: "〜しそうな、可能性が高い",
        family: "likelihood / unlikely",
        tips: "托业听力/阅读主旨与推断题常客：'What is the speaker likely to do next?'（发言人接下来最可能做什么？）。常用句型为 be likely to do sth。",
        desc: "It is likely to rain."
    },
    {
        word: "provide",
        pos: "動",
        ipa: "/prəˈvaɪd/",
        cn: "提供，供给",
        jp: "提供する、供給する、用意する",
        family: "provider / provision / provided",
        tips: "经典介词搭配考点：provide someone with something 或者 provide something for/to someone（为某人提供某物）。",
        desc: "We provide free wifi."
    },
    {
        word: "available",
        pos: "形",
        ipa: "/əˈveɪləbl/",
        cn: "可得到的，可利用的；有空的",
        jp: "利用可能な、入手できる、手が空いている",
        family: "availability / unavailable",
        tips: "托业出题率极高。指物时表示“有现货的、可使用的”；指人时表示“有时间的、有空的”（He is available for an interview）。",
        desc: "The room is available now."
    },
    {
        word: "conference",
        pos: "名",
        ipa: "/ˈkɑːnfərəns/",
        cn: "会议，研讨会",
        jp: "会議、総会、カンファレンス",
        family: "confer",
        tips: "常见商务场景：conference room（会议室），press conference（新闻发布会），annual conference（年会）。常搭配 hold/attend a conference。",
        desc: "They attended the conference."
    },
    {
        word: "purchase",
        pos: "動/名",
        ipa: "/ˈpɜːrtʃəs/",
        cn: "购买；购买的物品",
        jp: "購入する；購入品",
        family: "purchaser / purchasing / purchased",
        tips: "在商务英语中比 buy 更正式。名词常用短语：proof of purchase（购买凭证），make a purchase（购买物品）。",
        desc: "I want to purchase this book."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "outstanding", pos: "形", ipa: "/aʊtˈstændɪŋ/", cn: "出色的，杰出的", jp: "優れた、傑出した" },
    { word: "complimentary", pos: "形", ipa: "/ˌkɑːmplɪˈmentri/", cn: "免费赠送的", jp: "無料の、贈答品の" },
    { word: "amenities", pos: "名", ipa: "/əˈmenətiz/", cn: "便利设施（复数）", jp: "快適設備、アメニティ（複数形）" },
    { word: "merchandise", pos: "名", ipa: "/ˈmɜːrtʃəndaɪz/", cn: "商品，货物", jp: "商品、製品" },
    { word: "implemented", pos: "動", ipa: "/ˈimpləˌmentɪd/", cn: "实施，执行（过去式/过去分词）", jp: "実施された、実行された" },
    { word: "brochure", pos: "名", ipa: "/broʊˈʃʊr/", cn: "宣传册", jp: "パンフレット、小冊子" },
    { word: "significantly", pos: "副", ipa: "/sɪɡˈnɪfɪkəntli/", cn: "显著地，大幅地", jp: "著しく、大幅に" },
    { word: "comprehensive", pos: "形", ipa: "/ˌkɑːmprɪˈtensɪv/", cn: "全面的，详尽的", jp: "包括的な、詳細な" },
    { word: "discrepancies", pos: "名", ipa: "/dɪˈskrepənsiz/", cn: "不符之处，差异（复数）", jp: "不一致、相違点（複数形）" },
    { word: "conglomerate", pos: "名", ipa: "/kənˈɡlɑːmərət/", cn: "企业集团", jp: "複合企業、コングロマリット" },
    { word: "substantial", pos: "形", ipa: "/səbˈstænʃl/", cn: "大量的，实质性的", jp: "多額の、実質的な" },
    { word: "incentives", pos: "名", ipa: "/ɪnˈsentɪvz/", cn: "激励措施，奖励（复数）", jp: "インセンティブ、奨励金（複数形）" },
    { word: "procurement", pos: "名", ipa: "/prəˈkjʊrmənt/", cn: "采购", jp: "調達、仕入れ" },
    { word: "contractual", pos: "形", ipa: "/kənˈtræktʃuəl/", cn: "合同的，契约的", jp: "契約上の" },
    { word: "fluctuations", pos: "名", ipa: "/ˌflʌktʃuˈeɪʃnz/", cn: "波动，起伏（复数）", jp: "変動、上下（複数形）" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "employee",
        category: "简单",
        stem: "The manager praised the new ________ for her outstanding performance during the orientation.",
        options: ["employee", "employer", "employment", "employ"],
        correct: "employee",
        explanations: {
            guide: "名词词性与语境考点。根据句中修饰语 new 以及人称代词 her，空格处需要填入指代人的名词，选 employee（雇员）。",
            family: "employee (n.雇员) | employer (n.雇主) | employment (n.就业/雇用) | employ (v.雇用)。",
            details: "句意为‘经理赞扬了新员工在入职培训期间的杰出表现’。employer 意思是雇主，不符合被经理赞扬的下属语境。",
            cn: "经理赞扬了新员工在入职培训期间的杰出表现。",
            jp: "マネージャーは、オリエンテーション期間中の優れた業績（outstanding）に対して新入社員（employee）を称賛しました。"
        }
    },
    {
        id: 2,
        target: "purchase",
        category: "简单",
        stem: "Customers who ________ items over fifty dollars will receive a complimentary gift bag.",
        options: ["purchase", "purchased", "purchaser", "purchasing"],
        correct: "purchase",
        explanations: {
            guide: "定语从句谓语动词时态与主谓一致。who 引导的定语从句修饰复数先行词 Customers，且主句为一般将来时，从句用一般现在时表普遍条件，选 purchase。",
            family: "purchase (v./n.购买) | purchased (v-ed已购买的) | purchaser (n.购买者) | purchasing (n.采购/动名词)。",
            details: "这里表示一种普遍的促销规则，使用一般现在时原形。purchased 为过去式，与主句将来的动作不契合；purchaser 是名词，不能作从句谓语。",
            cn: "购买超过五十美元商品的顾客将获得一个免费的礼品袋。",
            jp: "50ドル以上の商品を購入（purchase）した顧客には、無料（complimentary）のギフトバッグが贈られます。"
        }
    },
    {
        id: 3,
        target: "conference",
        category: "简单",
        stem: "The annual sales ________ will be held in the main auditorium next Monday.",
        options: ["conference", "confer", "employee", "offer"],
        correct: "conference",
        explanations: {
            guide: "复合名词修饰考点。annual sales（年度销售）后面需要名词充当中心语，结合举行（be held）的语境选 conference（会议）。",
            family: "conference (n.会议) | confer (v.商议) | employee (n.员工) | offer (v./n.提供)。",
            details: "annual sales conference 构成了最典型的商务英语复合名词短语。confer 是动词，不能作主语中心语。",
            cn: "年度销售会议将于下周一在主礼堂举行。",
            jp: "年次販売会議（conference）は、来週の月曜日にメインの講堂で開催される予定です。"
        }
    },
    {
        id: 4,
        target: "provide",
        category: "简单",
        stem: "The hotel aims to ________ all guests with exceptional room service and modern amenities.",
        options: ["provide", "provider", "provision", "provided"],
        correct: "provide",
        explanations: {
            guide: "动词固定搭配与不定式原形。aims to 后面接动词原形，且与后面的介词 with 构成 provide someone with something 的经典搭配。",
            family: "provide (v.提供) | provider (n.提供者) | provision (n.条款/供应) | provided (conj.倘若/v-ed)。",
            details: "provide... with... 是托业考试中出现率极高的结构，意为“为某人提供某物”。其他选项均为名词或分词形式，无法与 to 构成不定式。",
            cn: "该酒店旨在为所有宾客提供卓越的客房服务和现代化的便利设施。",
            jp: "当ホテルは、すべてのゲストに素晴らしいルームサービスと現代的なアメニティ（amenities）を提供（provide）することを目指しています。"
        }
    },
    {
        id: 5,
        target: "available",
        category: "简单",
        stem: "Please check if the technical manual is ________ on the internal server.",
        options: ["available", "availability", "unavailable", "provide"],
        correct: "available",
        explanations: {
            guide: "系动词后的形容词表语。is 后面需要形容词作表语，说明手册的状态是“可获取的、可查阅的”，选 available。",
            family: "available (adj.可得到的) | availability (n.可得性) | unavailable (adj.不可得到的) | provide (v.提供)。",
            details: "is available on the server 意思是“在服务器上是可以获取的”。availability 是名词，不能在此作状态表语；unavailable 逻辑相反。",
            cn: "请检查内部服务器上是否可以查阅该技术手册。",
            jp: "社内サーバーで技術マニュアルが利用可能（available）かどうか確認してください。"
        }
    },
    {
        id: 6,
        target: "offer",
        category: "简单",
        stem: "The retail store decided to ________ a twenty percent discount on seasonal merchandise.",
        options: ["offer", "offering", "offered", "employee"],
        correct: "offer",
        explanations: {
            guide: "及物动词不定式搭配。decided to 后面需要接动词原形，结合宾语 discount（折扣），选择 offer（提供）。",
            family: "offer (v./n.提供) | offering (n.提供物) | offered (v-ed已提供的) | employee (n.员工)。",
            details: "offer a discount 意为“提供折扣”，是极为常见的商业营销短语。offering 是动名词或名词，不能用于 to 不定式结构中作动词核心。",
            cn: "这家零售店决定对季节性商品提供百分之二十的折扣。",
            jp: "小売店は、季節商品（merchandise）に対して20%の割引を提供（offer）することを決定しました。"
        }
    },
    {
        id: 7,
        target: "following",
        category: "中等",
        stem: "________ the unexpected merger, the company restructuring plan was immediately implemented by the board.",
        options: ["Following", "Followed", "Follower", "Follow"],
        correct: "Following",
        explanations: {
            guide: "介词引导时间状语。句首引导名词短语并且表示“在……之后”，等同于 after，在此填入现在分词演变而来的介词 Following。",
            family: "following (prep.在...之后/adj.接下来的) | followed (v-ed跟随) | follower (n.追随者) | follow (v.跟随)。",
            details: "Following the unexpected merger 意为“在出乎意料的合并之后”。followed 属于过去分词形式，不能在句首直接引出名词短语作时间状语。",
            cn: "在出乎意料的合并之后，公司重组计划立即被董事会推行。",
            jp: "予期せぬ合併の後に（Following）、会社の再構築計画が取締役会によって直ちに実施（implemented）されました。"
        }
    },
    {
        id: 8,
        target: "refer",
        category: "中等",
        stem: "New clients are advised to ________ to the attached brochure for detailed pricing structures.",
        options: ["refer", "reference", "referral", "referred"],
        correct: "refer",
        explanations: {
            guide: "不及物动词不定式与固定搭配。are advised to 后面需要接动词原形，空格后有介词 to，构成 refer to（参考、查阅）搭配。",
            family: "refer (v.参考/提及) | reference (n.参考) | referral (n.推荐) | referred (v-ed已参考的)。",
            details: "refer to the brochure 意为“查阅宣传册”。reference 是名词，虽然也有动词用法但不与 to 连用表达查阅资料的意思。",
            cn: "建议新客户查阅附带的宣传册以了解详细的价格结构。",
            jp: "新しく顧客になられた方は、詳細な価格構成について、添付のパンフレット（brochure）を参照（refer）することをお勧めします。"
        }
    },
    {
        id: 9,
        target: "likely",
        category: "中等",
        stem: "Market research suggests that consumer spending is ________ to rise significantly during the holiday season.",
        options: ["likely", "likelihood", "unlikely", "anyway"],
        correct: "likely",
        explanations: {
            guide: "固定句型与概率判断。be likely to do sth 是托业常考的高频句型，意为“很有可能做某事”。",
            family: "likely (adj.很有可能的) | likelihood (n.可能性) | unlikely (adj.不太可能的) | anyway (adv.无论如何)。",
            details: "is likely to rise 意为“很有可能会上升”。likelihood 是名词，不能与 is ... to 构成此结构；unlikely 语义与“销售增长”的整体商业发展趋势相反。",
            cn: "市场研究表明，在节假日期间，消费者支出很有可能会大幅上升。",
            jp: "市場調査によると、休暇シーズン中に消費者支出が大幅に（significantly）増加する可能性が高い（likely）とされています。"
        }
    },
    {
        id: 10,
        target: "anyway",
        category: "中等",
        stem: "The flight was delayed due to severe weather conditions, but the delegates decided to travel ________ by train.",
        options: ["anyway", "anyways", "following", "likely"],
        correct: "anyway",
        explanations: {
            guide: "副词修饰语与语篇转折逻辑。两个分句之间由转折连词 but 连接，表达即使天气恶劣，代表们“无论如何”还是要坐火车旅行，选 anyway。",
            family: "anyway (adv.无论如何/标准形式) | anyways (adv.非正式形式) | following (prep.在...之后) | likely (adj.有可能的)。",
            details: "anyway 放在句末作状语，表示“不管怎样，总之”。anyways 属于非正式口语用法，不适合出现在严肃的托业商务职场考题中。",
            cn: "由于恶劣的天气条件，航班延误了，但代表们还是决定无论如何都要坐火车前往。",
            jp: "悪天候のため飛行機は遅延しましたが、代表者たちはとにかく（anyway）電車で移動することに決めました。"
        }
    },
    {
        id: 11,
        target: "employee",
        category: "中等",
        stem: "The comprehensive handbook outlines the standard procedures for evaluating ________ productivity quarterly.",
        options: ["employee", "employer", "employment", "employ"],
        correct: "employee",
        explanations: {
            guide: "复合名词定语用法。空格位于介词 for 后的动名词短语中，名词 productivity 前需要名词作定语修饰，构成 employee productivity（员工生产力）。",
            family: "employee (n.员工) | employer (n.雇主) | employment (n.就业) | employ (v.雇用)。",
            details: "企业评估的对象是员工的生产力。employer productivity（雇主生产力）和 employment productivity（就业生产力）从商业管理逻辑上说不通。",
            cn: "这份详尽的手册概述了每季度评估员工生产力的标准程序。",
            jp: "この包括的な（comprehensive）ハンドブックは、従業員（employee）の生産性を四半期ごとに評価するための標準的な手順を概説しています。"
        }
    },
    {
        id: 12,
        target: "available",
        category: "中等",
        stem: "Due to high demand, the newly released smartphone model is currently ________ only to premium subscribers.",
        options: ["available", "availability", "unavailable", "purchase"],
        correct: "available",
        explanations: {
            guide: "特定限定状态下的形容词表语。is currently 后接形容词，根据 only to premium subscribers（仅限高端订阅者）判断，表示“可获得的”，选 available。",
            family: "available (adj.可得到的) | availability (n.可得性) | unavailable (adj.不可得到的) | purchase (v.购买)。",
            details: "is currently available only to... 意思是“目前仅对……开放/可购买”。unavailable 表示无法获得，与 high demand 的抢购热潮及 only 的限定语气发生逻辑冲突。",
            cn: "由于需求量大，这款新发布的智能手机机型目前仅对高级订户开放。",
            jp: "需要が高いため、新しく発売されたスマートフォンモデルは現在、プレミアム会員（subscribers）のみが利用可能（available）です。"
        }
    },
    {
        id: 13,
        target: "refer",
        category: "困难",
        stem: "When encountering technical discrepancies in the system logs, database administrators must ________ to the security protocols.",
        options: ["refer", "reference", "referral", "referred"],
        correct: "refer",
        explanations: {
            guide: "情态动词后的不及物动词与高级商务长句。must 是情态动词，后面需要加动词原形，再通过介词 to 结合宾语，选 refer。",
            family: "refer (v.查阅/参考) | reference (n.参考/文献) | referral (n.转介) | referred (v-ed已参考的)。",
            details: "must refer to the security protocols 意为“必须参考安全协议”。reference 虽然在现代英语中偶尔可用作动词，但在托业测试中严格考查其名词属性，不与 to 搭配表达查阅手册含义。",
            cn: "当在系统日志中遇到技术不符之处时，数据库管理员必须参考安全协议。",
            jp: "システムログで技術的な不一致（discrepancies）に遭遇した（encountering）場合、データベース管理者はセキュリティプロトコルを参照（refer）しなければなりません。"
        }
    },
    {
        id: 14,
        target: "offer",
        category: "困难",
        stem: "The technological conglomerate is prepared to ________ substantial financial incentives to acquire the prospective startup.",
        options: ["offer", "offering", "offered", "purchase"],
        correct: "offer",
        explanations: {
            guide: "长难句中的动词不定式与双宾语逻辑。is prepared to 后面加动词原形，空格后面是“substantial financial incentives（实质性的财务激励）”，商业场景中表示提供条件，选 offer。",
            family: "offer (v.提供) | offering (n.提供物) | offered (v-ed已提供的) | purchase (v.购买)。",
            details: "offer substantial financial incentives 意为“提供丰厚的财政奖励”。虽然 purchase 也可作动词，但不能跟 incentives（激励措施）形成合理的动宾搭配。",
            cn: "这家科技巨头企业集团准备提供丰厚的财政激励，以收购这家充满前景的初创公司。",
            jp: "そのIT大企業（conglomerate）は、見込みのある新興企業を買収するために、多額の（substantial）金銭的インセンティブを提示（offer）する用意があります。"
        }
    },
    {
        id: 15,
        target: "following",
        category: "困难",
        stem: "A special committee was established to monitor the long-term economic consequences ________ the sudden policy shifts.",
        options: ["following", "followed", "follower", "follow"],
        correct: "following",
        explanations: {
            guide: "后置介词短语引导词。空格后面连接名词短语 the sudden policy shifts，用来表达这些变化“之后”所带来的经济后果，选 following。",
            family: "following (prep.在...之后) | followed (v-ed被跟随) | follower (n.追随者) | follow (v.跟随)。",
            details: "consequences following the sudden policy shifts 意为“政策突然转变之后的经济后果”。following 在此充当介词，功能等同于 after。",
            cn: "一个特别委员会被建立起来，用以监督政策突然转变后所带来的长期经济后果。",
            jp: "突然の政策転換（shifts）の後に（following）生じる長期的な経済的影響を監視するために、特別委員会が設置されました。"
        }
    },
    {
        id: 16,
        target: "purchase",
        category: "困难",
        stem: "The procurement department must secure authorization from executive board members before they can ________ expensive laboratory assets.",
        options: ["purchase", "purchasing", "purchased", "available"],
        correct: "purchase",
        explanations: {
            guide: "长难句情态动词后的核心动词。在 before 引导的状语从句中，情态动词 can 后面必须紧跟动词原形，选 purchase。",
            family: "purchase (v.购买) | purchasing (n.采购) | purchased (v-ed已购买的) | available (adj.可得到的)。",
            details: "they can purchase expensive laboratory assets 意为“他们能够购买昂贵的实验室资产”。purchasing 是动名词，无法与 can 联用；available 为形容词，不能作动词宾语的主干成分。",
            cn: "采购部门在购买昂贵的实验室资产之前，必须获得执行董事会成员的批准。",
            jp: "調達（procurement）部門は、高価な実験資産（assets）を購入（purchase）する前に、執行取締役からの承認（authorization）を得なければなりません。"
        }
    },
    {
        id: 17,
        target: "provide",
        category: "困难",
        stem: "The newly signed contractual agreement specifies that the external consultant will ________ comprehensive strategic advisory services.",
        options: ["provide", "provision", "provider", "offer"],
        correct: "provide",
        explanations: {
            guide: "宾语从句中的谓语动词。that 引导的宾语从句中，主语是 external consultant，情态动词 will 后面应接动词原形，选 provide。",
            family: "provide (v.提供) | provision (n.条款/供应) | provider (n.供应者) | offer (v.提供)。",
            details: "provide services 是极高频的职场商业组合，指“提供服务”。虽然 offer 也有提供之意，但 provide comprehensive strategic advisory services 属于更地道权威的合同文本惯用语。",
            cn: "新签署的合同协议规定，外部顾问将提供全面的战略咨询服务。",
            jp: "新しく署名された契約（contractual）合意書には、外部コンサルタントが包括的な（comprehensive）戦略的アドバイザリーサービスを提供（provide）することが明記されています。"
        }
    },
    {
        id: 18,
        target: "likely",
        category: "困难",
        stem: "Industry fluctuations and rising inflation make it highly ________ that supply chain operations will experience minor delays.",
        options: ["likely", "likelihood", "unlikely", "anyway"],
        correct: "likely",
        explanations: {
            guide: "形式宾语结构与形容词补足语。make it + adj + that 从句是托业的高阶语法结构，it 是形式宾语，空格处需要形容词作宾语补足语，选 likely。",
            family: "likely (adj.很有可能的) | likelihood (n.可能性) | unlikely (adj.不太可能的) | anyway (adv.无论如何)。",
            details: "make it highly likely that... 意为“使得……极有可能发生”。likelihood 为名词，不能用作宾语补足语；unlikely 与通货膨胀及行业波动带来延迟的必然因果逻辑不符。",
            cn: "行业波动和通货膨胀加剧使得供应链运作极有可能经历轻微的延误。",
            jp: "業界の変動（fluctuations）とインフレ（inflation）の上昇により、サプライチェーンの運営に軽微な遅延が発生する可能性が非常に高く（likely）なっています。"
        }
    }
];