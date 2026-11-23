// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某金融科技企业在微服务（マイクロサービス）架构中引入了 API 网关（APIゲートウェイ）。近期安全团队发现，黑客将精心伪装的 SQL 注入（SQLインジェクション）与跨站脚本（XSS）攻击报文嵌套在 GraphQL/JSON 格式的 HTTP POST 复杂请求体（Payload）中，轻易穿透了仅对 L3/L4 层 IP 地址和端口号进行管控的包过滤防火墙。为了在不修改后端微服务业务源码的前提下，对 Layer 7 应用层协议进行深度解包审查与特征匹配，架构师决定部署专用的安全组件。这种专注于 Web 应用层安全防护与攻击拦截的硬件/软件组件被称为是什么？",
    "diagram": "  [ GraphQL/JSON HTTP 请求 ]\n             │\n             ▼\n  ┌──────────────────────────┐\n  │ Web应用防火墙 (WAF)      │ ──► ( 深度审查 L7 JSON 请求体 )\n  └─────────────┬────────────┘\n                ├─────────────────┐\n                ▼ (拦截恶意攻击)   ▼ (放行合规通信)\n         [ 阻断并记录日志 ]  [ 后端微服务集群 ]",
    "answerOptions": [
      {
        "text": "WAF",
        "isCorrect": true,
        "rationale": "Web应用防火墙（WAF／Web Application Firewall）专注于 OSI 模型第 7 层（应用层），通过解析 HTTP/HTTPS 协议及 Payload（如 JSON/XML），能够精准识别并阻断 SQL 注入、XSS、跨站请求伪造（CSRF）等 Web 专属漏洞攻击。"
      },
      {
        "text": "FW",
        "isCorrect": false,
        "rationale": "传统包过滤防火墙（ファイアウォール／Firewall）仅工作在网络层与传输层（L3/L4），依据 IP 地址、协议及端口号判定通断，无法深入解析 HTTP 请求体内嵌的应用层复杂攻击。"
      },
      {
        "text": "IPS",
        "isCorrect": false,
        "rationale": "入侵防御系统（侵入防止システム／IPS）侧重于网络层与传输层已知协议漏洞（如缓冲区溢出、SYN Flood）的实时阻断，对于嵌套在正常 HTTP 报文深处的 Web 业务逻辑攻击防护不如 WAF 精细。"
      },
      {
        "text": "プロキシ",
        "isCorrect": false,
        "rationale": "正向/反向代理服务器（プロキシ／Proxy）主要用于流量转发、缓存和负载均衡，其本身若未集成专门的 WAF 安全规则引擎，则不具备深度攻击特征检测与防御能力。"
      }
    ],
    "hint": "请注意题干强调的<b>应用层（Layer 7）HTTP/JSON 报文深度解析</b>与专门防御<b>SQL注入和XSS攻击</b>的技术。在日本 AP 考试中，该组件简称为 <b>WAF</b>。"
  },
  {
    "questionNumber": 2,
    "question": "某知名开源组件被曝光存在严重的远程代码执行（RCE）漏洞，而在官方开源社区与软件厂商尚未发布任何正式修复补丁（Patch）之前，黑客便利用已公开的概念验证代码（PoC）对全球数万台暴露在公网的服务器发起了自动化入侵。这种利用官方补丁问世前的时间窗口（Window of Exposure）发起的网络攻击模式被称为是什么？",
    "diagram": "  [ 漏洞曝光/公开 ]\n         │\n         ▼ ◄─────── ( 危险窗口期: 官方补丁未发布! )\n  [ ゼロデイ攻撃 (黑客利用漏洞发起抢跑攻击) ]\n         │\n         ▼\n  [ 官方正式 Patch 发布与更新 ]",
    "answerOptions": [
      {
        "text": "ゼロデイ攻撃",
        "isCorrect": true,
        "rationale": "零日攻击（ゼロデイ攻撃／Zero-day Attack）是指黑客利用官方尚未发布修复补丁（Day 0）的软件漏洞所发起的攻击。由于此时缺乏官方补丁，防护极难，通常需要依靠 WAF 虚拟补丁（Virtual Patching）或临时缓解措施（回避策）进行止损。"
      },
      {
        "text": "パスワードリスト攻撃",
        "isCorrect": false,
        "rationale": "撞库攻击（パスワードリスト攻撃／Credential Stuffing）是指利用在其他网站泄露的账号密码组合，批量尝试登录目标系统的行为，非利用程序漏洞。"
      },
      {
        "text": "水飲み場型攻撃",
        "isCorrect": false,
        "rationale": "水坑攻击（水飲み場型攻撃／Watering Hole Attack）是指事先入侵目标受害者高频访问的特定合法网站并植入恶意代码，实现隐蔽针对性感染的技术。"
      },
      {
        "text": "ドライブバイダウンロード",
        "isCorrect": false,
        "rationale": "路过式下载攻击（ドライブバイダウンロード／Drive-by Download）是指用户在不知情的情况下仅因浏览挂马网页，浏览器就在后台静默下载并执行恶意软件的过程。"
      }
    ],
    "hint": "寻找指代在<b>官方补丁（Patch）问世前的危险时间窗口内</b>发起的网络攻击术语（Zero-day）。"
  },
  {
    "questionNumber": 3,
    "question": "某电商平台在遭受激烈攻击后，安全运维人员将 WAF 的防御规则与检测灵敏度提升到了极致。然而在随后的大促期间，客服部门接到大量真实合规用户的投诉，称在正常点击“结算支付”时频繁被系统误判定为恶意攻击并强行阻断页面。安全工程学中，这种“将正常合规的业务通信误判定为攻击并阻断”的误报现象被称为是什么？",
    "diagram": "  [ 正常合法用户请求 ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ WAF 过滤规则过于严苛     │\n  └─────────────┬────────────┘\n                │\n                ▼ (误判定为恶意攻击!)\n  [ 過検知 (False Positive) 阻断正常业务 ]",
    "answerOptions": [
      {
        "text": "過検知",
        "isCorrect": true,
        "rationale": "过检测/误报（過検知／False Positive）是指安全设备将合规正常的业务通信误判为恶意攻击并予以拦截的现象。这需要安全人员动态进行规则调优（Tuning）与白名单配置以兼顾安全性与可用性。"
      },
      {
        "text": "未検知",
        "isCorrect": false,
        "rationale": "未检测/漏报（未検知／False Negative）是指安全设备未能识别出真正的恶意攻击报文，将其误判定为正常流量放行，给系统留下安全隐患。"
      },
      {
        "text": "アノマリ検知",
        "isCorrect": false,
        "rationale": "异常检测（アノマリ検知／Anomaly Detection）是一种通过建立系统正常行为的统计基线（Baseline）、对比偏离基线的行为来识别未知威胁的技术方法，非误报现象本身。"
      },
      {
        "text": "ファジング",
        "isCorrect": false,
        "rationale": "模糊测试（ファジング／Fuzzing）是一种向软件输入大量随机或畸形数据以探测潜在崩溃和漏洞的安全测试技术。"
      }
    ],
    "hint": "注意区分<b>将正常通信误判定为攻击（過検知）</b>与<b>将真实攻击误判定为正常放行（未検知）</b>这两个关键概念。"
  },
  {
    "questionNumber": 4,
    "question": "某大型混合云企业部署了上百台防火墙、WAF、K8s 集群与数据库。在一次隐蔽的 APT 攻击中，黑客在不同设备上留下了零散的异常日志。由于缺乏集中分析手段，运维人员未能及时拼凑出攻击全貌。为此，企业引入了一套集中式安全管理平台：该平台能跨异构设备集中采集 Syslog 与事件日志，并利用内置引擎进行“时序相关分析（相関分析）”，自动识别跨多台设备的关联入侵痕迹并实时告警。这种自动化日志关联分析系统被称为是什么？",
    "diagram": "  [ FW 规则日志 ] ──┐\n  [ WAF 阻断日志 ] ──┼──► [ 集中日志采集 ] ──► [ SIEM 时序相关分析 ] ──► ( 自动告警 )\n  [ K8s 审计日志 ] ──┘",
    "answerOptions": [
      {
        "text": "SIEM",
        "isCorrect": true,
        "rationale": "安全信息与事件管理系统（SIEM／Security Information and Event Management）能跨多台网络设备、服务器和应用集中采集日志，并运用规则引擎进行时序相关分析（相関分析），从而在海量日志中识别隐蔽的协同攻击并告警。"
      },
      {
        "text": "SOAR",
        "isCorrect": false,
        "rationale": "安全编排、自动化与响应（SOAR／Security Orchestration, Automation and Response）侧重于在检测出威胁后，通过预定义剧本（Playbook）自动化联动防火墙或 Endpoint 执行封禁等响应动作。"
      },
      {
        "text": "Syslog",
        "isCorrect": false,
        "rationale": "Syslog 是一种在 IP 网络中传输计算机系统日志的标准网络协议，仅负责日志消息的标准化格式与传输，不具备高阶的时序相关分析功能。"
      },
      {
        "text": "EDR",
        "isCorrect": false,
        "rationale": "终端检测与响应（EDR／Endpoint Detection and Response）专注于监控和分析单个终端（如员工电脑、服务器节点）内部的异常进程、文件篡改与内存行为。"
      }
    ],
    "hint": "寻找能够<b>集中跨设备日志</b>并进行<b>时序相关分析（相関分析）</b>以发现隐蔽入侵的自动化安全管理平台（SIEM）。"
  },
  {
    "questionNumber": 5,
    "question": "某金融公司在遭遇严重勒索软件攻击后，由于缺乏常设的应急指挥中枢，导致网络组盲目封禁端口、开发组私自重启数据库、公关部发布错误信息，引发了严重的二次业务失控。为了构建标准化的应急响应 SOP，管理层决定建立一个专门处理安全事故的跨部门常设团队。该团队具备最高授权，负责在事故爆发时统筹情报、评估影响度、下达“紧急切断网站”等止损指令，并负责后续复盘。这种事故响应团队被称为是什么？",
    "diagram": "  [ 突发网络安全事故 ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ インシデント対応チーム   │ ──► ( 评估灾情影响 / 决定是否紧急停机止损 )\n  │ (CSIRT / CIRT)           │\n  └─────────────┬────────────┘\n                ├─────────────────┬─────────────────┐\n                ▼                 ▼                 ▼\n         [ 网络组隔离网络 ] [ 开发组修复漏洞 ] [ 专人统一对外公关 ]",
    "answerOptions": [
      {
        "text": "CSIRT / CIRT",
        "isCorrect": true,
        "rationale": "事故响应团队/CSIRT（インシデント対応チーム／Computer Security Incident Response Team）是企业内部专门应对网络安全事故的专门指挥机构，拥有评估危机等级、下达系统关停或隔离等高阶止损决策的最高授权。"
      },
      {
        "text": "SOC",
        "isCorrect": false,
        "rationale": "安全运营中心（SOC／Security Operations Center）侧重于 7×24 小时对安全设备、流量和告警进行日常持续监控与初筛，通常在确认重大事故后移交给 CSIRT 进行指挥响应。"
      },
      {
        "text": "PMO",
        "isCorrect": false,
        "rationale": "项目管理办公室（PMO／Project Management Office）负责企业日常 IT 项目的开发进度、资源分配与质量管控，不承担突发网络安全事故的应急处置职责。"
      },
      {
        "text": "ISMS委員会",
        "isCorrect": false,
        "rationale": "ISMS 委员会（信息安全管理体系委员会）负责制定企业整体的信息安全策略、风险评估框架与合规审计，属于高层管理与策略制定机构，非事故一线指挥团队。"
      }
    ],
    "hint": "寻找企业内部专门负责<b>事故情报收集、灾情评估与下达止损停机指令</b>的最高应急团队（CSIRT）。"
  },
  {
    "questionNumber": 6,
    "question": "某政务公开网站为了彻底杜绝黑客利用未知漏洞隐蔽篡改首页静态 HTML 和发布文件的风险，决定引入一种不依赖已知恶意代码特征库（Signature）的无损篡改检测机制。系统事先为网站根目录下所有合规文件计算出密码学单向哈希值（如 SHA-256）并建立安全基线库；随后后台进程定期扫描当前文件并重新计算哈希值，一旦发现对比不匹配，立即触发告警并自动触发备份镜像覆盖恢复。这种防篡改检测技术被称为是什么？",
    "diagram": "  [ 合规原始文件 ] ──► ( 计算哈希 ) ──► [ 安全基线列表 (SHA-256) ]\n                                              │\n  [ 现网定期扫描 ] ──► ( 重新计算哈希 ) ──────┤\n                                              ▼ (对比发现不一致!)\n                                    [ 判定文件被篡改并报警恢复 ]",
    "answerOptions": [
      {
        "text": "ハッシュ値比較",
        "isCorrect": true,
        "rationale": "哈希值比较型篡改检测（ハッシュ値比較／Hash Comparison）通过将文件当前的单向哈希值与预先存储的安全基线哈希值进行比对，利用哈希函数的雪崩效应（哪怕修改一个字节哈希值也会巨变），能精准检测任何未知的非法文件篡改。"
      },
      {
        "text": "シグネチャマッチング",
        "isCorrect": false,
        "rationale": "特征码匹配（シグネチャマッチング／Signature Matching）依赖已知恶意代码或 WebShell 的特征库，无法识别黑客直接修改网页文本等个性化未知篡改行为。"
      },
      {
        "text": "タイムスタンプ比較",
        "isCorrect": false,
        "rationale": "时间戳比较（タイムスタンプ比較／Timestamp Comparison）仅检查文件最后修改时间，黑客可以通过伪造系统时间（如 Linux `touch` 命令）轻易绕过该检测。"
      },
      {
        "text": "差分バックアップ比較",
        "isCorrect": false,
        "rationale": "增量备份比较（差分バックアップ比較）用于数据备份与容灾恢复的校验，不属于专用于实时监测文件完整性与防篡改的安全机制。"
      }
    ],
    "hint": "寻找通过对比<b>密码学哈希值（Hash Value）</b>是否与预设安全基线一致来识别网页篡改的技术。"
  },
  {
    "questionNumber": 7,
    "question": "某企业在数据中心新建了一批 Linux 节点用于部署 Docker/Kubernetes 容器环境。安全架构师对刚完成安装的初始操作系统进行扫描时，发现系统默认启用了 FTP、Telnet、RPCBind 等十几种业务根本不需要的后台服务与通信端口，这给攻击者提供了极大的潜在扫描与漏洞入侵入口（Attack Surface）。为了实施系统安全加固（Hardening），运维规范要求必须彻底关停所有非必需的后台进程与服务。这项基础安全加固对策被称为是什么？",
    "diagram": "  [ 出厂默认 OS (开启许多闲置服务) ]\n         │ ( 暴露大量通信端口，攻击面极大! )\n         ▼\n  ┌──────────────────────────┐\n  │ 关停无用服务与通信端口   │ ──► [ 不要なサービスの停止 ]\n  └─────────────┬────────────┘\n                ▼\n  [ 加固后的 Minimal OS (仅保留必要服务) ]",
    "answerOptions": [
      {
        "text": "不要なサービスの停止",
        "isCorrect": true,
        "rationale": "停止不必要的服务（不要なサービスの停止／Disabling Unnecessary Services）是操作系统与服务器加固（Hardening）的核心对策。通过裁减和关停闲置的后台服务与开放端口，可以极大限度缩小系统的被攻击面（Attack Surface）。"
      },
      {
        "text": "パッチ自動適用",
        "isCorrect": false,
        "rationale": "补丁自动应用（パッチ自動適用／Automatic Patching）是指自动下载并安装最新的系统漏洞修复程序，属于漏洞修补手段，非主动裁减多余服务。"
      },
      {
        "text": "データ暗号化",
        "isCorrect": false,
        "rationale": "数据加密（データ暗号化／Data Encryption）侧重于保护存储或传输中数据的机密性，无法消除开放端口带来的潜在网络入侵入口。"
      },
      {
        "text": "アクセスログ有効化",
        "isCorrect": false,
        "rationale": "启用访问日志（アクセスログ有効化）为后续安全审计提供事后追溯轨迹，不能直接阻止黑客针对闲置端口服务的扫描与入侵。"
      }
    ],
    "hint": "寻找指代<b>关停服务器上闲置无用的后台服务与端口</b>以缩小攻击面的安全加固操作。"
  },
  {
    "questionNumber": 8,
    "question": "某大型数据中心在入口处选型安全设备时，需要在 IDS（入侵检测系统）和 IPS（入侵防御系统）之间做出决策。网络架构师强调：IDS 犹如旁路安装的监控摄像头，发现恶意攻击时仅能向管理员发送告警，无法直接拦截数据包；而当前业务要求设备必须以“串联（Inline）”方式直接插入主干网络通路上，一旦识别出攻击报文，能够当场将其丢弃（Drop）并阻断连接。这种具备实时内联阻断能力的安全设备被称为是什么？",
    "diagram": "  [ 网络流量 ] ──► ┌────────────────────────┐ ──► [ 后端服务器 ]\n                   │ 入侵防御系统 (IPS)     │\n                   │ (Inline 串联实时阻断!)  │\n                   └───────────┬────────────┘\n                               ▼ (当场丢弃恶意报文)\n                        [ 阻断包 (Drop) ]",
    "answerOptions": [
      {
        "text": "IPS",
        "isCorrect": true,
        "rationale": "入侵防御系统（IPS／Intrusion Prevention System）以串联（Inline）方式部署在网络主干通路上，不仅能实时检测攻击特征，还能直接在网络层当场丢弃（Drop）恶意数据包并切断连接，实现实时阻断。"
      },
      {
        "text": "IDS",
        "isCorrect": false,
        "rationale": "入侵检测系统（IDS／Intrusion Detection System）通常采用旁路镜像（Promiscuous Mode）部署，仅监听网络流量并触发告警，无法直接在主干通路上拦截或丢弃数据包。"
      },
      {
        "text": "UTM",
        "isCorrect": false,
        "rationale": "统一威胁管理（UTM／Unified Threat Management）是将防火墙、VPN、防病毒、IPS 等多种功能集成在单一硬件盒中的复合安全设备，非专门的单功能内联阻断引擎代称。"
      },
      {
        "text": "SWG",
        "isCorrect": false,
        "rationale": "安全 Web 网关（SWG／Secure Web Gateway）主要用于过滤企业内部员工主动访问互联网时的恶意 URL、钓鱼网站及上网行为合规管理。"
      }
    ],
    "hint": "注意区分<b>旁路监听仅触发告警（IDS）</b>与<b>串联在主干通路上当场阻断（IPS）</b>的区别。"
  },
  {
    "questionNumber": 9,
    "question": "某数字银行为了全面评估其新上线的高并发核心交易系统抵御真实高级黑客（APT）的能力，决定聘请具有权威资质的外部白帽安全专家团队进行一次实战模拟演练。专家团队在获得了银行的合法书面授权后，模拟真实黑客的攻击思维，综合运用社会工程学、漏洞利用、权限提升（Privilege Escalation）及内网横向移动等手段，尝试突破外网防御并获取核心数据库的控制权，最终向银行提交一份包含完整真实入侵路径的深度风险评估报告。这种测试模式被称为是什么？",
    "diagram": "  [ 授权白帽专家 ]\n         │\n         ▼ ( 模拟真实黑客思路: 漏洞利用 + 提权 + 横向渗透 )\n  ┌──────────────────────────┐\n  │ 渗透测试 (Pen-Testing)   │ ──► [ 验证真实防御极限与安全短板 ]\n  └─────────────┬────────────┘\n                ▼\n  [ 输出真实入侵路径与整改建议 ]",
    "answerOptions": [
      {
        "text": "ペネトレーションテスト",
        "isCorrect": true,
        "rationale": "渗透测试（ペネトレーションテスト／Penetration Testing）是指在获得授权的前提下，白帽安全专家模拟真实黑客的攻击技术与侵入路径对目标系统发起实战入侵，以检验系统真实防御能力与隐藏安全缺陷。"
      },
      {
        "text": "脆弱性スキャン",
        "isCorrect": false,
        "rationale": "漏洞扫描（脆弱性スキャン／Vulnerability Scanning）利用自动化扫描工具对目标系统进行已知漏洞的批量匹配与列举，不进行深入的漏洞利用与组合提权。"
      },
      {
        "text": "セキュリティ監査",
        "isCorrect": false,
        "rationale": "安全审计（セキュリティ監査／Security Audit）是通过对比规章制度、合规标准与操作日志来检查安全管理流程是否合规的定性检查活动。"
      },
      {
        "text": "コードレビュー",
        "isCorrect": false,
        "rationale": "代码审查（コードレビュー／Code Review）是指对软件源代码进行静态分析以查找逻辑缺陷和安全漏洞，不涉及在运行时对实际网络系统发起攻击。"
      }
    ],
    "hint": "寻找指代<b>模拟真实黑客手法对系统发起授权实战入侵攻击</b>的测试术语（Pen-Testing）。"
  },
  {
    "questionNumber": 10,
    "question": "随着远程办公和多云架构的普及，企业发现传统的“边界型安全架构”（即默认信任企业内网环境，仅在外网与内网交界处部署防火墙）已经无法应对内部终端被感染后的横向渗透（Lateral Movement）。为此，IT 架构师引入了一种全新的安全范式：该范式取消了对“内网”的盲目信任假设，强制遵循“持续验证，永不信任（Never Trust, Always Verify）”的原则，对任何身份、任何设备发起的每一次资源访问请求均进行严格的动态身份认证与细粒度权限管控。这种现代化安全架构理念被称为是什么？",
    "diagram": "  [ 传统边界模式 ] : 内网 == 默认信任 (极易因单点突破导致全局瘫痪)\n  \n  [ ゼロトラスト模式 ]:\n  [ 用户/设备 ] ──► ( 无论内网外网，每次访问均进行强认证与授权 ) ──► [ 微隔离目标资源 ]",
    "answerOptions": [
      {
        "text": "ゼロトラスト",
        "isCorrect": true,
        "rationale": "零信任架构（ゼロトラスト／Zero Trust）摒弃了传统的网络边界信任假设，坚持“从不信任，始终验证”的核心原则，无论访问请求发起自内网还是外网，均对身份、设备状态与上下文环境进行持续动态评估与授权。"
      },
      {
        "text": "DMZ",
        "isCorrect": false,
        "rationale": "非军事区（DMZ／Demilitarized Zone）是传统边界安全架构中放置公网可访问服务器（如 Web/Email）的隔离子网，依然依赖边界防火墙划分信任区域。"
      },
      {
        "text": "VPN",
        "isCorrect": false,
        "rationale": "虚拟专用网络（VPN／Virtual Private Network）通过建立加密隧道将远程客户端接入内网，一旦连通即默认给予内网信任，属于典型的传统边界保护模式。"
      },
      {
        "text": "SDN",
        "isCorrect": false,
        "rationale": "软件定义网络（SDN／Software-Defined Networking）是一种将网络控制平面与数据转发平面分离的网络虚拟化架构技术，非安全信任模型。"
      }
    ],
    "hint": "寻找贯彻<b>“从不信任，始终验证（Never Trust, Always Verify）”</b>核心理念的安全范式。"
  },
  {
    "questionNumber": 11,
    "question": "某跨国企业在搭建 SIEM 系统进行多设备日志相关分析时，遇到了一个严重的技术障碍：防火墙记录事故时间为 10:00:00，WAF 记录为 10:05:00，而数据库服务器记录为 09:55:00。由于各个服务器的系统时钟存在偏差，导致相关分析引擎无法按准确的时间顺序还原黑客入侵的真实轨迹。为了确保全网所有网络设备、服务器与数据库的时钟保持毫秒级精确同步，运维团队应当配置哪项标准网络协议？",
    "diagram": "  [ NTP 时间服务器 (Stratum 1) ]\n         │ ( 毫秒级标准时间广播 / 同步 )\n         ├───► [ 防火墙 (10:00:00) ]\n         ├───► [ WAF 设备 (10:00:00) ]  ──► [ SIEM 正确还原入侵时间线 ]\n         └───► [ DB 服务器 (10:00:00) ]",
    "answerOptions": [
      {
        "text": "NTP",
        "isCorrect": true,
        "rationale": "网络时间协议（NTP／Network Time Protocol）用于在 IP 网络中的计算机系统之间进行毫秒级时钟同步，确保分布式日志的时间准确性，是进行 SIEM 日志相关分析与电子取证的前提。"
      },
      {
        "text": "SNMP",
        "isCorrect": false,
        "rationale": "简单网络管理协议（SNMP／Simple Network Management Protocol）用于网络设备的性能监控、状态轮询与 Trap 故障告警，不用于时间同步。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "域名系统（DNS／Domain Name System）用于将人类可读的主机域名解析为 IP 地址，与设备系统时钟同步无直接关系。"
      },
      {
        "text": "DHCP",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP／Dynamic Host Configuration Protocol）用于自动为局域网内的终端分配 IP 地址、子网掩码及网关参数。"
      }
    ],
    "hint": "寻找用于在网络中进行<b>计算机系统时钟毫秒级精准同步</b>的标准协议简称（NTP）。"
  },
  {
    "questionNumber": 12,
    "question": "某企业内网一台工作站不慎感染了高阶僵尸网络（Botnet）木马。该木马在后台启动后，通过 DGA 算法频繁向外部攻击者的 C&C 控制服务器（Command and Control Server）域名发起 DNS 查询以获取加密指令。企业安全网关检测到该异常解析请求后，并没有直接丢弃，而是利用安全技术将该恶意域名的解析请求强行重定向至企业内部一台安全的隔离分析服务器 IP（Sinkhole IP）。这种通过拦截恶意 DNS 查询、阻断木马与 C&C 服务器通信的技术被称为是什么？",
    "diagram": "  [ 受感染内网主机 ] ──► ( 查询 C&C 恶意域名 ) ──► [ 安全网关 DNS ]\n                                                        │\n                                                        ▼ ( 拦截并重定向! )\n  [ C&C 外部控手 ] ◄── ( 隔离切断 ) ────── [ DNSシンクホール (内部安全IP) ]",
    "answerOptions": [
      {
        "text": "DNSシンクホール",
        "isCorrect": true,
        "rationale": "DNS 坑道/水坑技术（DNSシンクホール／DNS Sinkhole）通过将恶意域名（如 C&C 服务器域名）的 DNS 解析请求重定向至安全受控的内部隔离 IP，切断受害主机与黑客控制端的通信，并精确定位内网受害者。"
      },
      {
        "text": "DNSSEC",
        "isCorrect": false,
        "rationale": "域名系统安全扩展（DNSSEC）通过数字签名机制防止 DNS 缓存污染（DNS Cache Poisoning）与域名劫持，侧重于验证 DNS 数据的真实性与完整性。"
      },
      {
        "text": "プロキシキャッシュ",
        "isCorrect": false,
        "rationale": "代理缓存（プロキシキャッシュ／Proxy Cache）用于暂存网页静态资源以加速内部用户访问，不具备阻断恶意 C&C 通信的安全隔离功能。"
      },
      {
        "text": "IPブラックリスティング",
        "isCorrect": false,
        "rationale": "IP 黑名单（IPブラックリスティング）在 L3/L4 防火墙阻断特定静态 IP 地址，而无法有效应对基于动态域名生成算法（DGA）发起的 DNS 层通信拦截。"
      }
    ],
    "hint": "寻找将针对<b>C&C 控制服务器的恶意域名查询重定向至安全内部 IP</b>的防御技术。"
  },
  {
    "questionNumber": 13,
    "question": "某大型软件公司自研的办公系统本身代码非常严密，但在编译构建过程中引入了一个开源第三方组件库（Dependency）。黑客并未直接攻击该公司，而是秘密入侵了该开源组件的上游（Upstream）官方仓库，在组件的全新版本中植入了后门代码。软件公司在不知情的情况下更新了该组件并打包发布了产品，导致数千家下游企业客户全部沦陷。这种利用上游第三方供应商/组件缺陷进而危害全链条的攻击模式被称为是什么？",
    "diagram": "  [ 黑客 ] ──► ( 入侵上游第三方开源组件库 ) ──► [ 植入后门代码 ]\n                                                      │\n  [ 最终企业客户 ] ◄── ( 部署包含后门的软件 ) ◄── [ 软件公司打包编译 ]",
    "answerOptions": [
      {
        "text": "サプライチェーン攻撃",
        "isCorrect": true,
        "rationale": "供应链攻击（サプライチェーン攻撃／Supply Chain Attack）是指攻击者不直接入侵安全严密的目标企业，而是通过攻击防御较弱的上游软件供应商、开源依赖库或服务商，将恶意代码注入产品中，间接对下游企业发起大规模入侵。"
      },
      {
        "text": "中間者攻撃",
        "isCorrect": false,
        "rationale": "中间人攻击（中間者攻撃／Man-in-the-Middle Attack）是指攻击者串联在通信双方之间，秘密窃听、拦截或篡改正在传输中的数据包。"
      },
      {
        "text": "水飲み場型攻撃",
        "isCorrect": false,
        "rationale": "水坑攻击（水飲み場型攻撃）是指入侵目标受害者高频访问的特定 Web 网站并挂马，属于特定的 Web 挂马感染机制。"
      },
      {
        "text": "ソーシャルエンジニアリング",
        "isCorrect": false,
        "rationale": "社会工程学（ソーシャルエンジニアリング／Social Engineering）利用人性弱点（如冒充 IT 管理员诱骗密码）进行诈骗获取敏感信息。"
      }
    ],
    "hint": "注意攻击者通过入侵<b>上游第三方组件或供应商</b>间接危害下游企业的攻击类型（Supply Chain）。"
  },
  {
    "questionNumber": 14,
    "question": "某公司服务器遭受了黑客的无文件恶意软件（Fileless Malware）攻击，攻击者仅将恶意代码注入在系统内存（RAM）中运行，未在硬盘上留下任何落地文件痕迹。为了在不破坏现场证据、保障证据法律有效性（Chain of Custody）的前提下进行调查，安全专家采用了专门的技术对服务器的内存镜像、网络连接状态及挥发性寄存器数据进行紧急提取与分析。这种针对网络犯罪现场进行数据提取、证据固定与分析的技术被称为是什么？",
    "diagram": "  [ 发生黑客攻击事件 ]\n         │\n         ▼ ( 紧急保全内存 RAM 挥发性证据 )\n  ┌──────────────────────────┐\n  │ デジタルフォレンジック   │ ──► [ 提取内存镜像与系统痕迹 ]\n  └─────────────┬────────────┘\n                ▼\n  [ 还原入侵过程，提供具有法律效力的报告 ]",
    "answerOptions": [
      {
        "text": "デジタルフォレンジック",
        "isCorrect": true,
        "rationale": "数字取证/电子取证（デジタルフォレンジック／Digital Forensics）是指对计算机系统中的电子数据进行识别、保全、提取、分析与审查，以还原事故真相并提供符合法律要求的诉讼证据的过程。"
      },
      {
        "text": "逆コンパイル",
        "isCorrect": false,
        "rationale": "反编译（逆コンパイル／Decompilation）是指将二进制可执行文件还原为高级语言源代码的过程，属于逆向工程的一个特定步骤。"
      },
      {
        "text": "サンドボックス解析",
        "isCorrect": false,
        "rationale": "沙箱解析（サンドボックス解析／Sandbox Analysis）是指在隔离的虚拟环境中运行未知怀疑文件，观察其行为特征以判定是否包含恶意代码。"
      },
      {
        "text": "スレットハンティング",
        "isCorrect": false,
        "rationale": "威胁猎人/威胁猎捕（スレットハンティング／Threat Hunting）是指安全人员主动在企业网络内搜寻尚未触发自动化告警的隐蔽潜伏威胁。"
      }
    ],
    "hint": "寻找指代对计算机犯罪现场进行<b>数据提取、证据保全与法律分析</b>的技术术语（Forensics）。"
  },
  {
    "questionNumber": 15,
    "question": "某中小型企业由于缺乏专职的 Web 安全专家，无法独立维护和动态调优自建 WAF 的复杂特征码（Signature）规则库，导致每次规则更新都容易引发业务误阻断。为了降低运维人力成本，企业决定将防护迁移至云端服务商提供的 SaaS 型 WAF 方案：由云厂商的专业安全团队统一负责后端的规则库更新、零日漏洞虚拟补丁推送以及 False Positive 调优，企业只需更改 DNS 解析将流量引至云端即可。这种由外部专家团队全托管运维的 WAF 服务模式被称为是什么？",
    "diagram": "  [ 用户流量 ] ──► [ 云端托管 WAF (云厂商专业团队全自动调优规则) ]\n                                      │\n                                      ▼ (过滤后纯净流量)\n                             [ 企业后端 Web 服务器 ]",
    "answerOptions": [
      {
        "text": "マネージドクラウド型WAF",
        "isCorrect": true,
        "rationale": "托管型/云型 WAF（マネージドクラウド型WAF／Cloud Managed WAF）将 WAF 部署在云端，由服务商的专业团队负责特征码更新与规则调优（Managed Ruleset），企业无需承担繁重的运维成本。"
      },
      {
        "text": "オンプレミス型WAF",
        "isCorrect": false,
        "rationale": "本地部署型 WAF（オンプレミス型WAF／On-Premises WAF）需要企业自行采购硬件并部署在自家数据中心，所有的规则维护和升级均需内部团队完成。"
      },
      {
        "text": "ホスト型IDS",
        "isCorrect": false,
        "rationale": "基于主机的入侵检测系统（HIDS／Host-based IDS）安装在单个服务器操作系统内部，仅监控该台主机的系统日志与文件变更，非云端流量清洗服务。"
      },
      {
        "text": "ソフトウェア型WAF",
        "isCorrect": false,
        "rationale": "软件型 WAF（ソフトウェア型WAF）以插件或模块形式安装在 Web 服务器（如 Nginx/IIS）内部，依然依赖内部运维人员自行配置调优规则。"
      }
    ],
    "hint": "寻找由<b>外部专业安全厂商在云端全权托管规则调优与维护</b>的 WAF 部署模式。"
  }
];
console.log("成功加载题库！");