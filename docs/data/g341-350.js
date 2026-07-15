// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag331-340.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "diet",
        pos: "名/動",
        ipa: "/ˈdaɪət/",
        cn: "日常饮食，特别饮食；节食",
        jp: "日常の食事、食事制限；ダイエットをする",
        family: "diets / dietary / dietician",
        tips: "医疗保健、餐饮服务及员工福利场景高频词。常考搭配 dietary restrictions（饮食限制）、balanced diet（均衡饮食）。在听力Part 3 & 4中常用于确认客人的特殊餐饮需求。",
        desc: "She has a balanced diet."
    },
    {
        word: "income",
        pos: "名",
        ipa: "/ˈɪnkʌm/",
        cn: "收入，收益",
        jp: "収入、所得",
        family: "incomes / incoming",
        tips: "财务分析与个人理财核心名词。常考搭配 annual income（年收入）、low-income family（低收入家庭）、disposable income（可支配收入）。在阅读中常与 revenue 或 earnings 替换。",
        desc: "His income is stable."
    },
    {
        word: "proof",
        pos: "名/形/動",
        ipa: "/pruːf/",
        cn: "证据，证明；防……的",
        jp: "証拠、証明；防〜の",
        family: "prove / provable / proven / waterproof",
        tips: "合规审查、报销申请与产品质量核心词。常考搭配 proof of purchase（购买凭证）、proof of employment（在职证明）。作后缀时常构成 waterproof（防水的）、fireproof（防火的）。",
        desc: "Show your proof of purchase."
    },
    {
        word: "occasion",
        pos: "名",
        ipa: "/əˈkeɪʒn/",
        cn: "场合，时机，重要活动",
        jp: "機会、場合、行事",
        family: "occasional / occasionally / occasions",
        tips: "商务社交、庆典礼仪与日常活动高频名词。常考搭配 on special occasions（在特殊场合）、formal occasion（正式场合）。其副词 occasionally 意为“偶尔/有时”，是频度副词高频考点。",
        desc: "It is a formal occasion."
    },
    {
        word: "measure",
        pos: "動/名",
        ipa: "/ˈmeʒər/",
        cn: "测量，估量；措施，方法",
        jp: "測定する、評価する；対策、措置、尺度",
        family: "measurement / measurable / measurably",
        tips: "质量安全控制、企业管理及战略调整核心词。作名词时极常考搭配 take safety measures（采取安全措施，注意动词用 take）。作动词时意为“测量”或“评估”。",
        desc: "We must measure the room."
    },
    {
        word: "basis",
        pos: "名",
        ipa: "/ˈbeɪsɪs/",
        cn: "基础，根据，原则",
        jp: "基礎、根拠、基準、原則",
        family: "base / basic / basically / bases",
        tips: "日常行政及考勤管理核心名词。极常考搭配为 on a daily/weekly/monthly basis（以每日/每周/每月为单位，即：每天/每周/每月地）。常考 under the basis of...（在……的基础上）。",
        desc: "We meet on a daily basis."
    },
    {
        word: "occur",
        pos: "動",
        ipa: "/əˈkɜːr/",
        cn: "发生，出现",
        jp: "起こる、発生する、現れる",
        family: "occurrence / occurred / occurring",
        tips: "技术事故故障汇报与项目管理高频不及物动词。常考搭配 system errors occur（系统错误发生）。注意 occur 是不及物动词，没有被动语态（cannot be occurred）。",
        desc: "Errors may occur."
    },
    {
        word: "complicated",
        pos: "形",
        ipa: "/ˈkɑːmplɪkeɪtɪd/",
        cn: "复杂的，难懂的",
        jp: "複雑な、紛らわしい",
        family: "complicate / complication / complicating",
        tips: "系统更新、程序变更与法务合同高频形容词。形容事物结构或流程复杂，常与 complex 或 detailed 互换。常用搭配 complicated procedure（繁琐程序）。",
        desc: "The system is complicated."
    },
    {
        word: "absolutely",
        pos: "副",
        ipa: "/ˌæbsəˈluːtli/",
        cn: "绝对地，完全地，极其",
        jp: "絶対に、完全に",
        family: "absolute / absoluteness",
        tips: "商务沟通、口语反馈与程度强调副词。常用于强烈肯定某事或修饰形容词，如 absolutely necessary（绝对必要）。在听力 Part 2 & 3 中常用于表达百分之百的赞同。",
        desc: "It is absolutely necessary."
    },
    {
        word: "emergency",
        pos: "名/形",
        ipa: "/ɪˈmɜːrdʒənsi/",
        cn: "突发事件，紧急情况；紧急的",
        jp: "緊急事態、非常時；緊急の",
        family: "emergencies / emergent",
        tips: "后勤安全、公共警示与差旅意外核心词。常考搭配 emergency exit（安全出口/紧急出口）、emergency contact（紧急联系人）、in case of emergency（万一发生紧急情况）。",
        desc: "Use the emergency exit."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "diet",
        category: "简单",
        stem: "The fitness instructor advised the client to maintain a balanced ________ and exercise regularly to lose weight.",
        options: ["diet", "income", "basis", "prior"],
        correct: "diet",
        explanations: {
            guide: "及物动词宾语语义辨析。空格前有形容词 balanced（均衡的），作为 maintain 的宾语，结合健康与减重语境，选 diet。",
            family: "diet (n.日常饮食) | income (n.收入) | basis (n.基础) | prior (adj.先前的)。",
            details: "maintain a balanced diet 意为“保持均衡饮食”，属于日常健康、福利管理及个人护理场景的常见词汇。其他选项不合逻辑。",
            cn: "健身教练建议客户保持均衡的饮食并定期锻炼以减轻体重。",
            jp: "フィットネスインストラクターは、体重を減らすために、バランスの取れた食事（diet）を維持し、定期的に運動するようクライアントにアドバイスしました。"
        }
    },
    {
        id: 2,
        target: "income",
        category: "简单",
        stem: "Applicants are required to submit proof of their monthly ________ when applying for the apartment lease.",
        options: ["income", "diet", "measure", "closed"],
        correct: "income",
        explanations: {
            guide: "修饰词后的名词中心语。空格前面有形容词性物主代词 their 和 monthly（每月的），作为 submit 的宾语，结合申请租房的资金审查语境，选 income。",
            family: "income (n.收入) | diet (n.饮食) | measure (v./n.测量) | closed (adj.关闭的)。",
            details: "proof of monthly income 意为“月收入证明”，是求职、租房等审查场景中非常经典且高频的商业术语。其余选项不符租约申请常识。",
            cn: "申请人在申请公寓租约时，需要提交月收入证明。",
            jp: "アパートの賃貸契約を申請する際、応募者は月々の収入（income）の証明書を提出する必要があります。"
        }
    },
    {
        id: 3,
        target: "proof",
        category: "简单",
        stem: "Please keep your receipt as ________ of purchase in case you need to return the office appliances.",
        options: ["proof", "basis", "emergency", "proposed"],
        correct: "proof",
        explanations: {
            guide: "特定介词结构名词语义。空格在 as 之后，作为 keep receipt 的目的说明，结合退货（return）和购买（purchase）的场景，选 proof。",
            family: "proof (n.证据/凭证) | basis (n.基础) | emergency (n.紧急情况) | proposed (adj.被提议的)。",
            details: "receipt as proof of purchase 意为“收据作为购买凭证”，是售后、客服、退换货和财务报销中极具行业代表性的金牌搭配。其余名词不符此结构。",
            cn: "请保留您的收据作为购买凭证，以防您需要退还办公电器。",
            jp: "オフィス電化製品を返品する必要がある場合に備えて、購入の証明（proof）として領収書を保管してください。"
        }
    },
    {
        id: 4,
        target: "occasion",
        category: "简单",
        stem: "The annual holiday gala is a formal ________ that requires all employees to wear appropriate attire.",
        options: ["occasion", "diet", "proof", "weekend"],
        correct: "occasion",
        explanations: {
            guide: "单数名词表语词义辨析。空格前面有不定冠词 a 和形容词 formal（正式的），作为 is 的表语，结合公司年度盛会（holiday gala）语境选 occasion。",
            family: "occasion (n.场合/重要活动) | diet (n.饮食) | proof (n.证明) | weekend (n.周末)。",
            details: "a formal occasion 意为“正式场合/正式活动”，常用于描述公司年会、社交晚宴、颁奖礼等需要特定着装规范（appropriate attire）的行政通知场景。",
            cn: "年度节日晚宴是一个正式场合，要求所有员工穿着得体的服装。",
            jp: "年次のホリデーガラは、すべての従業員に適切な服装の着用を求めるフォーマルな行事（occasion）です。"
        }
    },
    {
        id: 5,
        target: "measure",
        category: "简单",
        stem: "The engineering team will ________ the dimensions of the conference hall before buying new furniture.",
        options: ["measure", "occur", "basis", "closed"],
        correct: "measure",
        explanations: {
            guide: "情态动词后的动词原形。will 后面接动词原形，宾语为 dimensions（尺寸/空间大小），结合购买家具前的测绘语境选 measure。",
            family: "measure (v.测量/评估) | occur (v.发生) | basis (n.基础) | closed (adj.关闭的)。",
            details: "measure the dimensions 意为“测量尺寸”，是办公装潢、设施更新及建筑承包中常用的动宾搭配。其余干扰项无法与 dimensions 构成合理解释。",
            cn: "工程团队将在购买新家具之前测量会议厅的尺寸。",
            jp: "エンジニアリングチームは、新しい家具を購入する前に会議室の寸法を測定（measure）する予定です。"
        }
    },
    {
        id: 6,
        target: "emergency",
        category: "简单",
        stem: "In case of an ________, passengers should follow the safety coordinator to the nearest exit.",
        options: ["emergency", "diet", "proof", "proposed"],
        correct: "emergency",
        explanations: {
            guide: "介词短语名词中心语。空格前面有不定冠词 an（提示首字母为元音音素），后接 to the nearest exit（到最近的出口），选 emergency 构成固定安全表达。",
            family: "emergency (n.紧急情况) | diet (n.饮食) | proof (n.证明) | proposed (adj.被提议的)。",
            details: "In case of an emergency 意为“万一发生紧急情况”，是公共场所、写字楼及交通广播中最经典的安全警示短语，后面常引导安全撤离（exit）指令。其余选项词性或意思不符。",
            cn: "万一发生紧急情况，旅客应跟随安全协调员前往最近的出口。",
            jp: "緊急事態（emergency）が発生した場合は、乗客の皆様は安全コーディネーターに従って最寄りの出口まで避難してください。"
        }
    },
    {
        id: 7,
        target: "basis",
        category: "中等",
        stem: "The database maintenance team updates the security system settings on a daily ________.",
        options: ["basis", "measure", "income", "seminar"],
        correct: "basis",
        explanations: {
            guide: "介词短语核心搭配考查。空格前面有 on a daily，要求填入名词构成固定副词状语，选 basis。",
            family: "basis (n.基础/原则) | measure (n.措施) | income (n.收入) | seminar (n.研讨会)。",
            details: "on a daily basis 意为“以每日为单位地/每天”，是描述后勤、IT维护（updates settings）及日常运营频率的最高阶地道表达。其他选项无法构成此固定用法。",
            cn: "数据库维护团队每天更新安全系统设置。",
            jp: "データベースメンテナンスチームは、毎日（basis）セキュリティシステムの設定を更新しています。"
        }
    },
    {
        id: 8,
        target: "occur",
        category: "中等",
        stem: "Technicians warned that network connection errors might ________ if the system is not properly installed.",
        options: ["occur", "measure", "proof", "voluntary"],
        correct: "occur",
        explanations: {
            guide: "情态动词后的不及物动词词义选择。空格在情态动词 might 之后作从句谓语，且主语是 errors（错误），选用不及物动词 occur 表示“发生”。",
            family: "occur (v.发生) | measure (v./n.测量) | proof (n.证据) | voluntary (adj.自愿的)。",
            details: "errors might occur 意为“错误可能会发生”。在系统不合规或未正确安装（not properly installed）的情况下，出现系统故障（errors）属于标准的IT售后及检修场景。由于 occur 是不及物动词，符合无宾语句式，其余动词词义不通或需带宾语。",
            cn: "技术人员警告说，如果系统未正确安装，可能会出现网络连接错误。",
            jp: "技術者は、システムが適切にインストールされていない場合、ネットワーク接続エラーが発生する（occur）可能性があると警告しました。"
        }
    },
    {
        id: 9,
        target: "complicated",
        category: "中等",
        stem: "The user manual explains how to resolve database glitches without using ________ technical terms.",
        options: ["complicated", "diet", "emergency", "prior"],
        correct: "complicated",
        explanations: {
            guide: "修饰名词的形容词语义辨析。空格位于名词 terms（术语）之前作定语，结合说明书（user manual）旨在通俗化指导（glitches）的特点，选 complicated（复杂的/难懂的）。",
            family: "complicated (adj.复杂的) | diet (n.饮食) | emergency (n.紧急情况) | prior (adj.先前的)。",
            details: "complicated technical terms 意为“复杂的专业术语”。说明书在指导非专业用户排查系统故障时，通常会尽量避免晦涩复杂的表述。其余干扰项无法修饰名词 terms。",
            cn: "该用户手册解释了如何在不使用复杂的专业术语的情况下解决数据库故障。",
            jp: "ユーザーマニュアルには、複雑な（complicated）技術用語を使わずにデータベースの不具合を解決する方法が説明されています。"
        }
    },
    {
        id: 10,
        target: "absolutely",
        category: "中等",
        stem: "The general manager stated that thorough quality control is ________ necessary for our long-term growth.",
        options: ["absolutely", "income", "basis", "proposed"],
        correct: "absolutely",
        explanations: {
            guide: "修饰形容词的程度副词。空格后是形容词 necessary（必要的），前面是系动词 is，需填入副词作状语，选 absolutely 表达强烈的强调。",
            family: "absolutely (adv.绝对地/完全地) | income (n.收入) | basis (n.基础) | proposed (adj.被提议的)。",
            details: "absolutely necessary 意为“绝对必要/必不可少”，常用于高层战略声明中强调某项制度（quality control）对未来可持续发展（growth）的极端重要性。其余干扰项不是副词。",
            cn: "总经理表示，彻底的质量控制对于我们的长期增长是绝对必要的。",
            jp: "ゼネラルマネージャーは、長期的な成長のために徹底した品質管理が絶対に（absolutely）必要であると述べました。"
        }
    },
    {
        id: 11,
        target: "diet",
        category: "中等",
        stem: "If you have any special ________ restrictions, please notify the event coordinator before the annual dinner.",
        options: ["dietary", "diet", "diets", "dietician"],
        correct: "dietary",
        explanations: {
            guide: "名词前的修饰性形容词词性选择。空格位于名词 restrictions（限制）之前，需填入形容词，选用 diet 的派生词 dietary 构成特定搭配。",
            family: "dietary (adj.饮食的) | diet (n.饮食) | diets (n-pl饮食) | dietician (n.营养学家)。",
            details: "dietary restrictions 意为“饮食限制/饮食禁忌”（常指因宗教、过敏或健康原因引起的特定需求），是会务及大型餐饮（annual dinner）策划中极核心的专业高频短语。其他词性不符定语用法。",
            cn: "如果您有任何特殊的饮食限制，请在年会晚宴前通知活动协调员。",
            jp: "特別な食事（dietary）上の制限がある場合は、年次ディナーの前にイベントコーディネーターにお知らせください。"
        }
    },
    {
        id: 12,
        target: "income",
        category: "中等",
        stem: "The CFO delivered a presentation on how the new tax regulations would impact our net ________.",
        options: ["income", "diet", "proof", "lucrative"],
        correct: "income",
        explanations: {
            guide: "财务场景名词搭配。空格位于形容词 net（净的）之后，与其组合充当 delivered 的宾语，结合税制改革（tax regulations），选 income。",
            family: "income (n.收入/收益) | diet (n.饮食) | proof (n.证明) | lucrative (adj.获利的)。",
            details: "net income 意为“净利润/净收益”，是财务报告（CFO presentation）中权重极高、不可替换的绝对核心术语。其余选项不构成此标准财务名词。",
            cn: "首席财务官就新税收规章将如何影响我们的净利润进行了演示汇报。",
            jp: "CFOは、新しい税制が当社の純収入（income）にどのように影響するかについてプレゼンテーションを行いました。"
        }
    },
    {
        id: 13,
        target: "proof",
        category: "困难",
        stem: "The newly renovated research facility is equipped with fireproof and ________ doors to ensure safety.",
        options: ["waterproof", "proof", "prove", "proven"],
        correct: "waterproof",
        explanations: {
            guide: "并列结构中的派生词选择。空格与 fireproof（防火的）通过连词 and 并列，共同修饰名词 doors（门），需填入具有相同“防……的”含义的形容词，选 waterproof。",
            family: "waterproof (adj.防水的) | proof (n.证据) | prove (v.证明) | proven (adj.经证实的)。",
            details: "fireproof and waterproof doors 意为“防火防潮门”，属于安全设施建设与办公楼翻修（renovated facility）中的高规格设备采购词组。名词 proof 在此不作为独立修饰语搭配。",
            cn: "新建并翻修的研究设施配备了防火和防水门，以确保安全。",
            jp: "新しく改装された研究施設には、安全性を確保するために防火扉と防水（waterproof）扉が設置されています。"
        }
    },
    {
        id: 14,
        target: "occasion",
        category: "困难",
        stem: "Because of the server upgrade, system administrators will ________ monitor network traffic overnight.",
        options: ["occasionally", "occasion", "occasional", "occasions"],
        correct: "occasionally",
        explanations: {
            guide: "修饰谓语动词的副词状语。空格位于助动词 will 和实义动词 monitor（监控）之间，必须填入副词作状语，选用 occasionally。",
            family: "occasionally (adv.偶尔地/不时地) | occasion (n.场合) | occasional (adj.偶尔的) | occasions (n-pl场合)。",
            details: "will occasionally monitor 意为“会偶尔/不时监控网络流量”。形容在服务器升级（server upgrade）期间进行的间歇性技术监督，属于标准的IT维护和网络保障语体。其他选项词性不符。",
            cn: "由于服务器升级，系统管理员将在夜间不时监控网络流量。",
            jp: "サーバーのアップグレードのため、システム管理者は夜間に時折（occasionally）ネットワークトラフィックを監視します。"
        }
    },
    {
        id: 15,
        target: "measure",
        category: "困难",
        stem: "To ensure thorough quality control, the factory implemented precise ________ systems on the assembly line.",
        options: ["measurement", "measure", "measurable", "measurably"],
        correct: "measurement",
        explanations: {
            guide: "修饰名词的名词定语。空格用于修饰 systems（系统），并被形容词 precise（精确的）修饰，此处需填入表示测量行为的名词，选 measurement 构成复合名词。",
            family: "measurement (n.测量/度量) | measure (v./n.测量/措施) | measurable (adj.可测量的) | measurably (adv.显著地)。",
            details: "precise measurement systems 意为“精密测量系统”，是制造、工业质检（assembly line）以及质量管理中不可分割的高阶行业术语。measure 指单次动作或抽象措施，无法构成该特指的专业检测系统含义。",
            cn: "为确保彻底的质量控制，该工厂在装配线上部署了精密测量系统。",
            jp: "徹底した品質管理を確実にするため、工場は組立ラインに精密な測定（measurement）システムを導入しました。"
        }
    },
    {
        id: 16,
        target: "basis",
        category: "困难",
        stem: "Our marketing research firm conducts deep analysis, which provides the ________ of our strategic planning.",
        options: ["basis", "base", "basic", "basically"],
        correct: "basis",
        explanations: {
            guide: "定冠词修饰下的名词中心语。空格位于定冠词 the 与介词 of 之间，作 provides 的宾语，结合“战略规划的基础”选名词 basis。",
            family: "basis (n.基础/原则) | base (n.基地/v.基于) | basic (adj.基本的) | basically (adv.基本上)。",
            details: "provide the basis of... 意为“提供……的基础”，常在市场调研（marketing research）和战略规划中出现。虽然 base 也有基础或底座之意，但在表达抽象理论、数据或决策根据的“基础”时，首选高级术语 basis。其他词性不符。",
            cn: "我们的市场研究公司进行深度分析，这为我们的战略规划提供了基础。",
            jp: "当社のマーケティング調査会社は深い分析を行っており、それが当社の戦略立案の基礎（basis）を提供しています。"
        }
    },
    {
        id: 17,
        target: "occur",
        category: "困难",
        stem: "The IT department released a statement to explain the recent ________ of system-wide grid failures.",
        options: ["occurrence", "occur", "occurred", "occurring"],
        correct: "occurrence",
        explanations: {
            guide: "定冠词修饰下的名词中心语。空格位于定冠词 the 和形容词 recent（最近的）之后，充当介词 of 引导的动作发出中心词，选用名词 occurrence。",
            family: "occurrence (n.发生/出现的事) | occur (v.发生) | occurred (v-ed已发生) | occurring (v-ing发生中)。",
            details: "explain the recent occurrence of... 意为“解释最近……的发生/出现”。说明网络系统大范围故障（failures）的发生，符合技术故障事件分析与公关部门（PR statement）发布的技术报告标准用语。其他选项词性不符。",
            cn: "IT部门发表了一份声明，解释了最近发生的大范围电网故障事件。",
            jp: "IT部門は、最近発生したシステム全体のグリッド障害（occurrence）について説明する声明をリリースしました。"
        }
    },
    {
        id: 18,
        target: "complicated",
        category: "困难",
        stem: "The contract negotiation became ________ by the sudden introduction of discretionary tax guidelines.",
        options: ["complicated", "complicate", "complication", "complicating"],
        correct: "complicated",
        explanations: {
            guide: "系动词后的形容词表语词性派生考查。空格前面有系动词 became，空格后有介词 by，需填入一个表语形容词（或过去分词），选 complicated 表达“变得复杂”。",
            family: "complicated (adj.复杂的) | complicate (v.使复杂化) | complication (n.复杂化/并发症) | complicating (v-ing变体)。",
            details: "became complicated by... 意为“因为……而变得繁琐复杂”。在合同谈判中，因为突发的可支配税收优惠指南（discretionary tax guidelines）的引入，使得法律程序陷入复杂境地。其他派生词词性不符。",
            cn: "由于突然引入了可支配的税收优惠指南，合同谈判变得复杂起来。",
            jp: "裁量的な税制ガイドラインが突然導入されたことにより、契約交渉は複雑（complicated）なものになりました。"
        }
    }
];