// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag351-360.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "fare",
        pos: "名/動",
        ipa: "/fer/",
        cn: "票价，车费；进展，过活",
        jp: "運賃、乗車料金；やっていく",
        family: "fares / fared / faring",
        tips: "交通、差旅与报销场景高频词。作名词时，常考搭配 airfare（飞机票价）、bus fare（公交车费）。作动词时意为“进展/过得如何”，常与 well 搭配（如 fare well 表现良好）。",
        desc: "The bus fare is low."
    },
    {
        word: "prevent",
        pos: "動",
        ipa: "/rɪˈvent/",
        cn: "预防，阻止，防止",
        jp: "防ぐ、妨げる、予防する",
        family: "prevention / preventive / preventable / prevented",
        tips: "安全生产与危机管理绝对核心动词。极常考固定句型 prevent someone/something from doing something（防止某人/某事做某事，注意介词用 from）。其名词形式 prevention 意为“预防”。",
        desc: "We must prevent errors."
    },
    {
        word: "confident",
        pos: "形",
        ipa: "/ˈkɑːnfɪdənt/",
        cn: "自信的，确信的，有信心的",
        jp: "自信がある、確信している",
        family: "confidence / confidently / confidences",
        tips: "团队协作、公关发布与商务谈判高频形容词。常用搭配 be confident that...（确信……）。其名词形式 confidence 意为“信心/信任”，常与 express 搭配。",
        desc: "She is confident."
    },
    {
        word: "enable",
        pos: "動",
        ipa: "/ɪnˈeɪbl/",
        cn: "使能够，使可行",
        jp: "可能にする、有効にする",
        family: "enabled / enabling / enabler",
        tips: "技术更新与流程优化核心动词。最经典句型为 enable someone to do something（使某人能够做某事，注意后接动词不定式）。在阅读中常与 allow 相互替换。",
        desc: "The tool enables growth."
    },
    {
        word: "athletic",
        pos: "形",
        ipa: "/æθˈletɪk/",
        cn: "运动的，体育的，健壮的",
        jp: "運動の、競技の、たくましい",
        family: "athletics / athlete / athletes",
        tips: "企业文娱与社会赞助场景常用形容词。常修饰活动或装备，如 athletic event（体育活动）、athletic gear（运动装备）。",
        desc: "He wears athletic shoes."
    },
    {
        word: "impact",
        pos: "名/動",
        ipa: "/ˈɪmpækt/",
        cn: "影响，冲击，效果",
        jp: "影響、衝撃；影響を与える",
        family: "impacts / impacted / impacting / impactful",
        tips: "宏观变化、业绩波动与政策调整核心词。作名词时极其常考搭配 have an impact on...（对……有影响，注意介词用 on）。作动词时直接接宾语，等于 affect。",
        desc: "The change has an impact."
    },
    {
        word: "gain",
        pos: "動/名",
        ipa: "/ɡeɪn/",
        cn: "获得，赢得，增加",
        jp: "得る、獲得する；利益、増加",
        family: "gained / gaining / gains",
        tips: "利润回报与竞争优势核心词。常考搭配 gain access to...（获得……的准入权）、gain market share（赢得市场份额）。作名词时，efficiency gains 意为“效率提升”。",
        desc: "We gained new clients."
    },
    {
        word: "locate",
        pos: "動",
        ipa: "/ˈləʊkeɪt/",
        cn: "找出，定位，位于",
        jp: "位置を特定する、置く、位置する",
        family: "location / located / locating",
        tips: "选址、物流与文件搜寻核心动词。及物动词用法为 locate the document（找到文件）；被动语态中，be strategically located（战略性地位于……）是商务地产的黄金搭配。",
        desc: "Please locate the office."
    },
    {
        word: "background",
        pos: "名",
        ipa: "/ˈbækɡraʊnd/",
        cn: "背景，底色，经历",
        jp: "背景、経歴、生い立ち",
        family: "backgrounds",
        tips: "招聘筛选与技术文档高频名词。极常考搭配 educational background（教育背景）、professional background（职业经历）、background check（背景调查）。",
        desc: "He has a strong background."
    },
    {
        word: "shortly",
        pos: "副",
        ipa: "/ˈʃɔːrtli/",
        cn: "不久，很快，立刻",
        jp: "間もなく、すぐに、手短に",
        family: "short / shorten / shortness",
        tips: "时间、日程排程绝对高频副词。常用于修饰将来动作或紧随发生的动作，如 will arrive shortly（很快将抵达）、shortly after...（在……之后不久）。",
        desc: "We will arrive shortly."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "fare",
        category: "简单",
        stem: "The administrative assistant requested receipts for train ________ and hotel stays to process the travel reimbursement.",
        options: ["fares", "confident", "shortly", "office"],
        correct: "fares",
        explanations: {
            guide: "名词词义与商务场景搭配。空格前有 train（火车），作为 requested（要求）的宾语之一，结合差旅报销（reimbursement）选 fares。",
            family: "fares (n-pl票价) | confident (adj.自信的) | shortly (adv.很快) | office (n.办公室)。",
            details: "train fares 意为“火车票价/车费”，是通勤与出差报销中极常见的基础搭配。其余选项词性或语义不符。",
            cn: "行政助理要求提供火车票和酒店住宿的收据，以办理差旅报销。",
            jp: "行政アシスタントは、出張旅費の精算を処理するために、電車の運賃（fares）とホテルの宿泊費の領収書を要求しました。"
        }
    },
    {
        id: 2,
        target: "prevent",
        category: "简单",
        stem: "The factory supervisor implemented new safety protocols to ________ accidents on the assembly line.",
        options: ["prevent", "enable", "locate", "proposed"],
        correct: "prevent",
        explanations: {
            guide: "及物动词作目的状语。空格在 to 之后，后面带有名词 accidents（事故）作宾语，结合安全规章语境选 prevent。",
            family: "prevent (v.防止) | enable (v.使能够) | locate (v.定位) | proposed (adj.被提议的)。",
            details: "prevent accidents 意为“防止事故”，是安全生产（safety protocols）和工厂车间管理中的高频黄金动宾搭配。",
            cn: "工厂主管实施了新的安全规程，以防止装配线上发生事故。",
            jp: "工場のスーパーバイザーは、組立ラインでの事故を防ぐ（prevent）ために、新しい安全プロトコルを導入しました。"
        }
    },
    {
        id: 3,
        target: "confident",
        category: "简单",
        stem: "The marketing director is ________ that the upcoming promotional campaign will attract many young consumers.",
        options: ["confident", "prevent", "shortly", "closed"],
        correct: "confident",
        explanations: {
            guide: "系动词后的形容词表语。空格前有系动词 is，后面接 that 引导的宾语从句，需填入形容词，选 confident 表达信心。",
            family: "confident (adj.确信的) | prevent (v.防止) | shortly (adv.不久) | closed (adj.关闭的)。",
            details: "be confident that... 意为“确信/对……有信心”，常在项目策划、战略规划中用于表达对成果的乐观预测。其他选项不符结构。",
            cn: "营销总监确信即将开展的促销活动将吸引许多年轻消费者。",
            jp: "マーケティングディレクターは、今度のプロモーションキャンペーンが多くの若い消費者を惹きつけると確信して（confident）います。"
        }
    },
    {
        id: 4,
        target: "athletic",
        category: "简单",
        stem: "Our firm decided to sponsor the local school's ________ tournament to improve corporate social responsibility.",
        options: ["athletic", "locate", "background", "weekend"],
        correct: "athletic",
        explanations: {
            guide: "修饰名词的形容词。空格用于修饰名词 tournament（锦标赛/赛事），结合赞助学校体育活动的公关背景，选 athletic。",
            family: "athletic (adj.运动的/体育的) | locate (v.定位) | background (n.背景) | weekend (n.周末)。",
            details: "athletic tournament 意为“体育比赛/运动锦标赛”，属于典型的企业社会责任（CSR）公关赞助题材。其他选项不构成合理修饰关系。",
            cn: "我们公司决定赞助当地学校的体育比赛，以提高企业的社会责任感。",
            jp: "当社は、企業の社会的責任を向上させるため、地元の学校の体育（athletic）大会をスポンサーすることを決定しました。"
        }
    },
    {
        id: 5,
        target: "background",
        category: "简单",
        stem: "During the interview, the candidate discussed her educational ________ in biomedical engineering.",
        options: ["background", "fare", "impact", "prior"],
        correct: "background",
        explanations: {
            guide: "名词中心语辨析。空格前有形容词 educational（教育的），且在面试（interview）背景中，填入 background 表达学历背景。",
            family: "background (n.背景) | fare (n.票价) | impact (n./v.影响) | prior (adj.先前的)。",
            details: "educational background 意为“教育背景/学历背景”，是人力资源招聘（interview）中评估候选人基本资质的行业标准搭配。",
            cn: "在面试过程中，求职者讨论了她在生物医学工程领域的教育背景。",
            jp: "面接中、応募者は自身のバイオメディカル工学における教育背景（background）について説明しました。"
        }
    },
    {
        id: 6,
        target: "shortly",
        category: "简单",
        stem: "The keynote speaker has arrived at the venue and is scheduled to begin the presentation ________.",
        options: ["shortly", "confident", "gain", "morning"],
        correct: "shortly",
        explanations: {
            guide: "修饰动词的副词。空格作句尾状语，修饰 begin the presentation，表示动作即将发生，选 shortly。",
            family: "shortly (adv.很快/不久) | confident (adj.自信的) | gain (v.获得) | morning (n.早上)。",
            details: "begin shortly 意为“很快开始/马上开始”，是会议安排、宣讲会开始时极高频出现的时间状语。其他选项词性或语意不符。",
            cn: "主旨发言人已经到达会场，计划很快开始演讲。",
            jp: "基調講演者が会場に到着し、間もなく（shortly）プレゼンテーションが開始される予定です。"
        }
    },
    {
        id: 7,
        target: "enable",
        category: "中等",
        stem: "Upgrading the database software will ________ employees to access the client summaries remotely.",
        options: ["enable", "fare", "background", "seminar"],
        correct: "enable",
        explanations: {
            guide: "及物动词句式搭配。空格在助动词 will 之后，后接宾语 employees + to do 不定式结构，填入 enable 构成固定搭配。",
            family: "enable (v.使能够) | fare (v./n.票价) | background (n.背景) | seminar (n.研讨会)。",
            details: "enable someone to do something 意为“使某人能够做某事”，是IT升级、数字化系统优化后常见的效果叙事。其他动词均不符合此特定句式。",
            cn: "升级数据库软件将使员工能够远程访问客户摘要信息。",
            jp: "データベースソフトウェアをアップグレードすることで、従業員がリモートで顧客要約データにアクセスすることが可能になります（enable）。"
        }
    },
    {
        id: 8,
        target: "impact",
        category: "中等",
        stem: "Economists predict that the sudden rise in fuel costs will have a significant ________ on our quarterly revenue.",
        options: ["impact", "shortly", "athletic", "deposit"],
        correct: "impact",
        explanations: {
            guide: "冠词和修饰词后的名词。空格前有不定冠词 a 和形容词 significant（显著的），后接介词 on，考查名词固定搭配 have an impact on...。",
            family: "impact (n./v.影响) | shortly (adv.不久) | athletic (adj.体育的) | deposit (n.押金)。",
            details: "have a significant impact on... 意为“对……产生重大影响”，属于宏观经济指标（fuel costs）波动对企业盈利（revenue）影响的典型图表题语境。",
            cn: "经济学家预测，燃料成本的突然上涨将对我们的季度收入产生显著影响。",
            jp: "エコノミストは、燃料コストの急激な上昇が当社の四半期収益に大きな影響（impact）を与えると予測しています。"
        }
    },
    {
        id: 9,
        target: "gain",
        category: "中等",
        stem: "By streamlining its distribution channel, the automotive company hopes to ________ a larger market share.",
        options: ["gain", "prevent", "confident", "purchasing"],
        correct: "gain",
        explanations: {
            guide: "及物动词词义选择。hopes to 后面要求接动词原形，宾语是 market share（市场份额），选用 gain 表达获取之意。",
            family: "gain (v.获得/赢得) | prevent (v.防止) | confident (adj.自信的) | purchasing (n./v-ing采购)。",
            details: "gain market share 意为“赢得市场份额/获取市场份额”，是企业竞争、战略成功后的标准商业财务表述。其余选项无法搭配。",
            cn: "通过精简分销渠道，该汽车公司希望赢得更大的市场份额。",
            jp: "流通チャネルを合理化することで、その自動車会社はより大きな市場シェアを獲得する（gain）ことを望んでいます。"
        }
    },
    {
        id: 10,
        target: "locate",
        category: "中等",
        stem: "The board of directors is looking for a suitable neighborhood to ________ our new regional branch.",
        options: ["locate", "fare", "background", "booked"],
        correct: "locate",
        explanations: {
            guide: "及物动词作目的状语。空格在 to 之后，后接宾语 our new regional branch（新区域分支机构），结合选址（neighborhood）语境选 locate。",
            family: "locate (v.设置/定位/找出) | fare (v./n.票价) | background (n.背景) | booked (adj.被预订的)。",
            details: "locate our branch 意为“将分支机构设在……/为分支机构选址”。这是商务选址或扩张决策中的常见搭配。其他选项词性或语义不合。",
            cn: "董事会正在寻找一个合适的街区，以建立我们新的区域分部。",
            jp: "取締役会は、新しい地域支部を設置（locate）するための適切なエリアを探しています。"
        }
    },
    {
        id: 11,
        target: "prevent",
        category: "中等",
        stem: "The compliance officer emphasizes that accident ________ is the top priority for the manufacturing crew.",
        options: ["prevention", "prevent", "preventive", "preventable"],
        correct: "prevention",
        explanations: {
            guide: "名词修饰名词的复合名词。空格与前面的 accident（事故）组合，充当主语，且前面有 compliance officer（合规官）强调，选用名词形式 prevention。",
            family: "prevention (n.预防/防止) | prevent (v.防止) | preventive (adj.预防性的) | preventable (adj.可预防的)。",
            details: "accident prevention 意为“事故防范/事故预防”，是工业制造与工厂合规中最核心的高阶专业名词词组。其余词性均不符主语位置。",
            cn: "合规官强调，事故预防是制造团队的首要任务。",
            jp: "コンプライアンス担当者は、事故防止（prevention）が製造チームにとっての最優先事項であることを強調しています。"
        }
    },
    {
        id: 12,
        target: "confident",
        category: "中等",
        stem: "The general manager expressed absolute ________ in the legal department's ability to resolve the patent dispute.",
        options: ["confidence", "confident", "confidently", "confidences"],
        correct: "confidence",
        explanations: {
            guide: "及物动词后的名词宾语。空格前面有形容词 absolute（绝对的），作 expressed 的宾语，后接介词 in，选用不可数名词 confidence。",
            family: "confidence (n.信心/信任) | confident (adj.自信的) | confidently (adv.自信地) | confidences (n-pl秘密/知心话)。",
            details: "expressed confidence in... 意为“对……表达信心”，是总经理或高层表态、人事信任中的黄金高频搭配。confidences 通常作“知心话/隐私”解，在此不合语义。",
            cn: "总经理对法律部门解决专利纠纷的能力表示绝对有信心。",
            jp: "ゼネラルマネージャーは、特許紛争を解決する法務部の能力に絶対的な信頼（confidence）を表明しました。"
        }
    },
    {
        id: 13,
        target: "enable",
        category: "困难",
        stem: "The newly designed cloud platform acts as an ________ technology, allowing various departments to collaborate seamlessly.",
        options: ["enabling", "enable", "enabled", "enablement"],
        correct: "enabling",
        explanations: {
            guide: "修饰名词的分词形容词选择。空格位于不定冠词 an 与名词 technology 之间，需填入起形容词修饰作用的词，选现在分词/形容词 enabling。",
            family: "enabling (adj.使可行的/赋能的) | enable (v.使能够) | enabled (adj.被激活的) | enablement (n.授权/使能)。",
            details: "enabling technology 意为“赋能技术/使能技术”，是高阶IT架构、数字化办公及管理模式转型中的标准学术与商业学术界行话。其他派生词词性不符该修饰作用。",
            cn: "新设计的云平台作为一种赋能技术，使各个部门能够无缝协作。",
            jp: "新しく設計されたクラウドプラットフォームは、さまざまな部門のシームレスなコラボレーションを可能にする（enabling）技術として機能します。"
        }
    },
    {
        id: 14,
        target: "locate",
        category: "困难",
        stem: "The renovated corporate park is strategically ________ near the business district, ensuring easy access to public transport grids.",
        options: ["located", "locate", "location", "locating"],
        correct: "located",
        explanations: {
            guide: "被动语态中的过去分词作表语。空格前有系动词 is 和副词 strategically（战略性地），后接介词 near，此处要求填入过去分词，选 located。",
            family: "located (adj.坐落于/位于) | locate (v.定位) | location (n.位置) | locating (v-ing定位中)。",
            details: "be strategically located near/in 意为“战略性地位于……附近/地处战略要地”，属于商业地产招商、写字楼搬迁和办公室租赁文稿中最核心的高阶句式。其他派生词不符结构。",
            cn: "翻新后的公司园区战略性地坐落在商业区附近，确保了前往公共交通网络的便利。",
            jp: "改装されたオフィスパークは商業地区の近くに戦略的に位置して（located）おり、公共交通網へのアクセスが容易です。"
        }
    },
    {
        id: 15,
        target: "impact",
        category: "困难",
        stem: "Any sudden changes in federal taxation guidelines will negatively ________ the subsidiary's annual profit.",
        options: ["impact", "impactful", "impacted", "impacting"],
        correct: "impact",
        explanations: {
            guide: "情态动词后的及物动词。will 后面接副词 negatively，空格处需填入及物动词原形作谓语，宾语为 annual profit，选 impact。",
            family: "impact (v./n.影响) | impactful (adj.有影响力的) | impacted (v-ed受到影响) | impacting (v-ing影响中)。",
            details: "negatively impact the profit 意为“对利润造成负面影响”。在此作及物动词（直接接宾语），是分析财务风险（taxation guidelines）时的标准高阶表达。其余派生词词性不符。",
            cn: "联邦税收指南的任何突然变化都会对子公司的年利润产生负面影响。",
            jp: "連邦税制ガイドラインの急激な変更は、子会社の年間利益に悪影響を及ぼす（impact）でしょう。"
        }
    },
    {
        id: 16,
        target: "shortly",
        category: "困难",
        stem: "The database went completely offline ________ after the system-wide upgrade was completed yesterday morning.",
        options: ["shortly", "short", "shorten", "shortness"],
        correct: "shortly",
        explanations: {
            guide: "修饰介词短语的时间副词。空格位于介词 after 之前，与其组合构成特定的时间关系，选用副词 shortly 表达“不久/立刻”。",
            family: "shortly (adv.不久/很快) | short (adj./adv.短的) | shorten (v.缩短) | shortness (n.短暂)。",
            details: "shortly after 意为“在……之后不久”，是描述IT事故、故障排查（system-wide upgrade）和事故报告中极高阶的关联性副词搭配。其他同族词词义不搭配。",
            cn: "昨天上午系统范围内升级完成后不久，数据库便完全离线了。",
            jp: "昨日の朝、システム全体のアップグレードが完了した直後（shortly）に、データベースは完全にオフラインになりました。"
        }
    },
    {
        id: 17,
        target: "fare",
        category: "困难",
        stem: "Despite the fierce competition in the retail market, our new subsidiary ________ exceptionally well last fiscal year.",
        options: ["fared", "fare", "faring", "fares"],
        correct: "fared",
        explanations: {
            guide: "过去时态下不及物动词词义辨析。空格作为主句谓语，后接程度副词 exceptionally well（极其成功地），且发生的时间状语为 last fiscal year，选用过去式动词 fared。",
            family: "fared (v-ed进展/做得) | fare (v./n.票价) | faring (v-ing进展中) | fares (v-3sg/n-pl)。",
            details: "fared exceptionally well 意为“表现得极其出色/进展极顺利”。属于不及物动词用法，常在年度财务总结中用来形容海外分支机构或子公司（subsidiary）在逆境下的亮眼运营表现。",
            cn: "尽管零售市场竞争激烈，但我们的新子公司在上一财政年度中表现异常出色。",
            jp: "小売市場での激しい競争にもかかわらず、当社の新しい子会社は昨年度、非常に良好な業績を残しました（fared）。"
        }
    },
    {
        id: 18,
        target: "gain",
        category: "困难",
        stem: "Administrative assistants reported significant efficiency ________ after the office introduced automated scheduling software.",
        options: ["gains", "gain", "gaining", "gained"],
        correct: "gains",
        explanations: {
            guide: "形容词修饰下的名词复数中心语。空格前有形容词 significant 和名词修饰词 efficiency，此处需要填入表示复数收益或成果的名词形式，选 gains。",
            family: "gains (n-pl收益/收获) | gain (v./n.获得) | gaining (v-ing获取中) | gained (v-ed已获得)。",
            details: "efficiency gains 意为“效率的提升/收益”，专指通过引入办公自动化（automated software）等优化手段获得的多项具体回报，常以复数名词出现。其他同族词词性不符该宾语位置。",
            cn: "在办公室引入自动排程软件后，行政助理报告了显著的效率提升。",
            jp: "オフィスが自動スケジューリングソフトウェアを導入した後、行政アシスタントは大幅な効率向上（gains）を報告しました。"
        }
    }
];