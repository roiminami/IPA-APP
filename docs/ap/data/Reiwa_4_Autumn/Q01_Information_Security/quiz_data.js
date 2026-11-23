// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某大型企业在部署终端安全防护架构时，发现传统基于特征码（パターンマッチング）杀毒软件无法识别通过代码混淆（難読化）及无文件攻击（ファイルレス攻撃）的新型潜伏恶意软件。为了实现对感染终端的早期发现、行为监控、快速抑止及被害范围摸底，企业决定在所有办公 PC 上部署 Agent，并建立中央管理服务器统一接收进程通信与文件操作日志。这种专注于端点行为监控与事件快速响应的技术被称为是什么？",
    "diagram": "  [ 端点 PC (Agent) ] ──( 监控进程/通信/文件日志 )──► [ EDR 管理服务器 ]\n         │                                                   │\n         │ (检测到 ICMP 扫描 / C&C 通信)                       ▼\n         └◄─────── ( 下发指令: 自动切断网络隔离端末 )───────────┘",
    "answerOptions": [
      {
        "text": "EDR",
        "isCorrect": true,
        "rationale": "端点检测与响应（EDR／Endpoint Detection and Response）通过在端点（PC/服务器）安装 エージェント，持续收集进程、网络通信与文件操作日志，利用行为分析实时检测未知恶意软件的潜伏威胁，并在发现异常时提供隔离终端（端末隔離）、阻断进程等紧急响应手段。"
      },
      {
        "text": "SIEM",
        "isCorrect": false,
        "rationale": "安全信息和事件管理（SIEM／Security Information and Event Management）侧重于跨设备（防火墙、路由器、服务器、应用）日志的全局集中收集与关联分析，并不直接安装在端点上执行进程级的监控与端点自动化网络隔离。"
      },
      {
        "text": "DLP",
        "isCorrect": false,
        "rationale": "数据防泄漏系统（DLP／Data Loss Prevention）专门用于监控与阻止敏感数据（如个人信息、机密文件）通过邮件、USB、网页等渠道未经授权地向外传输，并非用于恶意软件入侵后的端点行为监控与攻击遏制。"
      },
      {
        "text": "NDR",
        "isCorrect": false,
        "rationale": "网络检测与响应（NDR／Network Detection and Response）通过旁路部署在网络节点上分析全局流量（Flow/Packet），虽然能检测异常通信，但无法直接监控端点内部的本地进程创建、注册表修改等终端行为。"
      }
    ],
    "hint": "注意题干中强调的<b>端点 Agent 日志收集</b>、<b>行为监控（挙動監視）</b>以及针对潜伏恶意软件的<b>自动隔离与快速响应（端末隔離・応答）</b>机制。"
  },
  {
    "questionNumber": 2,
    "question": "某企业将其 DMZ 区域内的外部 DNS 服务器（外部DNSサーバ）错误地配置为了对互联网开放的递归查询缓存服务器（開放型キャッシュサーバ／Open Resolver）。黑客利用此配置缺陷，伪造受害者目标 IP 作为请求源地址，向该 DNS 服务器发送大量高倍率放大响应的 DNS 查询请求（如 ANY 查询），导致大量巨型 DNS 应答报文涌向受害者服务器并致其网络瘫痪。这种利用公共 DNS 踏板放大流量的拒绝服务攻击被称为是什么？",
    "diagram": "  [ 攻击者 (伪造源 IP=受害者) ] ──► [ Open Resolver 外部 DNS ]\n                                           │\n                                           ▼ (应答报文成倍放大发送)\n                                    [ 受害者 Target 服务器 ] (网络瘫痪!)",
    "answerOptions": [
      {
        "text": "DNSリフレクション攻撃",
        "isCorrect": true,
        "rationale": "DNS 反射放大攻击（DNSリフレクション攻撃／DNS Amplification Attack）属于 DDoS 攻击的一种。攻击者伪造目标受害者的源 IP 向开放递归查询的 DNS 服务器发送小尺寸查询包，DNS 服务器将体积巨大的应答包反射发给受害者，从而以极小带宽打爆受害者网络带宽。"
      },
      {
        "text": "DNSキャッシュポイズニング",
        "isCorrect": false,
        "rationale": "DNS 缓存污染（DNSキャッシュポイズニング／DNS Cache Poisoning）是指攻击者向 DNS 缓存服务器注入伪造的域名解析记录，将合法域名重定向至钓鱼网站，目的是窃取凭证而非发起流量淹没型 DDoS 攻击。"
      },
      {
        "text": "DNSフットプリンティング",
        "isCorrect": false,
        "rationale": "DNS 足迹侦察（DNSフットプリンティング／DNS Footprinting）是攻击者在攻击前搜集目标域名 Zone 信息、NS 记录、MX 记录等网络拓扑情报的前期侦察行为，不属于破坏可用性的 DDoS 攻击。"
      },
      {
        "text": "DNSゾーン転送攻撃",
        "isCorrect": false,
        "rationale": "DNS 区域传送攻击（DNSゾーン転送攻撃）是指利用 DNS 主从服务器配置漏洞（AXFR 没限制 IP），非法下载整个 DNS 域名的 Zone 数据库文件以获取内部网络拓扑信息。"
      }
    ],
    "hint": "请关注<b>伪造源 IP（IPスプーフィング）</b>、<b>开放式 DNS 缓存踏板（Open Resolver）</b>以及<b>流量倍率放大反射给受害者</b>的 DDoS 特征。"
  },
  {
    "questionNumber": 3,
    "question": "为了防止冒充本公司域名的垃圾邮件与恶意发信，某企业在域名 DNS 的 TXT 记录中公布了自身合法邮件发送服务器的 IP 地址列表。当外部邮件中继服务器（メール中間サーバ）收到带有该域名的邮件时，会查询该域名 DNS 上的 TXT 记录，并核对发信方 SMTP 连接的物理 IP 地址是否匹配。这种基于 DNS 的发信源域名认证技术被称为是什么？",
    "diagram": "  [ 发信方 MAIL FROM: user@p-sha.com ] ──(SMTP 连接 IP: 1.2.3.4)──► [ 受信方邮件服务器 ]\n                                                                   │\n  [ p-sha.com DNS ] ◄──( 1. 查询 TXT/SPF 记录: ip4:1.2.3.4 )────────┘\n         │\n         └──────► ( 2. 核对 IP 匹配成功 ──► 确认未伪造发信源 )",
    "answerOptions": [
      {
        "text": "SPF",
        "isCorrect": true,
        "rationale": "发件人策略框架（SPF／Sender Policy Framework）是一种发信源域名认证技术（送信元ドメイン認証）。发信方在 DNS 的 TXT/SPF 记录中注册许可发信的 IP 地址，受信方邮件服务器通过核对 SMTP 连接的真实 IP 是否属于该列表，来识别 Mail From 伪造（なりすまし）。"
      },
      {
        "text": "DKIM",
        "isCorrect": false,
        "rationale": "域名密钥识别邮件（DKIM／DomainKeys Identified Mail）也是域名认证技术，但它依赖发信方服务器使用私钥对邮件 Header/Body 附加电子签名（電子署名），受信方用 DNS 公钥验签，而非直接核对连接 IP。"
      },
      {
        "text": "DMARC",
        "isCorrect": false,
        "rationale": "基于域的信息文讯、报告和一致性（DMARC／Domain-based Message Authentication, Reporting, and Conformance）建立在 SPF 与 DKIM 认证基础之上，用于定义当 SPF 或 DKIM 认证失败时（如 Reject/Quarantine）接收方应执行的处理策略与报告机制。"
      },
      {
        "text": "STARTTLS",
        "isCorrect": false,
        "rationale": "STARTTLS 是一种协议扩展指令，允许在明文 SMTP/POP3/IMAP 连接建立后将其升级为 TLS 加密传输通道，主要保障传输过程中的机密性，并不验证邮件发件人域名的真伪。"
      }
    ],
    "hint": "注意<b>在 DNS TXT 记录中注册合法 IP 列表</b>以及<b>受信服务器核对 SMTP 发信源 IP 地址</b>的技术标志。"
  },
  {
    "questionNumber": 4,
    "question": "某潜伏在办公 PC 上的恶意软件（マルウェア）在完成初步感染后，为了横向移动（横移動／Lateral Movement）扩展战果，需要探测内网中哪些主机开启了高危服务端口。该恶意软件向目标 IP 批量发送 TCP connection 请求中的 SYN 数据包，在收到目标返回的 SYN/ACK 响应后立即发送 RST 数据包中断连接（不完成三次握手），从而极具隐蔽性地获取端口开放状态。这种网络探测手法被称为是什么？",
    "diagram": "  [ 感染 PC ] ─────── TCP SYN ─────────► [ 目标主机 ]\n             ◄────── TCP SYN/ACK ──────  (确认 PORT 开放!)\n             ─────── TCP RST ──────────► (半开扫描/不留下完整 Log)",
    "answerOptions": [
      {
        "text": "SYNスキャン",
        "isCorrect": true,
        "rationale": "SYN 扫描（SYNスキャン／SYN Stealth Scan）又称半开放扫描（ハーフオープンスキャン）。扫描者仅发送 SYN 包，若收到 SYN/ACK 则表明端口开放，随后立即回传 RST 断开连接。因未建立完整 TCP 三次握手，许多传统应用日志不会记录此连接，具有很高的隐蔽性。"
      },
      {
        "text": "FINスキャン",
        "isCorrect": false,
        "rationale": "FIN 扫描（FINスキャン）向目标端口发送仅携带 FIN 标志位的数据包。根据 RFC 793 规定，关闭的端口会回复 RST，而开放的端口会无视（不回复）。该方法适用于突破某些不检查 FIN 的旧式包过滤防火墙。"
      },
      {
        "text": "UDPスキャン",
        "isCorrect": false,
        "rationale": "UDP 扫描（UDPスキャン）向目标端口发送 UDP 报文。若端口关闭，目标操作系统通常会返回 ICMP Port Unreachable 报文；若端口开放则可能无响应或返回 UDP 数据，这与 TCP SYN 半开握手机制截然不同。"
      },
      {
        "text": "IPスウィープ",
        "isCorrect": false,
        "rationale": "IP 扫描/扫射（IPスウィープ／IP Sweep）是指对一个 IP 地址段遍历发送 ICMP Echo Request (Ping) 以寻找活跃在线的主机，侧重于搜索“有哪些 IP 活着”，而非针对单一主机的具体“端口（PORT）”进行开放性检测。"
      }
    ],
    "hint": "请关注<b>发送 SYN 包</b>、<b>根据 SYN/ACK 判断端口开放</b>以及<b>不完成三次握手的半开扫描（ハーフオープンスキャン）</b>。"
  },
  {
    "questionNumber": 5,
    "question": "恶意软件在入侵内部局域网后，通常首先需要对所在网段及跨网段的所有 IP 地址进行活跃主机排查。它通过向网段内每个 IP 地址依次发送 ICMP Echo Request 数据包，并监听是否有 ICMP Echo Reply 返回，从而快速梳理出当前内网中所有在线运行的主机 IP 列表。这种常用的网络侦察协议机制被称为是什么？",
    "diagram": "  [ 感染 PC ] ───( ICMP Echo Request )───► [ 目标 IP 192.168.1.5 ]\n             ◄───( ICMP Echo Reply )─────  (确认该 IP 主机在线!)",
    "answerOptions": [
      {
        "text": "ICMPエコー要求",
        "isCorrect": true,
        "rationale": "ICMP 回显请求（ICMPエコー要求／ICMP Echo Request）是 Ping 命令使用的底层协议机制。网络主机会向目标发送 Echo Request (Type 8)，目标若在线且网络正常则需回应 Echo Reply (Type 0)。恶意软件常利用此机制批量扫描（Ping Sweep）摸清内网活跃主机。"
      },
      {
        "text": "ARPリクエスト",
        "isCorrect": false,
        "rationale": "ARP 请求（ARPリクエスト）是在同一二层广播域（L2 Segment）内通过广播询问指定 IP 对应 MAC 地址的机制，无法跨越三层路由器（L3SW）对社内其他异地子网Segment进行主机探索。"
      },
      {
        "text": "DHCPディスカバー",
        "isCorrect": false,
        "rationale": "DHCP 发现报文（DHCPディスカバー）是客户端刚接入网络时，以广播形式寻找 DHCP 服务器以获取动态 IP 地址的报文，与向远程目标探测主机存活无关。"
      },
      {
        "text": "IGMPメンバースノープ",
        "isCorrect": false,
        "rationale": "IGMP 组播成员侦听（IGMPスヌーピング／IGMP Snooping）是 L2 交换机监听主机与路由器间 IGMP 报文以优化组播流量分发的机制，不属于攻击者探测活跃 IP 的工具。"
      }
    ],
    "hint": "注意<b>向所有 IP 依次发送通信并等待 Echo 响应</b>以确认<b>主机存活（ホストの稼働状態）</b>的底层协议特征。"
  },
  {
    "questionNumber": 6,
    "question": "某特种木马病毒（如 Emotet）在成功潜入企业内部办公 PC 后，会自动发起向公网特定域名的加密 HTTPS 连接。该公网服务器负责向受感染 PC 下发指令（如横向探测、窃取凭证、分发其他恶意载荷），并接收受害 PC 传回的敏感文件。这种在网络攻击中扮演“指挥中心”与控制中枢的外部服务器被称为是什么？",
    "diagram": "  [ 感染 PC (受控端) ] ──( 加密 HTTPS 通信/下载指令/传出机密 )──► [ C&C 服务器 ]\n                                                                 │\n                                                 [ 攻击者 (Control) ]",
    "answerOptions": [
      {
        "text": "C&Cサーバ",
        "isCorrect": true,
        "rationale": "指令与控制服务器（C&Cサーバ／Command and Control Server / C2）是攻击者在互联网上架设的控制节点。被感染的僵尸主机（Bot）会主动连接 C&C 服务器接收控制指令、下载新模块并将窃取的数据上传至该服务器。"
      },
      {
        "text": "プロキシサーバ",
        "isCorrect": false,
        "rationale": "代理服务器（プロキシサーバ／Proxy Server）是企业部署在 DMZ 用于代内网客户端访问外网 Web 的正向中继，虽处理通信但本身不是攻击者下发恶意指令的控制源头。"
      },
      {
        "text": "DNSキャッシュサーバ",
        "isCorrect": false,
        "rationale": "DNS 缓存服务器（DNSキャッシュサーバ）负责为内部网络提供域名递归解析与缓存服务，提高域名解析效率，非攻击者的 Command 基础设施。"
      },
      {
        "text": "STUNサーバ",
        "isCorrect": false,
        "rationale": "STUN 服务器（STUNサーバ／Session Traversal Utilities for NAT）用于 VoIP/WebRTC 等 P2P 通信中协助 NAT 后端的终端进行 NAT 穿透与公网 IP 发现，与恶意软件控制机制无关。"
      }
    ],
    "hint": "寻找<b>向恶意软件下发攻击指令（指令・制御）</b>并<b>接收窃取数据</b>的外部恶意中枢服务器术语。"
  },
  {
    "questionNumber": 7,
    "question": "企业 IT 部门在实施系统补丁管理时，为了防止未经测试的补丁引发业务软件崩溃，系统管理员会在隔离的验证网络（検証LAN）中进行为期一周的兼容性测试。测试通过后，管理员将更新包上传至内部专用服务器，企业内所有 PC 在开机时会自动向该服务器发起请求并完成安全补丁的静默安装。这种在企业内部专门用于分发 OS 更新与补丁的服务器被称为是什么？",
    "diagram": "  [ 互联网 ] ──► [ 検証LAN 测试补丁 ] ──► [ 内部配布服务器 (WSUS等) ]\n                                                     │\n  [ 终端 PC ] ◄──────( 开机自动下载并更新补丁 )─────────┘",
    "answerOptions": [
      {
        "text": "配布サーバ",
        "isCorrect": true,
        "rationale": "补丁分发服务器（配布サーバ／Patch Distribution Server，如 WSUS）。企业为了节省外部带宽并统一管理补丁合规性，在内部集中下载并验证补丁后，由配布サーバ向内部各终端 PC 统一分发并推送安装补丁。"
      },
      {
        "text": "代理店サーバ",
        "isCorrect": false,
        "rationale": "代理店服务器（代理店サーバ）是企业面向外部销售代理商提供商品查询、报价单生成等 B2B 业务服务的应用服务器，不用于内部 IT 的补丁推送。"
      },
      {
        "text": "外部DNSサーバ",
        "isCorrect": false,
        "rationale": "外部 DNS 服务器（外部DNSサーバ）放置于 DMZ，专门用于向互联网发布企业公网域名的 A 记录/MX 记录，绝不能用于内部 PC 软件补丁的分发。"
      },
      {
        "text": "メール中間サーバ",
        "isCorrect": false,
        "rationale": "邮件中继服务器（メール中間サーバ）负责隔离内外网邮件传输并执行 SPF 校验或病毒扫描，不具备客户端软件与 OS 补丁分发功能。"
      }
    ],
    "hint": "注意<b>向终端 PC 统一分发（配布）安全补丁（セキュリティパッチ）</b>的内部服务器角色。"
  },
  {
    "questionNumber": 8,
    "question": "某企业的网络安全拓扑划分为互联网（Internet）、DMZ 区域及内部 LAN。为了实现纵深防御，企业在网络边界部署了一台关键安全设备。该设备严格配置访问控制列表（ACL），仅允许“互联网 ◄► DMZ”以及“内部 LAN ◄► DMZ”的必要业务通信，坚决禁止互联网直接发起对内部 LAN 的访问，并全天候记录通过与阻断日志。这种网络边界隔离防护设备被称为是什么？",
    "diagram": "  [ インターネット ] ◄──┐ (只允许必要通信)\n                       ▼\n  [ 内部 LAN ] ◄──► [ FW (ファイアウォール) ] ◄──► [ DMZ 区域 ]\n  (绝对禁止直连!)",
    "answerOptions": [
      {
        "text": "FW",
        "isCorrect": true,
        "rationale": "防火墙（FW／ファイアウォール／Firewall）是网络拓扑边界的核心安全隔离设备。它依据五元组安全策略控制不同网络安全域（如 Internet、DMZ、Internal LAN）之间的访问，阻断非授权流量（如禁止外网直接访问内网），并生成通信与遮断日志。"
      },
      {
        "text": "L2SW",
        "isCorrect": false,
        "rationale": "二层交换机（L2SW／Layer 2 Switch）工作在 OSI 数据链路层，根据 MAC 地址表进行局域网内数据帧的高速转发，不具备基于 IP/Port 协议策略的访问控制与防火墙防火隔离功能。"
      },
      {
        "text": "L3SW",
        "isCorrect": false,
        "rationale": "三层交换机（L3SW／Layer 3 Switch）结合了二层交换与三层 IP 路由选择功能，主要用于企业内部 VLAN 间的数据高速线速转发，虽然部分支持简易 ACL，但无法替代专业的状态检测防火墙进行安全域隔离。"
      },
      {
        "text": "ロードバランサ",
        "isCorrect": false,
        "rationale": "负载均衡器（ロードバランサ / Load Balancer）主要工作在应用层或传输层，用于将访问流量分发至后端的多个服务器节点，不作为内外网安全策略隔离的核心边界防火墙。"
      }
    ],
    "hint": "寻找<b>掌控网络区域边界、严格执行访问控制（アクセス制御）并隔离内网与公网</b>的核心设备缩写。"
  },
  {
    "questionNumber": 9,
    "question": "在邮件安全领域，仅靠 SPF 无法防止邮件在传输过程中被篡改或基于 MAIL FROM 与 Header From 不一致的欺诈。为了解决这一痛点，发信方邮件服务器在发送邮件时，使用私钥对邮件 Header 和 Body 生成数字签名并附加在邮件头中；受信方服务器收到后，向发信方 DNS 查询公钥并进行验签。这种基于非对称加密技术的邮件防篡改与发信源认证机制被称为是什么？",
    "diagram": "  [ 发信方服务器 ] ──( 使用私钥生成电子签名 )──► [ 带签名的邮件 ]\n                                                       │\n  [ 发信方 DNS ] ◄──( 1. 获取 DNS 中的公钥 )─────── [ 受信方服务器 ]\n       │\n       └───────────► ( 2. 验签成功 ──► 确认未篡改且来源真实 )",
    "answerOptions": [
      {
        "text": "DKIM",
        "isCorrect": true,
        "rationale": "域名密钥识别邮件（DKIM／DomainKeys Identified Mail）利用公钥密码体制（非对称加密）。发信方用私钥对邮件附加数字签名（電子署名），受信方通过发信方 DNS 发布的 TXT 记录获取公钥解密验签，从而验证邮件来源真实性并确保邮件内容未被篡改。"
      },
      {
        "text": "SPF",
        "isCorrect": false,
        "rationale": "SPF 仅通过核对发信服务器的 IP 地址是否在 DNS TXT 记录列表中来进行认证，并不对邮件内容附加数字签名，因此无法校验邮件在传输过程中是否被中途篡改。"
      },
      {
        "text": "S/MIME",
        "isCorrect": false,
        "rationale": "S/MIME 是端到端（End-to-End）的邮件加密与签名标准，要求邮件发送者与接收者的客户端（MUA）均安装数字证书；而 DKIM 是在邮件服务器（MTA）层面自动完成的，对终端用户无感知。"
      },
      {
        "text": "DNSSEC",
        "isCorrect": false,
        "rationale": "DNS 安全扩展（DNSSEC）用于给 DNS 域名解析应答记录本身附加数字签名，防止 DNS 缓存污染和欺骗，并非用于电子邮件 Header 和正文的数字签名认证。"
      }
    ],
    "hint": "注意<b>发信方服务器附加数字签名（電子署名）</b>以及<b>受信方通过 DNS 获取公钥验签</b>的邮件安全协议。"
  },
  {
    "questionNumber": 10,
    "question": "某用户在登录内部 Web 应用程序后，服务器为其分配了一个唯一的 Session ID 并存放在 Cookie 中。攻击者通过 XSS 漏洞或网络监听获取了该用户的 Session ID，随后在自己的浏览器中注入该 Cookie，从而无需输入账号密码就直接以该合法用户的身份进入系统执行敏感操作。这种针对 Web 身份验证会话的攻击被称为是什么？",
    "diagram": "  [ 合法用户 ] ──( 登录成功, 获得 Session ID: ABC )──► [ Web 服务器 ]\n                                                           ▲\n  [ 攻击者 ] ───( 盗取 Session ID: ABC 并直接注入伪造 )──────┘ (成功冒充用户身份!)",
    "answerOptions": [
      {
        "text": "セッションハイジャック",
        "isCorrect": true,
        "rationale": "会话劫持（セッションハイジャック／Session Hijacking）是指攻击者通过窃取、预测或固定（Session Fixation）合法用户的 Session ID，冒用该 ID 向服务器发送请求，从而绕过身份认证直接劫持已建立的合法会话。"
      },
      {
        "text": "クロスサイトリクエストフォージェリ",
        "isCorrect": false,
        "rationale": "跨站请求伪造（CSRF／Cross-Site Request Forgery）是诱导受害者在已登录状态下点击恶意链接，利用受害者的浏览器自动带上 Cookie 发起非预期操作请求，攻击者自身并没有直接获取或控制受害者的 Session ID。"
      },
      {
        "text": "SQLインジェクション",
        "isCorrect": false,
        "rationale": "SQL 注入（SQLインジェクション／SQL Injection）是指在 Web 表单或输入参数中嵌入恶意 SQL 命令，破坏数据库查询逻辑以非法获取或修改后端数据库数据，不属于会话凭证窃取攻击。"
      },
      {
        "text": "パスワードハッシュクラック",
        "isCorrect": false,
        "rationale": "密码哈希破解（パスワードハッシュクラック / Password Hash Cracking）是指通过彩虹表或暴强字典撞库破解数据库中存储的密码 Hash 值，属于口令破解而非直接劫持内存会话。"
      }
    ],
    "hint": "寻找<b>盗取 Cookie 中的 Session ID / 凭证</b>并<b>接管已登录会话状态</b>的攻击术语。"
  },
  {
    "questionNumber": 11,
    "question": "某企业放置在 DMZ 区域的邮件服务器由于配置疏忽，开启了允许任意外部 IP 未经身份验证即可向任意外部邮箱转发邮件的功能（Open Relay）。垃圾邮件发送者发现此漏洞后，将其作为踏板批量发送数十万封跨国垃圾邮件与钓鱼邮件，导致企业邮件服务器 IP 被列入全球黑名单。这种邮件服务器配置缺陷引发的安全风险被称为是什么？",
    "diagram": "  [ 垃圾邮件发送者 ] ──( 未认证请求 )──► [ DMZ 开放中继邮件服务器 ]\n                                                 │\n                                                 ▼ (任意转发垃圾邮件!)\n                                         [ 全球受害者邮箱 ]",
    "answerOptions": [
      {
        "text": "メール不正中継",
        "isCorrect": true,
        "rationale": "邮件非法中继（メール不正中継／Open Relay / Unauthorized Mail Relay）是指邮件服务器没有配置发信认证（如 SMTP-AUTH）或 IP 限制，允许任意第三方借由该服务器向第三方邮箱发送邮件。常被 Spam 发送者滥用作为匿名发件踏板。"
      },
      {
        "text": "メールヘッダインジェクション",
        "isCorrect": false,
        "rationale": "邮件头注入（メールヘッダインジェクション／Mail Header Injection）是利用 Web 表单未对换行符（\\r\\n）过滤的漏洞，在邮件 Header 中强行注入 Bcc、Cc 等字段以非法群发邮件，属于 Web 应用代码漏洞而非 SMTP 服务器的中继配置漏洞。"
      },
      {
        "text": "フィッシング",
        "isCorrect": false,
        "rationale": "网络钓鱼（フィッシング／Phishing）是指通过伪造银行或知名企业邮件诱导受害者进入假网站输入账号密码的社会工程学诈骗手法，并非邮件服务器自身的中继功能缺陷。"
      },
      {
        "text": "ドメイン名スプーフィング",
        "isCorrect": false,
        "rationale": "域名伪造（ドメイン名スプーフィング / Domain Spoofing）是指在邮件 Mail From 或 Header 中伪造发件人域名，与服务器是否开启 Open Relay 中继转发无直接必然联系。"
      }
    ],
    "hint": "注意<b>未经身份验证利用开放服务器中继（中継）转发邮件给第三方</b>的描述。"
  },
  {
    "questionNumber": 12,
    "question": "为了规范内部员工的互联网访问行为并防止访问恶意的 C&C 控制域名，某企业要求所有办公 PC 对外网 HTTP/HTTPS 的访问必须统一经过部署在 DMZ 区域的一台代理设备。该设备负责接收客户端请求，代为向公网 Web 服务器发起访问，同时对 URL 进行安全过滤并记录详细的访问日志。这种位于客户端与目标 Web 服务器之间的代理架构被称为是什么？",
    "diagram": "  [ 办公 PC ] ───( 访问 HTTP/HTTPS 请求 )───► [ プロキシサーバ (DMZ) ]\n                                                   │\n                                                   ▼ (代为发起请求 & 记录 Log)\n                                            [ 互联网 Web 服务器 ]",
    "answerOptions": [
      {
        "text": "プロキシサーバ",
        "isCorrect": true,
        "rationale": "代理服务器（プロキシサーバ／Proxy Server / Forward Proxy）位于客户端与外部 Web 服务器之间。它代表客户端向外网发送请求，集中提供 Web 缓存、URL 过滤、访问审计日志以及防止内网 IP 直接暴露等安全功能。"
      },
      {
        "text": "リバースプロキシ",
        "isCorrect": false,
        "rationale": "反向代理（リバースプロキシ／Reverse Proxy）部署在企业服务器端前方，代表后端 Web 服务器接收公网用户的请求并执行负载均衡或 SSL 卸载，其服务对象是外部访客而非内部客户端。"
      },
      {
        "text": "DNSキャッシュサーバ",
        "isCorrect": false,
        "rationale": "DNS 缓存服务器（DNSキャッシュサーバ）仅负责将域名翻译为 IP 地址，不负责代为转发 HTTP/HTTPS 的网页正文数据流及 URL 审计。"
      },
      {
        "text": "WebAPサーバ",
        "isCorrect": false,
        "rationale": "Web 应用服务器（WebAPサーバ）是专门用于运行 Java/Node/Python 等业务逻辑代码并处理数据库交互的后端服务器，不作为客户端出网的代理网关。"
      }
    ],
    "hint": "寻找<b>代为客户端访问外网 Web（プロキシ）</b>并<b>集中记录出网 URL 日志（通信ログ）</b>的中间设备。"
  },
  {
    "questionNumber": 13,
    "question": "某企业在部署 EDR 系统后，管理服务器在凌晨检测到某台财务 PC 正持续向外网可疑 IP 发送大量 ICMP 扫描包并尝试下载恶意可执行文件。为了阻止恶意软件继续在内网进行横向渗透（横移動）以及将机密数据外泄，EDR 系统 Agent 自动触发了最高级别的紧急抑止响应。这一自动化应急处置动作通常是什么？",
    "diagram": "  [ EDR 管理服务器 ] ──( 检测到高危恶意攻击行为! )──► [ 感染终端 Agent ]\n                                                             │\n                                                             ▼\n                                              [ 自动切断终端网络通信 (端末隔離) ]",
    "answerOptions": [
      {
        "text": "端末隔離",
        "isCorrect": true,
        "rationale": "终端隔离（端末隔離／Network Containment / Isolation）是 EDR 等安全系统在确认终端感染后的核心应急动作。Agent 通过在操作系统底层（如 Windows 过滤驱动）阻断除了与 EDR 管理服务器通信之外的所有网络数据包，彻底阻止恶意软件横向扩散与数据外泻。"
      },
      {
        "text": "パッチ自動適用",
        "isCorrect": false,
        "rationale": "自动打补丁（パッチ自動適用）属于预防性的脆弱性管理措施，用于修补系统已知漏洞，但在终端已经急性感染恶意软件并进行横向渗透的当下无法阻断现有的恶意进程。"
      },
      {
        "text": "データ暗号化",
        "isCorrect": false,
        "rationale": "数据加密（データ暗号化）用于防止设备丢失或硬盘被盗时数据泄露，当系统处于运行状态且被勒索软件/木马接管时，本地加密无法阻断网络攻击通信。"
      },
      {
        "text": "VLANセグメント変更",
        "isCorrect": false,
        "rationale": "变更 VLAN 网段（VLAN変更）通常需要动态修改 802.1X 或交换机 Port 策略，在自动化抑止响应中不如直接在端点上通过 EDR 驱动层下发网络隔离命令快速高效。"
      }
    ],
    "hint": "注意<b>防止内网横向移动（内部ネットワーク探索を防ぐ）</b>与<b>阻止机密外泄</b>最直接的端点紧急切断措施。"
  },
  {
    "questionNumber": 14,
    "question": "攻击者通过伪装成正规业务发票的电子邮件，向目标企业发送带有特定扩展名（如 .docm 或 .xlsm）的文档附件。当不知情的用户打开该文档并点击“启用内容”允许脚本运行后，内置的自动执行代码会被激活，隐蔽地调用 PowerShell 从外部 C&C 服务器下载勒索软件本体。这种通过文档脚本进行感染的载体模式被称为是什么？",
    "diagram": "  [ 钓鱼邮件 ] ──► [ 打开 Office 附件 ] ──► [ 运行 VBA 脚本 ] ──► [ C&C 下载病毒本体 ]",
    "answerOptions": [
      {
        "text": "マクロウイルス",
        "isCorrect": true,
        "rationale": "宏病毒/宏恶意软件（マクロウイルス／Macro Virus）利用 Microsoft Office 等软件内置的 VBA (Visual Basic for Applications) 宏功能编写恶意代码。它通常通过伪造文档诱导用户启用宏，随后静默执行恶意脚本下载并安装恶意软件。"
      },
      {
        "text": "ブートセクタウイルス",
        "isCorrect": false,
        "rationale": "引导区病毒（ブートセクタウイルス／Boot Sector Virus）感染硬盘的 Master Boot Record (MBR) 或引导扇区，在操作系统加载前优先控制计算机，与 Office 办公文档中的 VBA 脚本无关。"
      },
      {
        "text": "トロイの木馬",
        "isCorrect": false,
        "rationale": "特洛伊木马（トロイの木馬 / Trojan Horse）泛指伪装成合法实用软件（如伪装成游戏或破解工具）吸引用户主动安装的恶意程序，而题干明确描述的是利用 Office“文档宏（マクロ）”作为感染机制。"
      },
      {
        "text": "スパイウェア",
        "isCorrect": false,
        "rationale": "间谍软件（スパイウェア／Spyware）强调的是恶意软件的“功能”（即潜伏收集键盘记录、浏览器历史等个人机密），并非描述利用“文档宏脚本”作为触发传播载体的方式。"
      }
    ],
    "hint": "注意<b>利用 Office 应用程序中的 VBA 脚本（マクロ）</b>作为恶意代码下载器触发感染的特征。"
  },
  {
    "questionNumber": 15,
    "question": "某黑客向企业的 DNS 缓存服务器发送大量伪造的 DNS 响应报文，在合法 DNS 服务器应答到达之前，成功将错误的 IP 地址写入了缓存服务器的域名映射表中。导致后续所有查询该合法域名的内部员工均被强制重定向至黑客搭建的假冒钓鱼网站。这种篡改 DNS 域名解析缓存的攻击手法被称为是什么？",
    "diagram": "  [ 黑客 ] ───( 发送伪造 DNS 响应 )───► [ DNS 缓存服务器 ] (写入虚假 IP 映射!)\n                                              ▲\n  [ 内部 PC ] ───( 查询合法域名 )────────────┘ ──► 重定向至 [ 钓鱼假网站 ]",
    "answerOptions": [
      {
        "text": "DNSキャッシュポイズニング",
        "isCorrect": true,
        "rationale": "DNS 缓存污染/中毒（DNSキャッシュポイズニング／DNS Cache Poisoning）攻击者通过预测 Transaction ID 并抢先向 DNS 缓存服务器发送伪造的 DNS 应答，将错误的 IP 地址注入缓存中，导致用户访问合法域名时被导向恶意钓魚网站。"
      },
      {
        "text": "DNSリフレクション攻撃",
        "isCorrect": false,
        "rationale": "DNS 反射攻击（DNSリフレクション攻撃）是利用开放 DNS 踏板发送成倍放大流量的 DDoS 攻击，目的是打垮目标网络可用性，并非篡改域名 IP 映射记录。"
      },
      {
        "text": "IPスプーフィング",
        "isCorrect": false,
        "rationale": "IP 伪造（IPスプーフィング／IP Spoofing）是指伪造 IP 数据包的源地址，它是许多攻击（如 DNS 反射、SYN Flood）的技术手段之一，但其本身不特指 DNS 缓存记录被篡改这一特定安全事件。"
      },
      {
        "text": "ARPポイズニング",
        "isCorrect": false,
        "rationale": "ARP 毒化（ARPポイズニング／ARP Poisoning / ARP Spoofing）是在局域网二层广播域内发送伪造 ARP 应答篡改网关的 MAC 地址表以实现中间人窃听（MITM），不涉及 DNS 域名解析层面的缓存欺骗。"
      }
    ],
    "hint": "寻找<b>向 DNS 缓存服务器注入虚假解析记录（キャッシュ汚染）</b>重定向用户的攻击术语。"
  }
];
console.log("成功加载题库！");