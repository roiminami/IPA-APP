// 将这道题专属的 26 道双语交互预习题绑定到全局，方便 test.html 动态按需加载
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "question": "某大型企业集团为了防范网络攻击，在总部与各子公司之间建立了VPN。目前其安全架构主要依靠在内外部网络交界处部署防火墙（FW）来过滤流量。这种安全设计理念属于以下哪一项？",
    "answerOptions": [
      { "text": "境界防御（Boundary Defense / 境界防御）", "isCorrect": true, "rationale": "这种模式基于划分“可信内部区域”与“不可信外部区域”，并在边界通过防火墙等设备进行访问控制。" },
      { "text": "零信任（Zero Trust / ゼロトラスト）", "isCorrect": false, "rationale": "该理念主张不再默认信任任何内部或外部流量，每次访问请求都必须经过持续的验证，而非仅仅依赖边界防护。" },
      { "text": "多层防御（Defense in Depth / 多層防御）", "isCorrect": false, "rationale": "这是一种在系统的不同层面部署多种安全控制措施的策略，虽然包含边界防御，但更强调防御的深度和多样性。" },
      { "text": "CASB（Cloud Access Security Broker）", "isCorrect": false, "rationale": "这是专门用于监控和实施企业与云服务提供商之间安全策略的中间件，并不代表传统的网络边界划分理念。" }
    ],
    "hint": "请关注题目中提到的“依靠内外部网络交界处的防火墙”这一关键特征。"
  },
  {
    "question": "在加强企业集团内部管理权限时，要求“仅向员工提供履行其职责所必需的信息访问权限，而不授予额外权限”。这一原则被称为：",
    "answerOptions": [
      { "text": "最小权限原则（Least Privilege）", "isCorrect": false, "rationale": "虽然与题目意图相似，但它更多指代系统运行时的技术权限，而题目描述的是信息获取层面的基本原则。" },
      { "text": "按需知悉原则（Need-to-know / 知る必要性の原則）", "isCorrect": true, "rationale": "该原则明确要求信息仅应由因工作职能而确实需要知道该信息的人员访问，旨在防止不必要的信息泄露。" },
      { "text": "职责分离原则（Segregation of Duties）", "isCorrect": false, "rationale": "这一原则强调将关键业务流程拆分为多个步骤由不同人完成，以防止滥用职权或欺诈，而非单纯的访问授权。" },
      { "text": "多因素认证（MFA）", "isCorrect": false, "rationale": "这是一种身份验证技术方法，用于确保用户身份的真实性，不属于权限分配的逻辑原则。" }
    ],
    "hint": "该原则的名称直接体现了“只有在需要知道时才被告知”的含义。"
  },
  {
    "question": "为了应对日益复杂的“软件供应链攻击”，企业开始要求记录业务系统中所使用的所有组件、版本、供应商及授权信息。这种清单通常被称为：",
    "answerOptions": [
      { "text": "SLCP（Software Life Cycle Process / ソフトウェアライフサイクルプロセス）", "isCorrect": false, "rationale": "SLCP 是软件生命周期过程，用于规范软件从开发、测试、部署到维护的整个过程。它关注的是“软件如何被开发和管理”，例如开发流程是否规范、测试是否充分等。" },
      { "text": "SBOM（Software Bill of Materials / ソフトウェア部品表）", "isCorrect": true, "rationale": "现代企业的软件系统通常会使用大量第三方组件，例如开源库、外部软件模块等。这些组件如果存在漏洞，可能成为软件供应链攻击（Software Supply Chain Attack）的入口。\n\n企业需要建立 SBOM（Software Bill of Materials），即软件物料清单，记录软件中使用的组件名称、版本、供应商以及许可证等信息。\n\n例如，一个购物系统使用了 Spring Framework、Log4j、OpenSSL 等组件。当 Log4j 某个版本被发现存在严重漏洞时，企业可以通过 SBOM 快速确认哪些系统使用了受影响版本，并及时采取升级或修复措施。\n\n相比之下，定期漏洞扫描（脆弱性診断）主要用于发现当前系统中已存在的漏洞，对新漏洞突发时的响应较为滞后，需要 SBOM 协助快速排查受影响范围。" },
      { "text": "SIEM（Security Information and Event Management）", "isCorrect": false, "rationale": "SIEM 是安全信息事件管理系统，主要用于收集和分析各种日志，例如服务器日志、防火墙日志、认证日志等，从中发现异常行为和攻击迹象。\n\n例如，企业通过 SIEM 发现某个账号在异常地点登录，或者服务器出现大量异常访问。\n\n但是 SIEM 关注的是“系统发生了什么安全事件”，并不是“软件由哪些组件组成”，因此不是本题答案。" },
      { "text": "RASP（Runtime Application Self-Protection）", "isCorrect": false, "rationale": "RASP 是应用程序运行时自我保护技术，它通过集成在应用程序内部，在程序运行过程中检测和阻止攻击。\n\n例如，当应用程序遭遇 SQL 注入攻击时，RASP 可以识别异常请求并进行阻断。\n\nRASP 关注的是“运行中的应用如何防御攻击”，而不是记录软件组件信息，因此不符合题意。" }
    ],
    "hint": "请联想制造业中记录产品零件组成的“物料清单”概念。"
  },
  {
    "question": "企业决定引入一套系统，通过集中收集防火墙、服务器和业务系统的访问日志，进行关联分析，以便及时发现攻击征兆或违规行为。该系统最可能是：",
    "answerOptions": [
      { "text": "MDM（Mobile Device Management）", "isCorrect": false, "rationale": "MDM 是移动设备管理系统，主要用于管理企业中的手机、平板电脑和笔记本电脑等终端设备。\n\n例如：\n\n设置设备安全策略；\n管理应用安装；\n远程锁定或删除设备数据。\n\nMDM 的重点是“管理终端设备”，而不是集中分析防火墙、服务器等多个系统产生的日志，因此不符合题意。" },
      { "text": "SIEM（Security Information and Event Management / シエム）", "isCorrect": true, "rationale": "企业内部通常存在大量安全设备和业务系统，例如防火墙、服务器、认证系统以及业务应用等。这些系统都会产生大量日志，例如登录记录、访问记录、异常操作记录等。\n\n但是，单独查看每个设备的日志很难发现复杂攻击。如果分别查看服务器、防火墙和业务系统日志，很难发现这些行为之间的关联。\n\n因此，企业会使用 SIEM，集中收集来自不同设备和系统的日志，并通过关联分析发现异常行为。\n\n例如，某员工账号深夜从异常地点登录，随后访问大量文件，又尝试连接不常用服务器。SIEM 可以将这些事件关联起来，判断可能存在账号被盗或内部不正行为，并及时发出警报。\n\n因此，本题中“集中收集日志并进行关联分析，发现攻击征兆”的系统就是 SIEM。" },
      { "text": "沙箱（Sandbox / サンドボックス）", "isCorrect": false, "rationale": "沙箱是一种隔离环境，用于安全地执行和观察可疑程序。\n\n例如，收到一个可疑邮件附件时，可以在沙箱中运行该文件，观察它是否执行恶意行为。\n\n沙箱关注的是“这个程序运行后会做什么？”，而 SIEM 关注的是“多个系统发生了什么安全事件？”" },
      { "text": "入侵防御系统（IPS）", "isCorrect": false, "rationale": "IPS 是一种能够检测并阻止网络攻击的安全设备，主要关注实时网络流量检测和攻击阻断。" }
    ],
    "hint": "寻找一种能够将分散的“安全信息”和“事件”进行统一“管理”的工具。"
  },
  {
    "question": "企业向所有员工宣布“所有业务系统的访问记录和互联网访问日志都将被长期保存并定期审计”。从安全管理角度看，这一措施的主要目的是什么？",
    "answerOptions": [
      { "text": "提高业务系统的运行效率", "isCorrect": false, "rationale": "日志记录本身会消耗一定的计算资源，通常不会直接提升系统的运行性能。" },
      { "text": "满足软件开发生命周期（SLCP）的要求", "isCorrect": false, "rationale": "虽然日志是合规的一部分，但向员工“通告”的主要意图不在于流程标准化，而在于对人的行为产生影响。" },
      { "text": "抑止内部不正行为（Internal Fraud Deterrence / 内部不正の抑止）", "isCorrect": true, "rationale": "通过增加“被发现的可能性”，在员工心理上形成屏障，从而降低其进行数据窃取或违规操作的动机。" },
      { "text": "自动修复发现的系统漏洞", "isCorrect": false, "rationale": "日志记录属于检测和威慑手段，无法自动执行安全补丁的安装或代码修复。" }
    ],
    "hint": "请考虑“公开监控”对人的心理 and 行为选择会产生怎样的影响。"
  },
  {
    "question": "攻击者通过攻击一家安全防护较弱的小型供应商，获取其进入大型合作企业内网的VPN凭据，进而对目标大企业发起攻击。这属于哪种类型的攻击？",
    "answerOptions": [
      { "text": "业务供应链攻击（Business Supply Chain Attack）", "isCorrect": true, "rationale": "这种攻击利用合作伙伴或子公司作为“跳板”（踏み台），绕过目标企业的严密边界防护。" },
      { "text": "软件供应链攻击（Software Supply Chain Attack）", "isCorrect": false, "rationale": "此类攻击侧重于在软件源代码、编译过程或第三方库中植入恶意代码，而非利用业务伙伴的访问权限。" },
      { "text": "服务供应链攻击（Service Supply Chain Attack）", "isCorrect": false, "rationale": "该类攻击针对的是目标企业使用的第三方IT服务平台（如云服务、邮件服务），试图通过劫持服务账号来达成目的。" },
      { "text": "中间人攻击（MITM）", "isCorrect": false, "rationale": "这是一种拦截通信双方流量的技术手段，不涉及通过业务伙伴关系层层渗透的策略。" }
    ],
    "hint": "关键在于攻击者利用了企业间“业务合作关系”中的信任链条作为突破口。"
  },
  {
    "question": "在针对网络设备的安全检查中，发现许多路由器仍在使用设备出厂时由厂商预设的口令。为了降低风险，必须禁止使用这种：",
    "answerOptions": [
      { "text": "动态口令（OTP）", "isCorrect": false, "rationale": "动态口令是一种增强安全性的措施，通常具有时效性，并非出厂预设的固定口令。" },
      { "text": "初始口令（Default Password / 初期パスワード）", "isCorrect": true, "rationale": "这些口令通常与设备型号绑定且公开可知，如果不修改，攻击者可以轻易获得设备的管理权限。" },
      { "text": "强口令", "isCorrect": false, "rationale": "强口令是安全管理所鼓励的，它具有足够的复杂度和长度，能有效抵抗暴力破解。" },
      { "text": "单点登录（SSO）口令", "isCorrect": false, "rationale": "SSO是为了方便用户访问多个系统而设计的机制，与设备本身的出厂默认配置无关。" }
    ],
    "hint": "这种口令在同一型号的所有设备上往往是完全相同的。"
  },
  {
    "question": "即使企业定期对业务系统进行漏洞扫描，为什么仍被认为在应对“软件供应链攻击”方面存在不足？",
    "answerOptions": [
      { "text": "漏洞扫描只能发现已知的系统漏洞，无法应对社交工程攻击", "isCorrect": false, "rationale": "虽然描述正确，但这并没有解释为何在软件供应链层面不足，供应链攻击的核心在于组件的可见性。" },
      { "text": "漏洞扫描无法识别系统所使用的第三方库及其具体版本的影响范围", "isCorrect": true, "rationale": "企业通常会定期进行漏洞扫描（脆弱性診断）以发现已知漏洞。但是当新的漏洞爆发时（例如未知的零日漏洞），如果不掌握各系统使用了哪些第三方组件、开源库的具体版本，就难以及时做出判断和防御响应。因此需要配合 SBOM 进行软件成分管理。" },
      { "text": "漏洞扫描会消耗过多的网络带宽，导致业务中断", "isCorrect": false, "rationale": "这是实施过程中的技术副作用，不是安全对策逻辑上的根本缺陷。" },
      { "text": "漏洞扫描不能替代多因素认证（MFA）的作用", "isCorrect": false, "rationale": "这是两种完全不同的安全维度，MFA 针对身份识别，扫描针对系统弱点。" }
    ],
    "hint": "请考虑当一个新的库漏洞（如Log4j）爆发时，仅靠扫描能否立即确认全集团成百上千个系统的受影响情况。"
  },
  {
    "question": "在实施“零信任”架构的过程中，对于所有业务系统的访问，除了ID和密码外，还要求根据登录地点和设备状态进行二次验证。这种做法主要体现了：",
    "answerOptions": [
      { "text": "多因素认证（MFA / 多要素認証）的应用", "isCorrect": true, "rationale": "通过结合知识因素（密码）和所有因素（设备、地点等），极大地提高了身份验证的可靠性。" },
      { "text": "沙箱隔离技术的应用", "isCorrect": false, "rationale": "沙箱主要用于文件检测，不涉及对用户访问请求的身份验证流程。" },
      { "text": "边界防御的强化", "isCorrect": false, "rationale": "这种细粒度的验证属于身份驱动的安全，不再依赖于用户是否位于防火墙后的物理位置。" },
      { "text": "静态密码策略的优化", "isCorrect": false, "rationale": "题目提到的是引入了密码之外的额外验证因素，超出了单纯优化静态密码的范畴。" }
    ],
    "hint": "这是一种通过“多种要素”来确认访问者真实身份的技术手段。"
  },
  {
    "question": "某企业集团要求子公司在将系统开发委派给外部服务商前，必须审查该服务商的安全管理水平。这一措施的主要目的是：",
    "answerOptions": [
      { "text": "降低开发成本", "isCorrect": false, "rationale": "安全审查通常会增加筛选成本和合规成本，其核心目标不是经济效益。" },
      { "text": "强化软件供应链的源头管控", "isCorrect": true, "rationale": "通过审查供应商，可以在开发阶段之前预防恶意代码植入或由于开发不规范导致的脆弱性。" },
      { "text": "统一各子公司的网络拓扑结构", "isCorrect": false, "rationale": "审查开发商关注的是软件生产过程，而非基础网络设施的物理布局。" },
      { "text": "替代定期的漏洞诊断工作", "isCorrect": false, "rationale": "供应商审查是事前预防，漏洞诊断是事后检测，两者互为补充，不可相互替代。" }
    ],
    "hint": "请从“预防攻击者从上游渗透”的角度思考。"
  },
  {
    "question": "在处理高度敏感的内部信息系统时，企业不仅在边界部署防火墙，还在内部主机部署了防病毒软件，并对数据库访问进行独立审计。这种策略被称为：",
    "answerOptions": [
      { "text": "单一防御策略", "isCorrect": false, "rationale": "该策略显然在多个层级部署了不同的管理对策，不属于单一防御。" },
      { "text": "多层防御（Defense in Depth / 多層防御）", "isCorrect": true, "rationale": "企业不会只依靠单一安全措施，而是在不同层面部署多个防御手段（如网络层、主机层、数据层）。即使某一层防御被突破，其他安全措施仍能继续保护系统，这种思想称为多层防御。" },
      { "text": "边界防御（Boundary Defense）", "isCorrect": false, "rationale": "边界防御只是多层防御中的一个环节，题目强调的是多种不同层面措施的结合。" },
      { "text": "零信任（Zero Trust）", "isCorrect": false, "rationale": "零信任的核心思想是不默认信任任何用户或设备，访问前必须持续验证。而本题侧重于“层层设防”这一结构化防御思想。" }
    ],
    "hint": "这就像在城堡周围挖了护城河，同时在城墙上部署守卫，并在内库设置暗锁。"
  },
  {
    "question": "企业决定对所有连接内网的移动终端进行统一配置管理，包括强制要求锁屏密码和远程擦除丢失设备的数据。实现这一目标的工具是：",
    "answerOptions": [
      { "text": "CASB（Cloud Access Security Broker）", "isCorrect": false, "rationale": "CASB 侧重于用户与云服务之间的策略实施，不直接管控移动设备的硬件配置。" },
      { "text": "MDM（Mobile Device Management / モバイルデバイス管理）", "isCorrect": true, "rationale": "MDM 允许管理员远程监控、管理和支持移动设备，确保其符合企业的安全策略。" },
      { "text": "SIEM（Security Information and Event Management）", "isCorrect": false, "rationale": "SIEM 是日志分析中心，本身不具备直接下发配置指令到移动终端的功能。" },
      { "text": "IPS（Intrusion Prevention System）", "isCorrect": false, "rationale": "IPS 主要作用于网络层拦截攻击流量，不涉及对终端设备属性的管理。" }
    ],
    "hint": "寻找专门用于“管理”“移动”“设备”的缩写术语。"
  },
  {
    "question": "为了评估业务系统的安全性，安全专家模拟黑客手段对系统进行漏洞扫描和渗透测试。根据管理对策，这种行为被称为：",
    "answerOptions": [
      { "text": "事故响应（Incident Response / IR）", "isCorrect": false, "rationale": "事故响应是在攻击发生后进行的应急处理和恢复工作，而非前瞻性的测试。" },
      { "text": "脆弱性诊断（Vulnerability Assessment / 脆弱性診断）", "isCorrect": true, "rationale": "这是一种旨在识别、量化并确定系统中安全漏洞优先级的评估过程。" },
      { "text": "静态分析", "isCorrect": false, "rationale": "静态分析通常指在不运行程序的情况下检查源代码，而渗透测试涉及动态运行环境。" },
      { "text": "可用性测试", "isCorrect": false, "rationale": "可用性测试关注用户使用的便捷程度，而非系统的安全性。" }
    ],
    "hint": "这是一种主动寻找系统“弱点”并确认其是否存在的过程。"
  },
  {
    "question": "当一个新的高危漏洞被披露后，管理员需要迅速查清全集团内哪些服务器运行了受影响的开源组件。以下哪种资源能提供最高效的帮助？",
    "answerOptions": [
      { "text": "防火墙的策略配置表", "isCorrect": false, "rationale": "防火墙策略只反映了流量通过的规则，无法深入识别服务器内部运行的具体软件库版本。" },
      { "text": "SBOM（Software Bill of Materials / ソフトウェア部品表）", "isCorrect": true, "rationale": "SBOM 记录了软件中使用的组件名称、版本、供应商等信息。当漏洞发生时，可以通过 SBOM 查询并快速定位哪些系统使用了受影响版本，从而大幅缩减排查时间。" },
      { "text": "员工的入职培训记录", "isCorrect": false, "rationale": "培训记录反映的是人员的安全意识，与系统技术组件的分布无关。" },
      { "text": "VPN的登录日志", "isCorrect": false, "rationale": "登录日志只能显示用户的访问日志，无法揭示应用系统内部的组件构成。" }
    ],
    "hint": "这是一种能够展示软件内部“构成零件”的详细列表。"
  },
  {
    "question": "在权限管理中，如果系统默认给所有新员工分配了管理员权限，然后再由人工根据需求删除。这种做法违背了：",
    "answerOptions": [
      { "text": "最小权限原则（Least Privilege）", "isCorrect": true, "rationale": "该原则要求在初始状态下仅授予完成任务所需的最低限度权限，以减少误操作或恶意行为的风险。" },
      { "text": "单点登录原则", "isCorrect": false, "rationale": "单点登录涉及的是访问的便利性，与初始权限的高低分配没有直接逻辑联系。" },
      { "text": "双因素验证原则", "isCorrect": false, "rationale": "这是关于认证强度的要求，不涉及认证成功后所获得的权限多寡。" },
      { "text": "可用性原则", "isCorrect": false, "rationale": "过多授予权限虽然提高了可用性，但在安全性上是极大的隐患。" }
    ],
    "hint": "考虑在权限分配时应该采取“默认拒绝”还是“默认允许”的态度。"
  },
  {
    "question": "攻击者通过向目标公司使用的云协同办公软件发送含有恶意脚本的链接，诱导员工点击以窃取其云账号权限。这主要属于：",
    "answerOptions": [
      { "text": "业务供应链攻击", "isCorrect": false, "rationale": "业务供应链攻击通常涉及利用合作伙伴实体的物理或网络连接，本题侧重于云服务平台的使用。" },
      { "text": "服务供应链攻击（Service Supply Chain Attack）", "isCorrect": true, "rationale": "服务供应链攻击针对的是企业依赖的外部第三方 IT/SaaS 服务商，试图通过接管或利用这些服务平台或其账户，以间接突破目标企业的安全防线。" },
      { "text": "软件供应链攻击", "isCorrect": false, "rationale": "该类攻击通常涉及修改软件本身或其依赖库的代码，而不是单纯利用已部署云服务的社交工程或权限劫持。" },
      { "text": "DDoS攻击", "isCorrect": false, "rationale": "DDoS 旨在使服务不可用，而非窃取权限。" }
    ],
    "hint": "攻击目标是企业所使用的第三方“云服务”账户。"
  },
  {
    "question": "某系统通过在代码中加入监控模块，使其在运行时能够自我识别非法调用并阻断注入攻击。这种技术是：",
    "answerOptions": [
      { "text": "WAF（Web Application Firewall）", "isCorrect": false, "rationale": "WAF 部署在服务器外部，通过检查流量中的特征来防护，而不深入到代码运行内部。" },
      { "text": "RASP（Runtime Application Self-Protection / 実行時アプリケーション自己防御）", "isCorrect": true, "rationale": "RASP 通过在应用程序运行环境中注入安全检查，能够对运行时的应用行为和漏洞调用进行自我防护与阻断。" },
      { "text": "IDS（Intrusion Detection System）", "isCorrect": false, "rationale": "IDS 仅提供检测和告警，通常不具备在应用运行层面直接阻断代码调用的能力。" },
      { "text": "静态脱敏（Static Masking）", "isCorrect": false, "rationale": "这是对敏感数据进行置换或脱敏的技术，不属于运行时的安全防御。" }
    ],
    "hint": "该技术的关键词在于“运行时”以及应用程序的“自保护”。"
  },
  {
    "question": "在内部不正行为的“犯罪三要素”模型（Donald Cressey 提出）中，如果不正当访问日志被监控且员工已知晓，主要是削弱了其中的哪一个要素？",
    "answerOptions": [
      { "text": "动机（Motive）", "isCorrect": false, "rationale": "动机通常源于员工个人的财务压力或不满，外部监控较难直接消除这种心理需求。" },
      { "text": "机会（Opportunity）", "isCorrect": true, "rationale": "通过严格的日志审计和监控，使得实施不正行为而“不被发现”的难度增加，从而减少了作案的机会感。" },
      { "text": "正当化（Rationalization）", "isCorrect": false, "rationale": "正当化是员工为自己的错误行为寻找借口的心理过程，与技术层面的日志记录无直接关联。" },
      { "text": "资金（Capital）", "isCorrect": false, "rationale": "资金不是犯罪三要素模型（机会、动机、正当化）的组成部分。" }
    ],
    "hint": "监控的存在会让人觉得“很难下手且容易暴露”。"
  },
  {
    "question": "为了提高对恶意邮件中未知病毒的检测能力，企业在邮件服务器后方设置了一个专门用于执行可疑附件的隔离环境。该环境被称为：",
    "answerOptions": [
      { "text": "虚拟专用网（VPN）", "isCorrect": false, "rationale": "VPN 用于加密远程连接，不具备分析恶意软件行为的功能。" },
      { "text": "沙箱（Sandbox / サンドボックス）", "isCorrect": true, "rationale": "沙箱提供了一个受控的虚拟环境，可以在不影响真实系统的情况下运行并观察可疑程序的行为。" },
      { "text": "代理服务器（Proxy Server）", "isCorrect": false, "rationale": "代理服务器主要用于转发和缓存网络请求，通常不进行复杂的深度恶意行为分析。" },
      { "text": "蜜罐（Honeypot）", "isCorrect": false, "rationale": "蜜罐是故意设置的诱饵系统，旨在吸引并研究黑客，而非对日常流量中附件的常规防御手段。" }
    ],
    "hint": "这个术语来源于“让孩子在受限空间里玩耍”的日常用词。"
  },
  {
    "question": "在“软件供应链攻击”中，攻击者非法获取了某开源库的维护权限并植入后门。这种攻击手段主要破坏了软件开发过程中的哪一方面？",
    "answerOptions": [
      { "text": "可用性", "isCorrect": false, "rationale": "后门通常是为了长期潜伏，不一定会导致服务中断或不可用。" },
      { "text": "完整性（Integrity）", "isCorrect": true, "rationale": "攻击者未经授权修改了代码内容，导致软件与其原始预期的功能和安全性不符，破坏了其完整性。" },
      { "text": "保密性", "isCorrect": false, "rationale": "虽然最终可能导致泄密，但代码被非法篡改这一行为直接体现的是完整性的丧失。" },
      { "text": "抗抵赖性", "isCorrect": false, "rationale": "这主要涉及操作证据的留存，与代码本身是否被恶意植入无直接关联。" }
    ],
    "hint": "请考虑“代码在未经许可的情况下被更改”属于安全三要素中的哪一项。"
  },
  {
    "question": "企业集团要求各子公司不仅要关注自己的防火墙，还要对跨公司边界的业务API调用进行统一身份认证。这反映了安全架构正在从边界防御向哪种模式转变？",
    "answerOptions": [
      { "text": "单层防御模式", "isCorrect": false, "rationale": "这种转变明显增加了防御的复杂性和深度，而非简化为单层。" },
      { "text": "零信任模式（Zero Trust / ゼロトラスト）", "isCorrect": true, "rationale": "零信任强调“始终验证”，无论访问源是来自内网还是外网，都必须经过严格且持续的身份和权限验证。" },
      { "text": "被动响应模式", "isCorrect": false, "rationale": "加强身份验证属于主动防御和治理措施，而非事后被动处理。" },
      { "text": "物理安全隔离模式", "isCorrect": false, "rationale": "API 调用涉及逻辑连接，无法通过纯粹的物理手段实现绝对隔离。" }
    ],
    "hint": "该模式的座右铭是“Never Trust, Always Verify”。"
  },
  {
    "question": "当企业决定实施脆弱性诊断（漏洞诊断）时，哪种频率配置对于核心生产业务系统最为合适？",
    "answerOptions": [
      { "text": "仅在系统初次上线前实施一次", "isCorrect": false, "rationale": "漏洞是随着时间推移和新威胁出现而产生的，仅凭上线前的扫描无法防范后续发现的漏洞。" },
      { "text": "每 3 个月到 1 年进行一次定期诊断，且在重大变更后立即实施", "isCorrect": true, "rationale": "这能确保在可接受的时间周期内发现潜在弱点，并在系统发生足以产生新风险的变化（如系统重大更新）时及时评估。" },
      { "text": "每隔十年进行一次全面审计", "isCorrect": false, "rationale": "IT 技术和威胁环境变化极快，十年一次的频率会导致系统长时间处于极高风险中。" },
      { "text": "仅在发生实际安全事故后实施", "isCorrect": false, "rationale": "这属于典型的“亡羊补牢”，失去了预防性维护的意义。" }
    ],
    "hint": "请寻找平衡“成本”与“风险窗口期”的周期性建议。"
  },
  {
    "question": "某员工因对公司不满，利用其拥有的合法权限在离职前导出了大量核心客户名单。这种行为在安全术语中被称为：",
    "answerOptions": [
      { "text": "社交工程（Social Engineering）", "isCorrect": false, "rationale": "社交工程涉及通过欺骗手段获取信息，而该员工使用的是自己的合法权限。" },
      { "text": "内部不正（Internal Fraud / 内部不正）", "isCorrect": true, "rationale": "这是指组织内部成员利用其职务、身份或权限实施的损害组织利益的违规、违法行为。" },
      { "text": "僵尸网络攻击", "isCorrect": false, "rationale": "僵尸网络涉及被远程控制的大量计算机发起的协同攻击，与单人内部窃密无关。" },
      { "text": "SQL注入攻击", "isCorrect": false, "rationale": "这是通过在输入框注入非法 SQL 指令来操纵数据库的技术攻击，不涉及合法导出功能的使用。" }
    ],
    "hint": "请注意“组织内部人员”利用“职权”这一核心背景。"
  },
  {
    "question": "为了防止员工通过个人网盘上传公司机密文件，企业引入了 CASB 产品。CASB 的核心作用是：",
    "answerOptions": [
      { "text": "为云服务提供端到端的加密通道", "isCorrect": false, "rationale": "虽然可以集成加密，但这只是手段之一，不是其作为代理角色的核心定义。" },
      { "text": "在企业内部用户与云服务提供商之间实施安全策略", "isCorrect": true, "rationale": "CASB（Cloud Access Security Broker）是位于企业用户和云服务之间的安全控制平台，能够识别云服务访问、监控并限制敏感数据上传到个人网盘，从而保障云服务应用的安全。" },
      { "text": "替代传统的企业边界防火墙", "isCorrect": false, "rationale": "CASB 专注于云应用的安全，不负责处理底层网络流量的通用过滤。" },
      { "text": "存储所有业务系统的源代码备份", "isCorrect": false, "rationale": "那是版本控制系统的作用，不是安全代理的功能。" }
    ],
    "hint": "它扮演着“云服务访问安全经纪人”的角色。"
  },
  {
    "question": "即使是在“境界防御”架构下，如果攻击者已经侵入了内部网络的一台 PC，哪种安全对策能够最有效地防止其进一步攻击内部的业务系统？",
    "answerOptions": [
      { "text": "出口防火墙（Outbound FW）过滤规则", "isCorrect": false, "rationale": "出口过滤主要防止内网向外发送数据，无法阻断内网横向移动（East-West流量）。" },
      { "text": "业务系统的多因素认证（MFA）与权限限制", "isCorrect": true, "rationale": "境界防御假设内网安全，一旦边界突破，内网就极易受损。此时，若内部业务系统强制启用 MFA 并严格限制访问权限，即使攻击者控制了部分主机，也无法轻易横向移动或攻破核心系统。" },
      { "text": "提高互联网出口带宽", "isCorrect": false, "rationale": "增加带宽对防御内部扩散没有任何安全层面的积极作用。" },
      { "text": "在互联网边界部署 IDS", "isCorrect": false, "rationale": "IDS 主要监控跨边界流量，对已经在内网发生的横向渗透检测能力有限且无法直接阻断。" }
    ],
    "hint": "寻找一种即使“第一道防线（边界）”失守后依然能保护核心资产的手段。"
  },
  {
    "question": "在管理供应链风险时，企业建立了一套流程：一旦发现某第三方开源组件有严重漏洞，立即根据 SBOM 定位受影响系统，这属于安全管理中的哪个环节？",
    "answerOptions": [
      { "text": "风险识别（Risk Identification）", "isCorrect": false, "rationale": "虽然包含识别，但定位具体影响范围更倾向于针对特定脆弱性的具体应对与分析。" },
      { "text": "事件响应与影响分析（Incident Response & Impact Analysis）", "isCorrect": true, "rationale": "利用 SBOM 快速定位、盘点特定漏洞在内部系统中的分布并分析其潜在受损程度，是突发漏洞或安全事件时，事件响应与影响分析的核心步骤。" },
      { "text": "物理环境安全防护", "isCorrect": false, "rationale": "软件清单的管理属于逻辑层面的安全，不涉及机房设施等物理保护。" },
      { "text": "用户满意度调查", "isCorrect": false, "rationale": "该流程属于纯粹的后端安全运维工作，与终端用户的主观感受调查无关。" }
    ],
    "hint": "请关注“定位受影响系统”这一动作在突发漏洞情况下的目的。"
  }
];