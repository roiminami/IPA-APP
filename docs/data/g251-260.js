// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag161-170.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "establish",
        pos: "動",
        ipa: "/ɪˈstæblɪʃ/",
        cn: "建立，设立，确立",
        jp: "設立する、確立する、築く",
        family: "establishment / established / establishing",
        tips: "商务组织创办与关系构建核心动词。极常考搭配 establish a company（设立公司）、establish a long-term relationship（建立长期合作关系），在阅读中常与 set up 或 found 进行同义替换。",
        desc: "They established a company."
    },
    {
        word: "recognize",
        pos: "動",
        ipa: "/ˈrekəɡnaɪz/",
        cn: "认出，识别；认可，表彰",
        jp: "認める、表彰する、認識する",
        family: "recognition / recognizable / recognized",
        tips: "人力资源、员工管理及品牌评估高频动词。在托业中极其常考被动语态 be recognized for...（因……而受到表彰/认可）。其名词形式 recognition（表彰/认可）亦为高频考点。",
        desc: "We recognize his hard work."
    },
    {
        word: "demonstrate",
        pos: "動",
        ipa: "/ˈdemənstreɪt/",
        cn: "证明，论证；示范，演示",
        jp: "実演する、証明する、示す",
        family: "demonstration / demonstrator / demonstrative",
        tips: "产品推广、技术培训与员工能力考核核心动词。最常考搭配为 demonstrate an ability to...（展现出做某事的能力）。名词形式 demonstration 意为“演示/实操说明”。",
        desc: "She will demonstrate the product."
    },
    {
        word: "landscaping",
        pos: "名",
        ipa: "/ˈlændskeɪpɪŋ/",
        cn: "景观美化，园林绿化",
        jp: "造園、景観美化",
        family: "landscape / landscaper",
        tips: "写字楼运营、物业后勤管理与建筑承包场景核心名词。常考复合名词如 landscaping company / service（绿化公司/绿化服务）。常在物业通知翻修、维护庭院时出现。",
        desc: "The landscaping is beautiful."
    },
    {
        word: "tax",
        pos: "名/動",
        ipa: "/tæks/",
        cn: "税，税款；对……征税",
        jp: "税、税金；課税する",
        family: "taxes / taxation / taxpayer",
        tips: "企业财务、政府补贴与宏观经济核心词。常考搭配 tax return（纳税申报单）、tax incentive（税收优惠）。在语法中，其名词派生词 taxation（税制/课税）常考做宾语或介词宾语。",
        desc: "We must pay tax."
    },
    {
        word: "grant",
        pos: "名/動",
        ipa: "/ɡrænt/",
        cn: "拨款，补助金；准许，授予",
        jp: "補助金、助成金；授与する",
        family: "grants / granted / granting",
        tips: "财务审计与公共行政核心词。作名词时指研究或建设资金补助，如 research grant（研究补助金）。作动词时常考 grant a permit（批准许可证），表达官方授予资质。",
        desc: "They received a grant."
    },
    {
        word: "earn",
        pos: "動",
        ipa: "/ɜːrn/",
        cn: "赚得，获得，赢得",
        jp: "稼ぐ、獲得する、得る",
        family: "earning / earnings / earned",
        tips: "个人薪资、财务回报与品牌声誉高频动词。常考搭配 earn a reputation（赢得声誉）、earn interest（赚取利息）。其名词复数形式 earnings（利润/收入）在财务季报中高频出现。",
        desc: "He earns a good salary."
    },
    {
        word: "full-time",
        pos: "形/副",
        ipa: "/ˌfʊl ˈtaɪm/",
        cn: "全职的；全职地",
        jp: "常勤の、専任の、フルタイムの",
        family: "part-time",
        tips: "求职招聘与考勤管理核心词。常作为前置定语修饰职位或工作，如 full-time employee（全职员工），在招聘启事中经常与兼职（part-time）作对比考查。",
        desc: "She has a full-time job."
    },
    {
        word: "deposit",
        pos: "名/動",
        ipa: "/dɪˈpɑːzɪt/",
        cn: "押金，保证金；存款，存入",
        jp: "保証金、頭金、預金；預け入れる",
        family: "deposits / deposited / depositor",
        tips: "租赁合同、设备采购与财务收支高频词。作名词时常考 security deposit（安全押金/保证金）。作动词时意为“存入钱款”或“支付定金”。",
        desc: "Please pay a deposit."
    },
    {
        word: "monitor",
        pos: "動/名",
        ipa: "/ˈmɑːnɪtər/",
        cn: "监控，监测，监督；监视器",
        jp: "監視する、モニターする；モニター",
        family: "monitored / monitoring / monitors",
        tips: "项目进度管理、预算控制及合规监督核心动词。高频搭配 monitor progress（监督进度）、monitor budget expenditures（监控预算支出）。",
        desc: "We monitor the progress."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "establish",
        category: "简单",
        stem: "The local entrepreneur decided to ________ a brand-new consulting firm in the commercial district.",
        options: ["establish", "deposit", "landscaping", "office"],
        correct: "establish",
        explanations: {
            guide: "动词不定式后的及物动词语义选择。空格位于 to 之后，后面带有名词短语 a brand-new consulting firm 做宾语，结合“创立咨询公司”的语境选 establish。",
            family: "establish (v.建立/设立) | deposit (n./v.押金/存放) | landscaping (n.园林绿化) | office (n.办公室)。",
            details: "establish a firm 意为“设立公司/创办企业”，属于商务英语中的最基础表达。其余选项词性不符或语义完全不合理。",
            cn: "这位本地企业家决定在商业区创立一家全新的咨询公司。",
            jp: "地元の起業家は、商業地区に新しいコンサルティング会社を設立する（establish）ことを決定しました。"
        }
    },
    {
        id: 2,
        target: "demonstrate",
        category: "简单",
        stem: "The sales representative will ________ how to use the new office appliances during the seminar.",
        options: ["demonstrate", "tax", "earn", "closed"],
        correct: "demonstrate",
        explanations: {
            guide: "情态动词后的动词词义辨析。will 后面要求接动词原形，空格后有 how 引导的宾语从句，结合示范办公电器的场景选 demonstrate。",
            family: "demonstrate (v.示范/演示) | tax (n./v.税) | earn (v.赚得) | closed (adj.关闭的)。",
            details: "demonstrate how to use 意为“演示/示范如何使用”，常见于产品推介会、新员工培训及研讨会（seminar）。其余动词不符宾语从句的语义逻辑。",
            cn: "销售代表将在研讨会期间演示如何使用这些新型办公电器。",
            jp: "販売担当者は、セミナー中に新しいオフィス用電化製品の使い方を実演（demonstrate）する予定です。"
        }
    },
    {
        id: 3,
        target: "tax",
        category: "简单",
        stem: "All local businesses are required to pay their corporate ________ before the official deadline.",
        options: ["tax", "grant", "recognize", "morning"],
        correct: "tax",
        explanations: {
            guide: "形容词修饰下的名词中心语。空格前有 corporate（公司的），后有 pay（支付）这一动作的对应关系，需填入表示税费的名词，选 tax。",
            family: "tax (n.税) | grant (n./v.拨款/补助金) | recognize (v.认可) | morning (n.早上)。",
            details: "pay corporate tax 意为“缴纳公司税/企业所得税”，是财务与企业法定义务中最核心的商务短语。其余选项不构成 pay 的合理宾语。",
            cn: "所有本地企业都必须在官方截止日期前缴纳其公司税。",
            jp: "すべての地元企業は、公式な期限前に法人税（tax）を支払う必要があります。"
        }
    },
    {
        id: 4,
        target: "grant",
        category: "简单",
        stem: "The research team received a generous government ________ to develop eco-friendly software.",
        options: ["grant", "monitor", "full-time", "weekend"],
        correct: "grant",
        explanations: {
            guide: "动词宾语名词中心语辨析。空格前有形容词 generous（大方的/慷慨的）和名词定语 government（政府），作 received 的宾语，结合开发环保软件语境选 grant。",
            family: "grant (n.拨款/补助金) | monitor (v./n.监控) | full-time (adj.全职的) | weekend (n.周末)。",
            details: "receive a government grant 意为“获得政府资助/补助金”，是科研项目、社会创新中极高频的名词搭配。其余干扰项词性不符或不能构成合理主宾关系。",
            cn: "该研究团队获得了一笔慷慨的政府补助金，用于开发环保型软件。",
            jp: "研究チームは、環境に優しいソフトウェアを開発するために、寛大な政府補助金（grant）を受け取りました。"
        }
    },
    {
        id: 5,
        target: "full-time",
        category: "简单",
        stem: "After working as an intern for six months, she was finally offered a ________ position.",
        options: ["full-time", "establish", "landscaping", "proposed"],
        correct: "full-time",
        explanations: {
            guide: "修饰名词的形容词定语。空格位于不定冠词 a 和名词 position 之间，起修饰限定作用，结合“实习期满转正”选 full-time。",
            family: "full-time (adj.全职的) | establish (v.建立) | landscaping (n.园林绿化) | proposed (adj.提议的)。",
            details: "a full-time position 意为“全职职位”，在人力资源中是典型的转正象征（在实习期 internship 结束后）。其余选项不构成正确的修饰含义。",
            cn: "在做了六个月的实习生后，她最终获得了一个全职职位的机会。",
            jp: "インターンとして6ヶ月間働いた後、彼女はついに常勤の（full-time）職を提示されました。"
        }
    },
    {
        id: 6,
        target: "deposit",
        category: "简单",
        stem: "Tenants are required to pay a security ________ before moving into the renovated apartment.",
        options: ["deposit", "recognize", "earn", "other"],
        correct: "deposit",
        explanations: {
            guide: "复合名词搭配词义辨析。空格前面有 a security（安全/保障），构成固定商业租赁名词短语，作为 pay 的宾语，选 deposit。",
            family: "deposit (n.押金/存款) | recognize (v.认可) | earn (v.赢得) | other (adj.其他的)。",
            details: "pay a security deposit 意为“支付安全押金”，是住宅及商业楼宇租赁合同中的必备金牌常客词组。其他选项在此处没有任何关联逻辑。",
            cn: "租户在搬进翻修过的公寓前，必须支付安全押金。",
            jp: "テナントは、改装されたアパートに入居する前に、敷金（deposit）を支払う必要があります。"
        }
    },
    {
        id: 7,
        target: "recognize",
        category: "中等",
        stem: "The general manager wanted to ________ the marketing team for their outstanding performance.",
        options: ["recognize", "demonstrate", "monitor", "subsidy"],
        correct: "recognize",
        explanations: {
            guide: "动词不定式后的动词词义与搭配辨析。空格前有 to，后接人 marketing team，结合后置原因状语 for their outstanding performance（因杰出表现），选 recognize（表彰）。",
            family: "recognize (v.表彰/认可) | demonstrate (v.示范) | monitor (v.监控) | subsidy (n.补贴)。",
            details: "recognize someone for something 意为“因某事表彰/认可某人”，是人力资源及企业文化建设中极其关键的高频句式。其余动词不与 for 形成此类特定搭配。",
            cn: "总经理希望表彰营销团队的杰出表现。",
            jp: "ゼネラルマネージャーは、優れた業績に対してマーケティングチームを表彰（recognize）したいと考えました。"
        }
    },
    {
        id: 8,
        target: "landscaping",
        category: "中等",
        stem: "The property management firm hired a professional ________ company to renovate the courtyard.",
        options: ["landscaping", "establish", "tax", "renovated"],
        correct: "landscaping",
        explanations: {
            guide: "修饰名词的名词定语辨析。空格修饰后面的 company，结合 renovating the courtyard（翻修庭院）这一绿化美化语境，选用名词作定语 landscaping。",
            family: "landscaping (n.园林绿化) | establish (v.建立) | tax (n.税) | renovated (adj.翻新过的)。",
            details: "landscaping company 意为“绿化/造园公司”，负责室外植被绿化、公园或庭院修整。属于物业（property management）后勤维护的外包场景。其他词汇无法构成合理的修饰关系。",
            cn: "物业管理公司聘请了一家专业的绿化公司来翻修庭院。",
            jp: "不動産管理会社は、中庭を改装するためにプロの造園（landscaping）会社を雇いました。"
        }
    },
    {
        id: 9,
        target: "earn",
        category: "中等",
        stem: "By delivering high-quality products, the startup was able to ________ a solid reputation in the industry.",
        options: ["earn", "grant", "deposit", "lucrative"],
        correct: "earn",
        explanations: {
            guide: "情态动词后的动词词义搭配。was able to 后面需接动词原形，结合宾语 a solid reputation（良好的声誉），选用 earn 构成固定搭配。",
            family: "earn (v.赢得/获得) | grant (v.授予) | deposit (v.存入) | lucrative (adj.获利的)。",
            details: "earn a reputation 意为“赢得声誉”，是描述初创企业（startup）通过优质产品积累行业口碑的标准高阶表达。其他干扰项无法构成合理的商务搭配。",
            cn: "通过交付高品质的产品，这家初创公司在行业内赢得了良好的声誉。",
            jp: "高品質な製品を提供することで、そのスタートアップは業界で確固たる評判を獲得（earn）することができました。"
        }
    },
    {
        id: 10,
        target: "monitor",
        category: "中等",
        stem: "The project supervisor will closely ________ the team's weekly progress to ensure we meet the deadline.",
        options: ["monitor", "full-time", "recognize", "brainstorming"],
        correct: "monitor",
        explanations: {
            guide: "副词后的谓语动词词义选择。will 后面接副词 closely，空格处应为及物动词原形，结合宾语 progress（进度）选 monitor。",
            family: "monitor (v.监控/监督) | full-time (adj.全职的) | recognize (v.认出) | brainstorming (n.头脑风暴)。",
            details: "closely monitor the progress 意为“密切监控进度”，是项目管理和团队协作中极其典型的项目监控句式，用来保证能按时完成（meet the deadline）。",
            cn: "项目主管将密切监控团队的每周进度，以确保我们能赶上截止日期。",
            jp: "プロジェクトスーパーバイザーは、期限を確実に守るために、チームの週次の進捗を注意深く監視（monitor）します。"
        }
    },
    {
        id: 11,
        target: "establish",
        category: "中等",
        stem: "The purchasing manager hopes to ________ a close relationship with our primary parts supplier.",
        options: ["establish", "landscaping", "tax", "historical"],
        correct: "establish",
        explanations: {
            guide: "不定式后的及物动词搭配辨析。hopes to 后面接动词原形，结合宾语 a close relationship（亲密关系）选 establish 构成固定搭配。",
            family: "establish (v.建立/确立) | landscaping (n.绿化) | tax (n.税) | historical (adj.历史的)。",
            details: "establish a relationship with... 意为“与……建立关系”，是采购部（purchasing manager）与供应商沟通时的标准商业文书高阶用词。其他选项词性不符或意思不通。",
            cn: "采购经理希望与我们的主要零部件供应商建立密切的关系。",
            jp: "購買マネージャーは、主要な部品サプライヤーとの緊密な関係を構築（establish）したいと考えています。"
        }
    },
    {
        id: 12,
        target: "deposit",
        category: "中等",
        stem: "Customers must ________ a ten percent down payment to reserve the luxury vehicle.",
        options: ["deposit", "earn", "grant", "vetted"],
        correct: "deposit",
        explanations: {
            guide: "及物动词的语义及搭配考核。must 后面接动词原形，结合宾语 down payment（首付款/订金）和预订车辆的语境，选 deposit 表达“支付/交纳”之意。",
            family: "deposit (v.存放/交纳押金) | earn (v.赚取) | grant (v.授予) | vetted (adj.经过审查的)。",
            details: "deposit a down payment 意为“支付首期款/定金”，是房产、高档大件零售预定中的标准表达。虽然 pay 更口语，但在商务文本中常考 deposit 这种具备财务保障的动词搭配。",
            cn: "客户必须支付百分之十的首付款才能预订这辆豪华汽车。",
            jp: "高級車を予約するためには、顧客は10パーセントの頭金を支払う（deposit）必要があります。"
        }
    },
    {
        id: 13,
        target: "recognize",
        category: "困难",
        stem: "The company's rapid market expansion was a direct result of its global brand ________.",
        options: ["recognition", "recognize", "recognizable", "recognizably"],
        correct: "recognition",
        explanations: {
            guide: "名词与动词派生词性选择。空格前面有形容词性物主代词 its 和形容词 global, brand，作为介词 of 的宾语，此位置必须填入名词，选 recognition。",
            family: "recognition (n.认可/识别度) | recognize (v.承认) | recognizable (adj.可辨认的) | recognizably (adv.显著地)。",
            details: "brand recognition 意为“品牌知名度/品牌识别度”，是市场营销（marketing）和宏观品牌估值中权重极高的金牌专业高阶术语。其余派生词词性不符。",
            cn: "该公司市场规模的迅速扩张，是其全球品牌知名度的直接结果。",
            jp: "同社の急速な市場拡大は、そのグローバルなブランド認知度（recognition）の直接的な結果でした。"
        }
    },
    {
        id: 14,
        target: "demonstrate",
        category: "困难",
        stem: "The candidate was hired because she successfully ________ exceptional leadership skills during the interview.",
        options: ["demonstrated", "demonstrate", "demonstration", "demonstrative"],
        correct: "demonstrated",
        explanations: {
            guide: "时态与主谓结构中的动词词性变形。主语是 she，修饰词是副词 successfully，宾语是 skills，且由 because 引导的过去时被动句（was hired）限定，此位置需填入动词过去式，选 demonstrated。",
            family: "demonstrated (v-ed证明了/展现了) | demonstrate (v.证明) | demonstration (n.示范) | demonstrative (adj.指示的/说明的)。",
            details: "demonstrated skills 意为“展现出……的技能”。在招聘考评场景下，修饰求职者展现出的过人素质。本题考查一般过去时的谓语动词位置。",
            cn: "该求职者被录用，是因为她成功地在面试中展现出了非凡的领导才能。",
            jp: "その応募者が採用されたのは、面接中に素晴らしいリーダーシップスキルを実証（demonstrated）することに成功したからです。"
        }
    },
    {
        id: 15,
        target: "landscaping",
        category: "困难",
        stem: "The commercial developer allocated a substantial budget for the ________ of the new corporate park.",
        options: ["landscaping", "landscape", "landscaped", "landscaper"],
        correct: "landscaping",
        explanations: {
            guide: "介词后的名词派生选择。空格位于定冠词 the 和介词 of 之间，作介词 for 的宾语，需要填入表示绿化项目或绿化施工的名词，选 landscaping。",
            family: "landscaping (n.绿化工程) | landscape (n.风景/v.绿化) | landscaped (adj.美化了的) | landscaper (n.园艺工)。",
            details: "the landscaping of... 意为“……的景观美化工程/绿化施工”。表示具体的绿化活动或过程，符合商用办公园区（corporate park）开发规划。landscaper 指人，在此不合语意。",
            cn: "商业开发商拨出了大笔预算用于新公司园区的景观美化工程。",
            jp: "商業開発会社は、新しいオフィスパークの造園（landscaping）のために、多額の予算を割り当てました。"
        }
    },
    {
        id: 16,
        target: "tax",
        category: "困难",
        stem: "The CFO presented a detailed report on how the changes in federal ________ would impact our quarterly revenue.",
        options: ["taxation", "tax", "taxing", "taxed"],
        correct: "taxation",
        explanations: {
            guide: "介词后的抽象名词派生选择。空格位于形容词 federal 之后，作介词 in 的宾语，结合宏观税法改革语境，应填入抽象名词 taxation 表示税收政策。",
            family: "taxation (n.税制/课税) | tax (n.单税) | taxing (adj.繁重的/费力的) | taxed (v-ed已纳税的)。",
            details: "changes in federal taxation 意为“联邦税收制度的变化”，常在CFO面向董事会呈递财报、分析宏观财政调整时出现。taxation 专指国家税收制度与税收行为，较单纯的 tax 更加精准高阶。",
            cn: "首席财务官提交了一份详细报告，阐述了联邦税制的改变将如何影响我们的季度收入。",
            jp: "CFOは、連邦税制（taxation）の変更が四半期収益にどのように影響するかについての詳細なレポートを発表しました。"
        }
    },
    {
        id: 17,
        target: "grant",
        category: "困难",
        stem: "The committee finally ________ the discretionary funding to the research department after a thorough review.",
        options: ["granted", "grant", "granting", "grants"],
        correct: "granted",
        explanations: {
            guide: "谓语动词时态在特定时间及因果中的判定。主语是 committee，宾语是 discretionary funding（可支配资金），根据 completed 行为（after a thorough review 之后），选用过去时动词 granted 充当句子的谓语。",
            family: "granted (v-ed授予了) | grant (v.授予) | granting (v-ing授予中) | grants (v-3sg/n-pl)。",
            details: "granted the funding 意为“批准/授予了资金拨付”，是公共财务审批或公司跨部门审核预算时的标志性高端过去式动词表达。",
            cn: "经过彻底审查后，委员会最终批准向研究部门拨付可支配资金。",
            jp: "徹底的な審査の後、委員会は最終的に研究部門への裁量的資金の授与を承認（granted）しました。"
        }
    },
    {
        id: 18,
        target: "monitor",
        category: "困难",
        stem: "Constant ________ of market trends is essential for making sound capital investments.",
        options: ["monitoring", "monitor", "monitored", "monitors"],
        correct: "monitoring",
        explanations: {
            guide: "动名词作句子主语的词性考核。空格后面有介词短语 of market trends，且作为整个句子的主语（谓语动词为 is），此处必须填入动名词，选 monitoring。",
            family: "monitoring (n.监控/监督) | monitor (v./n.监控) | monitored (v-ed已监控) | monitors (n-pl)。",
            details: "Constant monitoring of... 意为“对……的持续监控”，此处 monitoring 动名词化作主语，修饰投资（capital investments）决策的前期动作。单数或复数名词 monitor 不适合作为抽象监督过程充当主语。",
            cn: "对市场趋势的持续监控对于做出合理的资本投资至关重要。",
            jp: "健全な資本投資を行うためには、市場動向の絶えざる監視（monitoring）が不可欠です。"
        }
    }
];