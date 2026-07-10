// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag91-100.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "development",
        pos: "名",
        ipa: "/dɪˈveləpmənt/",
        cn: "发展，开发，研制",
        jp: "开发、発展、進展",
        family: "develop / developer / developing / developed / developmental",
        tips: "托业高频核心词。在商务场景中常用于 product development（产品开发）、professional development（职业发展/员工培训）或 research and development（研发，简称 R&D）。",
        desc: "The development is fast."
    },
    {
        word: "accounting",
        pos: "名",
        ipa: "/əˈkaʊntɪŋ/",
        cn: "会计，会计学，账务",
        jp: "会計、経理、会計学",
        family: "account / accountant / accountable / accounts",
        tips: "财务场景绝对核心词。常考复合名词搭配，如 accounting department（会计部）、accounting records（会计记录）、accounting firm（会计师事务所）。",
        desc: "She works in accounting."
    },
    {
        word: "benefit",
        pos: "名/動",
        ipa: "/ˈbenɪfɪt/",
        cn: "利益，福利；有益于，得益于",
        jp: "利益、福利厚生；～の利益になる",
        family: "beneficial / beneficiary / benefits / benefited",
        tips: "作名词在人力资源场景中常指公司提供的非薪资福利，如 employee benefits（员工福利）。作动词常考搭配 benefit from（从……中受益）。",
        desc: "The health benefit is good."
    },
    {
        word: "rent",
        pos: "名/動",
        ipa: "/rent/",
        cn: "租金；租用，出租",
        jp: "家賃、賃貸料；賃貸する",
        family: "rental / renter / rented / renting / rents",
        tips: "房屋租赁与差旅场景核心词。作动词表示短期租用设备或车辆；作名词指固定缴纳的租金。其名词派生词 rental 常见于 car rental（汽车租赁）或 rental property（租赁资产）。",
        desc: "We rent an office."
    },
    {
        word: "agency",
        pos: "名",
        ipa: "/ˈeɪdʒənsi/",
        cn: "代理处，中介机构，代理机构",
        jp: "代理店、仲介機関",
        family: "agent / agencies",
        tips: "特指提供某种专业服务的商业机构。托业核心搭配有 travel agency（旅行社）、advertising agency（广告公司）、employment agency（职业介绍所/猎头公司）。",
        desc: "Contact the travel agency."
    },
    {
        word: "upcoming",
        pos: "形",
        ipa: "/ˈʌpkʌmɪŋ/",
        cn: "即将到来的，即将来临的",
        jp: "近々行われる、今度の",
        family: "upcoming / come / outcome",
        tips: "商务行程与活动筹备的核心形容词，相当于 forthcoming。常放在名词前作定语，如 upcoming event（即将举行的活动）、upcoming merger（即将到来的合并）。",
        desc: "The upcoming event is fun."
    },
    {
        word: "accept",
        pos: "動",
        ipa: "/əkˈsept/",
        cn: "接受，认可，同意",
        jp: "受け入れる、承認する",
        family: "acceptance / acceptable / accepted / acceptably",
        tips: "合同签署与职场录用场景高频词。常见搭配有 accept an offer（接受录用/报价）、accept the terms（接受条款）。名词形式为 acceptance（接受/承认）。",
        desc: "They accept credit cards."
    },
    {
        word: "representative",
        pos: "名/形",
        ipa: "/ˌreprɪˈzentətɪv/",
        cn: "代表，代理人；具代表性的",
        jp: "代表者、担当者；代表的な",
        family: "represent / representation / representatives",
        tips: "在日常职场中常用来指代特定岗位的员工，如 customer service representative（客服代表，常简称 CSR）、sales representative（销售代表）。",
        desc: "Call the representative."
    },
    {
        word: "author",
        pos: "名/動",
        ipa: "/ˈɔːθər/",
        cn: "作者，撰稿人；编写，创作",
        jp: "著者、作家；執筆する",
        family: "authorize / authorization / authority / authorized",
        tips: "在商务办公和出版物语境中，指书籍、技术报告或公司政策的撰写人。作动词时表示“亲自撰写（报告、方针等）”。注意不要与派生词 authorize（授权）相混淆。",
        desc: "He is a famous author."
    },
    {
        word: "deadline",
        pos: "名",
        ipa: "/ˈdedlaɪn/",
        cn: "截止日期，最后期限",
        jp: "締め切り、最終期限",
        family: "deadlines",
        tips: "项目管理和时间效率核心词。托业高频动宾短语有 meet a deadline（赶上截止日期）、miss a deadline（错过最后期限）、extend a deadline（延长截止日期）。",
        desc: "The deadline is tomorrow."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "development",
        category: "简单",
        stem: "The executive director announced that the corporate budget for product ________ will be increased next year.",
        options: ["development", "accounting", "agency", "deadline"],
        correct: "development",
        explanations: {
            guide: "介词短语中的名词中心语。空格位于介词 for 和名词 product 后面，需要填入名词共同构成复合名词短语，选 development。",
            family: "development (n.开发) | accounting (n.会计) | agency (n.代理处) | deadline (n.截止日期)。",
            details: "product development（产品开发）是商务英语中的固定高频搭配，契合董事会增加该项目预算的语境。",
            cn: "执行董事宣布，明年用于产品开发的网络及公司预算将会增加。",
            jp: "専務取締役は、来年の製品開発（development）に関する企業予算を増額することを発表しました。"
        }
    },
    {
        id: 2,
        target: "accounting",
        category: "简单",
        stem: "Please submit all your travel expense receipts to the ________ department by Friday afternoon.",
        options: ["accounting", "benefit", "author", "upcoming"],
        correct: "accounting",
        explanations: {
            guide: "定冠词与名词之间的修饰成分。空格修饰后面的部门名词 department，结合提交报销凭证的场景，选 accounting。",
            family: "accounting (n.会计/财务) | benefit (n.福利) | author (n.作者) | upcoming (adj.即将到来的)。",
            details: "accounting department（会计部/财务部）负责处理公司日常的报销与账务，提交差旅费发票必然是交给该部门。",
            cn: "请在周五下午之前将您所有的差旅费收据提交给会计部。",
            jp: "金曜日の午後までに、出張費の領収書をすべて経理（accounting）部へ提出してください。"
        }
    },
    {
        id: 3,
        target: "benefit",
        category: "简单",
        stem: "Employees who work overtime are eligible to receive additional health ________ options under the new contract.",
        options: ["benefit", "rent", "accept", "representative"],
        correct: "benefit",
        explanations: {
            guide: "名词词义辨析与复合名词搭配。空格与 health 组合接受形容词 additional 的修饰，指代公司提供的制度保障，选 benefit。",
            family: "benefit (n.福利/利益) | rent (n.租金) | accept (v.接受) | representative (n.代表)。",
            details: "health benefit options 意为健康福利选项。新合同规定加班员工享有更多医疗福利，符合人力资源场景逻辑。",
            cn: "根据新合同，加班的员工有资格获得额外的健康福利方案选择。",
            jp: "新しい契約の下で、残業をする従業员は追加の医療福利厚生（benefit）オプションを受け取る資格があります。"
        }
    },
    {
        id: 4,
        target: "rent",
        category: "简单",
        stem: "The monthly ________ for the new downtown office space must be paid on the first day of each month.",
        options: ["rent", "agency", "deadline", "development"],
        correct: "rent",
        explanations: {
            guide: "句子的主语名词辨析。空格前有定冠词 the 和形容词 monthly（每月的），且后接办公空间租赁背景，选 rent。",
            family: "rent (n.租金) | agency (n.代理处) | deadline (n.截止日期) | development (n.发展)。",
            details: "monthly rent 属于标准的商务租房术语，意为“月租金”。每个月的第一天支付新办公室的月租金合乎情理。",
            cn: "市中心新办公空间的空间月租金必须在每月的第一个工作日支付。",
            jp: "新しいダウンタウンのオフィススペースの月々の家賃（rent）は、毎月1日に支払わなければなりません。"
        }
    },
    {
        id: 5,
        target: "agency",
        category: "简单",
        stem: "The management decided to hire a local advertising ________ to help launch our new product campaign.",
        options: ["agency", "accounting", "author", "upcoming"],
        correct: "agency",
        explanations: {
            guide: "不定冠词与行业修饰语后的名词。空格前有 advertising（广告），需要填入一个名词组成机构名称，选 agency。",
            family: "agency (n.代理商/机构) | accounting (n.会计) | author (n.作者) | upcoming (adj.即将到来的)。",
            details: "advertising agency 意为广告公司。聘请外部广告中介机构来协助推广新产品是企业常见的市场营销举措。",
            cn: "管理层决定聘请一家当地的广告代理公司，来协助发起我们的新产品宣传活动。",
            jp: "経営陣は、新製品キャンペーンの立ち上げを支援してもらうために、地元の広告代理店（agency）を雇うことに決めました。"
        }
    },
    {
        id: 6,
        target: "deadline",
        category: "简单",
        stem: "The senior project manager reminded the team that the strict ________ for submitting the report is tomorrow.",
        options: ["deadline", "benefit", "accept", "representative"],
        correct: "deadline",
        explanations: {
            guide: "定冠词和形容词修饰下的主语名词。空格需要能够承受 strict（严格的）修饰，并作为 is tomorrow 的主语，选 deadline。",
            family: "deadline (n.截止日期) | benefit (n.福利) | accept (v.接受) | representative (n.代表)。",
            details: "strict deadline 表示严格的截止日期。项目经理提醒团队报告的最后提交期限在明天，完全切合时间管理的职场逻辑。",
            cn: "高级项目经理提醒团队，提交报告的严格截止日期是明天。",
            jp: "シニアプロジェクトマネージャーは、レポート提出の厳格な締め切り（deadline）が明日であることをチームに思い出させました。"
        }
    },
    {
        id: 7,
        target: "中等",
        target: "upcoming",
        category: "中等",
        stem: "Details about the ________ corporate merger will be officially disclosed during the press conference next Monday.",
        options: ["upcoming", "accept", "accounting", "development"],
        correct: "upcoming",
        explanations: {
            guide: "名词前的形容词定语。空格位于定冠词 the 和名词短语 corporate merger（企业合并）之间，需要填入形容词修饰名词，选 upcoming。",
            family: "upcoming (adj.即将到来的) | accept (v.接受) | accounting (n.会计) | development (n.发展)。",
            details: "upcoming corporate merger 意为“即将到来的企业合并”。该合并事宜将在下周的发布会上公布，时态上指向未来，符合前置修饰逻辑。",
            cn: "关于即将到来的企业合并的详情将在下周一的新闻发布会上正式披露。",
            jp: "来週月曜日の記者会見で、今度の（upcoming）企業合併に関する詳細が正式に発表される予定です。"
        }
    },
    {
        id: 8,
        target: "accept",
        category: "中等",
        stem: "The client selection committee is fully expected to ________ the revised terms of the consulting contract.",
        options: ["accept", "benefit", "rent", "agency"],
        correct: "accept",
        explanations: {
            guide: "动词不定式符号后的动词原形。to 后面需要接动词原形来担任句子的目的成分，结合宾语 the revised terms（修改后的条款），选 accept。",
            family: "accept (v.接受) | benefit (v.有益于/n.福利) | rent (v.租借/n.租金) | agency (n.中介)。",
            details: "accept the terms 属于合同谈判语境下的标准核心词汇搭配，表示“接受条款”。其余选项皆无法与条款构成通顺的动宾语义。",
            cn: "客户甄选委员会被普遍预计会接受咨询合同修改后的条款。",
            jp: "クライアント選考委員会は、コンサルティング契約の改定条件を完全に受け入れる（accept）と予想されています。"
        }
    },
    {
        id: 9,
        target: "representative",
        category: "中等",
        stem: "An experienced customer service ________ will assist you with the software installation process shortly.",
        options: ["representative", "author", "deadline", "upcoming"],
        correct: "representative",
        explanations: {
            guide: "修饰语下的职场岗位人称名词。空格前有 customer service（客户服务），需要填入一个指代相关岗位人员的可数名词单数作主语，选 representative。",
            family: "representative (n.代表) | author (n.作者) | deadline (n.截止日期) | upcoming (adj.即将到来的)。",
            details: "customer service representative 意为“客服代表”，是托业高频岗位职衔。该代表将协助客户完成软件安装过程。",
            cn: "一位经验丰富的客服代表很快就会协助您完成软件的安装流程。",
            jp: "経験豊富なカスタマーサービス担当者（representative）が、間もなくソフトウェアのインストールプロセスを案内します。"
        }
    },
    {
        id: 10,
        target: "author",
        category: "中等",
        stem: "Dr. Arisawa is the lead ________ of the groundbreaking research paper on renewable energy industrial systems.",
        options: ["author", "development", "accounting", "agency"],
        correct: "author",
        explanations: {
            guide: "特定文献背景下的名词辨析。空格前有冠词和形容词 the lead（首席的/主要的），后有 research paper（研究论文），提示填入代表作者的名词，选 author。",
            family: "author (n.作者) | development (n.开发) | accounting (n.会计) | agency (n.代理商)。",
            details: "lead author 指论文或报告的“第一作者/主要撰写人”。由于涉及学术或企业白皮书发布场景，主语博士显然应当与作者身份匹配。",
            cn: "有泽博士是这篇关于可再生能源工业系统突破性研究论文的主要作者。",
            jp: "有沢博士は、再生可能エネルギー産業システムに関する画期的な研究論文の筆頭著者（author）です。"
        }
    },
    {
        id: 11,
        target: "development",
        category: "中等",
        stem: "The regional technology firm is looking to hire a senior web ________ to manage its new e-commerce platform.",
        options: ["developer", "development", "develop", "developing"],
        correct: "developer",
        explanations: {
            guide: "不定冠词与定语修饰语后的职位名词。空格前有 web（网页），后带有不定式短语作目的，此处应填入指代开发人员的名词，选 developer。",
            family: "developer (n.开发人员) | development (n.发展/开发) | develop (v.开发) | developing (adj.发展中的)。",
            details: "web developer 为行业专属复合人称名词，意为“网页开发人员”。招聘高级网页开发人员来管理电商平台切合职场IT招聘场景。",
            cn: "该地区的技术公司正计划聘请一位高级网页开发人员来管理其新的电子商务平台。",
            jp: "地域のIT企業は、新しいECプラットフォームを管理するシニアウェブ開発者（developer）の採用を目指しています。"
        }
    },
    {
        id: 12,
        target: "accounting",
        category: "中等",
        stem: "Mr. Lopez hired a certified public ________ to audit the logistics firm's annual financial statements.",
        options: ["accountant", "accounting", "account", "accountable"],
        correct: "accountant",
        explanations: {
            guide: "人称名词中心语辨析。前置词为 certified public（注册的/公开的），此处必须填入代表职业身份的可数名词单数，选 accountant。",
            family: "accountant (n.会计师) | accounting (n.会计学) | account (n.账户) | accountable (adj.负有责任的)。",
            details: "certified public accountant 属于财经场景中的标志性专有名词，常缩写为 CPA（注册会计师）。雇佣会计师去审计财务报表完全契合商务规则。",
            cn: "洛佩斯先生聘请了一位注册会计师来审计这家物流公司的年度财务报表。",
            jp: "ロペス氏は、物流会社の年次財務諸表を監査するために公認会計士（accountant）を雇いました。"
        }
    },
    {
        id: 13,
        target: "benefit",
        category: "困难",
        stem: "Financial analysts agree that expanding operations into overseas markets will be highly ________ to the company.",
        options: ["beneficial", "benefit", "beneficiary", "benefits"],
        correct: "beneficial",
        explanations: {
            guide: "系动词后的副词修饰与表语成分。空格前有系动词 will be 和程度副词 highly（高度地），此空必须填入一个形容词作表语，选 beneficial。",
            family: "beneficial (adj.有益的) | benefit (n./v.利益) | beneficiary (n.受益人) | benefits (n-pl.福利)。",
            details: "be beneficial to someone/something 为常用的商务陈述结构，意为“对……大有裨益”。其余选项均为名词或动词，无法接受 highly 修饰并担任表语。",
            cn: "金融分析师们一致认为，将业务扩展到海外市场对公司而言将是非常有益的。",
            jp: "財務アナリストは、海外市場への事業拡大が会社にとって非常に有益（beneficial）であるという意見で一致しています。"
        }
    },
    {
        id: 14,
        target: "rent",
        category: "困难",
        stem: "Please carefully check the terms of the car ________ agreement regarding the insurance policy before signing it.",
        options: ["rental", "rent", "renter", "rented"],
        correct: "rental",
        explanations: {
            guide: "高阶商务差旅名词短语复合。空格修饰后面的核心名词 agreement（协议），需要填入名词或专用名词定语来界定协议类别，选 rental。",
            family: "rental (n/adj.租赁) | rent (n./v.租金/租赁) | renter (n.租户) | rented (v-ed被租用的)。",
            details: "car rental agreement 为商旅差旅或汽车租赁场景专属术语，意为“汽车租赁协议”。虽然 rent 也可以作名词，但在修饰租赁业务协议时，必须用其派生形式 rental。",
            cn: "在签字之前，请仔细核对汽车租赁协议中关于保险政策的条款。",
            jp: "署名する前に、保険方針に関するレンタカー（rental）契約の条件を注意深く確認してください。"
        }
    },
    {
        id: 15,
        target: "accept",
        category: "困难",
        stem: "The formal ________ of the proposal by the executive board caused the organization's stock price to surge.",
        options: ["acceptance", "accept", "acceptable", "accepted"],
        correct: "acceptance",
        explanations: {
            guide: "定冠词与形容词后的主语名词。空格前有 The formal（正式的），后面跟有介词短语 of the proposal，需要填入名词充当全句主语，选 acceptance。",
            family: "acceptance (n.接受/承认) | accept (v.接受) | acceptable (adj.可接受的) | accepted (v-ed被接受的)。",
            details: "The formal acceptance 意为“正式接受/采纳”。董事会采纳了该提案导致股价大涨，名词形态完全符合主语语法和商业因果逻辑。",
            cn: "执行董事会正式采纳该提案，导致该机构的股价在短时间内急剧飙升。",
            jp: "執行取締役会による提案の正式な受諾（acceptance）により、同組織の株価は急騰しました。"
        }
    },
    {
        id: 16,
        target: "representative",
        category: "困难",
        stem: "Ms. Tanaka was chosen to ________ the regional branch office at the upcoming international sales convention.",
        options: ["represent", "representative", "representation", "representatives"],
        correct: "represent",
        explanations: {
            guide: "动词不定式引导的核心谓语。to 后面必须接动词原形来表明派遣人员的目的，根据后面的宾语 the regional branch office，选 represent。",
            family: "represent (v.代表) | representative (n.代表) | representation (n.代表/表现) | representatives (n-pl.代表们)。",
            details: "to represent the office 意为代表该办事处出席会议，属于典型的职场派遣表述。representative 为名词或形容词，在此处语法不成立。",
            cn: "田中女士被选中代表地区分支办公室出席即将举行的国际销售大会。",
            jp: "田中さんは、近く開催される国際販売大会で地域支社を代表（represent）する人物に選ばれました。"
        }
    },
    {
        id: 17,
        target: "author",
        category: "困难",
        stem: "Only ________ corporate laboratory agents are permitted to enter the vault containing sensitive medical data.",
        options: ["authorized", "author", "authorize", "authorization"],
        correct: "authorized",
        explanations: {
            guide: "名词前面的分词形容词定语。空格用于修饰人称主语名词 agents（代理人/人员），表达某种被赋予的资质，选 authorized。",
            family: "authorized (adj.经过授权的) | author (n.作者) | authorize (v.授权) | authorization (n.授权书)。",
            details: "authorized personnel/agents 意为“获得授权的人员”，是信息安全场景中绝对的核心高频搭配。未经授权的人员不可进入涉密区域。",
            cn: "只有获得授权的公司实验室人员才被允许进入存放敏感医疗数据的库房。",
            jp: "機密性の高い医療データが含まれている保管庫への立ち入りは、認可された（authorized）企業の研究所職員のみに許可されています。"
        }
    },
    {
        id: 18,
        target: "development",
        category: "困难",
        stem: "Investing heavily in ________ economies presents both significant operational risks and substantial growth opportunities.",
        options: ["developing", "development", "develop", "developer"],
        correct: "developing",
        explanations: {
            guide: "专有名词修饰语及分词形容词用法。空格修饰名词 economies（经济体），需要填入现在分词形式表示动态发展的状态，选 developing。",
            family: "developing (adj.发展中的) | development (n.发展) | develop (v.发展) | developer (n.开发商)。",
            details: "developing economies 属于宏观商务与全球投资场景中的专属术语，意为“发展中经济体/发展中国家”。投资这些地区兼具风险与高增长潜力。",
            cn: "大力投资发展中经济体既带来了显著的运营风险，也带来了巨大的增长机遇。",
            jp: "発展途上（developing）の経済圏への大規模な投資は、重大なオペレーショナルリスクと実質的な成長機会の両方をもたらします。"
        }
    }
];