// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "Sony 集团在全员引入 Zoom 与 Microsoft Teams 展开全球视频会议时，发现分支机构员工的视频画面频繁卡顿丢包。网络排查发现，分支机构的所有流量均通过 IPsec 虚拟专用网（IPsec VPN／IPsec Virtual Private Network）回传至总部机房，再经过总部的边界防火墙（ファイアウォール／Firewall）与代理服务器（プロキシサーバ／Proxy Server）统一出网，导致总部防火墙会话表爆满。为了解决这一吞吐瓶颈，架构师在分支机构路由器配置策略，将识别出的视频会议等 SaaS 信任流量不经过总部 VPN 隧道，而是直接从分支机构当地的互联网出口进行分流接入。这种消减总部网络负载的技术被称为是什么？",
    "diagram": "  [ 分公司终端 (NPC) ]\n         │\n         ├── ( Zoom/Teams 流量: 直连分流 ) ──► [ 互联网 / SaaS 云端 ]\n         │                                        ▲\n         └── ( 社内核心业务流量: VPN 隧道 ) ──► [ 总部 FW / DMZ ]",
    "answerOptions": [
      {
        "text": "ローカルブレイクアウト",
        "isCorrect": true,
        "rationale": "本地互联网出口/本地分流（ローカルブレイクアウト／Local Breakout）是指分支机构的特定信任流量（如 Teams、Zoom 等 SaaS）不再强制回传至总部数据中心，而是直接由分支机构本地的互联网链路进行 breakout 出局，从而大幅释放总部防火墙与 VPN 隧道的带宽压力。"
      },
      {
        "text": "センタースルー",
        "isCorrect": false,
        "rationale": "集中回传/中心穿越（センタースルー／Center Through）是指所有分支机构流量无条件强制回传总部机房统一处理的传统架构，这正是引发总部防火墙负载过载的根源。"
      },
      {
        "text": "フルメッシュVPN",
        "isCorrect": false,
        "rationale": "全网状 VPN（フルメッシュVPN／Full Mesh VPN）是指所有节点两两建立加密隧道的网状拓扑，主要用于任意节点间直接通信，无法解决访问外部 SaaS 带来的总部防火墙会话爆满问题。"
      },
      {
        "text": "リバースプロキシ",
        "isCorrect": false,
        "rationale": "反向代理（リバースプロキシ／Reverse Proxy）部署在服务器端前方用于接收外部 Internet 请求并分发至内部服务器，而分支机构员工主动访问外部 SaaS 属于出站流量（Outbound），需要正向代理或本地分流。"
      }
    ],
    "hint": "请注意题干强调的<b>允许信任的 SaaS 流量不回传总部，直接从分支机构本地接入互联网</b>的技术。在 AP 考试网络架构中被称为 <b>ローカルブレイクアウト</b>。"
  },
  {
    "questionNumber": 2,
    "question": "Rakuten 证券部署下一代边界防火墙（ファイアウォール／Firewall）以保护交易核心网。当内部交易员终端发起访问外部金融行情 Web 服务器时，防火墙不仅检查数据包的源/目的 IP 和端口，还会实时追踪并维护每一个 TCP 连接的状态生命周期（如 SYN_SENT、ESTABLISHED）。当外部行情服务器返回响应数据包时，防火墙自动比对内存中的会话表（セッションテーブル／Session Table），只要该数据包属于已建立的合法连接，便无条件予以放行，无需管理员手动开辟由外向内的开放规则。这种基于动态连接状态进行精细化包过滤的技术被称为是什么？",
    "diagram": "  [ 内部交易终端 ] ── ( 1. 发起 SYN ) ──► ┌──────────────────────────┐\n                                          │ 防火墙 (动态维护会话表)  │ ──► [ 外部行情 Web ]\n  [ 内部交易终端 ] ◄── ( 2. 匹配放行 ACK ) ◄└──────────────────────────┘",
    "answerOptions": [
      {
        "text": "ステートフルパケットインスペクション",
        "isCorrect": true,
        "rationale": "状态包检测（ステートフルパケットインスペクション／Stateful Packet Inspection）防火墙通过动态追踪和维护通信会话的状态表（Session State），能够智能判断返回的数据包是否属于已建立的合法连接并自动放行，兼具高安全性与规则配置简易性。"
      },
      {
        "text": "スタティックパケットフィルタリング",
        "isCorrect": false,
        "rationale": "静态包过滤（スタティックパケットフィルタリング／Static Packet Filtering）仅依据逐个数据包的 IP/端口头信息匹配静态 ACL 规则，无法感知上下文会话状态，安全级别较低且规则配置繁琐。"
      },
      {
        "text": "アプリケーションゲートウェイ",
        "isCorrect": false,
        "rationale": "应用层网关/代理防火墙（アプリケーションゲートウェイ／Application Gateway）在应用层彻底拆解和重组协议数据，虽安全性极高但需要为每个应用编写代理，吞吐性能开销巨大。"
      },
      {
        "text": "ダイナミックパケットフィルタリング",
        "isCorrect": false,
        "rationale": "动态包过滤（ダイナミックパケットフィルタリング／Dynamic Packet Filtering）通常仅指根据 FTP 等特定协议动态打开临时数据端口的旧技术，不如状态包检测那样全会话生命周期追踪。"
      }
    ],
    "hint": "寻找指代<b>实时维护 TCP 连接状态表，并自动允许合法响应包（Return Traffic）通过</b>的防火墙检测机制。"
  },
  {
    "questionNumber": 3,
    "question": "Square Enix 游戏工作室为了严格管控员工在办公网的上网行为并防止未公开游戏资产泄露，在非军事化区（DMZ／Demilitarized Zone）部署了一台核心网络设备。当员工终端（NPC）通过 Web 浏览器发起访问 OpenAI API 或 GitHub 等外网请求时，终端并不直接与外部连接，而是将请求发送给该设备；设备在对员工身份完成身份验证（ユーザー認証）并校验目标网址未命中 URL 过滤（URLフィルタリング）黑名单后，以自己的公网 IP 身份代为向外部发起请求，同时将完整的访问日志（通信ログ）记录在案。这种在客户端与外部服务器之间充当“中间代理人”的设备被称为是什么？",
    "diagram": "  [ 游戏开发终端 (NPC) ] ── ( 1. 请求代理 ) ──► ┌──────────────────────────┐\n                                                │ 代理服务器 (DMZ)         │\n  [ 游戏开发终端 (NPC) ] ◄── ( 4. 返回结果 ) ───└─────────────┬────────────┘\n                                                              │ ( 2. 代为发起 / 3. 接收响应 )\n                                                              ▼\n                                                [ 外部 GitHub / OpenAI API ]",
    "answerOptions": [
      {
        "text": "プロキシサーバ",
        "isCorrect": true,
        "rationale": "正向代理服务器（プロキシサーバ／Forward Proxy Server）部署在 DMZ 区，代表内部客户端向外部互联网发起 Web 访问。其核心功能包括用户身份认证、URL 行为过滤、缓存加速以及记录审计通信日志（通信ログ）。"
      },
      {
        "text": "リバースプロキシ",
        "isCorrect": false,
        "rationale": "反向代理服务器（リバースプロキシ／Reverse Proxy）部署在 DMZ 用于保护和分发访问内部 Web 服务器的外部流量，受众是外部用户而非内部员工。"
      },
      {
        "text": "DNSキャッシュサーバ",
        "isCorrect": false,
        "rationale": "DNS 缓存服务器（DNSキャッシュサーバ／DNS Cache Server）仅负责将域名解析为 IP 地址并缓存解析结果，不参与 HTTP/HTTPS 报文的代理传输与内容过滤。"
      },
      {
        "text": "L3スイッチ",
        "isCorrect": false,
        "rationale": "三层交换机（L3スイッチ／Layer 3 Switch）在网络层依据 IP 路由表快速转发数据包，无法深入应用层（HTTP/HTTPS）执行用户认证与 URL 内容过滤。"
      }
    ],
    "hint": "寻找部署在 DMZ 区，能够代表内部终端向外发起 Web 访问并提供<b>用户认证、URL 过滤与日志审计</b>的代理设备（Proxy）。"
  },
  {
    "questionNumber": 4,
    "question": "优衣库（Uniqlo）为了将分布在全日本的 800 家线下门店局域网（営業所LAN）与东京总部内部局域网（内部LAN）安全地互联互通，决定利用廉价的公共互联网构建一条虚拟专用网络。为了保障 POS 机交易数据与库存数据在传输时免受窃听与篡改，网络工程师在总部与各门店边界路由器上部署了一种网络层安全协议套件。该协议通过 ESP（Encapsulating Security Payload）协议提供数据加密与完整性校验，并利用 IKE 协议进行密钥协商与身份认证，从而建立了高强度加密隧道。这种在 IP 协议层提供安全保障的技术套件被称为是什么？",
    "diagram": "  [ 门店 LAN ] ──► [ IPsec 路由器 2 ] ─── ( 公共互联网 / 密文隧道 ) ───► [ IPsec 路由器 1 ] ──► [ 总部 LAN ]\n                                           │\n                                           ▼ [ ESP 加密 + IKE 认证 ]",
    "answerOptions": [
      {
        "text": "IPsec",
        "isCorrect": true,
        "rationale": "IPsec（IP Security）是工作在网络层（Network Layer）的安全协议套件，包含 AH（报文头鉴别）、ESP（封装安全载荷）与 IKE（互联网密钥交换），常用于构建站点到站点（Site-to-Site）的互联网 VPN 隧道。"
      },
      {
        "text": "SSL-VPN",
        "isCorrect": false,
        "rationale": "SSL-VPN（SSL/TLS Virtual Private Network）工作在传输层/应用层，主要用于移动办公人员通过 Web 浏览器远程接入公司内网。"
      },
      {
        "text": "L2TP",
        "isCorrect": false,
        "rationale": "L2TP（Layer 2 Tunneling Protocol）是工作在数据链路层的隧道协议，其本身不具备任何加密能力，必须结合 IPsec 才能提供安全性（即 L2TP/IPsec）。"
      },
      {
        "text": "SSH",
        "isCorrect": false,
        "rationale": "SSH（Secure Shell）是工作在应用层的加密网络协议，主要用于远程登录管理服务器命令行，不用于搭建网段对网段的底层网络 VPN 隧道。"
      }
    ],
    "hint": "寻找工作在<b>网络层（Layer 3）</b>，包含 ESP 和 IKE 协议，常用于构建<b>站点到站点（Site-to-Site）VPN 隧道</b>的安全标准（IPsec）。"
  },
  {
    "questionNumber": 5,
    "question": "ARM 研发中心内部 500 台 Linux 芯片设计工作站（使用 10.0.0.0/8 私有 IP 地址）需要并发连线至公网云端 EDA 仿真平台。由于私有 IP 地址无法在公共互联网上直接路由，边界路由器（IPsecルータ）不仅需要将数据包的源私有 IP 地址转换为路由器拥有的公网 IP 地址，还需要动态修改数据包的源 TCP/UDP 端口号，并在内部维护映射表。这样，仅凭一个公网 IP 地址就能同时支持 500 台工作站并发访问外网。这种结合了 IP 地址与端口号进行网络地址转换的技术被称为是什么？",
    "diagram": "  [ 芯片工作站 1: 10.0.1.10:5001 ] ──┐\n                                      ├──► ┌──────────────────────────┐\n  [ 芯片工作站 2: 10.0.1.11:5002 ] ──┘    │ 路由器 (NAPT 端口映射)  │ ──► [ 公网单一 IP: 203.0.113.1 ]\n                                           └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "NAPT",
        "isCorrect": true,
        "rationale": "网络地址与端口转换（NAPT／Network Address Port Translation，日本 AP 考试常称为 IPマスカレード／IP Masquerade）不仅转换 IP 地址，还同时转换传输层的 TCP/UDP 端口号，使得多个内部私有 IP 地址可以共享同一个公网 IP 地址访问互联网。"
      },
      {
        "text": "静的NAT",
        "isCorrect": false,
        "rationale": "静态 NAT（静的NAT／Static NAT）是将一个内部私有 IP 地址一对一固定映射为一个公网 IP 地址，无法解决公网 IP 地址资源匮乏的问题。"
      },
      {
        "text": "DHCP",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP／Dynamic Host Configuration Protocol）用于为局域网内的终端自动分配 IP 地址、子网掩码与网关，不负责地址转换。"
      },
      {
        "text": "ARP",
        "isCorrect": false,
        "rationale": "地址解析协议（ARP／Address Resolution Protocol）用于将已知的三层 IP 地址解析为二层 MAC 地址，与公私网转换无关。"
      }
    ],
    "hint": "寻找能够<b>同时转换 IP 地址与 TCP/UDP 端口号</b>，实现多台私网设备共享单个公网 IP 访问外网的技术（NAPT / IPマスカレード）。"
  },
  {
    "questionNumber": 6,
    "question": "PayPay 在搭建总部网络拓扑时，出于安全合规要求，将网络严密划分为三个安全等级不同的区域：一个是面向企业内部办公的内部局域网（内部LAN），一个是充满风险的外部公共互联网（インターネット），第三个则是专门用于放置正向代理服务器（プロキシサーバ）和外部 DNS 服务器（外部DNSサーバ）等需要与外网交互的服务器隔离区。连接这三个区域的防火墙（ファイアウォール）配置了严格的隔离策略：既允许外部访问该隔离区，又防止该隔离区被攻破后直接沦陷内部局域网。这个位于内部网与外部网之间的缓冲区被称为是什么？",
    "diagram": "               [ 外部互联网 (Internet) ]\n                          │\n                          ▼\n  [ 内部 LAN ] ◄───► [ 防火墙 (FW) ] ◄───► [ DMZ (隔离区: 部署 Proxy/外部DNS) ]",
    "answerOptions": [
      {
        "text": "DMZ",
        "isCorrect": true,
        "rationale": "非军事化区/隔离区（DMZ／Demilitarized Zone）是位于内部可信网络与外部不可信网络之间的缓冲区。DMZ 中通常部署代理服务器、外部 DNS、Web 服务器等公共服务组件，即使 DMZ 内设备遭受攻击，防火墙也会阻止入侵者向内部 LAN 进一步渗透。"
      },
      {
        "text": "内部LAN",
        "isCorrect": false,
        "rationale": "内部局域网（内部LAN／Internal LAN）属于最高安全级别的可信区域，存放公司核心数据库与终端，严禁直接暴露给外部互联网。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN／Virtual Local Area Network）是在二层交换机上逻辑划分广播域的技术，并不特指安全防火墙划分的非军事隔离缓冲区。"
      },
      {
        "text": "SD-WAN",
        "isCorrect": false,
        "rationale": "软件定义广域网（SD-WAN／Software-Defined Wide Area Network）是用于智能化管理和调度企业多广域网链路的架构，不属于网络安全物理/逻辑区域划分范畴。"
      }
    ],
    "hint": "寻找位于内部 LAN 与外部互联网之间，用于安全隔离和放置<b>代理服务器（Proxy）与外部 DNS 服务器</b>的网络区域（DMZ）。"
  },
  {
    "questionNumber": 7,
    "question": "Salesforce 日本分公司为了保障域名解析（DNS 名前解決）的效率与安全性，采用了“内外分离”的 DNS 架构设计。社内部署的“社内 DNS 服务器”专门管理内部局域网（内部LAN）服务器的私有 IP 地址，社内终端所有的域名查询均首先提交给社内 DNS。当员工尝试访问外部服务（如 Workday 或 AWS）等社内 DNS 管理范围之外的域名时，社内 DNS 服务器并不直接向互联网根域名服务器递归查询，而是将该请求转发给位于 DMZ 区的“外部 DNS 服务器”，由外部 DNS 服务器代为向互联网查询并缓存结果。这种域名解析请求转发与管理职责分离的技术机制被称为是什么？",
    "diagram": "  [ 内部终端 (NPC) ] ──► [ 社内 DNS 服务器 ] ( 管理内部 IP )\n                               │\n                               ▼ ( 未命中 / 外部域名转发 )\n                         [ 外部 DNS 服务器 (DMZ) ] ──► [ 互联网根 DNS ]",
    "answerOptions": [
      {
        "text": "DNS転送",
        "isCorrect": true,
        "rationale": "DNS 转发/域名解析转发（DNS転送／DNS Forwarding）是指 DNS 服务器将自身无法解析的域名查询请求递归委托给指定的另一台 DNS 服务器（如 DMZ 外部 DNS）代为解决。这隔离了内部 DNS 与外部互联网的直接通信，大幅提升了网络安全防护水平。"
      },
      {
        "text": "DNSアンプ攻撃",
        "isCorrect": false,
        "rationale": "DNS 放大攻击（DNSアンプ攻撃／DNS Amplification Attack）是一种利用开放的 DNS 递归服务器发送伪造源 IP 的响应报文实施 DDoS 拒绝服务攻击的恶意手段。"
      },
      {
        "text": "DNSSEC",
        "isCorrect": false,
        "rationale": "DNS 安全扩展（DNSSEC／DNS Security Extensions）通过使用公钥数字签名验证 DNS 数据的来源真实性与完整性，防止 DNS 缓存污染。"
      },
      {
        "text": "ダイナミックDNS",
        "isCorrect": false,
        "rationale": "动态域名解析（ダイナミックDNS／Dynamic DNS）是指客户端 IP 地址发生变化时，自动将最新的 IP 地址同步更新至 DNS 记录的技术。"
      }
    ],
    "hint": "寻找指代<b>社内 DNS 将超出自身管理范围的外部域名解析请求，转交给 DMZ 外部 DNS 代为处理</b>的机制（DNS Forwarding）。"
  },
  {
    "questionNumber": 8,
    "question": "奥林巴斯（Olympus）员工电脑（NPC）的 Web 浏览器统一配置了 DMZ 区代理服务器（プロキシサーバ）的 FQDN，用于安全审计。然而，公司内部局域网（内部LAN）部署有高吞吐的 AI 医疗影像 PACS 服务器（FQDN 为 `pacs.internal.olympus.co.jp`）。如果员工调阅医疗影像的巨大流量也绕道 DMZ 代理服务器，会导致严重的网络延迟与代理服务器资源耗尽。为此，网络管理员在员工浏览器的网络配置界面中，将 PACS 服务器的 FQDN 填入了一个特殊的例外名单框中，使得终端直连 PACS 服务器而不经过代理。这个设置在浏览器中的例外名单机制被称为是什么？",
    "diagram": "  [ 内部终端 (NPC) ] ── ( 默认访问外网 ) ───────► [ DMZ 代理服务器 ] ──► [ Internet ]\n         │\n         └── ( 命中有例外的 FQDN: 直连 ) ──► [ PACS 医疗影像服务器 ]",
    "answerOptions": [
      {
        "text": "プロキシ例外設定",
        "isCorrect": true,
        "rationale": "代理例外设置/代理绕过名单（プロキシ例外設定／Proxy Bypass Rules）是指在 Web 浏览器或操作系统中指定特定 FQDN、域名后缀或 IP 地址网段。当访问这些指定的内部目标时，跳过代理服务器（Proxy）直接进行点对点通信。"
      },
      {
        "text": "WPAD",
        "isCorrect": false,
        "rationale": "Web 代理自动发现协议（WPAD／Web Proxy Auto-Discovery Protocol）是一种允许浏览器通过 DHCP 或 DNS 自动查找代理配置文件（PAC）位置的技术。"
      },
      {
        "text": "プロキシ認証",
        "isCorrect": false,
        "rationale": "代理认证（プロキシ認証／Proxy Authentication）是指代理服务器要求用户提供用户名和密码，验证身份后才放行 Web 请求的安全机制。"
      },
      {
        "text": "PACファイル",
        "isCorrect": false,
        "rationale": "PAC 文件（PACファイル／Proxy Auto-Configuration File）是一个写有 JavaScript 函数 `FindProxyForURL` 的脚本文件，例外设置可以写在 PAC 中，但题干描述的是在浏览器界面中手动填入 FQDN 的例外名单配置。"
      }
    ],
    "hint": "寻找在浏览器中配置，用于<b>指定特定的内网 FQDN 或 IP 跳过代理服务器直接访问</b>的机制（Proxy Bypass）。"
  },
  {
    "questionNumber": 9,
    "question": "LINE 集团数据中心的核心交换节点部署了一台高性能网络设备（L3SW）。该设备不仅具备二层交换机（L2SW）的高速硬件端口转发能力，还集成了 ASIC 硬件级别的三层 IP 路由引擎。当内部 LAN 的终端（NPC）尝试访问外部 SaaS 服务（如 q-SaaS）时，该设备会查找内部维护的“路由表（経路表）”，匹配数据包的目标 IP 地址网段，并将数据包的“下一跳（ネクストホップ／Next Hop）”精确指向出境路由器（IPsecルータ1）。这种在企业局域网骨干层承担跨网段高速路由与数据包转发的核心设备被称为是什么？",
    "diagram": "  [ 内部 LAN / 多网段 ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ L3 交换机 (匹配路由表)   │ ──► [ 指定 Next Hop: IPsec 路由器 1 ]\n  └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "L3スイッチ",
        "isCorrect": true,
        "rationale": "三层交换机（L3スイッチ／Layer 3 Switch）结合了二层交换（MAC 硬件转发）与三层路由（IP 路由表匹配）功能，能够以极高的硬件 ASIC 芯片速度完成 VLAN 间路由以及将特定数据包精准发往下一跳（ネクストホップ）路由器。"
      },
      {
        "text": "L2スイッチ",
        "isCorrect": false,
        "rationale": "二层交换机（L2スイッチ／Layer 2 Switch）仅工作在数据链路层，依据 MAC 地址表在同一子网内转发数据帧，无法解析 IP 地址或执行三层路由表匹配。"
      },
      {
        "text": "リピータハブ",
        "isCorrect": false,
        "rationale": "集线器/中继器（リピータハブ／Repeater Hub）工作物理层，仅对电信号进行放大和广播转发，不具备任何 MAC 或 IP 地址解析处理能力。"
      },
      {
        "text": "ロードバランサ",
        "isCorrect": false,
        "rationale": "负载均衡器（ロードバランサ／Load Balancer）工作在四层或七层，主要用于将外部入站请求按算法分发给后端的服务器集群，并非普通的网络骨干层路由转发设备。"
      }
    ],
    "hint": "寻找集成了<b>硬件交换与三层 IP 路由表匹配功能</b>，能决定数据包<b>下一跳（Next Hop）</b>的核心网络设备（Layer 3 Switch）。"
  },
  {
    "questionNumber": 10,
    "question": "Yamato 运输（雅玛多运输）员工通过 Web 浏览器访问云端 SaaS 调度服务（M服务）。由于调度指令包含客户地址与包裹机密，通信必须全程采用安全传输协议。该协议在传统 HTTP 协议与 TCP 传输层之间引入了 TLS 加密层，通过 X.509 公钥数字证书（デジタル証明書）对 SaaS 服务器进行身份验证，并利用对称密钥加密传输的所有调度报文，默认使用 TCP 443 端口进行通信。这种确保 Web 通信机密性与完整性的安全协议被称为是什么？",
    "diagram": "  [ Web 应用层 (HTTP) ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ TLS 加密层 (证书+对称加密)│ ( 标准端口: TCP 443 )\n  └─────────────┬────────────┘\n                ▼\n  [ TCP 传输层 / IP 网络层 ]",
    "answerOptions": [
      {
        "text": "HTTPS",
        "isCorrect": true,
        "rationale": "HTTP Over TLS / HTTPS（HTTPS／HyperText Transfer Protocol Secure）是在 HTTP 下层叠加了 TLS（传输层安全）协议的安全通信协议。它利用数字证书验证服务器身份，并通过加密通信防止数据被窃听或篡改，默认待命端口为 TCP 443。"
      },
      {
        "text": "HTTP",
        "isCorrect": false,
        "rationale": "超文本传输协议（HTTP／HyperText Transfer Protocol）使用明文传输数据，默认端口 TCP 80，极易在互联网传输中遭遇窃听与中间人篡改。"
      },
      {
        "text": "SFTP",
        "isCorrect": false,
        "rationale": "SSH 文件传输协议（SFTP／SSH File Transfer Protocol）是基于 SSH 加密通道的文件传输协议，使用 TCP 22 端口，不用于 Web 浏览器与 SaaS 服务的 HTTPS 交互。"
      },
      {
        "text": "SMTPS",
        "isCorrect": false,
        "rationale": "安全邮件传输协议（SMTPS／Simple Mail Transfer Protocol Secure）是传统邮件客户端与邮件服务器之间进行 SMTP 邮件投递时的 TLS 加密协议（端口 465 或 587），而非基于 Web 浏览器的 SaaS 访问协议。"
      }
    ],
    "hint": "寻找在 HTTP 与 TCP 之间叠加 <b>TLS 加密协议</b>，使用 <b>TCP 443 端口</b>保护 SaaS 访问安全的协议（HTTPS）。"
  },
  {
    "questionNumber": 11,
    "question": "丰田汽车（Toyota）的 IT 运维团队在社内 DNS 服务器注册新部署的车联网测试服务器（ISサーバ）时，需要在 DNS Zone 配置文件中添加一条最基础的资源记录（リソースレコード）。该记录的作用是将服务器的完全合格域名（FQDN，例如 `iot-test.toyota.co.jp`）精确映射指向为其分配的 32 位 IPv4 私有地址 `172.16.50.100`，以便内部开发终端能够通过域名顺畅访问。在 DNS 规范中，这种用于“将 FQDN 解析为 IPv4 地址”的资源记录类型被称为是什么？",
    "diagram": "  [ DNS 资源记录配置 ]\n  iot-test.toyota.co.jp.   IN   [ ? ]   172.16.50.100\n                                │\n                                ▼\n                   ( 将 FQDN 映射至 IPv4 地址 )",
    "answerOptions": [
      {
        "text": "Aレコード",
        "isCorrect": true,
        "rationale": "A 记录/ Address 记录（Aレコード／A Record）是 DNS 中最常用的资源记录类型，用于将主机完全合格域名（FQDN）映射指向一个 32 位的 IPv4 地址。"
      },
      {
        "text": "AAAAレコード",
        "isCorrect": false,
        "rationale": "AAAA 记录（AAAAレコード／Quad-A Record）用于将 FQDN 域名映射指向一个 128 位的 IPv6 地址。"
      },
      {
        "text": "CNAMEレコード",
        "isCorrect": false,
        "rationale": "别名记录（CNAMEレコード／Canonical Name Record）用于将一个域名（别名）指向另一个已经存在的主机规范域名，而不是直接指向 IP 地址。"
      },
      {
        "text": "PTRレコード",
        "isCorrect": false,
        "rationale": "指针记录（PTRレコード／Pointer Record）用于 DNS 反向解析，即根据 IP 地址反查其对应的 FQDN 域名。"
      }
    ],
    "hint": "寻找 DNS 资源记录中，专门用于将<b>域名（FQDN）解析指向 IPv4 地址</b>的记录名称（A Record）。"
  },
  {
    "questionNumber": 12,
    "question": "CyberAgent 为了防止员工在办公网误入钓鱼陷阱、恶意软件下载或与工作无关的娱乐网站，在 DMZ 区的代理服务器（プロキシサーバ）上开启了一项安全管控功能。该功能维护了一个庞大的分类 URL 数据库，当员工通过浏览器发起 Web 请求时，设备提取请求中的目标 URL/域名，与策略库中的规则进行实时对比；一旦匹配到禁止访问的类别（如赌博、恶意域名），设备立即阻断该 HTTP/HTTPS 请求并返回警告页面。这种基于 URL 类别规则进行上网安全管控的技术被称为是什么？",
    "diagram": "  [ 员工请求 URL: http://bad-site.com ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ 代理服务器 (URL 分类对比) │ ──► [ 匹配黑名单: 立即拦截阻断! ]\n  └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "URLフィルタリング",
        "isCorrect": true,
        "rationale": "URL 过滤（URLフィルタリング／URL Filtering）是指网关或代理设备提取数据包中的 URL 网址信息，依据预先设定的类别黑白名单（如恶意网站、社交娱乐）对 Web 访问进行动态阻断或放行的安全管理技术。"
      },
      {
        "text": "パケットフィルタリング",
        "isCorrect": false,
        "rationale": "包过滤（パケットフィルタリング／Packet Filtering）工作在三/四层，仅根据 IP 地址与端口号进行过滤，无法解析应用层完整的 URL 路径和网站类别。"
      },
      {
        "text": "IPアドレスフィルタリング",
        "isCorrect": false,
        "rationale": "IP 地址过滤（IPアドレスフィルタリング）仅根据目标 IP 地址进行拦截，而许多恶意网站或云服务共享相同的公网 IP，IP 过滤无法实现精准的网址级管控。"
      },
      {
        "text": "MACアドレスフィルタリング",
        "isCorrect": false,
        "rationale": "MAC 地址过滤（MACアドレスフィルタリング）工作在二层数据链路层，通常用于无线 AP 限制特定物理网卡接入局域网，与 Web 网址安全完全无关。"
      }
    ],
    "hint": "寻找能够在代理服务器上提取<b>完整网址/域名信息并对比分类库</b>进行阻断的安全功能（URL Filtering）。"
  },
  {
    "questionNumber": 13,
    "question": "任天堂（Nintendo）在新办公大楼上线后，上千名员工在上午 9 点上班时同时开启 Teams 视频会议与 Salesforce 云服务。此时企业边界防火墙（FW）便出现严重的响应延迟甚至断网卡死现象。运维监控分析显示，防火墙的 CPU 与内存利用率陡增，导致的根源并非出口带宽（Bandwidth）被占满，而是由于海量并发持久的 HTTPS 连接瞬间填满了防火墙内存中用于追踪 TCP 连接的“动态会话表”。这种由于并发连接数暴涨导致防火墙资源耗尽的网络瓶颈现象被称为是什么？",
    "diagram": "  [ 数千终端爆发并发 HTTPS 请求 ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ 防火墙 (FW) 内存会話表   │ ──► [ 会话数爆满 (Session Overload) / 设备卡死 ]\n  └──────────────────────────┘",
    "answerOptions": [
      {
        "text": "セッションテーブルの枯渇",
        "isCorrect": true,
        "rationale": "会话表枯竭/会话数过载（セッションテーブルの枯渇／Session Table Exhaustion）是指状态包检测防火墙所能维护的最大并发 TCP/UDP 连接会话数达到上限。当 SaaS 云服务产生高并发连接时，会话表会被迅速占满，导致新连接被丢弃、网络严重卡顿。"
      },
      {
        "text": "帯域幅の枯渇",
        "isCorrect": false,
        "rationale": "带宽枯竭（帯域幅の枯渇／Bandwidth Exhaustion）是指网络链路传输速率（如 100Mbps）被大文件下载占满，与防火墙硬件内存中的连接会話表无直接关系。"
      },
      {
        "text": "IPアドレスの枯渇",
        "isCorrect": false,
        "rationale": "IP 地址枯竭（IPアドレスの枯渇／IP Address Exhaustion）是指局域网 DHCP 可分配的私有 IP 地址池用尽，导致新终端无法获取网络配置。"
      },
      {
        "text": "バッファオーバーフロー",
        "isCorrect": false,
        "rationale": "缓冲区溢出（バッファオーバーフロー／Buffer Overflow）是一种通过向程序输入超长数据破坏栈内存结构以执行恶意代码的安全漏洞，并非连接数过载引起的网络性能瓶颈。"
      }
    ],
    "hint": "寻找指代<b>并发连接数暴涨导致防火墙内存中追踪连接的状态表被填满</b>的网络瓶颈现象（Session Table Exhaustion）。"
  },
  {
    "questionNumber": 14,
    "question": "乐天集团（Rakuten）的网络安全专家在为公司配置 SSL/TLS 数字证书与代理绕过规则（プロキシ例外設定）时，需要使用最严谨、无歧义的主机标识方式。与仅写主机名（如 `auth`）不同，该标识方式包含了从底层主机名一直延伸到互联网顶级域名的完整层次结构，例如 `auth-server.corp.rakuten.co.jp.`。这种能够明确标识域名树中特定节点唯一位置的完整域名格式被称为是什么？",
    "diagram": "  [ 主机名: auth-server ] + [ 子域名: corp ] + [ 域: rakuten.co ] + [ 顶级域: jp ]\n                                           │\n                                           ▼\n               [ FQDN (完全合格域名 / Fully Qualified Domain Name) ]",
    "answerOptions": [
      {
        "text": "FQDN",
        "isCorrect": true,
        "rationale": "完全合格域名（FQDN／Fully Qualified Domain Name）是指在 DNS 层次结构中，精确指明主机所在位置的完整域名（如 `host.subdomain.domain.com`）。在配置代理例外、DNS A 记录和 SSL 证书时，使用 FQDN 可以避免歧义。"
      },
      {
        "text": "URI",
        "isCorrect": false,
        "rationale": "统一资源标识符（URI／Uniform Resource Identifier）是用于标识 Web 资源的字符串（如 `https://example.com/index.html`），包含了协议头和路径，范围大于单独的域名。"
      },
      {
        "text": "MACアドレス",
        "isCorrect": false,
        "rationale": "MAC 地址（MACアドレス／Media Access Control Address）是烧录在网络适配器（网卡）硬件上的 48 位二层物理地址。"
      },
      {
        "text": "VIP",
        "isCorrect": false,
        "rationale": "虚拟 IP 地址（VIP／Virtual IP Address）是指分配给负载均衡器或高可用集群作为统一对外入口的逻辑 IP 地址。"
      }
    ],
    "hint": "寻找指代包含<b>主机名及完整 DNS 树状层次后缀</b>的无歧义完整域名缩写（FQDN）。"
  },
  {
    "questionNumber": 15,
    "question": "Mercari（メルカリ）在实施本地分流（ローカルブレイクアウト）后，由于 SaaS 云服务流量不再经过总部 DMZ 的代理服务器（プロキシサーバ），总部代理服务器无法再记录这些云服务的通信日志。为了满足企业安全合规与审计跟踪（監査トラッキング）要求，IT 安全部门要求云服务提供商（SaaS 运营商）必须在其后台提供详尽的访问日志，按时间顺序记录员工访问的时间戳、源 IP 地址、操作行为与响应状态。这种用于事故后原因追溯与合规核查的记录文件被称为是什么？",
    "diagram": "  [ 员工访问 SaaS 服务 ]\n         │\n         ▼\n  ┌──────────────────────────┐\n  │ SaaS 运营商后台日志系统  │ ──► [ 记录: 时间戳 / 源 IP / 操作行为 ]\n  └─────────────┬────────────┘\n                ▼\n  [ アクセスログ (安全审计与事后追溯) ]",
    "answerOptions": [
      {
        "text": "アクセスログ",
        "isCorrect": true,
        "rationale": "访问日志（アクセスログ／Access Log）是指服务器、代理设备或 SaaS 平台按时间顺序自动记录的用户访问历史文件。内容通常包括访问时间、源 IP 地址、请求 URL、响应状态码等，是合规审计与安全事故追踪的核心依据。"
      },
      {
        "text": "キープアライブログ",
        "isCorrect": false,
        "rationale": "保活日志（キープアライブ／Keep-Alive Log）仅用于记录网络设备间维持长连接心跳检测的信息，不包含用户层的具体业务操作与访问行为。"
      },
      {
        "text": "エラーログ",
        "isCorrect": false,
        "rationale": "错误日志（エラーログ／Error Log）仅记录系统或程序运行过程中抛出的异常与故障崩溃信息，不包含正常的业务访问流水。"
      },
      {
        "text": "変更履歴ログ",
        "isCorrect": false,
        "rationale": "变更日志/审计日志（変更履歴ログ／Change Log）专用于记录管理员修改系统配置、变更网络规则的操作历史，不记录普通用户的日常访问流水。"
      }
    ],
    "hint": "寻找指代<b>按时间顺序记录用户访问时间、源 IP、请求内容，用于安全审计与追溯</b>的日志文件（Access Log）。"
  }
];
console.log("成功加载题库！");