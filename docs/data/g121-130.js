// ============================================================================
// [DATABASE] SOUTHERN GHOST TOEIC CORE DATA BUNDLE (datag61-70.js Expansion)
// ============================================================================

// 1. 核心考点词表 (Core Target Vocabulary)
const vocabBank = [
    {
        word: "advance",
        pos: "動/名/形",
        ipa: "/ədˈvæns/",
        cn: "提前，预付；进展，进步；高级的，先进的",
        jp: "前進する、前払いする；進歩、前払い；進歩した、上級の",
        family: "advancement / advanced / advancing",
        tips: "商务场景最常考固定短语 in advance（提前）。作形容词 advanced 时指高阶的或先进的（如 advanced technology）。作名词也指资金的预付款（cash advance）。",
        desc: "Please pay the deposit in advance."
    },
    {
        word: "encourage",
        pos: "動",
        ipa: "/ɪnˈkɜːrɪdʒ/",
        cn: "鼓励，促进，激励",
        jp: "奨励する、励ます、促進する",
        family: "encouragement / encouraging / encouragingly",
        tips: "职场管理高频动词。核心句型为 encourage sb to do sth（鼓励某人做某事）。在宏观商务阅读中，也常用于表达某种经济政策“促进”了行业发展。",
        desc: "Managers encourage staff to talk."
    },
    {
        word: "approve",
        pos: "動",
        ipa: "/əˈpruːv/",
        cn: "批准，通过，赞成",
        jp: "承認する、可決する、賛成する",
        family: "approval / approved / approving",
        tips: "行政审批与财务预算场景的绝对核心动词。常见搭配有 approve a budget（批准预算）或 approve a request（批准申请）。其名词形式 approval 极常以 written approval（书面批准）出现。",
        desc: "The board will approve it."
    },
    {
        word: "expense",
        pos: "名",
        ipa: "/ɪkˈspens/",
        cn: "费用，开支，花费",
        jp: "費用、経费、出費",
        family: "expensive / expenses / expensively",
        tips: "财务报销场景必考词。复数形式 expenses 极常用于 travel expenses（差旅费）或 business expenses（业务开支）。高频短语 at the expense of 意为“以……为代价”。",
        desc: "Keep track of every expense."
    },
    {
        word: "renovation",
        pos: "名",
        ipa: "/ˌrenəˈveɪʃn/",
        cn: "翻新，整修，装潢",
        jp: "改修、リフォーム、刷新",
        family: "renovate / renovated / renovating",
        tips: "办公场所升级或店铺停业整顿语境的超级高频词。核心动词为 renovate。常考搭配包括 under renovation（在翻新中）或 extensive renovation（全面翻新）。",
        desc: "The hotel is under renovation."
    },
    {
        word: "excellent",
        pos: "形",
        ipa: "/ˈeksələnt/",
        cn: "优秀的，卓越的，极好的",
        jp: "優秀な、優れた、非常に良い",
        family: "excellence / excellently / excel",
        tips: "常出现在客户满意度反馈（customer feedback）或年度绩效评估（performance evaluation）中。名词形式 excellence 常用于表彰企业追求的 operational excellence（卓越运营）。",
        desc: "He did an excellent job."
    },
    {
        word: "fund",
        pos: "名/動",
        ipa: "/fʌnd/",
        cn: "资金，基金；资助，提供资金",
        jp: "資金、基金；資金を提供する",
        family: "funding / funded / fundraiser",
        tips: "财务与项目预算核心词。作名词指项目基金。作动词指为某项目拨款。其不可数名词形式 funding（提供资金/款项）在听力与阅读中作为正确答案的概率极高。",
        desc: "The city will fund the project."
    },
    {
        word: "operate",
        pos: "動",
        ipa: "/ˈɑːpəreɪt/",
        cn: "运营，操作，经营，运转",
        jp: "操作する、運営する、営業する",
        family: "operation / operational / operator",
        tips: "多见于工厂流水线或跨国分支机构经营语境。常考搭配有 operate heavy machinery（操作重型机械）或 operate smoothly（运转顺利）。形容词 operational 意为运营的、可操作的。",
        desc: "She knows how to operate it."
    },
    {
        word: "resume",
        pos: "動/名",
        ipa: "/rɪˈzuːm/ 或 /ˈrezʊmeɪ/",
        cn: "重新开始，恢复；简历",
        jp: "再開する；履歴書",
        family: "resumption / resumed / resumes",
        tips: "双重身份核心词。作动词时表示暂停后重新开始（如 resume normal operations 恢复正常运营）；作名词时指求职简历，常考搭配 submit a resume（提交简历）。",
        desc: "We will resume normal operations."
    },
    {
        word: "reschedule",
        pos: "動",
        ipa: "/ˌriːˈskedʒuːl/",
        cn: "改期，重新安排时间",
        jp: "スケジュールを変更する",
        family: "rescheduled / rescheduling",
        tips: "商务日常与日程变动高频动词。多用于因突发状况将会议、航班或委任改期。常见结构为 reschedule a meeting for next week（将会议改期至下周）。",
        desc: "Please reschedule the flight now."
    }
];

// 2. 核心真题库 (Questions Database)
const questionsDatabase = [
    {
        id: 1,
        target: "advance",
        category: "简单",
        stem: "To secure your seat for the upcoming leadership seminar, please register and pay the registration fee in ________.",
        options: ["advance", "expense", "renovation", "tournament"],
        correct: "advance",
        explanations: {
            guide: "介词固定搭配辨析。空格前有介词 in，结合前文的“为了确保席位需要提前注册缴费”，选择名词 advance 构成固定短语。",
            family: "advance (n.提前/进展) | expense (n.费用) | renovation (n.翻新) | tournament (n.锦标赛)。",
            details: "in advance 是托业考试中复现率极高的经典商务短语，意为“提前”。其他名词放于此处均无法与介词 in 组合成符合句意的固定表达。",
            cn: "为了确保您在即将举行的领导力研讨会上的席位，请提前注册并缴纳注册费。",
            jp: "今度のリーダーシップセミナーの座席を確保するため、事前に（advance）登録し、登録料をお支払いください。"
        }
    },
    {
        id: 2,
        target: "encourage",
        category: "简单",
        stem: "Senior executives always try to ________ team members to share their innovative ideas during weekly meetings.",
        options: ["encourage", "operate", "reschedule", "determine"],
        correct: "encourage",
        explanations: {
            guide: "动词核心句型辨析。空格后有名词短语作宾语，且紧跟动词不定式 to share，需要填入能够接双宾补结构的不定式核心动词，选 encourage。",
            family: "encourage (v.鼓励) | operate (v.操作) | reschedule (v.改期) | determine (v.决定)。",
            details: "encourage sb to do sth 是英语中极标准的句型，意为“鼓励某人做某事”。其他动词均不具备此语法机制或不符合主管激励员工的职场语境。",
            cn: "高级管理层总是试图鼓励团队成员在每周会议上分享他们的创新想法。",
            jp: "上級幹部は常に、週例会議でチームメンバーが革新的なアイデアを共有するよう励まして（encourage）います。"
        }
    },
    {
        id: 3,
        target: "approve",
        category: "简单",
        stem: "The board of directors is expected to ________ the proposed budget for the new marketing campaign tomorrow.",
        options: ["approve", "resume", "convert", "harbor"],
        correct: "approve",
        explanations: {
            guide: "动词不定式后的动宾搭配。空格前有 to，要求接动词原形，其后的核心宾语是 the proposed budget（拟议的预算），选 approve。",
            family: "approve (v.批准) | resume (v.恢复) | convert (v.转换) | harbor (v.庇护/怀有)。",
            details: "approve the budget 是企业行政和财务审批场景中绝对固定的高频搭配，意为“批准预算”。其他选项与预算组合在商业逻辑上不通顺。",
            cn: "董事会预计明天将批准新营销活动拟定的预算。",
            jp: "取締役会は明日、新しいマーケティングキャンペーンのために提案された予算を承認（approve）する見込みです。"
        }
    },
    {
        id: 4,
        target: "expense",
        category: "简单",
        stem: "Employees must submit a detailed receipt for every business ________ to receive a full reimbursement.",
        options: ["expense", "excellent", "essential", "chicago"],
        correct: "expense",
        explanations: {
            guide: "限定词后的名词中心语判定。空格前有限定词 every 和名词修饰语 business，此位置必须填入一个单数可数名词作介词 for 的宾语，选 expense。",
            family: "expense (n.开支) | excellent (adj.优秀的) | essential (adj.必不可少的) | chicago (n.芝加哥)。",
            details: "business expense 意为“业务开支/商业费用”，结合后文的 receipt（收据）和 reimbursement（报销），只有名词 expense 完全符合财务报销逻辑。",
            cn: "员工必须提交每笔业务开支的详细收据，才能获得全额报销。",
            jp: "従業員が全額払い戻しを受けるには、すべての経費（expense）の詳細な領収書を提出しなければなりません。"
        }
    },
    {
        id: 5,
        target: "renovation",
        category: "简单",
        stem: "The main branch downtown will be closed next weekend because the entire building is under ________.",
        options: ["renovation", "advance", "registration", "layover"],
        correct: "renovation",
        explanations: {
            guide: "介词后的名词及商务场景辨析。空格前有介词 under，结合前文指出的“市中心主分行下周末将关闭”这一因果关系，选择 renovation。",
            family: "renovation (n.翻新) | advance (n.提前) | registration (n.注册) | layover (n.中途停留)。",
            details: "under renovation 是表示大楼或设施“正在翻新整修中”的固定职场搭配。因为翻新所以闭店，因果逻辑完美闭环。",
            cn: "市中心的主分行下周末将关闭，因为整栋大楼正在翻新。",
            jp: "建物全体が改修（renovation）中のため、ダウンタウンの本店は来週末休业となります。"
        }
    },
    {
        id: 6,
        target: "excellent",
        category: "简单",
        stem: "Ms. Patel received a special award for her ________ performance in expanding our client network this year.",
        options: ["excellent", "operate", "vetted", "subsidy"],
        correct: "excellent",
        explanations: {
            guide: "形容词定语修饰语。空格位于物主代词 her 之后，名词 performance 之前，需要填入一个褒义形容词来修饰员工的工作表现，选 excellent。",
            family: "excellent (adj.优秀的) | operate (v.操作) | vetted (adj.经过审查的) | subsidy (n.补贴)。",
            details: "excellent performance 意为“优秀的表现/卓越的业绩”，是员工绩效表彰大会上的标准客套及公文用语。其他选项词性或语意均不符。",
            cn: "帕特尔女士因今年在拓展我们客户网络方面的优秀表现而获得了特别奖。",
            jp: "パテルさんは、今年の顧客ネットワーク拡大における優秀な（excellent）業績に対して特別賞を受赏しました。"
        }
    },
    {
        id: 7,
        target: "fund",
        category: "中等",
        stem: "The municipal council has officially agreed to ________ the new cultural festival to boost local tourism.",
        options: ["fund", "reschedule", "accommodate", "proceed"],
        correct: "fund",
        explanations: {
            guide: "动词语义与动宾结构。agreed to 后面需要接动词原形，其后的直接宾语是 the new cultural festival，结合后面的目的状语，选及物动词 fund。",
            family: "fund (v.资助/提供资金) | reschedule (v.改期) | accommodate (v.容纳/迎合) | proceed (v.前进/进行，不及物)。",
            details: "fund a festival/project 意为“资助一个节日/项目”，即提供财务支持以促进当地旅游业。proceed 是不及物动词，不能直接加宾语；reschedule 与节日不搭配。",
            cn: "市议会已正式同意资助这项新的文化节，以促进当地旅游业的发展。",
            jp: "市議会は、地元の観光業を活性化させるために、新しい文化フェスティバルに資金を提供（fund）することに正式に同意しました。"
        }
    },
    {
        id: 8,
        target: "operate",
        category: "中等",
        stem: "Only technicians who have completed the safety training are authorized to ________ this heavy machinery.",
        options: ["operate", "encourage", "dispute", "boasts"],
        correct: "operate",
        explanations: {
            guide: "特定职场身份与动宾搭配。are authorized to 后面接动词原形，后面的宾语是 heavy machinery（重型机械），选择最契合的动词 operate。",
            family: "operate (v.操作/运转) | encourage (v.鼓励) | dispute (v./n.争论) | boasts (v.以有……而自豪)。",
            details: "operate machinery 是工厂生产及工业安全场景中绝对核心的固定搭配，指“操作机械”。其他选项与机器组合均不符合职场常识。",
            cn: "只有完成了安全培训的技术人员才被授权操作这台重型机械。",
            jp: "安全研修を修了した技術者のみが、この重機械を操作（operate）することを許可されています。"
        }
    },
    {
        id: 9,
        target: "resume",
        category: "中等",
        stem: "After a short power outage, the production line is expected to ________ normal operations within an hour.",
        options: ["resume", "approve", "separate", "noted"],
        correct: "resume",
        explanations: {
            guide: "商务情境中的动词辨析。is expected to 后面需要接动词原形，结合前文的“在短暂的停电之后”，选择表示恢复的动词 resume。",
            family: "resume (v.恢复/重新开始) | approve (v.批准) | separate (v.分离/分开) | noted (adj.著名的)。",
            details: "resume normal operations 是工厂或企业在遭遇故障、罢工或节假日结束后，“恢复正常运营”的标准职场公文短语。语境衔接完美。",
            cn: "在短暂的停电之后，生产线预计将在一个小时内恢复正常运转。",
            jp: "短時間の停電の後、生産ラインは1時間以内に通常の操業を再開（resume）する見込みです。"
        }
    },
    {
        id: 10,
        target: "reschedule",
        category: "中等",
        stem: "Due to an unexpected conflict, the general manager had to ________ the client briefing for next Thursday.",
        options: ["reschedule", "advance", "prompt", "severe"],
        correct: "reschedule",
        explanations: {
            guide: "日程调整及介词结构辨析。had to 后面接动词原形，后有宾语 client briefing，且后面有介词短语 for next Thursday 提示时间改动，选 reschedule。",
            family: "reschedule (v.改期) | advance (v.提前) | prompt (v.促使/adj.迅速的) | severe (adj.严重的)。",
            details: "reschedule sth for + 时间，是把某事改期到某个时间的标准商务句型。虽然 advance 也能动词化表示提前，但一般不与 for 连用表示时间跨度改期。",
            cn: "由于意料之外的时间冲突，总经理不得不将客户简报会改期到下周四。",
            jp: "予期せぬスケジュールの競合のため、ゼネラルマネージャーはクライアントへの説明会を来週の木曜日に変更（reschedule）しなければなりませんでした。"
        }
    },
    {
        id: 11,
        target: "advance",
        category: "中等",
        stem: "The engineering team utilizes ________ software tools to monitor structural changes in the grid system.",
        options: ["advanced", "advance", "advancement", "advancing"],
        correct: "advanced",
        explanations: {
            guide: "分词形容词充当定语。空格位于及物动词 utilizes 之后，名词短语 software tools 之前，需要填入形容词来修饰软件工具的属性，选 advanced。",
            family: "advanced (adj.高级的/先进的) | advance (v./n.提前) | advancement (n.前进/提升) | advancing (adj.正在前进的)。",
            details: "advanced software tools 意为“先进的软件工具/高级软件工具”。在描述技术、设备或课程属于高端、高水平时，必须使用分词派生出的形容词 advanced。",
            cn: "工程团队利用先进的软件工具来监测电网系统中的结构变化。",
            jp: "エンジニアリングチームは、グリッドシステム内の構造変化を監視するために、高度な（advanced）ソフトウェアツールを利用しています。"
        }
    },
    {
        id: 12,
        target: "approve",
        category: "中等",
        stem: "The department manager cannot purchase new office appliances without obtaining prior written ________.",
        options: ["approval", "approve", "approved", "approving"],
        correct: "approval",
        explanations: {
            guide: "形容词后的名词中心语。空格前有介词短语 without obtaining（未获得），后接形容词 prior（事先的）和 written（书面的），空格处必须填入名词，选 approval。",
            family: "approval (n.批准/赞成) | approve (v.批准) | approved (adj.被批准的) | approving (adj.赞许的)。",
            details: "prior written approval 是高阶企业采购与合规流程中雷打不动的固定表达，意为“事先书面批准”。其他派生词词性在语法上皆不成立。",
            cn: "未获得事先书面批准，部门经理不得购买新的办公设备。",
            jp: "事前の書面による承認（approval）を得ることなしに、部門マネージャーが新しいオフィス家電を購入することはできません。"
        }
    },
    {
        id: 13,
        target: "expense",
        category: "困难",
        stem: "The chief financial officer requested an itemized breakdown of all travel ________ incurred during the European convention.",
        options: ["expenses", "expense", "expensive", "expensively"],
        correct: "expenses",
        explanations: {
            guide: "名词单复数及商业会计语境判定。空格位于形容词短语 all travel 之后，需要填入名词。根据 travel（差旅）的习惯用法和 all 的修饰，选复数形式 expenses。",
            family: "expenses (n.复数/各项开支) | expense (n.单数费用) | expensive (adj.昂贵的) | expensively (adv.昂贵地)。",
            details: "travel expenses 是商务英语中极其固定的综合名词，指“差旅费（包含交通、食宿等多项开支）”。由于后面有 incurred（所发生的）修饰，此处用复数形式最符合财会报销规范。",
            cn: "首席财务官要求提供在欧洲大会期间发生的所有差旅费用的明细细目。",
            jp: "最高財務責任者（CFO）は、欧州のコンベンション中に発生したすべての出張経費（expenses）の項目別内訳を要求しました。"
        }
    },
    {
        id: 14,
        target: "fund",
        category: "困难",
        stem: "Securing adequate ________ for the groundbreaking laboratory research remains a primary challenge for the committee.",
        options: ["funding", "fund", "funds", "fundraiser"],
        correct: "funding",
        explanations: {
            guide: "动名词短语内部的宾语中心语与不可数名词考查。Securing 后面需要接名词作宾语，前面的形容词 adequate（充足的）修饰该名词。结合长期拨款场景，选不可数名词 funding。",
            family: "funding (n.不可数/提供资金/资金数额) | fund (n.单数基金) | funds (n.复数资金) | fundraiser (n.资金筹集人/活动)。",
            details: "funding 作为不可数名词，特指为了某项研究或项目而“持续提供的资金/资助款项”。虽然 funds 也可以表示资金，但在托业考试中，表达“获得某项目研发的资金支持”时，adequate funding 是最高频的官配。",
            cn: "为这项具开拓性的实验室研究确保充足的资金，仍然是该委员会面临的首要挑战。",
            jp: "画期的な実験室研究のための十分な資金（funding）を確保することは、依然として委員会にとっての主な課題です。"
        }
    },
    {
        id: 15,
        target: "encourage",
        category: "困难",
        stem: "The recent surge in consumer demand provides strong ________ to the marketing team after months of market disruptions.",
        options: ["encouragement", "encourage", "encouraging", "encouragingly"],
        correct: "encouragement",
        explanations: {
            guide: "形容词后的抽象名词识别。provides 后面需要接名词作其直接宾语，空格前有形容词 strong（强烈的）修饰，应选名词形式 encouragement。",
            family: "encouragement (n.鼓励/鼓舞) | encourage (v.鼓励) | encouraging (adj.令人鼓舞的) | encouragingly (adv.令人鼓舞地)。",
            details: "provide encouragement to sb 意为“给某人带来鼓励/鼓舞”，在经历了数月的市场中断（market disruptions）之后，团队需要这种精神层面的正面反馈。其他词性在此位置属于语法错误。",
            cn: "在经历数月的市场动荡后，近期消费者需求的激增给营销团队带来了强有力的鼓舞。",
            jp: "数ヶ月にわたる市場の混乱の後、最近の消費者需要の急増はマーケティングチームに強力な励み（encouragement）を与えています。"
        }
    },
    {
        id: 16,
        target: "operate",
        category: "困难",
        stem: "The new satellite offices will become fully ________ once the digital security systems are securely encrypted.",
        options: ["operational", "operate", "operation", "operatively"],
        correct: "operational",
        explanations: {
            guide: "系动词后的形容词表语。空格位于系动词 become 和修饰副词 fully 之后，需要填入一个形容词来表示分支机构的状态变化，选 operational。",
            family: "operational (adj.运营的/可以开始运作的) | operate (v.操作) | operation (n.运营) | operatively (adv.运营地)。",
            details: "become fully operational 是高级商业报道中形容设施或办公室“完全投入运营/正式运转”的经典高阶表达。其他选项词性均不适用于此处的表语位置。",
            cn: "一旦数字安全系统加密安全，新的卫星办公室将完全投入运营。",
            jp: "デジタルセキュリティシステムが暗号化されれば、新しいサテライトオフィスは完全に稼働（operational）する状態になります。"
        }
    },
    {
        id: 17,
        target: "excellent",
        category: "困难",
        stem: "The prestigious corporate award recognizes individual employees who demonstrate a consistent commitment to operational ________.",
        options: ["excellence", "excellent", "excellently", "excel"],
        correct: "excellence",
        explanations: {
            guide: "介词后的名词中心语。空格位于介词 to 之后（这里的 to 是介词，后接名词短语 commitment to sth），且有形容词 operational 修饰，应选名词 excellence。",
            family: "excellence (n.优秀/卓越) | excellent (adj.优秀的) | excellently (adv.卓越地) | excel (v.擅长/胜过)。",
            details: "operational excellence 是大企业管理文化中的高阶术语，意为“卓越运营/业务卓越”。整个词组作为名词短语承接在 commitment to 之后，表示对卓越的承诺和追求。",
            cn: "这项享有盛誉的企业奖项旨在表彰那些对卓越运营展现出始终如一承诺的个人员工。",
            jp: "この権威ある企業賞は、業務の卓越性（excellence）への一貫した取り組みを示した個々の従業員を表彰するものです。"
        }
    },
    {
        id: 18,
        target: "renovation",
        category: "困难",
        stem: "The newly ________ convention facility now boasts state-of-the-art audiovisual systems and inclusive seating.",
        options: ["renovated", "renovation", "renovate", "renovates"],
        correct: "renovated",
        explanations: {
            guide: "副词修饰过去分词作定语。空格位于程度副词 newly（新近）之后，名词短语 convention facility（会议设施）之前，需要填入一个过去分词作前置定语，选 renovated。",
            family: "renovated (adj.翻新过的) | renovation (n.翻新) | renovate (v.翻新原形) | renovates (v.单三形式)。",
            details: "newly renovated 是房产及酒店会展场景中极为经典的复合修饰结构，意为“新翻修的”。设备被翻新，用过去分词形式完美充当形容词定语。",
            cn: "新翻修的会议设施现在拥有最先进的视听系统和包容性座位。",
            jp: "新しく改修された（renovated）コンベンション施設は、現在、最先端の音響映像システムとインクルーシブな座席を誇っています。"
        }
    }
];