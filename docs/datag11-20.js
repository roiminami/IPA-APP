// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag1-10.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "include",
        pos: "動",
        ipa: "/ɪnˈkluːd/",
        cn: "包含，包括",
        jp: "〜を含む、含める",
        family: "inclusion / inclusive / including",
        tips: "常用于说明账单、价格、日程或报告中所包含的项目。其介词形式 including 后面直接加名词，也是托业的核心常考点。",
        desc: "The price includes tax."
    },
    {
        word: "department",
        pos: "名",
        ipa: "/dɪˈpɑːrtmənt/",
        cn: "部门，系",
        jp: "部門、課、部署",
        family: "departmental / departmentally",
        tips: "商务场景核心词。常与各类业务组合成复合名词，如：accounting department（财务部）、human resources department（人力资源部）、shipping department（运输部）。",
        desc: "He heads the sales department."
    },
    {
        word: "contact",
        pos: "動/名",
        ipa: "/ˈkɑːntækt/",
        cn: "联系，接触；联络人",
        jp: "連絡する；連絡、接触、連絡先",
        family: "contactable",
        tips: "作及物动词时后面直接接人（contact us），不需要加 to！作名词时常考搭配有 keep in contact with 或 emergency contact（紧急联系人）。",
        desc: "Please contact me by email."
    },
    {
        word: "according to",
        pos: "前",
        ipa: "/əˈkɔːrdɪŋ tuː/",
        cn: "根据，按照",
        jp: "〜に応じて、〜によれば",
        family: "accord / accordance / accordingly",
        tips: "高频复杂介词。后面只能接名词、代词或名词短语（例如：according to the report）。在托业阅读中，常作为定位客观事实、数据或规章来源的标志词。",
        desc: "According to the guide, turn left."
    },
    {
        word: "client",
        pos: "名",
        ipa: "/ˈklaɪənt/",
        cn: "客户，委托人",
        jp: "顧客、クライアント、依頼人",
        family: "clientele",
        tips: "与 customer（顾客，多指零售店买家）相比，client 更倾向于指接受专业咨询、法律、金融或定制化服务的“企业客户/委托人”。常考 corporate clients（企业客户）。",
        desc: "We met our new client today."
    },
    {
        word: "review",
        pos: "動/名",
        ipa: "/rɪˈvjuː/",
        cn: "审查，复习，评论；评估",
        jp: "再検討する、批評する；見直し、評価、レビュー",
        family: "reviewer",
        tips: "商务场景中极为普遍。动词常考 review the proposal（审查提议），名词常考 performance review（绩效评估）、annual review（年度审查）。",
        desc: "I need to review this report."
    },
    {
        word: "indicate",
        pos: "動",
        ipa: "/ˈɪndɪkeɪt/",
        cn: "表明，指示，显示",
        jp: "指し示す、表示する、表明する",
        family: "indication / indicative / indicator",
        tips: "图表/阅读理解核心动词。常见句型有 survey results indicate that...（调查结果表明……）。其名词形式 indication 常考 an indication of interest（意向表明）。",
        desc: "The signs indicate a change."
    },
    {
        word: "attend",
        pos: "動",
        ipa: "/əˈtend/",
        cn: "参加，出席",
        jp: "出席する、参加する",
        family: "attendance / attendant / attendee",
        tips: "及物动词，参加会议/研讨会直接用 attend the meeting，绝对不要加 at 或 to！衍生名词 attendance（出席人数/出勤）与 attendee（出席者）是托业核心考点。",
        desc: "She will attend the seminar."
    },
    {
        word: "hire",
        pos: "動/名",
        ipa: "/ˈhaɪər/",
        cn: "雇用，租用；新雇员",
        jp: "雇う、賃借りする；新採用者",
        family: "hiring / hireling",
        tips: "作动词等同于 employ。作名词时在托业中常指“新员工”（如：new hires = 新进人员）。注意复合词 hiring freeze（冻结招聘）和 hiring process（招聘流程）。",
        desc: "They plan to hire more staff."
    },
    {
        word: "local",
        pos: "形/名",
        ipa: "/ˈloʊkl/",
        cn: "当地的，地方的；当地居民",
        jp: "地元の、地域の；地元の人",
        family: "locate / location / locally",
        tips: "常考形容词用法。如 local businesses（当地企业）、local authorities（地方当局）。与其动词派生词 locate（坐落于，常考 be located in/at）需要区分其词性与用法。",
        desc: "We support local businesses."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "department",
        category: "简单",
        stem: "The human resources ________ is located on the third floor of the main office building.",
        options: ["department", "departmental", "client", "local"],
        correct: "department",
        explanations: {
            guide: "限定词与形容词后的名词考点。The human resources 后面需要接名词构成复合名词，表示“人力资源部”，选 department。",
            family: "department (n.部门) | departmental (adj.部门的) | client (n.客户) | local (adj.当地的)。",
            details: "human resources department 是职场核心固定搭配。departmental 是形容词，不能直接作句子的主语核心词。",
            cn: "人力资源部位于办公主楼的三楼。",
            jp: "人事部（department）は、オフィスメインビルの3階にあります。"
        }
    },
    {
        id: 2,
        target: "include",
        category: "简单",
        stem: "Please make sure that the total registration fees ________ the cost of lunch and training materials.",
        options: ["include", "inclusion", "indicate", "attend"],
        correct: "include",
        explanations: {
            guide: "主谓一致与动词辨析。主语为复数名词 fees，空格处需要填入动词原形充当谓语，根据句意表达“包含”成本，选 include。",
            family: "include (v.包含) | inclusion (n.包含) | indicate (v.表明) | attend (v.出席)。",
            details: "句中 fees 是复数，动词用原形 include。根据上下文，注册费应该“包含”午餐和材料费，符合商务常见逻辑。",
            cn: "请确保总注册费包含了午餐和培训材料的费用。",
            jp: "登録料の総額にランチと研修教材の費用が含まれて（include）いるか確認してください。"
        }
    },
    {
        id: 3,
        target: "contact",
        category: "简单",
        stem: "If you have any questions regarding your invoice, please ________ our billing department immediately.",
        options: ["contact", "contactable", "department", "review"],
        correct: "contact",
        explanations: {
            guide: "祈使句动词原形考点。please 后面要接动词原形，引导祈使句，结合宾语 department，表达“联系”部门，选 contact。",
            family: "contact (v./n.联系) | contactable (adj.可联系的) | department (n.部门) | review (v./n.审查)。",
            details: "contact 在此作及物动词，直接接宾语 our billing department。contactable 是形容词，不符合祈使句语法结构。",
            cn: "如果您有任何关于发票的问题，请立即联系我们的计费部门。",
            jp: "請求書に関するご質問がある場合は、すぐに当社の請求部門に連絡（contact）してください。"
        }
    },
    {
        id: 4,
        target: "local",
        category: "简单",
        stem: "The restaurant sources all of its fresh vegetables from ________ farms to support the community.",
        options: ["local", "locally", "location", "hire"],
        correct: "local",
        explanations: {
            guide: "形容词修饰名词的用法。空格在介词 from 之后、名词 farms 之前，需要填入形容词作定语，表示“当地的”农场，选 local。",
            family: "local (adj.当地的) | locally (adv.在当地) | location (n.位置) | hire (v./n.雇用)。",
            details: "local farms 构成形容词修饰名词的结构。locally 是副词，不能直接修饰名词 farms。",
            cn: "该餐厅从当地农场采购所有新鲜蔬菜，以支持社区发展。",
            jp: "そのレストランは、コミュニティを支援するために、すべての新鮮な野菜を地元の（local）農場から仕入れています。"
        }
    },
    {
        id: 5,
        target: "hire",
        category: "简单",
        stem: "The company plans to ________ five new software engineers next month to speed up development.",
        options: ["hire", "hiring", "client", "indicate"],
        correct: "hire",
        explanations: {
            guide: "不定式动词原形考点。plans to 后面需要接动词原形构成不定式结构，表示“雇用”新员工，选 hire。",
            family: "hire (v.雇用) | hiring (n./adj.招聘) | client (n.客户) | indicate (v.表明)。",
            details: "to 后面接动词原形 hire 构成完整谓语结构。hiring 是动名词或分词，在此处语法不通。",
            cn: "该公司计划下个月雇用五名新的软件工程师，以加快开发速度。",
            jp: "会社は開発を加速させるため、来月5人の新しいソフトウェアエンジニアを雇う（hire）ことを計画しています。"
        }
    },
    {
        id: 6,
        target: "client",
        category: "简单",
        stem: "Ms. Green spent the afternoon preparing a customized financial proposal for an important corporate ________.",
        options: ["client", "clientele", "department", "attend"],
        correct: "client",
        explanations: {
            guide: "不定冠词与形容词后的名词考点。an 提示后面需要一个以元音音素开头的单数可数名词，结合 corporate 构成“企业客户”，选 client。",
            family: "client (n.客户) | clientele (n.诉讼委托人/客户总体) | department (n.部门) | attend (v.出席)。",
            details: "corporate client 是托业极为高频的商务专属词汇，指企业客户。clientele 为集合名词，通常不与不定冠词 an 直接连用。",
            cn: "格林女士整个下午都在为一个重要的企业客户准备一份定制的财务建议书。",
            jp: "グリーン氏は午後、重要な企業顧客（client）のためにカスタマイズされた財務提案書の作成に時間を費やしました。"
        }
    },
    {
        id: 7,
        target: "according to",
        category: "中等",
        stem: "________ the revised company guidelines, all employees must log their hours using the new digital system.",
        options: ["According to", "Accordingly", "Including", "Indicate"],
        correct: "According to",
        explanations: {
            guide: "介词短语引导状语。位于句首，后接名词短语 the revised company guidelines，表示“根据”规定，选 According to。",
            family: "according to (prep.根据) | accordingly (adv.于是/相应地) | including (prep.包含) | indicate (v.表明)。",
            details: "According to 后面接名词短语，作为全句的依据来源。Accordingly 是副词，不能直接引导名词短语。",
            cn: "根据修改后的公司指南，所有员工必须使用新的数字化系统记录工作时间。",
            jp: "改定された会社のガイドラインによると（According to）、すべての従業員は新しいデジタルシステムを使用して勤務時間を記録しなければなりません。"
        }
    },
    {
        id: 8,
        target: "attend",
        category: "中等",
        stem: "All department managers are expected to ________ the annual leadership summit in Chicago next week.",
        options: ["attend", "attendance", "attendee", "contact"],
        correct: "attend",
        explanations: {
            guide: "被动语态结合不定式。be expected to 后面需要接动词原形，后面直接带有宾语 summit，表示“出席”峰会，选 attend。",
            family: "attend (v.出席) | attendance (n.出席/出勤) | attendee (n.出席者) | contact (v./n.联系)。",
            details: "attend 是及物动词，直接接 summit（attend the summit）。attendance 和 attendee 均为名词，不符合此处的语法填空要求。",
            cn: "所有部门经理预计都将参加下周在芝加哥举行的年度领导力峰会。",
            jp: "すべての部門マネージャーは、来週シカゴで開催される年次リーダーシップサミットに出席する（attend）ことが期待されています。"
        }
    },
    {
        id: 9,
        target: "review",
        category: "中等",
        stem: "The legal team must carefully ________ the terms of the contract before the executive director signs it.",
        options: ["review", "reviewer", "indicate", "include"],
        correct: "review",
        explanations: {
            guide: "情态动词与副词后的动词原形。must carefully 后面必须接动词原形，表达对合同条款进行“审查”，选 review。",
            family: "review (v./n.审查/评论) | reviewer (n.审查者) | indicate (v.表明) | include (v.包含)。",
            details: "在签署合同前，法务团队需要的是“审查（review）”条款。reviewer 是名词，不能在情态动词后作谓语核心词。",
            cn: "法务团队在执行董事签字之前，必须仔细审查合同条款。",
            jp: "法務チームは、専務取締役が署名する前に、契約書の条項を注意深く確認（review）しなければなりません。"
        }
    },
    {
        id: 10,
        target: "indicate",
        category: "中等",
        stem: "Initial sales reports from the regional branches ________ a significant growth in online customer engagement.",
        options: ["indicate", "indication", "indicative", "according to"],
        correct: "indicate",
        explanations: {
            guide: "寻找句子核心谓语动词。主语是 reports（复数），空格处需要填入复数谓语动词，表示数据“表明”了增长，选 indicate。",
            family: "indicate (v.表明) | indication (n.表明/迹象) | indicative (adj.指示的) | according to (prep.根据)。",
            details: "reports indicate that... 或 reports indicate sth 是图表分析与商务报告中的标配句型。indication 是名词，在此处会导致句子缺少谓语。",
            cn: "来自区域分司的初步销售报告表明，在线客户参与度有了显著增长。",
            jp: "地域支店からの初期の売上報告は、オンライン顧客エンゲージメントの著しい成長を示して（indicate）います。"
        }
    },
    {
        id: 11,
        target: "hire",
        category: "中等",
        stem: "The orientation program was specifically designed to help new ________ integrate smoothly into the corporate culture.",
        options: ["hires", "hiring", "departments", "clients"],
        correct: "hires",
        explanations: {
            guide: "名词词义与特定职场搭配。new 在此处修饰名词，new hires 是职场专属复合词，指“新雇员/新进人员”，选复数名词 hires。",
            family: "hires (n.新雇员/复数) | hiring (n.招聘) | departments (n.部门/复数) | clients (n.客户/复数)。",
            details: "new hires 意为“新员工”。虽然 hire 常见为动词，但在商务英语中作为可数名词指代新员工非常高频。hiring 是动名词，不常与 new 连用表示人。",
            cn: "入职培训计划是专门为帮助新员工顺利融入企业文化而设计的。",
            jp: "オリエンテーションプログラムは、新しい採用者（hires）が企業文化にスムーズに統合できるように特別に設計されています。"
        }
    },
    {
        id: 12,
        target: "local",
        category: "中等",
        stem: "Because the main corporate headquarters is ________ in New York, most board meetings are held there.",
        options: ["located", "local", "location", "departmental"],
        correct: "located",
        explanations: {
            guide: "被动语态或形容词化分词用法。be located in/at 是固定短语，表示“坐落于/位于……”，主语是 headquarters，故选 located。",
            family: "located (adj./v-ed位于) | local (adj.当地的) | location (n.位置) | departmental (adj.部门的)。",
            details: "is located in 属于托业听力 Part 1 和阅读 Part 5/7 的基础核心搭配，表示地理位置的设立。local 是原形形容词，不能与 is 组合表达“位于”的含义。",
            cn: "由于公司总部设在纽约，大多数董事会会议都在那里举行。",
            jp: "企業のメイン本社がニューヨークに位置して（located）いるため、ほとんどの取締役会はそこで開催されます。"
        }
    },
    {
        id: 13,
        target: "attend",
        category: "困难",
        stem: "Due to the limited capacity of the auditorium, overall ________ at the technology seminar will be restricted to registered guests.",
        options: ["attendance", "attendees", "attend", "attendant"],
        correct: "attendance",
        explanations: {
            guide: "名词作主语及语义辨析。空格在形容词 overall 之后、介词 at 之前，需要填入名词充当主语核心词，表达“出席人数”，选 attendance。",
            family: "attendance (n.出席人数/出勤) | attendees (n.出席者/复数) | attend (v.出席) | attendant (n.服务员)。",
            details: "overall attendance 意为“总出席人数”。如果是指具体的“出席者”，需要配合复数谓语或者改变修饰语，且后面通常不直接搭配 at the seminar 表达整体数量限制。",
            cn: "由于礼堂容量有限，技术研讨会的总出席人数将仅限于注册嘉宾。",
            jp: "講堂の収容人数に限りがあるため、テクノロジーセミナーへの全体の出席者数（attendance）は登録されたゲストに限定されます。"
        }
    },
    {
        id: 14,
        target: "include",
        category: "困难",
        stem: "The package holiday deal is fully ________ of luxury accommodation, guided tours, and all domestic flights.",
        options: ["inclusive", "including", "inclusion", "include"],
        correct: "inclusive",
        explanations: {
            guide: "固定形容词短语搭配。be inclusive of sth 是托业高阶语法，完美等同于 include sth 或 be included in，意为“包含……在内”，选 inclusive。",
            family: "inclusive (adj.包含的) | including (prep.包括) | inclusion (n.包含) | include (v.包含)。",
            details: "因为空格前有系动词 is，后有介词 of，只有形容词 inclusive 能与 of 搭配（be inclusive of）。including 是介词，后面直接加名词，不能加 of。",
            cn: "该度假包价游优惠完全包含了豪华住宿、导游陪同旅游以及所有国内航班。",
            jp: "パッケージ休日プランには、豪華な宿泊施設、ガイド付きツアー、およびすべての国内線が完全に含まれて（inclusive）います。"
        }
    },
    {
        id: 15,
        target: "department",
        category: "困难",
        stem: "Cross-________ collaboration is highly encouraged to ensure that different teams can share insights effectively.",
        options: ["departmental", "department", "departmentally", "locally"],
        correct: "departmental",
        explanations: {
            guide: "复合形容词/派生词修饰名词。Cross- 后面加形容词，与其组合成复合定语修饰名词 collaboration，表示“跨部门的”合作，选 departmental。",
            family: "departmental (adj.部门的) | department (n.部门) | departmentally (adv.部门内部地) | locally (adv.本地地)。",
            details: "cross-departmental collaboration 属于先进企业管理场景的高频专属表达。department 是名词，一般不以 Cross-department 的形式来修饰抽象的合作名词。",
            cn: "高度鼓励跨部门合作，以确保不同团队能够有效地分享见解。",
            jp: "異なるチームがインサイトを効果的に共有できるように、部門を超えた（departmental）コラボレーションが強く推奨されています。"
        }
    },
    {
        id: 16,
        target: "review",
        category: "困难",
        stem: "Every supervisor is required to complete a thorough performance ________ for each team member by the end of the quarter.",
        options: ["review", "reviewer", "indication", "attendance"],
        correct: "review",
        explanations: {
            guide: "商务高频复合名词。performance 与 review 组合构成固定职场术语 performance review（工作绩效评估），在此处作名词，选 review。",
            family: "review (n./v.评估/审查) | reviewer (n.评审者) | indication (n.表明) | attendance (n.出席)。",
            details: "绩效评估在企业中固定表达为 performance review 或 performance appraisal。reviewer 意为评审人，不符合“完成一项评估”的逻辑。",
            cn: "每位主管都必须在季度末之前为每位团队成员完成一份彻底的绩效评估。",
            jp: "すべての管理職は、四半期末までに各チームメンバーの徹底的な業績評価（review）を完了する必要があります。"
        }
    },
    {
        id: 17,
        target: "indicate",
        category: "困难",
        stem: "The dramatic rise in stock value is ________ of investor confidence in the company's new leadership.",
        options: ["indicative", "indication", "indicate", "indicator"],
        correct: "indicative",
        explanations: {
            guide: "高阶形容词短语搭配。be indicative of sth 是商务英语的高级句型，意为“表明/暗示/反映了……”，等同于 indicate，选形容词 indicative。",
            family: "indicative (adj.表明的) | indication (n.迹象/表明) | indicate (v.表明) | indicator (n.指标)。",
            details: "因为空格前面是系动词 is，后面有介词 of，构成 be indicative of 结构。虽然名词 an indication of 语义相似，但前面缺少冠词 an，且语法结构不符。",
            cn: "股票价值 vehicular 剧烈上涨，反映了投资者对公司新领导层的信心。",
            jp: "株価の劇的な上昇は、会社の新しいリーダーシップに対する投資家の信頼を示して（indicative）います。"
        }
    },
    {
        id: 18,
        target: "according to",
        category: "困难",
        stem: "Management has reviewed the market trends and adjusted the production schedule ________ to minimize inventory costs.",
        options: ["accordingly", "according to", "accordance", "inclusive"],
        correct: "accordingly",
        explanations: {
            guide: "派生副词修饰整个动作。位于完整句子的句尾（或者是意群末尾），用以表达“相应地/因此”对计划做出了调整，选副词 accordingly。",
            family: "accordingly (adv.相应地) | according to (prep.根据) | accordance (n.一致/按照) | inclusive (adj.包含的)。",
            details: "accordingly 在此作副词，修饰 adjusted the production schedule，意为“根据前述的市场趋势相应地调整了生产计划”。according to 是介词，后面必须紧跟名词宾语，不能单独放在这里。",
            cn: "管理层审查了市场趋势，并相应地调整了生产计划，以最大限度地降低库存成本。",
            jp: "経営陣は市場の動向を検討し、在庫コストを最小限に抑えるために生産スケジュールをそれに応じて（accordingly）調整しました。"
        }
    }
];