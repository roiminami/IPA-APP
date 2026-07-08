// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data41-50.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "create",
        pos: "動",
        ipa: "/kriˈeɪt/",
        cn: "创造，创建，制作",
        jp: "〜を創造する、作り出す、作成する",
        family: "creation / creative / creativity / creator",
        tips: "托业高频商务搭配：create a new account（创建新账户），create a schedule（制定日程表）。",
        desc: "They will create a new plan."
    },
    {
        word: "budget",
        pos: "名/動",
        ipa: "/ˈbʌdʒɪt/",
        cn: "预算；制定预算",
        jp: "予算；予算を立てる",
        family: "budgetary / budgeting / affordable",
        tips: "常考复合名词：marketing budget（营销预算），annual budget（年度预算）。短语搭配：within budget（在预算内），over budget（超出预算）。",
        desc: "The marketing budget is small."
    },
    {
        word: "appointment",
        pos: "名",
        ipa: "/əˈpɔɪntmənt/",
        cn: "预约，约定；委任",
        jp: "約束、予約（面会的）；任命、指名",
        family: "appoint / appointee / appointed",
        tips: "托业核心短语：make an appointment（预约），schedule an appointment（安排预约）。注意与 reservation（预订座位/房间）的区别。",
        desc: "I have an appointment today."
    },
    {
        word: "additional",
        pos: "形",
        ipa: "/əˈdɪʃənl/",
        cn: "附加的，额外的",
        jp: "追加の、余分の",
        family: "addition / additionally / add",
        tips: "高频修饰语：additional cost / charge / fee（额外费用），additional information（附加信息）。常在Part 5作为修饰名词的形容词考查。",
        desc: "There is no additional charge."
    },
    {
        word: "application",
        pos: "名",
        ipa: "/ˌæplɪˈkeɪʃn/",
        cn: "申请，申请书；应用；应用程序",
        jp: "申请、応募、申し込み；応用；アプリ",
        family: "apply / applicant / applicable",
        tips: "求职和商务行政场景核心词：submit an application（提交申请），job application（求职申请表），application form（申请表）。",
        desc: "Please submit your job application."
    },
    {
        word: "production",
        pos: "名",
        ipa: "/prəˈdʌkʃn/",
        cn: "生产，产量；制作",
        jp: "生产、製造、生産高；制作",
        family: "produce / product / productive / productivity",
        tips: "制造工厂场景：production line（生产线），production cost（生产成本），halt production（停止生产）。",
        desc: "Factory production will start soon."
    },
    {
        word: "fee",
        pos: "名",
        ipa: "/fiː/",
        cn: "费用，服务费，酬金",
        jp: "料金、手数料、谢礼",
        family: "fees / charge / cost / fare",
        tips: "多指专业服务、入场、注册或手续费：late fee（滞纳金），registration fee（注册费），consulting fee（咨询费）。",
        desc: "The registration fee is low."
    },
    {
        word: "recommend",
        pos: "動",
        ipa: "/ˌrekəˈmend/",
        cn: "推荐，建议",
        jp: "〜を勧める、推荐する",
        family: "recommendation / recommended / commendable",
        tips: "高频句型：recommend that sb (should) do sth（宾语从句用动词原形，此处考查虚拟语气），highly recommend（强烈推荐）。",
        desc: "I highly recommend this book."
    },
    {
        word: "award",
        pos: "名/動",
        ipa: "/əˈwɔːrd/",
        cn: "奖，奖项；授予，颁发",
        jp: "賞、賞品；〜を授与する、賞を与える",
        family: "awards / awarded / awardee / reward",
        tips: "企业年会、表彰场景核心词：win an award（获奖），present an award（颁奖），annual award ceremony（年度颁奖典礼）。",
        desc: "She won a top award."
    },
    {
        word: "delay",
        pos: "名/動",
        ipa: "/dɪˈleɪ/",
        cn: "延迟，耽搁，延期",
        jp: "遅延、遅れ；〜を遅らせる、延期する",
        family: "delayed / delaying / postpone",
        tips: "交通、物流及项目工程高频场景：flight delay（航班延误），without delay（毫不耽搁），delay the shipment（延迟发货）。",
        desc: "Bad weather will delay the flight."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "campaign", pos: "名", ipa: "/kæmˈpeɪn/", cn: "活动，竞选活动", jp: "キャンペーン、運動" },
    { word: "fiscal", pos: "形", ipa: "/ˈfɪskl/", cn: "财政的，会计的", jp: "財政上の、会計の" },
    { word: "non-refundable", pos: "形", ipa: "/ˌnɑːnrɪˈfʌndəbl/", cn: "不可退款的", jp: "払い戻し不可能な" },
    { word: "halt", pos: "動/名", ipa: "/hɔːlt/", cn: "停止，中止", jp: "停止する、休止" },
    { word: "assembly", pos: "名", ipa: "/əˈsembli/", cn: "组装，集会", jp: "組み立て、集会" },
    { word: "thoroughly", pos: "副", ipa: "/ˈθɜːroʊli/", cn: "彻底地，详尽地", jp: "徹底的に、完全に" },
    { word: "banquet", pos: "名", ipa: "/ˈbæŋkwɪt/", cn: "宴会，晚宴", jp: "宴会、晩餐会" },
    { word: "constraints", pos: "名", ipa: "/kənˈstreɪnts/", cn: "限制，约束（复数）", jp: "制約、制限（複数形）" },
    { word: "renovations", pos: "名", ipa: "/ˌrenəˈveɪʃnz/", cn: "整修，翻新（复数）", jp: "改修、リフォーム（複数形）" },
    { word: "estimates", pos: "名", ipa: "/ˈestɪməts/", cn: "估算，预计（复数）", jp: "見積もり、予測（複数形）" },
    { word: "facilities", pos: "名", ipa: "/fəˈsɪlətiz/", cn: "设施，设备（复数）", jp: "施設、設備（複数形）" },
    { word: "boost", pos: "動/名", ipa: "/buːst/", cn: "提高，促进，推动", jp: "高める、促進する" },
    { word: "acquisition", pos: "名", ipa: "/ˌækwɪˈzɪʃn/", cn: "收购，获得", jp: "買収、獲得" },
    { word: "speculation", pos: "名", ipa: "/ˌspekjuˈleɪʃn/", cn: "推测，投机", jp: "推測、憶測" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "create",
        category: "简单",
        stem: "The design team needs to ________ a new logo for the upcoming branding campaign.",
        options: ["create", "creative", "production", "appointment"],
        correct: "create",
        explanations: {
            guide: "动词不定式结构。needs to 后面必须接动词原形作为谓语成分，结合句意选择 create（创造/设计）。",
            family: "create (v.创造) | creative (adj.有创造力的) | production (n.生产) | appointment (n.预约)。",
            details: "句意为‘设计团队需要为即将到来的品牌活动设计一个新标志’。creative 是形容词，不能用在不定式 to 后面充当主要动词。",
            cn: "设计团队需要为即将到来的品牌活动设计一个新标志。",
            jp: "デザインチームは、近く行われるブランディングキャンペーン（campaign）のために新しいロゴを制作（create）する必要があります。"
        }
    },
    {
        id: 2,
        target: "budget",
        category: "简单",
        stem: "The department manager approved the annual marketing ________ before the fiscal year started.",
        options: ["budget", "budgetary", "application", "fee"],
        correct: "budget",
        explanations: {
            guide: "复合名词中心语。marketing 与空格处的名词组合成高频商务短语 marketing budget（营销预算）。",
            family: "budget (n.预算) | budgetary (adj.预算的) | application (n.申请) | fee (n.费用)。",
            details: "此处需要名词担当宾语中心语。budgetary 是形容词，通常用来修饰其他名词（如 budgetary constraints），在此处不合语法结构要求。",
            cn: "部门经理在财政年度开始前批准了年度营销预算。",
            jp: "部門長は、会計年度（fiscal）が始まる前に年間のマーケティング予算（budget）を承認しました。"
        }
    },
    {
        id: 3,
        target: "appointment",
        category: "简单",
        stem: "Mr. Tanaka has a business ________ with the regional director tomorrow morning at ten o'clock.",
        options: ["appointment", "appoint", "delay", "award"],
        correct: "appointment",
        explanations: {
            guide: "不定冠词后的名词。a business 后面必须连接可数名词单数，表示商务性质的会面约定，选 appointment（预约/约会）。",
            family: "appointment (n.预约) | appoint (v.任命) | delay (v./n.延迟) | award (n./v.奖项)。",
            details: "have a business appointment with sb 为固定商务职场表达。appoint 为动词形式，在此处无法接受冠词修饰。",
            cn: "田中先生明天上午十点与区域总监有一个商务会面预约。",
            jp: "田中氏は明日午前10時に、地域ディレクターとのビジネスの約束（appointment）があります。"
        }
    },
    {
        id: 4,
        target: "additional",
        category: "简单",
        stem: "If you need ________ information regarding the conference schedule, please contact us.",
        options: ["additional", "addition", "recommend", "create"],
        correct: "additional",
        explanations: {
            guide: "形容词修饰名词。空格后为不可数名词 information（信息），前面需要形容词充当定语，选 additional（附加的/额外的）。",
            family: "additional (adj.附加的) | addition (n.增加) | recommend (v.推荐) | create (v.创造)。",
            details: "additional information 是托业阅读与听力中最常考的固定搭配。addition 是名词，不能直接放在名词前作定语修饰。",
            cn: "如果您需要关于会议日程的附加信息，请联系我们。",
            jp: "会議スケジュールに関する追加の（additional）情報が必要な場合は、当社までご連絡ください。"
        }
    },
    {
        id: 5,
        target: "application",
        category: "简单",
        stem: "Job seekers are required to submit their completed ________ form by email.",
        options: ["application", "apply", "production", "fee"],
        correct: "application",
        explanations: {
            guide: "复合名词固定搭配。空格与后面的 form 组合，指代“申请表”，固定商务英语词汇为 application form。",
            family: "application (n.申请) | apply (v.申请) | production (n.生产) | fee (n.费用)。",
            details: "submit their completed application form 意为提交他们填写完整的申请表。apply 是动词，不能作名词定语直接修饰 form。",
            cn: "求职者被要求通过电子邮件提交填写完整的申请表。",
            jp: "求職者は、記入済みの応募（application）用紙をメールで提出する必要があります。"
        }
    },
    {
        id: 6,
        target: "fee",
        category: "简单",
        stem: "Please note that the seminar registration ________ is non-refundable after next Friday.",
        options: ["fee", "fees", "budget", "award"],
        correct: "fee",
        explanations: {
            guide: "主谓一致与名词单复数。空格处为宾语从句的主语，由于系动词是单数形式 is，主语必须选择单数名词 fee（费用）。",
            family: "fee (n.费用/单数) | fees (n.费用/复数) | budget (n.预算) | award (n.奖项)。",
            details: "registration fee 意为注册费。虽然 fees 语义相同，但它是复数形式，与后面的单数动词 is 发生语法冲突，故排除。",
            cn: "请注意，研讨会注册费在下周五之后是不予退还的。",
            jp: "セミナーの参加登録料（fee）は、来週の金曜日以降は払い戻し不可能（non-refundable）となりますのでご注意ください。"
        }
    },
    {
        id: 7,
        target: "production",
        category: "中等",
        stem: "The plant supervisor decided to halt ________ temporarily to perform maintenance on the assembly lines.",
        options: ["production", "productive", "create", "application"],
        correct: "production",
        explanations: {
            guide: "及物动词的宾语成分。halt（停止）是及物动词，后面需要填入名词作为它的直接宾语，根据工厂环境选 production（生产）。",
            family: "production (n.生产) | productive (adj.多产的) | create (v.创造) | application (n.申请)。",
            details: "halt production 意为“停止生产”，是典型的工厂制造类商务考点。productive 是形容词，不能作动词宾语。",
            cn: "工厂主管决定暂时停止生产，以便对装配线进行维护。",
            jp: "工場の管理職は、組立ライン（assembly lines）のメンテナンスを行うため、一時的に製造（production）を停止（halt）することを決定しました。"
        }
    },
    {
        id: 8,
        target: "recommend",
        category: "中等",
        stem: "Our corporate legal consultants strongly ________ that we review the contract terms thoroughly.",
        options: ["recommend", "recommendation", "appointment", "additional"],
        correct: "recommend",
        explanations: {
            guide: "主谓一致与宾语从句。主语是复数名词 consultants（顾问），副词 strongly 后面需要接复数谓语动词，后接 that 从句，选 recommend（建议）。",
            family: "recommend (v.建议) | recommendation (n.建议书) | appointment (n.预约) | additional (adj.附加的)。",
            details: "consultants strongly recommend that... 意为“顾问强烈建议……”。recommendation 为名词形式，无法直接引导完整的宾语从句。",
            cn: "我们的公司法律顾问强烈建议我们彻底审查合同条款。",
            jp: "当社の法務コンサルタント（consultants）は、契約条件を徹底的に（thoroughly）見直すことを強く推奨（recommend）しています。"
        }
    },
    {
        id: 9,
        target: "award",
        category: "中等",
        stem: "The chief executive officer will present the employee of the year ________ during tonight's banquet.",
        options: ["award", "awarded", "fee", "delay"],
        correct: "award",
        explanations: {
            guide: "定冠词加名词的宾语结构。will present（将颁发）是及物动词结构，后面需要名词作中心语，employee of the year award 意为“年度优秀员工奖”。",
            family: "award (n.奖项) | awarded (v-ed已授予的) | fee (n.费用) | delay (n./v.延迟)。",
            details: "此处特指一个奖项名称。awarded 是过去分词，在此处充当中心语会导致语义断裂且不符合冠词修饰规律。",
            cn: "首席执行官将在今晚的宴会上颁发年度优秀员工奖。",
            jp: "最高経営責任者は、今夜の晩餐会（banquet）で、年間最優秀社員賞（award）を授与する予定です。"
        }
    },
    {
        id: 10,
        target: "delay",
        category: "中等",
        stem: "Unexpected shipping problems at the harbor will inevitably ________ the delivery of our raw materials.",
        options: ["delay", "delayed", "budget", "recommend"],
        correct: "delay",
        explanations: {
            guide: "情态动词后的动词原形。will 加上副词 inevitably 之后，必须补充动词原形作为谓语动词，结合物流受阻背景选 delay（耽搁/延迟）。",
            family: "delay (v.延迟) | delayed (adj./v-ed已延迟的) | budget (v./n.预算) | recommend (v.推荐)。",
            details: "will inevitably delay the delivery 意为“不可避免地延误交货”。delayed 是过去式或分词形式，不符合情态动词后接动词原形的规范。",
            cn: "港口意想不到的运输问题将不可避免地延误我们原材料的交付。",
            jp: "港での予期せぬ輸送トラブルにより、原材料の配送が不可避的に遅れる（delay）ことになります。"
        }
    },
    {
        id: 11,
        target: "create",
        category: "中等",
        stem: "The marketing director is looking for a highly ________ individual to lead the new advertising project.",
        options: ["creative", "create", "production", "additional"],
        correct: "creative",
        explanations: {
            guide: "副词修饰形容词定语。空格前有副词 highly（高度地），后面是名词 individual（个人），需要填入形容词修饰人，选 creative（有创造力的）。",
            family: "creative (adj.有创造力的) | create (v.创造) | production (n.生产) | additional (adj.额外的)。",
            details: "a highly creative individual 意为“一个极具创造力的人”。create 是动词，不能接受副词 highly 的直接修饰去充当名词定语。",
            cn: "营销总监正在寻找一位极具创造力的人来领导这个新的广告项目。",
            jp: "マーケティングディレクターは、新しい広告プロジェクトを率いる、非常にクリエイティブな（creative）人材（individual）を探しています。"
        }
    },
    {
        id: 12,
        target: "budget",
        category: "中等",
        stem: "Due to strict ________ constraints, the research department cannot purchase new laboratory instruments this quarter.",
        options: ["budgetary", "budget", "application", "fee"],
        correct: "budgetary",
        explanations: {
            guide: "形容词修饰名词定语。空格后为名词 constraints（限制/约束），前面需要形容词作定语，固定商务搭配为 budgetary constraints（预算限制）。",
            family: "budgetary (adj.预算的) | budget (n.预算) | application (n.申请) | fee (n.费用)。",
            details: "Due to strict budgetary constraints 意为“由于严格的预算限制”。虽然名词 budget 有时可作定语，但在修饰 constraints 时，官方标准商务文本惯用形容词形式 budgetary。",
            cn: "由于严格的预算限制，研发部门本季度无法购买新的实验室仪器。",
            jp: "厳格な予算上の（budgetary）制約（constraints）により、研究部門は今四半期、新しい実験器具を購入することができません。"
        }
    },
    {
        id: 13,
        target: "additional",
        category: "困难",
        stem: "The contractor finished the office renovations on time; ________, the total expenses remained well within the initial estimates.",
        options: ["additionally", "additional", "recommend", "create"],
        correct: "additionally",
        explanations: {
            guide: "副词引导分句状语。分号后面需要一个副词来修饰整个句子并表达顺接递进逻辑，功能等同于 furthermore，选 additionally（此外/而且）。",
            family: "additionally (adv.此外) | additional (adj.附加的) | recommend (v.推荐) | create (v.创造)。",
            details: "additionally 放在句首用逗号隔开，修饰后面的完整分句。additional 是形容词，不能在没有修饰目标名词的情况下独立充当句首状语。",
            cn: "承包商按时完成了办公室的整修；此外，总费用也很好地控制在了最初的预算估计之内。",
            jp: "請負業者はオフィスの改装（renovations）を予定通りに完了しました。さらに（additionally）、総費用は当初の見積もり（estimates）内に収まりました。"
        }
    },
    {
        id: 14,
        target: "application",
        category: "困难",
        stem: "The revised safety regulations are ________ to all manufacturing facilities operating within the region.",
        options: ["applicable", "application", "production", "appointment"],
        correct: "applicable",
        explanations: {
            guide: "系动词后的形容词表语。are 后面需要形容词充当表语，且能够与介词 to 搭配，构成 be applicable to 结构（适用于……）。",
            family: "applicable (adj.适用的) | application (n.申请/应用) | production (n.生产) | appointment (n.预约)。",
            details: "are applicable to all manufacturing facilities 意为“适用于所有制造设施”。application 是名词，无法与 are to 构成具有“适用”含义的表语架构。",
            cn: "修改后的安全规章适用于该区域内运营的所有制造设施。",
            jp: "改定された安全規制は、この地域内で稼働しているすべての製造施設（facilities）に適用され（applicable）ます。"
        }
    },
    {
        id: 15,
        target: "production",
        category: "困难",
        stem: "The human resources department implemented flexible working hours to boost employee ________ and satisfaction.",
        options: ["productivity", "production", "create", "award"],
        correct: "productivity",
        explanations: {
            guide: "名词语义转化与派生考点。空格与前面的 employee 结合，且与并列的名词 satisfaction（满意度）保持并列逻辑，表示“员工生产力/工作效率”，选 productivity。",
            family: "productivity (n.生产力) | production (n.产量/制造) | create (v.创造) | award (n.奖项)。",
            details: "employee productivity 属于资深商务人力资源考核核心词汇。而 production 多指工厂宏观货物的“产量”或“制作”，修饰员工个人效能时不合适。",
            cn: "人力资源部实行了弹性工作时间，以提高员工的生产力与满意度。",
            jp: "人事部は、従業員の生産性（productivity）と満足度を高める（boost）ために、フレックスタイム制を導入しました。"
        }
    },
    {
        id: 16,
        target: "recommend",
        category: "困难",
        stem: "The board of directors approved the acquisition following a formal ________ from the financial planning committee.",
        options: ["recommendation", "recommend", "budget", "delay"],
        correct: "recommendation",
        explanations: {
            guide: "不定冠词与形容词后的名词。a formal 后面必须填入名词单数作为核心宾语，表示“一份正式的建议/推荐”，选 recommendation。",
            family: "recommendation (n.推荐/建议) | recommend (v.建议) | budget (n.预算) | delay (n./v.延迟)。",
            details: "following a formal recommendation from... 意为“在听取了来自……的正式建议之后”。recommend 是动词，在此词性不符。",
            cn: "董事会在听取了财务规划委员会的正式建议后，批准了这项收购。",
            jp: "取締役会は、財務計画委員会からの正式な勧告（recommendation）を受けて、買収（acquisition）を承認しました。"
        }
    },
    {
        id: 17,
        target: "appointment",
        category: "困难",
        stem: "The newly ________ committee chairperson scheduled an urgent assembly to discuss the sudden structural reorganization.",
        options: ["appointed", "appointment", "additional", "fee"],
        correct: "appointed",
        explanations: {
            guide: "副词后的过去分词充当定语。The newly ________ committee chairperson 结构中，newly 为副词，空格处需填入过去分词形式作前置定语修饰 chairperson，表示“新被任命的”。",
            family: "appointed (v-ed新任命的) | appointment (n.委任/预约) | additional (adj.额外的) | fee (n.费用)。",
            details: "newly appointed chairperson 属于董事会及高层治理常见表达。名词 appointment 不能被副词 newly 直接修饰，且无法在此充当定语功能。",
            cn: "新任命的委员会主席安排了一次紧急会议，以讨论突然的结构重组。",
            jp: "新しく任命された（appointed）委員会委員長（chairperson）は、急な組織再編（reorganization）を議論するための緊急集会を予定しました。"
        }
    },
    {
        id: 18,
        target: "delay",
        category: "困难",
        stem: "The ________ announcement of the quarterly earnings statement caused widespread speculation among stock market analysts.",
        options: ["delayed", "delay", "award", "application"],
        correct: "delayed",
        explanations: {
            guide: "定冠词后的形容词/分词定语成分。The ________ announcement 中，空格处修饰名词 announcement（公告），需要填入分词形式作定语表达“被延迟的”，选 delayed。",
            family: "delayed (adj.延期的) | delay (n./v.延迟) | award (n.奖项) | application (n.申请)。",
            details: "delayed announcement 意为“推迟的公告”。名词或动词原形 delay 无法直接以单数原形放在定冠词与名词之间充当具有被动意味的修饰成分。",
            cn: "季度财报声明的推迟公布引发了股票市场分析师的广泛推测。",
            jp: "四半期決算発表（earnings statement）の遅れた（delayed）公表は、株式市場アナリストの間で広範な憶测（speculation）を引き起こしました。"
        }
    }
];