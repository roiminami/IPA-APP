// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某企业在使用 ISP 提供的光纤接入互联网时，发现内网的主机虽然可以正常浏览网页，但自建邮件服务器却无法直接向外部其他域名的 25 端口建立 TCP 连接发送邮件。经排查，这是由于 ISP 为了阻断内网中被木马感染的电脑或配置不当的邮件服务器向外大量散播垃圾邮件（スパムメール／Spam Mail），在网络边界对外发 25 端口流量实施了强制拦截机制。这种由 ISP 在网络外发出口处对 TCP 25 端口进行封锁的安全防御对策被称为是什么？",
    "diagram": "  [ 内网受感染PC / 邮件服务器 ]\n               │ (尝试建立 TCP 25 端口连接)\n               ▼\n  ┌──────────────────────────┐\n  │  ISP 边界路由 / 边界防火墙 │ (OP25B 策略生效)\n  └────────────┬─────────────┘\n               │ ✖ (强制拦截/遮断)\n               ▼\n     [ 互联网外部邮件服务器 ]",
    "answerOptions": [
      {
        "text": "OP25B",
        "isCorrect": true,
        "rationale": "出站 25 端口封锁（OP25B／Outbound Port 25 Blocking）是 ISP 为遏制垃圾邮件泛滥而采取的防御机制，它会拦截来自 ISP 网络内部非授权服务器发往外部 TCP 25 端口的邮件流量。"
      },
      {
        "text": "IPsec",
        "isCorrect": false,
        "rationale": "IP 安全协议（IPsec／Security Architecture for IP）是在网络层提供数据加密与认证的安全套件，主要用于建立 VPN 隧道，并不具备对特定端口进行垃圾邮件拦截的功能。"
      },
      {
        "text": "SPF",
        "isCorrect": false,
        "rationale": "发件人策略框架（SPF／Sender Policy Framework）是一种基于 DNS 记录的邮件发件人身份验证机制，用于接收方检测发件人地址是否被伪造，而不是由 ISP 封锁端口。"
      },
      {
        "text": "DNSSEC",
        "isCorrect": false,
        "rationale": "域名系统安全扩展（DNSSEC／DNS Security Extensions）通过对 DNS 数据进行数字签名来防止 DNS 缓存污染和域名劫持，与 SMTP 端口流量拦截控制无关。"
      }
    ],
    "hint": "请注意题干提到的由 <b>ISP 在边界出口封锁 TCP 25 端口</b> 以防止散播<b>垃圾邮件（スパムメール）</b>的技术。在日本 AP 考试中，该技术统称为 <b>OP25B（Outbound Port 25 Blocking）</b>。"
  },
  {
    "questionNumber": 2,
    "question": "当外部邮件服务器试图向某一域名（例如 example.jp）发送电子邮件时，首先需要通过 DNS 域名解析获取负责处理该域名邮件投递的目标邮件服务器的主机名及其优先级设置。在 DNS ゾーン（Zone）解析文件中，专门用来定义域名与接收邮件服务器之间映射关系及优先级权重的资源记录（Resource Record）被称为是什么？",
    "diagram": "  [ 外部发送方邮件服务器 ]\n               │ 1. 查询 example.jp 的邮件服务器记录\n               ▼\n  ┌──────────────────────────┐\n  │ DNS 服务器 (DNSサーバ)   │ (返回 MX 记录: serv.example.jp)\n  └────────────┬─────────────┘\n               │ 2. 获取主机名与优先级\n               ▼\n  [ 目标邮件服务器 (serv.example.jp) ]",
    "answerOptions": [
      {
        "text": "MXレコード",
        "isCorrect": true,
        "rationale": "邮件交换记录（MXレコード／Mail Exchange Record）是 DNS 用于指定接收特定域名电子邮件的邮件服务器主机名及其优先级的资源记录。"
      },
      {
        "text": "NSレコード",
        "isCorrect": false,
        "rationale": "域名服务器记录（NSレコード／Name Server Record）用于指定该 DNS 区域（Zone）由哪些权威 DNS 服务器负责解析，不直接映射邮件服务器。"
      },
      {
        "text": "PTRレコード",
        "isCorrect": false,
        "rationale": "指针记录（PTRレコード／Pointer Record）主要用于将 IP 地址反向解析为对应的域名（DNS 反向查询），而非将域名映射到邮件服务器。"
      },
      {
        "text": "SOAレコード",
        "isCorrect": false,
        "rationale": "起始授权机构记录（SOAレコード／Start of Authority Record）包含了 DNS 区域的基本管理信息（如主域名服务器、管理员邮箱、序列号与刷新定时器等）。"
      }
    ],
    "hint": "请关注题干中<b>指定域名接收邮件服务器主机名与优先级</b>的 DNS 资源记录。在日本 AP 考试中，负责邮件路由交换的记录被称为 <b>MXレコード（Mail Exchange Record）</b>。"
  },
  {
    "questionNumber": 3,
    "question": "在传统的 SMTP 协议中，由于缺乏对发件人身份的强制校验，容易导致邮件服务器被攻击者滥用作为匿名发送垃圾邮件的跳板。为了解决这一安全隐患，现代邮件系统在客户端提交待发送邮件时，要求客户端必须先通过账号密码的身份认证（如利用 Submission 端口 587），只有验证通过后服务器才允许接受并转发出送信邮件。这种增强 SMTP 协议身份鉴别能力的技术被称为是什么？",
    "diagram": "  [ 邮件客户端 (広報PC) ]\n               │ 1. 连接 Port 587 并提交账号密码\n               ▼\n  ┌──────────────────────────┐\n  │ 邮件服务器 (メールサーバ) │ (校验身份: SMTP 認証)\n  └────────────┬─────────────┘\n               │ 2. 验证通过，允许转发邮件\n               ▼\n     [ 目标外部邮件服务器 ]",
    "answerOptions": [
      {
        "text": "SMTP認証",
        "isCorrect": true,
        "rationale": "SMTP 身份验证（SMTP認証／SMTP AUTH）要求客户端在发送邮件前提交用户名和密码进行鉴别，能有效防止未授权用户借用服务器进行垃圾邮件中继。"
      },
      {
        "text": "POP before SMTP",
        "isCorrect": false,
        "rationale": "POP before SMTP 是一种较旧的过渡技术，要求用户先登录 POP3 服务器接收邮件（IP 被临时允许发信）然后再发送，容易被同一 IP 上的其他用户利用，安全性不如 SMTP 認証。"
      },
      {
        "text": "APOP",
        "isCorrect": false,
        "rationale": "认证 POST 局协议（APOP／Authenticated Post Office Protocol）是 POP3 协议下防范密码明文传输的接收认证扩展，与 SMTP 发送过程无关。"
      },
      {
        "text": "S/MIME",
        "isCorrect": false,
        "rationale": "安全多用途互联网邮件扩展（S/MIME／Secure/Multipurpose Internet Mail Extensions）是对邮件正文和附件进行公钥加密与数字签名的应用层安全标准，不属于 SMTP 连接鉴别。"
      }
    ],
    "hint": "注意题干描述的<b>客户端发信前需提供账号密码进行身份鉴别</b>机制。在日本 AP 考试中，这种提升 SMTP 通信安全的技术称为 <b>SMTP認証（SMTP AUTH）</b>。"
  },
  {
    "questionNumber": 4,
    "question": "某办公区内部部署了 20 台电脑，全部分配了私有 IP 地址（プライベートIPアドレス）。为了使所有电脑能够同时共享同一个由 ISP 分配的公有 IP 地址（グローバルIPアドレス）访问互联网，边界防火墙不仅转换数据包的 IP 地址，还会为每个内部连接动态分配并映射不同的传输层 TCP/UDP 端口号（ポート番号）。这种实现多个内网主机映射至单个公网 IP 不同端口的技术被称为是什么？",
    "diagram": "  [ 内网 PC-A: 192.168.0.10:5000 ]  [ 内网 PC-B: 192.168.0.20:5000 ]\n               │                                │\n               └───────────────┬────────────────┘\n                               ▼\n                  ┌──────────────────────────┐\n                  │ 防火墙 (FW1 / NAPT)      │ (转换 IP 与端口号)\n                  └────────────┬─────────────┘\n                               │ (公网 IP: w.x.y.z:10001 / w.x.y.z:10002)\n                               ▼\n                      [ 互联网目标服务器 ]",
    "answerOptions": [
      {
        "text": "NAPT",
        "isCorrect": true,
        "rationale": "网络地址端口转换（NAPT／Network Address Port Translation，又称 IP マスカレード）通过同时转换 IP 地址和端口号，允许多个私有 IP 地址共享单个公有 IP 地址访问外网。"
      },
      {
        "text": "静的NAT",
        "isCorrect": false,
        "rationale": "静态网络地址转换（静的NAT／Static NAT）采用 1:1 的固定映射关系将一个私有 IP 转换为一个公有 IP，无法实现多个内网主机共享单个公有 IP。"
      },
      {
        "text": "DHCP",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP／Dynamic Host Configuration Protocol）用于在局域网内自动分配 IP 地址、掩码及网关等网络参数，不具备地址转换功能。"
      },
      {
        "text": "Proxy",
        "isCorrect": false,
        "rationale": "代理服务器（プロキシ／Proxy）是在应用层替客户端发起网络请求的中转服务，不属于传输层/网络层的网络地址端口转换机制。"
      }
    ],
    "hint": "注意题干中强调的<b>同时转换 IP 地址与 TCP/UDP 端口号（ポート番号）</b>以实现多对一共享。在日本 AP 考试中，该技术被称为 <b>NAPT（IPマスカレード）</b>。"
  },
  {
    "questionNumber": 5,
    "question": "在构建企业网络安全边界时，部署在入口处的防火墙（FW）需要对经过的数据包进行检查。它根据网络层 IP 数据包头部中的发件人/收件人 IP 地址（送信元/宛先 IP）以及传输层头部中的端口号（ポート番号）和协议类型，与预先设定的规则集逐条匹配，从而决定是放行（Permit）还是丢弃（Deny）该数据包。这种基于网络层和传输层头部属性过滤数据的安全对策被称为是什么？",
    "diagram": "  [ 外部网络入站 IP 数据包 ]\n               │ (包含: 源/目的 IP, 目的端口)\n               ▼\n  ┌──────────────────────────┐\n  │ 防火墙 (ファイアウォール)│ (规则匹配: 包头属性)\n  └────────────┬─────────────┘\n               │ 匹配成功 -> 放行 (許可) / 匹配失败 -> 遮断\n               ▼\n       [ 内部网络 / 服务器 ]",
    "answerOptions": [
      {
        "text": "パケットフィルタリング",
        "isCorrect": true,
        "rationale": "数据包过滤（パケットフィルタリング／Packet Filtering）根据数据包的网络层（IP 地址）与传输层（端口号、协议）头部信息实施安全控制，是传统防火墙的核心功能。"
      },
      {
        "text": "アプリケーションゲートウェイ",
        "isCorrect": false,
        "rationale": "应用级网关（アプリケーションゲートウェイ／Application Level Gateway）在应用层对数据内容（如 HTTP/FTP 命令）进行深度检查和代理，消耗资源相对较大。"
      },
      {
        "text": "WAF",
        "isCorrect": false,
        "rationale": "Web 应用防火墙（WAF／Web Application Firewall）专注于检查 HTTP/HTTPS 应用层 payload，防御 SQL 注入、跨站脚本（XSS）等 Web 攻击。"
      },
      {
        "text": "帯域制御",
        "isCorrect": false,
        "rationale": "带宽控制（帯域制御／Bandwidth Control）主要用于网络 QoS 管理和流量整形，限制特定业务的传输速率，不属于基于包头的安全拦截机制。"
      }
    ],
    "hint": "请关注题干描述的<b>检查 IP 地址与传输层端口号（ポート番号）</b>来决定放行或遮断的技术。在日本 AP 考试中，这种机制被称为 <b>パケットフィルタリング（Packet Filtering）</b>。"
  },
  {
    "questionNumber": 6,
    "question": "为了遏制发件人地址伪造（なりすましメール）的钓鱼攻击，企业在自己的 DNS 服务器中发布一条 TXT 类型的资源记录，公开声明本域名下获授权允许发送邮件的所有合法服务器 IP 地址列表。当接收方邮件服务器收到邮件时，会查询发件人域名的 DNS 记录，核对发信服务器的真实 IP 是否属于授权列表。这种基于 DNS 的发件人域名认证技术被称为是什么？",
    "diagram": "  [ 受信方邮件服务器 ]\n               │ 1. 收到邮件，提取发件人域名 example.jp 及发信 IP\n               ▼\n  ┌──────────────────────────┐\n  │ 发件方 DNS (example.jp) │ (查询 TXT 记录中的 SPF 授权 IP)\n  └────────────┬─────────────┘\n               │ 2. 比对发信 IP 是否在授权列表中\n               ▼\n   [ 判定: 合法 (Pass) / 伪造邮件 (Fail) ]",
    "answerOptions": [
      {
        "text": "SPF",
        "isCorrect": true,
        "rationale": "发件人策略框架（SPF／Sender Policy Framework）是一种发件人域名认证技术，域名所有者在 DNS 的 TXT 记录中公布授权发信 IP，接收方通过核对 IP 校验发件人身份。"
      },
      {
        "text": "DKIM",
        "isCorrect": false,
        "rationale": "域名密钥识别邮件（DKIM／DomainKeys Identified Mail）利用公钥密码学在邮件头部添加数字签名，接收方通过 DNS 获取公钥验证邮件完整性及发件人身份。"
      },
      {
        "text": "DMARC",
        "isCorrect": false,
        "rationale": "基于域的邮件认证报告与一致性（DMARC／Domain-based Message Authentication, Reporting, and Conformance）结合了 SPF 和 DKIM，指导接收方如何处理未通过验证的邮件并反馈报告。"
      },
      {
        "text": "S/MIME",
        "isCorrect": false,
        "rationale": "S/MIME 是基于 PKI 证书对邮件进行端到端加密与签名的技术，需要发件人拥有个人证书，不依靠在 DNS 记录中公布 IP 列表。"
      }
    ],
    "hint": "关注题干强调的在 <b>DNS 记录（TXT 记录）中列出授权发信 IP 地址</b> 的发件人认证机制。在日本 AP 考试中，该技术统称为 <b>SPF（Sender Policy Framework）</b>。"
  },
  {
    "questionNumber": 7,
    "question": "某企业为了管理方便，希望将网站域名 www.example.jp 指向另一台已经配置好 A 记录的主机别名 serv.example.jp 上，从而当后端真实服务器 IP 发生变更时，只需修改 serv.example.jp 的 A 记录即可，无需重复修改所有关联域名。在 DNS ゾーン（Zone）配置中，用于定义主机别名并将其映射到规范名称（Canonical Name）的资源记录被称为是什么？",
    "diagram": "  [ 客户端查询 www.example.jp ]\n               │\n               ▼\n  ┌──────────────────────────┐\n  │ DNS 服务器 (DNSサーバ)   │ (CNAME 记录: www -> serv.example.jp)\n  └────────────┬─────────────┘\n               │ 转向查询真实主机名的 A 记录\n               ▼\n    [ serv.example.jp -> IP: w.x.y.z ]",
    "answerOptions": [
      {
        "text": "CNAMEレコード",
        "isCorrect": true,
        "rationale": "别名记录（CNAMEレコード／Canonical Name Record）用于将一个域名（别名）映射到另一个规范域名（Canonical Name），常用于域名重定向与简化 IP 变动管理。"
      },
      {
        "text": "Aレコード",
        "isCorrect": false,
        "rationale": "IPv4 地址记录（Aレコード／Address Record）将域名直接映射到具体的 IPv4 地址（如 192.168.1.10），而不是映射到另一个别名主机名。"
      },
      {
        "text": "AAAAレコード",
        "isCorrect": false,
        "rationale": "IPv6 地址记录（AAAAレコード／Quad-A Record）用于将主机名映射到 128 位的 IPv6 地址。"
      },
      {
        "text": "PTRレコード",
        "isCorrect": false,
        "rationale": "指针记录（PTRレコード／Pointer Record）用于 IP 地址到域名的反向解析（Reverse Lookup）。"
      }
    ],
    "hint": "注意题干描述的<b>将域名作为别名映射到另一个规范主机名</b>的 DNS 记录。在日本 AP 考试中，该记录被称为 <b>CNAMEレコード（Canonical Name）</b>。"
  },
  {
    "questionNumber": 8,
    "question": "某企业自建的邮件服务器由于防火墙策略及服务访问控制配置不当，没有限制发信来源 IP 范围，也没有开启身份验证（SMTP 認証）。这导致公网上的任意黑客都可以将该邮件服务器作为中转站，伪造发件人向互联网上的任何第三方邮箱发送海量垃圾广告和恶意邮件，致使该企业 IP 被列入国际黑名单。这种邮件服务器配置缺陷导致的风险被称为是什么？",
    "diagram": "  [ 外部黑客 / 攻击者 ]\n               │ (发送待中转垃圾邮件)\n               ▼\n  ┌──────────────────────────┐\n  │ 配置不当邮件服务器       │ (无身份验证与 IP 限制: 第三者中継)\n  └────────────┬─────────────┘\n               │ (滥用中继，转发至任意第三方)\n               ▼\n     [ 互联网受害者邮箱 ]",
    "answerOptions": [
      {
        "text": "第三者中継",
        "isCorrect": true,
        "rationale": "第三方中继（第三者中継／Open Relay）是指邮件服务器未限制发信客户端身份，允许任意外部未授权用户利用其转发邮件至第三方域名的严重安全漏洞。"
      },
      {
        "text": "DNSキャッシュポイズニング",
        "isCorrect": false,
        "rationale": "DNS 缓存污染（DNSキャッシュポイズニング／DNS Cache Poisoning）是将虚假的域名解析记录注入 DNS 缓存服务器，重定向用户流量的攻击方式。"
      },
      {
        "text": "セッションハイジャック",
        "isCorrect": false,
        "rationale": "会话劫持（セッションハイジャック／Session Hijacking）是攻击者窃取用户的合法会话标识（如 Cookie/Session ID）以冒充用户身份的操作。"
      },
      {
        "text": "IPスプーフィング",
        "isCorrect": false,
        "rationale": "IP 欺骗（IPスプーフィング／IP Spoofing）是篡改 IP 数据包头部的源 IP 地址以伪造发送方身份的网络层攻击方式。"
      }
    ],
    "hint": "请注意题干中提到的<b>邮件服务器未经授权允许任意外部人员借用中转发信</b>的安全隐患。在日本 AP 考试中，这被称为 <b>第三者中継（Open Relay）</b>。"
  },
  {
    "questionNumber": 9,
    "question": "在 TCP/IP 子网划分中，网络管理员为一台主机构建了 IP 地址为 192.168.0.15、掩码为 255.255.255.0（即 /24）的网络环境。在配置路由规则与防火墙访问控制列表（ACL）时，需要指定该主机所在网段的代表标识。将该 IP 地址与子网掩码进行按位“逻辑与（AND）”运算后，得到的用于标识整个子网网段的地址被称为是什么？",
    "diagram": "  IP 地址:     192.168.  0. 15  -->  11000000.10101000.00000000.00001111\n  子网掩码:    255.255.255.  0  -->  11111111.11111111.11111111.00000000\n               ─────────────────────────────────────────────────────\n  按位与(AND): 192.168.  0.  0  -->  11000000.10101000.00000000.00000000\n               ▼\n    [ 结果: ネットワークアドレス (192.168.0.0) ]",
    "answerOptions": [
      {
        "text": "ネットワークアドレス",
        "isCorrect": true,
        "rationale": "网络地址（ネットワークアドレス／Network Address）是主机部分全为 0 的 IP 地址，代表整个子网，通过将 IP 地址与子网掩码按位“逻辑与”计算得出。"
      },
      {
        "text": "ブロードキャストアドレス",
        "isCorrect": false,
        "rationale": "广播地址（ブロードキャストアドレス／Broadcast Address）是主机部分全为 1 的 IP 地址（如 192.168.0.255），用于给该子网内的所有主机发送广播数据。"
      },
      {
        "text": "デフォルトゲートウェイ",
        "isCorrect": false,
        "rationale": "默认网关（デフォルトゲートウェイ／Default Gateway）是子网内部连接外部网络的路由器接口 IP 地址，用于转发跨网段数据包。"
      },
      {
        "text": "ループバックアドレス",
        "isCorrect": false,
        "rationale": "环回地址（ループバックアドレス／Loopback Address，如 127.0.0.1）用于本机进程间通信测试，不属于外部网络划分标识。"
      }
    ],
    "hint": "请关注题干描述的<b>将 IP 地址与子网掩码按位与运算后得到的子网网段标识</b>。在日本 AP 考试中，该地址被称为 <b>ネットワークアドレス（Network Address）</b>。"
  },
  {
    "questionNumber": 10,
    "question": "企业员工需要同时在办公电脑、手机及 iPad 等多个终端设备上收发工作邮件。传统的 POP3 协议通常会将邮件下载到本地终端并默认从服务器删除，导致不同设备间邮件同步混乱；而另一种邮件接收协议则将所有邮件统一存储在服务器端，各终端仅同步邮件列表与状态（如已读/未读、标记），并支持在服务器上创建文件夹进行归档。这种实现多终端全同步的邮件接收协议被称为是什么？",
    "diagram": "  [ 手机客户端 ]    [ 电脑客户端 ]    [ Web 邮件端 ]\n        │                 │                 │\n        └─────────┬───────┴─────────────────┘\n                  │ (双向状态同步: 已读/标记/文件夹)\n                  ▼\n    ┌──────────────────────────┐\n    │ 邮件服务器 (IMAP4 服务)  │ (所有邮件保存在服务端)\n    └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "IMAP4",
        "isCorrect": true,
        "rationale": "因特网消息访问协议（IMAP4／Internet Message Access Protocol）将邮件保存在服务器端，允许客户端随时同步邮件状态并在服务端管理邮件文件夹，非常适合多终端协作。"
      },
      {
        "text": "POP3",
        "isCorrect": false,
        "rationale": "邮局协议 3（POP3／Post Office Protocol version 3）默认将邮件下载至本地终端处理，服务端往往不保存已读/未读等同步状态，多终端使用体验较差。"
      },
      {
        "text": "SMTP",
        "isCorrect": false,
        "rationale": "简单邮件传输协议（SMTP／Simple Mail Transfer Protocol）专门用于客户端发送邮件或服务器间中转投递邮件，不具备客户端收取与管理邮箱的功能。"
      },
      {
        "text": "MIME",
        "isCorrect": false,
        "rationale": "多用途互联网邮件扩展（MIME／Multipurpose Internet Mail Extensions）是定义邮件支持非 ASCII 文本、附件与富文本格式的数据编码标准，非传输/收取协议。"
      }
    ],
    "hint": "请注意题干强调的<b>邮件保存在服务器端、支持多终端同步已读/标记状态</b>的接收协议。在日本 AP 考试中，该协议被称为 <b>IMAP4</b>。"
  },
  {
    "questionNumber": 11,
    "question": "在 DNS 域名解析体系中，攻击者趁 DNS 缓存服务器向权威服务器发起递归查询的空档，向该缓存服务器连续发送伪造的 DNS 响应报文。一旦攻击者伪造的响应报文先于真实响应到达，缓存服务器就会将虚假的 IP 地址写入本地缓存，导致后续所有查询该域名的合法用户被诱导至钓鱼网站。这种针对 DNS 缓存机制的篡改攻击被称为是什么？",
    "diagram": "  [ 客户端用户 ] -> 1. 请求解析 example.com\n        │\n        ▼\n  ┌──────────────────────────┐\n  │ DNS 缓存服务器           │ <── 2. 注入伪造响应 (假 IP)\n  └────────────┬─────────────┘      (攻击者成功抢先)\n               │\n               ▼ 3. 返回假 IP，引导用户访问钓鱼网站",
    "answerOptions": [
      {
        "text": "DNSキャッシュポイズニング",
        "isCorrect": true,
        "rationale": "DNS 缓存污染（DNSキャッシュポイズニング／DNS Cache Poisoning）是指攻击者通过注入伪造的 DNS 响应记录破坏缓存服务器数据，将域名解析重定向至恶意服务器的攻击。"
      },
      {
        "text": "ゾーン転送攻撃",
        "isCorrect": false,
        "rationale": "DNS 区域传送攻击（ゾーン転送攻撃）是指未经授权请求获取整个 DNS Zone 文件的全量记录以搜集企业内部网络拓扑情报，不涉及缓存篡改。"
      },
      {
        "text": "ARPスプーフィング",
        "isCorrect": false,
        "rationale": "ARP 欺骗（ARPスプーフィング／ARP Spoofing）是在局域网链路层伪造 MAC 地址与 IP 的映射，与 DNS 域名解析缓存无关。"
      },
      {
        "text": "DHCPスプーフィング",
        "isCorrect": false,
        "rationale": "DHCP 欺骗（DHCPスプーフィング／DHCP Spoofing）是通过部署伪造的 DHCP 服务器向内网客户端发放错误的网关和 DNS 地址。"
      }
    ],
    "hint": "注意题干描述的<b>向 DNS 缓存服务器注入虚假的解析响应</b>以诱导用户访问钓鱼网站的攻击。在日本 AP 考试中被称为 <b>DNSキャッシュポイズニング（DNS Cache Poisoning）</b>。"
  },
  {
    "questionNumber": 12,
    "question": "为了保证企业 DNS 服务的可用性与负载均衡，通常会部署主 DNS 服务器（Primary DNS）和副 DNS 服务器（Secondary DNS）。当主服务器上的 Zone 域名解析数据发生更新时，副服务器会通过 TCP 53 端口向主服务器发起全量或增量数据同步请求，将最新的ゾーン（Zone）配置复制到本地。这种在 DNS 主副服务器之间同步域名数据库的操作被称为是什么？",
    "diagram": "  ┌──────────────────────────┐\n  │ 主 DNS 服务器 (Primary)   │ (更新 Zone 配置文件)\n  └────────────┬─────────────┘\n               │ TCP 端口 53 (ゾーン転送 / AXFR)\n               ▼\n  ┌──────────────────────────┐\n  │ 副 DNS 服务器 (Secondary) │ (同步最新的 Zone 解析数据)\n  └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "ゾーン転送",
        "isCorrect": true,
        "rationale": "DNS 区域传送（ゾーン転送／Zone Transfer，使用 AXFR/IXFR 协议）是主副 DNS 服务器间同步 Zone 数据库文件的工作机制，通常运行在 TCP 53 端口上。"
      },
      {
        "text": "DNS再帰検索",
        "isCorrect": false,
        "rationale": "DNS 递归查询（DNS再帰検索／Recursive Query）是 DNS 客户端请求域名解析时，由 DNS 服务器代为向根域及各级权威服务器一路追踪查找最终 IP 的过程。"
      },
      {
        "text": "DNS逆引き",
        "isCorrect": false,
        "rationale": "DNS 反向查询（DNS逆引き／Reverse Lookup）是指根据 IP 地址查询其对应的主机名（如查询 192.168.1.10 对应的域名）。"
      },
      {
        "text": "DNSヒントファイル",
        "isCorrect": false,
        "rationale": "DNS 提示文件（DNSヒントファイル／Hint File）包含根域名服务器（Root Name Server）的 IP 地址列表，用于引导 DNS 服务器启动递归解析。"
      }
    ],
    "hint": "关注题干提到的<b>主 DNS 与副 DNS 服务器之间同步 Zone 域名数据库文件</b>的操作。在日本 AP 考试中，该机制被称为 <b>ゾーン転送（Zone Transfer）</b>。"
  },
  {
    "questionNumber": 13,
    "question": "传统电子邮件协议（如 SMTP 和 POP3）在传输用户名、密码及邮件正文时均采用明文格式，极其容易在网络链路上被监听和篡改。为了解决这一隐患，现代协议支持在明文端口建立初始连接后，由客户端发送特定指令（例如 STARTTLS），动态将当前的 TCP 明文会话安全升级为 TLS 加密会话。这种在原有应用层协议之上无缝嵌入传输层加密的安全机制被称为是什么？",
    "diagram": "  [ 客户端 ] ──> 1. 建立普通明文 TCP 连接 ──> [ 邮件服务器 ]\n  [ 客户端 ] ──> 2. 发送 STARTTLS 扩展指令 ──> [ 邮件服务器 ]\n  [ 客户端 ] <── 3. 进行 TLS 安全握手加密 <── [ 邮件服务器 ]\n               ▼\n  [ 建立密文通道，后续数据加密传输 ]",
    "answerOptions": [
      {
        "text": "STARTTLS",
        "isCorrect": true,
        "rationale": "STARTTLS 是一种扩展指令，允许原本明文传输的应用层协议（如 SMTP、POP3、IMAP）在同一端口上动态协商并升级为 TLS 加密通道。"
      },
      {
        "text": "IPsec",
        "isCorrect": false,
        "rationale": "IPsec 是在网络层（L3）提供整体数据包加密的安全协议，不属于应用层通信过程中通过扩展指令建立 TLS 通道的机制。"
      },
      {
        "text": "SSHトンネリング",
        "isCorrect": false,
        "rationale": "SSH 隧道（SSHトンネリング／SSH Tunneling）是通过 SSH 协议将其他网络端口的流量封装进行加密传输的技术，需要专门的 SSH 服务支持。"
      },
      {
        "text": "S/MIME",
        "isCorrect": false,
        "rationale": "S/MIME 是针对邮件内容（Payload）本身进行的端到端应用层加密，即使通道加密，邮件正文在客户端存储时也是加密状态，与通信通道升级机制不同。"
      }
    ],
    "hint": "请关注题干描述的在明文连接基础上<b>发送扩展指令动态升级为 TLS 加密通信</b>的技术。在日本 AP 考试中，该技术被称为 <b>STARTTLS</b>。"
  },
  {
    "questionNumber": 14,
    "question": "某大型互联网公司为了保护内部核心 Web 应用服务器不直接暴露在公网，并在入口处集中处理来自外部用户的 HTTPS 流量解密（SSL オフローディング）、静态资源缓存以及负载均衡，特意在边界处部署了一台代理设备。该设备代表后端真实服务器接收 Internet 上的连接请求，并将清洗和解密后的请求转发至内部 Web 服务器。这种部署在服务器端前端的网络组件被称为是什么？",
    "diagram": "  [ Internet 外部用户 ]\n               │ (请求 HTTPS 访问)\n               ▼\n  ┌──────────────────────────┐\n  │ 反向代理 (リバースプロキシ) │ (SSL 卸载 / 缓存 / 保护源站)\n  └────────────┬─────────────┘\n               │ (内网 HTTP 转发)\n               ▼\n  [ 后端真实 Web 服务器集群 ]",
    "answerOptions": [
      {
        "text": "リバースプロキシ",
        "isCorrect": true,
        "rationale": "反向代理（リバースプロキシ／Reverse Proxy）部署在服务器端前端，代表后端服务器接收外部请求，提供负载均衡、SSL 解密卸载、缓存和防范源站攻击的作用。"
      },
      {
        "text": "フォワードプロキシ",
        "isCorrect": false,
        "rationale": "正向代理（フォワードプロキシ／Forward Proxy）部署在客户端前端，代表内部客户端去访问外部互联网，常用于内网上网控制和内容过滤。"
      },
      {
        "text": "DNSサーバ",
        "isCorrect": false,
        "rationale": "DNS 服务器（DNSサーバ）仅负责将主机名域名转换为 IP 地址，不参与 HTTP/HTTPS 通信过程中的请求代理、SSL 解密及缓存。"
      },
      {
        "text": "デフォルトゲートウェイ",
        "isCorrect": false,
        "rationale": "默认网关（デフォルトゲートウェイ／Default Gateway）是路由器在网络层转发数据包的入口，不具备应用层（HTTP/HTTPS）请求代理与 SSL 卸载能力。"
      }
    ],
    "hint": "注意题干强调的<b>部署在服务器前端，替服务器接收请求并实现 SSL 解密与缓存</b>的技术。在日本 AP 考试中被称为 <b>リバースプロキシ（Reverse Proxy）</b>。"
  },
  {
    "questionNumber": 15,
    "question": "在企业内部局域网搭建办公网络时，为了防止 IP 地址与互联网上的公有 IP 地址发生冲突，管理人员必须从 RFC 1918 规定的专用私有地址池中为员工电脑和内部服务器分配 IP。例如 Class A 的 10.0.0.0/8、Class B 的 172.16.0.0/12 以及 Class C 的 192.168.0.0/16。这类只能在内部局域网路由、无法直接在公网上进行路由传输的 IP 地址被称为是什么？",
    "diagram": "  ┌──────────────────────────────────────────────────┐\n  │ 内部局域网 (プライベート IP 空间)                  │\n  │  - 10.0.0.0/8                                    │\n  │  - 172.16.0.0/12                                 │\n  │  - 192.168.0.0/16                                │\n  └────────────────────────┬─────────────────────────┘\n                           │ NAT/NAPT 地址转换\n                           ▼\n  ┌──────────────────────────────────────────────────┐\n  │ 互联网 (グローバル IP 空间)                       │\n  └──────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "プライベートIPアドレス",
        "isCorrect": true,
        "rationale": "私有 IP 地址（プライベートIPアドレス／Private IP Address）是专门预留给企业或家庭内部局域网使用的非公网可路由地址（如 192.168.x.x），接入公网前需经 NAT/NAPT 转换。"
      },
      {
        "text": "グローバルIPアドレス",
        "isCorrect": false,
        "rationale": "公有 IP 地址（グローバルIPアドレス／Global IP Address）是在互联网上由 ICANN/APNIC 等机构统一分配、具有全球唯一性且可直接路由的地址。"
      },
      {
        "text": "マルチキャストIPアドレス",
        "isCorrect": false,
        "rationale": "组播 IP 地址（マルチキャストIPアドレス／Multicast IP Address，Class D，如 224.0.0.0/4）用于一对多组播通信，并非局域网单播私有地址。"
      },
      {
        "text": "ループバックIPアドレス",
        "isCorrect": false,
        "rationale": "环回 IP 地址（ループバックIPアドレス／Loopback IP Address，如 127.0.0.1）用于本机内部测试网络协议栈，无法用于局域网内主机间通信。"
      }
    ],
    "hint": "注意题干提到的<b>在 RFC 1918 中定义的局域网专用的非公网路由地址</b>（如 192.168.0.0/16）。在日本 AP 考试中，该概念被称为 <b>プライベートIPアドレス（Private IP Address）</b>。"
  }
];
console.log("成功加载题库！");