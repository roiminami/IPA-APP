// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag321-330.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "structure",
        pos: "名/動",
        ipa: "/ˈstrʌktʃər/",
        cn: "结构，体系；构建，组织",
        jp: "構造、体系、組織；構成する",
        family: "structural / structurally / structured",
        tips: "企业运营与组织管理高频词。常考搭配 organizational structure（组织架构）、fee structure（收费标准）。在阅读中，也常指建筑物（building）本身的物理结构。",
        desc: "The structure is solid."
    },
    {
        word: "combine",
        pos: "動",
        ipa: "/kəmˈbaɪn/",
        cn: "结合，联合，合并",
        jp: "結合する、組み合わせる、合併する",
        family: "combination / combined / combining",
        tips: "商务重组、市场营销与资源整合高频动词。极常考搭配 combine A with B（将A与B结合）。在阅读中常与 merge 或 join 相互进行同义替换。",
        desc: "Combine the two files."
    },
    {
        word: "automatically",
        pos: "副",
        ipa: "/ˌɔːtəˈmætɪkli/",
        cn: "自动地",
        jp: "自動的に",
        family: "automatic / automate / automation",
        tips: "办公自动化与数字化服务核心副词。在合同条款或订阅服务中，极常考搭配 automatically renew（自动续订）、automatically generate（自动生成）。",
        desc: "The system updates automatically."
    },
    {
        word: "contribute",
        pos: "動",
        ipa: "/kənˈtrɪbjuːt/",
        cn: "贡献，捐助；促成，导致",
        jp: "貢献する、寄付する、一因となる",
        family: "contribution / contributor / contributory",
        tips: "企业社会责任（CSR）、项目协作与因果分析核心动词。最常考搭配为 contribute to...（有助于/促成/捐赠给，注意此处的 to 是介词，后面接名词或动名词形式）。",
        desc: "He contributes to the project."
    },
    {
        word: "institute",
        pos: "名/動",
        ipa: "/ˈɪnstɪtuːt/",
        cn: "制定，着手，建立；机构，协会",
        jp: "（制度などを）制定する、開始する；協会、研究所",
        family: "institution / institutional / institutionalize",
        tips: "双重词性高频词。作动词时意为“制定/着手”，常搭配 institute a new policy / protocol（制定新政策/安全协议）。作名词时指研究或学术机构，如 research institute（研究所）。",
        desc: "We instituted a new policy."
    },
    {
        word: "completely",
        pos: "副",
        ipa: "/kəmˈpliːtli/",
        cn: "完全地，彻底地",
        jp: "完全に、徹底的に",
        family: "complete / completeness / completion",
        tips: "高频程度副词。在阅读与语法中，常用来修饰形容词或动词，如 completely finished（完全完成）、completely satisfied（完全满意）。可与 entirely 或 thoroughly 互换。",
        desc: "I completely agree."
    },
    {
        word: "achieve",
        pos: "動",
        ipa: "/əˈtʃiːv/",
        cn: "达到，取得，实现",
        jp: "達成する、成し遂げる",
        family: "achievement / achievable / achiever",
        tips: "目标设定与业绩考核（KPI）核心动词。常考搭配 achieve a goal / target（实现目标）、achieve success（取得成功）。在阅读中，经常与 accomplish 或 attain 进行同义替换。",
        desc: "We achieved our goal."
    },
    {
        word: "function",
        pos: "名/動",
        ipa: "/ˈfʌŋkʃn/",
        cn: "运行，起作用；功能，职责，正式聚会",
        jp: "機能する、作用する；機能、職務、公式行事",
        family: "functional / functionally / functioning",
        tips: "办公设备维护及日常社交高频词。作动词时常考 properly functioning（正常运行）。作名词时除了“功能”外，在听力 Part 3 & 4 中极常考“正式社交聚会（formal social event）”这一高阶释义。",
        desc: "The device functions well."
    },
    {
        word: "duty",
        pos: "名",
        ipa: "/ˈduːti/",
        cn: "职责，义务；关税",
        jp: "職務、義務、関税",
        family: "duties / dutiful / dutifully",
        tips: "岗位描述与进出口贸易核心名词。在人力资源中，常以复数形式出现，如 daily duties（日常职责）。在物流和关税场景中，customs duty 意为“进口关税”。",
        desc: "This is my main duty."
    },
    {
        word: "benefit",
        pos: "名/動",
        ipa: "/ˈbenɪfɪt/",
        cn: "福利，好处，利益；得益于，有益于",
        jp: "手当、福利厚生、利益；〜から利益を得る、〜のためになる",
        family: "beneficial / beneficiary / benefited",
        tips: "HR薪酬福利与商业价值评估核心词。作名词时极其常考 employee benefits（员工福利）。作动词时常考搭配 benefit from...（受益于……）。",
        desc: "The program has many benefits."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "structure",
        category: "简单",
        stem: "The consultant analyzed our company's organizational ________ to identify areas for efficiency improvement.",
        options: ["structure", "combine", "completely", "office"],
        correct: "structure",
        explanations: {
            guide: "名词中心语的词义选择。空格前有形容词 organizational（组织的），空格后为不定式作目的状语，需填入名词作 analyzed 的宾语，选 structure。",
            family: "structure (n.结构) | combine (v.结合) | completely (adv.完全地) | office (n.办公室)。",
            details: "organizational structure 意为“组织架构/组织结构”，是描述公司重组、效率优化（efficiency improvement）时的标准商务词组。其他选项不符语境。",
            cn: "顾问分析了我们公司的组织架构，以找出提高效率的领域。",
            jp: "コンサルタントは、効率向上のための領域を特定するために、当社の組織構造（structure）を分析しました。"
        }
    },
    {
        id: 2,
        target: "combine",
        category: "简单",
        stem: "The travel agency decided to ________ several regional tours to attract more international tourists.",
        options: ["combine", "contribute", "automatically", "purchase"],
        correct: "combine",
        explanations: {
            guide: "及物动词词义辨析。decided to 后面需要接动词原形，宾语是 several regional tours（几项区域旅游项目），结合“整合旅游项目”的逻辑，选 combine。",
            family: "combine (v.结合/整合) | contribute (v.贡献) | automatically (adv.自动地) | purchase (v./n.购买)。",
            details: "combine tours 意为“整合/合并旅游路线”，是旅游和酒店服务（hospitality）场景下的常见运营手段。其余选项不构成合理的动宾逻辑关系。",
            cn: "该旅行社决定合并几项区域旅游路线，以吸引更多的国际游客。",
            jp: "その旅行代理店は、より多くの海外観光客を惹きつけるために、いくつかの地域ツアーを統合する（combine）ことに決めました。"
        }
    },
    {
        id: 3,
        target: "automatically",
        category: "简单",
        stem: "The subscription to our digital marketing database will renew ________ unless canceled thirty days prior to expiration.",
        options: ["automatically", "completely", "achieve", "fully"],
        correct: "automatically",
        explanations: {
            guide: "修饰不及物动词的副词。空格位于不及物动词 renew 之后，需填入副词作状语，结合“到期前不取消就自动续订”的合同条款常识，选 automatically。",
            family: "automatically (adv.自动地) | completely (adv.彻底地) | achieve (v.取得) | fully (adv.完全地)。",
            details: "renew automatically 意为“自动续订/自动更新”，属于软件服务（SaaS）、数据库或期刊订阅合同中的高频法律条款表述。其他选项意思不搭配。",
            cn: "除非在到期前三十天取消，否则我们数字营销数据库的订阅将自动续订。",
            jp: "有効期限の30日前にキャンセルされない限り、当社のデジタルマーケティングデータベースの購読は自動的に（automatically）更新されます。"
        }
    },
    {
        id: 4,
        target: "contribute",
        category: "简单",
        stem: "Every team member is encouraged to ________ innovative ideas during the weekly brainstorming sessions.",
        options: ["contribute", "institute", "duty", "proposed"],
        correct: "contribute",
        explanations: {
            guide: "及物动词词义选择。is encouraged to 后面需接动词原形，宾语是 ideas（想法），结合“为讨论贡献点子”的场景，选 contribute。",
            family: "contribute (v.贡献/提供) | institute (v./n.制定/机构) | duty (n.职责) | proposed (adj.被提议的)。",
            details: "contribute ideas 意为“贡献点子/提供想法”，是团队会议、头脑风暴（brainstorming）场景下最经典地道的动宾搭配。其他动词在此处意思不通。",
            cn: "在每周的头脑风暴会议上，每个团队成员都被鼓励贡献创新想法。",
            jp: "毎週のブレインストーミングセッション中、すべてのチームメンバーが革新的なアイデアを出し合う（contribute）よう推奨されています。"
        }
    },
    {
        id: 5,
        target: "completely",
        category: "简单",
        stem: "Due to a sudden system glitch, the database was ________ offline for nearly three hours yesterday morning.",
        options: ["completely", "automatically", "benefit", "closed"],
        correct: "completely",
        explanations: {
            guide: "修饰副词或形容词的程度副词。空格位于助动词 was 和形容词/副词 offline（下线/离线）之间，需填入副词作状语，选用 completely 表示程度极其彻底。",
            family: "completely (adv.完全地) | automatically (adv.自动地) | benefit (n./v.福利) | closed (adj.关闭的)。",
            details: "completely offline 意为“完全离线/彻底瘫痪”。在描述IT系统故障（system glitch）和运行中断时，completely 起到强烈的强调作用。其他选项语义不符。",
            cn: "由于突发的系统故障，数据库昨天上午完全离线了将近三个小时。",
            jp: "突然のシステム不具合により、昨日午前、データベースはほぼ3時間にわたり完全に（completely）オフライン状態になりました。"
        }
    },
    {
        id: 6,
        target: "achieve",
        category: "简单",
        stem: "With proper preparation and dedication, our sales department managed to ________ its quarterly revenue goals.",
        options: ["achieve", "function", "structure", "meeting"],
        correct: "achieve",
        explanations: {
            guide: "及物动词词义及搭配。managed to 后面需接动词原形，宾语为 goals（目标），结合销售部门完成任务的语境选 achieve。",
            family: "achieve (v.实现/达到) | function (v./n.运行) | structure (v./n.构建) | meeting (n.会议)。",
            details: "achieve goals 意为“实现目标/达到目标”，是商务运营管理、业绩评估中最基础高频的及物动词搭配。其他选项不能和 goals 构成合理动宾逻辑。",
            cn: "通过合理的准备和敬业精神，我们的销售部门成功实现了其季度收入目标。",
            jp: "適切な準備と貢献により、当社の営業部は四半期収益目標を達成（achieve）することができました。"
        }
    },
    {
        id: 7,
        target: "institute",
        category: "中等",
        stem: "The board of directors decided to ________ a new security protocol to prevent unauthorized database entry.",
        options: ["institute", "contribute", "achieve", "arbitration"],
        correct: "institute",
        explanations: {
            guide: "及物动词的高阶词义与搭配。decided to 后面接动词原形，宾语是 a new security protocol（新安全协议），选用 institute 表达“制定/实施（新政策或规范）”。",
            family: "institute (v.制定/实施) | contribute (v.贡献) | achieve (v.达到) | arbitration (n.仲裁)。",
            details: "institute a protocol 意为“实施/制定一项安全协议”，是托业高难度阅读中“制定政策/方案”这一动作的黄金高频替换。其余动词不与 protocol 形成此特定语法搭配。",
            cn: "董事会决定实施一项新的安全协议，以防止未经授权进入数据库。",
            jp: "取締役会は、データベースへの不正アクセスを防ぐために、新しいセキュリティプロトコルを導入（institute）することを決定しました。"
        }
    },
    {
        id: 8,
        target: "function",
        category: "中等",
        stem: "Our primary responsibility is to ensure that all electronic appliances in the office ________ properly.",
        options: ["function", "completely", "duty", "booked"],
        correct: "function",
        explanations: {
            guide: "从句中的谓语动词选择。空格位于 that 引导的宾语从句中，主语为 all electronic appliances（所有电器），后接修饰副词 properly（妥善地），此处需填入不及物动词原形作谓语，选 function。",
            family: "function (v.运行/起作用) | completely (adv.完全地) | duty (n.职责) | booked (adj.被预订的)。",
            details: "function properly 意为“正常运转/正常运行”，是设备维护、安全生产场景中最典型的固定状态描述搭配。其他干扰项词性或意思不符。",
            cn: "我们的首要职责是确保办公室内所有的电器设备都正常运转。",
            jp: "当社の主な職務は、オフィス内のすべての電化製品が適切に機能（function）していることを確認することです。"
        }
    },
    {
        id: 9,
        target: "duty",
        category: "中等",
        stem: "The newly hired manager will assume his official ________ starting next fiscal quarter.",
        options: ["duties", "structures", "institutes", "subsidies"],
        correct: "duties",
        explanations: {
            guide: "及物动词后面的名词宾语。空格前有形容词 official（官方的/正式的），作 assume（承担/就职）的宾语，结合新经理就职的语境，选 duties 表示职责。",
            family: "duties (n-pl职责) | structures (n-pl结构) | institutes (n-pl机构) | subsidies (n-pl补贴)。",
            details: "assume duties 意为“承担职责/开始履职”，是人力资源及企业通告中形容新高管就任时的官方固定高频词组。其他选项在此处不合逻辑。",
            cn: "新聘用的经理将从下一财政季度开始履行其官方职责。",
            jp: "新しく採用されたマネージャーは、次の会計四半期から公式な職務（duties）を引き継ぐ予定です。"
        }
    },
    {
        id: 10,
        target: "benefit",
        category: "中等",
        stem: "Employees will ________ greatly from the newly renovated office space and upgraded recreational facilities.",
        options: ["benefit", "achieve", "completely", "voluntary"],
        correct: "benefit",
        explanations: {
            guide: "不及物动词的词义及介词搭配。will 后面要求接动词原形，其后有修饰副词 greatly 和介词 from，考查固定搭配 benefit from...（受益于……）。",
            family: "benefit (v.得益于/受益) | achieve (v.实现) | completely (adv.完全地) | voluntary (adj.自愿的)。",
            details: "benefit from... 意为“从……中受益/得益于……”。新近翻修（renovated）的办公场所和娱乐设施，能让员工极大地从中受益，符合人事行政福利和办公设施升级语境。其他选项不与 from 搭配。",
            cn: "员工将极大地受益于新近翻修的办公空间和升级的娱乐设施。",
            jp: "従業員は、新しく改装されたオフィススペースとアップグレードされたレクリエーション施設から大きな恩恵を受ける（benefit）でしょう。"
        }
    },
    {
        id: 11,
        target: "structure",
        category: "中等",
        stem: "The engineering team recommended some ________ modifications to optimize the factory's production line.",
        options: ["structural", "structure", "structurally", "structured"],
        correct: "structural",
        explanations: {
            guide: "名词前的修饰性形容词词性选择。空格位于名词 modifications（修改/调整）之前作定语，需填入形容词形式，选 structural。",
            family: "structural (adj.结构上的) | structure (n./v.结构) | structurally (adv.结构上地) | structured (adj.有结构的)。",
            details: "structural modifications 意为“结构性修改/结构调整”，指对工厂或生产线的物理架构进行改动，符合高阶工程制造和流程优化（optimize）语境。其余词性不符定语用法。",
            cn: "工程团队建议进行一些结构性改造，以优化工厂的生产线。",
            jp: "エンジニアリングチームは、工場の生産ラインを最適化するために、いくつかの構造的な（structural）変更を推奨しました。"
        }
    },
    {
        id: 12,
        target: "combine",
        category: "中等",
        stem: "The success of our latest promotional campaign is the result of a unique ________ of marketing and photography.",
        options: ["combination", "combine", "combined", "combining"],
        correct: "combination",
        explanations: {
            guide: "冠词和修饰词后的名词中心语。空格前有不定冠词 a 和形容词 unique（独特的），后接 of... 结构，需填入名词，选 combination。",
            family: "combination (n.结合/组合) | combine (v.结合) | combined (adj.联合的) | combining (v-ing结合中)。",
            details: "a unique combination of A and B 意为“A与B的独特结合”。将市场营销与摄影融为一体，促成了宣传活动的成功，属于创意和策划场景的高频表达。",
            cn: "我们最新宣传活动的成功，是市场营销与摄影艺术独特结合的结果。",
            jp: "当社の最新のプロモーションキャンペーンの成功は、マーケティングと写真撮影のユニークな組み合わせ（combination）の成果です。"
        }
    },
    {
        id: 13,
        target: "automatically",
        category: "困难",
        stem: "The administrative department aims to introduce office ________ to streamline the processing of travel expense claims.",
        options: ["automation", "automatically", "automatic", "automated"],
        correct: "automation",
        explanations: {
            guide: "名词修饰名词的复合名词选择。空格前有名词 office（办公室），修饰后面共同作为 introduce 的宾语，结合精简费用报销（streamline claims）的数字化背景，选用表示自动化的名词 automation。",
            family: "automation (n.自动化) | automatically (adv.自动地) | automatic (adj.自动的) | automated (adj.自动化的)。",
            details: "office automation 意为“办公自动化”，指通过软件系统替代繁琐人工行政审批流程（如报销申请 claims），是现代数字化企业后勤优化的核心专有名词。其他派生词词性不符。",
            cn: "行政部门旨在引入办公自动化，以精简出差费用报销的处理流程。",
            jp: "管理部門は、出張旅費精算の処理を合理化するために、オフィスオートメーション（automation）の導入を目指しています。"
        }
    },
    {
        id: 14,
        target: "contribute",
        category: "困难",
        stem: "The prominent researcher was honored for her significant ________ to the field of sustainable agriculture.",
        options: ["contributions", "contribute", "contributed", "contributory"],
        correct: "contributions",
        explanations: {
            guide: "形容词修饰下的名词宾语。空格前有形容词 significant（重大的），作介词 for 的宾语，后接 to 引导的介词短语，需填入名词形式，选用 contributions（贡献）。",
            family: "contributions (n-pl贡献) | contribute (v.贡献) | contributed (v-ed已贡献) | contributory (adj.起促进作用的)。",
            details: "make significant contributions to... 意为“对……做出重大贡献”，此处名词 contributions 对应前置的 significant，是公司表彰、学术授勋及社会声誉评价中的绝对高频高阶搭配。注意 to 在此是介词，后面接名词短语。",
            cn: "这位杰出的研究员因对可持续农业领域的重大贡献而受到表彰。",
            jp: "その著名な研究者は、持続可能な農業分野への多大な貢献（contributions）に対して表彰されました。"
        }
    },
    {
        id: 15,
        target: "institute",
        category: "困难",
        stem: "The government-funded research ________ provides discretionary subsidies to firms developing biomedical technologies.",
        options: ["institution", "institute", "instituted", "institutional"],
        correct: "institution",
        explanations: {
            guide: "特定复合名词的中心语选择。空格被 research（研究）修饰，充当主语中心词，结合政府资助（government-funded）和提供财政补贴的社会公职机构背景，选表示“机构/制度”的名词 institution。",
            family: "institution (n.机构/体系) | institute (n./v.研究学会/制定) | instituted (v-ed已制定) | institutional (adj.制度上的)。",
            details: "research institution 意为“研究机构”，侧重于具有社会、学术或官方性质的大型组织。虽然 research institute 也可以，但在本题中，从属更大范围的 government-funded 语境，且对比选项 institution 更符合词性及高阶名词辨析考点。",
            cn: "该政府资助的研究机构为开发生物医学技术的公司提供可支配的补贴。",
            jp: "政府が出資するその研究機関（institution）は、バイオメディカル技術を開発する企業に対して裁量的な補助金を提供しています。"
        }
    },
    {
        id: 16,
        target: "completely",
        category: "困难",
        stem: "Payment for the database maintenance will be processed immediately upon the successful ________ of the upgrade.",
        options: ["completion", "completely", "complete", "completeness"],
        correct: "completion",
        explanations: {
            guide: "定冠词修饰下的名词派生词。空格位于定冠词 the 和介词 of 之间，作介词 upon 的宾语，此位置必须填入名词，选用 completion 表达“完成/结束”。",
            family: "completion (n.完成/结束) | completely (adv.完全地) | complete (v./adj.完成) | completeness (n.完整性)。",
            details: "upon the successful completion of... 意为“一成功完成……就/在……顺利结束后”，是项目完工、财务结款合同（payment will be processed）中最常考的法务高阶时间状语搭配。其余选项词性不符。",
            cn: "数据库维护的款项将在升级工作顺利完成后立即予以处理。",
            jp: "データベースメンテナンスの支払いは、アップグレードが無事に完了（completion）した時点で直ちに処理されます。"
        }
    },
    {
        id: 17,
        target: "achieve",
        category: "困难",
        stem: "The general manager praised the entire team for their outstanding ________ during the past fiscal year.",
        options: ["achievements", "achieve", "achievable", "achieving"],
        correct: "achievements",
        explanations: {
            guide: "物主代词和形容词修饰下的复数名词。空格前有物主代词 their 和形容词 outstanding（杰出的），作为介词 for 的宾语，需填入名词，选指代具体成就的复数名词 achievements。",
            family: "achievements (n-pl业绩/成就) | achieve (v.获得) | achievable (adj.可实现的) | achieving (v-ing获取中)。",
            details: "praise someone for their outstanding achievements 意为“因某人杰出的业绩/成就而赞扬他们”，是年终总结（past fiscal year）、高管发言中对下属表现进行口头褒奖的标准句式。抽象概念的业绩或具体的一系列成就需用复数形式表达。",
            cn: "总经理赞扬了整个团队在过去一个财政年度里取得的杰出成就。",
            jp: "ゼネラルマネージャーは、過去の会計年度におけるチーム全体の素晴らしい実績（achievements）を称賛しました。"
        }
    },
    {
        id: 18,
        target: "function",
        category: "困难",
        stem: "The newly designed corporate headquarters is not only visually stunning but also highly ________.",
        options: ["functional", "function", "functionally", "functioning"],
        correct: "functional",
        explanations: {
            guide: "系动词后的形容词表语。空格前有副词 highly，且在 parallels 结构 but also 之后，与 visually stunning（视觉上令人震撼的）形成并列，作为 headquarter 的表语，需填入形容词，选 functional。",
            family: "functional (adj.实用的/功能性的) | function (v./n.运行) | functionally (adv.功能上) | functioning (n./v-ing运行中)。",
            details: "highly functional 意为“高度实用的/多功能的”，用来形容建筑物设计在美观之余也极具实用性（具有出色的办公动线或空间配置）。符合商务大楼基建设计的高阶评估语境。副词 functionally 无法作 is 的表语，故排除。",
            cn: "新设计的公司总部不仅视觉效果震撼，而且实用性极高。",
            jp: "新しく設計された本社ビルは、視覚的に素晴らしいだけでなく、非常に実用的（functional）でもあります。"
        }
    }
];