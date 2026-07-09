// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag31-40 Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "policy",
        pos: "名",
        ipa: "/ˈpɑːləsi/",
        cn: "政策，方针，保险单",
        jp: "政策、方針、保険証券",
        family: "policies",
        tips: "商务场景常考 corporate policy（公司政策）、cancellation policy（取消政策）。阅读中常考关于保险公司的 insurance policy（保险单）。",
        desc: "Please read the company policy."
    },
    {
        word: "contract",
        pos: "名/動",
        ipa: "/ˈkɑːntrækt/",
        cn: "合同，契约；签约，收缩",
        jp: "契約、契約書；契約する、収縮する",
        family: "contractor / contractual / contractually",
        tips: "常考名词短语：sign a contract（签合同）、under contract（在合同期内）。作动词时注意与变体名词 contractor（承包商）的派生逻辑辨析。",
        desc: "They signed the new contract."
    },
    {
        word: "industry",
        pos: "名",
        ipa: "/ˈɪndəstri/",
        cn: "行业，工业",
        jp: "产业、业界",
        family: "industrial / industrious / industrialize",
        tips: "托业高频搭配：service industry（服务业）、automotive industry（汽车行业）。注意派生形容词 industrial（工业的）是各大图表题的常客。",
        desc: "The tech industry is growing."
    },
    {
        word: "facility",
        pos: "名",
        ipa: "/fəˈsɪləti/",
        cn: "设施，设备，场所",
        jp: "施設、設備、機能",
        family: "facilities / facilitate",
        tips: "通常以复数形式 facilities 出现，指代“办公场所、工厂建筑、基础设施”（e.g., manufacturing facility 制造工厂，fitness facility 健身设施）。",
        desc: "This facility has a gym."
    },
    {
        word: "payment",
        pos: "名",
        ipa: "/ˈpeɪmənt/",
        cn: "付款，支付，款项",
        jp: "支払い、決済、支払額",
        family: "pay / payable",
        tips: "核心短语：make a payment（付款）、payment method（付款方式）。衍生形容词 payable（应付的）在 Part 5 财务发票题中权重极高。",
        desc: "The payment is due today."
    },
    {
        word: "detail",
        pos: "名/動",
        ipa: "/dɪˈteɪl/",
        cn: "细节，详情；详细说明",
        jp: "詳細、細部；詳細に述べる",
        family: "detailed / details",
        tips: "常考过去分词充当形容词的 detailed（详细的，如 detailed report 详细报告）。名词短语 in detail 意为“详细地”。",
        desc: "He explained every single detail."
    },
    {
        word: "concern",
        pos: "名/動",
        ipa: "/kənˈsɜːrn/",
        cn: "担忧，关心；使担忧，涉及",
        jp: "懸念、心配事；〜を心配させる、〜に関係する",
        family: "concerned / concerning",
        tips: "介词用法 concerning（关于……）在阅读和语法中完美等同于 about/regarding。名词短语常考 express concern about（对……表示担忧）。",
        desc: "Safety is our main concern."
    },
    {
        word: "option",
        pos: "名",
        ipa: "/ˈɑːpʃn/",
        cn: "选择，选项",
        jp: "選択肢、オプション",
        family: "optional",
        tips: "核心派生词 optional（可选择的，非强制的），常在行政通知中用于修饰各种自愿参加的活动、培训或额外升级服务。",
        desc: "We have only one option."
    },
    {
        word: "annual",
        pos: "形/名",
        ipa: "/ˈænjuəl/",
        cn: "每年的，年度的；年刊",
        jp: "年次の、毎年の、例年の",
        family: "annually",
        tips: "职场行政与财报高频词：annual report（年度报告）、annual budget（年度预算）、annual meeting（年会）。副词 annually 等同于 yearly。",
        desc: "The annual meeting is in June."
    },
    {
        word: "suggestion",
        pos: "名",
        ipa: "/səˈdʒestʃən/",
        cn: "建议，提议",
        jp: "提案、暗示、勧め",
        family: "suggest / suggestive",
        tips: "来自及物动词 suggest。常考搭配：welcome suggestions（欢迎建议）、make a suggestion（提出建议）。注意其可数名词属性。",
        desc: "Thank you for your suggestion."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "contract",
        category: "简单",
        stem: "The manager asked the new employee to sign the employment ________ before starting work.",
        options: ["contract", "payment", "concern", "suggestion"],
        correct: "contract",
        explanations: {
            guide: "名词词义辨析。根据空格前的定冠词 the 和形容词性修饰语 employment（就业），此处需要填入一个名词作宾语，结合入职前签署的语境，选择 contract（合同）。",
            family: "contract (n.合同) | payment (n.付款) | concern (n.担忧) | suggestion (n.建议)。",
            details: "employment contract（雇佣合同）属于极为高频的职场商务搭配。句子描述在开工前，经理要求新员工签署合同，逻辑完全通顺。",
            cn: "经理要求新员工在开始工作前签署雇佣合同。",
            jp: "マネージャーは新しい従業員に、業務を開始する前に雇用契約（contract）に署名するよう求めました。"
        }
    },
    {
        id: 2,
        target: "payment",
        category: "简单",
        stem: "Please submit your credit card details to complete the ________ for your flight ticket.",
        options: ["payment", "policy", "option", "industry"],
        correct: "payment",
        explanations: {
            guide: "名词词义辨析。由定冠词 the 修饰，作为 complete（完成）的宾语。结合前半句提交信用卡信息，此处的动作目的是为了完成“付款”，选择 payment。",
            family: "payment (n.付款) | policy (n.政策) | option (n.选择) | industry (n.行业)。",
            details: "complete the payment（完成付款）是典型的商业交易高频短语。由前文的 credit card details 锁定该业务场景。",
            cn: "请提交您的信用卡详情以完成机票的付款。",
            jp: "航空券の支払い（payment）を完了するために、クレジットカードの詳細を提出してください。"
        }
    },
    {
        id: 3,
        target: "annual",
        category: "简单",
        stem: "The company hosts an ________ gala every December to celebrate its achievements.",
        options: ["annual", "annually", "detail", "facility"],
        correct: "annual",
        explanations: {
            guide: "形容词修饰单数可数名词。空格位于不定冠词 an 和名词 gala（盛会）之间，需要填入元音音素开头的形容词，且结合 every December（每年十二月）这一时间提示，选 annual（年度的）。",
            family: "annual (adj.年度的) | annually (adv.每年地) | detail (n.细节) | facility (n.设施)。",
            details: "an annual gala（一年一度的盛会）符合搭配。annually 是副词，不能在此位置直接修饰名词 gala。",
            cn: "该公司每年十二月都会举办一次年度盛会，以庆祝其取得的成就。",
            jp: "同社は成果を祝うため、毎年12月に年次（annual）ガラ（祝祭イベント）を開催しています。"
        }
    },
    {
        id: 4,
        target: "policy",
        category: "简单",
        stem: "According to the corporate ________, all employees must wear their ID badges at all times.",
        options: ["policy", "contract", "option", "concern"],
        correct: "policy",
        explanations: {
            guide: "名词词义辨析与高频搭配。由形容词 corporate（公司的）修饰，结合后半句“所有员工必须时刻佩戴工牌”的硬性规定，可知这是指公司的“政策/规定”，选 policy。",
            family: "policy (n.政策) | contract (n.合同) | option (n.选择) | concern (n.担忧)。",
            details: "corporate policy 意为“公司政策/规章制度”。后文的 must wear... 是一种制度约束，完全呼应 policy 的核心含义。",
            cn: "根据公司政策，所有员工必须时刻佩戴身份工牌。",
            jp: "社内規定（policy）によると、すべての従業員は常にIDバッジを着用しなければなりません。"
        }
    },
    {
        id: 5,
        target: "suggestion",
        category: "简单",
        stem: "The manager welcomed every helpful ________ from the marketing team during the brainstorming session.",
        options: ["suggestion", "suggest", "annual", "payment"],
        correct: "suggestion",
        explanations: {
            guide: "名词词义辨析。空格位于形容词 helpful 之后，作为 welcomed 的宾语，根据句意“经理欢迎来自营销团队的每一条建议”，选择 suggestion。",
            family: "suggestion (n.建议) | suggest (v.建议) | annual (adj.年度的) | payment (n.付款)。",
            details: "every 后面接单数可数名词。选项中 suggestion 是名词，与 welcome 构成经典职场表达，表示欢迎建议。",
            cn: "在集思广益会议期间，经理对营销团队提出的每一个有建设性的建议都表示欢迎。",
            jp: "ブレインストーミングのセッション中、マネージャーはマーケティングチームからの役立つ提案（suggestion）を歓迎しました。"
        }
    },
    {
        id: 6,
        target: "facility",
        category: "简单",
        stem: "The new manufacturing ________ in Ohio is equipped with the latest production technology.",
        options: ["facility", "contract", "detail", "concern"],
        correct: "facility",
        explanations: {
            guide: "名词词义辨析与主语定位。空格在形容词性修饰语 manufacturing（制造的）之后，充当句子的主语。结合后文“配备了最新的生产技术”，此处应填入表示生产场所的 facility（设施/工厂）。",
            family: "facility (n.设施) | contract (n.合同) | detail (n.细节) | concern (n.担忧)。",
            details: "manufacturing facility（制造工厂/设施）是托业生产制造场景中的高阶核心复合概念，等同于 factory。",
            cn: "位于俄亥俄州的新制造工厂配备了最新的生产技术。",
            jp: "オハイオ州の新しい製造施設（facility）には、最新の生産技術が備わっています。"
        }
    },
    {
        id: 7,
        target: "option",
        category: "中等",
        stem: "Since the direct flight is fully booked, our only other ________ is to take a layover in Tokyo.",
        options: ["option", "optional", "industry", "policy"],
        correct: "option",
        explanations: {
            guide: "名词词义辨析。空格位于形容词性物主代词 our 和形容词 other 之后，充当从句的主语中心词。语境提到直飞航班已订满，因此剩下的唯一“选择”是转机，选 option。",
            family: "option (n.选择) | optional (adj.可选择的) | industry (n.行业) | policy (n.政策)。",
            details: "our only other option 意为“我们唯一其它的选择”。optional 是形容词，不能在此处充当名词主语。",
            cn: "由于直飞航班已经订满，我们唯一其它的选择就是在东京中转。",
            jp: "直行便が満席のため、私たちの唯一の他の選択肢（option）は東京で乗り継ぎをすることです。"
        }
    },
    {
        id: 8,
        target: "detail",
        category: "中等",
        stem: "The project manager went over every single ________ of the proposal during the morning meeting.",
        options: ["detail", "detailed", "contract", "payment"],
        correct: "detail",
        explanations: {
            guide: "名词词义辨析。空格位于固定结构 every single 后面，需要接单数可数名词，指代计划案的每一个“细节”，选名词 detail。",
            family: "detail (n.细节) | detailed (adj.详细的) | contract (n.合同) | payment (n.付款)。",
            details: "every single detail 意为“每一个细节”。短语 went over 表示仔细检查、过一遍。detailed 是形容词，不符合此处名词中心语的语法要求。",
            cn: "在早会上，项目经理仔细查看了该提案的每一个细节。",
            jp: "午前中の会議で、プロジェクトマネージャーは提案書の細部（detail）を一つ一つ確認しました。"
        }
    },
    {
        id: 9,
        target: "industry",
        category: "中等",
        stem: "As technology evolves, the automotive ________ is shifting rapidly toward electric vehicles.",
        options: ["industry", "industrial", "suggestion", "annual"],
        correct: "industry",
        explanations: {
            guide: "复合名词考点。空格在形容词 automotive（汽车的）后面，共同构成一个行业板块作为主语。根据后文“向电动汽车转型”，应选择 industry（行业）。",
            family: "industry (n.行业) | industrial (adj.工业的) | suggestion (n.建议) | annual (adj.年度的)。",
            details: "automotive industry（汽车行业）是极其高频的职场商业组合。industrial 是形容词，通常不与另一个形容词 automotive 并列修饰名词主干。",
            cn: "随着技术的发展，汽车行业正在迅速向电动汽车转型。",
            jp: "技術の進化に伴い、自動車産業（industry）は電気自動車へと急速にシフトしています。"
        }
    },
    {
        id: 10,
        target: "concern",
        category: "中等",
        stem: "Several board members expressed strong ________ about the potential risks of the new investment.",
        options: ["concern", "concerning", "facility", "option"],
        correct: "concern",
        explanations: {
            guide: "动宾搭配与名词词义辨析。空格作及物动词 expressed（表达）的宾语，且后面紧跟介词 about，表达对潜在风险的“担忧”，选名词 concern。",
            family: "concern (n.担忧/关注) | concerning (prep.关于) | facility (n.设施) | option (n.选择)。",
            details: "express concern about sth（对某事表示担忧）是托业阅读和听力中最核心的董事会/管理层商务短语。",
            cn: "几位董事会成员对新投资的潜在风险表示了强烈的担忧。",
            jp: "数名の取締役会メンバーは、新しい投資の潜在的なリスクについて強い懸念（concern）を表明しました。"
        }
    },
    {
        id: 11,
        target: "annual",
        category: "中等",
        stem: "The performance reviews are conducted ________ to evaluate employee progress and determine bonuses.",
        options: ["annually", "annual", "payment", "detail"],
        correct: "annually",
        explanations: {
            guide: "副词修饰被动语态谓语动词。空格位于被动语态句尾，用来修饰核心动作 are conducted（被执行），说明执行的周期频率，选择副词 annually（每年地）。",
            family: "annually (adv.每年地) | annual (adj.年度的) | payment (n.付款) | detail (n.细节)。",
            details: "句子主干结构完整，空格处缺少副词作状语。annually 在此完美对应句中的复数周期性考核语境，等同于 every year。",
            cn: "绩效评估每年定期进行，以评估员工的进步并决定奖金。",
            jp: "従業員の進捗を評価し、ボーナスを決定するために、人事考課は毎年（annually）実施されます。"
        }
    },
    {
        id: 12,
        target: "detail",
        category: "中等",
        stem: "The engineering team provided a ________ report explaining the cause of the system failure.",
        options: ["detailed", "detail", "policy", "concern"],
        correct: "detailed",
        explanations: {
            guide: "分词作形容词修饰名词。空格位于不定冠词 a 之后，名词 report 之前，需要填入形容词来修饰报告。表示一份“详细的”报告，选过去分词转化而来的形容词 detailed。",
            family: "detailed (adj.详细的) | detail (n./v.细节) | policy (n.政策) | concern (n.担忧)。",
            details: "a detailed report（一份详细的报告）属于典型的商务文书搭配。原形 detail 作为名词无法在此处直接修饰另一个单数名词 report。",
            cn: "工程团队提供了一份详细的报告，解释了系统故障的原因。",
            jp: "エンジニアリングチームは、システム障害の原因を説明する詳細な（detailed）報告書を提出しました。"
        }
    },
    {
        id: 13,
        target: "payment",
        category: "困难",
        stem: "All outstanding invoices must be made ________ to the accounting department by the end of the month.",
        options: ["payable", "payment", "contractor", "suggestion"],
        correct: "payable",
        explanations: {
            guide: "主语补足语（形容词）考点。空格位于系动词 must be made 之后，要求填入形容词构成表语结构。短语 be payable to sb 表示“应支付给某人”，选形容词 payable。",
            family: "payable (adj.应付的) | payment (n.付款) | contractor (n.承包商) | suggestion (n.建议)。",
            details: "在财务和发票开具场景中，make invoices payable to... 属于标准法律与会计高级行话，意为“款项抬头应写为……”。",
            cn: "所有未付的发票必须在月底前将收款人设为财务部（即应付给财务部）。",
            jp: "すべての未払いの請求書は、月末までに経理部門を支払先（payable）として処理されなければなりません。"
        }
    },
    {
        id: 14,
        target: "concern",
        category: "困难",
        stem: "The HR department released a memo ________ the updated health insurance benefits.",
        options: ["concerning", "concern", "industry", "option"],
        correct: "concerning",
        explanations: {
            guide: "介词用法高阶辨析。空格在名词 memo（备忘录）后面，引导一个后置修饰成分，表示“关于”更新后的福利，此处选择由分词转化而来的高阶介词 concerning。",
            family: "concerning (prep.关于) | concern (n./v.担忧) | industry (n.行业) | option (n.选择)。",
            details: "concerning 在托业中作为介词出现频率极高，完全等同于 regarding 或 about。其余选项无法在名词后直接跟另一个名词短语（the updated health insurance benefits）作后置修饰。",
            cn: "人力资源部发布了一份关于更新后医疗保险福利的备忘录。",
            jp: "人事部は、更新された医療保険の給付に関する（concerning）通達（メモ）を発行しました。"
        }
    },
    {
        id: 15,
        target: "option",
        category: "困难",
        stem: "Attending the weekend workshop is entirely ________, but employees are highly encouraged to participate.",
        options: ["optional", "option", "facility", "policy"],
        correct: "optional",
        explanations: {
            guide: "系表结构与形容词辨析。空格位于系动词 is 之后，充当主语补足语。结合后半句的转折“但强烈鼓励员工参加”，说明该活动不是强制的，而是“可选择的”，选 optional。",
            family: "optional (adj.可选择的/自愿的) | option (n.选择) | facility (n.设施) | policy (n.政策)。",
            details: "optional 与后面的 highly encouraged 形成完美的语意对仗，属于典型的公司培训/活动通知用语。名词 option 不能作此处表语描述状态。",
            cn: "参加周末研讨会完全是自愿的选择，但我们强烈鼓励员工积极参与。",
            jp: "週末のワークショップへの参加は完全に任意（optional）ですが、従業員が参加することを強くお勧めします。"
        }
    },
    {
        id: 16,
        target: "contract",
        category: "困难",
        stem: "The real estate developer hired an independent ________ to oversee the renovation of the office headquarters.",
        options: ["contractor", "contract", "detailed", "annually"],
        correct: "contractor",
        explanations: {
            guide: "名词派生身份词辨析。空格在不定冠词 an 和形容词 independent 之后，作 hired 的宾语。根据后文“监督总部翻新工程”这一特定商业行为，应选择指代职业身份的 contractor（承包商）。",
            family: "contractor (n.承包商) | contract (n.合同) | detailed (adj.详细的) | annually (adv.每年地)。",
            details: "hire an independent contractor 属于标准的工程外包职场用语。contract 虽然相关，但指合同文本，无法承担“监督工程”的人格化主体。",
            cn: "房地产开发商聘请了一位独立的承包商来监督办公总部的翻新工程。",
            jp: "不動産開発業者は、オフィスの本社の改修工事を監督するために、独立した請请負業者（contractor）を雇いました。"
        }
    },
    {
        id: 17,
        target: "industry",
        category: "困难",
        stem: "The city council plans to convert the old zone into a modern ________ park for logistics companies.",
        options: ["industrial", "industry", "suggestion", "payable"],
        correct: "industrial",
        explanations: {
            guide: "形容词修饰名词高阶辨析。空格在名词 park 之前，作为核心修饰语。根据工业园区的固定商业概念，选择形容词形式 industrial。",
            family: "industrial (adj.工业的) | industry (n.行业) | suggestion (n.建议) | payable (adj.应付的)。",
            details: "industrial park 是商务英语和经济地理场景中的固定搭配，意为“工业园区”。其名词同族词 industry 不能直接用来修饰名词 park。",
            cn: "市议会计划将旧区域改造为一个供物流公司使用的现代工业园区。",
            jp: "市議会は、古い区域を物流会社向けの近代的な工業（industrial）団地へと転換することを計画しています。"
        }
    },
    {
        id: 18,
        target: "facility",
        category: "困难",
        stem: "The university boasts top-tier research ________ that allow students to conduct advanced chemical experiments.",
        options: ["facilities", "facility", "contractual", "concerning"],
        correct: "facilities",
        explanations: {
            guide: "名词单复数与语境辨析。空格位于形容词 top-tier 之后，充当 boasts 的宾语，且后置定语从句使用的是复数代词定语结构 that allow（而不是 allows），说明此处必须填入复数可数名词，选 facilities。",
            family: "facilities (n.设施/复数) | facility (n.设施/单数) | contractual (adj.合同的) | concerning (prep.关于)。",
            details: "research facilities（研究设施/实验室场所）是固定搭配。根据从句动词 allow 的原形特征，反推主语先行词必须为复数，从而精准排除单数形式 facility。",
            cn: "这所大学拥有顶尖的研究设施，使学生能够进行高级化学实验。",
            jp: "その大学は一流の研究施設（facilities）を誇っており、学生が高度な化学実験を行うことを可能にしています。"
        }
    }
];