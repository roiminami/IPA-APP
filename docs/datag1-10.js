// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data21-30.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "anyway",
        pos: "副",
        ipa: "/ˈeniweɪ/",
        cn: "无论如何，总之",
        jp: "とにかく、いずれにせよ",
        family: "anyhow / anyways",
        tips: "常用于句首或句尾。在听力或长篇阅读中常作为语调转变或话题收尾的标识，用以表达“不管怎样，还是执行了某事”。",
        desc: "It was raining, but we went anyway."
    },
    {
        word: "following",
        pos: "前/形/名",
        ipa: "/ˈfɑːloʊɪŋ/",
        cn: "在……之后；接下来的；下列的",
        jp: "〜に続いて、〜の後に；次の、以下の",
        family: "follow / follower / followed",
        tips: "托业核心考点是作介词，完美等同于 after（例如：following the seminar = 研讨会之后）。作形容词修饰名词时常与定冠词连用（the following week）。",
        desc: "The office is closed following the storm."
    },
    {
        word: "refer",
        pos: "動",
        ipa: "/rɪˈfɜːr/",
        cn: "参考，查阅；提及；转介",
        jp: "言及する、参照する、照会する",
        family: "reference / referral / referee",
        tips: "不及物动词，高频核心搭配为 refer to（参考/查阅/提到）。其名词形式 reference letter（推荐信）或 reference material（参考资料）也是托业高频词。",
        desc: "Please refer to the user manual."
    },
    {
        word: "employee",
        pos: "名",
        ipa: "/ɪmˈplɔɪiː/",
        cn: "雇员，员工",
        jp: "従業員、社員",
        family: "employ / employer / employment / unemployment",
        tips: "注意与 employer（雇主）区分。托业常见复合词：employee benefits（员工福利），employee handbook（员工手册），current employees（现任员工）。",
        desc: "Every employee received a bonus."
    },
    {
        word: "offer",
        pos: "動/名",
        ipa: "/ˈɔːfər/",
        cn: "提供，出价；录取通知，提议",
        jp: "提供する、申し出る；オファー、提供、提案",
        family: "offering / counteroffer",
        tips: "双宾语动词：offer sb sth（向某人提供某物）。作名词时常考 job offer（工作机会）或 promotional offer（特惠活动）。",
        desc: "We offer a special discount today."
    },
    {
        word: "likely",
        pos: "形/副",
        ipa: "/ˈlaɪkli/",
        cn: "很有可能的；有希望的",
        jp: "〜しそうな、可能性が高い；おそらく",
        family: "likelihood / unlikely",
        tips: "托业阅读最高频句型：be likely to do sth（很有可能做某事）。注意它虽然以 -ly 结尾，但在托业中主要考查其形容词作表语或定语的用法。",
        desc: "It is likely to rain soon."
    },
    {
        word: "provide",
        pos: "動",
        ipa: "/prəˈvaɪd/",
        cn: "提供，供应",
        jp: "提供する、供給する、用意する",
        family: "provider / provision / provisional / provided",
        tips: "高频句型：provide sb with sth 或 provide sth to/for sb。其连词形式 provided that 意为“如果/只要”，是语法填空中的高阶难点。",
        desc: "They provide free Internet access."
    },
    {
        word: "available",
        pos: "形",
        ipa: "/əˈveɪləbl/",
        cn: "可获得的，可利用的；（人）有空的",
        jp: "利用可能な、入手できる；（人が）時間がある、空いている",
        family: "availability / unavailable",
        tips: "常考后置定语，紧跟在名词后面（e.g., tickets available）。用于人时表示有时间面谈或接待：The director is available now.",
        desc: "The report is now available online."
    },
    {
        word: "conference",
        pos: "名",
        ipa: "/ˈkɑːnfərəns/",
        cn: "会议，研讨会",
        jp: "会議、総会、カンファレンス",
        family: "confer / teleconference / videoconference",
        tips: "核心商务场景词，常考搭配包括：press conference（新闻发布会），conference room（会议室），annual conference（年会）。",
        desc: "The annual conference starts tomorrow."
    },
    {
        word: "purchase",
        pos: "動/名",
        ipa: "/ˈpɜːrtʃəs/",
        cn: "购买；购买的物品",
        jp: "購入する、買い入れる；購入（品）",
        family: "purchaser / purchasing",
        tips: "商务正式用语，比 buy 更高阶。作名词常考 proof of purchase（购买凭证），作动词或分词定语常考 purchasing department（采购部）。",
        desc: "You can purchase tickets online."
    }
];


// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "employee",
        category: "简单",
        stem: "Every new ________ must complete a mandatory safety orientation during their first week of work.",
        options: ["employee", "employ", "conference", "likely"],
        correct: "employee",
        explanations: {
            guide: "限定词与形容词后的名词考点。Every new 后面必须接可数名词单数，结合句意表示每一位“新员工”，选 employee。",
            family: "employee (n.雇员) | employ (v.雇用) | conference (n.会议) | likely (adj.很有可能的)。",
            details: "Every 必须修饰单数可数名词。employ 是动词，不能直接放在形容词 new 后面作主语核心词。",
            cn: "每位新员工在第一周工作内都必须完成强制性的安全入职培训。",
            jp: "すべての新入社員（employee）は、最初の1週間に義務的な安全オリエンテーションを完了しなければなりません。"
        }
    },
    {
        id: 2,
        target: "offer",
        category: "简单",
        stem: "The resort hotel will ________ a complimentary breakfast to all guests during the holiday weekend.",
        options: ["offer", "offering", "refer", "available"],
        correct: "offer",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，表达度假酒店“提供”免费早餐的业务行为，选 offer。",
            family: "offer (v.提供) | offering (n.提供物) | refer (v.参考) | available (adj.可获得的)。",
            details: "will 后面必须接动词原形充当谓语。offering 是名词或分词，不能在情态动词后担任核心动词。",
            cn: "在节假日周末期间，度假酒店将向所有客人提供免费早餐。",
            jp: "リゾートホテルは連休中、すべての宿泊客に無料の朝食を提供（offer）します。"
        }
    },
    {
        id: 3,
        target: "conference",
        category: "简单",
        stem: "Mr. Tanaka needs to book a large ________ room for the upcoming quarterly board meeting.",
        options: ["conference", "employee", "purchase", "anyway"],
        correct: "conference",
        explanations: {
            guide: "复合名词修饰用法。名词 conference 与后面的 room 组合，构成高频商务短语 conference room（会议室）。",
            family: "conference (n.会议) | employee (n.员工) | purchase (v./n.购买) | anyway (adv.无论如何)。",
            details: "空格处需要一个名词作定语修饰 room。根据上下文“董事会会议（board meeting）”可知，预订的是会议室而非其他场所。",
            cn: "田中先生将为即将召开的季度董事会会议预订一间大型会议室。",
            jp: "田中氏は、近く開催される四半期取締役会のために、広い会議室（conference room）を予約する必要があります。"
        }
    },
    {
        id: 4,
        target: "provide",
        category: "简单",
        stem: "Our technical support agents are trained to ________ detailed information about the new software updates.",
        options: ["provide", "provision", "likely", "following"],
        correct: "provide",
        explanations: {
            guide: "动词不定式结构。are trained to 后面需要加动词原形作为核心谓语，后接宾语结构，选 provide（提供）。",
            family: "provide (v.提供) | provision (n.条款/供应) | likely (adj.很有可能的) | following (prep.在…之后)。",
            details: "to 为不定式符号，后面必须接动词原形。provision 是名词（供应、条款），不符合此处的语法结构要求。",
            cn: "我们的技术支持代理接受过专业培训，能够提供有关新软件更新的详细信息。",
            jp: "当社の技術サポート担当者は、新しいソフトウェアアップデートに関する詳細な情報を提供（provide）するよう訓練されています。"
        }
    },
    {
        id: 5,
        target: "available",
        category: "简单",
        stem: "The updated corporate product catalog will be ________ on our website starting next Monday morning.",
        options: ["available", "availability", "conference", "refer"],
        correct: "available",
        explanations: {
            guide: "系动词后的表语成分。be 动词后面需要接形容词作表语，说明产品目录是“可获取的/可查阅的”，选 available。",
            family: "available (adj.可获得的) | availability (n.可获得性) | conference (n.会议) | refer (v.参考)。",
            details: "will be available 属于托业中最常见的高频表述，表示资料上线可供使用。availability 为名词，不能用作此处的表语。",
            cn: "更新后的公司产品目录将于下周一早上开始在我们的网站上提供。",
            jp: "更新された製品カタログは、来週の月曜日の朝から当社のウェブサイトで利用可能（available）になります。"
        }
    },
    {
        id: 6,
        target: "purchase",
        category: "简单",
        stem: "Registered clients can ________ tournament tickets directly from the official online vendor.",
        options: ["purchase", "purchaser", "employee", "offer"],
        correct: "purchase",
        explanations: {
            guide: "情态动词后的及物动词。情态动词 can 后面接动词原形，后接宾语 tickets，表示“购买”门票，选 purchase。",
            family: "purchase (v./n.购买) | purchaser (n.购买者) | employee (n.员工) | offer (v./n.提供)。",
            details: "can purchase 构成完整的谓语结构。purchaser 为名词（购买者），在此处逻辑与语法结构均不通。",
            cn: "注册客户可以直接从官方在线供应商处购买比赛门票。",
            jp: "登録されたお客様は、公式オンラインベンダーからトーナメントのチケットを直接購入（purchase）することができます。"
        }
    },
    {
        id: 7,
        target: "following",
        category: "中等",
        stem: "________ the unexpected announcement of the merger, the company's stock price experienced a sharp increase.",
        options: ["Following", "Follow", "Provide", "Likely"],
        correct: "Following",
        explanations: {
            guide: "介词引导时间状语。位于句首，后面紧跟名词短语 the unexpected announcement...，在语义上表示“在…之后”，选用介词 following。",
            family: "following (prep.在…之后) | follow (v.跟随) | provide (v.提供) | likely (adj.很有可能的)。",
            details: "Following 在此作为介词使用，功能相当于 after。follow 是动词，不能直接在句首引导名词短语充当时间状语短语。",
            cn: "在突然宣布合并之后，该公司的股票价格经历了急剧上涨。",
            jp: "合併の予期せぬ発表に続いて（Following）、同社の株価は急激に上昇しました。"
        }
    },
    {
        id: 8,
        target: "likely",
        category: "中等",
        stem: "Due to severe weather conditions in the northern region, the evening flight is ________ to be delayed.",
        options: ["likely", "likelihood", "available", "anyway"],
        correct: "likely",
        explanations: {
            guide: "固定句型搭配。be likely to do sth 是托业最高频的语法结构之一，意为“很有可能做某事”，选形容词 likely。",
            family: "likely (adj.很有可能的) | likelihood (n.可能性) | available (adj.可获得的) | anyway (adv.无论如何)。",
            details: "is likely to be delayed 构成标准的客观推推测表达。likelihood 是名词（可能性），不能与 be...to do 结构直接搭配。",
            cn: "由于北部地区天气恶劣，晚班航班很有可能会延误。",
            jp: "北部地域の悪天候のため、夜の便は遅れる可能性が高い（likely）です。"
        }
    },
    {
        id: 9,
        target: "refer",
        category: "中等",
        stem: "Before installing the network upgrade, please ________ to the technical manual provided by the IT department.",
        options: ["refer", "reference", "offer", "conference"],
        correct: "refer",
        explanations: {
            guide: "祈使句及短语搭配。please 后面接动词原形，且句中带有介词 to，构成固定搭配 refer to（参考/查阅），选 refer。",
            family: "refer (v.参考) | reference (n.参考/推荐) | offer (v./n.提供) | conference (n.会议)。",
            details: "refer to the technical manual 意为“查阅技术手册”。reference 是名词，不能直接在 please 后面充当祈使句的动词原形。",
            cn: "在安装网络升级之前，请参考 IT 部门提供的技术手册。",
            jp: "ネットワークのアップグレードをインストールする前に、IT部門から提供された技術マニュアルを参照（refer）してください。"
        }
    },
    {
        id: 10,
        target: "anyway",
        category: "中等",
        stem: "The budget for the project was extremely tight, but the marketing committee decided to proceed with the campaign ________.",
        options: ["anyway", "following", "purchase", "likely"],
        correct: "anyway",
        explanations: {
            guide: "副词修饰整个句子逻辑。位于句尾，表达转折或让步语气，意为“无论如何、不管怎样”，选副词 anyway。",
            family: "anyway (adv.无论如何) | following (prep.在…之后) | purchase (v./n.购买) | likely (adj.很有可能的)。",
            details: "句意表示虽然预算极其紧张，但营销委员会“还是/不管怎样”决定推进活动。其他选项均无法在句尾充当此类逻辑的副词修饰语。",
            cn: "项目的预算非常紧张，但营销委员会还是决定推进这次宣传活动。",
            jp: "プロジェクトの予算は非常に厳しかったのですが、マーケティング委員会はとにかく（anyway）キャンペーンを進めることに決めました。"
        }
    },
    {
        id: 11,
        target: "employee",
        category: "中等",
        stem: "The senior human resources manager designed a new digital platform to track ________ productivity more accurately.",
        options: ["employee", "employment", "provide", "available"],
        correct: "employee",
        explanations: {
            guide: "名词作定语修饰名词。employee 与后面的 productivity 组成高频复合名词结构，指“员工生产力/工作效率”。",
            family: "employee (n.员工) | employment (n.就业/雇用状态) | provide (v.提供) | available (adj.可获得的)。",
            details: "employee productivity 是企业管理场景中的常见专属词汇。employment 是指抽象的雇用状态，不符合修饰“具体生产力”的逻辑。",
            cn: "高级人力资源经理设计了一个新的数字化平台，以更准确地跟踪员工的工作效率。",
            jp: "シニア人事マネージャーは、従業員（employee）の生産性をより正確に追跡するための新しいデジタルプラットフォームを設計しました。"
        }
    },
    {
        id: 12,
        target: "available",
        category: "中等",
        stem: "Technical support specialists are ________ twenty-four hours a day to assist corporate clients with urgent issues.",
        options: ["available", "availability", "offer", "refer"],
        correct: "available",
        explanations: {
            guide: "形容词作表语。主语是复数名词 specialists，空格处在系动词 are 后面作表语，表示“可以提供服务的/有空的”，选 available。",
            family: "available (adj.可获得的/有空的) | availability (n.可获得性) | offer (v./n.提供) | refer (v.参考)。",
            details: "are available 24 hours a day 属于典型的客服宣传语。availability 是名词（可用性），无法在此充当主语补足语（表语）。",
            cn: "技术支持专家全天 24 小时提供服务，协助企业客户解决紧急问题。",
            jp: "テクニカルサポートの専門家は、企業の顧客の緊急の問題を支援するために、24時間体制で対応可能（available）です。"
        }
    },
    {
        id: 13,
        target: "following",
        category: "困难",
        stem: "The chief executive officer will address the media ________ the formal conclusion of the annual international trade summit.",
        options: ["following", "followed", "anyway", "conference"],
        correct: "following",
        explanations: {
            guide: "高阶介词用法与语篇衔接。在完整的句子后引导名词短语，作为时间状语表示“在…圆满结束之后”，选介词 following（相当于 after）。",
            family: "following (prep.在…之后) | followed (v-ed形式) | anyway (adv.无论如何) | conference (n.会议)。",
            details: "following the formal conclusion 意为在正式结束之后。followed 是过去分词，若使用则需要被动语态或伴随结构（如 followed by），在此处语义不通。",
            cn: "在年度国际贸易峰会正式结束之后，首席执行官将向媒体发表讲话。",
            jp: "最高経営責任者（CEO）は、年次の国際貿易サミットの正式な終了後（following）にメディアに向けて発表を行う予定です。"
        }
    },
    {
        id: 14,
        target: "refer",
        category: "困难",
        stem: "All job applicants are strongly requested to submit a formal letter of ________ along with their updated resumes.",
        options: ["reference", "refer", "employee", "provided"],
        correct: "reference",
        explanations: {
            guide: "高频商务复合名词。a letter of reference 属于职场固定搭配，意为“推荐信”，空格处需填入名词形式 reference。",
            family: "reference (n.参考/推荐) | refer (v.参考) | employee (n.员工) | provided (conj.只要)。",
            details: "介词 of 后面需要接名词构成介词短语。letter of reference 是求职场景的核心词汇。refer 是动词，不能直接放在介词 of 后面作宾语。",
            cn: "所有求职者都被强烈要求在提交更新简历的同时，附上一封正式的推荐信。",
            jp: "すべての求職者は、更新された履歴書と一緒に正式な推薦状（letter of reference）を提出することが強く求められています。"
        }
    },
    {
        id: 15,
        target: "provide",
        category: "困难",
        stem: "The conference venue can be reserved for weekend events, ________ that the initial deposit is paid in full.",
        options: ["provided", "provision", "available", "likely"],
        correct: "provided",
        explanations: {
            guide: "条件连词高阶考点。provided that 是一个固定的复合连词，等同于 if 或 as long as，意为“只要/在…条件下”。",
            family: "provided (conj.只要/如果) | provision (n.条款/供应) | available (adj.可获得的) | likely (adj.很有可能的)。",
            details: "provided that 引导条件状语从句，在托业 Part 5 语法难题中经常作为 if 的高阶替换词出现。provision 为名词，无法直接引导从句。",
            cn: "该会议场地可以预订用于周末活动，条件是必须全额支付初始押金。",
            jp: "初期の保証金が全額支払われるという条件で（provided that）、その会議会場は週末のイベント用に予約することができます。"
        }
    },
    {
        id: 16,
        target: "likely",
        category: "困难",
        stem: "With the introduction of the new government subsidy, there is a strong ________ that local businesses will expand.",
        options: ["likelihood", "likely", "unlikely", "offer"],
        correct: "likelihood",
        explanations: {
            guide: "形容词与定冠词后的名词中心语。在 a strong ________ 结构中，形容词 strong 后面需要搭配名词，表达“有很大可能性”，选 likelihood。",
            family: "likelihood (n.可能性) | likely (adj.很有可能的) | unlikely (adj.不太可能的) | offer (v./n.提供)。",
            details: "there is a strong likelihood that...（极有可能……）是托业高阶句型。likely 是形容词，不能被 strong 修饰作为名词核心词。",
            cn: "随着政府新补贴政策的推出，当地企业极有可能迎来规模扩张。",
            jp: "新しい政府の補助金の導入により、地元の企業が拡大する強い可能性（likelihood）があります。"
        }
    },
    {
        id: 17,
        target: "purchase",
        category: "困难",
        stem: "All corporate IT acquisitions must be fully vetted and approved by the director of the ________ department.",
        options: ["purchasing", "purchase", "purchaser", "conference"],
        correct: "purchasing",
        explanations: {
            guide: "职能部门复合名词专属搭配。purchasing department 指公司的“采购部”，使用现在分词/动名词形式 purchasing 作定语修饰 department。",
            family: "purchasing (n./adj.采购的) | purchase (v./n.购买) | purchaser (n.采购人) | conference (n.会议)。",
            details: "虽然 purchase 也是名词，但商业惯例中“采购部”固定表达为 purchasing department。purchaser 指具体的采购者个人，不符合修饰“部门”的逻辑。",
            cn: "公司所有的 IT 采购项目都必须获得采购部主管的全面审查与批准。",
            jp: "企業のすべてのIT調達は、購買部（purchasing department）の部長によって完全に審査され、承認されなければなりません。"
        }
    },
    {
        id: 18,
        target: "offer",
        category: "困难",
        stem: "The software corporation decided to expand its service ________ to better attract corporate enterprise clients.",
        options: ["offerings", "offer", "provided", "following"],
        correct: "offerings",
        explanations: {
            guide: "名词复数在特定商务语境中的高级应用。service offerings 是商业核心术语，意为“提供的服务系列/服务组合”，在此选复数名词 offerings。",
            family: "offerings (n.提供物/服务组合/复数) | offer (v./n.提供) | provided (conj.只要) | following (prep.在…之后)。",
            details: "expand its service offerings 意为扩大了其服务项目范围。单数形式的 offer 通常指某一次的具体出价或提议，无法与 service 组成表示“产品服务线”的专属集合概念。",
            cn: "该软件公司决定扩大其服务项目范围，以更好地吸引大型企业客户。",
            jp: "そのソフトウェア企業は、大企業の顧客をより引きつけるために、サービス内容（offerings）を拡大することを決定しました。"
        }
    }
];