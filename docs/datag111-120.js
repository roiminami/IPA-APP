// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag51-60.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "resident",
        pos: "名/形",
        ipa: "/ˈrezɪdənt/",
        cn: "居民，住户；居住的",
        jp: "住民、居住者；居住している",
        family: "residence / residential / residency / reside",
        tips: "听力及阅读部分高频词。常指特定社区或公寓的居民。复合名词常考 local resident（当地居民）或 permanent resident（永久居民）。形容词形式 residential 常修饰 area 或 complex 表示住宅区。",
        desc: "The local resident called today."
    },
    {
        word: "candidate",
        pos: "名",
        ipa: "/ˈkændɪdət/",
        cn: "候选人，求职者，应试者",
        jp: "候補者、志望者、受験者",
        family: "candidacy / candidates",
        tips: "人力资源招聘场景的核心高频词。通常指申请职位的 job candidate 或参加考试的 exam candidate。常与 successful 连用表示“最终录用者”（successful candidate）。",
        desc: "The candidate passed the interview."
    },
    {
        word: "organize",
        pos: "動",
        ipa: "/ˈɔːrɡənaɪz/",
        cn: "组织，安排，筹办，整理",
        jp: "組織する、計画する、整理する",
        family: "organization / organizational / organizer / organized",
        tips: "行政与活动筹备场景的核心动词。常用于筹办会议、展览或活动（如 organize a conference / event），也可指整理文件或数据（organize files）。其名词 organization 意为组织或机构。",
        desc: "We need to organize a meeting."
    },
    {
        word: "laboratory",
        pos: "名",
        ipa: "/ˈlæbrətɔːri/",
        cn: "实验室，研究室",
        jp: "実験室、研究所",
        family: "laboratories / lab",
        tips: "常简写为 lab。多出现在制药、科技研发或安全检查的上下文中。高频搭配包括 research laboratory（研究实验室）及 laboratory equipment（实验室设备）。",
        desc: "The laboratory is very clean."
    },
    {
        word: "release",
        pos: "動/名",
        ipa: "/rɪˈliːs/",
        cn: "发布，发行，公开；发布物",
        jp: "発売する、公開する；発表、リリース",
        family: "released / releasing / releasable",
        tips: "市场营销与公关的核心词汇。作动词时常指发布新产品、新软件或公布调查报告。作名词时，press release（新闻稿/公报）是托业阅读中极为经典的复合名词考点。",
        desc: "They will release the product soon."
    },
    {
        word: "conduct",
        pos: "動/名",
        ipa: "/kənˈdʌkt/",
        cn: "实施，进行，引导；行为，管理",
        jp: "実施する、行う；行為、管理",
        family: "conductor / conduction / conducting / conducted",
        tips: "商业调查与学术研究场景的绝对核心动词。最常见且必考的固定搭配包括 conduct a survey（进行问卷调查）、conduct research（开展研究）以及 conduct an interview（进行面试）。",
        desc: "We will conduct a survey."
    },
    {
        word: "participate",
        pos: "動",
        ipa: "/pɑːrˈtɪsɪpeɪt/",
        cn: "参加，参与",
        jp: "参加する",
        family: "participation / participant / participatory",
        tips: "活动与研讨会场景的高频不及物动词。必须与介词 in 搭配使用，即 participate in sth（参加某事），与 take part in 同义。其名词形式 participant（参与者）也属于高频考点。",
        desc: "Please participate in the event."
    },
    {
        word: "corporate",
        pos: "形",
        ipa: "/ˈkɔːrpərət/",
        cn: "公司的，法人的，共同的",
        jp: "会社の、企業の、法人の",
        family: "corporation / corporately",
        tips: "商务行政场景核心形容词。常用于修饰企业层面的各种事物，如 corporate culture（企业文化）、corporate headquarters（集团总部）及 corporate policy（公司政策）。",
        desc: "This is our corporate policy."
    },
    {
        word: "feedback",
        pos: "名",
        ipa: "/ˈfiːdbæk/",
        cn: "反馈，意见",
        jp: "フィードバック、意見、感想",
        family: "feed / feedbacker",
        tips: "职场沟通与客户服务场景的核心名词，属于不可数名词。常考搭配有 provide feedback（提供反馈）以及 customer feedback（客户反馈）。注意其前面不能直接加不定冠词 an。",
        desc: "We value your feedback."
    },
    {
        word: "committee",
        pos: "名",
        ipa: "/kəˈmɪti/",
        cn: "委员会",
        jp: "委員会",
        family: "committees",
        tips: "企业决策与行政管理场景的高频集合名词。常见结构如 organizing committee（组委会）或 steering committee（指导委员会）。作主语时，若强调整体谓语用单数，强调成员则用复数。",
        desc: "The committee approved the plan."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "resident",
        category: "简单",
        stem: "The apartment building manager asked every ________ to park only in their designated spaces.",
        options: ["resident", "candidate", "laboratory", "feedback"],
        correct: "resident",
        explanations: {
            guide: "限定词及上下文语境辨析。空格前有 every 修饰，后接单数可数名词作宾语。根据前文的 apartment building manager（公寓大楼经理），选择 resident 最符合语境。",
            family: "resident (n.居民/住户) | candidate (n.候选人) | laboratory (n.实验室) | feedback (n.反馈)。",
            details: "在公寓管理（apartment management）的场景下，经理提出要求的对象必然是“住户/居民（resident）”。其他选项在语义上完全不匹配。",
            cn: "公寓大楼经理要求每位住户只能将车停在指定的车位上。",
            jp: "マンションの管理人は、すべての居住者（resident）に指定されたスペースにのみ駐車するよう求めました。"
        }
    },
    {
        id: 2,
        target: "candidate",
        category: "简单",
        stem: "The hiring manager is looking for a qualified ________ to fill the vacant position in the accounting department.",
        options: ["candidate", "corporate", "committee", "release"],
        correct: "candidate",
        explanations: {
            guide: "修饰语与特定职场场景辨析。空格前有不定冠词 a 和形容词 qualified（合格的），提示此处需要填入一个单数可数名词，选 candidate。",
            family: "candidate (n.候选人) | corporate (adj.公司的) | committee (n.委员会) | release (v./n.发布)。",
            details: "hiring manager（招聘经理）和 vacant position（空缺职位）是典型的人事招聘场景词汇，与其搭配最完美的只能是“候选人/求职者（candidate）”。",
            cn: "招聘经理正在寻找一名合格的候选人，以填补财务部的空缺职位。",
            jp: "採用マネージャーは、経理部門の空席を埋めるための適格な候補者（candidate）を探しています。"
        }
    },
    {
        id: 3,
        target: "organize",
        category: "简单",
        stem: "Mr. Kim will ________ the annual charity golf tournament for the regional branch next month.",
        options: ["organize", "participate", "conduct", "release"],
        correct: "organize",
        explanations: {
            guide: "情态动词后的动词原形辨析。will 后面需要接动词原形，结合宾语 the annual charity golf tournament（年度慈善高尔夫球赛），应选择具有筹办含义的动词 organize。",
            family: "organize (v.组织/筹办) | participate (v.参加，常接in) | conduct (v.实施/进行) | release (v.发布)。",
            details: "organize a tournament 是体育或商务活动筹备中的常见搭配，意为筹办比赛。participate 是不及物动词，不能直接加宾语；conduct 通常搭配 survey 或 research。",
            cn: "金先生下个月将为区域分部组织一年一度的慈善高尔夫球赛。",
            jp: "金さんは来月、地域支部のために年次のチャリティゴルフ大会を企画（organize）する予定です。"
        }
    },
    {
        id: 4,
        target: "laboratory",
        category: "简单",
        stem: "All technicians must wear protective glasses before entering the chemical ________.",
        options: ["laboratory", "committee", "resident", "feedback"],
        correct: "laboratory",
        explanations: {
            guide: "名词词组及特定办公地点辨析。空格前有形容词 chemical（化学的）修饰，此处需要填入一个地点名词，选 laboratory。",
            family: "laboratory (n.实验室) | committee (n.委员会) | resident (n.居民) | feedback (n.反馈)。",
            details: "根据前文的 technicians（技术员）和 protective glasses（防护眼镜）这一典型的科研/工业生产背景，chemical laboratory（化学实验室）是唯一合理的复合名词搭配。",
            cn: "所有技术人员在进入化学实验室之前必须佩戴防护眼镜。",
            jp: "すべての技術者は、化学実験室（laboratory）に入る前に保護メガネを着用しなければなりません。"
        }
    },
    {
        id: 5,
        target: "release",
        category: "简单",
        stem: "The public relations team plans to ________ the press statement regarding the merger tomorrow morning.",
        options: ["release", "conduct", "organize", "participate"],
        correct: "release",
        explanations: {
            guide: "动词不定式结构与动宾搭配。plans to 后面缺少动词原形作谓语，其后宾语为 the press statement（新闻声明），选 release。",
            family: "release (v.发布) | conduct (v.进行) | organize (v.组织) | participate (v.参加)。",
            details: "public relations team（公关团队）和 press statement（新闻声明）构成了极强的语境指示，商务英语中“发布声明/新闻稿”的标准动词就是 release。",
            cn: "公关团队计划于明天上午发布关于合并案的新闻声明。",
            jp: "広報チームは明日の朝、合併に関するプレス声明を発表（release）する計画です。"
        }
    },
    {
        id: 6,
        target: "conduct",
        category: "简单",
        stem: "The market research firm will ________ a detailed survey to understand customer preferences.",
        options: ["conduct", "organize", "release", "participate"],
        correct: "conduct",
        explanations: {
            guide: "助动词后的核心动词及固定搭配。will 后面接动词原形，后面的核心宾语是 a detailed survey（一份详细的调查问卷），选 conduct。",
            family: "conduct (v.实施/开展) | organize (v.组织) | release (v.发布) | participate (v.参加)。",
            details: "conduct a survey 是托业考试中复现率极高的经典商务固定搭配，意为进行调查。虽然 organize 也能跟活动，但与 survey 搭配时，conduct 在语意上最地道、最精准。",
            cn: "市场研究公司将进行一项详细的调查，以了解客户的偏好。",
            jp: "市場調査会社は、顧客の嗜好を理解するために詳細な調査を実施（conduct）する予定です。"
        }
    },
    {
        id: 7,
        target: "participate",
        category: "中等",
        stem: "Employees who wish to ________ in the professional development seminar must register by Friday.",
        options: ["participate", "conduct", "organize", "release"],
        correct: "participate",
        explanations: {
            guide: "定语从句谓语动词及介词搭配。空格后紧跟介词 in，这是选择不及物动词的重要语法线索，选 participate。",
            family: "participate (v.参与，不及物) | conduct (v.实施，及物) | organize (v.组织，及物) | release (v.发布，及物)。",
            details: "participate in sth 是固定的短语机制，表示参加某活动。其他三个选项均为及物动词，后面必须直接接名词宾语，不能直接加介词 in，故排除。",
            cn: "希望参加专业发展研讨会的员工必须在周五之前报名。",
            jp: "専門能力開発セミナーに参加（participate）することを希望する従業員は、金曜日までに登録する必要があります。"
        }
    },
    {
        id: 8,
        target: "corporate",
        category: "中等",
        stem: "The newly revised ________ policy strictly prohibits the use of personal smartphones during work hours.",
        options: ["corporate", "resident", "candidate", "thorough"],
        correct: "corporate",
        explanations: {
            guide: "名词前的定语形容词辨析。空格用于修饰单数名词 policy（政策），且由定冠词 the 限定，需要填入形容词或起修饰作用的名词，选 corporate。",
            family: "corporate (adj.公司的) | resident (n.居民) | candidate (n.候选人) | thorough (adj.彻底的/详尽的)。",
            details: "corporate policy 意为“公司政策/企业规范”，属于极高频的职场公文短语。thorough（彻底的）虽然是形容词，但在此处与 policy 搭配不符合规范性条例的语境。",
            cn: "新修订的公司政策严格禁止在工作时间内使用个人智能手机。",
            jp: "新しく改定された社内（corporate）規定により、勤務時間中の個人用スマートフォンの使用は厳格に禁止されています。"
        }
    },
    {
        id: 9,
        target: "feedback",
        category: "中等",
        stem: "We highly value client ________ because it helps us improve the quality of our consulting services.",
        options: ["feedback", "laboratory", "committee", "subsidy"],
        correct: "feedback",
        explanations: {
            guide: "动宾结构及行业场景语义辨析。空格作为及物动词 value（珍视/重视）的宾语，且前面有 client（客户）修饰，选名词 feedback。",
            family: "feedback (n.反馈) | laboratory (n.实验室) | committee (n.委员会) | subsidy (n.补贴/津贴)。",
            details: "根据原因状语从句“因为这能帮助我们提高咨询服务的质量”，可以推断出公司珍视的是客户的“意见/反馈（feedback）”。subsidy 为干扰词，意思不符。",
            cn: "我们高度重视客户的反馈，因为这有助于我们提高咨询服务的质量。",
            jp: "クライアントからのフィードバック（feedback）は、当社のコンサルティングサービスの質を向上させるのに役立つため、私たちは非常に重視しています。"
        }
    },
    {
        id: 10,
        target: "committee",
        category: "中等",
        stem: "The planning ________ will meet at noon to discuss the budget for the upcoming expansion project.",
        options: ["committee", "candidate", "resident", "corporate"],
        correct: "committee",
        explanations: {
            guide: "复合名词主体及职场行为主体辨析。空格前有形容词/现在分词 planning（规划）修饰，且能发出 meet（开会）这一动作，应填入指代人或组织的集合名词，选 committee。",
            family: "committee (n.委员会) | candidate (n.候选人) | resident (n.居民) | corporate (adj.公司的)。",
            details: "planning committee 意为“规划委员会”，是一个常见的企业或官方常设组织，能够执行 discuss the budget（讨论预算）的任务。candidate 和 resident 通常为个人，不与 planning 组合成此类委员会名词。",
            cn: "规划委员会将于中午举行会议，讨论即将到来的扩建项目的预算。",
            jp: "計画委員会（committee）は正午に集まり、今後の拡張プロジェクトの予算について話し合う予定です。"
        }
    },
    {
        id: 11,
        target: "candidate",
        category: "中等",
        stem: "After reviewing dozens of resumes, the committee selected the most promising ________ for the final round of interviews.",
        options: ["candidate", "resident", "corporate", "feedback"],
        correct: "candidate",
        explanations: {
            guide: "句意逻辑与职场流程语境辨析。空格前有最高级 the most promising（最有前途的）修饰，作为 selected 的宾语，结合 resumes（简历）和 interviews（面试），选 candidate。",
            family: "candidate (n.候选人) | resident (n.居民) | corporate (adj.公司的) | feedback (n.反馈)。",
            details: "“查看简历（resumes）”和“最终轮面试（final round of interviews）”是典型的选拔流程，被筛选的实体只能是求职“候选人（candidate）”。",
            cn: "在审查了数十份简历后，委员会挑选出了最有希望的候选人进入最终轮面试。",
            jp: "何十枚もの履歴書を検討した後、委員会は最終面接に向けて最も有望な候補者（candidate）を選出しました。"
        }
    },
    {
        id: 12,
        target: "resident",
        category: "中等",
        stem: "The city council invited every local ________ to voice their opinions on the proposed public park project.",
        options: ["resident", "committee", "laboratory", "feedback"],
        correct: "resident",
        explanations: {
            guide: "限定词修饰语与社会公共场景辨析。invited every local 提示此处需要一个表示人称的单数可数名词作宾语，选 resident。",
            family: "resident (n.居民) | committee (n.委员会) | laboratory (n.实验室) | feedback (n.反馈)。",
            details: "city council（市议会）针对 public park project（公共公园项目）征求意见的对象，逻辑上是当地的“居民/市民（local resident）”。committee 虽也是组织，但不符合 every local 的修饰语机制。",
            cn: "市议会邀请每一位当地居民就拟建的公共公园项目发表意见。",
            jp: "市議会は、提案されている公開公園プロジェクトについて意見を述べるよう、すべての地域住民（resident）に呼びかけました。"
        }
    },
    {
        id: 13,
        target: "organize",
        category: "困难",
        stem: "Under the new management, the structural ________ of the sales division will be completely redesigned.",
        options: ["organization", "organize", "organizer", "organized"],
        correct: "organization",
        explanations: {
            guide: "定冠词和形容词后的名词中心语判定。空格前有定冠词 the 和形容词 structural（结构的），此处必须填入名词来充当主语中心语，选 organization。",
            family: "organization (n.组织/架构) | organize (v.组织) | organizer (n.组织者) | organized (adj.有组织的)。",
            details: "structural organization 意为“结构组织/组织架构”。sales division（销售部）的架构要被重新设计（redesigned），符合企业重组的商业语境。organizer 指具体的人，在此不符合被重新设计的逻辑。",
            cn: "在新管理层的领导下，销售部的组织架构将进行彻底的重新设计。",
            jp: "新しい経営陣のもとで、販売部門の組織（organization）構造は完全に再設計される予定です。"
        }
    },
    {
        id: 14,
        target: "conduct",
        category: "困难",
        stem: "The comprehensive evaluation of the factory equipment was ________ by an independent safety agency.",
        options: ["conducted", "conduct", "conducting", "conductor"],
        correct: "conducted",
        explanations: {
            guide: "被动语态结构识别。空格位于助动词 was 之后，介词短语 by... 之前，构成完整的被动语态（was + 过去分词），选 conducted。",
            family: "conducted (v.过去分词/实施) | conduct (v.动词原形) | conducting (v.现在分词) | conductor (n.向导/导体)。",
            details: "evaluation（评估）与动词 conduct 之间是被动关系，即“评估被实施/被执行”。was conducted by... 意为“由……实施”，符合高级精细办公场景的语法规范。",
            cn: "对工厂设备的全面评估是由一个独立的科研安全机构实施的。",
            jp: "工場設備の包括的な評価は、独立した安全機関によって実施（conducted）されました。"
        }
    },
    {
        id: 15,
        target: "participate",
        category: "困难",
        stem: "Active ________ in the team-building activities is highly recommended for all corporate executives.",
        options: ["participation", "participate", "participant", "participated"],
        correct: "participation",
        explanations: {
            guide: "句首主语成分的名词识别。空格位于形容词 Active（积极的）之后，介词短语 in the... 之前，需要填入名词来充当整个句子的核心主语，选不可数名词 participation。",
            family: "participation (n.参与/参加) | participate (v.参加) | participant (n.参与者，可数) | participated (v.过去式)。",
            details: "Active participation 意为“积极参与”，是商务公文及通告中的常见核心概念。虽然 participant 也是名词，但它是可数名词，若用在此处表示“积极的参与者”，前面通常需要加定冠词或改为复数形式，且与句意不符。",
            cn: "强烈建议所有公司高管积极参与团队建设活动。",
            jp: "すべての企業幹部にとって、チームビルディング活動への積極的な参加（participation）が強く推奨されています。"
        }
    },
    {
        id: 16,
        target: "candidate",
        category: "困难",
        stem: "Mr. Reynolds announced his ________ for the position of regional director during the board meeting.",
        options: ["candidacy", "candidate", "candidates", "vetted"],
        correct: "candidacy",
        explanations: {
            guide: "物主代词后的抽象名词辨析。空格位于形容词性物主代词 his 之后，作为 announced 的宾语。根据后文的 for the position of...（竞选……职位），选表示身份或资格的抽象名词 candidacy。",
            family: "candidacy (n.候选人资格/竞选) | candidate (n.候选人个人) | candidates (n.候选人复数) | vetted (adj.经过审查的)。",
            details: "announce one's candidacy for... 是高阶商务政治及高管任命场景的固定搭配，意为“宣布竞选/宣布成为……的候选人”。announced his candidate 在语法和逻辑上都是错误的。",
            cn: "雷诺兹先生在董事会会议上宣布他将竞选区域总监一职。",
            jp: "レイノルド氏 funnel は取締役会で、地域ディレクターの職への立候補（candidacy）を表明しました。"
        }
    },
    {
        id: 17,
        target: "resident",
        category: "困难",
        stem: "The real estate developer purchased a large plot of land to build a modern ________ complex downtown.",
        options: ["residential", "residence", "resident", "resided"],
        correct: "residential",
        explanations: {
            guide: "名词前的定语形容词考查。空格位于不定冠词 a 和形容词 modern 之后，名词 complex（综合建筑群）之前，需要填入形容词作定语，选 residential。",
            family: "residential (adj.住宅的/居住的) | residence (n.住宅) | resident (n.居民) | resided (v.居住)。",
            details: "residential complex 是房地产和城市规划场景中非常地道的专有名词，意为“住宅小区/住宅综合体”。其他名词或动词形式无法直接在此处修饰 complex 构成复合语义。",
            cn: "该房地产开发商在市中心购买了一大块土地，准备建造一个现代化的住宅区。",
            jp: "その不動産開発業者は、ダウンタウンに近代的な住宅（residential）コンプレックスを建設するために広大な土地を購入しました。"
        }
    },
    {
        id: 18,
        target: "corporate",
        category: "困难",
        stem: "The tech startup has grown rapidly and is now recognized as a leading global ________.",
        options: ["corporation", "corporate", "corporately", "subsidiary"],
        correct: "corporation",
        explanations: {
            guide: "冠词及修饰语后的表语名词判定。空格前有不定冠词 a 以及形容词短语 leading global（领先的全球性），空格处必须填入名词单数形式来作为句子的表语成分，选 corporation。",
            family: "corporation (n.大企业/法人公司) | corporate (adj.公司的) | corporately (adv.法人组织地) | subsidiary (n.子公司/次要的)。",
            details: "主语是 tech startup（科技初创企业），经过快速发展后，它成为了一个全球性的“大型集团公司/企业（corporation）”。corporate 是形容词，词性不符；subsidiary 虽然也是名词，但不符合从初创到巨头的递进逻辑。",
            cn: "这家科技初创公司发展迅速，如今已被公认为是一家领先的全球性大企业。",
            jp: "そのテック大手のスタートアップ企業は急速に成長し、今や世界的なリーディングカンパニー（corporation）として認められています。"
        }
    }
];