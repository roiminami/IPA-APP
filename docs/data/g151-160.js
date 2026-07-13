// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag141-150.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "original",
        pos: "形/名",
        ipa: "/əˈrɪdʒənl/",
        cn: "最初的，原始的；原作，原件",
        jp: "最初の、オリジナルの；原物、原本",
        family: "originally / originality / originate / originator",
        tips: "托业阅读高频词。作形容词时常修饰 receipt, document, contract 等表示“原件/原始记录”；作名词指文件或艺术作品的原件。副词形式 originally（起初/本来）也是词性题大热门。",
        desc: "Please keep the original receipt."
    },
    {
        word: "selection",
        pos: "名",
        ipa: "/sɪˈlekʃn/",
        cn: "选择，挑选；可供选择的事物",
        jp: "選択、選定、選り抜きのもの",
        family: "select / selective / selectively / selector"
        tips: "常考固定搭配 a wide selection of...（琳琅满目的/各种各样的……），等同于 a wide range/variety of。动词形式为 select，形容词为 selective（有选择性的）。",
        desc: "They offer a wide selection."
    },
    {
        word: "attract",
        pos: "動",
        ipa: "/əˈtrækt/",
        cn: "吸引，招引",
        jp: "惹きつける、引きつける",
        family: "attraction / attractive / attractively / attractiveness",
        tips: "商务营销与旅游场景核心动词。常搭配 attract customers/investors（吸引客户/海外投资者）。其名词 attraction 既可以指“吸引力”，也常指“旅游景点（tourist attraction）”。",
        desc: "The event attracts many visitors."
    },
    {
        word: "handle",
        pos: "動/名",
        ipa: "/ˈhændl/",
        cn: "处理，应付；对待；把手",
        jp: "扱う、処理する；取っ手",
        family: "handler / handling / handled",
        tips: "职场危机处理、客户投诉或物流场景的高频动词，常与 complaints, requests, luggage 连用，等同于 deal with。名词形式 handling 常用于 shipping and handling（运费与处理费）。",
        desc: "She can handle the complaint."
    },
    {
        word: "memo",
        pos: "名",
        ipa: "/ˈmemoʊ/",
        cn: "备忘录，内部通知",
        jp: "社内連絡票、備忘録、メモ",
        family: "memos / memorandum",
        tips: "办公行政日常高频名词，全称为 memorandum。通常指公司内部发送的简短书面通告、政策变更或会议提醒。常见短语如 issue a memo（发布备忘录）。",
        desc: "Please read the internal memo."
    },
    {
        word: "attach",
        pos: "動",
        ipa: "/əˈtætʃ/",
        cn: "系，贴，连接；随信附上",
        jp: "添付する、取り付ける",
        family: "attachment / attached / attachable",
        tips: "商务电子邮件场景的绝对核心动词。最常用法是 please find the attached file（请见随信附上的文件）或 attach A to B（将A附在B上）。名词形式 attachment 意为邮件附件。",
        desc: "I will attach the file."
    },
    {
        word: "correct",
        pos: "形/動",
        ipa: "/kəˈrekt/",
        cn: "正确的，对的；修改，纠正",
        jp: "正しい、正確な；訂正する、修正する",
        family: "correction / correctly / corrective / correctness",
        tips: "双重词性高频词。作形容词表示准确无误；作动词表示纠正错误或修改文本（如 correct an error）。其名词形式 correction（修改，更正）常出现在校对或账目调整中。",
        desc: "This information is correct."
    },
    {
        word: "council",
        pos: "名",
        ipa: "/ˈkaʊnsl/",
        cn: "委员会，理事会，地方议会",
        jp: "議会、評議会、委員会",
        family: "councils / councilor / councilman",
        tips: "常出现在公共事务、社区通告或市政规划听证会的语境中。例如 city council（市议会）批准某项开发提案。注意不要与发音相同的 counsel（法律顾问/建议）混淆。",
        desc: "The city council approved it."
    },
    {
        word: "suppose",
        pos: "動",
        ipa: "/səˈpoʊz/",
        cn: "料想，猜想，假定",
        jp: "思う、仮定する、〜することになっている",
        family: "supposed / supposedly / supposition / supposing",
        tips: "听力与阅读中极常考的动词。最核心的必考语法结构为 be supposed to do sth，表示“应该/理应做某事”，通常指根据规章制度、合同或计划应当履行的义务。",
        desc: "You are supposed to report it."
    },
    {
        word: "regular",
        pos: "形/名",
        ipa: "/ˈreɡjələr/",
        cn: "定期的，规律的；常客",
        jp: "定期的な、規則正しい；常連客",
        family: "regularly / regularity / regularize / irregular",
        tips: "基础且高频。常用于修饰 maintenance, meeting, updates（定期维护/定期会议/定期更新）。副词 regularly（定期地，规律地）是托业阅读第五部分常考的状态频度副词。",
        desc: "We hold regular meetings."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "original",
        category: "简单",
        stem: "The ________ copy of the contract is stored safely in the corporate vault.",
        options: ["original", "correct", "regular", "severe"],
        correct: "original",
        explanations: {
            guide: "形容词词义辨析。空格用于修饰名词 copy（副本/件），且前面有定冠词 The，需填入符合商业档案管理逻辑的形容词。",
            family: "original (adj.最初的/原件的) | correct (adj.正确的) | regular (adj.定期的) | severe (adj.严重的)。",
            details: "在公司金库（corporate vault）中妥善保存的，必然是合同的“原件/原始文本（original copy）”。其他选项无法合理解释妥善保存的动机。",
            cn: "合同的原件被安全地存放在公司的金库中。",
            jp: "契約書の原本（original copy）は、会社の金庫に安全に保管されています。"
        }
    },
    {
        id: 2,
        target: "selection",
        category: "简单",
        stem: "The gift shop in the hotel lobby offers a wide ________ of local souvenirs.",
        options: ["selection", "memo", "council", "registration"],
        correct: "selection",
        explanations: {
            guide: "固定搭配与名词辨析。空格位于限定词 a wide 与介词 of 之间，构成商务英语中表示“多样性/可供选择的范围”的经典短语。",
            family: "selection (n.选择/可供选择的事物) | memo (n.备忘录) | council (n.委员会) | registration (n.登记/注册)。",
            details: "a wide selection of... 是极其固定的商业高频搭配，意为“丰富多样的……”，多用于描述商店货品齐全。其他名词均无此搭配。",
            cn: "酒店大堂的礼品店提供丰富多样的当地纪念品供游客选择。",
            jp: "ホテルのロビーにあるギフトショップでは、地元の土産物が豊富に選べるよう（a wide selection of）取り揃えられています。"
        }
    },
    {
        id: 3,
        target: "attract",
        category: "简单",
        stem: "The new promotional campaign is designed to ________ more international tourists.",
        options: ["attract", "handle", "attach", "convert"],
        correct: "attract",
        explanations: {
            guide: "动词不定式词义辨析。is designed to 后面接动词原形，其后接宾语“更多国际游客（more international tourists）”，需要填入符合营销目的的动词。",
            family: "attract (v.吸引) | handle (v.处理) | attach (v.附上) | convert (v.转换)。",
            details: "开展新的宣传活动（promotional campaign）的直接目的，是为了“吸引（attract）”更多的国际游客。其他动作在语义上不合理。",
            cn: "这项新的宣传活动旨在吸引更多的国际游客。",
            jp: "新しいプロモーションキャンペーンは、より多くの外国人観光客を惹きつける（attract）ことを目的として設計されています。"
        }
    },
    {
        id: 4,
        target: "memo",
        category: "简单",
        stem: "The human resources manager sent a short ________ to remind employees about the holiday schedule.",
        options: ["memo", "council", "selection", "dispute"],
        correct: "memo",
        explanations: {
            guide: "行政办公场景名词辨析。空格作为动词 sent（发送）的直接宾语，前有形容词 short 修饰，后接不定式说明其目的是提醒员工假期安排。",
            family: "memo (n.备忘录/内部通知) | council (n.委员会) | selection (n.选择) | dispute (n.争议)。",
            details: "人事经理向员工发送的、用于提醒假期安排的书面通知，在办公语境中称为“内部通知/备忘录（memo）”。",
            cn: "人力资源部经理发送了一份简短的备忘录，以提醒员工注意假期安排。",
            jp: "人事マネージャーは、従業員に休暇スケジュールを再確認させるための短い社内連絡票（memo）を送りました。"
        }
    },
    {
        id: 5,
        target: "attach",
        category: "简单",
        stem: "Please remember to ________ a copy of your receipt to the travel expense claim form.",
        options: ["attach", "suppose", "correct", "determine"],
        correct: "attach",
        explanations: {
            guide: "祈使句动词及固定搭配辨析。remember to 后面需要接动词原形，并与后方的介词 to 构成将A附在B上的常见差旅报销搭配。",
            family: "attach (v.附上/连接) | suppose (v.料想) | correct (v.纠正/adj.正确的) | determine (v.决定/确定)。",
            details: "在填写差旅费报销单（travel expense claim form）时，财务流程通常要求“附上（attach）”收据副本，构成 attach A to B 结构。",
            cn: "请记得将您的收据副本附在差旅费报销单上。",
            jp: "出張経費精算書に領収書のコピーを添付する（attach）ことを忘れないでください。"
        }
    },
    {
        id: 6,
        target: "correct",
        category: "简单",
        stem: "Please check the numbers carefully to ensure that the billing statement is entirely ________.",
        options: ["correct", "original", "regular", "thorough"],
        correct: "correct",
        explanations: {
            guide: "主系表结构中的形容词辨析。空格位于系动词 is 和程度副词 entirely 之后，用于修饰主语 billing statement（账单），需具备状态准确含义。",
            family: "correct (adj.正确的/无误的) | original (adj.最初的) | regular (adj.规律的) | thorough (adj.彻底的)。",
            details: "仔细检查数字（check the numbers carefully）的直接目的，是为了确保账单是完全“准确无误的（correct）”。",
            cn: "请仔细核对数字，以确保账单完全正确。",
            jp: "請求書（billing statement）が完全に正しい（correct）ことを確認するために、数字を注意深くチェックしてください。"
        }
    },
    {
        id: 7,
        target: "handle",
        category: "中等",
        stem: "Our experienced customer service representatives are fully trained to ________ complicated inquiries efficiently.",
        options: ["handle", "attract", "suppose", "accommodate"],
        correct: "handle",
        explanations: {
            guide: "及物动词词义辨析。分析结构 fully trained to + 动词原形，其宾语为 complicated inquiries（复杂的咨询/投诉问题）。",
            family: "handle (v.处理/应付) | attract (v.吸引) | suppose (v.猜想) | accommodate (v.容纳/迎合)。",
            details: "客服代表（customer service representatives）接受培训的核心技能是“处理（handle）”客户提出的各种复杂咨询（inquiries）。等同于 deal with。",
            cn: "我们经验丰富的客户服务代表接受过充分的培训，能够高效地处理复杂的咨询问题。",
            jp: "当社の経験豊富なカスタマーサービス担当者は、複雑な問い合わせ（inquiries）に効率的に対応する（handle）ための十分なトレーニングを受けています。"
        }
    },
    {
        id: 8,
        target: "council",
        category: "中等",
        stem: "The town ________ will host a public hearing next Tuesday to discuss the proposed commercial expansion.",
        options: ["council", "memo", "selection", "subsidy"],
        correct: "council",
        explanations: {
            guide: "特定商务/公共行政场景主语辨析。空格与前面的 town 结合构成复合名词，作为整个句子的主语，其后续动作是主持听证会（host a public hearing）。",
            family: "council (n.委员会/议会) | memo (n.备忘录) | selection (n.选择) | subsidy (n.补贴)。",
            details: "能针对商业扩张提案（commercial expansion）主持召开“公众听证会（public hearing）”的官方行政主体通常是“镇议会/地方委员会（town council）”。",
            cn: "镇议会将于下周二举行公众听证会，讨论拟议的商业扩张计划。",
            jp: "町議会（town council）は、提案されている商業拡大計画について議論するため、来週の火曜日に公聴会を開催します。"
        }
    },
    {
        id: 9,
        target: "suppose",
        category: "中等",
        stem: "Employees are ________ to submit their weekly progress reports to the manager before Friday afternoon.",
        options: ["supposed", "attached", "attracted", "voted"],
        correct: "supposed",
        explanations: {
            guide: "固定语法结构与被动语态判定。句子结构为 are + 过去分词 + to do sth，考查职场规章制度下的义务表达。",
            family: "supposed (v.过去分词/假定) | attached (v.过去分词/附上) | attracted (v.过去分词/吸引) | voted (v.过去分词/表决)。",
            details: "be supposed to do sth 是托业中极为经典的职场高频句型，意为“理应/应该做某事”，此处指员工有义务在周五下午前提交周报。",
            cn: "员工应当在周五下午之前向经理提交他们的每周进度报告。",
            jp: "従業員は、金曜日の午後までに週間進捗報告書をマネージャーに提出することになっています（are supposed to submit）。"
        }
    },
    {
        id: 10,
        target: "regular",
        category: "中等",
        stem: "Conducting ________ maintenance on the factory appliances helps prevent unexpected operational disruptions.",
        options: ["regular", "correct", "original", "inclusive"],
        correct: "regular",
        explanations: {
            guide: "名词修饰语语境辨析。空格用于修饰动名词短语中的核心名词 maintenance（维护/保养），需要选择能说明维护频率的形容词。",
            family: "regular (adj.定期的/常规的) | correct (adj.正确的) | original (adj.最初的) | inclusive (adj.包容的/包含的)。",
            details: "为了防止工厂设备出现意外停机（operational disruptions），常规且科学的做法是进行“定期维护（regular maintenance）”。",
            cn: "对工厂设备进行定期维护有助于防止意外的运营中断。",
            jp: "工場の機器（appliances）に対して定期的なメンテナンス（regular maintenance）を行うことは、予期せぬ操縦中断を防ぐのに役立ちます。"
        }
    },
    {
        id: 11,
        target: "attract",
        category: "中等",
        stem: "The vibrant arts festival held annually in Chicago is a major tourist ________ for the region.",
        options: ["attraction", "attract", "attractive", "attractively"],
        correct: "attraction",
        explanations: {
            guide: "词性判定与名词短语辨析。空格前有不定冠词 a、形容词 major（主要的）和名词定语 tourist（游客），此处必须填入名词作表语。",
            family: "attraction (n.吸引力/景点) | attract (v.吸引) | attractive (adj.有吸引力的) | attractively (adv.迷人地)。",
            details: "tourist attraction 为旅游与零售场景下的超高频固定复合名词，意为“旅游景点 / 吸引游客的地方”。其他词性均无法作此处的名词中心语。",
            cn: "每年在芝加哥举行的充满活力的艺术节是该地区主要的旅游景点。",
            jp: "シカゴで毎年開催される活気にあふれた芸術祭は、この地域の主要な観光名所（tourist attraction）となっています。"
        }
    },
    {
        id: 12,
        target: "selection",
        category: "中等",
        stem: "The purchasing committee will ________ the most cost-effective vendor after reviewing all itemized quotes.",
        options: ["select", "selection", "selective", "selectively"],
        correct: "select",
        explanations: {
            guide: "谓语动词词性判定。句中 will 为情态助动词，其后必须紧跟动词原形充当整个句子的谓语，宾语为最划算的供应商。",
            family: "select (v.挑选/选择) | selection (n.选择) | selective (adj.有选择性的) | selectively (adv.有选择地)。",
            details: "分析句子结构，此处缺少动词原形。采购委员会在审阅了所有明细报价（itemized quotes）后的动作是“挑选（select）”供应商。",
            cn: "采购委员会在审查所有明细报价后，将挑选出最具性价比的供应商。",
            jp: "購買委員会は、すべての内訳見積もり（itemized quotes）を精査した後、最も費用対効果の高い業者を特定・選定（select）する予定です。"
        }
    },
    {
        id: 13,
        target: "original",
        category: "困难",
        stem: "The marketing team initially planned a small event, but the project has grown far beyond its ________ estimated scope.",
        options: ["originally", "original", "originality", "originate"],
        correct: "originally",
        explanations: {
            guide: "修饰语及副词位置判定。空格位于形容词/过去分词形式的 estimated（估计的）之前，用于修饰这个分词定语，需填入副词。",
            family: "originally (adv.起初/本来) | original (adj.最初的) | originality (n.独创性) | originate (v.发源)。",
            details: "originally estimated scope 意为“最初估计的规模”。副词 originally 在此精准地修饰过去分词/形容词 estimated，作复合定语修饰 scope。其他词性语法不通。",
            cn: "营销团队最初只计划举办一个小型活动，但该项目的规模已经远远超出了最初估计的范围。",
            jp: "マーケティングチームは当初小さなイベントを計画していましたが、プロジェクトは当初見込まれていた規模（originally estimated scope）を遥かに超えて拡大しました。"
        }
    },
    {
        id: 14,
        target: "attach",
        category: "困难",
        stem: "Please review the ________ document carefully before attending the contract arbitration meeting in Ohio.",
        options: ["attached", "attachment", "attach", "attaching"],
        correct: "attached",
        explanations: {
            guide: "过去分词作前置定语判定。空格在定冠词 the 与名词 document 之间，需要填入一个起形容词作用的词来修饰文件。",
            family: "attached (adj./过去分词，附带的) | attachment (n.附件) | attach (v.附上) | attaching (v.现在分词)。",
            details: "the attached document 意为“随信附上的文件 / 附件文件”，是典型的被动含义分词作定语。虽然 attachment 也是名词，但一般不用作 document 的前置修饰语（不会说 attachment document）。",
            cn: "在参加俄亥俄州的合同仲裁会议之前，请仔细审阅随信附上的文件。",
            jp: "オハイオ州での契約仲裁会議（arbitration meeting）に出席する前に、添付された書類（attached document）を注意深く確認してください。"
        }
    },
    {
        id: 15,
        target: "correct",
        category: "困难",
        stem: "After a thorough review of the financial records, the accountant made a necessary ________ to the quarterly balance sheet.",
        options: ["correction", "correct", "correctly", "corrective"],
        correct: "correction",
        explanations: {
            guide: "词性判定与动宾搭配。空格前有不定冠词 a 和形容词 necessary（必要的），作为动词 made 的直接宾语，此处必须填入名词。",
            family: "correction (n.纠正/更正) | correct (v./adj.纠正/正确的) | correctly (adv.正确地) | corrective (adj.纠正的)。",
            details: "make a correction to sth 是商业财会领域的固定搭配，意为“对……进行更正/修改”。会计师（accountant）在核对账目后做出的应是“更正（correction）”。",
            cn: "在对财务记录进行彻底审查后，会计师对季度资产负债表进行了必要的更正。",
            jp: "財務記録を徹底的に調査した後、会計士は四半期バランスシート（貸借対照表）に個別必要な修正（correction）を行いました。"
        }
    },
    {
        id: 16,
        target: "regular",
        category: "困难",
        stem: "Subscriptions to the industry journal are updated ________ to ensure readers receive the latest regulatory updates.",
        options: ["regularly", "regular", "regularity", "regularize"],
        correct: "regularly",
        explanations: {
            guide: "被动语态谓语后的副词修饰语判定。整个句子主谓完整（Subscriptions... are updated），空格位于句尾，用于修饰被动语态动词的发生频率。",
            family: "regularly (adv.定期地/规律地) | regular (adj.定期的) | regularity (n.规律性) | regularize (v.使合法化/条理化)。",
            details: "此处需要填入副词 regularly 来修饰动词短语 are updated，表示期刊的订阅内容是“定期/规律地（regularly）”被更新。其他词性均不符合此处的副词修饰功能。",
            cn: "该行业期刊的订阅内容会定期更新，以确保读者能收到最新的行业监管动态。",
            jp: "読者が最新の規制情報を受け取れるよう、この業界誌の購読内容は定期的に（regularly）更新されています。"
        }
    },
    {
        id: 17,
        target: "handle",
        category: "困难",
        stem: "Strict procedures have been established for the safe ________ of sensitive customer data encrypted on our servers.",
        options: ["handling", "handle", "handler", "handled"],
        correct: "handling",
        explanations: {
            guide: "介词宾语与动名词/不可数名词判定。空格前面是介词 for、定冠词 the 和形容词 safe（安全的），后面接 of 引导的介词短语，此处需要填入名词性成分。",
            family: "handling (n.处理/操纵) | handle (v.处理) | handler (n.处理者/搬运工) | handled (v.过去式)。",
            details: "the safe handling of sensitive customer data 意为“对敏感客户数据的安全处理/操作”。handling 在这里作为名词化动名词，指代某种业务行为或工序流程，非常符合托业信息安全语境。",
            cn: "针对存储在我们服务器上的加密敏感客户数据，已经建立了严格的安全处理程序。",
            jp: "当社のサーバー上で暗号化された（encrypted）機密性の高い顧客データの安全な取り扱い（safe handling）について、厳格な手順が確立されています。"
        }
    },
    {
        id: 18,
        target: "council",
        category: "困难",
        stem: "The municipal ________ members voted unanimously to grant a financial subsidy for the historic theater renovation.",
        options: ["council", "councilor", "councils", "counseled"],
        correct: "council",
        explanations: {
            guide: "名词作前置修饰语（复合名词）判定。空格后的 members 是主语核心名词，前面的 municipal（市政的）是形容词。此处需填入名词与 members 构成特定的专属职位称谓。",
            family: "council (n.委员会/议会) | councilor (n.议员) | councils (n.复数委员会) | counseled (v.过去式/建议)。",
            details: "municipal council members 构成了完整的专有名词短语，意为“市议会议员/市政委员会成员”。council 在此充当定语修饰 members，属于商业和公共管理公文的经典高阶表述。councilor 本身就表示议员，与 members 重叠，故排除。",
            cn: "市政委员会成员一致投票赞成拨出一笔财政补贴，用于这座历史悠久的剧院的翻修工程。",
            jp: "市議会（municipal council）のメンバーは、歴史的な劇場の改修に財政的補助金（subsidy）を交付することを満場一致で可決しました。"
        }
    }
];