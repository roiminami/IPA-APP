// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag111-120.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "describe",
        pos: "動",
        ipa: "/dɪˈskraɪb/",
        cn: "描述，描绘，叙述",
        jp: "描写する、説明する",
        family: "description / descriptive / described / describable",
        tips: "托业阅读与听力高频动词。常用于要求对产品损坏情况、事故过程或项目需求进行详细描述。常考名词形式 description（如 job description 岗位职责）。",
        desc: "Please describe the problem."
    },
    {
        word: "inform",
        pos: "動",
        ipa: "/ɪnˈfɔːrm/",
        cn: "通知，告知",
        jp: "通知する、知らせる",
        family: "information / informative / informed / informant",
        tips: "商务书信与通知场景的核心动词。常见用法为 inform sb of/about sth（通知某人某事）或 inform sb that...。其名词形式 information（信息）是绝对必考的不可数名词。",
        desc: "We will inform you soon."
    },
    {
        word: "volunteer",
        pos: "名/動",
        ipa: "/ˌvɑːlənˈtɪr/",
        cn: "志愿者；自愿，志愿",
        jp: "ボランティア；ボランティアとして申し出る",
        family: "voluntary / voluntarily / volunteered / volunteering",
        tips: "常出现在社区活动、慈善筹款或公司公益活动的上下文中。作动词时常搭配 volunteer to do sth（自愿做某事）。其形容词形式 voluntary 意为自愿的。",
        desc: "He works as a volunteer."
    },
    {
        word: "executive",
        pos: "名/形",
        ipa: "/ɪɡˈzekjətɪv/",
        cn: "管理层，高管；执行的，行政的",
        jp: "重役、幹部、エグゼクティブ；執行权を持つ、管理职の",
        family: "executives / execute / execution / executive-level",
        tips: "商务行政与高层任命场景高频词。常指公司高管（corporate executive 或 chief executive officer）。形容词形式常修饰 positions 或 duties 表示高管职位或职责。",
        desc: "The executive signed the contract."
    },
    {
        word: "transportation",
        pos: "名",
        ipa: "/ˌtrænspɔːrˈteɪʃn/",
        cn: "运输，交通，运输工具",
        jp: "输送、交通机关、输送手段",
        family: "transport / transportable / transporting",
        tips: "物流与差旅报销场景的绝对核心词。常考搭配包括 public transportation（公共交通）和 transportation costs/expenses（交通费用），不可数名词。",
        desc: "Public transportation is very convenient."
    },
    {
        word: "branch",
        pos: "名",
        ipa: "/bræntʃ/",
        cn: "分部，分行，分支机构",
        jp: "支店、支社、部门",
        family: "branches / branched / branching",
        tips: "企业架构与银行业务场景的高频名词。常考搭配如 regional branch（区域分部）、local branch（当地分行）或 open a new branch（开设新分店）。",
        desc: "They opened a new branch."
    },
    {
        word: "refund",
        pos: "名/動",
        ipa: "/ˈriːfʌnd/",
        cn: "退款；退还，赔偿",
        jp: "返金、払い戻し；返金する",
        family: "refundable / non-refundable / refunded / refunding",
        tips: "客户服务与财务报销场景的核心考点。作名词时常与 full 连用（full refund 全额退款）。作形容词时 non-refundable（不可退款的）在酒店或机票退改签规则中极常见。",
        desc: "You can request a full refund."
    },
    {
        word: "successful",
        pos: "形",
        ipa: "/səkˈsesfl/",
        cn: "成功的，顺利的",
        jp: "成功した、うまくいった",
        family: "success / succeed / successfully / succession",
        tips: "商务评估与招聘场景的高频形容词。常与 candidate 连用表示“最终录用者”（successful candidate），或指某项业务、谈判非常成功（successful negotiation）。",
        desc: "The launch was very successful."
    },
    {
        word: "merchandise",
        pos: "名/動",
        ipa: "/ˈmɜːrtʃəndaɪz/",
        cn: "商品，货物；买卖，推销",
        jp: "商品、制品；売买する",
        family: "merchant / merchandiser / merchandising / merchandised",
        tips: "零售与仓储物流场景的核心名词，属于不可数名词。常指商店中出售的商品，不可在前加不定冠词 a 或直接变复数。常见搭配如 damaged merchandise（受损货物）。",
        desc: "The store displays new merchandise."
    },
    {
        word: "remind",
        pos: "動",
        ipa: "/rɪˈmaɪnd/",
        cn: "提醒，使想起",
        jp: "思い出させる、気付かせる",
        family: "reminder / reminded / reminding / reminiscent",
        tips: "日常办公与客户通知的高频及物动词。最经典的句型结构是 remind sb to do sth（提醒某人做某事）或 remind sb of sth（使某人想起某事）。其名词 reminder（催单/提醒信）也经常单独考查。",
        desc: "Please remind me tomorrow."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "describe",
        category: "简单",
        stem: "The user manual does not clearly ________ how to assemble the office chair safely.",
        options: ["describe", "refund", "remind", "volunteer"],
        correct: "describe",
        explanations: {
            guide: "动词原形辨析。空格前有助动词 does not 和副词 clearly，后面是 how 引导的宾语从句，需填入具有“描述/说明”含义的动词原形。",
            family: "describe (v.描述) | refund (v./n.退款) | remind (v.提醒) | volunteer (v./n.自愿/志愿者)。",
            details: "在用户手册（user manual）的语境下，其功能是向用户“描述/说明（describe）”如何组装办公椅。其他选项在语义上无法同后续的 how 从句合理搭配。",
            cn: "用户手册没有清晰地描述如何安全地组装这张办公椅。",
            jp: "取扱説明書には、オフィスチェアを安全に組み立てる方法が明確に説明（describe）されていません。"
        }
    },
    {
        id: 2,
        target: "inform",
        category: "简单",
        stem: "The human resources department will ________ all employees about the upcoming office relocation next Monday.",
        options: ["inform", "successful", "merchandise", "branch"],
        correct: "inform",
        explanations: {
            guide: "及物动词与固定搭配辨析。will 后面接动词原形，后接宾语所有员工（all employees）和介词短语 about...，构成标准通知结构。",
            family: "inform (v.通知) | successful (adj.成功的) | merchandise (n.商品) | branch (n.分部)。",
            details: "人事部（human resources department）针对办公室搬迁（office relocation）发出通知，最符合的动词是 inform，构成 inform sb about sth（通知某人某事）的经典搭配。",
            cn: "人力资源部将在下周一通知所有员工关于即将进行的办公室搬迁事宜。",
            jp: "人事部は来週の月曜日、すべての従業員にオフィスの移転（relocation）について通知（inform）する予定です。"
        }
    },
    {
        id: 3,
        target: "volunteer",
        category: "简单",
        stem: "Several staff members chose to ________ for the annual community cleanup event last weekend.",
        options: ["volunteer", "executive", "describe", "transportation"],
        correct: "volunteer",
        explanations: {
            guide: "动词不定式及语境辨析。chose to 后接动词原形，根据后方的介词短语 for the annual community cleanup event（年度社区清洁活动），应选择具有自愿参与含义的动词。",
            family: "volunteer (v.自愿) | executive (n.高管) | describe (v.描述) | transportation (n.运输)。",
            details: "员工们选择自愿为社区公益活动服务，动词选用 volunteer。volunteer for sth 意为“自愿参加某活动”。其他选项词性或语意不符。",
            cn: "上周末，几名员工选择自愿参加一年一度的社区清洁活动。",
            jp: "先週末、数名のスタッフが年次の地域清掃イベントにボランティアとして参加（volunteer）することを選びました。"
        }
    },
    {
        id: 4,
        target: "branch",
        category: "简单",
        stem: "Customers can conveniently deposit checks at any ________ of our bank across the country.",
        options: ["branch", "successful", "remind", "merchandise"],
        correct: "branch",
        explanations: {
            guide: "限定词及特定场景名词辨析。any 后面需要填入单数可数名词，根据 bank（银行）这一强提示语境，选择对应机构词汇。",
            family: "branch (n.分行/分部) | successful (adj.成功的) | remind (v.提醒) | merchandise (n.商品)。",
            details: "能够办理“存支票（deposit checks）”业务的银行网点，在商务英语中被称为“分行/支行（branch）”。",
            cn: "客户可以方便地在我们全国各地的任何一家银行分行存入支票。",
            jp: "お客様は、全国にある当行のどの支店（branch）でも、便利に小切手を預け入れることができます。"
        }
    },
    {
        id: 5,
        target: "refund",
        category: "简单",
        stem: "If the purchased item is defective, you are entitled to a full ________ within thirty days.",
        options: ["refund", "executive", "describe", "volunteer"],
        correct: "refund",
        explanations: {
            guide: "限定词及客服场景名词辨析。空格前有不定冠词 a 和形容词 full（全额的）修饰，此处缺少名词作宾语，选 refund。",
            family: "refund (n.退款) | executive (n.高管) | describe (v.描述) | volunteer (n.志愿者)。",
            details: "当前置条件是购买的商品有缺陷（defective）时，客户通常有权获得“全额退款（full refund）”，这是商业条款中的高频表达。",
            cn: "如果购买的商品有缺陷，您有权在三十天内获得全额退款。",
            jp: "購入した商品に欠陥がある場合、30日以内であれば全額返金（refund）を受ける権利があります。"
        }
    },
    {
        id: 6,
        target: "successful",
        category: "简单",
        stem: "The marketing team celebrated a ________ product launch after months of intensive preparation.",
        options: ["successful", "inform", "transportation", "remind"],
        correct: "successful",
        explanations: {
            guide: "名词前的定语形容词辨析。空格用于修饰名词短语 product launch（产品发布），且前面有冠词 a，需要填入形容词。",
            family: "successful (adj.成功的) | inform (v.通知) | transportation (n.交通) | remind (v.提醒)。",
            details: "经过数月的密集准备，营销团队庆祝的必然是一个“成功的（successful）”产品发布会。其他选项词性不符。",
            cn: "经过数月的密集准备，营销团队庆祝了一场成功的产品发布会。",
            jp: "数ヶ月にわたる集中的な準備を経て、マーケティングチームは成功（successful）した新商品発表会を祝いました。"
        }
    },
    {
        id: 7,
        target: "executive",
        category: "中等",
        stem: "The chief ________ officer delivered a powerful keynote speech at the annual business convention.",
        options: ["executive", "transportation", "successful", "refund"],
        correct: "executive",
        explanations: {
            guide: "复合名词职位辨析。chief ________ officer 构成了企业最高行政职位（CEO）的完整专有名词，因此空格处需填入 executive。",
            family: "executive (n.高管/行政官) | transportation (n.运输) | successful (adj.成功的) | refund (n.退款)。",
            details: "delivered a keynote speech（发表主题演讲）的行为主体通常是企业高管，Chief Executive Officer（首席执行官）是商务公文中最常见的缩写全称。",
            cn: "首席执行官在年度商业大会上发表了极其有力的主题演讲。",
            jp: "最高経営（executive）責任者は、年次のビジネス大会で力強い基調講演を行いました。"
        }
    },
    {
        id: 8,
        target: "transportation",
        category: "中等",
        stem: "The tech company offers an extra subsidy to cover public ________ expenses for all downtown employees.",
        options: ["transportation", "describe", "inform", "volunteer"],
        correct: "transportation",
        explanations: {
            guide: "复合名词修饰语判定。空格与前方的 public（公共的）和后方的 expenses（费用）搭配，需要填入核心名词构成专有名词词组。",
            family: "transportation (n.运输/交通) | describe (v.描述) | inform (v.通知) | volunteer (n.志愿者)。",
            details: "cover public transportation expenses 意为“报销公共交通费用”。subsidy（补贴）和 expense（费用）提示此处为财务差旅和福利场景，填 transportation 最地道。",
            cn: "这家科技公司提供额外补贴，以支付所有市中心员工的公共交通费用。",
            jp: "そのテック企業は、ダウンタウンに勤務するすべての従業員の公共交通（transportation）費をカバーするために追加の補助金を支給しています。"
        }
    },
    {
        id: 9,
        target: "merchandise",
        category: "中等",
        stem: "Warehouse supervisors must thoroughly inspect all incoming ________ to ensure that no items were damaged.",
        options: ["merchandise", "remind", "branch", "successful"],
        correct: "merchandise",
        explanations: {
            guide: "及物动词宾语及行业场景辨析。空格作为 inspect（检查）的宾语，前有 incoming（进货的）修饰，后接 damage（损坏）相关的逻辑。",
            family: "merchandise (n.商品/货物) | remind (v.提醒) | branch (n.分部) | successful (adj.成功的)。",
            details: "仓库主管（Warehouse supervisors）检查的实体是运抵的“商品/货物（merchandise）”，以防在运输中受损。注意 merchandise 是不可数名词，符合 all 修饰且不加 -s 的特征。",
            cn: "仓库主管必须彻底检查所有进货商品，以确保没有物品损坏。",
            jp: "倉庫の監督者は、品物が破損していないことを確認するために、入荷したすべての商品（merchandise）を徹底的に検査しなければなりません。"
        }
    },
    {
        id: 10,
        target: "remind",
        category: "中等",
        stem: "Automated billing notifications are sent weekly to ________ clients to pay their outstanding balances.",
        options: ["remind", "inform", "describe", "volunteer"],
        correct: "remind",
        explanations: {
            guide: "不定式动词结构与固定短语辨析。分析句型结构 to ________ clients to pay...，需要一个能接 sb to do sth 的及物动词。",
            family: "remind (v.提醒) | inform (v.通知) | describe (v.描述) | volunteer (v.自愿)。",
            details: "remind sb to do sth 是固定的语法机制，意为“提醒某人做某事”。干扰项 inform 的常见用法为 inform sb of sth 或 inform sb that...，其后不接动词不定式作宾补。",
            cn: "自动化账单通知每周发送一次，以提醒客户支付其余额欠款。",
            jp: "未払いの残高を支払うよう顧客に再確認（remind）させるため、自動請求通知が毎週送信されます。"
        }
    },
    {
        id: 11,
        target: "successful",
        category: "中等",
        stem: "The selection committee will announce the ________ candidate for the regional manager position tomorrow.",
        options: ["successful", "executive", "merchandise", "branch"],
        correct: "successful",
        explanations: {
            guide: "特定职场词组与修饰语辨析。空格用于修饰 candidate（候选人），前有定冠词 the，判定需要填入一个形容词或起修饰作用的词。",
            family: "successful (adj.成功的) | executive (n./adj.高管) | merchandise (n.商品) | branch (n.分部)。",
            details: "在招聘流程中，the successful candidate 是商业英语的固定惯用语，专指“最终录用者 / 成功竞聘者”。",
            cn: "选拔委员会将于明天宣布区域经理职位的最终录用候选人。",
            jp: "選考委員会は明日、地域マネージャー職の最終合格者（successful candidate）を発表する予定です。"
        }
    },
    {
        id: 12,
        target: "inform",
        category: "中等",
        stem: "Please be ________ that the structural renovation of the main lobby will begin tonight.",
        options: ["informed", "reminded", "described", "volunteered"],
        correct: "informed",
        explanations: {
            guide: "祈使句被动语态及公文常套句辨析。Please be + 过去分词 + that 从句，属于商务通告中极为固定的开篇句式。",
            family: "informed (v.过去分词/通知) | reminded (v.过去分词/提醒) | described (v.过去分词/描述) | volunteered (v.过去分词/自愿)。",
            details: "Please be informed that... 意为“请知悉/特此通知……”，是托业阅读中极为高频的商务公文和电子邮件标准开头。尽管 be reminded that 语法也通，但在直接陈述新事实时，informed 最地道。",
            cn: "请知悉，大厅主楼的正体结构翻修工作将于今晚开始。",
            jp: "メインロビーの構造改修工事が今夜から始まることをお知らせ（informed）いたします（ご承知おきください）。"
        }
    },
    {
        id: 13,
        target: "describe",
        category: "困难",
        stem: "The contract signed yesterday provides a comprehensive ________ of the services to be performed.",
        options: ["description", "describe", "descriptive", "describably"],
        correct: "description",
        explanations: {
            guide: "词性判定与名词中心语判定。空格前有不定冠词 a 和形容词 comprehensive（全面的），空格后接 of 引导的介词短语，此处必须填入名词。",
            family: "description (n.描述) | describe (v.描述) | descriptive (adj.描述性的) | describably (adv.可描述地)。",
            details: "a comprehensive description of sth 意为对某事的“全面描述/详细说明”，在合同公文中专指服务项目范围说明书。其他词性均无法作此处的名词中心语。",
            cn: "昨天签署的合同对将要履行的服务提供了全面的描述。",
            jp: "昨日署名された契約書には、実施される予定のサービスに関する包括的な説明（description）が記載されています。"
        }
    },
    {
        id: 14,
        target: "inform",
        category: "困难",
        stem: "The professional development workshop on trade regulations was highly ________ for the team.",
        options: ["informative", "information", "inform", "informatively"],
        correct: "informative",
        explanations: {
            guide: "主系表结构中的表语形容词判定。系动词 was 和程度副词 highly 之后，需要填入形容词来充当主语 workshop（研讨会）的表语。",
            family: "informative (adj.信息量大的/有益的) | information (n.信息) | inform (v.通知) | informatively (adv.见闻广博地)。",
            details: "形容词 informative 常用来修饰书籍、演讲或培训研讨会，表示“内容充实、能提供丰富知识/信息的”。此处符合评价研讨会很有收获的语境。",
            cn: "关于贸易法规的专业发展研讨会内容非常充实，对团队大有裨益。",
            jp: "貿易規制に関する専門能力開発ワークショップは非常に有益（informative）であり、チームにとって学びの多いものでした。"
        }
    },
    {
        id: 15,
        target: "volunteer",
        category: "困难",
        stem: "Participation in the employee community wellness program is entirely ________ for all staff members.",
        options: ["voluntary", "volunteer", "voluntarily", "volunteering"],
        correct: "voluntary",
        explanations: {
            guide: "系动词后的表语形容词判定。空格位于系动词 is 和副词 entirely（完全地）后面，需要填入一个形容词构成主系表结构，修饰主语 Participation（参与）。",
            family: "voluntary (adj.自愿的) | volunteer (n./v.志愿者) | voluntarily (adv.自愿地) | volunteering (n.志愿活动)。",
            details: "句意在探讨员工福利项目的“参与性质”。voluntary 意为“自愿的/非强制的”，常与 entirely 连用，是企业规章通告里的典型措辞。",
            cn: "所有员工参与员工社区健康计划完全是自愿的。",
            jp: "従業員の地域ウェルネスプログラムへの参加は、全スタッフを対象に完全に自由（voluntary / 自発的）となっています。"
        }
    },
    {
        id: 16,
        target: "executive",
        category: "困难",
        stem: "Several senior ________ from the prestigious tech firm attended the private arbitration meeting in Chicago.",
        options: ["executives", "executive", "execute", "execution"],
        correct: "executives",
        explanations: {
            guide: "限定词及可数名词复数判定。空格前有数量形容词 Several（几个）和形容词 senior（资深的）修饰，此处必须填入可数名词的复数形式作主语。",
            family: "executives (n.复数高管) | executive (n.单数高管/adj.行政的) | execute (v.执行) | execution (n.执行)。",
            details: "根据 Several 的修饰机制，排除单数名词 executive 和动词 execute。句意指几位资深高管出席了在芝加哥举行的闭门仲裁会议（arbitration meeting），故选复数 executives。",
            cn: "来自这家知名科技公司的几位高级管理人员出席了在芝加哥举行的私人仲裁会议。",
            jp: "その名門テック企業の上級幹部（executives）数名が、シカゴで開催された非公開の仲裁会議に出席しました。"
        }
    },
    {
        id: 17,
        target: "successful",
        category: "困难",
        stem: "Despite severe technical difficulties, the structural engineering team ________ converted the outdated grid system.",
        options: ["successfully", "success", "successful", "succeed"],
        correct: "successfully",
        explanations: {
            guide: "谓语动词前的修饰语判定。空格位于主语 the structural engineering team 和谓语动词 converted 之间，属于标准的副词修饰动词语法线索。",
            family: "successfully (adv.成功地) | success (n.成功) | successful (adj.成功的) | succeed (v.成功)。",
            details: "此处需要用副词修饰过去式动词 converted。successfully converted 意为“成功地转换/改造了”。其他词性如名词 success 或形容词 successful 均无法在此处修饰动词。",
            cn: "尽管存在严重的技术困难，结构工程团队还是成功地改造了陈旧的电网系统。",
            jp: "深刻な技術的困難にもかかわらず、構造エンジニアリングチームは旧式のグリッドシステムを正常に（successfully）転換することに成功しました。"
        }
    },
    {
        id: 18,
        target: "refund",
        category: "困难",
        stem: "Please note that the registration fee for the upcoming charity golf tournament is strictly non-________.",
        options: ["refundable", "refund", "refunded", "refunding"],
        correct: "refundable",
        explanations: {
            guide: "前缀复合形容词表语判定。空格与连字符后的 non- 组合，紧跟在系动词 is 和副词 strictly 之后，构成完整的复合形容词短语作为表语。",
            family: "refundable (adj.可退款的) | refund (n./v.退款) | refunded (v.已退款) | refunding (v.正在退款)。",
            details: "商务英语及政策通告中，“不可退款的”标准拼写与固定术语是 non-refundable。此处用于修饰 registration fee（报名费）。",
            cn: "请注意，即将举行的慈善高尔夫球赛的报名费是严格不可退还的。",
            jp: "今後のチャリティゴルフ大会の登録料は、厳格に払い戻し不可（non-refundable）となりますのでご注意ください。"
        }
    }
];