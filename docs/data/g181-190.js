// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag101-110.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "headquarters",
        pos: "名",
        ipa: "/ˈhedkwɔːrtərz/",
        cn: "总部，总公司",
        jp: "本社、本部",
        family: "headquartered",
        tips: "商务办公核心名词。形式上通常带s，作主语时谓语动词单复数皆可。常见搭配 corporate headquarters（公司总部）。其过去分词形式 be headquartered in... 表示“总部位于……”。",
        desc: "Visit the corporate headquarters."
    },
    {
        word: "further",
        pos: "形/副/動",
        ipa: "/ˈfɜːrðər/",
        cn: "进一步的，更多的；更远地；促进",
        jp: "さらなる、それ以上の；さらに遠くへ；促進する",
        family: "furthermore",
        tips: "高频商务通信词汇。常考短语 for further information（欲知更多信息）、without further delay（事不宜迟）、until further notice（直至另行通知）。",
        desc: "For further information, call us."
    },
    {
        word: "assistance",
        pos: "名",
        ipa: "/əˈsɪstəns/",
        cn: "协助，帮助，援助",
        jp: "援助、支援、手伝い",
        family: "assist / assistant / assisted",
        tips: "客户服务与行政配合核心名词。常考搭配 technical assistance（技术支持）、provide assistance to someone（为某人提供协助）。注意与其人称名词 assistant（助理）在语义及词性上的区别。",
        desc: "Thank you for your assistance."
    },
    {
        word: "distribute",
        pos: "動",
        ipa: "/dɪˈstrɪbjuːt/",
        cn: "分发，分销，分配",
        jp: "配布する、分配する、流通させる",
        family: "distribution / distributor / distributive",
        tips: "物流仓储与市场运营场景核心动词。常考短语 distribute marketing brochures（分发营销手册）。名词形式 distribution 常见于 distribution center（配送中心）。",
        desc: "Please distribute the flyers."
    },
    {
        word: "raise",
        pos: "動/名",
        ipa: "/reɪz/",
        cn: "筹集（资金）；提升；加薪",
        jp: "（資金を）集める、高める；昇給",
        family: "raised / raising",
        tips: "双重托业核心词义。在财务公关中指 raise funds（筹集资金）；在人事场景中用作名词指 receive a pay raise（获得加薪）。注意它是及物动词，后须直接接宾语，与不及物动词 rise（上升）相区别。",
        desc: "They want to raise capital."
    },
    {
        word: "impress",
        pos: "動",
        ipa: "/ɪmˈpres/",
        cn: "给……留下深刻印象，使钦佩",
        jp: "印象づける、感銘を与える",
        family: "impression / impressive / impressively",
        tips: "职场面试、商务产品发布及业绩汇报高频词。形容词形式 impressive（令人印象深刻的）常考搭配 impressive sales performance（令人瞩目的销售业绩）。名词形式 make a good impression（留下好印象）。",
        desc: "She wants to impress them."
    },
    {
        word: "seek",
        pos: "動",
        ipa: "/siːk/",
        cn: "寻找，寻求，谋求",
        jp: "探す、追い求める、要請する",
        family: "seeker / seeking / sought",
        tips: "人才招聘与战略咨询场景核心动词。常考短语 seek employment（寻找工作）、seek professional advice（寻求专业建议）。在招聘广告中常以现在分词形式出现，如 The corporation is seeking a manager。过去式及过去分词为不规则变化 sought。",
        desc: "We seek a new manager."
    },
    {
        word: "region",
        pos: "名",
        ipa: "/ˈriːdʒən/",
        cn: "地区，区域，行政区",
        jp: "地域、地方、範囲",
        family: "regional / regionally",
        tips: "跨国企业布局与市场汇报高频名词。常考形容词形式 regional，如 regional manager（区域经理）、regional convention（区域大会）。",
        desc: "He handles this region."
    },
    {
        word: "apologize",
        pos: "動",
        ipa: "/əˈpɑːlədʒaɪz/",
        cn: "道歉，认错",
        jp: "謝る、お詫びする",
        family: "apology / apologetic / apologetically",
        tips: "客户服务与商务危机公关核心动词。是不及物动词，核心固定搭配为 apologize for something（为某事道歉）或 apologize to someone（向某人道歉）。名词形式为 apology。",
        desc: "We apologize for the delay."
    },
    {
        word: "cafeteria",
        pos: "名",
        ipa: "/ˌkæfəˈtɪriə/",
        cn: "自助餐厅，员工食堂",
        jp: "カフェテリア、社員食堂",
        family: "cafeterias",
        tips: "办公环境与后勤生活高频名词。常考日常行政安排或设施翻新场景，如 corporate cafeteria（公司食堂）、renovate the staff cafeteria（翻新员工食堂）。",
        desc: "Meet me in the cafeteria."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "headquarters",
        category: "简单",
        stem: "The board of directors will gather at the corporate ________ for the annual evaluation meeting.",
        options: ["headquarters", "assistance", "cafeteria", "region"],
        correct: "headquarters",
        explanations: {
            guide: "特定办公场所的词义辨析。空格前有形容词 corporate（公司的），此处需要填入名词作为地点宾语，结合董事会开会语境选 headquarters。",
            family: "headquarters (n.总部) | assistance (n.协助) | cafeteria (n.自助餐厅) | region (n.地区)。",
            details: "corporate headquarters 意为“公司总部”。董事会召集年度考评会议一般都在公司总部大楼进行。其他选项无法构成合理的商务行政逻辑。",
            cn: "董事会将在公司总部聚集，召开年度考评会议。",
            jp: "取締役会は年次評価会議のために、本社の会議室（headquarters）に集まる予定です。"
        }
    },
    {
        id: 2,
        target: "further",
        category: "简单",
        stem: "For ________ information regarding the promotional discount, please visit our official website.",
        options: ["further", "raise", "distribute", "apologize"],
        correct: "further",
        explanations: {
            guide: "名词前的修饰语及高频短语考核。空格后有名词 information，需要填入形容词作前置定语，选 further 构成经典搭配。",
            family: "further (adj.进一步的) | raise (v.筹集/提升) | distribute (v.分发) | apologize (v.道歉)。",
            details: "for further information 是托业各类商务公告、广告及信函中雷打不动的标准开场/收尾词组，意为“欲知更多/进一步信息”。其他选项为动词，词性不符。",
            cn: "欲知有关促销优惠的进一步信息，请访问我们的官方网站。",
            jp: "プロモーション割引に関する詳細（further）情報については、公式ウェブサイトをご覧ください。"
        }
    },
    {
        id: 3,
        target: "assistance",
        category: "简单",
        stem: "The IT technician provided valuable ________ to the staff during the server system upgrade.",
        options: ["assistance", "region", "impress", "seek"],
        correct: "assistance",
        explanations: {
            guide: "及物动词后的名词宾语辨析。空格前面有动词 provided（提供）和形容词 valuable（有价值的），提示此处需要填入名词宾语，选 assistance。",
            family: "assistance (n.协助/帮助) | region (n.地区) | impress (v.留下印象) | seek (v.寻找)。",
            details: "provide assistance to someone 意为“为某人提供协助”，属于经典的IT技术支持与日常后勤运营语境。其余选项词性不符或语义不通。",
            cn: "在服务器系统升级期间，IT技术人员为员工提供了宝贵的协助。",
            jp: "サーバーシステムのアップグレード中、IT技術者はスタッフに貴重な支援（assistance）を提供しました。"
        }
    },
    {
        id: 4,
        target: "distribute",
        category: "简单",
        stem: "The administrative assistants will ________ the meeting agenda before the session officially begins.",
        options: ["distribute", "apologize", "headquarters", "cafeteria"],
        correct: "distribute",
        explanations: {
            guide: "情态动词后的动词原形辨析。will 后面需要接动词原形作为谓语，结合宾语 meeting agenda（会议议程），选择 distribute（分发）。",
            family: "distribute (v.分发) | apologize (v.道歉) | headquarters (n.总部) | cafeteria (n.自助餐厅)。",
            details: "distribute the meeting agenda 意为“分发会议议程”，属于典型会务行政场景。apologize 是不及物动词且语义不符，后两个为名词。",
            cn: "行政助理将在会议正式开始前分发会议议程。",
            jp: "総務アシスタントは、セッションが公式に始まる前に会議の議題を配布（distribute）します。"
        }
    },
    {
        id: 5,
        target: "apologize",
        category: "简单",
        stem: "The airline representatives sincerely ________ for the sudden cancellation of the domestic flight.",
        options: ["apologize", "impress", "seek", "raise"],
        correct: "apologize",
        explanations: {
            guide: "不及物动词与介词的固定搭配。空格后出现了介词 for，且主语是航空公司代表，要求填入一个表示“道歉”的动词原形，选 apologize。",
            family: "apologize (v.道歉) | impress (v.留下印象) | seek (v.寻找) | raise (v.筹集/提升)。",
            details: "apologize for something 意为“为某事道歉”，是商务客诉与公关危机处理的标志性句型。其余动词均是及物动词且语意不合。",
            cn: "航空公司代表对国内航班的突然取消表示诚挚的歉意。",
            jp: "航空会社の担当者は、国内便の突然の欠航について心からお詫び（apologize）しました。"
        }
    },
    {
        id: 6,
        target: "cafeteria",
        category: "简单",
        stem: "The logistics manager renovated the corporate ________ to provide healthier meal options for employees.",
        options: ["cafeteria", "further", "assistance", "distribute"],
        correct: "cafeteria",
        explanations: {
            guide: "动词后的名词宾语语义辨析。根据谓语 renovated（翻新）以及后文的 meal options（餐食选择），此处必须填入一个餐饮场所名词，选 cafeteria。",
            family: "cafeteria (n.自助餐厅/食堂) | further (adj.进一步的) | assistance (n.协助) | distribute (v.分发)。",
            details: "corporate cafeteria 意为“公司食堂/员工餐厅”。翻新食堂以改善员工福利和餐饮健康，符合企业后勤管理场景的常见出题逻辑。",
            cn: "后勤经理翻新了公司食堂，为员工提供更健康的餐饮选择。",
            jp: "総務マネージャーは、従業員に自然派の食事を提供するため、社員食堂（cafeteria）をリニューアルしました。"
        }
    },
    {
        id: 7,
        target: "headquarters",
        category: "中等",
        stem: "The multinational technology corporation is ________ in Tokyo, with several satellite offices across Asia.",
        options: ["headquartered", "headquarters", "regional", "assistance"],
        correct: "headquartered",
        explanations: {
            guide: "被动语态中特定过去分词的用法。空格前有系动词 is，后接介词短语 in Tokyo，提示此处需填入过去分词构成被动表“总部位于”，选 headquartered。",
            family: "headquartered (v-ed总部设在) | headquarters (n.总部) | regional (adj.区域的) | assistance (n.协助)。",
            details: "be headquartered in... 意为“总部位于某地”，常用于背景介绍，后接 satellite offices（分支/卫星办公室）形成鲜明跨国公司网络架构。",
            cn: "这家跨国科技公司的总部设在东京，并在亚洲各地设有数个分支办公室。",
            jp: "その多国籍テック企業は東京に本社を置き（headquartered）、アジア全域にいくつかのサテライトオフィスを展開しています。"
        }
    },
    {
        id: 8,
        target: "raise",
        category: "中等",
        stem: "The non-profit organization hopes to ________ capital for the upcoming community infrastructure project.",
        options: ["raise", "seek", "impress", "apologize"],
        correct: "raise",
        explanations: {
            guide: "特定商务宾语的动词语义搭配。空格后是资本/资金名词 capital，能与之构成“筹集/募集”含义的及物动词是 raise。",
            family: "raise (v.筹集/提升) | seek (v.寻找) | impress (v.留下印象) | apologize (v.道歉)。",
            details: "raise capital / raise funds 意为“筹集资金”，常出现在非营利组织或初创企业融资的宏观商业报道中。seek capital 虽偶用但不如 raise 地道妥帖。",
            cn: "该非营利组织希望为即将到来的社区基础设施项目筹集资金。",
            jp: "非営利団体は、次回の地域インフラプロジェクトのために資金を調達（raise）したいと考えています。"
        }
    },
    {
        id: 9,
        target: "impress",
        category: "中等",
        stem: "The marketing consultant made an ________ presentation to the potential overseas investors last week.",
        options: ["impressive", "impress", "impression", "impressively"],
        correct: "impressive",
        explanations: {
            guide: "名词前形容词修饰语的派生词辨析。空格位于不定冠词 an 和名词 presentation（演示/汇报）之间，需要填入形容词形式，选 impressive。",
            family: "impressive (adj.令人印象深刻的) | impress (v.留下印象) | impression (n.印象) | impressively (adv.感人地)。",
            details: "an impressive presentation 意为“一场精彩的/令人印象深刻的汇报”。在招商引资（potential investors）的场景中，形容报告或业绩非常出色。",
            cn: "营销顾问上周向潜在的海外投资者做了一场令人印象深刻的报告。",
            jp: "マーケティングコンサルタントは先週、海外の見込み投資家に対して見事な（impressive）プレゼンテーションを行いました。"
        }
    },
    {
        id: 10,
        target: "seek",
        category: "中等",
        stem: "The human resources department is currently ________ a qualified coordinator for the logistics branch.",
        options: ["seeking", "seek", "seeker", "sought"],
        correct: "seeking",
        explanations: {
            guide: "现在进行时态中的现在分词用法。空格前有 is currently，后面是宾语 a qualified coordinator，需要填入进行时态的动词分词，选 seeking。",
            family: "seeking (v-ing寻找) | seek (v.寻找) | seeker (n.搜索者) | sought (v-ed过去式)。",
            details: "is seeking 意为“正在寻找/招聘”。这是托业 Part 6 招聘启事（job advertisement）中出镜率最高的黄金高频开篇句式，相当于 is looking for。",
            cn: "人力资源部目前正在为物流分支机构寻找一名合格的协调员。",
            jp: "人事部は現在、物流部門の有能なコーディネーターを募集（seeking）しています。"
        }
    },
    {
        id: 11,
        target: "region",
        category: "中等",
        stem: "Ms. Chang was promoted to ________ director after increasing sales performance by twenty percent.",
        options: ["regional", "region", "regionally", "regions"],
        correct: "regional",
        explanations: {
            guide: "职衔名词前的专用形容词定语。空格用于修饰后面的职位名称 director（主管/总监），需要填入专属形容词表示管辖范围，选 regional。",
            family: "regional (adj.区域的) | region (n.地区) | regionally (adv.地方性地) | regions (n-pl地区复数)。",
            details: "regional director 意为“区域总监/大区经理”，属于标准大型跨国公司人事晋升变动场景的固定高级职衔。名词形式 region 无法在此处直接修饰职衔。",
            cn: "在将销售业绩提升了20%之后，张女士被晋升为区域总监。",
            jp: "張さんは販売実績を20%向上させた後、地域（regional）ディレクターに昇進しました。"
        }
    },
    {
        id: 12,
        target: "further",
        category: "中等",
        stem: "The scheduled maintenance will disrupt factory operations until ________ notice next Monday.",
        options: ["further", "furthermore", "distance", "raise"],
        correct: "further",
        explanations: {
            guide: "商务公告固定介词短语组合。until ________ notice 是托业行政管理及公共通知题目的必考结构，中间必须填入形容词 further。",
            family: "further (adj.进一步的) | furthermore (adv.此外) | distance (n.距离) | raise (v.提升)。",
            details: "until further notice 意为“直至另行通知”。此句用在工厂因定期维护（scheduled maintenance）而暂停运营的行政通知中，属于刚性固定用法。",
            cn: "计划中的维护工作将使工厂暂停运营，直至下周一另行通知。",
            jp: "定期メンテナンスにより、来週の月曜日まで別途（further）通知があるまで工場の操業が中断されます。"
        }
    },
    {
        id: 13,
        target: "assistance",
        category: "困难",
        stem: "Executive managerial roles require an experienced administrative ________ to handle complex discretionary tasks.",
        options: ["assistant", "assistance", "assisted", "assisting"],
        correct: "assistant",
        explanations: {
            guide: "人称名词与抽象名词的语意与职能辨析。空格被 administrative（行政的）修饰，作 require 的宾语，且后接不定式，提示应填入指代“人”的可数名词单数。",
            family: "assistant (n.助理/助手) | assistance (n.协助) | assisted (v-ed协助的) | assisting (v-ing协助中)。",
            details: "administrative assistant 意为“行政助理”。本题融合了 executive roles（高管职位）和 discretionary tasks（裁量性任务），强调岗位需要的是特定人手（assistant）而非抽象的帮助（assistance）。",
            cn: "高级管理职位需要一名经验丰富的行政助理来处理复杂的自主裁量任务。",
            jp: "管理職の役員ポストには、複雑で裁量権のある業務をこなす経験豊富な行政アシスタント（assistant）が必要です。"
        }
    },
    {
        id: 14,
        target: "distribute",
        category: "困难",
        stem: "Efficient supply chain management requires a reliable ________ network across the northern territory.",
        options: ["distribution", "distribute", "distributor", "distributive"],
        correct: "distribution",
        explanations: {
            guide: "名词修饰名词的复合结构高阶考核。空格与后面的 network 结合，作 requires 的宾语，用来修饰网络的功能属性，需填入业务名词形式。",
            family: "distribution (n.分销/配送) | distribute (v.分分发) | distributor (n.分销商) | distributive (adj.分派的)。",
            details: "distribution network 意为“销售网/物流配送网络”。在供应链管理（supply chain management）语境下，该词组指货物的流通分销渠道。distributor 指分销商个体，在此不符短语习惯。",
            cn: "高效的供应链管理需要跨北部地区建立起一个可靠的分销配送网络。",
            jp: "効率的なサプライチェーン管理には、北部地域全体にわたる信頼性の高い流通（distribution）ネットワークが必要です。"
        }
    },
    {
        id: 15,
        target: "raise",
        category: "困难",
        stem: "Outstanding quarterly sales performance may qualify regional employees for a substantial pay ________ during the evaluation.",
        options: ["raise", "rise", "arise", "raising"],
        correct: "raise",
        explanations: {
            guide: "核心名词语义及易混淆词辨析。空格前有不定冠词 a 和形容词 substantial（大幅度的），后跟 pay，此处需填入一个表示“加薪”的名词，选 raise。",
            family: "raise (n.加薪/v.筹集) | rise (v./n.上升) | arise (v.出现) | raising (n.筹集/养育)。",
            details: "pay raise 意为“加薪”（主要用于美式商务英语及托业考试）。虽然 pay rise 在英式英语中偶见，但在托业多项选择中，当考查名词“加薪”时，pay raise 是绝对标准的核心高阶词组。rise 不及物动词派生不首选。",
            cn: "出色的季度销售业绩可能会使区域员工在考核期间获得大幅度的加薪。",
            jp: "優れた四半期売上実績により、地域の従業員は査定期間中に大幅な昇給（raise）を得る資格が与えられる場合があります。"
        }
    },
    {
        id: 16,
        target: "impress",
        category: "困难",
        stem: "To make a positive ________ on prestigious corporate clients, account managers must be thoroughly prepared.",
        options: ["impression", "impressive", "impress", "impressively"],
        correct: "impression",
        explanations: {
            guide: "高级动宾固定搭配的词性选择。空格位于动词 make 和介词 on 之间，受到形容词 positive（积极的）的修饰，必须填入名词形式，选 impression。",
            family: "impression (n.印象) | impressive (adj.令人钦佩的) | impress (v.留下印象) | impressively (adv.令人印象深刻地)。",
            details: "make a positive impression on... 意为“给……留下积极/良好的第一印象”，是高级商务谈判、客户大客户经理（account managers）维护客情关系的标志性必备金句。",
            cn: "为了给享誉盛名的企业客户留下良好的第一印象，客户经理必须做好充分的准备。",
            jp: "名声のある企業顧客に良い印象（impression）を与えるために、アカウントマネージャーは徹底的に準備しなければなりません。"
        }
    },
    {
        id: 17,
        target: "seek",
        category: "困难",
        stem: "Professional legal counsel should be ________ immediately if a major contract dispute arises between the signing firms.",
        options: ["sought", "seeking", "seek", "seeker"],
        correct: "sought",
        explanations: {
            guide: "被动语态中不规则动词过去分词的考核。空格前有情态动词被动语态结构 should be，后面需要填入过去分词形式，seek 的过去分词是不规则的 sought。",
            family: "sought (v-ed寻求的/过去分词) | seeking (v-ing寻找中) | seek (v.寻找) | seeker (n.搜寻者)。",
            details: "legal counsel should be sought 意为“应当寻求法律建议/咨询律师意见”。当遭遇合同纠纷（contract dispute）时，这是极为地道正统的商务法务规劝句型，高阶考生极易在此卡壳。",
            cn: "如果签署合同的公司之间发生重大合同纠纷，应当立即寻求专业的法律建议。",
            jp: "契約を締結した企業間で重大な契約紛争が生じた場合は、すぐに専門的な法的助言を求める（sought）べきです。"
        }
    },
    {
        id: 18,
        target: "apologize",
        category: "困难",
        stem: "The logistics manager sent a formal letter of ________ regarding the damaged goods during overseas transit.",
        options: ["apology", "apologize", "apologetic", "apologetically"],
        correct: "apology",
        explanations: {
            guide: "介词后的名词特定商务公文搭配。空格位于介词 of 之后，与前面的 letter 构成复合修饰结构，需要填入名词形式，选 apology。",
            family: "apology (n.道歉/谢罪) | apologize (v.道歉) | apologetic (adj.道歉的) | apologetically (adv.抱歉地)。",
            details: "letter of apology 意为“道歉信/致歉函”。在跨国海运货损（damaged goods during transit）的商业理赔纠纷场景中，写一封正式的致歉信是标准的企业公文步骤。",
            cn: "物流经理就海外运输途中受损的货物发出了一封正式的道歉信。",
            jp: "物流マネージャーは、海外輸送中に破損した商品に関して、正式な謝罪（apology）状を送付しました。"
        }
    }
];