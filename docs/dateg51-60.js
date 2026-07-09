// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag1-10.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "create",
        pos: "動",
        ipa: "/kriˈeɪt/",
        cn: "创建，创造，制作",
        jp: "作成する、創造する",
        family: "creation / creative / creativity / creator",
        tips: "商务办公高频动词。常用于建立新项目、制作文件或制定策略（例如：create a new account / create a template）。其形容词形式 creative 亦常考于广告或设计岗位描述中。",
        desc: "We need to create a new file."
    },
    {
        word: "budget",
        pos: "名/動/形",
        ipa: "/ˈbʌdʒɪt/",
        cn: "预算；制定预算；低廉的",
        jp: "予算；予算を立てる；格安の",
        family: "budgetary / budgeting / budgeted",
        tips: "托业核心财务场景词。作名词常考 tight budget（紧凑的预算）或 approval of the budget（预算批准）。作形容词修饰名词时考查 budgetary constraints（预算限制）。",
        desc: "The project has a tight budget."
    },
    {
        word: "appointment",
        pos: "名",
        ipa: "/əˈpɔɪntmənt/",
        cn: "预约，约会；任命",
        jp: "約束、予約；任命",
        family: "appoint / appointed / appointee",
        tips: "主要用于人与人之间商务会面或看医生的“预约”（如：make an appointment）。注意与 hotel reservation（酒店预订）或 flight booking（机票预订）区分开来。",
        desc: "I have an appointment at three."
    },
    {
        word: "additional",
        pos: "形",
        ipa: "/əˈdɪʃənl/",
        cn: "额外的，附加的",
        jp: "追加の、余分の",
        family: "addition / additionally / add",
        tips: "常考前置定语修饰名词，表示额外产生的费用或提供补充信息（例如：additional charge 额外收费，additional information 补充信息）。其副词 additionally 常用作句首逻辑衔接词。",
        desc: "There is an additional charge."
    },
    {
        word: "application",
        pos: "名",
        ipa: "/ˌæplɪˈkeɪʃn/",
        cn: "申请，申请书；应用",
        jp: "申請、応募、申請書；応用",
        family: "apply / applicant / applicable",
        tips: "职场与求职场景核心词。常考短语包括：submit a job application（提交职位申请书）。其派生词 applicant（申请人）与形容词 applicable（可适用的，常见 be applicable to）均为高频考点。",
        desc: "Please submit your job application."
    },
    {
        word: "fee",
        pos: "名",
        ipa: "/fiː/",
        cn: "费用，服务费，酬金",
        jp: "料金、手数料、謝礼",
        family: "fees",
        tips: "特指服务、专业咨询、入门入场或手续所收取的费用（如：processing fee 手续费，membership fee 会费）。要与 fare（交通票价）和 price（商品价格）进行场景区分。",
        desc: "The entrance fee is ten dollars."
    },
    {
        word: "recommend",
        pos: "動",
        ipa: "/ˌrekəˈmend/",
        cn: "推荐，建议",
        jp: "薦める、推奨する",
        family: "recommendation / recommended",
        tips: "经典句型为 recommend that + 主语 + (should) + 动词原形（虚拟语气结构）。其名词形式常见于求职信件：letter of recommendation（推荐信）。",
        desc: "I highly recommend this book."
    },
    {
        word: "award",
        pos: "名/動",
        ipa: "/əˈwɔːrd/",
        cn: "奖，奖品；授予，颁发",
        jp: "賞、賞品；授与する、賞を与える",
        family: "awarded / awardee / awarding",
        tips: "作动词时常用于双宾语或被动语态结构：be awarded a contract（被授予合同/中标）或 award sb a prize。名词形式常考 win an award（获奖）。",
        desc: "She won the top employee award."
    },
    {
        word: "delay",
        pos: "動/名",
        ipa: "/dɪˈleɪ/",
        cn: "延迟，耽搁，延期",
        jp: "遅らせる、延期する；遅れ、延滞",
        family: "delayed / delaying",
        tips: "交通或项目进度场景核心词。作动词时后接动名词作宾语（delay doing sth）。作名词时常与 without 连用（without delay 毫不耽搁地），听力中常见 flight delay（航班延误）。",
        desc: "The heavy rain caused a delay."
    },
    {
        word: "confirm",
        pos: "動",
        ipa: "/kənˈfɜːrm/",
        cn: "确认，证实",
        jp: "確認する、確証する",
        family: "confirmation / confirmed / confirming",
        tips: "商务书信与日常办公的高频动词，意为对已有的预订、安排或会议进行最终确认（例如：confirm a reservation / confirm the meeting schedule）。名词 confirmation 常考 written confirmation（书面确认）。",
        desc: "Please confirm your flight details."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "create",
        category: "简单",
        stem: "The graphic design team wants to ________ a new corporate logo for the upcoming branding campaign.",
        options: ["create", "budget", "appointment", "fee"],
        correct: "create",
        explanations: {
            guide: "情态动词后的动词原形。wants to 后面需要接动词原形作为核心谓语，结合宾语 a new corporate logo，选择表示“创建/设计”的动词 create。",
            family: "create (v.创建) | budget (v./n.预算) | appointment (n.预约) | fee (n.费用)。",
            details: "在四个核心词选项中，只有 create 能与“设计新标志”形成最符合商务运作逻辑的动宾搭配。",
            cn: "平面设计团队希望为即将到来的品牌宣传活动设计一个全新的公司标志。",
            jp: "グラフィックデザインチームは、近く開催されるブランディングキャンペーンのために、新しい企業ロゴを作成（create）したいと考えています。"
        }
    },
    {
        id: 2,
        target: "budget",
        category: "简单",
        stem: "The department manager needs to approve the annual ________ before purchasing any new office furniture.",
        options: ["budget", "delay", "recommend", "application"],
        correct: "budget",
        explanations: {
            guide: "形容词后的名词中心语。the annual（每年的）后面需要搭配一个名词作 approve 的宾语，根据购买办公家具的上下文，选择 budget（预算）。",
            family: "budget (n.预算) | delay (n./v.延迟) | recommend (v.推荐) | application (n.申请)。",
            details: "approve the annual budget 属于典型的商务场景固定搭配，指批准年度预算。其他词汇在语意上无法与“批准年发”和“购买”顺畅衔接。",
            cn: "在购买任何新办公家具之前，部门经理需要批准年度预算。",
            jp: "部門マネージャーは、新しいオフィス家具を購入する前に、年間予算（budget）を承認する必要があります。"
        }
    },
    {
        id: 3,
        target: "appointment",
        category: "简单",
        stem: "Please call the front desk if you need to reschedule your afternoon ________ with the financial advisor.",
        options: ["appointment", "fee", "award", "additional"],
        correct: "appointment",
        explanations: {
            guide: "物主代词与时间名词后的核心词。afternoon 在此充当定语，修饰空格处的名词，结合“与财务顾问会面”的语境，选 appointment（预约）。",
            family: "appointment (n.预约) | fee (n.费用) | award (n.奖) | additional (adj.额外的)。",
            details: "reschedule your appointment 是职场日程安排的绝对高频搭配，意为重新调整预约时间。additional 是形容词，不能直接放在此处作名词宾语。",
            cn: "如果您需要重新安排下午与财务顾问的会面预约，请致电前台。",
            jp: "ファイナンシャルアドバイザーとの午後の約束（appointment）を変更する必要がある場合は、受付にお電話ください。"
        }
    },
    {
        id: 4,
        target: "fee",
        category: "简单",
        stem: "Please note that a small processing ________ will be added to all credit card transactions.",
        options: ["fee", "create", "confirm", "delay"],
        correct: "fee",
        explanations: {
            guide: "复合名词定语修饰及主语识别。空格前有不定冠词 a 和分词定语 processing，此处需要一个名词作主语，表达收取的“手续费”，选 fee。",
            family: "fee (n.费用) | create (v.创建) | confirm (v.确认) | delay (v./n.延迟)。",
            details: "processing fee 为托业商务财务场景专属名词，表示手续费或加工费。create 和 confirm 是动词，无法充当名词主语中心语。",
            cn: "请注意，所有信用卡交易都将加收一笔小额的手续费。",
            jp: "すべてのクレジットカード取引には、少額の手数料（fee）が加算されますのでご注意ください。"
        }
    },
    {
        id: 5,
        target: "recommend",
        category: "简单",
        stem: "Most senior consultants ________ that we review the market data carefully before launching the product.",
        options: ["recommend", "application", "budget", "appointment"],
        correct: "recommend",
        explanations: {
            guide: "主谓结构及宾语从句引导词。主语为复数名词 consultants，空格处缺少核心谓语动词，后面带有一个由 that 引导的完整从句，选 recommend。",
            family: "recommend (v.建议/推荐) | application (n.申请) | budget (n./v.预算) | appointment (n.预约)。",
            details: "recommend that + 句子 是经典的“建议做某事”句型，其中谓语 review 实际省略了 should，为动词原形。其他选项均为名词，无法引导该从句。",
            cn: "大多数高级顾问建议，我们在发布产品之前要仔细审查市场数据。",
            jp: "大半のシニアコンサルタントは、製品を発売する前に市場データを注意深く検討することを推奨（recommend）しています。"
        }
    },
    {
        id: 6,
        target: "delay",
        category: "简单",
        stem: "The unexpected technical problems will ________ the release of our new software by at least two weeks.",
        options: ["delay", "create", "fee", "additional"],
        correct: "delay",
        explanations: {
            guide: "情态动词后的核心动词辨析。will 后面需要接动词原形，结合“技术问题（technical problems）”和“发布推迟两周”的语境，选 delay。",
            family: "delay (v./n.延迟) | create (v.创建) | fee (n.费用) | additional (adj.额外的)。",
            details: "unexpected technical problems 会导致项目“延期（delay）”。fee 和 additional 词性不符，create 无法与被耽搁两周的负面语境匹配。",
            cn: "突如其来的技术问题将把我们新软件的发布时间推迟至少两周。",
            jp: "予期せぬ技術的な問題により、新しいソフトウェアのリリースが少なくとも2週間遅れる（delay）ことになります。"
        }
    },
    {
        id: 7,
        target: "additional",
        category: "中等",
        stem: "The contract states that any ________ tasks requested by the client will require a separate agreement.",
        options: ["additional", "addition", "application", "recommend"],
        correct: "additional",
        explanations: {
            guide: "限定词后的形容词修饰。空格位于代词 any 与复数名词 tasks 之间，需要填入一个形容词作前置定语，表示“额外的”任务，选 additional。",
            family: "additional (adj.额外的) | addition (n.增加物) | application (n.申请) | recommend (v.推荐)。",
            details: "any additional tasks 意为任何额外追加的任务，符合合同条款的常规商务描述。addition 为名词，不能在此位置直接修饰复数名词 tasks。",
            cn: "合同规定，客户要求的任何额外任务都将需要签署一份单独的协议。",
            jp: "契約書には、クライアントから要求された追加の（additional）業務には別途合意が必要であると記載されています。"
        }
    },
    {
        id: 8,
        target: "application",
        category: "中等",
        stem: "To apply for the position, candidates must submit a completed online ________ along with three reference letters.",
        options: ["application", "applicant", "budget", "fee"],
        correct: "application",
        explanations: {
            guide: "动宾搭配及职场名词辨析。submit 后面需要接名词作宾语，结合前面的形容词 completed online（填好的线上的），选择 application（申请表/书）。",
            family: "application (n.申请) | applicant (n.申请人) | budget (n.预算) | fee (n.费用)。",
            details: "submit an application 是职场求职高频搭配。虽然 applicant 也是名词，但它指代“申请人（指人）”，无法被 completed online 修饰作为提交的材料物品。",
            cn: "要申请该职位，应聘者必须在网上提交一份完整的在线申请表以及三封推荐信。",
            jp: "この職募に応募するには、候補者は3通の推薦状と一緒に、記入済みのオンライン申請書（application）を提出しなければなりません。"
        }
    },
    {
        id: 9,
        target: "award",
        category: "中等",
        stem: "Mr. Reynolds was delighted to accept the prestigious Employee of the Year ________ at last night's gala.",
        options: ["award", "appointment", "delay", "confirm"],
        correct: "award",
        explanations: {
            guide: "定冠词后的专有名词中心语。空格前有定冠词 the 以及专有头衔 Employee of the Year，需要填入名词表达“年度优秀员工奖”，选 award。",
            family: "award (n.奖/v.授予) | appointment (n.预约/任命) | delay (n./v.延迟) | confirm (v.确认)。",
            details: "Employee of the Year award 属于标准的商务表彰大会专有名词。在晚宴上，通常是去接受荣誉和“奖项（award）”。",
            cn: "雷诺兹先生很高兴在昨晚的盛大晚宴上接受了久负盛名的“年度优秀员工奖”。",
            jp: "レイノルズ氏は、昨夜のガラパーティーで、名誉ある年間最優秀社員賞（award）を喜んで受け取りました。"
        }
    },
    {
        id: 10,
        target: "confirm",
        category: "中等",
        stem: "The client services representative called this morning to ________ the details of the catering order.",
        options: ["confirm", "create", "additional", "recommend"],
        correct: "confirm",
        explanations: {
            guide: "动词不定式表示目的。called this morning to 后面需要接动词原形来表达打电话的目的，根据“核对订单细节”的日常商务习惯，选 confirm（确认）。",
            family: "confirm (v.确认) | create (v.创建) | additional (adj.额外的) | recommend (v.推荐)。",
            details: "to confirm the details of the catering order 意为打电话来最终核对/确认餐饮订单的细节。additional 词性错误，其他动词在此处语意不够精准顺畅。",
            cn: "客户服务代表今天早上打电话来，是为了确认餐饮订单的细节。",
            jp: "顧客サービス担当者は、ケータリング注文の詳細を確認（confirm）するために、今朝電話をかけました。"
        }
    },
    {
        id: 11,
        target: "additional",
        category: "中等",
        stem: "The shipping department announced that the package was ________ wrapped to prevent damage during transit.",
        options: ["additionally", "additional", "addition", "application"],
        correct: "additionally",
        explanations: {
            guide: "副词修饰分词/形容词用法。空格位于系动词 was 之后、过去分词 wrapped（包装）之前，需要一个副词来修饰分词，表示“额外地”进行了包裹，选 additionally。",
            family: "additionally (adv.额外地) | additional (adj.额外的) | addition (n.增加物) | application (n.申请)。",
            details: "additionally wrapped 说明了为了防止运输损坏而对包裹进行的额外保护处理。additional 是形容词，无法修饰过去分词 wrapped。",
            cn: "运输部门宣布，该包裹已进行了额外的包装，以防止在运输过程中损坏。",
            jp: "配送部門は、輸送中の破損を防ぐために、荷物が追加で（additionally）梱包されていると発表しました。"
        }
    },
    {
        id: 12,
        target: "application",
        category: "中等",
        stem: "More than fifty qualified ________ submitted their resumes for the regional manager position.",
        options: ["applicants", "application", "applicable", "appoint"],
        correct: "applicants",
        explanations: {
            guide: "数词及形容词修饰可数名词复数。More than fifty qualified（五十多位合格的）要求后面必须搭配可数名词复数形式，且主语发出 submitted resumes（提交简历）的动作，指代“应聘者”，选 applicants。",
            family: "applicants (n.申请人-复数) | application (n.申请书) | applicable (adj.可适用的) | appoint (v.任命)。",
            details: "本题考查人与物的名词属性辨析。提交简历的必然是具体的人（applicants），而非抽象的申请书（application）。",
            cn: "五十多名合格的应聘者为区域经理这一职位提交了简历。",
            jp: "50人以上の資格を満たした応募者（applicants）が、地域マネージャー職に履歴書を提出しました。"
        }
    },
    {
        id: 13,
        target: "recommend",
        category: "困难",
        stem: "After reviewing the proposal, the committee made a strong ________ to expand operations into Asian markets.",
        options: ["recommendation", "recommend", "recommended", "creation"],
        correct: "recommendation",
        explanations: {
            guide: "固定动宾名词短语搭配。空格前有不定冠词 a 和形容词 strong，空格处必须为名词。与动词 made 组合构成短语“提出强烈建议”，选 recommendation。",
            family: "recommendation (n.建议/推荐) | recommend (v.推荐) | recommended (adj.被推荐的) | creation (n.创造)。",
            details: "make a recommendation to do sth 是托业官方常考的商务高阶固定搭配。虽然 creation 也是名词，但委员会针对提案做出的动作是提议而非创造。",
            cn: "在审查提案后，委员会提出了将业务扩展到亚洲市场的强烈建议。",
            jp: "提案書を検討した後、委員会はアジア市場へ事業を拡大することについて強い推奨（recommendation）を行いました。"
        }
    },
    {
        id: 14,
        target: "confirm",
        category: "困难",
        stem: "We are currently awaiting written ________ from the vendor before processing the final payment.",
        options: ["confirmation", "confirm", "appointment", "budget"],
        correct: "confirmation",
        explanations: {
            guide: "形容词后的名词成分及商务书信高阶搭配。空格被形容词 written（书面的）所修饰，作为 awaiting 的宾语中心语，选名词 confirmation。",
            family: "confirmation (n.确认) | confirm (v.确认) | appointment (n.预约) | budget (n.预算)。",
            details: "written confirmation 意为“书面确认”，是商务采购流程中不可或缺的法律凭证。confirm 为动词，无法被形容词直接修饰。",
            cn: "在处理最终付款之前，我们目前正在等待供应商的书面确认。",
            jp: "最終支払いを処理する前に、現在、ベンダーからの書面による確認（confirmation）を待っています。"
        }
    },
    {
        id: 15,
        target: "budget",
        category: "困难",
        stem: "Due to severe ________ constraints, the marketing team had to cancel the television advertisement campaign.",
        options: ["budgetary", "budget", "budgeting", "additional"],
        correct: "budgetary",
        explanations: {
            guide: "高阶商务派生词修饰。空格修饰复数名词 constraints（限制/约束），在此处需要一个特定的形容词来表征财务属性，选 budgetary（预算的）。",
            family: "budgetary (adj.预算的) | budget (n./v.预算) | budgeting (n.预算编制) | additional (adj.额外的)。",
            details: "budgetary constraints 是高级商务英语汇报中的固定专属术语，意为预算限制/资金短缺。虽然 budget 也能作定语，但在托业高阶题中，专门的形容词形式 budgetary 为首选。",
            cn: "由于严格的预算限制，营销团队不得不取消电视广告宣传活动。",
            jp: "深刻な予算上の（budgetary）制約のため、マーケティングチームはテレビ広告キャンペーンを中止せざるを得ませんでした。"
        }
    },
    {
        id: 16,
        target: "create",
        category: "困难",
        stem: "The advertising agency is looking for highly ________ individuals who can develop unique promotional strategies.",
        options: ["creative", "create", "creation", "delay"],
        correct: "creative",
        explanations: {
            guide: "副词修饰形容词作定语。空格前有程度副词 highly（高度地），后有名词 individuals（个人/人才），此处必须填入形容词修饰人，选 creative（有创造力的）。",
            family: "creative (adj.有创造力的) | create (v.创建) | creation (n.创造) | delay (n./v.延迟)。",
            details: "highly creative individuals 意为高度有创造力的人才，非常符合广告代理公司（advertising agency）的招聘文案语境。creation 是名词，不能在此作前置定语修饰人。",
            cn: "这家广告公司正在寻找能够制定出独特促销策略的高素质、富有创造力的人才。",
            jp: "その広告代理店は、独自のプロモーション戦略を展開できる、非常にクリエイティブな（creative）人材を探しています。"
        }
    },
    {
        id: 17,
        target: "appointment",
        category: "困难",
        stem: "The newly ________ director will assume full responsibility for the company's international operations next month.",
        options: ["appointed", "appoint", "appointment", "award"],
        correct: "appointed",
        explanations: {
            guide: "过去分词充当形容词作前置定语。空格前有副词 newly（新近地），后有名词 director（主管），此处需填入过去分词表达被动职位状态，选 appointed（被任命的）。",
            family: "appointed (adj./v-ed被任命的) | appoint (v.任命) | appointment (n.任命/预约) | award (n./v.奖/授予)。",
            details: "the newly appointed director 指新上任的/新被任命的主管，属于 Part 5 语法高频难题结构。appointment 为名词，不能被副词 newly 直接修饰。",
            cn: "新任命的董事将于下个月开始全权负责公司的国际业务。",
            jp: "新しく任命された（appointed）取締役は、来月、会社の海外事業に対して全責任を負うことになります。"
        }
    },
    {
        id: 18,
        target: "application",
        category: "困难",
        stem: "The updated safety regulations are ________ to all manufacturing facilities operating within the industrial zone.",
        options: ["applicable", "application", "apply", "fee"],
        correct: "applicable",
        explanations: {
            guide: "高阶形容词及固定介词搭配。空格在系动词 are 后面作表语，且句中带有介词 to，构成短语“适用于……”，选形容词 applicable。",
            family: "applicable (adj.可适用的) | application (n.申请/应用) | apply (v.应用/申请) | fee (n.费用)。",
            details: "be applicable to sth 意为适用于某事物，通常用于规章、法律或条款涵盖特定范围的说明。其他选项无法在该结构下构成正确的语法与逻辑。",
            cn: "更新后的安全条例适用于在工业区内运营的所有制造设施。",
            jp: "改定された安全規制は、工業団地内で操業するすべての製造施設に適用可能（applicable）です。"
        }
    }
];