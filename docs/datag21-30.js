// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (data11-20.js)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "repair",
        pos: "動/名",
        ipa: "/rɪˈper/",
        cn: "修理，修补；维修",
        jp: "修理する、修復する；修理、メンテナンス",
        family: "repairable / reparation / mechanic / fix",
        tips: "托业高频商务搭配：under repair（在修理中），repair services（维修服务）。注意名词和动词同形。",
        desc: "He will repair the car."
    },
    {
        word: "article",
        pos: "名",
        ipa: "/ˈɑːrtɪkl/",
        cn: "文章，报道；条款；物品",
        jp: "記事、論説；条項；品物",
        family: "newspaper / column / item / feature",
        tips: "在阅读Part 7中常作为文献类型出现（'According to the article...'）。另外在物流合同中，也可表示“物品，商品”。",
        desc: "I read an interesting article."
    },
    {
        word: "update",
        pos: "動/名",
        ipa: "/ˌʌpˈdeɪt/",
        cn: "更新，使现代化；最新消息",
        jp: "更新する、最新のものにする；最新情報",
        family: "upgraded / outdated / status / renew",
        tips: "商务IT场景常客：software update（软件更新），system update（系统升级）。作动词时常接 update the policy（更新政策）。",
        desc: "Please update your software today."
    },
    {
        word: "advertise",
        pos: "動",
        ipa: "/ˈædvərtaɪz/",
        cn: "为……做广告，宣传；招牌",
        jp: "広告を出す、宣伝する、公募する",
        family: "advertisement / advertising / advertiser / promote",
        tips: "常考不及物用法 advertise for a new position（公开招聘新职位），或者及物动词 advertise the product（宣传产品）。",
        desc: "They advertise the new product."
    },
    {
        word: "equipment",
        pos: "名",
        ipa: "/ɪˈkwɪpmənt/",
        cn: "设备，装备，器材",
        jp: "機器、設備、用具",
        family: "equip / equipped / facility / device",
        tips: "不可数名词！托业经典陷阱题，绝对不能加 -s。常见搭配：office equipment（办公设备），safety equipment（安全防护用具）。",
        desc: "The office needs new equipment."
    },
    {
        word: "increase",
        pos: "動/名",
        ipa: "/ɪnˈkriːs/",
        cn: "增加，增长，提高",
        jp: "増加する、増やす；増加、上昇",
        family: "increasingly / decrease / growth / rise",
        tips: "常见图表题词汇。作名词时常搭配 an increase in sales（销量增长）；作动词时常与 significantly 连用表示大幅增长。",
        desc: "Sales will increase next month."
    },
    {
        word: "opening",
        pos: "名/形",
        ipa: "/ˈoʊpnɪŋ/",
        cn: "空缺，职缺；开幕，开始",
        jp: "職の空き、欠員；開店、開始；開会の",
        family: "open / openness / vacancy / launch",
        tips: "托业阅读与听力核心高频词，表示“职位空缺”（job opening），等同于 vacancy。也常用于 grand opening（盛大开幕）。",
        desc: "There is a job opening."
    },
    {
        word: "ship",
        pos: "動/名",
        ipa: "/ʃɪp/",
        cn: "运输，运送，邮寄；船",
        jp: "出荷する、輸送する；船",
        family: "shipment / shipping / deliver / transport",
        tips: "在托业中动词用法极多，指通过任何交通工具“运送货物”（不限于船运）。常见搭配：ship the order（发货）。",
        desc: "We will ship the order."
    },
    {
        word: "expect",
        pos: "動",
        ipa: "/ɪkˈspekt/",
        cn: "期待，预期，要求",
        jp: "予期する、期待する、想定する",
        family: "expectation / expected / unexpected / anticipate",
        tips: "常见句型 be expected to do sth（被预期做某事/应该做某事）。常用于预测公司未来的收入或项目截止日期。",
        desc: "We expect a large crowd."
    },
    {
        word: "recently",
        pos: "副",
        ipa: "/ˈriːsntli/",
        cn: "最近，近来",
        jp: "最近、近頃",
        family: "recent / late / lately / current",
        tips: "时态题的核心标志词！在托业中，recently 出现时，句子谓语动词通常使用现在完成时（has/have done）或一般过去时。",
        desc: "She recently changed her job."
    }
];

// 2. 背景真题难词库 (Context Background Difficult Words)
const helperVocabBank = [
    { word: "maintenance", pos: "名", ipa: "/ˈmeɪntənəns/", cn: "维护，保养", jp: "保守、メンテナンス" },
    { word: "merger", pos: "名", ipa: "/ˈmɜːrdʒər/", cn: "合并", jp: "合併" },
    { word: "Management", pos: "名", ipa: "/ˈmænɪdʒmənt/", cn: "管理层，管理", jp: "経営陣、管理" },
    { word: "significant", pos: "形", ipa: "/sɪɡˈnɪfɪkənt/", cn: "显著的，重大的", jp: "著しい、重大な" },
    { word: "administrative", pos: "形", ipa: "/ədˈmɪnɪstreɪtɪv/", cn: "行政的，管理的", jp: "管理の、行政の" },
    { word: "logistics", pos: "名", ipa: "/ləˈdʒɪstɪks/", cn: "物流，后勤", jp: "物流、ロジスティクス" },
    { word: "fluctuate", pos: "動", ipa: "/ˈflʌktʃueɪt/", cn: "波动，起伏", jp: "変動する、上下する" },
    { word: "mandatory", pos: "形", ipa: "/ˈmændətɔːri/", cn: "强制性的，义务的", jp: "義務的な、強制的な" },
    { word: "cybersecurity", pos: "名", ipa: "/ˌsaɪbərˈsɪkjʊrəti/", cn: "网络安全", jp: "サイバーセキュリティ" },
    { word: "machinery", pos: "名", ipa: "/məːˈʃiːnəri/", cn: "机械，机器（总称）", jp: "機械類" },
    { word: "authorization", pos: "名", ipa: "/ˌɔːθərəˈzeɪʃn/", cn: "授权，批准", jp: "権限付与、承認" },
    { word: "depreciates", pos: "動", ipa: "/dɪˈpriːʃieɪts/", cn: "贬值，折旧（单三）", jp: "価値が下がる、減価償却する（三人称単数）" },
    { word: "inevitably", pos: "副", ipa: "/ɪnˈevɪtəbli/", cn: "不可避免地", jp: "不可避的に、必然的に" },
    { word: "Attendees", pos: "名", ipa: "/əˌtenˈdiːz/", cn: "与会者，出席者（复数）", jp: "出席者、参加者（複数形）" },
    { word: "merchandise", pos: "名", ipa: "/ˈmɜːrtʃəndaɪz/", cn: "商品，货物", jp: "商品" },
    { word: "lucrative", pos: "形", ipa: "/ˈluːkrətɪv/", cn: "获利丰厚的，赚钱的", jp: "利益の上がる、儲かる" }
];

// 3. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "repair",
        category: "简单",
        stem: "The maintenance crew will ________ the broken elevator tomorrow morning.",
        options: ["repair", "repairable", "equipment", "opening"],
        correct: "repair",
        explanations: {
            guide: "情态动词后的动词原形考点。will 后面必须接动词原形作为谓语，结合句意选 repair（修理）。",
            family: "repair (v./n.修理) | repairable (adj.可修理的) | equipment (n.设备) | opening (n.空缺)。",
            details: "句意为‘维修人员明天早上将修理损坏的电梯’。repairable 是形容词，不能直接作情态动词 will 后的谓语动词。",
            cn: "维修人员明天早上将修理损坏的电梯。",
            jp: "メンテナンス（maintenance）スタッフは明日午前、故障したエレベーターを修理（repair）する予定です。"
        }
    },
    {
        id: 2,
        target: "article",
        category: "简单",
        stem: "The latest ________ in the corporate newsletter details the upcoming merger.",
        options: ["article", "articles", "advertise", "recently"],
        correct: "article",
        explanations: {
            guide: "名词单数与主谓一致判断。The latest 后面需要名词作主语，根据 details（动词单三）可知主语为单数名词 article。",
            family: "article (n.文章/单数) | articles (n.文章/复数) | advertise (v.做广告) | recently (adv.最近)。",
            details: "此处指的是一篇文章。由于谓语动词是 details 这一单数第三人称形式，故排除复数名词 articles。",
            cn: "企业内部通讯中的最新文章详细介绍了即将进行的合并。",
            jp: "社内報の最新記事（article）では、近く行われる合併（merger）について詳しく説明しています。"
        }
    },
    {
        id: 3,
        target: "update",
        category: "简单",
        stem: "Management requests all employees to ________ their profile information before Friday.",
        options: ["update", "updated", "increase", "expect"],
        correct: "update",
        explanations: {
            guide: "动词不定式结构。to 后面需要接动词原形构成不定式短语，语义为“更新”个人资料，选 update。",
            family: "update (v.更新) | updated (adj./v-ed已更新的) | increase (v.增加) | expect (v.期待)。",
            details: "requests sb to do sth 为固定搭配，要求某人做某事。updated 是过去分词或过去式，不符合动词原形的要求。",
            cn: "管理层要求所有员工在星期五之前更新他们的个人资料信息。",
            jp: "経営陣（Management）はすべての従業員に対し、金曜日までにプロフィール情報を更新（update）するよう求めています。"
        }
    },
    {
        id: 4,
        target: "advertise",
        category: "简单",
        stem: "The marketing team plans to ________ the new software on various social media platforms.",
        options: ["advertise", "advertisement", "ship", "article"],
        correct: "advertise",
        explanations: {
            guide: "及物动词不定式用法。plans to 后面需加动词原形，后接宾语 the new software，结合商业情境选 advertise（宣传/做广告）。",
            family: "advertise (v.做广告) | advertisement (n.广告) | ship (v.运输) | article (n.文章)。",
            details: "此处需要填入动词形式来带出后面的宾语。advertisement 是名词，无法在 to 后面充当动词原形成分。",
            cn: "营销团队计划在各种社交媒体平台上为这款新软件做广告。",
            jp: "マーケティングチームは、さまざまなSNSプラットフォーム（platforms）で新しいソフトウェアを宣伝（advertise）することを計画しています。"
        }
    },
    {
        id: 5,
        target: "equipment",
        category: "简单",
        stem: "The laboratory ordered new laboratory ________ from a certified medical supplier.",
        options: ["equipment", "equipped", "opening", "repair"],
        correct: "equipment",
        explanations: {
            guide: "名词充当宾语成分。ordered（订购）是及物动词，后面需要名词作宾 office 语，表达“设备”概念，选 equipment。",
            family: "equipment (n.设备/不可数) | equipped (adj.装备齐全的) | opening (n.职缺) | repair (v./n.修理)。",
            details: "ordered new laboratory equipment（订购了新的实验室设备）。equipped 是形容词或动词过去式，不能用在此处作宾语中心语。",
            cn: "该实验室向一家经过认证的医疗供应商订购了新的实验室设备。",
            jp: "研究所（laboratory）は、認定された（certified）医療サプライヤーから新しい実験機器（equipment）を注文しました。"
        }
    },
    {
        id: 6,
        target: "increase",
        category: "简单",
        stem: "Strong performance in the European sector led to a significant ________ in overall profits.",
        options: ["increase", "increasingly", "update", "recently"],
        correct: "increase",
        explanations: {
            guide: "不定冠词与形容词后的名词。a significant 后面必须搭配名词中心语，根据商业利润语境，选 increase（增长）。",
            family: "increase (n./v.增加) | increasingly (adv.渐增地) | update (n./v.更新) | recently (adv.最近)。",
            details: "led to a significant increase in profits 属于固定商业搭配，意为“导致利润显著增长”。increasingly 是副词，不能被形容词修饰且不能作名词宾语。",
            cn: "欧洲部门的强劲表现带动了整体利润的显著增长。",
            jp: "欧州セクターでの好調な業績により、全体の利益が大幅に増加（increase）しました。"
        }
    },
    {
        id: 7,
        target: "opening",
        category: "中等",
        stem: "Human Resources announced a temporary job ________ in the administrative department.",
        options: ["opening", "openings", "expect", "advertise"],
        correct: "opening",
        explanations: {
            guide: "复合名词修饰与可数名词单复数。不定冠词 a 修饰后面的可数名词单数，job opening 指“职位空缺”。",
            family: "opening (n.空缺/单数) | openings (n.空缺/复数) | expect (v.期待) | advertise (v.做广告)。",
            details: "a temporary job opening（一个临时的职位空缺）。由于前面有单数不定冠词 a，因此排除复数形式 openings，而 expect 和 advertise 则是动词形式。",
            cn: "人力资源部宣布行政部门有一个临时的职位空缺。",
            jp: "人事部は、行政（administrative）部門に一時的な職の空き（opening）があることを発表しました。"
        }
    },
    {
        id: 8,
        target: "ship",
        category: "中等",
        stem: "The logistics provider promised to ________ the fragile components via express courier.",
        options: ["ship", "shipment", "equipment", "repair"],
        correct: "ship",
        explanations: {
            guide: "动词不定式带宾语。promised to 后面需要接动词原形，用来支配后面的名词短语宾语，表示“运送”，选 ship。",
            family: "ship (v.运输) | shipment (n.运输的货物) | equipment (n.设备) | repair (n./v.维修)。",
            details: "ship the fragile components 意为“运送易碎部件”。shipment 是名词，不能跟在 to 后面直接担当谓语动词的功能。",
            cn: "物流供应商承诺通过快递公司运送这批易碎部件。",
            jp: "物流（logistics）業者は、エクスプレス便で壊れやすい部品を発送（ship）することを約束しました。"
        }
    },
    {
        id: 9,
        target: "expect",
        category: "中等",
        stem: "Financial analysts ________ that the interest rates will fluctuate over the next quarter.",
        options: ["expect", "expectation", "increase", "recently"],
        correct: "expect",
        explanations: {
            guide: "主谓一致与宾语从句谓语动词。主语为复数名词 analysts，空格后带 that 引导的宾语从句，选复数动词 expect（预计）。",
            family: "expect (v.预计/原形) | expectation (n.预期) | increase (v./n.增加) | recently (adv.最近)。",
            details: "Analysts expect that... 意为“分析师预计……”，属于高频图表或金融分析句型。expectation 为名词，无法直接引导宾语从句。",
            cn: "金融分析师预计利率在下一个季度内将会出现波动。",
            jp: "金融アナリスト（analysts）は、金利が次の四半期（quarter）にかけて変動する（fluctuate）と予想（expect）しています。"
        }
    },
    {
        id: 10,
        target: "recently",
        category: "中等",
        stem: "The board of directors has ________ approved the revised budget for research and development.",
        options: ["recently", "recent", "update", "article"],
        correct: "recently",
        explanations: {
            guide: "现在完成时中的副词修饰。has 与过去分词 approved 之间需要填入副词作状语，recently 常与现在完成时连用。",
            family: "recently (adv.最近) | recent (adj.最近的) | update (v./n.更新) | article (n.文章)。",
            details: "has recently approved 意为“最近批准了”。recent 是形容词，通常修饰名词（如 recent changes），不能放在助动词与过去分词之间修饰动词。",
            cn: "董事会最近批准了修改后的研发预算。",
            jp: "取締役会（directors）は、研究開発のための修正（revised）予算案を最近（recently）承認（approved）しました。"
        }
    },
    {
        id: 11,
        target: "repair",
        category: "中等",
        stem: "The manufacturing plant was shut down temporarily because the main conveyor belt was under ________.",
        options: ["repair", "repairable", "equipment", "shipment"],
        correct: "repair",
        explanations: {
            guide: "介词固定搭配名词考点。under 后面经常跟抽象名词，构成介词短语表示某种状态，固定搭配为 under repair（维修中）。",
            family: "repair (n./v.维修) | repairable (adj.可维修的) | equipment (n.设备) | shipment (n.运输货物)。",
            details: "was under repair 意为“正在维修”。repairable 是形容词，通常不直接跟在介词 under 后面作宾语。",
            cn: "由于主要的传送带正在维修，这家制造厂暂时关闭了。",
            jp: "メインのコンベアベルトが修理中（under repair）だったため、製造（manufacturing）工場は一時的に閉鎖されました。"
        }
    },
    {
        id: 12,
        target: "update",
        category: "中等",
        stem: "The IT department will issue a mandatory system ________ to enhance cybersecurity parameters.",
        options: ["update", "updated", "advertising", "opening"],
        correct: "update",
        explanations: {
            guide: "形容词后的名词中心语。a mandatory system 后面需要一个名词，构成完整概念“系统更新”，应选名词 update。",
            family: "update (n./v.更新) | updated (adj.已更新的) | advertising (n.广告业) | opening (n.职缺)。",
            details: "issue a mandatory system update 意为“发布强制性系统更新”。updated 是分词形式，在此处无法充当名词中心语。",
            cn: "IT部门将发布一项强制性的系统更新，以增强网络安全参数。",
            jp: "IT部門は、サイバーセキュリティ（cybersecurity）の基準を強化（enhance）するために、義務的な（mandatory）システムアップデート（update）を発行します。"
        }
    },
    {
        id: 13,
        target: "equipment",
        category: "困难",
        stem: "Purchasing heavy machinery requires prior authorization because specialized ________ depreciates rapidly over time.",
        options: ["equipment", "equipped", "increase", "expect"],
        correct: "equipment",
        explanations: {
            guide: "从句主语与不可数名词特质。because 引导的原因状语从句中，specialized 是形容词，空格处需要名词充当该从句主语，选 equipment。",
            family: "equipment (n.设备/不可数名词) | equipped (adj.装备好的) | increase (v./n.增加) | expect (v.期待)。",
            details: "specialized equipment 意为“专业设备”，并且它是不可数名词，完美对应后面单数第三人称谓语动词 depreciates 的时态要求。",
            cn: "购买重型机械需要事先授权，因为专业设备随着时间的推移折旧速度很快。",
            jp: "専門的な機器（equipment）は時間の経過とともに急速に減価償却する（depreciates）ため、重機（machinery）の購入には事前の（prior）承認（authorization）が必要です。"
        }
    },
    {
        id: 14,
        target: "increase",
        category: "困难",
        stem: "The sudden surge in raw material prices will inevitably force the manufacturer to ________ retail prices.",
        options: ["increase", "increasingly", "advertise", "update"],
        correct: "increase",
        explanations: {
            guide: "动词不定式复合结构与句意整合。force sb to do sth（迫使某人做某事），空格处需要填入动词原形，结合物价上涨背景选 increase（提高）。",
            family: "increase (v.增加) | increasingly (adv.越来越多地) | advertise (v.做广告) | update (v.更新)。",
            details: "原材料价格激增迫使厂商“提高”零售价。increasingly 是副词，不能跟在 to 后面充当不定式中的主干动词。",
            cn: "原材料价格的突然激增将不可避免地迫使制造商提高零售价格。",
            jp: "原材料価格の急激な高騰（surge）により、製造業者は小売価格を引き上げ（increase）ざるを得なく（inevitably）なるでしょう。"
        }
    },
    {
        id: 15,
        target: "opening",
        category: "困难",
        stem: "Attendees gathered early at the convention center to witness the grand ________ of the international trade expo.",
        options: ["opening", "openings", "article", "equipment"],
        correct: "opening",
        explanations: {
            guide: "专有名词级固定搭配。the grand opening 是商务英语中极其高频的固定短语，意为“盛大开幕/盛大开业”。",
            family: "opening (n.开幕/开业) | openings (n.空缺复数) | article (n.文章) | equipment (n.设备)。",
            details: "虽然 opening 也有“职位空缺”之意，但在修饰语 grand（盛大的）后面，特指展会或店铺的开幕式。由于是特指这一场开幕，所以不用复数 openings。",
            cn: "与会者聚集在会议中心，共同见证国际贸易博览会的盛大开幕。",
            jp: "参加者（Attendees）は国際貿易博览会（expo）の盛大な開幕（opening）に立ち会う（witness）ため、会場（convention center）に早くから集まりました。"
        }
    },
    {
        id: 16,
        target: "ship",
        category: "困难",
        stem: "In accordance with the distribution agreement, the manufacturer is obligated to ________ the merchandise within forty-eight hours.",
        options: ["ship", "shipment", "repair", "expect"],
        correct: "ship",
        explanations: {
            guide: "高级被动结构后的动词原形。be obligated to 意为“有义务做某事”，to 后面必须使用及物动词原形，后接商品，选 ship（发货/运送）。",
            family: "ship (v.运送) | shipment (n.运输的货物) | repair (v.修理) | expect (v.期待)。",
            details: "ship the merchandise 意为“运送货物/发货”。shipment 为名词形式，不能直接与 to 构成不定式去修饰或带出宾语货物。",
            cn: "根据分销协议，制造商有义务在四十八小时内将货物发出。",
            jp: "配送契約に基づき、製造業者は48時間以内に商品（merchandise）を発送（ship）する義務（obligated）があります。"
        }
    },
    {
        id: 17,
        target: "expect",
        category: "困难",
        stem: "Internal guidelines dictate that supervisors should ________ all staff members to submit their expense reports promptly.",
        options: ["expect", "expectation", "update", "recently"],
        correct: "expect",
        explanations: {
            guide: "情态动词搭配与宾语补足语结构。should 后面需要动词原形，且该动词能够与后文的 sb to do sth（要求某人做某事）形成呼应，应选 expect。",
            family: "expect (v.要求/期望) | expectation (n.期待) | update (v.更新) | recently (adv.最近)。",
            details: "expect sb to do sth 在商务职场中常用于表达“主管要求/期望下属做某事”。expectation 是名词，不具备此句法功能。",
            cn: "内部指南规定，主管应要求所有员工及时提交其费用报告。",
            jp: "社内ガイドライン（guidelines）では、管理職はすべてのスタッフが経費報告書を迅速に（promptly）提出することを求める（expect）べきだと規定（dictate）しています。"
        }
    },
    {
        id: 18,
        target: "recently",
        category: "困难",
        stem: "The newly appointed chief executive officer, who ________ negotiated a lucrative partnership, will address the press today.",
        options: ["recently", "recent", "advertise", "shipment"],
        correct: "recently",
        explanations: {
            guide: "定语从句中的时间副词用法。在 who 引导的定语从句中，修饰过去式动词 negotiated，需要副词形式，应选 recently。",
            family: "recently (adv.最近) | recent (adj.最近的) | advertise (v.做广告) | shipment (n.运输货物)。",
            details: "who recently negotiated...（他最近成功谈判了……）。recent 是形容词，不能用来修饰动词过去式 negotiated。",
            cn: "新上任的首席执行官最近谈成了一项获利丰厚的合作，他将于今天向媒体发表讲话。",
            jp: "新しく任命された（appointed）最高経営責任者は、最近（recently）利益の上がる（lucrative）提携（partnership）を交渉し、今日記者会見を行う予定です。"
        }
    }
];