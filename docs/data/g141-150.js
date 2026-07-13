// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag131-140.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "estimate",
        pos: "名/動",
        ipa: "/ˈestɪmeɪt/",
        cn: "估算，估价；估计，报价单",
        jp: "見積もり、概算；見積もる、評価する",
        family: "estimation / estimated / estimator / underestimation",
        tips: "财务预算与项目采购场景的核心词。常见搭配有 written estimate（书面报价）或 estimate the cost（估算成本）。作名词时常指价格或时间的粗略计算。",
        desc: "Please provide a cost estimate."
    },
    {
        word: "launch",
        pos: "動/名",
        ipa: "/lɔːntʃ/",
        cn: "发动，发起，推出（新产品）；发布会",
        jp: "新発売する、立ち上げる、開始する；ローンチ、製品発表",
        family: "launched / launching / launcher",
        tips: "市场营销与产品更新场景高频词。常考搭配如 product launch（新产品发布）、launch a new campaign（发起新活动）。",
        desc: "We will launch the product tomorrow."
    },
    {
        word: "appreciate",
        pos: "動",
        ipa: "/əˈpriːʃieɪt/",
        cn: "感谢，感激；欣赏，重视",
        jp: "感謝する、正しく評価する、鑑賞する",
        family: "appreciation / appreciative / appreciably / appreciated",
        tips: "商务邮件高频动词。经典句型为 I would appreciate it if you could...（如果您能……我将不胜感激）。其名词形式 appreciation 同样重要。",
        desc: "We highly appreciate your support."
    },
    {
        word: "track",
        pos: "動/名",
        ipa: "/træk/",
        cn: "追踪，跟踪；轨道，足迹",
        jp: "追跡する、記録する；通り道、線路",
        family: "tracker / tracking / tracked / trackable",
        tips: "物流配送与项目进度管理的核心词汇。常考 track a shipment（追踪货件）或 keep track of expenses（记录费用支出）。",
        desc: "You can track your package online."
    },
    {
        word: "unfortunately",
        pos: "副",
        ipa: "/ʌnˈfɔːrtʃənətli/",
        cn: "不幸地，遗憾地",
        jp: "不幸にも、あいにく、残念ながら",
        family: "unfortunate / fortune / fortunate / fortunately",
        tips: "商务信函中引出坏消息（如延迟、缺货、拒绝）的标准副词。常置于句首，用逗号与句子主干隔开。",
        desc: "Unfortunately, the flight was delayed."
    },
    {
        word: "editor",
        pos: "名",
        ipa: "/ˈedɪtər/",
        cn: "编辑，编者",
        jp: "編集者、校閲者",
        family: "edit / editorial / edited / edition",
        tips: "出版、传媒与公关场景的职位名词。其形容词形式 editorial（编辑的、社论的）常修饰 department 或 policy。",
        desc: "She works as a senior editor."
    },
    {
        word: "previous",
        pos: "形",
        ipa: "/ˈpriːviəs/",
        cn: "以前的，先前的",
        jp: "以前の、前の",
        family: "previously / previousness",
        tips: "求职履历或合同修订中的高频形容词。常考 previous experience（以往经验）或 without previous notice（无事先通知）。",
        desc: "He has no previous experience."
    },
    {
        word: "commercial",
        pos: "形/名",
        ipa: "/kəˈmɜːrʃl/",
        cn: "商业的，商务的；（电视、广播中的）商业广告",
        jp: "商業的な、商業の；（テレビ・ラジオの）コマーシャル",
        family: "commerce / commercially / commercialize / commercialism",
        tips: "商业地产与广告营销场景的核心词。常见搭配有 commercial district（商业区）、commercial building（商用大楼）或作名词指电视广告。",
        desc: "This is a commercial building."
    },
    {
        word: "reference",
        pos: "名/動",
        ipa: "/ˈrefrəns/",
        cn: "参考，查阅；推荐信，介绍人",
        jp: "参照、参考；推薦状、身元保証人",
        family: "refer / referable / referral / referenced",
        tips: "技术文档与招聘场景的重要名词。常考搭配 for future reference（供日后参考）、letters of reference（推荐信）。",
        desc: "Keep this manual for future reference."
    },
    {
        word: "invitation",
        pos: "名",
        ipa: "/ˌɪnvɪˈteɪʃn/",
        cn: "邀请，请柬，邀请函",
        jp: "招待、招待状、誘い",
        family: "invite / inviting / invitee / invitingly",
        tips: "商务宴会与会议筹办的高频名词。常与 extend 搭配（extend an invitation 发出邀请）或构成 invitation card（邀请函）。",
        desc: "Thank you for the invitation."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "estimate",
        category: "简单",
        stem: "The contractor provided a written ________ for the cost of the office renovation.",
        options: ["estimate", "launch", "editor", "invitation"],
        correct: "estimate",
        explanations: {
            guide: "名词词义辨析。空格前有不定冠词 a 和形容词 written（书面的），空格后由介词 for 引导费用说明，需填入表示“价格计算/估算”的单数名词。",
            family: "estimate (n.估价/报价单) | launch (n.发布/发布会) | editor (n.编辑) | invitation (n.邀请函)。",
            details: "在办公室装修（office renovation）的语境下，承包商（contractor）会提供一份“书面报价单（written estimate）”。其他选项语义不符。",
            cn: "承包商为办公室装修费用提供了一份书面报价单。",
            jp: "請負業者は、オフィスの改装費用に関する書面による見積もり（estimate）を提示しました。"
        }
    },
    {
        id: 2,
        target: "launch",
        category: "简单",
        stem: "The electronics company plans to ________ its new smartphone model early next month.",
        options: ["launch", "track", "appreciate", "previous"],
        correct: "launch",
        explanations: {
            guide: "动词词义辨析。plans to 后面需要接动词原形，其后接宾语新智能手机机型（its new smartphone model），应填入表示“发布/推出产品”的动词。",
            family: "launch (v.推出/发布) | track (v.追踪) | appreciate (v.感激/欣赏) | previous (adj.以前的)。",
            details: "电子公司针对新智能手机机型的计划动作是“发布/投放市场（launch）”。previous 是形容词，词性直接排除；其他动词语意不通。",
            cn: "这家电子公司计划在下个月初推出其新的智能手机机型。",
            jp: "その電子機器メーカーは、来月初旬に新しいスマートフォンモデルを発売（launch）することを計画しています。"
        }
    },
    {
        id: 3,
        target: "appreciate",
        category: "简单",
        stem: "We truly ________ your patience while our technical team works to resolve this network issue.",
        options: ["appreciate", "unfortunately", "commercial", "reference"],
        correct: "appreciate",
        explanations: {
            guide: "及物动词词义辨析。空格前面是主语 We 和副词 truly，后面是名词短语 your patience 作宾语，此处缺少谓语动词原形。",
            family: "appreciate (v.感激/感谢) | unfortunately (adv.不幸地) | commercial (adj./n.商业的) | reference (n.参考)。",
            details: "在克服网络技术故障期间，公司对客户表现出的耐心表示“感激/感谢（appreciate）”。此外，其他选项中只有 appreciate 是动词，可以直接填入充当谓语。",
            cn: "在我们的技术团队努力解决这一网络问题时，我们由衷感谢您的耐心配合。",
            jp: "技術チームがこのネットワーク問題の解決に取り組む間、皆様が辛抱強く（patience）待ってくださることに心より感謝（appreciate）いたします。"
        }
    },
    {
        id: 4,
        target: "track",
        category: "简单",
        stem: "Customers can easily ________ their shipments by entering the unique tracking number online.",
        options: ["track", "estimate", "launch", "editor"],
        correct: "track",
        explanations: {
            guide: "及物动词词义辨析。情态动词 can 和副词 easily 后面需要接动词原形，宾语为 their shipments（他们的货物）。",
            family: "track (v.追踪/跟踪) | estimate (v.估算) | launch (v.发布) | editor (n.编辑)。",
            details: "通过在网上输入“追踪号码（tracking number）”，客户可以方便地“追踪（track）”自己的货物状态。editor 为名词，首先排除；其他动词无法与货件完美搭配。",
            cn: "客户可以通过在网上输入唯一的追踪号码，轻松追踪他们的货物。",
            jp: "お客様は、固有の追跡番号をオンラインで入力するだけで、配送状況を簡単に追跡（track）することができます。"
        }
    },
    {
        id: 5,
        target: "unfortunately",
        category: "简单",
        stem: "________, the keynote speaker had to cancel her appearance due to an unexpected scheduling conflict.",
        options: ["Unfortunately", "Previous", "Commercial", "Invitation"],
        correct: "Unfortunately",
        explanations: {
            guide: "句首修饰副词判定。空格位于完整句子最前端且后面有逗号隔开，表明此处需要填入一个修饰全句的副词。",
            family: "Unfortunately (adv.不幸地/遗憾地) | Previous (adj.以前的) | Commercial (adj.商业的) | Invitation (n.邀请)。",
            details: "后面陈述的事实是“主讲嘉宾因日程冲突被迫取消出席（cancel her appearance）”，这属于坏消息通知，句首应填入带有遗憾、不幸语气的副词 Unfortunately。",
            cn: "遗憾的是，主讲嘉宾由于意想不到的日程冲突，不得不取消出席活动。",
            jp: "残念ながら（Unfortunately）、基調講演のスピーカーは予期せぬスケジュールの重複により、出席を取り消さざるを得なくなりました。"
        }
    },
    {
        id: 6,
        target: "editor",
        category: "简单",
        stem: "The chief ________ approved the final draft of the corporate newsletter before it went to print.",
        options: ["editor", "track", "launch", "appreciate"],
        correct: "editor",
        explanations: {
            guide: "复合名词职位辨析。空格与前面的 chief（首席/总）结合，构成句子的主语，后续动作是 approved the final draft（批准最终定稿）。",
            family: "editor (n.编辑) | track (v./n.追踪) | launch (v./n.发布) | appreciate (v.感激)。",
            details: "能够审批简报定稿（final draft）的企业职位通常是“总编辑 / 首席编辑（chief editor）”。其他选项无法与 chief 连用并执行“审批稿件”这一动作。",
            cn: "总编辑在企业简报付印前批准了其最终定稿。",
            jp: "編集長（chief editor）は、社内報が印刷に回される前に、その最終原稿を承認しました。"
        }
    },
    {
        id: 7,
        target: "previous",
        category: "中等",
        stem: "Candidates applying for the senior managerial post must have at least five years of ________ experience.",
        options: ["previous", "commercial", "informative", "voluntary"],
        correct: "previous",
        explanations: {
            guide: "形容词词义与职场定语搭配。空格用于修饰名词 experience（经验），并与前面的 five years of 共同限制录用标准。",
            family: "previous (adj.先前的/以前的) | commercial (adj.商业的) | informative (adj.提供丰富信息的) | voluntary (adj.自愿的)。",
            details: "招聘高管岗位（managerial post）时，通常要求申请人具备至少五年的“以往经验/相关经验（previous experience）”。这是托业招聘场景的经典表达。",
            cn: "申请高级管理职位的候选人必须具备至少五年的相关工作经验。",
            jp: "上級管理職に応募する候補者は、少なくとも5年間の実務経験（previous experience / 過去の経験）が必須となります。"
        }
    },
    {
        id: 8,
        target: "commercial",
        category: "中等",
        stem: "The city council approved the construction of a new ________ complex in the central business district.",
        options: ["commercial", "previous", "successful", "executive"],
        correct: "commercial",
        explanations: {
            guide: "名词前的修饰语及地缘经济语境辨析。空格用于修饰名词 complex（综合体/大楼群体），地点设定在中央商务区（central business district）。",
            family: "commercial (adj.商业的) | previous (adj.先前的) | successful (adj.成功的) | executive (adj.行政的/管理层的)。",
            details: "在中央商务区建造的多功能建筑群，在商业英语中标准表述为“商业综合体（commercial complex）”。successful 虽然语法可行，但在城市规划通告语境中不符合惯用搭配。",
            cn: "市议会批准了在中央商务区建设一座全新商业综合体的计划。",
            jp: "市議会は、中心業務地区（CBD）における新しい商業施設（commercial complex）の建設を承認しました。"
        }
    },
    {
        id: 9,
        target: "reference",
        category: "中等",
        stem: "Please retain a digital copy of the signed agreement for your future ________.",
        options: ["reference", "invitation", "merchandise", "transportation"],
        correct: "reference",
        explanations: {
            guide: "特定商务短语与名词辨析。空格置于 for your future 之后，作介词短语的末端核心名词，需要选择与合同文件保存目的相符的词。",
            family: "reference (n.参考/查阅) | invitation (n.邀请) | merchandise (n.商品) | transportation (n.运输)。",
            details: "for your future reference 是商务合同、邮件 and 通知里的绝对高频固定短语，意为“供您日后参考/查阅”。保存合同副本的目的正是为了日后有据可查。",
            cn: "请保留一份已签署协议的电子副本，以备日后参考。",
            jp: "後日の参照（reference / 確認）のために、署名済みの合意書のデジタルコピーを保管してください。"
        }
    },
    {
        id: 10,
        target: "invitation",
        category: "中等",
        stem: "The public relations department will extend a formal ________ to the prestigious tech firm's executives.",
        options: ["invitation", "estimate", "refund", "branch"],
        correct: "invitation",
        explanations: {
            guide: "动宾固定搭配及名词辨析。空格前面有动词 extend（发出/延伸）和形容词 formal（正式的），后面由 to 引导接受对象，需填入匹配的动宾搭配。",
            family: "invitation (n.邀请/邀请函) | estimate (n.估算) | refund (n.退款) | branch (n.分部)。",
            details: "公关部（public relations department）对外部高管发出的常规动作是“发出正式邀请（extend a formal invitation）”。其他名词均无法与动词 extend 构成此类核心职场搭配。",
            cn: "公关部将向这家知名科技公司的高管发出正式邀请。",
            jp: "広報部は、その名門テック企業のエグゼクティブたちに正式な招待（invitation）を送る予定です。"
        }
    },
    {
        id: 11,
        target: "estimate",
        category: "中等",
        stem: "Structural engineers ________ that the renovation of the historical grid system will take eight months.",
        options: ["estimate", "launch", "track", "appreciate"],
        correct: "estimate",
        explanations: {
            guide: "动词词义与宾语从句逻辑判定。主语是结构工程师（Structural engineers），空格后是一个 that 引导的宾语从句，陈述工期“将花费八个月（will take eight months）”。",
            family: "estimate (v.估算/估计) | launch (v.启动) | track (v.追踪) | appreciate (v.感激)。",
            details: "对于未来的时间和工程花费进行预测和计算，工程师们所做的动作为“估算/估计（estimate）”，后接 that 从句属于典型用法。其他动词在语意上无法引导这段关于时间长度的判断。",
            cn: "结构工程师们估计，这座历史性电网系统的改造将需要花费八个月的时间。",
            jp: "構造エンジニアたちは、歴史的なグリッドシステムの改修には8ヶ月かかると見積もって（estimate）います。"
        }
    },
    {
        id: 12,
        target: "launch",
        category: "中等",
        stem: "The branding team celebrated a highly lucrative product ________ that boosted quarterly revenue.",
        options: ["launch", "editor", "reference", "description"],
        correct: "launch",
        explanations: {
            guide: "复合名词定语修饰。空格在修饰语 product（产品）后面，且前面有形容词 lucrative（获利丰厚的），需填入名词构成合理的事项名词短语。",
            family: "launch (n.发布/投放) | editor (n.编辑) | reference (n.参考) | description (n.描述)。",
            details: "能够使季度收入大增（boosted quarterly revenue）的营销活动必定是“产品发布/产品投放市场（product launch）”。其他名词结合后无法表达带来利润的商务事件。",
            cn: "品牌团队庆祝了一场带来丰厚利润的产品发布会，该发布会大幅提升了季度收入。",
            jp: "ブランディングチームは、四半期売上を大きく押し上げた、非常に有益な新製品発表（product launch）を祝いました。"
        }
    },
    {
        id: 13,
        target: "appreciate",
        category: "困难",
        stem: "The board of directors expressed their deep ________ for Ms. Vance's dedicated service during the merger.",
        options: ["appreciation", "appreciate", "appreciative", "appreciably"],
        correct: "appreciation",
        explanations: {
            guide: "词性判定与定语修饰语判定。空格前有物主代词 their 和形容词 deep（深切的），此处必须填入名词作 expressed 的直接宾语。",
            family: "appreciation (n.感激/感谢) | appreciate (v.感激) | appreciative (adj.感激的) | appreciably (adv.明显地)。",
            details: "express one's appreciation for sth 为职场和托业考试中的高频固定套话，意为“对某事表达感激之情”。其他词性如动词 appreciate 或形容词 appreciative 均不能放在该语法位置。",
            cn: "董事会对万斯女士在公司合并期间的奉献精神表达了深切的谢意。",
            jp: "取締役会は、企業合併（merger）におけるヴァンス氏の献身的な貢献に対して、深い感謝（appreciation）を表明しました。"
        }
    },
    {
        id: 14,
        target: "track",
        category: "困难",
        stem: "Implementing the automated inventory ________ software has significantly reduced warehouse discrepancies.",
        options: ["tracking", "track", "tracker", "trackable"],
        correct: "tracking",
        explanations: {
            guide: "复合名词与动名词作定语修饰语判定。空格位于名词 inventory（库存）和 software（软件）之间，需要一个名词或动名词共同组合成复合名词短语形式。",
            family: "tracking (n.追踪/动名词形式) | track (v./n.轨道/追踪) | tracker (n.追踪器) | trackable (adj.可追踪的)。",
            details: "inventory tracking software 是专门的供应链术语，意为“库存追踪软件”。这里的 tracking 作为动名词充当修饰成分，表示软件的功能是执行库存状态的持续追踪。单数 track 无法组成此术语。",
            cn: "采用自动化库存追踪软件大大减少了仓库的账实不符问题。",
            jp: "自動化された在庫追跡（inventory tracking）ソフトウェアの導入により、倉庫の在庫誤差（discrepancies）が大幅に減少しました。"
        }
    },
    {
        id: 15,
        target: "previous",
        category: "困难",
        stem: "The positions now open in the financial audit department were ________ held by temporary consultants.",
        options: ["previously", "previous", "previousness", "preceding"],
        correct: "previously",
        explanations: {
            guide: "语境修饰副词与被动语态夹层判定。空格位于助动词 were 和过去分词 held 之间，该结构中间只能填入副词来修饰动词过去分词。",
            family: "previously (adv.以前/先前) | previous (adj.以前的) | previousness (n.先前) | preceding (adj.在前的)。",
            details: "were previously held 构成“以前由……担任”之意。形容词 previous 或 preceding 无法直接插入助动词与过去分词之间修饰被动动作，故唯一正确的选项是副词 previously。",
            cn: "财务审计部目前空缺的这些职位，先前是由临时顾问担任的。",
            jp: "現在、財務監査部門で募集中の役職は、以前は（previously）臨時コンサルタントによって占められていたものです。"
        }
    },
    {
        id: 16,
        target: "editor",
        category: "困难",
        stem: "The local marketing agency is seeking a creative specialist with extensive ________ oversight experience.",
        options: ["editorial", "editor", "edition", "edited"],
        correct: "editorial",
        explanations: {
            guide: "名词修饰语与形容词派生辨析。空格后有核心复合名词短语 oversight experience（监督管理经验），前面有形容词 extensive，此处需要填入一个形容词作定语修饰名词短语。",
            family: "editorial (adj.编辑的/社论的) | editor (n.编辑) | edition (n.版本) | edited (v.过去式/过去分词)。",
            details: "editorial oversight 属于传媒和内容营销领域的行业术语，意为“编辑层面的监督审查权”。名词 editor 或 edition 无法直接放在该位置作定语来修饰 oversight，故选形容词派生词 editorial。",
            cn: "这家当地营销机构正在寻找一位在内容编辑审查方面具有丰富经验的创意专家。",
            jp: "地元のマーケティング代理店は、広範な編集上の監督（editorial oversight）経験を持つクリエイティブ・スペシャリストを募集しています。"
        }
    },
    {
        id: 17,
        target: "commercial",
        category: "困难",
        stem: "Before the biomedical device can be ________ distributed, it must obtain full regulatory clearance.",
        options: ["commercially", "commercial", "commerce", "commercialize"],
        correct: "commercially",
        explanations: {
            guide: "被动语态中的副词修饰判定。空格位于情态动词被动语态结构 can be 和过去分词 distributed 之间，此处必须填入副词来修饰分词动词形态。",
            family: "commercially (adv.商业化地/从商业角度) | commercial (adj.商业的) | commerce (n.商业) | commercialize (v.使商业化)。",
            details: "commercially distributed 意为“进行商业化分销/投放到市场上销售”。根据语法规则，修饰过去分词形式的定语必须使用副词形式 commercially，排除其他词性选项。",
            cn: "在生物医疗设备能够进行商业分销之前，它必须获得全面的监管许可。",
            jp: "その生物医療機器が商業的に（commercially）流通・販売される前に、完全な規制当局の承認（clearance）を取得しなければなりません。"
        }
    },
    {
        id: 18,
        target: "estimate",
        category: "困难",
        stem: "The ________ cost of the structural repairs exceeded the initial management budget by twenty percent.",
        options: ["estimated", "estimate", "estimation", "estimating"],
        correct: "estimated",
        explanations: {
            guide: "过去分词作定语的用法辨析。空格前有定冠词 The，后接核心名词 cost（成本），此处需要一个具有形容词功能的词作前置定语。",
            family: "estimated (adj./分词形式，估计的) | estimate (v./n.估计) | estimation (n.估计/看法) | estimating (v.现在分词/动名词)。",
            details: "the estimated cost 是项目预算及工程方案中极高频的固定搭配，意为“估计成本 / 预估费用”。过去分词 estimated 在此完全形容词化，作定语修饰 cost。其他选项不符语境或语法功能。",
            cn: "结构修复的预估成本比最初的管理预算超出了百分之二十。",
            jp: "構造補修の概算（estimated / 見積もられた）費用は、当初の管理予算を20％上回りました。"
        }
    }
];