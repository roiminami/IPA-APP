// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data11-20.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "delivery",
        pos: "名",
        ipa: "/dɪˈlɪvəri/",
        cn: "递送，交付；交货，运送",
        jp: "配達、配送、引き渡し",
        family: "deliver / deliveries / delivered",
        tips: "商务高频：cash on delivery（货到付款），express delivery（快递）。在阅读理解中经常与 shipment 或 transit 互为同义词转化考查。",
        desc: "The delivery was late."
    },
    {
        word: "supply",
        pos: "動/名",
        ipa: "/səˈplaɪ/",
        cn: "供应，提供；供应品，库存",
        jp: "供給する、提供する；供給、備品、在庫",
        family: "supplier / supplies / supplemented",
        tips: "复数形式 supplies 常指“办公用品”（office supplies）或“医疗用品”（medical supplies）。作动词时常考 supply sb with sth 结构。",
        desc: "We supply office goods."
    },
    {
        word: "feature",
        pos: "名/動",
        ipa: "/ˈfiːtʃər/",
        cn: "特色，特征；以……为特色",
        jp: "特徴、特色、主要なもの；〜を特徴とする、大々的に取り上げる",
        family: "features / featured / featuring",
        tips: "电子产品或办公软件场景常客，表示新产品的功能特点（new features）。作动词时常表示某活动或刊物“以……为主打/为特色”。",
        desc: "This phone has a great feature."
    },
    {
        word: "require",
        pos: "動",
        ipa: "/rɪˈwreɪər/",
        cn: "需要，要求",
        jp: "必要とする、要求する、義務付ける",
        family: "requirement / requirements / requisite / requiring",
        tips: "高频考点为被动语态 be required to do sth（被要求做某事/必须做某事）。其名词 requirement（要求，必备条件）也是Part 5的选词大热门。",
        desc: "They require your signature."
    },
    {
        word: "process",
        pos: "名/動",
        ipa: "/ˈprɑːses/",
        cn: "过程，进程；加工，处理",
        jp: "過程、プロセス、手順；処理する、加工する",
        family: "processing / processor / processed / processes",
        tips: "动词用法在订单与款项处理中极高频：process the order（处理订单），process the payment（处理款项）。名词形式 processing 常见于数据或食品加工。",
        desc: "The process is simple."
    },
    {
        word: "construction",
        pos: "名",
        ipa: "/kənˈstrʌkʃn/",
        cn: "建设，建造；施工",
        jp: "建設、工事、建造",
        family: "construct / constructive / constructor / constructions",
        tips: "常见路况与商务路障提示：under construction（在施工中）。复合名词高频组合包括：construction site（施工现场），construction company（建筑公司）。",
        desc: "Road construction is finished."
    },
    {
        word: "charge",
        pos: "名/動",
        ipa: "/tʃɑːrdʒ/",
        cn: "费用，价钱；掌管；收费，要价",
        jp: "料金、手数料；責任、担当；請求する、充電する",
        family: "charges / charged / charging",
        tips: "托业核心短语：in charge of（负责/掌管），free of charge（免费）。作动词时常用结构为 charge $10 for the service（为该服务收费10美元）。",
        desc: "There is no extra charge."
    },
    {
        word: "material",
        pos: "名/形",
        ipa: "/məˈtɪriəl/",
        cn: "材料，原料；资料；物质的",
        jp: "材料、原料、資料；物質的な",
        family: "materials / materialistic / materially",
        tips: "职场常见固定组合：raw materials（原材料），reading materials（阅读材料），training materials（培训资料/培训课件）。",
        desc: "Buy the raw material."
    },
    {
        word: "survey",
        pos: "名/動",
        ipa: "/ˈsɜːrveɪ/",
        cn: "调查，民意测验；调查，勘测",
        jp: "調査、アンケート；調査する、見渡す",
        family: "surveys / surveyor / surveyed",
        tips: "听力与阅读大高频，常与 conduct 或 complete 连用：conduct a survey（进行调查），complete a customer satisfaction survey（完成客户满意度调查）。",
        desc: "Please complete this survey."
    },
    {
        word: "submit",
        pos: "動",
        ipa: "/səbˈmɪt/",
        cn: "提交，呈递；屈服",
        jp: "提出する、送る；服従する",
        family: "submission / submittal / submitted / submitting",
        tips: "经典同义词转换：submit = hand in = turn in。常用商务搭配：submit an application（提交申请），submit a proposal（提交提案）。",
        desc: "Submit your report now."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "courier", pos: "名", ipa: "/ˈkʊriər/", cn: "快递员，快递公司", jp: "宅配業者、クーリエ" },
    { word: "departure", pos: "名", ipa: "/dɪˈpɑːrtʃər/", cn: "出发，离开", jp: "出発、離陸" },
    { word: "headquarters", pos: "名", ipa: "/ˈhedkwɔːrtərz/", cn: "总部，总公司", jp: "本社、本部" },
    { word: "vendor", pos: "名", ipa: "/ˈvendər/", cn: "供应商，卖主", jp: "業者、販売元" },
    { word: "logistics", pos: "名", ipa: "/ləˈdʒɪstɪks/", cn: "物流，后勤", jp: "物流、ロジスティクス" },
    { word: "automated", pos: "形", ipa: "/ˈɔːtəmeɪtɪd/", cn: "自动化的", jp: "自動化された" },
    { word: "reimbursement", pos: "名", ipa: "/ˌriːɪmˈbɜːrsmənt/", cn: "报销，退款", jp: "払い戻し、返済" },
    { word: "manufacturing", pos: "名/形", ipa: "/ˌmænjuˈfæktʃərɪŋ/", cn: "制造业；制造的", jp: "製造業、製造の" },
    { word: "inferior", pos: "形", ipa: "/ɪnˈfɪriər/", cn: "较差的，次级的", jp: "劣った、質の低い" },
    { word: "Fluency", pos: "名", ipa: "/ˈfluːənsi/", cn: "流利，流畅", jp: "流暢さ" },
    { word: "auditor", pos: "名", ipa: "/ˈɔːdɪtər/", cn: "审计员，稽核员", jp: "会計監査人" },
    { word: "discrepancies", pos: "名", ipa: "/dɪˈskrepənsiz/", cn: "不符之处，差异（复数）", jp: "不一致、相違点（複数形）" },
    { word: "comprehensive", pos: "形", ipa: "/ˌkɑːmprɪˈtensɪv/", cn: "全面的，详尽的", jp: "包括的な、詳細な" },
    { word: "obligated", pos: "形", ipa: "/ˈɑːblɪɡeɪtɪd/", cn: "有义务的，有责任的", jp: "義務がある" },
    { word: "Regulatory", pos: "形", ipa: "/ˈreɡjələtɔːri/", cn: "管理的，监管的", jp: "規制の、取締りの" },
    { word: "substantial", pos: "形", ipa: "/səbˈstænʃl/", cn: "大量的，实质性的", jp: "相当な、実質的な" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "submit",
        category: "简单",
        stem: "All department heads must ________ their budget proposals before the end of the week.",
        options: ["submit", "submission", "survey", "construction"],
        correct: "submit",
        explanations: {
            guide: "情态动词后的动词原形考点。must 后面必须接动词原形作为谓语，结合句意选择 submit（提交）。",
            family: "submit (v.提交) | submission (n.提交物) | survey (n.调查) | construction (n.建设)。",
            details: "句意为‘所有部门主管必须在本周结束前提交他们的预算提案’。submission 是名词形式，不能直接放在情态动词 must 后面充当谓语。",
            cn: "所有部门主管必须在本周结束前提交他们的预算提案。",
            jp: "すべての部門長は、今週末までに予算案を提出（submit）しなければなりません。"
        }
    },
    {
        id: 2,
        target: "delivery",
        category: "简单",
        stem: "The courier guaranteed that the food ________ would arrive within thirty minutes.",
        options: ["delivery", "deliveries", "supply", "charge"],
        correct: "delivery",
        explanations: {
            guide: "名词单复数与主谓一致。空格处需要名词作宾语从句的主语，根据单数助动词 would 以及单数语境，选择 delivery（递送）。",
            family: "delivery (n.递送/单数) | deliveries (n.递送/复数) | supply (n./v.供应) | charge (n./v.收费)。",
            details: "这里特指这一次的外卖配送。deliveries 虽是同词族名词，但在特定单数语境下不需要使用复数形式。",
            cn: "快递员保证外卖会在三十分钟内送达。",
            jp: "宅配業者（courier）は、フードの配達（delivery）が30分以内に到着することを保証しました。"
        }
    },
    {
        id: 3,
        target: "require",
        category: "简单",
        stem: "Most international business flights ________ passengers to check in two hours prior to departure.",
        options: ["require", "requirement", "submit", "material"],
        correct: "require",
        explanations: {
            guide: "主谓一致与动词句型。主语是复数名词 flights，空格处需要复数谓语动词，且能搭配 sb to do sth 结构，选 require。",
            family: "require (v.要求) | requirement (n.要求) | submit (v.提交) | material (n.材料)。",
            details: "require passengers to check in 构成了 require sb to do sth（要求某人做某事）的经典商务句型。requirement 是名词，不能作谓语。",
            cn: "大多数国际商务航班要求乘客在起飞前两小时办理登机手续。",
            jp: "ほとんどの国際ビジネス便は、乗客に出発（departure）の2時間前までにチェックインすることを要求（require）しています。"
        }
    },
    {
        id: 4,
        target: "charge",
        category: "简单",
        stem: "There is an additional ________ for using the hotel's express laundry services.",
        options: ["charge", "charges", "supply", "feature"],
        correct: "charge",
        explanations: {
            guide: "不定冠词后的名词单数。an additional 修饰单数可数名词或不可数名词，结合商务服务收费背景，选择 charge（费用）。",
            family: "charge (n.费用/单数) | charges (n.费用/复数) | supply (n.供应) | feature (n.特色)。",
            details: "There is an additional charge 意为“有一项额外费用”。因为前面有不定冠词 an，所以不能选择复数形式 charges。",
            cn: "使用酒店的快捷洗衣服务需要支付额外费用。",
            jp: "ホテルの特急（express）ランドリーサービスを利用するには、追加料金（charge）がかかります。"
        }
    },
    {
        id: 5,
        target: "survey",
        category: "简单",
        stem: "Please take a few minutes to complete our online customer satisfaction ________.",
        options: ["survey", "surveys", "delivery", "process"],
        correct: "survey",
        explanations: {
            guide: "复合名词中心语。our online customer satisfaction 后面需要名词充当中心语，固定搭配为 customer satisfaction survey（客户满意度调查）。",
            family: "survey (n.调查/单数) | surveys (n.调查/复数) | delivery (n.递送) | process (n.过程)。",
            details: "形容词性代词 our 修饰单数名词 survey。complete our online customer satisfaction survey 是托业最常见的客服评估职场句式。",
            cn: "请花几分钟时间填写我们的在线客户满意度调查。",
            jp: "当社のオンライン顧客満足度調査（survey）へのご協力に数分お時間を割いていただけますと幸いです。"
        }
    },
    {
        id: 6,
        target: "construction",
        category: "简单",
        stem: "The new corporate headquarters is currently under ________ and will open next year.",
        options: ["construction", "construct", "require", "material"],
        correct: "construction",
        explanations: {
            guide: "介词固定搭配。under 后面连接抽象名词表示某种正在进行的状态，under construction 为固定搭配，意为“在施工中”。",
            family: "construction (n.建筑/施工) | construct (v.建造) | require (v.要求) | material (n.材料)。",
            details: "句意为‘新的公司总部目前正在建设中，将于明年启用’。construct 是动词形式，不能放在介词 under 后面作宾语。",
            cn: "新的公司总部目前正在建设中，将于明年启用。",
            jp: "新しい会社本部（headquarters）は現在建設中（construction）であり、来年オープンする予定です。"
        }
    },
    {
        id: 7,
        target: "supply",
        category: "中等",
        stem: "The logistics manager needs to find a reliable vendor to ________ raw materials for production.",
        options: ["supply", "supplier", "submit", "charge"],
        correct: "supply",
        explanations: {
            guide: "动词不定式与语境。needs to find a reliable vendor to 后面需要接动词原形来表达该供应商的功能，选 supply（供应）。",
            family: "supply (v.供应) | supplier (n.供应商) | submit (v.提交) | charge (v.收费)。",
            details: "to supply raw materials 意思是“去供应原材料”。supplier 是名词形式，放在 to 后面会导致语法结构瘫痪。",
            cn: "物流经理需要找到一家可靠的供应商来供应生产所需的原材料。",
            jp: "物流（logistics）マネージャーは、生産のための原材料を供給（supply）してくれる信頼できる業者（vendor）を見つける必要があります。"
        }
    },
    {
        id: 8,
        target: "feature",
        category: "中等",
        stem: "The updated version of the accounting software will ________ an automated invoicing system.",
        options: ["feature", "features", "process", "require"],
        correct: "feature",
        explanations: {
            guide: "情态动词后的及物动词意义辨析。will 后面需要动词原形，结合软件升级带来的新功能特色，选择 feature（以……为特色/具备）。",
            family: "feature (v.以...为特色) | features (n.特色复数/v.单三) | process (v.处理) | require (v.要求)。",
            details: "will feature an automated invoicing system 意为“将主打/具备自动开票系统”。features 是单三或复数名词，不符合 will 后的原形要求。",
            cn: "更新版本的会计软件将具备自动开发票系统的功能特点。",
            jp: "会計ソフトウェアの更新バージョンは、自動（automated）インボイス（invoicing）システムを特徴（feature）として備える予定です。"
        }
    },
    {
        id: 9,
        target: "process",
        category: "中等",
        stem: "It usually takes three business days to ________ a reimbursement claim through our financial portal.",
        options: ["process", "processing", "delivery", "survey"],
        correct: "process",
        explanations: {
            guide: "及物动词不定式。It takes time to do sth 结构中需要动词原形，结合财务报销单据，选择 process（处理）。",
            family: "process (v.处理) | processing (n.处理行为) | delivery (n.递送) | survey (n.调查)。",
            details: "to process a reimbursement claim 意思是“去处理一份报销申请”，是典型的企业财务标准动作。processing 是动名词，不接在 to 后面充当不定式主干。",
            cn: "通过我们的财务门户网站处理报销申请通常需要三个工作日。",
            jp: "当社の財務ポータル（portal）を通じて払い戻し（reimbursement）申請（claim）を処理（process）するには、通常3営業日かかります。"
        }
    },
    {
        id: 10,
        target: "material",
        category: "中等",
        stem: "The manufacturing team rejected the fabric because the raw ________ was of inferior quality.",
        options: ["material", "materials", "require", "submit"],
        correct: "material",
        explanations: {
            guide: "复合名词主语与主谓一致。because 引导的从句中包含单数系动词 was，说明主语必须是单数形式，选 material。",
            family: "material (n.材料/单数) | materials (n.材料/复数) | require (v.要求) | submit (v.提交)。",
            details: "raw material 是固定搭配，意为“原材料”。由于后面谓语是 was 这一单数形式，因此只能选择单数形式的 material 而排除 materials。",
            cn: "制造团队拒绝了这种面料，因为其原材料质量低劣。",
            jp: "原料（material）の品質が劣って（inferior）いたため、製造（manufacturing）チームはその生地を不合格にしました。"
        }
    },
    {
        id: 11,
        target: "require",
        category: "中等",
        stem: "Fluency in three languages is a strict ________ for the overseas branch manager position.",
        options: ["requirement", "require", "feature", "delivery"],
        correct: "requirement",
        explanations: {
            guide: "不定冠词与形容词后的名词表语。is a strict 后面必须补充名词来充当句子的表语成分，选 requirement（要求，必备条件）。",
            family: "requirement (n.要求) | require (v.需要) | feature (n.特色) | delivery (n.递送)。",
            details: "a strict requirement 意为“一项严格的要求”。require 是动词，不能放在冠词和形容词后面充当名词中心语。",
            cn: "精通三种语言是担任海外分公司经理职位的严格要求。",
            jp: "3言語が流暢（Fluency）であることは、海外（overseas）支店長ポジションの厳格な要件（requirement）です。"
        }
    },
    {
        id: 12,
        target: "submit",
        category: "中等",
        stem: "The auditor noticed several discrepancies in the tax forms that were ________ last month.",
        options: ["submitted", "submission", "process", "survey"],
        correct: "submitted",
        explanations: {
            guide: "定语从句中的被动语态。that 引导的定语从句修饰 forms，were 后面需要动词的过去分词形式构成被动语态，选 submitted。",
            family: "submitted (v-ed已提交的) | submission (n.提交) | process (v.处理) | survey (v.调查)。",
            details: "that were submitted last month 意为“上个月被提交的（税表）”。submission 是名词，不能与助动词 were 直接构成被动语态短语。",
            cn: "审计员注意到上个月提交的税务表格中有几处不符之处。",
            jp: "会計監査人（auditor）は、先月提出された（submitted）税務申告書にいくつかの不一致（discrepancies）があることに気づきました。"
        }
    },
    {
        id: 13,
        target: "available",
        category: "困难",
        stem: "The comprehensive list of alternative venues will be made ________ to the event planners by tomorrow afternoon.",
        options: ["available", "availability", "provide", "feature"],
        correct: "available",
        explanations: {
            guide: "被动语态中的形容词补足语。make sth available 的被动结构为 be made available，意为“被提供/变得可用”。",
            family: "available (adj.可得到的) | availability (n.可得性) | provide (v.提供) | feature (n.特色)。",
            details: "will be made available 意思是“将被提供给（活动策划者）”。availability 是名词形式，不能在被动语态后充当形容词补足语结构。",
            cn: "替代场地的完整清单将在明天下午之前提供给活动策划人员。",
            jp: "代替会場（venues）の包括的な（comprehensive）リストが、明日の午後までにイベントプランナーに提供（available）される予定です。"
        }
    },
    {
        id: 14,
        target: "provide",
        category: "困难",
        stem: "The sub-contractor is legally obligated to ________ a detailed cost breakdown within forty-eight hours.",
        options: ["provide", "provider", "submit", "construction"],
        correct: "provide",
        explanations: {
            guide: "高阶固定长句中的不定式核心动词。be obligated to 后面必须使用及物动词原形，结合后文的 breakdown（明细账目），选择 provide。",
            family: "provide (v.提供) | provider (n.提供者) | submit (v.提交) | construction (n.建设)。",
            details: "provide a detailed cost breakdown 意为“提供详细的成本明细”。虽然 submit 也有提交的意思，但商务合同条文中 provide a breakdown 属于更符合原厂惯例的标准地道搭配。",
            cn: "分包商在法律上有义务在四十八小时内提供详细的成本明细账目。",
            jp: "下請け業者（sub-contractor）は、48時間以内に詳細なコスト内訳（breakdown）を提示（provide）する法的義務（obligated）があります。"
        }
    },
    {
        id: 15,
        target: "charge",
        category: "困难",
        stem: "Regulatory authorities will impose hefty ________ if the factory fails to comply with safety standards.",
        options: ["charges", "charged", "supply", "delivery"],
        correct: "charges",
        explanations: {
            guide: "及物动词的宾语与复数名词应用。impose（强加/征收）是及物动词，后面需要复数名词充当宾语，impose hefty charges 意为“课以重罚/征收高额费用”。",
            family: "charges (n.费用/复数) | charged (v-ed已收费的) | supply (n.供应) | delivery (n.递送)。",
            details: "在法律法规语境下，impose charges/penalties 指实施处罚或收费。charged 是过去分词，不能直接接受形容词 hefty 的修饰并充当宾语。",
            cn: "如果工厂未能遵守安全标准，监管机构将征收高额罚款。",
            jp: "工場が安全基準に従わない（comply）場合、規制（Regulatory）当局は高額な（hefty）罰金（charges）を科す（impose）ことになります。"
        }
    },
    {
        id: 16,
        target: "process",
        category: "困难",
        stem: "Due to a technical glitch on the main server, the ________ of credit card transactions was delayed.",
        options: ["processing", "processed", "submit", "feature"],
        correct: "processing",
        explanations: {
            guide: "定冠词后的名词化结构。the ________ of 结构中需要填入名词或动名词，用来引出后面的核心业务 credit card transactions（信用卡交易）。",
            family: "processing (n.处理/动名词) | processed (adj.被加工的) | submit (v.提交) | feature (n.特色)。",
            details: "the processing of credit card transactions 意为“信用卡交易的处理”。processed 是形容词或动词，在此无法与 of 构成合理的主语核心结构。",
            cn: "由于主服务器出现技术故障，信用卡交易的处理被延迟了。",
            jp: "メインサーバーの技術的な不具合（glitch）により、クレジットカード決済の処理（processing）が遅れました。"
        }
    },
    {
        id: 17,
        target: "survey",
        category: "困难",
        stem: "Initial market ________ indicate a growing consumer preference for eco-friendly packaging alternatives.",
        options: ["surveys", "surveyed", "material", "require"],
        correct: "surveys",
        explanations: {
            guide: "主谓一致高级判断。空格后紧跟的谓语动词是 indicate（表明/原形），说明主语必须是复数名词，选 surveys。",
            family: "surveys (n.调查/复数) | surveyed (v-ed已调查的) | material (n.材料) | require (v.要求)。",
            details: "Initial market surveys indicate that... 意为“最初的市场调查显示……”。因为谓语动词 indicate 不是单三，故排除单数名词的可能性，锁定复数形式 surveys。",
            cn: "最初的市场调查表明，消费者对环保包装替代品的偏好正在增长。",
            jp: "初期の市場調査（surveys）は、環境に配慮した包装代替品（alternatives）に対する消費者の嗜好（preference）の高まりを示して（indicate）います。"
        }
    },
    {
        id: 18,
        target: "following",
        category: "困难",
        stem: "________ a substantial decline in quarterly revenue, the textile firm decided to downsize its workforce.",
        options: ["Following", "Follow", "supply", "process"],
        correct: "Following",
        explanations: {
            guide: "句首介词引导时间状语。句首引导名词短语并且表达“在……之后”，其功能完全等同于 after，属于托业高阶介词用法，选 Following。",
            family: "following (prep.在...之后) | follow (v.跟随) | supply (v.供应) | process (v.处理)。",
            details: "Following a substantial decline 意为“在季度收入大幅下降之后”。Follow 是动词原形，直接放句首会变成祈使句，导致后文出现结构脱节。",
            cn: "在季度收入大幅下降之后，这家纺织公司决定裁减员工规模。",
            jp: "四半期収益の大幅な（substantial）減少（decline）を受けて（Following）、その繊維会社は従業員数（workforce）の削減（downsize）を決定しました。"
        }
    }
];