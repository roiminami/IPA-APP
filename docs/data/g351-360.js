// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag341-350.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "analyze",
        pos: "動",
        ipa: "/ˈænəlaɪz/",
        cn: "分析，研究",
        jp: "分析する、調査する",
        family: "analysis / analyst / analytical / analytically",
        tips: "数据分析、市场调研及财务评估的核心动词。常考搭配 analyze the market trends（分析市场趋势）、analyze financial data（分析财务数据）。其名词形式 analysis（分析）与人称名词 analyst（分析师）也是常客。",
        desc: "We need to analyze the data."
    },
    {
        word: "physical",
        pos: "形/名",
        ipa: "/ˈfɪzɪkl/",
        cn: "身体的，物质的，有形的；身体检查",
        jp: "物理的な、有形の、身体の；健康診断",
        family: "physically / physics / physicist / physician",
        tips: "资产管理与员工福利高频词。作形容词时，常考搭配 physical address（实际/物理地址，区别于电子邮箱地址）、physical inventory（实物库存/盘点）。作名词时，指常规的身体检查（annual physical）。",
        desc: "The shop has a physical location."
    },
    {
        word: "praise",
        pos: "動/名",
        ipa: "/preɪz/",
        cn: "赞扬，表扬，称赞",
        jp: "称賛する、褒める；称賛、賛美",
        family: "praised / praising / praiseworthy",
        tips: "日常管理与员工激励核心词。作动词时常考 praise someone for something（因某事表扬某人）。在阅读中，经常与 commend 或 compliment 相互进行同义替换。",
        desc: "The manager praised the team."
    },
    {
        word: "observe",
        pos: "動",
        ipa: "/əbˈzɜːrv/",
        cn: "遵守，奉行；观察，监视",
        jp: "（規則などを）守る、遵守する、観察する",
        family: "observance / observation / observant / observer",
        tips: "合规管理与安全守则中的核心动词。在托业中，最常考其“遵守”的含义，如 observe safety rules（遵守安全规定）、observe the guidelines（遵守指南）。注意其名词形式 observance（遵守）与 observation（观察）的区别。",
        desc: "Please observe the safety rules."
    },
    {
        word: "reputation",
        pos: "名",
        ipa: "/ˌrepjuˈteɪʃn/",
        cn: "名声，声誉，名气",
        jp: "評判、名声",
        family: "reputable / reputably / repute",
        tips: "品牌公关与供应商评估核心名词。常考搭配 earn a solid reputation（赢得良好声誉）、established reputation（确立的名声）。其形容词 reputable 意为“声誉好的/受尊敬的”，常用来修饰企业或律所。",
        desc: "The firm has a good reputation."
    },
    {
        word: "aspect",
        pos: "名",
        ipa: "/ˈæspekt/",
        cn: "方面，面貌，外观",
        jp: "側面、局面、アスペクト",
        family: "aspects",
        tips: "项目评估与业务审计高频名词。极常考搭配 every aspect of the project / business（项目的/业务的每一个方面）。在阅读中常与 feature 或 detail 同义关联。",
        desc: "We considered every aspect."
    },
    {
        word: "appearance",
        pos: "名",
        ipa: "/əˈpɪrəns/",
        cn: "外观，外貌；露面，出席",
        jp: "外観、様子；出現、出席",
        family: "appear / appeared / apparently",
        tips: "设施翻修及商务活动高频名词。在后勤基建场景中指建筑或环境的“外观”（improve the overall appearance）；在商务社交或会议场景中指“露面/出席”，如 make a brief appearance（短暂出席）。",
        desc: "The building has a modern appearance."
    },
    {
        word: "accompany",
        pos: "動",
        ipa: "/əˈkʌmpəni/",
        cn: "陪伴，伴随，随行",
        jp: "同行する、伴う、同時に起こる",
        family: "accompanied / accompanying / accompaniment",
        tips: "访客接待与商务公关核心动词。在厂区或机密设施参观中，常考 be accompanied by...（在……的陪同下，注意介词用 by）。在文档往来中，accompanying document 指“随附文件”。",
        desc: "A guide will accompany you."
    },
    {
        word: "generous",
        pos: "形",
        ipa: "/ˈdʒenərəs/",
        cn: "慷慨的，大方的，丰盛的",
        jp: "寛大な、気前のよい、豊富な",
        family: "generously / generosity / generousness",
        tips: "慈善捐赠与员工福利常用形容词。常修饰奖金或拨款，如 generous bonus（丰厚的奖金）、generous donation（慷慨的捐款）。其名词形式 generosity 意为“慷慨/大方”。",
        desc: "Thank you for your generous donation."
    },
    {
        word: "labor",
        pos: "名/動",
        ipa: "/ˈleɪbər/",
        cn: "劳动，劳动力，工会；辛勤工作",
        jp: "労働、労働力、労働組合；勤労する",
        family: "laborious / laboriously / labored / laborer",
        tips: "生产制造、供应链与成本控制核心词。常考搭配 labor costs（人工成本）、manual labor（体力劳动）、labor union（工会）。其形容词形式 laborious 意为“费时费力的”。",
        desc: "The factory has high labor costs."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "reputation",
        category: "简单",
        stem: "The multinational tech giant has earned a solid ________ for delivering highly reliable electronic appliances.",
        options: ["reputation", "appearance", "generous", "office"],
        correct: "reputation",
        explanations: {
            guide: "及物动词宾语语义辨析。空格前有形容词 solid（坚实的/稳固的），作 earned 的宾语，结合公司提供可靠产品的背景选 reputation。",
            family: "reputation (n.声誉/名声) | appearance (n.外观) | generous (adj.慷慨的) | office (n.办公室)。",
            details: "earn a solid reputation for... 意为“因……赢得良好的声誉”，是企业宣传与公关文稿中极高频的经典搭配。其他选项词性不符或不合逻辑。",
            cn: "这家跨国科技巨头因提供高度可靠的电子电器而赢得了良好的声誉。",
            jp: "その多国籍IT大手は、信頼性の高い電化製品を提供することで、確固たる評判（reputation）を獲得しています。"
        }
    },
    {
        id: 2,
        target: "physical",
        category: "简单",
        stem: "Please make sure to write down the ________ address of your warehouse on the shipping forms.",
        options: ["physical", "analyze", "accompany", "proposed"],
        correct: "physical",
        explanations: {
            guide: "名词前的修饰形容词选择。空格后为名词 address（地址），结合 shipping forms（运单）要求填写仓库实际地址的语境，选 physical。",
            family: "physical (adj.物理的/实际的) | analyze (v.分析) | accompany (v.陪伴) | proposed (adj.被提议的)。",
            details: "physical address 意为“实际地址/物理地址”（区别于邮箱或电子地址），是物流运送及合同签署中的常见要求。其他动词或分词无法修饰地址。",
            cn: "请务必在出货单上写下您仓库的实际地址。",
            jp: "配送用紙に倉庫の実際の（physical）住所を必ず記入してください。"
        }
    },
    {
        id: 3,
        target: "praise",
        category: "简单",
        stem: "The general manager chose to ________ the sales department for their outstanding performance.",
        options: ["praise", "observe", "labor", "closed"],
        correct: "praise",
        explanations: {
            guide: "及物动词词义选择。chose to 后面需要接动词原形，结合宾语 department（部门）和后置原因 for their outstanding performance，选 praise。",
            family: "praise (v./n.表扬/赞扬) | observe (v.遵守/观察) | labor (n./v.劳动) | closed (adj.关闭的)。",
            details: "praise someone for... 意为“因某事表扬某人/某部门”，属于典型的人事管理与绩效激励场景。其他选项在语义上无法搭配。",
            cn: "总经理决定表扬销售部门，因为他们表现优异。",
            jp: "ゼネラルマネージャーは、優れた業績に対して営業部を称賛する（praise）ことにしました。"
        }
    },
    {
        id: 4,
        target: "generous",
        category: "简单",
        stem: "The executives decided to offer a ________ holiday bonus to all full-time employees.",
        options: ["generous", "aspect", "analyze", "unattended"],
        correct: "generous",
        explanations: {
            guide: "修饰名词的形容词辨析。空格在不定冠词 a 和名词 bonus（奖金）之间作定语，结合公司高管发放福利的背景，选 generous 表示奖金丰厚。",
            family: "generous (adj.大方的/丰盛的) | aspect (n.方面) | analyze (v.分析) | unattended (adj.无人照看的)。",
            details: "a generous bonus 意为“丰厚的奖金”，是评估福利与员工满意度时的常见人事搭配。其他选项词性不符或无法合理修饰 bonus。",
            cn: "高管们决定向所有全职员工提供丰厚的一笔节日奖金。",
            jp: "役員会は、すべての常勤の従業員に寛大な（generous）特別手当（ボーナス）を提供することを決定しました。"
        }
    },
    {
        id: 5,
        target: "accompany",
        category: "简单",
        stem: "Please make sure that a security officer will ________ you when you tour the research facility.",
        options: ["accompany", "praise", "analyze", "closed"],
        correct: "accompany",
        explanations: {
            guide: "及物动词语义选择。空格在情态动词 will 之后作从句谓语，宾语为 you，结合参观机要科研设施（tour the research facility）的安全保卫语境，选 accompany（陪同）。",
            family: "accompany (v.陪同/伴随) | praise (v.表扬) | analyze (v.分析) | closed (adj.关闭的)。",
            details: "accompany you 意为“陪同您/随行”，属于商务考察、厂区参观等接待场景中最基础的动宾搭配。其他动作不合逻辑。",
            cn: "当您参观研发设施时，请确保有安全官员陪同您。",
            jp: "研究施設を見学される際は、セキュリティ担当者が同行（accompany）することを確認してください。"
        }
    },
    {
        id: 6,
        target: "labor",
        category: "简单",
        stem: "The production manager noted that rising ________ costs have significantly reduced our quarterly profit.",
        options: ["labor", "aspect", "reputation", "weekend"],
        correct: "labor",
        explanations: {
            guide: "复合名词定语搭配。空格修饰后面的名词 costs（成本），结合生产经理（production manager）削减季度利润（reduced profit）的制造业语境，选 labor。",
            family: "labor (n.劳动/劳动力) | aspect (n.方面) | reputation (n.名声) | weekend (n.周末)。",
            details: "labor costs 意为“人工成本/劳动力成本”，是工业、制造以及供应链财务报告中最不可或缺的核心词汇之一。其余选项无法构成此标准商业术语。",
            cn: "生产经理指出，不断上升的人工成本已经显著降低了我们的季度利润。",
            jp: "生産マネージャーは、労働（labor）コストの上昇が当社の四半期利益を著しく減少させたと指摘しました。"
        }
    },
    {
        id: 7,
        target: "analyze",
        category: "中等",
        stem: "The marketing analysts need to ________ the latest customer feedback summaries before the keynote speech.",
        options: ["analyze", "observe", "appearance", "diligently"],
        correct: "analyze",
        explanations: {
            guide: "不及物/及物动词的选择与搭配。need to 后面要求接及物动词原形，宾语为 summaries（摘要），选 analyze 表示分析内容。",
            family: "analyze (v.分析) | observe (v.遵守) | appearance (n.外观) | diligently (adv.勤奋地)。",
            details: "analyze summaries 意为“分析摘要/数据”，符合市场调研与分析师（analysts）的日常职责。其他选项词性不符或意思不合逻辑。",
            cn: "营销分析师需要在主旨演讲前，分析最新的客户反馈摘要。",
            jp: "マーケティングアナリストは、基調講演の前に最新の顧客フィードバックの要約を分析（analyze）する必要があります。"
        }
    },
    {
        id: 8,
        target: "observe",
        category: "中等",
        stem: "All technicians must strictly ________ the standard safety guidelines when entering the hazardous area.",
        options: ["observe", "praise", "accompany", "lucrative"],
        correct: "observe",
        explanations: {
            guide: "情态动词后的动词词义辨析。must 后面接副词 strictly，空格处应为及物动词原形，后接宾语 guidelines（指南），选 observe 表示“遵守”。",
            family: "observe (v.遵守/观察) | praise (v.表扬) | accompany (v.陪同) | lucrative (adj.获利的)。",
            details: "observe guidelines 意为“遵守指南/规则”，是安全操作、系统检验及日常办公合规最常用的高频动宾搭配。其他选项无法与 guidelines 构成合理合规逻辑。",
            cn: "所有技术人员在进入危险区域时，必须严格遵守标准安全指南。",
            jp: "すべての技術者は、危険区域に入る際、標準的な安全ガイドラインを厳格に遵守（observe）しなければなりません。"
        }
    },
    {
        id: 9,
        target: "aspect",
        category: "中等",
        stem: "The board of directors carefully reviewed every ________ of the proposed merger agreement.",
        options: ["aspect", "reputation", "labor", "subsidy"],
        correct: "aspect",
        explanations: {
            guide: "限定词后的名词中心词。空格前有 every（每一个），后接 of 引导的介词短语，需填入可数名词单数，选 aspect 表达“方面”。",
            family: "aspect (n.方面/局面) | reputation (n.声誉) | labor (n.劳动) | subsidy (n.补贴)。",
            details: "every aspect of the agreement 意为“协议的每一个方面”，常用于合同审核、并购分析（merger agreement）等需要面面俱到的高阶法律和财务文本。其余名词不合语意。",
            cn: "董事会仔细审查了拟议合并协议的每一个方面。",
            jp: "取締役会は、提案された合併契約のあらゆる側面（aspect）を注意深く検討しました。"
        }
    },
    {
        id: 10,
        target: "appearance",
        category: "中等",
        stem: "The recent renovation work has greatly improved the overall ________ of our corporate lobby.",
        options: ["appearance", "generous", "physical", "clearance"],
        correct: "appearance",
        explanations: {
            guide: "名词中心语的语义辨析。空格前有形容词 overall（整体的），后接介词短语 of corporate lobby（公司大堂），结合翻新工程（renovation）的效果选 appearance。",
            family: "appearance (n.外观) | generous (adj.慷慨的) | physical (adj.物理的) | clearance (n.清除/许可)。",
            details: "overall appearance 意为“整体外观”，指代翻修工程对大楼环境视觉效果的改善。其余干扰项无法修饰大厅的属性。",
            cn: "最近的翻新工程极大地改善了我们公司大堂的整体外观。",
            jp: "最近の改装工事により、当社のオフィスロビーの全体的な外観（appearance）が大幅に向上しました。"
        }
    },
    {
        id: 11,
        target: "reputation",
        category: "中等",
        stem: "We decided to hire a highly ________ law firm to handle the complicated patent dispute.",
        options: ["reputable", "reputation", "repute", "reputably"],
        correct: "reputable",
        explanations: {
            guide: "修饰名词的形容词派生选择。空格前有副词 highly，后有名词 law firm（律师事务所），需填入形容词，选用 reputable（有信誉的/声誉好的）。",
            family: "reputable (adj.声誉好的) | reputation (n.声誉) | repute (v./n.名声) | reputably (adv.有名望地)。",
            details: "a highly reputable law firm 意为“一家声誉极佳的律师事务所”，是处理高难度法律争议（patent dispute）时的标准公关语境。其他同族词不符此处的形容词定语位置。",
            cn: "我们决定聘请一家声誉极佳的律师事务所来处理这起复杂的专利纠纷。",
            jp: "複雑な特許紛争に対処するために、非常に評判の良い（reputable）法律事務所を雇うことに決めました。"
        }
    },
    {
        id: 12,
        target: "analyze",
        category: "中等",
        stem: "The consulting firm provided a thorough ________ of our current organizational structure.",
        options: ["analysis", "analyze", "analyst", "analytical"],
        correct: "analysis",
        explanations: {
            guide: "冠词与形容词修饰下的名词中心语。空格前有 a 和 thorough（彻底的/详尽的），此位置需填入名词作 provided 的宾语，选 analysis。",
            family: "analysis (n.分析) | analyze (v.分析) | analyst (n.分析师) | analytical (adj.分析的)。",
            details: "provide a thorough analysis 意为“提供详尽分析”，常在管理咨询公司对企业进行架构诊断（organizational structure）时作为核心行为名词。其余同族词不作名词或意思不符。",
            cn: "该咨询公司对我们当前的组织架构进行了深入彻底的分析。",
            jp: "コンサルティング会社は、当社の現在の組織構造に関する詳細な分析（analysis）を提供してくれました。"
        }
    },
    {
        id: 13,
        target: "physical",
        category: "困难",
        stem: "The accounting department scheduled a ________ count of all warehouse inventory during the weekend.",
        options: ["physical", "physically", "physics", "physicist"],
        correct: "physical",
        explanations: {
            guide: "名词前的修饰性形容词派生词。空格用于修饰 count（计算/盘点），结合财务与库存管理（warehouse inventory）场景，选 physical 构成特定商业搭配。",
            family: "physical (adj.有形的/实物的/物理的) | physically (adv.身体上地) | physics (n.物理学) | physicist (n.物理学家)。",
            details: "physical count 意为“实物盘点/实物清点”，是财务审计和库存控制流程中极度硬核且频繁考察的高阶术语。物理学（physics）和副词形式无法修饰 count。",
            cn: "财务部门安排在周末对所有仓库库存进行实物盘点。",
            jp: "経理部は、週末にすべての倉庫在庫の現物（physical）棚卸しを予定しました。"
        }
    },
    {
        id: 14,
        target: "praise",
        category: "困难",
        stem: "The project supervisor's quick resolution of the database glitches was indeed highly ________.",
        options: ["praiseworthy", "praise", "praised", "praises"],
        correct: "praiseworthy",
        explanations: {
            guide: "系动词后的形容词表语。空格前有 was 和程度副词 highly，作为表语修饰主语的 resolution（解决动作），选用形容词 praiseworthy 表达“值得表扬的”。",
            family: "praiseworthy (adj.值得表扬的) | praise (v./n.赞扬) | praised (adj.受到赞扬的) | praises (n-pl/v-3sg)。",
            details: "praiseworthy action 意为“值得称赞的行为”，用来修饰妥善化解IT危机或突发系统故障（database glitches）的表现。其他同族词在意思和修饰逻辑上不合适。",
            cn: "项目主管对数据库故障的快速解决确实非常值得称赞。",
            jp: "プロジェクトスーパーバイザーによるデータベースの不具合の迅速な解決は、実に称賛に値する（praiseworthy）ものでした。"
        }
    },
    {
        id: 15,
        target: "observe",
        category: "困难",
        stem: "The legal department issued a memo regarding the strict ________ of federal environmental regulations.",
        options: ["observance", "observe", "observation", "observant"],
        correct: "observance",
        explanations: {
            guide: "定冠词修饰下的名词派生词。空格位于 the 和 strict（严格的）之后，作为介词 regarding 的宾语，此位置需要填入名词形式，选用表示“遵守”的名词 observance。",
            family: "observance (n.遵守/奉行) | observe (v.遵守) | observation (n.观察) | observant (adj.敏锐的)。",
            details: "strict observance of regulations 意为“严格遵守法规”。这是合规监管和法务通告（memo）中极高级、最规范的词汇。注意：observation 意为“观察”，与遵纪守法的语义无关，是托业高频形近词辨析难点。",
            cn: "法律部门发布了一份关于严格遵守联邦环保规章的备忘录。",
            jp: "法務部は、連邦環境規制の厳格な遵守（observance）に関する社内文書を発行しました。"
        }
    },
    {
        id: 16,
        target: "appearance",
        category: "困难",
        stem: "The keynote speaker is scheduled to make a brief ________ at the opening seminar tomorrow morning.",
        options: ["appearance", "appear", "appeared", "apparently"],
        correct: "appearance",
        explanations: {
            guide: "及物动词宾语的名词派生选择。空格前有动词 make 和形容词 brief（短暂的），需填入名词作宾语，选用 appearance 构成“出席”的客套表达。",
            family: "appearance (n.露面/出席) | appear (v.出现) | appeared (v-ed已出现) | apparently (adv.显然地)。",
            details: "make a brief appearance 意为“短暂出席/露个面”。在主旨发言人（keynote speaker）日程紧张而不得不协调出部分时间出席研讨会（seminar）时，这是极高雅的商务社交用语。",
            cn: "主旨发言人计划于明天上午在开幕研讨会上短暂露面。",
            jp: "基調講演者は、明日の朝のオープニングセミナーで短い出席（appearance）をすることが予定されています。"
        }
    },
    {
        id: 17,
        target: "generous",
        category: "困难",
        stem: "The municipal council praised the local entrepreneur for his outstanding ________ in funding the new park.",
        options: ["generosity", "generous", "generously", "generousness"],
        correct: "generosity",
        explanations: {
            guide: "物主代词和形容词修饰下的名词派生。空格前有 his 和形容词 outstanding（杰出的），作介词 for 的宾语，需填入抽象名词，选 generosity 表示“慷慨大方”。",
            family: "generosity (n.慷慨/大方) | generous (adj.慷慨的) | generously (adv.大方地) | generousness (n.大方状态)。",
            details: "outstanding generosity 意为“杰出的慷慨行为”，特指捐款、出资（funding the park）支持社区和公共事务时的慈善举措。其他词性或同族变体无法在此位置构成合理语法关系。",
            cn: "市议会赞扬了这位本地企业家在资助建设新公园方面表现出的杰出慷慨。",
            jp: "市議会は、新しい公園への資金提供におけるその地元起业家の素晴らしい寛大さ（generosity）を称賛しました。"
        }
    },
    {
        id: 18,
        target: "labor",
        category: "困难",
        stem: "Updating the database files manually turned out to be an extremely ________ process for the interns.",
        options: ["laborious", "labor", "labored", "laboriously"],
        correct: "laborious",
        explanations: {
            guide: "修饰单数可数名词的形容词。空格前有程度副词 extremely，后接单数名词 process（过程/工序），需填入形容词，选用 laborious（费时费力的/艰苦的）。",
            family: "laborious (adj.辛苦的/费力的) | labor (n./v.劳动) | labored (adj.吃力的) | laboriously (adv.费力地)。",
            details: "laborious process 意为“费时费力的过程”。指代手工录入数据（manually updating files）对实习生（interns）来说是个巨大、繁重的工作负荷。其余选项词性或语境不符。",
            cn: "手工更新数据库文件，事实证明对实习生们来说是一项极其繁琐费时的过程。",
            jp: "データベースファイルを手動で更新することは、実習生（インターン）たちにとって非常に骨の折れる（laborious）作業であることが分かりました。"
        }
    }
];