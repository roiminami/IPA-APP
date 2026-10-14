// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某企业 IT 服务提供者（服务课）为了确保向业务部门承诺的外部 SLA 服务恢复时长指标能够达成，决定与内部二线技术支撑团队（系统开发课和系统运维课）签订内部服务水平合意。关于这种内部运营级别协议（OLA／Operational Level Agreement），下列关于其签订主体、核心目的与主要内容的表述，哪项是完全正确的？",
    "diagram": "  [ 业务部门 (客户) ] ──( 签署 SLA )──> [ 服务管理部门 (服务课) ]\n                                              │\n                                     ( 签订内部 OLA )\n                                              ▼\n                              [ 内部技术团队 (开发课 / 运维课) ]",
    "answerOptions": [
      {
        "text": "由服务管理部门与内部技术团队签订，旨在明确内部指标（如诊断与修复时限）以支撑 SLA 达成",
        "isCorrect": true,
        "rationale": "运营级别协议（OLA／Operational Level Agreement）的签订主体是 IT 服务提供者内部的不同部门/团队（如服务课与开发课/运维课）。其核心目的是将 SLA 总体目标分解为内部团队的可控指标（如故障诊断响应时间、代码修复时限），确保内部协作能够支撑总体 SLA 的达成。"
      },
      {
        "text": "由服务管理部门与外部呼叫中心签订，旨在约束外部坐席的人员排班与法律赔偿责任",
        "isCorrect": false,
        "rationale": "与外部第三方供应商签订具有法律约束力的采购或委托合同称为外部委托合同（UC／Underpinning Contract），而非 OLA。"
      },
      {
        "text": "由业务部门与系统开发课直接签订，旨在约定新系统软件功能开发的交付时间表与预算",
        "isCorrect": false,
        "rationale": "业务部门与开发团队关于项目工程交付的约定属于项目管理（Project Management）范畴的交付物承诺，非 ITSM 运营阶段的 OLA。"
      },
      {
        "text": "由公司最高管理层与服务台签订，旨在确定服务台客服人员的薪酬绩效与 KPI 考核标准",
        "isCorrect": false,
        "rationale": "人事 KPI 考核属于人力资源管理范畴，OLA 专注于服务运营流程中内部团队之间的技术支撑服务水平承诺。"
      }
    ],
    "hint": "请关注 OLA 的核心三要素：<b>签订主体为内部团队之间（服务课与开发/运维课）</b>，<b>目的为向内分解并支撑 SLA 达成</b>，<b>内容为内部诊断与修复时限</b>。"
  },
  {
    "questionNumber": 2,
    "question": "某企业将面向员工的 7×24 小时服务台（Service Desk）电话接听与一线排障业务整体外包给专业 Call Center 公司（B社）。为了规范 B 社的服务交付质量，双方签订了一份正式合同。关于这种基础合同/外部委托合同（UC／Underpinning Contract，JIS 标准称“契約書”），下列关于其签署目的与特性的表述，哪项是完全正确的？",
    "diagram": "  [ 服务提供者 (A社服务课) ]\n             │\n             │ 签署具法律效力的外部合同 (UC / 契約書)\n             ▼\n  [ 外部第三方供应商 (B社) ] ── (按约定预报期评估 Capacity 并配置坐席)",
    "answerOptions": [
      {
        "text": "具有强制法律效力，旨在约束外部供应商按照约定的指标（如接听率、人员扩员预报期）交付服务",
        "isCorrect": true,
        "rationale": "基础合同/外部委托合同（UC／Underpinning Contract）是服务提供者与外部第三方供应商（External Supplier）之间缔结的商事合同。它具有强制法律效力，核心目的是确保外部采购服务的质量（如人员配置前置期、服务台支持时间）与总体 SLA 目标相匹配。"
      },
      {
        "text": "属于组织内部非正式书面约定，仅用于内部二线开发团队对一线的技术支援",
        "isCorrect": false,
        "rationale": "组织内部部门之间的非正式或运营级书面合意属于 OLA（运营级别协议），不具备跨法人商业合同的法律效力。"
      },
      {
        "text": "由业务部门直接与外部厂商签订，用于取代 IT 服务提供者在 SLA 中的总体质量责任",
        "isCorrect": false,
        "rationale": "外部供应商作为内部服务链条中的一环，由 IT 服务提供者进行采购管理，客户（业务部门）依然只与 IT 服务提供者签署 SLA。"
      },
      {
        "text": "仅在系统发生重大灾难（Disaster）启动 BCP 预案时才生效的临时救援协议",
        "isCorrect": false,
        "rationale": "UC 是支撑日常 IT 服务运营或特定模块外包的标准商事合同，不限于灾备救援场景。"
      }
    ],
    "hint": "注意 UC 的核心特征：<b>服务提供者与组织外部供应商（External Supplier）签订</b>、<b>具备强制法律效力（契約書）</b>、<b>用于约束外部采购服务质量</b>。"
  },
  {
    "questionNumber": 3,
    "question": "新销售管理系统上线前夕，受入测试结果显示用户对新功能操作不熟悉，预测上线初期服务台（Service Desk）的咨询量将暴增。由于距离上线仅剩 2 周，无法满足外部服务商“提前 1 个月通知扩员”的合同约定，IT 部门决定在社内 Web 门户上紧急发布结构化的“常见问题与解答（FAQ）”。从服务管理的角度来看，设置 FAQ 能够达到的多维核心目的包括什么？",
    "diagram": "  [ 用户遇到操作疑问 ]\n          │\n          ├───> 查阅社内 Web FAQ ───> 快速自助解决 (Self-service)\n          │\n          └───> 无法拨通/服务台下班 ───> 无缝支撑非工作时段 (18:00~20:00)",
    "answerOptions": [
      {
        "text": "促进用户自助服务以压降服务台呼入量，并弥补人工服务台下班后的支撑盲区",
        "isCorrect": true,
        "rationale": "设置 FAQ（ナレッジ管理／Knowledge Management）具有双重核心目的：第一，引导用户自助服务（Self-service），直接削减服务台的咨询呼叫量，缓解人员不足的压力；第二，利用社内 Web 系统 24h365d 运行的特性，补充人工服务台下班后（如 18:00~20:00）的服务支撑，提升用户满意度。"
      },
      {
        "text": "替代系统操作手册（Manual）的编制，从而缩短系统开发课的软件交付周期",
        "isCorrect": false,
        "rationale": "FAQ 是针对高频疑难的补充问答库，不能完全替代结构化的系统标准操作手册（Manual）。"
      },
      {
        "text": "作为紧急变更（Emergency Change）的审查依据，用以替代 CAB 委员会的审批",
        "isCorrect": false,
        "rationale": "FAQ 是面向用户的知识库文档，与变更控制委员会（CAB）的生产环境风险审查无直接关联。"
      },
      {
        "text": "自动捕获数据库死锁日志，用以直接取代问题管理团队的根因分析流程",
        "isCorrect": false,
        "rationale": "FAQ 属于面向用户的问答知识库，不能替代二线运维对底层软件缺陷的日志诊断与根因分析。"
      }
    ],
    "hint": "设置 FAQ 的多维目的：<b>压降服务台呼叫量（Self-service）</b> + <b>依托 24h Web 门户覆盖人工服务台下班后的时间盲区</b>。"
  },
  {
    "questionNumber": 4,
    "question": "在基于 ITIL / JIS Q 20000 的故障处理生命周期中，当系统突发服务中断时，事件管理（インシデント管理）团队首先通过重启服务或引导用户操作临时回避策（Workaround）快速恢复了业务。随后，为了防止该故障重复发生，该事件被移交至问题管理（問題管理）流程。从 Incident 管理向 Problem 管理过渡的核心管理目的与后续动作是什么？",
    "diagram": "  [ 事件发生 (Incident) ] ──( 临时回避策 Workaround )──> [ 快速恢复业务 ]\n                                                                │\n                                                     ( 移交问题管理 )\n                                                                ▼\n  [ 彻底消除故障 (Problem) ] <──( 提交变更申请 RFC )─── [ 深入查明根本原因 Root Cause ]",
    "answerOptions": [
      {
        "text": "从“快速恢复业务”转向“深入查明根本原因”，并提交变更申请实施恒久修复",
        "isCorrect": true,
        "rationale": "事件管理（インシデント管理）的核心目的是“尽一切可能最快恢复服务”（常使用 Workaround）；而过渡到问题管理（問題管理）后，核心目标转向“深入调查引发故障的根本原因（Root Cause）”，并将临时对策升级为永久对策（Permanent Fix），通常需要通过提交变更申请（RFC）重构代码或升级硬件来彻底消除隐患。"
      },
      {
        "text": "重新评估与客户签署的 SLA 稼働率指标，并单方面修改服务恢复时限承诺",
        "isCorrect": false,
        "rationale": "SLA 指标属于与客户达成的正式合意，不能因发生故障而单方面修改。"
      },
      {
        "text": "直接向外部呼叫中心发出违约索赔，并要求其承担代码重构的全额费用",
        "isCorrect": false,
        "rationale": "外部呼叫中心（B社）仅承担一线服务台接听与记录，系统代码缺陷属于开发团队责任，与服务台外包商无关。"
      },
      {
        "text": "将生产环境数据库直接回滚（Rollback）至上个季度的初始空白状态",
        "isCorrect": false,
        "rationale": "盲目回滚至上季度空白状态会导致大量真实业务数据丢失，严重违反 RPO 灾备要求。"
      }
    ],
    "hint": "注意两者的本质区别：<b>インシデント管理 = 最快恢复业务（ワークアラウンド）</b>；<b>問題管理 = 深入查明根本原因（Root Cause）并实施恒久对策</b>。"
  },
  {
    "questionNumber": 5,
    "question": "某核心支付交易系统在深夜突发主数据库坏块损坏，导致全线交易挂起。若按照常规变更管理（変更管理）流程，提交变更申请单（RFC）、召开变更控制委员会（CAB）例会评估风险并排期部署需要至少耗时 12 小时，这将引发灾难性的商业损失。为此，ITSM 规范中允许启动紧急变更流程。关于紧急变更（緊急変更／Emergency Change）的控制机制，下列哪项表述是正确的？",
    "diagram": "  [ 重大突发故障 / 生产停摆 ]\n              │\n              ▼ (常规 CAB 流程来不及)\n  ┌─────────────────────────────────────────┐\n  │ 紧急变更委员会 (ECAB) 快速评估与授权   │\n  └────────────────────┬────────────────────┘\n                       │ 授权后立即实施紧急补丁 / 切换\n                       ▼\n  [ 业务恢复 ] ──> [ 事后补齐完整文档与审查 (Post Review) ]",
    "answerOptions": [
      {
        "text": "由紧急变更控制委员会（ECAB）快速评估授权实施，并在恢复服务事后补齐文档审查",
        "isCorrect": true,
        "rationale": "当发生严重影响业务的突发故障或重大安全漏洞时，允许启动紧急变更（緊急変更）流程。该流程由紧急变更控制委员会（ECAB／Emergency CAB）进行极简化的快速风险评估与授权，允许运维团队立即实施修复，事后（Post-implementation Review）再补齐标准文档与全套审查流程。"
      },
      {
        "text": "无需任何人员评估与授权，任何一线运维工程师均可随意修改生产环境代码",
        "isCorrect": false,
        "rationale": "即便在紧急情况下，也绝不允许无授权修改生产环境，必须至少获得 ECAB 或指定紧急审批人的授权。"
      },
      {
        "text": "强制绕过任何受入测试与备份步骤，实施后不再进行任何事后复盘与文档记录",
        "isCorrect": false,
        "rationale": "紧急变更同样要求尽可能的最小化风险（如先做快速备份），且必须在事后补齐完整的审查与记录。"
      },
      {
        "text": "仅适用于常规例行密码重置和定期硬件保养等低风险变更场景",
        "isCorrect": false,
        "rationale": "低风险、预先获得授权的例行变更称为标准变更（標準変更／Standard Change），而非紧急变更。"
      }
    ],
    "hint": "关注紧急变更的控制核心：<b>由 ECAB 快速评估授权</b>，<b>先实施恢复</b>，<b>事后（Post-implementation）补齐审查与记录</b>。"
  },
  {
    "questionNumber": 6,
    "question": "某金融系统的 SLA 约定服务时间为营业日 9:00 至 20:00（每天 11 小时，每月按 20 个营业日计算，合意服务总时间为 220 小时）。在当月中，系统发生了一次突发硬件故障，导致服务中断了 4.4 小时；另外，IT 部门在营业时间段内安排了一次事先获得业务部门批准的紧急安全补丁更新，耗时 2 小时。根据 ITSM 标准，在计算当月服务可用性（稼働率／Availability）时，若计划内批准停机不计入故障扣分，该系统的服务稼働率应为多少？",
    "diagram": "  合意服务总时间:  220 小时\n  计划外故障停机:  4.4 小时  (计算稼働率时扣除)\n  计划内批准停机:  2.0 小时  (事先合意，不计入故障扣分)\n  ───────────────────────────────────────────────────\n  实际有效稼働时间 = 220 - 4.4 = 215.6 小时\n  稼働率 = (215.6 / 220) × 100% = 98.0%",
    "answerOptions": [
      {
        "text": "98.0%",
        "isCorrect": true,
        "rationale": "可用性（稼働率）公式为：(合意服务时间 - 计划外故障停机时间) / 合意服务时间 × 100%。计划内事先获得业务部门批准的变更停机不作为计划外故障扣除，因此有效稼働时间为 220 - 4.4 = 215.6 小时，稼働率 = 215.6 / 220 = 98.0%。"
      },
      {
        "text": "97.1%",
        "isCorrect": false,
        "rationale": "错误地将计划内停机（2小时）与计划外故障（4.4小时）相加（累计6.4小时）进行扣除：(220 - 6.4) / 220 = 97.09% ≈ 97.1%。"
      },
      {
        "text": "99.0%",
        "isCorrect": false,
        "rationale": "计算错误，忽略了计划外故障停机时长。"
      },
      {
        "text": "95.6%",
        "isCorrect": false,
        "rationale": "计算数值逻辑偏差。"
      }
    ],
    "hint": "可用性计算核心公式：<b>稼働率 = (合意サービス時間 - 計画外障害停止時間) / 合意サービス時間 × 100%</b>。注意事先获得批准的计划内停机不计入故障扣分。"
  },
  {
    "questionNumber": 7,
    "question": "服务台（Service Desk）在一线受理用户报修时，建立了分级响应机制。当一线坐席人员发现某技术难题超出了自己的知识库范围时，会将单据转交给二线的系统工程师团队进行深度排查。然而，如果该故障持续未能修复，且即将突破 SLA 规定的 8 小时恢复时限，服务台主管会将此状况直接汇报给 IT 部门部长及业务部经理，以协调更高层的资源或调整业务期望。关于这两种移交流程的称谓，下列哪项表述是正确的？",
    "diagram": "  [ 用户报修 Incident ]\n          │\n          ├──> 超出技术能力 ──> [ 二线专家团队 ] (機能的エスカレーション)\n          │\n          └──> 即将突破 SLA ──> [ IT部长 / 业务经理 ] (組織的エスカレーション)\n                                (协调高层资源/管控合规风险)",
    "answerOptions": [
      {
        "text": "转交二线专家属于機能的エスカレーション，汇报高级管理层属于組織的エスカレーション",
        "isCorrect": true,
        "rationale": "移交（エスカレーション／Escalation）分为两种类型：因技术能力或权限不足移交给更专业的技术二线/专家团队，称为“功能/技术移交（機能的エスカレーション／Functional Escalation）”；因响应超时、SLA违约风险或影响重大向更高管理层级汇报以协调资源，称为“组织/管理移交（組織的エスカレーション／Hierarchical Escalation）”。"
      },
      {
        "text": "转交二线专家属于組織的エスカレーション，汇报高级管理层属于機能的エスカレーション",
        "isCorrect": false,
        "rationale": "概念完全颠倒。技术专家属于功能维度（Functional），管理层级属于组织维度（Hierarchical）。"
      },
      {
        "text": "两者均属于容量管理（Capacity Management）中的人力资源调度流程",
        "isCorrect": false,
        "rationale": "移交流程属于事件管理（インシデント管理）中的标准处置步骤，非容量管理。"
      },
      {
        "text": "两者均属于问题管理（Problem Management）中的已知错误注册流程",
        "isCorrect": false,
        "rationale": "移交是针对未恢复 Incident 的实时处置，已知错误注册是 Problem 管理对根因查明后的归档动作。"
      }
    ],
    "hint": "区分两种 Escalation：<b>移交专业技术专家 = 機能的エスカレーション</b>；<b>因违约风险汇报给管理层 = 組織的エスカレーション</b>。"
  },
  {
    "questionNumber": 8,
    "question": "某外包呼叫中心（B社）承担了 A 社的服务台业务。在合同（UC）中，B 社强调：“由于招聘、排班及业务培训需要固定周期，如果 A 社预测未来咨询量会出现大幅波动，必须提前 1 个月提供预报，以便 B 社调整坐席体制”。从 ITSM 流程的角度来看，A 社根据业务计划对服务台的咨询业务负荷进行预测，并协同外部厂商规划人力资源与基础设施承载力的管理流程被称为是什么？",
    "diagram": "  [ 业务部门预测新功能上线 ]\n              │\n              ▼ (预测咨询量暴增)\n  ┌─────────────────────────────────────────┐\n  │ 容量管理 (キャパシティ管理)             │ (提前 1 个月进行工作量估算与资源规划)\n  └────────────────────┬────────────────────┘\n                       │\n                       ▼\n  [ 外包服务商及时完成坐席扩员与排班 ]",
    "answerOptions": [
      {
        "text": "キャパシティ管理",
        "isCorrect": true,
        "rationale": "容量管理（キャパシティ管理／Capacity Management）致力于确保 IT 基础设施、网络及人力资源承载力能够以合理的成本满足当前及未来的业务需求。提前预报咨询量并安排坐席体制属于 Capacity 管理的典型实践。"
      },
      {
        "text": "アベイラビリティ管理",
        "isCorrect": false,
        "rationale": "可用性管理侧重于减少停机时间与提升系统稼働率，不直接负责服务台坐席人力规模与负荷预报。"
      },
      {
        "text": "サービスポートフォリオ管理",
        "isCorrect": false,
        "rationale": "服务组合管理专注于管控服务的生命周期决策（投资、上架、退役），不处理具体的日常负荷与人力排班。"
      },
      {
        "text": "財務管理",
        "isCorrect": false,
        "rationale": "IT 财务管理负责 IT 服务的成本核算、预算编制与计费（Charging），不负责排班履约管理。"
      }
    ],
    "hint": "关注题干描述的<b>预测业务负荷并提前规划人力/硬件承载力</b>的管理流程。在日本 AP 考试中被称为 <b>キャパシティ管理（Capacity Management）</b>。"
  },
  {
    "questionNumber": 9,
    "question": "在问题管理（問題管理）流程中，运维团队成功定位到了导致新系统偶发报错的根本原因，但由于开发团队需要 3 个月时间才能发布永久修复补丁，问题管理团队于是制定了一套详细的临时应对步骤，并将其作为“已知错误（Known Error）”注册到一个中央数据库中。这样，服务台一线坐席在接到同类报修时，可以立即调取该记录指引用户恢复操作。这个用于存储已知错误及其 Workaround 的数据库被称为是什么？",
    "diagram": "  [ 定位根本原因但暂无永久补丁 ]\n              │\n              ▼\n  ┌─────────────────────────────────────────┐\n  │ 已知错误数据库 (KEDB)                   │ (注册已知错误与临时回避策 Workaround)\n  └────────────────────┬────────────────────┘\n                       │ 供服务台一线检索使用\n                       ▼\n  [ サービスデスク快速应答用户 ]",
    "answerOptions": [
      {
        "text": "KEDB",
        "isCorrect": true,
        "rationale": "已知错误数据库（KEDB／Known Error Database）是问题管理维护的核心数据库，专门用于记录已查明根因的已知错误（Known Error）及其相对应的临时回避策（Workaround），供服务台快速检索。"
      },
      {
        "text": "CMDB",
        "isCorrect": false,
        "rationale": "配置管理数据库（CMDB）专门用于存储配置项（CI）及其依赖关系，不专门存储故障根因与 Workaround 手册。"
      },
      {
        "text": "DML",
        "isCorrect": false,
        "rationale": "确定媒体库（DML／Definitive Media Library）是用于安全存储经过测试和批准的最终软件原盘代码与文档的物理/电子存储库。"
      },
      {
        "text": "SLA",
        "isCorrect": false,
        "rationale": "SLA 是服务级别协议文件，非数据库。"
      }
    ],
    "hint": "注意题干提到的<b>专门用于存储已查明根因的已知错误（Known Error）及其 Workaround 的数据库</b>。在日本 AP 考试中被称为 <b>KEDB（Known Error Database）</b>。"
  },
  {
    "questionNumber": 10,
    "question": "在评估系统服务质量时，ITSM 通常将服务质量特性拆解为可靠性（Reliability）、保守性（Maintainability）以及可用性（Availability）等维度。某系统在过去 1 年运行中发生了 4 次故障，累计停机时间为 20 小时。如果运维团队通过引入自动化故障诊断工具，将每次故障的平均修复时间从 5 小时缩短到了 1 小时，这直接显著提升了系统质量特性中的哪一个指标？",
    "diagram": "  [ 故障发生 ] ─── 诊断与修复耗时 (MTTR) ───> [ 服务恢复 ]\n  ───────────────────────────────────────────────────\n  ▼ MTTR (平均修复时间) 缩短 ➔ 保守性 (Maintainability) 提升\n  ▼ MTBF (平均无故障时间) 延长 ➔ 可靠性 (Reliability) 提升",
    "answerOptions": [
      {
        "text": "保守性 (Maintainability / MTTR)",
        "isCorrect": true,
        "rationale": "保守性/可维护性（保守性／Maintainability）是指系统发生故障后被成功修复恢复的能力，其核心衡量指标是平均修复时间（MTTR）。缩短 MTTR 可直接提升保守性。而可靠性（Reliability）由平均无故障时间（MTBF）衡量。"
      },
      {
        "text": "信頼性 (Reliability / MTBF)",
        "isCorrect": false,
        "rationale": "可靠性（信頼性）是指系统不发生故障持续运行的能力，由 MTBF 衡量。缩短单次修复耗时并不改变故障发生的频率（MTBF）。"
      },
      {
        "text": "機密性 (Confidentiality / CIA)",
        "isCorrect": false,
        "rationale": "机密性属于安全范畴（防止未经授权的读取），与故障修复时间无关。"
      },
      {
        "text": "網羅性 (Completeness)",
        "isCorrect": false,
        "rationale": "网罗性属于审计与数据完整性概念，非运维修复指标。"
      }
    ],
    "hint": "指标映射铁律：<b>MTTR（平均回复时间）对应 保守性（Maintainability）</b>；<b>MTBF（平均无故障时间）对应 信頼性（Reliability）</b>。"
  },
  {
    "questionNumber": 11,
    "question": "当系统运维团队收到来自服务台的存储设备（Storage）故障报警时，工程师需要迅速查明该存储设备上存放了哪些数据库，以及这些数据库支撑着公司的哪些业务系统（如销售管理系统、产品管理系统），以便评估故障的商业影响范围。在 ITSM 架构中，专门用于存储配置项（CI - Configuration Item）及其相互之间复杂依赖关系的数据库被称为是什么？",
    "diagram": "  [ 硬件配置项 (CI): 存储设备 A ]\n              │ (依赖关联关系)\n              ▼\n  [ 软件配置项 (CI): 销售数据库 B ] ──> [ 业务服务: 销售管理系统 ]\n  ───────────────────────────────────────────────────────────\n  ▼ 存储此关系网的结构化数据库: CMDB (構成管理データベース)",
    "answerOptions": [
      {
        "text": "CMDB",
        "isCorrect": true,
        "rationale": "配置管理数据库（CMDB／Configuration Management Database）是配置管理（構成管理）的核心，记录了所有 IT 资产/配置项（CI）的属性以及它们之间的逻辑与物理依赖关系。"
      },
      {
        "text": "KEDB",
        "isCorrect": false,
        "rationale": "KEDB 是已知错误数据库，用于存放已知故障根因与 Workaround 指南，不存放硬件/软件拓扑依赖台账。"
      },
      {
        "text": "DBMS",
        "isCorrect": false,
        "rationale": "DBMS 是数据库管理系统通用软件（如 MySQL、Oracle），非 ITSM 资产依赖管理流程的概念。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "DNS 是域名解析服务，将域名映射为 IP 地址。"
      }
    ],
    "hint": "请关注题干描述的<b>记录配置项（CI）属性及其相互依赖关系</b>的数据库。在日本 AP 考试中被称为 <b>CMDB（Configuration Management Database）</b>。"
  },
  {
    "questionNumber": 12,
    "question": "在系统开发课完成新系统的功能重构后，系统在正式发布上线前的 2 周进入了“受入测试（Acceptance Testing）”阶段。在这一阶段，业务部门（销售部）深度参同，不仅对系统的功能与响应性能进行验证，还对操作手册（Manual）的完备性与服务台支撑准备情况进行评价。这种在服务部署上线前由业务干系人确认系统是否满足上线标准的测试被称为是什么？",
    "diagram": "  [ システム開発課 代码开发与单体/结合测试完成 ]\n              │\n              ▼\n  ┌─────────────────────────────────────────┐\n  │ 受入テスト (Acceptance Testing)        │ (业务部门参同: 验证功能/性能/手册/体制)\n  └────────────────────┬────────────────────┘\n                       │ 评估合格后正式上线部署\n                       ▼\n  [ 新服务正式提供 (Service Release) ]",
    "answerOptions": [
      {
        "text": "受入テスト",
        "isCorrect": true,
        "rationale": "验收测试（受入テスト／Acceptance Testing）是在系统交付或上线前，由客户或业务部门参同进行的综合测试，旨在验证系统功能、性能以及业务准备（如操作手册、培训）是否达到合意的上线标准。"
      },
      {
        "text": "回帰テスト (Regression Testing)",
        "isCorrect": false,
        "rationale": "回归测试是指修改代码后验证修改未影响原有正常功能的测试，通常由开发/测试团队执行。"
      },
      {
        "text": "限界テスト (Stress Testing)",
        "isCorrect": false,
        "rationale": "压力/极限测试是指在超负荷极限条件下评估系统稳定性的技术测试。"
      },
      {
        "text": "単体テスト (Unit Testing)",
        "isCorrect": false,
        "rationale": "单体测试是指针对最小代码模块（方法/类）进行的单元测试。"
      }
    ],
    "hint": "注意题干提到的<b>新服务上线前由业务部门参同，评估系统功能与操作手册准备情况</b>的测试。在日本 AP 考试中被称为 <b>受入テスト（Acceptance Testing）</b>。"
  },
  {
    "questionNumber": 13,
    "question": "企业在规划业务连续性（BCP）与 IT 服务连续性管理（ITSCM）时，需要为核心金融系统设定关键恢复指标。若数据中心突发火灾导致主数据库损坏，IT 团队需要在 4 小时内完成备用数据中心的服务切换并恢复正常运行，同时要求恢复出来的数据最多只能丢失故障发生前 15 分钟内的交易记录。这里的“4小时”和“15分钟”分别对应哪两个关键灾备指标？",
    "diagram": "  [ 灾难发生点 (Disaster) ]\n  │<── 15分钟 (数据丢失上限) ──>│<────────── 4小时 (服务恢复目标) ──────────>│\n  ▼                             ▼                                           ▼\n  [ 最近一次数据备份 ]        [ 灾难突发 ]                                [ 业务恢复运营 ]\n  (对应指标: RPO)                                                         (对应指标: RTO)",
    "answerOptions": [
      {
        "text": "4小时对应 RTO，15分钟对应 RPO",
        "isCorrect": true,
        "rationale": "恢复时间目标（RTO／Recovery Time Objective）是指灾难发生后将 IT 服务恢复到可接受水平所允许的最大时间（4小时）；恢复点目标（RPO／Recovery Point Objective）是指灾难发生时业务所能容忍的最大数据丢失时间跨度（15分钟）。"
      },
      {
        "text": "4小时对应 RPO，15分钟对应 RTO",
        "isCorrect": false,
        "rationale": "概念颠倒。RTO 代表时间（Time/Recovery Duration），RPO 代表数据点（Point/Data Loss）。"
      },
      {
        "text": "4小时对应 MTTR，15分钟对应 MTBF",
        "isCorrect": false,
        "rationale": "MTTR 和 MTBF 用于日常运维故障统计，非重大灾难恢复（BCP/ITSCM）的标准目标定义指标。"
      },
      {
        "text": "4小时对应 SLA，15分钟对应 OLA",
        "isCorrect": false,
        "rationale": "SLA 和 OLA 为服务质量合意协议，不直接等同于具体的灾备技术指标定义。"
      }
    ],
    "hint": "灾备双雄记忆法：<b>RTO（Recovery Time Objective）代表允许的最大停机恢复时长</b>；<b>RPO（Recovery Point Objective）代表允许的最大数据丢失时跨</b>。"
  },
  {
    "questionNumber": 14,
    "question": "在基于 ITIL / JIS Q 20000 的战略服务管理中，IT 服务提供者需要对其管理的所有服务进行全生命周期资产核算。某企业管理着涵盖“正在规划研发的次世代 AI 投资服务”、“已上线运行的销售管理服务”以及“已停用退役的旧版 Web 门户”在内的完整服务清单。这个包含服务全生命周期（研发中、运营中、已退役）的总体管理框架与文件被称为是什么？",
    "diagram": "  ┌────────────────────────────────────────────────────────┐\n  │               サービスポートフォリオ (Portfolio)        │\n  │  ┌─────────────────┐ ┌────────────────┐ ┌─────────────┐  │\n  │  │ サービスパイプ │ │サービスカタログ│ │ 退役サービス│  │\n  │  │ (研发中概念服务)│ │ (正在运行提供) │ │ (已下线淘汰)│  │\n  │  └─────────────────┘ └────────────────┘ └─────────────┘  │\n  └────────────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "サービスポートフォリオ",
        "isCorrect": true,
        "rationale": "服务组合（サービスポートフォリオ／Service Portfolio）代表服务提供者管理的所有服务的全貌，分为三部分：服务流水线（Pipeline，研发中）、服务目录（Catalog，正向客户提供）、退役服务（Retired）。服务目录仅为服务组合的一部分。"
      },
      {
        "text": "サービスカタログ",
        "isCorrect": false,
        "rationale": "服务目录仅包含目前已经上线运行、正在向客户公开提供的服务，不包含尚在研发中或已下线退役的服务。"
      },
      {
        "text": "SLA",
        "isCorrect": false,
        "rationale": "SLA 是特定服务的质量合意文件，非全生命周期服务资产组合。"
      },
      {
        "text": "WBS (Work Breakdown Structure)",
        "isCorrect": false,
        "rationale": "WBS 是项目管理中将项目工作分解为可管理组件的结构图，非服务管理资产组合。"
      }
    ],
    "hint": "注意范围区别：<b>サービスカタログ（Service Catalog）</b>仅包含目前运行中的服务；而包含研发中、运行中及退役全部服务的全生命周期框架叫 <b>サービスポートフォリオ（Service Portfolio）</b>。"
  },
  {
    "questionNumber": 15,
    "question": "当服务台（Service Desk）接到一个关于“部分销售员无法导出 PDF 提案”的 Incident 报修时，为了合理分派二线团队的处理优先级（Priority），服务台主管需要根据矩阵算法计算出该事件的优先级。在计算 Priority 时，服务台主要结合评估的两个核心维度是什么？",
    "diagram": "  [ 评估维度 1: 影響度 (Impact) ]  ── 业务受损范围/受影响用户数\n                 ×\n  [ 评估维度 2: 緊急度 (Urgency) ] ── 业务对时间延误的敏感程度\n                 │\n                 ▼\n  [ 算出優先度 (Priority) ] ───> 决定响应时限与派单顺序",
    "answerOptions": [
      {
        "text": "緊急度 (Urgency) と 影響度 (Impact)",
        "isCorrect": true,
        "rationale": "在 Incident 管理中，事件的优先级（優先度／Priority）由“紧急度（緊急度／Urgency，对业务的时间敏感程度）”与“影响度（影響度／Impact，受影响的业务范围与用户规模）”两者共同相乘决定。"
      },
      {
        "text": "重要度 (Importance) と 難易度 (Difficulty)",
        "isCorrect": false,
        "rationale": "难易度是技术评估维度，不直接用于一线 Incident 优先级的标准矩阵计算。"
      },
      {
        "text": "深刻度 (Severity) と 費用 (Cost)",
        "isCorrect": false,
        "rationale": "费用不是实时 Incident 优先分派的直接计算矩阵因子。"
      },
      {
        "text": "危険度 (Risk) と 知名度 (Visibility)",
        "isCorrect": false,
        "rationale": "知名度属于公关概念，非 ITSM 标准优先度决定矩阵。"
      }
    ],
    "hint": "ITSM 事件优先级公式：<b>優先度 (Priority) = 緊急度 (Urgency) × 影響度 (Impact)</b>。"
  }
];