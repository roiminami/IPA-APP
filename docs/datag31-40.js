// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag1-10.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "delivery",
        pos: "名",
        ipa: "/dɪˈlɪvəri/",
        cn: "递送，交付；交付的货物",
        jp: "配達、配送、引き渡し、納品",
        family: "deliver / deliverable / deliverer",
        tips: "商务物流核心词，常考 free delivery（免费送货）或 delivery status（配送状态）。在阅读中，也常以复数形式 deliveries 出现，表示多批到货。",
        desc: "We guarantee fast delivery."
    },
    {
        word: "supply",
        pos: "動/名",
        ipa: "/səˈplaɪ/",
        cn: "供应，提供；供应品",
        jp: "供給する、支給する；供給、備品、消耗品",
        family: "supplier / supplies / supplemented",
        tips: "复数形式 supplies 常指“办公/日常用品”（如 office supplies、medical supplies）。动词短语 supply sb with sth（为某人提供某物）也是语法高频考点。",
        desc: "They supply office goods."
    },
    {
        word: "feature",
        pos: "動/名",
        ipa: "/ˈfiːtʃər/",
        cn: "特征，特色；以……为特色，专题介绍",
        jp: "特徴、特色；〜を特徴とする、特集する",
        family: "featured / featureless",
        tips: "在产品广告或听力场景中极高频。作动词时意为“以……为特色/主打”；形容词形式 featured product 指“主打产品/特色产品”。",
        desc: "The phone has a unique feature."
    },
    {
        word: "require",
        pos: "動",
        ipa: "/rɪˈkwaɪər/",
        cn: "需要，要求",
        jp: "必要とする、要求する、義務づける",
        family: "requirement / requisite / prerequisite",
        tips: "职场规章制度核心词。常见被动语态 be required to do sth（被要求做某事）。名词形式 requirement 常考 meet the requirements（满足要求）。",
        desc: "This job requires experience."
    },
    {
        word: "process",
        pos: "名/動",
        ipa: /ˈprɑːses/,
        cn: "过程，步骤；处理，加工",
        jp: "過程、プロセス、手順；処理する、加工する",
        family: "processor / processing / processed",
        tips: "动词用法极其高频，常考 process an order（处理订单）或 process an application（处理申请）。名词形式 processing 属于不可数名词，常考 data processing（数据处理）。",
        desc: "We will process your application."
    },
    {
        word: "construction",
        pos: "名",
        ipa: "/kənˈstrʌkʃn/",
        cn: "建造，建设，施工",
        jp: "建設、建築、工事",
        family: "construct / constructive / constructor",
        tips: "职场与市政场景高频词，经典短语 under construction（正在施工中）。其形容词 constructive 意为“建设性的”，常搭配 feedback（建设性反馈）。",
        desc: "The road is under construction."
    },
    {
        word: "charge",
        pos: "名/動",
        ipa: "/tʃɑːrdʒ/",
        cn: "费用，价钱；主管，负责；收费，控告",
        jp: "料金、手数料；管理、担当；請求する、ツケにする",
        family: "chargeable / surcharge / overcharge",
        tips: "名词经典搭配包括：free of charge（免费）、in charge of（负责/主管）。动词考点常考 charge a fee（收取费用）或 charge sth to corporate account（将某笔费用记入公司账户）。",
        desc: "There is no extra charge."
    },
    {
        word: "material",
        pos: "名/形",
        ipa: "/məˈtɪriəl/",
        cn: "材料，原料，资料；物质的，实质性的",
        jp: "材料、原料、資料、データ；物質的な、重大な",
        family: "materialize / materialism / materially",
        tips: "复数形式 materials 常指出版物、会议或课程的“资料/材料”，如 training materials（培训资料）、promotional materials（宣传资料）。",
        desc: "Please read the training material."
    },
    {
        word: "survey",
        pos: "名/動",
        ipa: "/ˈsɜːrveɪ/",
        cn: "调查，民意测验；全面审视，调查",
        jp: "调查、アンケート；調査する、見渡す",
        family: "surveyor",
        tips: "托业阅读 Part 7 最高频题材之一。经典短语有 conduct a survey（展开调查）、respond to a survey（填写调查问卷）以及 survey results（调查结果）。",
        desc: "We conducted a customer survey."
    },
    {
        word: "submit",
        pos: "動",
        ipa: "/səbˈmɪt/",
        cn: "提交，呈递",
        jp: "提出する、上呈する",
        family: "submission / submissive / submittal",
        tips: "职场高频动作词，等同于 turn in 或 hand in。常考搭配：submit an application（提交申请）、submit a proposal（提交提案）、submit receipts for reimbursement（提交发票以供报销）。",
        desc: "Submit your report by Friday."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "supply",
        category: "简单",
        stem: "The local vendor agreed to ________ fresh organic vegetables to our hotel restaurant every morning.",
        options: ["supply", "submit", "construction", "delivery"],
        correct: "supply",
        explanations: {
            guide: "动词不定式结构与商务句意辨析。to 后面需要接动词原形，结合后面的宾语 vegetables，表达“供应”货物，选 supply。",
            family: "supply (v./n.供应) | submit (v.提交) | construction (n.建设) | delivery (n.递送)。",
            details: "supply sth to sb/sth 是固定商务搭配，表示向某处供应某物。其他选项在逻辑与搭配上均不符合语法要求。",
            cn: "当地供应商同意每天早上向我们酒店的餐厅供应新鲜的有机蔬菜。",
            jp: "地元の業者は、毎朝当ホテルのレストランに新鮮な有機野菜を供給（supply）することに同意しました。"
        }
    },
    {
        id: 2,
        target: "require",
        category: "简单",
        stem: "The updated company guidelines ________ all department supervisors to attend the safety workshop on Monday.",
        options: ["require", "survey", "process", "feature"],
        correct: "require",
        explanations: {
            guide: "句子核心谓语动词与句型结构。主语为复数名词 guidelines，空格处缺少核心谓语动词，后面带有宾语 + to do 结构，选 require。",
            family: "require (v.要求) | survey (v./n.调查) | process (v./n.处理) | feature (v./n.以…为特色)。",
            details: "require sb to do sth（要求某人做某事）是托业官方最核心的语法句型。其他动词均不与后面的 sb to do 结构匹配。",
            cn: "更新后的公司指南要求所有部门主管参加周一的安全研讨会。",
            jp: "改定された会社のガイドラインは、すべての部門管理職に月曜日の安全ワークショップに出席することを要求（require）しています。"
        }
    },
    {
        id: 3,
        target: "charge",
        category: "简单",
        stem: "All registered hotel guests can use the newly renovated fitness center free of ________ during their stay.",
        options: ["charge", "material", "delivery", "supply"],
        correct: "charge",
        explanations: {
            guide: "固定短语搭配。free of charge 是商业场景中极其高频的固定介词短语，意为“免费”，选 charge。",
            family: "charge (n./v.费用/负责) | material (n.材料) | delivery (n.递送) | supply (n./v.供应)。",
            details: "free of charge 完美充当状语，用来修饰使用健身中心不需要额外支付任何费用。其他名词无法与 free of 构成“免费”的语义。",
            cn: "所有注册的酒店客人均可在入住期间免费使用新装修的健身中心。",
            jp: "登録されたすべてのホテルの宿泊客は、滞在中、新しく改装されたフィットネスセンターを無料（free of charge）で利用できます。"
        }
    },
    {
        id: 4,
        target: "delivery",
        category: "简单",
        stem: "Online shoppers can easily track the ________ status of their orders using the tracking number provided via email.",
        options: ["delivery", "construction", "require", "submit"],
        correct: "delivery",
        explanations: {
            guide: "复合名词定语用法。空格后有名词 status（状态），此处需要另一个名词组合构成复合概念，指代“配送状态”，选 delivery。",
            family: "delivery (n.递送) | construction (n.建设) | require (v.要求) | submit (v.提交)。",
            details: "delivery status（送货/配送状态）是电子商务与物流场景的核心术语。require 和 submit 是动词，不能直接修饰名词 status。",
            cn: "网购用户可以使用通过电子邮件提供的单号轻松查询订单的配送状态。",
            jp: "オンラインショッピングを利用するお客様は、メールで提供された追跡番号を使って、注文の配送（delivery）状況を簡単に追跡できます。"
        }
    },
    {
        id: 5,
        target: "submit",
        category: "简单",
        stem: "All job applicants must ________ their updated resumes online before the midnight deadline tonight.",
        options: ["submit", "process", "feature", "survey"],
        correct: "submit",
        explanations: {
            guide: "情态动词后的动词原形辨析。must 后面接动词原形，结合宾语 resumes（简历）与职场招聘语境，表达“提交”申请，选 submit。",
            family: "submit (v.提交) | process (v.处理) | feature (v.以…为特色) | survey (v.调查)。",
            details: "submit a resume 是求职场景的标配动宾搭配。虽然 process 也可以指处理，但此处主语是求职者（applicants），从逻辑上应是求职者“提交”而非“处理”。",
            cn: "所有求职者必须在今天午夜截止日期之前在网上提交他们更新后的简历。",
            jp: "すべての求職者は、今夜の真夜中の締め切り前に、更新された履歴書をオンラインで提出（submit）しなければなりません。"
        }
    },
    {
        id: 6,
        target: "material",
        category: "简单",
        stem: "Please print enough training ________ for the new employees before the orientation seminar begins.",
        options: ["material", "charge", "supply", "construction"],
        correct: "material",
        explanations: {
            guide: "名词修饰与特定职场场景。training 后面需要搭配名词构成复合结构，表示“培训资料/材料”，选 material。",
            family: "material (n.材料/资料) | charge (n.费用) | supply (n.供应) | construction (n.建设)。",
            details: "training material 是企业入职培训中的标准词汇。此处作不可数名词或单数统称，符合 please print 后的宾语逻辑。",
            cn: "请在入职培训研讨会开始之前，为新员工打印足够的培训资料。",
            jp: "オリエンテーションセミナーが始まる前に、新入社員用の研修資料（material）を十分に印刷してください。"
        }
    },
    {
        id: 7,
        target: "feature",
        category: "中等",
        stem: "The upcoming commercial laptop model will ________ an upgraded dual-lens camera and an extended battery life.",
        options: ["feature", "process", "require", "delivery"],
        correct: "feature",
        explanations: {
            guide: "助动词后的动词原形及商务语义。will 后面接动词原形，用来描述新笔记本电脑的产品属性，“以……为特色/主打”，选 feature。",
            family: "feature (v./n.以…为特色/特征) | process (v.处理) | require (v.要求) | delivery (n.递送)。",
            details: "作动词时，feature sth 意味着产品把某项功能作为主打卖点。用 require（需要）则不符合产品宣传文案的客观商业逻辑。",
            cn: "即将推出的商用笔记本电脑模型将以升级的双镜头摄像头和更长的电池寿命为主要特色。",
            jp: "近く発売されるビジネス向けノートパソコンのモデルは、アップグレードされたデュアルレンズカメラと長寿命バッテリーを特徴（feature）とします。"
        }
    },
    {
        id: 8,
        target: "process",
        category: "中等",
        stem: "The billing department needs three business days to ________ the corporate travel reimbursement requests.",
        options: ["process", "submit", "survey", "charge"],
        correct: "process",
        explanations: {
            guide: "不定式动词辨析。空格处填入动词原形，主语是 billing department（计费/财务部门），针对报销请求（requests）进行的动作应当是“处理/审批”，选 process。",
            family: "process (v./n.处理/过程) | submit (v.提交) | survey (v.调查) | charge (v.收费)。",
            details: "process reimbursement requests 意为“处理报销申请”，是财务部门的日常职能。员工负责 submit（提交），而部门负责 process（处理）。",
            cn: "财务计费部门需要三个工作日来处理公司差旅报销申请。",
            jp: "請求部門が企業の出張経費精算申請を処理（process）するには、3営業日が必要です。"
        }
    },
    {
        id: 9,
        target: "construction",
        category: "中等",
        stem: "Drivers are strongly advised to take an alternative route because the main highway is currently under ________.",
        options: ["construction", "delivery", "material", "supply"],
        correct: "construction",
        explanations: {
            guide: "固定介词短语。under construction 是固定职场及路况用语，意为“正在施工中/建设中”，选名词 construction。",
            family: "construction (n.建筑/施工) | delivery (n.递送) | material (n.材料) | supply (n.供应)。",
            details: "under construction 完美解释了为什么司机需要改道（take an alternative route）。其他名词与 under 组合均无法对应此路况场景。",
            cn: "强烈建议司机采取备用路线，因为主要高速公路目前正在施工中。",
            jp: "主要高速道路が現在工事中（under construction）であるため、ドライバーは迂回路を通ることが強く勧められています。"
        }
    },
    {
        id: 10,
        target: "survey",
        category: "中等",
        stem: "The market research committee decided to conduct a customer satisfaction ________ to identify areas for improvement.",
        options: ["survey", "submission", "requirement", "feature"],
        correct: "survey",
        explanations: {
            guide: "动宾固定搭配与商务术语。动词 conduct（进行/实施）常与 survey 搭配，构成 conduct a survey（进行调查），选 survey。",
            family: "survey (n./v.调查) | submission (n.提交) | requirement (n.要求) | feature (n.特征)。",
            details: "customer satisfaction survey 意为“客户满意度调查”，是托业高频复合名词短语。conduct 不能与 feature 或 requirement 构成此逻辑。",
            cn: "市场研究委员会决定进行一次客户满意度调查，以找出需要改进的领域。",
            jp: "市場調査委員会は、改善すべき点を特定するために顧客満足度調査（survey）を実施することを決定しました。"
        }
    },
    {
        id: 11,
        target: "supply",
        category: "中等",
        stem: "Ms. Patel requested additional office ________, including printer ink, paper, and notebooks, from the warehouse.",
        options: ["supplies", "suppliers", "supply", "supplied"],
        correct: "supplies",
        explanations: {
            guide: "名词单复数与商务特定语义。office 后需要填入名词复数形式，泛指办公“日常用品/消耗品”，选 supplies。",
            family: "supplies (n.用品/复数) | suppliers (n.供应商/复数) | supply (n./v.供应单数) | supplied (v-ed供应)。",
            details: "office supplies 是“办公用品”的固定职场统称。虽然 suppliers 也是复数名词，但它是指人/公司（供应商），不能包括油墨和纸张这些具体物品。",
            cn: "帕特尔女士向仓库申请了额外的办公用品，包括打印机墨水、纸张和笔记本。",
            jp: "パテル氏は、プリンターのインク、用紙、ノートを含む追加の事務用品（supplies）を倉庫に請求しました。"
        }
    },
    {
        id: 12,
        target: "require",
        category: "中等",
        stem: "Fluency in at least two languages is a strict ________ for the international sales manager position.",
        options: ["requirement", "require", "required", "requires"],
        correct: "requirement",
        explanations: {
            guide: "冠词与形容词后的名词中心语。不定冠词 a 和形容词 strict 后面必须接单数可数名词，作为句子的表语成分，选 requirement。",
            family: "requirement (n.要求/必要条件) | require (v.要求) | required (adj.必需的) | requires (v.要求-单三)。",
            details: "requirement 在此表示职位的“硬性要求/资格条件”。其他选项均为动词或分词，无法在 strict 后面担当名词中心语。",
            cn: "至少精通两种语言是国际销售经理职位的严格要求。",
            jp: "少なくとも2つの言語に堪能であることが、国際営業マネージャー職の厳格な要件（requirement）です。"
        }
    },
    {
        id: 13,
        target: "process",
        category: "困难",
        stem: "Advanced data ________ systems are essential for managing large volumes of client transactions efficiently.",
        options: ["processing", "process", "processes", "processed"],
        correct: "processing",
        explanations: {
            guide: "高阶动名词充当名词定语。data 与 processing 组合构成专有名词，指代“数据处理”，在此修饰后面的 systems，选 processing。",
            family: "processing (n.处理/动名词) | process (n./v.过程/处理) | processes (n.复数/动词单三) | processed (adj.加工过的)。",
            details: "data processing systems 意为“数据处理系统”。虽然 process 也是名词，但表达“处理”这一行为的概念块时，习惯使用动名词转化的不可数名词 processing。",
            cn: "高级数据处理系统对于高效管理大量客户交易至关重要。",
            jp: "大量の顧客取引を効率的に管理するためには、高度なデータ処理（processing）システムが不可欠です。"
        }
    },
    {
        id: 14,
        target: "feature",
        category: "困难",
        stem: "The boutique hotel was highly praised in a travel magazine article for its ________ local artworks.",
        options: ["featured", "feature", "featuring", "features"],
        correct: "featured",
        explanations: {
            guide: "过去分词作前置定语。空格位于物主代词 its 之后、名词短语 local artworks 之前，需要填入分词作形容词，表示“主打的/特色展出的”，选 featured。",
            family: "featured (adj.特载的/主打的) | feature (n./v.特色) | featuring (现在分词) | features (动词单三/名复)。",
            details: "featured artworks 指被作为特色、重点推荐推荐出来的艺术品。featuring 也可以修饰名词，但通常作后置定语（artworks featuring...），放在名词前不合习惯。",
            cn: "这家精品酒店因其主打展出的当地艺术品而在一家旅游杂志的文章中受到高度赞扬。",
            jp: "そのブティックホテルは、特集された（featured）地元の芸術品で旅行雑誌の記事において高く評価されました。"
        }
    },
    {
        id: 15,
        target: "submit",
        category: "困难",
        stem: "The final ________ of the architectural proposal must be approved by the board of directors before next month.",
        options: ["submission", "submit", "submitting", "submissive"],
        correct: "submission",
        explanations: {
            guide: "定冠词与形容词后的名词主语。The final 后面需要接名词来作整句的主语，表达提案的“提交”这一行为或提交上来的“文件”，选 submission。",
            family: "submission (n.提交/呈递物) | submit (v.提交) | submitting (动名词形式) | submissive (adj.顺从的)。",
            details: "submission 在此指递交上去的动作或提案本身。submitting 虽是动名词，但在有特指的 the final 修饰且后接 of 结构时，优先使用传统名词 submission。",
            cn: "建筑提案的最终提交版本必须在下个月之前获得董事会的批准。",
            jp: "建築提案書の最終提出（submission）は、来月までに取締役会によって承認されなければなりません。"
        }
    },
    {
        id: 16,
        target: "construction",
        category: "困难",
        stem: "The project manager provided ________ feedback to help the engineering team resolve the structural issues quickly.",
        options: ["constructive", "construction", "construct", "constructed"],
        correct: "constructive",
        explanations: {
            guide: "形容词修饰名词及高阶词义。空格修饰名词 feedback（反馈），需要填入形容词，表达“建设性的”反馈意见，选 constructive。",
            family: "constructive (adj.建设性的) | construction (n.建筑) | construct (v.建造) | constructed (v-ed已建造)。",
            details: "constructive feedback 是职场沟通与管理场景的黄金高频搭配。construction feedback 语法上用名词修饰名词虽有可能，但“建筑反馈”语意不通，经理给工程团队提供的是能够帮其解决问题的“建设性”意见。",
            cn: "项目经理提供了建设性的反馈，以帮助工程团队迅速解决结构性问题。",
            jp: "プロジェクトマネージャーは、エンジニアリングチームが構造上の問題を迅速に解決できるよう、建設的な（constructive）フィードバックを提供しました。"
        }
    },
    {
        id: 17,
        target: "material",
        category: "困难",
        stem: "The legal dispute cannot be resolved until all ________ evidence is formally presented to the arbitration court.",
        options: ["material", "materially", "materials", "materialize"],
        correct: "material",
        explanations: {
            guide: "形容词高阶商务/法律词义用法。空格修饰名词 evidence（证据），此处需要填入形容词，表示“实质性的/重要的/有决定意义的”，选 material。",
            family: "material (adj.实质性的/n.材料) | materially (adv.实质地) | materials (n.复数资料) | materialize (v.实现/具体化)。",
            details: "在商务法律英语中，material 除了作名词“材料”，作形容词时意为“重要的、实质性的”（相当于 significant/important）。material evidence 指“实质性证据/关键证据”。",
            cn: "在所有实质性证据正式提交给仲裁法院之前，这场法律纠纷是无法解决的。",
            jp: "すべての重大な（material）証拠が仲裁裁判所に正式に提出されるまで、その法的紛争を解決することはできません。"
        }
    },
    {
        id: 18,
        target: "charge",
        category: "困难",
        stem: "Please review the vendor contract carefully, as all late payments are subject to a ten percent ________.",
        options: ["surcharge", "charge", "chargeable", "charges"],
        correct: "surcharge",
        explanations: {
            guide: "名词派生词及商务特定概念。空格前有不定冠词 a 引导，且与逾期付款（late payments）相关，表达额外收取的“附加费/罚款”，选 surcharge。",
            family: "surcharge (n.附加费/额外收费) | charge (n./v.费用) | chargeable (adj.可收费的) | charges (n.复数费用)。",
            details: "surcharge 专指在原定费用之外因特定原因（如延期、超重等）产生的“额外附加费”。late payments are subject to a surcharge（逾期付款需缴纳附加费）是标准商业合同条款。",
            cn: "请仔细审查供应商合同，因为所有逾期付款都将加收百分之十的附加费。",
            jp: "すべての遅延支払いには10％の追加料金（surcharge）が課されるため、ベンダー契約書を注意深く確認してください。"
        }
    }
];