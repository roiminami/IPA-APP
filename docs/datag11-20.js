// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data11-20.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "include",
        pos: "動",
        ipa: "/ɪnˈkluːd/",
        cn: "包括，包含",
        jp: "〜を含む、含める",
        family: "inclusion / inclusive / including / exclude",
        tips: "在托业阅读中，经常考查 including 作介词引导举例，或者在合同中明确某项费用 include 哪些具体项目。",
        desc: "The total price will include tax."
    },
    {
        word: "department",
        pos: "名",
        ipa: "/dɪˈpɑːrtmənt/",
        cn: "部门，系",
        jp: "部門、部署、課、学科",
        family: "departmental / branch / division",
        tips: "高频商务复合词：accounting department（财务部），marketing department（营销部），human resources department（人事部）。",
        desc: "She works in the accounting department."
    },
    {
        word: "contact",
        pos: "動/名",
        ipa: "/ˈkɑːntækt/",
        cn: "联系，接触；联络人",
        jp: "联系する、連絡を取る；連絡先、コネ",
        family: "contactable / reach / touch",
        tips: "作动词时是及物动词，直接接人（contact us）；作名词时常用于短语 in contact with 或作名词定语 contact information（联系信息）。",
        desc: "Please contact us for more information."
    },
    {
        word: "according to",
        pos: "前",
        ipa: "/əˈkɔːrdɪŋ tuː/",
        cn: "根据，按照",
        jp: "〜根据、〜によれば、〜に従って",
        family: "accord / accordance / accordingly",
        tips: "托业阅读理解（Part 7）指令句常客：'According to the email...'。通常用来引导事实依据，定位原文答案的关键标志。",
        desc: "According to the report, sales increased."
    },
    {
        word: "client",
        pos: "名",
        ipa: "/ˈklaɪənt/",
        cn: "客户，委托人",
        jp: "顧客、クライアント、依頼人",
        family: "clientele / customer / patron",
        tips: "与 customer 相比，client 更多指接受专业咨询或长期服务的“客户”（如咨询、律师、金融业客户）。",
        desc: "Our team will meet the new client."
    },
    {
        word: "review",
        pos: "動/名",
        ipa: "/rɪˈvjuː/",
        cn: "审查，复习，评论；评价",
        jp: "見直す、審査する、批評する；評価、レビュー",
        family: "reviewer / reviewable / inspect",
        tips: "商务场景常考：performance review（绩效评估），review the budget（审查预算），annual review（年度审查）。",
        desc: "We need to review the proposal."
    },
    {
        word: "indicate",
        pos: "動",
        ipa: "/ˈɪndɪkeɪt/",
        cn: "表明，指出，显示",
        jp: "示す、指摘する、表す",
        family: "indication / indicative / indicator / show",
        tips: "常用句型：'Studies indicate that...'（研究表明……）。在图表题（Part 3/4/7）中，常考查某指标 indicate 怎样的趋势。",
        desc: "The charts indicate a steady growth."
    },
    {
        word: "attend",
        pos: "動",
        ipa: "/əˈtend/",
        cn: "出席，参加，照顾",
        jp: "出席する、参加する、注意を向ける",
        family: "attendance / attendant / attendee / participate",
        tips: "及物动词，直接接会议/活动（attend the workshop / seminar）。其名词 attendance 常搭配 high/low attendance（出席人数多/少）。",
        desc: "He will attend the annual seminar."
    },
    {
        word: "hire",
        pos: "動/名",
        ipa: "/ˈhaɪər/",
        cn: "雇用，租用；新雇员",
        jp: "雇う、賃借する；新入社員",
        family: "hiring / recruit / employ / fire",
        tips: "名词用法表示“新员工”时常用作可数名词：'new hires'（新进人员）。动词常考短语：hire temporary staff（雇用临时员工）。",
        desc: "They plan to hire more programmers."
    },
    {
        word: "local",
        pos: "形/名",
        ipa: "/ˈloʊkl/",
        cn: "当地的，地方的；当地居民",
        jp: "地元の、地域の、局所の；地元住民",
        family: "locally / locality / localize / regional",
        tips: "托业高频搭配：local businesses（当地企业），local community（当地社区），local authorities（当地官方/政府）。",
        desc: "We buy items from local businesses."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "consultancy", pos: "名", ipa: "/kənˈsʌltənsi/", cn: "咨询公司，咨询服务", jp: "コンサルタント会社、相談業" },
    { word: "itinerary", pos: "名", ipa: "/aɪˈtɪnəreri/", cn: "行程表，旅行日程", jp: "旅行日程表、旅程" },
    { word: "delegates", pos: "名", ipa: "/ˈdelɪɡəts/", cn: "代表，会议代表（复数）", jp: "代表者、代理人（複数形）" },
    { word: "reimbursement", pos: "名", ipa: "/ˌriːɪmˈbɜːrsmənt/", cn: "报销，退还", jp: "払い戻し、返済" },
    { word: "supervisor", pos: "名", ipa: "/ˈsuːpərvaɪzər/", cn: "主管，监督者", jp: "上司、監督者" },
    { word: "revenue", pos: "名", ipa: "/ˈrevənuː/", cn: "收入，岁入", jp: "収益、歳入" },
    { word: "regulations", pos: "名", ipa: "/ˌreɡjəˈleɪʃnz/", cn: "规章，条例（复数）", jp: "規則、規制（複数形）" },
    { word: "vendors", pos: "名", ipa: "/ˈvendərz/", cn: "供应商，小贩（复数）", jp: "業者、販売元（複数形）" },
    { word: "projections", pos: "名", ipa: "/prəˈdʒekʃnz/", cn: "预测，规划（复数）", jp: "予測、投影（複数形）" },
    { word: "complimentary", pos: "形", ipa: "/ˌkɑːmplɪˈmentri/", cn: "免费赠送的，赞美的", jp: "無料の、賞賛の" },
    { word: "subsidiary", pos: "名", ipa: "/səbˈsɪdieri/", cn: "子公司，辅助物", jp: "子会社、補助的な" },
    { word: "contractor", pos: "名", ipa: "/ˈkɑːntræktər/", cn: "承包商，合同工", jp: "契約業者、請負人" },
    { word: "onboarding", pos: "名", ipa: "/ˈɑːnbɔːrdɪŋ/", cn: "入职培训，新员工融入", jp: "オンボーディング、新入社員研修" },
    { word: "discrepancy", pos: "名", ipa: "/dɪˈskrepənsi/", cn: "不符之处，矛盾，差异", jp: "不一致、相違点" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "include",
        category: "简单",
        stem: "The registration fee for the business summit does not ________ the cost of accommodation or meals.",
        options: ["include", "including", "attendance", "department"],
        correct: "include",
        explanations: {
            guide: "助动词后的动词原形考点。does not 后面必须接动词原形作为谓语，结合句意选 include（包含）。",
            family: "include (v.包含) | including (prep.包含) | attendance (n.出席) | department (n.部门)。",
            details: "句意为‘峰会的注册费不包括住宿或餐费’。including 是介词或分词形式，不能直接作助动词 does not 后的谓语动词。",
            cn: "商务峰会的注册费不包括住宿或餐费。",
            jp: "ビジネスサミットの登録料には、宿泊費や食費は含まれて（include）いません。"
        }
    },
    {
        id: 2,
        target: "department",
        category: "简单",
        stem: "Ms. Green was transferred to the accounting ________ after working in marketing for two years.",
        options: ["department", "departmental", "hire", "client"],
        correct: "department",
        explanations: {
            guide: "复合名词定语用法。accounting 与后面的空格组成高频商务短语 accounting department（财务部）。",
            family: "department (n.部门) | departmental (adj.部门的) | hire (v./n.雇用) | client (n.客户)。",
            details: "这里表示特定的公司部门。departmental 是形容词，通常用于修饰名词（如 departmental meetings），在此不符合名词充当中心语的要求。",
            cn: "格林女士在营销部工作了两年后，被调到了财务部。",
            jp: "グリーン氏はマーケティング部で2年間働いた後、経理部（department）に異動になりました。"
        }
    },
    {
        id: 3,
        target: "contact",
        category: "简单",
        stem: "If you experience any technical difficulties with the platform, please ________ customer support immediately.",
        options: ["contact", "contactable", "indicate", "attend"],
        correct: "contact",
        explanations: {
            guide: "祈使句动词原形考点。please 后面引导祈使句，需要加动词原形，根据上下文逻辑应选用 contact（联系）。",
            family: "contact (v.联系) | contactable (adj.可联系的) | indicate (v.表明) | attend (v.出席)。",
            details: "contact 是及物动词，后接 customer support（客户支持团队）构成完整语义。contactable 是形容词，不能用在句中作谓语动词。",
            cn: "如果您在使用该平台时遇到任何技术困难，请立即联系客户支持团队。",
            jp: "プラットフォームで技術的な問題が発生した場合は、すぐにカスタマーサポートに連絡（contact）してください。"
        }
    },
    {
        id: 4,
        target: "according to",
        category: "简单",
        stem: "________ the official company policy, all international business travel requests must be approved in advance.",
        options: ["According to", "Accordance", "Local", "Include"],
        correct: "According to",
        explanations: {
            guide: "介词短语引导状语。句首引导名词短语，表示依据、来源，固定搭配为 according to（根据）。",
            family: "according to (prep.根据) | accordance (n.一致/常用于 in accordance with) | local (adj.当地的) | include (v.包含)。",
            details: "According to the official company policy 意为“根据公司官方政策”。accordance 是名词，必须搭配成 in accordance with 才能引导短语。",
            cn: "根据公司官方政策，所有国际商务出差申请必须提前获得批准。",
            jp: "会社の公式規定によれば（According to）、すべての国際出張申請は事前に承認されなければなりません。"
        }
    },
    {
        id: 5,
        target: "client",
        category: "简单",
        stem: "The senior legal advisor scheduled a meeting to discuss the terms of the contract with our primary ________.",
        options: ["client", "clientele", "hire", "department"],
        correct: "client",
        explanations: {
            guide: "名词单复数与语境判断。our primary 修饰可数名词单数，结合法律及专业咨询背景，选择 client（客户）。",
            family: "client (n.客户/单数) | clientele (n.客户群/总称) | hire (n.新雇员) | department (n.部门)。",
            details: "primary client 指“主要客户”。clientele 是集合名词，代表整个客户群体，通常不与定冠词/代词以及 primary 连用来修饰单个个体。",
            cn: "高级法律顾问安排了一次会议，与我们的主要客户讨论合同条款。",
            jp: "シニア法務アドバイザーは、主要なクライアント（client）と契約条件について話し合うための会議を予定しました。"
        }
    },
    {
        id: 6,
        target: "review",
        category: "简单",
        stem: "The executive committee will ________ the quarterly financial reports before submitting them to the board.",
        options: ["review", "reviewer", "indicate", "local"],
        correct: "review",
        explanations: {
            guide: "情态动词后的动词原形。will 后面需要接动词原形，此处语义为“审查、核对”财务报告，选 review。",
            family: "review (v./n.审查) | reviewer (n.审查者) | indicate (v.表明) | local (adj.当地的)。",
            details: "will review the quarterly financial reports 属于标准公司治理表述。reviewer 为名词，不能接在情态动词后面。",
            cn: "执行委员会将在向董事会提交季度财务报告之前对其进行审查。",
            jp: "執行委員会は、取締役会に提出する前に四半期財務報告書をレビュー（review）する予定です。"
        }
    },
    {
        id: 7,
        target: "indicate",
        category: "中等",
        stem: "Recent market analyses ________ that consumer spending on eco-friendly products has grown significantly.",
        options: ["indicate", "indication", "indicative", "contact"],
        correct: "indicate",
        explanations: {
            guide: "主谓一致与宾语从句引导词。主语是复数名词 analyses，空格处需要复数谓语动词，后接 that 从句，选 indicate。",
            family: "indicate (v.表明) | indication (n.迹象) | indicative (adj.表明的) | contact (v.联系)。",
            details: "analyses indicate that...（分析表明……）是托业高频句型。indication 是名词，其后不能直接跟宾语从句作为谓语核心结构。",
            cn: "最近的市场分析表明，消费者在环保产品上的支出有了显著增长。",
            jp: "最近の市場分析は、環境に配慮した製品への消費者支出が大幅に増加していることを示して（indicate）います。"
        }
    },
    {
        id: 8,
        target: "attend",
        category: "中等",
        stem: "Many regional managers are planning to ________ the leadership workshop scheduled for next Thursday.",
        options: ["attend", "attendance", "attendee", "hire"],
        correct: "attend",
        explanations: {
            guide: "动词不定式结构。are planning to 后面需加动词原形，后接宾语 the leadership workshop，选 attend（参加）。",
            family: "attend (v.出席) | attendance (n.出席人数/出席) | attendee (n.出席者) | hire (v.雇用)。",
            details: "attend 后面直接加会议名称作宾语。attendance（名词）和 attendee（名词：与会者）都无法与 to 构成不定式短语作谓语成分。",
            cn: "许多区域经理正计划参加预定于下周四举行的领导力研讨会。",
            jp: "多くの地域マネージャーが、来週木曜日に予定されているリーダーシップワークショップに出席（attend）することを計画しています。"
        }
    },
    {
        id: 9,
        target: "hire",
        category: "中等",
        stem: "To expand our operations in Asia, our technology company needs to ________ experienced software engineers.",
        options: ["hire", "hiring", "client", "according to"],
        correct: "hire",
        explanations: {
            guide: "及物动词不定式搭配。needs to 后面接动词原形，表达公司“雇用”工程师的业务意图，选 hire。",
            family: "hire (v.雇用) | hiring (n.招募行为) | client (n.客户) | according to (prep.根据)。",
            details: "needs to hire 构成完整的不定式短语。hiring 为动名词或分词形式，不符合 to 后面接动词原形的要求。",
            cn: "为了扩大我们在亚洲的业务，我们科技公司需要雇用经验丰富的软件工程师。",
            jp: "アジアでの事業を拡大するために、当社のIT企業は経験豊富なソフトウェアエンジニアを雇用（hire）する必要があります。"
        }
    },
    {
        id: 10,
        target: "local",
        category: "中等",
        stem: "The venue organizer decided to source all the catering ingredients from ________ farms to support the community.",
        options: ["local", "locally", "locality", "include"],
        correct: "local",
        explanations: {
            guide: "形容词修饰名词。空格后为名词 farms（农场），前面需要形容词作定语修饰它，表示“当地的”，选 local。",
            family: "local (adj.当地的) | locally (adv.在当地) | locality (n.位置) | include (v.包含)。",
            details: "local farms 意为当地农场。locally 是副词，通常用于修饰动词或形容词（如 locally grown vegetables），无法直接修饰名词中心语 farms。",
            cn: "场地组织者决定从当地农场采购所有的餐饮食材，以支持社区发展。",
            jp: "会場の主催者は、地域社会を支援するために、すべてのケータリング食材を地元の（local）農家から調達することに決めました。"
        }
    },
    {
        id: 11,
        target: "include",
        category: "中等",
        stem: "The comprehensive travel itinerary prepared by the consultancy does not ________ the afternoon sightseeing tour.",
        options: ["include", "inclusive", "including", "attend"],
        correct: "include",
        explanations: {
            guide: "谓语动词原形考点。句中带有助动词 does not，后面需补充及物动词原形，结合句意选择 include（包含）。",
            family: "include (v.包含) | inclusive (adj.包含总数的) | including (prep.包含) | attend (v.参加)。",
            details: "句中宾语是 sightseeing tour（观光行程）。inclusive 是形容词，通常作表语或后置定语（如 prices are tax inclusive），不能在此担当谓语。",
            cn: "咨询公司准备的详尽旅行行程表不包括下午的观光游览。",
            jp: "コンサルタント会社が作成した詳細な旅行日程表（itinerary）には、午後の観光ツアーは含まれて（include）いません。"
        }
    },
    {
        id: 12,
        target: "department",
        category: "中等",
        stem: "A representative from the legal ________ will lead a brief orientation session regarding the new safety regulations.",
        options: ["department", "departmental", "contact", "indicate"],
        correct: "department",
        explanations: {
            guide: "复合名词定语高级用法。the legal department 意为“法律部/法务部”，属于商务英语中最常见的职能部门名称。",
            family: "department (n.部门) | departmental (adj.部门的) | contact (v./n.联系) | indicate (v.表明)。",
            details: "定冠词 the 加上 legal（形容词）后，需要一个名词来构成介词短语的宾语核心，故选名词形式 department。",
            cn: "法务部的一位代表将主持一场关于新安全规章的简短入职培训会。",
            jp: "法務部（department）の代表者が、新しい安全規制（regulations）に関する簡単なオリエンテーションセッションを実施します。"
        }
    },
    {
        id: 13,
        target: "contact",
        category: "困难",
        stem: "Please ensure that your up-to-date ________ details are registered in the corporate database to receive emergency updates.",
        options: ["contact", "contactable", "review", "hire"],
        correct: "contact",
        explanations: {
            guide: "名词作定语修饰名词。contact 与后面的 details 拼接组合为商务专属复合名词 contact details（联系方式）。",
            family: "contact (n.联系/联络人) | contactable (adj.可联系的) | review (v./n.审查) | hire (v./n.雇用)。",
            details: "虽然 contactable 是形容词，但商业英语惯例中使用名词 contact 直接作定语修饰 details 或 information（如 contact information），这是托业高频陷阱。",
            cn: "请确保您的最新联系方式已注册在公司数据库中，以便接收紧急更新信息。",
            jp: "緊急の更新情報を受け取るために、最新の連絡先（contact）情報が社内データベースに登録されていることを確認してください。"
        }
    },
    {
        id: 14,
        target: "according to",
        category: "困难",
        stem: "The financial projections were modified ________ the latest market trend figures provided by external vendors.",
        options: ["according to", "accordance", "indicate", "local"],
        correct: "according to",
        explanations: {
            guide: "复合介词的语篇逻辑应用。空格后为名词短语（the latest market trend figures），需要填入介词结构表达“根据…”。",
            family: "according to (prep.根据) | accordance (n.一致) | indicate (v.表明) | local (adj.当地的)。",
            details: "根据外部供应商提供的数据来修改预测。若填 accordance 则缺少 in 和 with，无法形成合理的介词架构（in accordance with）。",
            cn: "根据外部供应商提供的最新市场趋势数据，财务预测进行了修改。",
            jp: "外部の業者（vendors）から提供された最新の市場動向データに従って（according to）、財務予測（projections）が修正されました。"
        }
    },
    {
        id: 15,
        target: "client",
        category: "困难",
        stem: "Our account manager provided the prospective ________ with a complimentary copy of the newly drafted project portfolio.",
        options: ["client", "clientele", "department", "attendance"],
        correct: "client",
        explanations: {
            guide: "及物动词搭配与单数名词定语。provide sb with sth 结构，prospective（潜在的）是形容词，后面需加可数名词单数指代人。",
            family: "client (n.客户) | clientele (n.客户群/集合名词) | department (n.部门) | attendance (n.出席)。",
            details: "prospective client 是固定商业搭配，指“潜在客户”。clientele 是复数集合概念，不与单数冠词性质的修饰词搭配指代单个主体。",
            cn: "我们的客户经理向潜在客户免费提供了一份最新起草的项目作品集。",
            jp: "当社の高額顧客マネージャーは、見込み客（client）に新しく作成されたプロジェクトポートフォリオの無料（complimentary）コピーを提供しました。"
        }
    },
    {
        id: 16,
        target: "review",
        category: "困难",
        stem: "The regional branch director requested a thorough ________ of the logistics budget to eliminate unnecessary expenses.",
        options: ["review", "reviewer", "indicate", "according to"],
        correct: "review",
        explanations: {
            guide: "定冠词与形容词后的名词中心语。a thorough ________ 中，不定冠词 a 和形容词 thorough 后面必须接名词，此处选 review 作名词（审查）。",
            family: "review (n./v.审查) | reviewer (n.审查者/通常指具体的人) | indicate (v.表明) | according to (prep.根据)。",
            details: "a thorough review 意为“彻底的审查/全面评估”。reviewer（评审员）在语义上无法被“logistics budget（物流预算）”修饰，逻辑不通。",
            cn: "地区分支机构主管要求对物流预算进行彻底审查，以消除不必要的开支。",
            jp: "地域支店長は、不必要な支出を排除するために、物流予算の徹底的な見直し（review）を要求しました。"
        }
    },
    {
        id: 17,
        target: "indicate",
        category: "困难",
        stem: "Initial feedback surveys from the delegates clearly ________ that the conference venue was highly satisfactory.",
        options: ["indicate", "indication", "indicative", "included"],
        correct: "indicate",
        explanations: {
            guide: "复杂主语结构下的动词时态与一致性。核心主语是复数名词 surveys（调查），副词 clearly 后需要搭配复数谓语动词，选 indicate。",
            family: "indicate (v.表明/原形) | indication (n.迹象) | indicative (adj.表明的) | included (v-ed/adj.包含的)。",
            details: "Surveys clearly indicate that... 表示“反馈调查明确表明……”。indication 为名词，indicative 为形容词，均不能直接充当 surveys 的谓语成分。",
            cn: "代表们最初的反馈调查清楚地表明，会议场地令人非常满意。",
            jp: "代表者（delegates）からの初期のフィードバック調査は、会議会場が非常に満足のいくものであったことを明確に示して（indicate）います。"
        }
    },
    {
        id: 18,
        target: "attend",
        category: "困难",
        stem: "Representatives from our overseas subsidiary are required to ________ the executive leadership training next month.",
        options: ["attend", "attendance", "attendee", "hire"],
        correct: "attend",
        explanations: {
            guide: "被动语态结合不定式复合结构。be required to 后面必须使用动词原形，宾语是 training（培训课程），选 attend。",
            family: "attend (v.参加) | attendance (n.出席) | attendee (n.与会者) | hire (v.雇用)。",
            details: "are required to attend 意为“被要求参加”。attendance 和 attendee 分别为抽象名词和人员名词，无法直接引导宾语 training。",
            cn: "我们海外子公司的代表被要求参加下个月的高管领导力培训。",
            jp: "当社の海外子会社（subsidiary）の代表者は、来月のエグゼクティブリーダーシップ研修に出席（attend）することが義務付けられています。"
        }
    }
];