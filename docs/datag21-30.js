// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag1-10.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "repair",
        pos: "動/名",
        ipa: "/rɪˈper/",
        cn: "修理，维修",
        jp: "修理する；修理、修繕",
        family: "repairable / reparation / repairperson",
        tips: "常考动词与名词同形用法。在商务场景中常考名词短语：under repair（正在维修中）、repair costs（维修费用），或者复合名词 repairperson（维修人员）。",
        desc: "We need to repair the copier."
    },
    {
        word: "article",
        pos: "名",
        ipa: "/ˈɑːrtɪkl/",
        cn: "文章，报道；商品，条款",
        jp: "記事、論文；品物、アイテム、条項",
        family: "articles",
        tips: "托业阅读最高频含义是“报刊文章、新闻报道”。而在商务合同或物流场景中，它也可以指代法律的“条款”或货物的“一件商品/物品”。",
        desc: "I read an interesting article."
    },
    {
        word: "update",
        pos: "動/名",
        ipa: "/ˌʌpˈdeɪt/",
        cn: "更新，升级；最新信息",
        jp: "更新する、アップデートする；最新情報",
        family: "updated / updater",
        tips: "IT 与行政管理高频词。作动词常用于 update the software（更新软件）；作名词常考 provide an update on the project（提供项目的最新进展）。",
        desc: "Please update your password now."
    },
    {
        word: "advertise",
        pos: "動",
        ipa: "/ˈædvərtaɪz/",
        cn: "为……做广告，宣传",
        jp: "広告を出す、宣伝する",
        family: "advertisement / advertising / advertiser",
        tips: "动词形式，注意其衍生名词的高阶混淆：advertisement 是指可数的“一则广告”，而 advertising 是指不可数的“广告业/广告宣传活动”。",
        desc: "They advertise their products online."
    },
    {
        word: "equipment",
        pos: "名",
        ipa: "/ɪˈkwɪpmənt/",
        cn: "设备，器材",
        jp: "機器、設備、備品",
        family: "equip / equipped",
        tips: "绝对不可数名词！在托业中绝对不能加 -s，也不能与不定冠词 an 连用。常考复合名词：office equipment（办公设备）、laboratory equipment（实验室设备）。",
        desc: "The office bought new equipment."
    },
    {
        word: "increase",
        pos: "動/名",
        ipa: "/ɪnˈkriːs/",
        cn: "增加，增长",
        jp: "増加する、増やす；増加、上昇",
        family: "increased / increasingly / incremental",
        tips: "作动词时常与副词搭配（e.g., increase significantly 显著增长）。作名词时，后面常接介词 in 表明在哪个方面的增长（an increase in sales）。",
        desc: "Sales increase every year."
    },
    {
        word: "opening",
        pos: "名/形",
        ipa: "/ˈoʊpnɪŋ/",
        cn: "空缺，职缺；开张，开始的",
        jp: "欠員、仕事の空き；開店、オープニング、開始の",
        family: "open / openly / opener",
        tips: "职场招聘场景最高频词汇之一，常考 job opening（职位空缺），完美等同于 vacancy。也可指庆典活动：grand opening（盛大开业）。",
        desc: "There is a job opening here."
    },
    {
        word: "ship",
        pos: "動/名",
        ipa: "/ʃɪp/",
        cn: "运送，船运；船只",
        jp: "出荷する、輸送する；船",
        family: "shipment / shipping / shipper",
        tips: "托业最爱考动词用法，不局限于用船运，任何陆运、空运的商品发货均可使用 ship。常考复合名词：shipping department（运输部）。",
        desc: "We will ship the order today."
    },
    {
        word: "expect",
        pos: "動",
        ipa: "/ɪkˈspekt/",
        cn: "期待，预期，预料",
        jp: "予期する、期待する、〜する見込みである",
        family: "expectation / expected / unexpected",
        tips: "核心主宾结构：be expected to do sth（预计将做某事）。其名词复数形式 expectations 常考 exceed expectations（超出预期）。",
        desc: "We expect a large crowd."
    },
    {
        word: "recently",
        pos: "副",
        ipa: "/ˈriːsntli/",
        cn: "最近，近来",
        jp: "最近、近頃",
        family: "recent",
        tips: "时态题强标志词。在托业 Part 5 中，recently 出现时，句子谓语动词几乎必然锁定为“现在完成时”或“一般过去时”，用以描述刚发生不久的事。",
        desc: "He recently joined the firm."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "equipment",
        category: "简单",
        stem: "The maintenance crew brought new electrical ________ to fix the laboratory power grid.",
        options: ["equipment", "expect", "recently", "article"],
        correct: "equipment",
        explanations: {
            guide: "形容词后的名词中心语考点。电气形容词 electrical 后面需要搭配名词，结合整个句子的修复语境，选 equipment（设备）。",
            family: "equipment (n.设备) | expect (v.期待) | recently (adv.最近) | article (n.文章)。",
            details: "laboratory equipment 属于高频商务/技术场景搭配。equipment 是不可数名词，此处由 electrical 修饰，完美作 brought 的宾语。",
            cn: "维修人员带来了新的电气设备来修复实验室的电网。",
            jp: "メンテナンス員は、研究室の電力網を修理するために新しい電気機器（equipment）を持ってきました。"
        }
    },
    {
        id: 2,
        target: "repair",
        category: "简单",
        stem: "The technician will ________ the broken photocopying machine as soon as possible.",
        options: ["repair", "update", "advertise", "ship"],
        correct: "repair",
        exmutations: {
            guide: "情态动词后的动词原形辨析。will 后面需要接动词原形，结合后面的宾语 broken photocopying machine（损坏的复印机），选择 repair（修理）。",
            family: "repair (v.修理) | update (v.更新) | advertise (v.做广告) | ship (v.运送)。",
            details: "根据语境中的 broken（坏的）可直接锁定具有修复含义的及物动词 repair。其他动词逻辑上不通顺。",
            cn: "技术人员将尽快修理那台损坏的复印机。",
            jp: "技術者は、壊れたコピー機をできるだけ早く修理（repair）する予定です。"
        }
    },
    {
        id: 3,
        target: "recently",
        category: "简单",
        stem: "Mr. Gomez ________ joined our marketing team as a senior graphic designer.",
        options: ["recently", "recent", "opening", "increase"],
        correct: "recently",
        explanations: {
            guide: "副词修饰谓语动词。空格位于主语 Mr. Gomez 和过去式动词 joined 之间，需要一个副词来修饰动词，表示“最近”加入了团队，选 recently。",
            family: "recently (adv.最近) | recent (adj.最近的) | opening (n.空缺) | increase (v./n.增加)。",
            details: "一般过去时 joined 与时间副词 recently 是托业中最核心的语法搭配。recent 是形容词，不能在此位置直接修饰动词。",
            cn: "戈麦斯先生最近加入了我们的营销团队，担任资深美工设计师。",
            jp: "ゴメス氏は最近（recently）、シニアグラフィックデザイナーとして当社のマーケティングチームに加わりました。"
        }
    },
    {
        id: 4,
        target: "increase",
        category: "简单",
        stem: "Management hopes to ________ the monthly sales targets by ten percent next quarter.",
        options: ["increase", "equipment", "article", "recently"],
        correct: "increase",
        explanations: {
            guide: "动词不定式结构。hopes to 后面需要接动词原形作为核心谓语，后接宾语 targets，表达“增加”销售目标，选 increase。",
            family: "increase (v./n.增加) | equipment (n.设备) | article (n.文章) | recently (adv.最近)。",
            details: "to 为不定式符号，后面必须接动词原形。在四个选项中，只有 increase 具有动词词性并能完美搭配后面的百分比变化。",
            cn: "管理层希望在下个季度将每月销售目标提高百分之十。",
            jp: "経営陣は、来四半期の月間売上目標を10％引き上げる（increase）ことを望んでいます。"
        }
    },
    {
        id: 5,
        target: "advertise",
        category: "简单",
        stem: "The local business decided to ________ its new organic products on social media platforms.",
        options: ["advertise", "advertisement", "equipment", "opening"],
        correct: "advertise",
        explanations: {
            guide: "动词不定式结构辨析。decided to 后面需要接一个动词原形，表达该企业决定在社交媒体上“做广告宣传”其产品，选 advertise。",
            family: "advertise (v.做广告) | advertisement (n.广告) | equipment (n.设备) | opening (n.空缺)。",
            details: "decide to do sth 是固定句型。选项中虽然 advertisement 与宣传有关，但它是名词，无法接在不定式符号 to 后面。",
            cn: "这家当地企业决定在社交媒体平台上为其新型有机产品做广告。",
            jp: "地元の企業は、ソーシャルメディアプラットフォームで新しい有機製品を宣伝する（advertise）ことに決めました。"
        }
    },
    {
        id: 6,
        target: "article",
        category: "简单",
        stem: "The journalist wrote an interesting ________ about the rapid growth of local startups.",
        options: ["article", "update", "ship", "expect"],
        correct: "article",
        explanations: {
            guide: "名词宾语辨析。由不定冠词 an 和形容词 interesting 修饰，空格处需要填入一个单数可数名词，指代记者撰写的“文章”，选 article。",
            family: "article (n.文章) | update (v./n.更新) | ship (v./n.运送) | expect (v.期待)。",
            details: "journalist（记者）与 write（写）这两个职业及动作场景词，直接呼应了核心宾语 article（文章/报道）。",
            cn: "这位记者写了一篇关于当地初创企业快速增长的有趣文章。",
            jp: "そのジャーナリストは、地元の新興企業の急成長に関する興味深い記事（article）を書きました。"
        }
    },
    {
        id: 7,
        target: "opening",
        category: "中等",
        stem: "Because of a sudden resignation, there is currently a job ________ in the accounting department.",
        options: ["opening", "openly", "equipment", "repair"],
        correct: "opening",
        explanations: {
            guide: "复合名词与职场专属语境。job 与后面的名词组合构成固定短语，表示“职位空缺”，选 opening。",
            family: "opening (n.空缺) | openly (adv.公开地) | equipment (n.设备) | repair (v./n.修理)。",
            details: "job opening 是托业招聘场景的绝对高频词。sudden resignation（突然辞职）导致了岗位出现空缺，逻辑完全吻合。",
            cn: "由于有人突然辞职，目前财务部有一个职位空缺。",
            jp: "突然の退職により、現在経理部門に仕事の空き（opening）があります。"
        }
    },
    {
        id: 8,
        target: "ship",
        category: "中等",
        stem: "The warehouse will ________ the ordered items directly to the client's address tomorrow morning.",
        options: ["ship", "shipment", "expect", "article"],
        correct: "ship",
        explanations: {
            guide: "情态动词后的动词辨析。will 后面必须接动词原形，根据主语 warehouse（仓库）和宾语 items（物品），选表示“运送/发货”的动词 ship。",
            family: "ship (v.运送) | shipment (n.运输的货物) | expect (v.期待) | article (n.文章)。",
            details: "ship items to an address 属于典型物流表达。shipment 是名词（货物），无法跟在助动词 will 后面担当谓语。",
            cn: "仓库将于明天早上将订购的物品直接寄送到客户的地址。",
            jp: "倉庫は明日午前、注文された品物をクライアントの住所に直接発送（ship）します。"
        }
    },
    {
        id: 9,
        target: "expect",
        category: "中等",
        stem: "Weather analysts ________ a severe storm to hit the coastal region sometime this weekend.",
        options: ["expect", "expectation", "recently", "advertise"],
        correct: "expect",
        explanations: {
            guide: "动词谓语及句型搭配。主语是复数名词 analysts，空格处缺少核心谓语动词，且后面跟了 sb/sth to do 结构，选用 expect。",
            family: "expect (v.期待/预料) | expectation (n.期待) | recently (adv.最近) | advertise (v.做广告)。",
            details: "expect sth to do sth 是非常经典的客观预测表达。expectation 是名词，置于此处会导致句子缺少动作核心。",
            cn: "天气分析师预计，本周末某个时候将有一场严重的暴风雨袭击沿海地区。",
            jp: "気象アナリストは、今週末のいつか激しい嵐が沿岸地域を襲うと予想（expect）しています。"
        }
    },
    {
        id: 10,
        target: "update",
        category: "中等",
        stem: "Please read the attached document to review the latest ________ regarding our corporate travel policy.",
        options: ["update", "updated", "increase", "opening"],
        correct: "update",
        explanations: {
            guide: "定冠词与形容词后的名词成分。the latest 后面需要接名词，指代最新的“信息/修改版”，选名词 update。",
            family: "update (n./v.更新) | updated (adj.更新的) | increase (v./n.增加) | opening (n.空缺)。",
            details: "the latest update 属于职场通知中的固定搭配，指“最新动态”。updated 是过去分词/形容词，不能直接放在 latest 后面独立作名词中心词。",
            cn: "请阅读随附的文件，以审查有关我们公司差旅政策的最新更新信息。",
            jp: "出張ポリシーに関する最新情報（update）を確認するため、添付の書類をお読みください。"
        }
    },
    {
        id: 11,
        target: "recently",
        category: "中等",
        stem: "According to a ________ survey, a majority of local consumers prefer shopping online rather than in stores.",
        options: ["recent", "recently", "equipment", "advertise"],
        correct: "recent",
        explanations: {
            guide: "名词前的形容词修饰用法。空格在不定冠词 a 之后、名词 survey 之前，需要填入形容词形式，表示“最近的”调查，选 recent。",
            family: "recent (adj.最近的) | recently (adv.最近) | equipment (n.设备) | advertise (v.做广告)。",
            details: "a recent survey（一项最近的调查）在托业阅读中极为常见。recently 是副词，只能修饰动词、形容词或全句，不能直接修饰名词 survey。",
            cn: "根据最近的一项调查，大多数当地消费者更喜欢在线购物，而不是在实体店购物。",
            jp: "最近の（recent）調査によると、地元の消費者の大半は店舗よりもオンラインでの買い物を好んでいます。"
        }
    },
    {
        id: 12,
        target: "increase",
        category: "中等",
        stem: "Due to the rise in raw material costs, we have seen a steady ________ in production expenses.",
        options: ["increase", "increasingly", "ship", "update"],
        correct: "increase",
        explanations: {
            guide: "形容词后的名词中心语。不定冠词 a 和形容词 steady（稳步的）后面需要接名词，表达开支呈现稳步的“增长”，选 increase。",
            family: "increase (n./v.增加) | increasingly (adv.渐增地) | ship (v./n.运送) | update (v./n.更新)。",
            details: "a steady increase in sth（在某方面的持续稳步增长）是职场财务汇报的必备高频结构。increasingly 为副词，绝不能充当名词中心语。",
            cn: "由于原材料成本上升，我们的生产费用呈现出稳步增长的态势。",
            jp: "原材料費の高騰により、製造コストが着実に増加（increase）しています。"
        }
    },
    {
        id: 13,
        target: "ship",
        category: "困难",
        stem: "Customers can track their orders online once the standard ________ has been processed by the logistics team.",
        options: ["shipment", "shipping", "ship", "expect"],
        correct: "shipment",
        explanations: {
            guide: "名词作主语及特定语境辨析。空格在定冠词 the 与形容词 standard 后面，充当 once 引导的从句主语，根据 has been processed 选可数名词单数 shipment。",
            family: "shipment (n.运送的货物) | shipping (n.运输/总称) | ship (v.运送) | expect (v.期待)。",
            details: "shipment 指具体“被运送的这批货物/单子”。当该货物被物流团队处理后，客户才可以追踪它。shipping 虽也是名词，但多指抽象的运输业或运输行为，与单数谓语 has 配合指代具体订单时不如 shipment 贴切。",
            cn: "一旦物流团队处理了标准货件，客户就可以在网上跟踪他们的订单。",
            jp: "物流チームによって標準発送（shipment）が処理されると、お客様はオンラインで注文を追跡できます。"
        }
    },
    {
        id: 14,
        target: "advertise",
        category: "困难",
        stem: "The company allocated a large portion of its annual budget to digital ________ campaigns.",
        options: ["advertising", "advertise", "advertisement", "article"],
        correct: "advertising",
        explanations: {
            guide: "复合名词修饰及不可数名词高阶辨析。此处需要填入名词与后面的 campaigns（活动）结合构成复合概念，指代“广告宣传活动”，选不可数动名词形式 advertising。",
            family: "advertising (n.广告宣传/不可数) | advertise (v.做广告) | advertisement (n.广告/可数) | article (n.文章)。",
            details: "advertising campaigns 是行业专属商业词汇。advertisement 如果用来修饰 campaigns 或作为整体，一般不用其单数形式不加冠词地直接摆在 digital 后面，而 advertising 作名词修饰语最符合商务表达惯例。",
            cn: "该公司将其年度预算的很大一部分分配给了数字广告宣传活动。",
            jp: "同社は年間予算の大部分をデジタル広告（advertising）キャンペーンに割り当てました。"
        }
    },
    {
        id: 15,
        target: "expect",
        category: "困难",
        stem: "The profit margins for the second quarter significantly exceeded the initial ________ of financial experts.",
        options: ["expectations", "expected", "expect", "unexpected"],
        correct: "expectations",
        explanations: {
            guide: "高频商务短语与名词复数应用。空格前有形容词 initial 修饰，处在宾语核心位置，配合 exceed 构成固定高阶搭配 exceed expectations（超出预期），选名词复数 expectations。",
            family: "expectations (n.预期/复数) | expected (adj.预期的) | expect (v.期待) | unexpected (adj.意料之外的)。",
            details: "exceeded the initial expectations 意为“超出了最初的预期”。expected 是形容词，不能在形容词 initial 后面直接担当名词性宾语中心词。",
            cn: "第二季度的利润率明显超出了财务专家最初的预期。",
            jp: "第2四半期の利益率は、金融専門家の当初の予測（expectations）を大幅に上回りました。"
        }
    },
    {
        id: 16,
        target: "opening",
        category: "困难",
        stem: "The grand ________ of the new retail branch in downtown Tokyo is scheduled for next Friday morning.",
        options: ["opening", "openly", "update", "equipment"],
        correct: "opening",
        explanations: {
            guide: "商业庆典固定复合名词。The grand ________ 结构专指商铺或分店的“盛大开业/开张”，固定使用动名词转化的名词 opening。",
            family: "opening (n.开业/空缺) | openly (adv.公开地) | update (n./v.更新) | equipment (n.设备)。",
            details: "grand opening 是托业 Part 7 和 Part 5 常见的商业告示用语。openly 是副词，不能被 grand 修饰充当主语。",
            cn: "位于东京市中心的新零售分店的盛大开业典礼定于下周五早上举行。",
            jp: "東京の繁華街にある新しい小売支店のグランドオープン（opening）は、来週金曜日の朝に予定されています。"
        }
    },
    {
        id: 17,
        target: "increase",
        category: "困难",
        stem: "With the market becoming ________ competitive, local businesses must find unique ways to attract clients.",
        options: ["increasingly", "increase", "increased", "recently"],
        correct: "increasingly",
        explanations: {
            guide: "副词修饰形容词高阶考点。空格位于系动词 becoming 之后，形容词 competitive（竞争激烈的）之前，需要副词来修饰该形容词，表示“日益/逐渐”，选 increasingly。",
            family: "increasingly (adv.渐增地) | increase (v./n.增加) | increased (adj.增加的) | recently (adv.最近)。",
            details: "increasingly competitive 属于经典的“副词 + 形容词”结构，用以修饰核心属性。increase 或 increased 无法直接修饰另一个形容词 competitive。",
            cn: "随着市场竞争变得日益激烈，当地企业必须寻找独特的方法来吸引客户。",
            jp: "市場の競争がますます（increasingly）激しくなる中、地元の企業は顧客を惹きつけるための独自の方法を見つけなければなりません。"
        }
    },
    {
        id: 18,
        target: "equipment",
        category: "困难",
        stem: "The newly ________ laboratory is now fully capable of conducting advanced biological research.",
        options: ["equipped", "equipment", "repair", "updated"],
        correct: "equipped",
        explanations: {
            guide: "过去分词作形容词的被动修饰结构。空格前有副词 newly（新近地），后有名词 laboratory（实验室），此处需要填入一个过去分词充当形容词，表达“装备齐全的”，选 equipped。",
            family: "equipped (adj./v-ed装备好的) | equipment (n.设备) | repair (v./n.修理) | updated (adj.更新的)。",
            details: "be newly equipped 意为“新配备了设备的”。此处的 equipped 与 laboratory 组合成“新装配好的实验室”概念，且能完美与后面的功能描述呼应。equipment 是名词，无法被副词 newly 修饰。",
            cn: "这间新配备了设备的实验室现在完全有能力进行高级生物学研究。",
            jp: "新しく設備が整った（equipped）研究室は、現在、高度な生物学的研究を行う能力を完全に備えています。"
        }
    }
];