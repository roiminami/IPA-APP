// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某企业在扩展远程办公（テレワーク）应用时，为了保障员工通过 Web 浏览器接入本社内网操作远程桌面时的通信安全，决定在传输层（トランスポート層）建立安全的加密通道。该技术通过握手协议协商对称密钥，并使用数字证书进行服务器认证，能够为上层的 HTTP 通信提供防篡改与防窃听的安全保障。这种在 OSI 参照模型的传输层提供数据加密与身份认证的协议被称为是什么？",
    "diagram": "  [ 客户端 Web 浏览器 ]\n          │\n          ▼  (传输层 TLS 建立加密隧道)\n  ┌───────────────┐\n  │  TLS / HTTPS  │  (防篡改/加密/服务器认证)\n  └───────┬───────┘\n          ▼\n  [ 内部网络 / VPN 服务器 ]",
    "answerOptions": [
      {
        "text": "TLS",
        "isCorrect": true,
        "rationale": "TLS（Transport Layer Security）作用于 OSI 模型的传输层（トランスポート層），通过非对称加密交换密钥、对称加密传输数据以及数字证书认证身份，为 HTTP 等上层应用提供安全保障。"
      },
      {
        "text": "IPSec",
        "isCorrect": false,
        "rationale": "IPSec 作用于网络层（ネットワーク層），主要用于建立站点间（拠点間）的 VPN 通道，并不在传输层针对单个 Web 浏览器会话提供加密。"
      },
      {
        "text": "SSH",
        "isCorrect": false,
        "rationale": "SSH（Secure Shell）主要作用于应用层，用于远程命令行登录与文件传输（SFTP），不作为 Web 浏览器标准 HTTPS 通信的传输层基础。"
      },
      {
        "text": "L2TP",
        "isCorrect": false,
        "rationale": "L2TP（Layer 2 Tunneling Protocol）作用于数据链路层（データリンク層），用于隧道封装但本身不具备数据加密功能，通常需要配合 IPSec 使用。"
      }
    ],
    "hint": "请关注在<b>传输层（トランスポート層）</b>为 Web 通信提供加密与认证的核心安全协议。"
  },
  {
    "questionNumber": 2,
    "question": "某跨国公司需要将本社数据中心与全国多个营业所的内部网络进行安全互联。为了防止跨越公共互联网的业务数据被中途截获或篡改，网络团队决定采用一种在网络层（ネットワーク層）对 IP 数据包进行整体封装与加密的 VPN 技术。该技术能够在不改变现有应用软件的前提下，实现透明的站点间（拠点間）加密通信。这种在网络层提供安全保障的协议簇被称为是什么？",
    "diagram": "  [ 本社内网 ] ──► [ 本社 VPN 网关 ]\n                           │ (网络层 IP 包加密与隧道封装)\n                           ▼ (IPSec 隧道)\n  [ 营业所内网 ] ◄── [ 营业所 VPN 网关 ]",
    "answerOptions": [
      {
        "text": "IPSec",
        "isCorrect": true,
        "rationale": "IPSec（IP Security）在 OSI 参照模型的网络层（ネットワーク層）工作，提供数据包加密（ESP）、完整性校验（AH）与密钥交换（IKE），是构建站点间（拠点間）VPN 的标准技术。"
      },
      {
        "text": "TLS",
        "isCorrect": false,
        "rationale": "TLS 作用于传输层（トランスポート層），通常用于客户端到服务器端的会话加密（如 SSL-VPN），并非网络层数据包级别的隧道加密协议。"
      },
      {
        "text": "PPPoE",
        "isCorrect": false,
        "rationale": "PPPoE（PPP over Ethernet）作用于数据链路层（データリンク層），用于在以太网上建立点对点连接与身份认证，不提供透明的网络层数据包加密。"
      },
      {
        "text": "SNMP",
        "isCorrect": false,
        "rationale": "SNMP（Simple Network Management Protocol）属于应用层网络管理协议，用于收集网络设备的状态信息与性能监控，与 VPN 加密无关。"
      }
    ],
    "hint": "注意在<b>网络层（ネットワーク層）</b>对整个 IP 数据包进行加密与隧道封装的 VPN 协议。"
  },
  {
    "questionNumber": 3,
    "question": "某企业在全面推行远程办公后，由于所有员工的 Web 会议（SaaS）流量均须先绕经本社 VPN 网关与代理服务器，导致本社的互联网出口线路严重拥堵，业务系统出现频繁延迟。为了解决这一带宽瓶颈，IT 部门在分支机构的 UTM 设备及浏览器上配置了路由例外策略，允许仅将前往 Web 会议 SaaS 的流量直接从分支机构的互联网线路发往外部，而其他业务流量仍保留 VPN 回传。这种将特定 SaaS 流量在分支直接分流至互联网的技术被称为是什么？",
    "diagram": "  [ 分支机构终端 ]\n         │\n         ├──────► [ UTM 流量分流 ] ──► (SaaS 直连: ローカルブレイクアウト)\n         │\n         └──────► [ 本社 VPN 隧道 ] ──► (核心业务流量回传)",
    "answerOptions": [
      {
        "text": "ローカルブレイクアウト",
        "isCorrect": true,
        "rationale": "本地互联网分流（ローカルブレイクアウト／Local Breakout，或 Internet Breakout）是指分支机构或远程终端将访问特定安全 SaaS（如 Web 会议）的流量直接通过本地互联网出口解封分流，从而减轻总社 VPN 网关与专线带宽负担的技术。"
      },
      {
        "text": "ロードバランシング",
        "isCorrect": false,
        "rationale": "负载均衡（ロードバランシング／Load Balancing）是指将访问请求分发到同一服务集群的多台后端服务器上，并不涉及将指定 SaaS 流量绕过总社 VPN 进行本地分流。"
      },
      {
        "text": "ポートフォワーディング",
        "isCorrect": false,
        "rationale": "端口转发（ポートフォワーディング／Port Forwarding）是指将特定 IP 和端口的网络流量重定向到另一台机器的特定端口，不属于云端 SaaS 流量分流架构。"
      },
      {
        "text": "ディープパケットインスペクション",
        "isCorrect": false,
        "rationale": "深度包检测（DPI／Deep Packet Inspection）是一种用于分析数据包载荷内容的防火墙检查技术，是识别流量特征的手段，而非流量分流路由架构本身。"
      }
    ],
    "hint": "寻找允许特定 SaaS 流量<b>绕过本社 VPN 网关，直接从分支出口访问互联网（本地折返）</b>的技术概念。"
  },
  {
    "questionNumber": 4,
    "question": "某企业为防止远程办公人员因固定密码泄漏而导致内网被非法入侵，引入了一种动态安全认证机制。员工在登录 VPN Portal 时，除了输入静态账号外，还必须输入由手机认证令牌软件根据时间戳动态生成且仅在 30 秒内有效的数字凭证。这种一次有效、过期即作废的动态密码验证方式被称为是什么？",
    "diagram": "  [ 用户/手机令牌 ] ──( 30秒动态生成 )──► [ 106829 ]\n                                              │\n                                              ▼ (验证通过且作废)\n                                   [ 认证服务器 (RADIUS) ]",
    "answerOptions": [
      {
        "text": "ワンタイムパスワード",
        "isCorrect": true,
        "rationale": "动态口令/一次性密码（ワンタイムパスワード／One-Time Password, OTP）是指每次登录时基于算法或时间戳动态生成且仅能使用一次的密码，能极大地抵御重放攻击与静态密码泄露风险。"
      },
      {
        "text": "シングルサインオン",
        "isCorrect": false,
        "rationale": "单点登录（シングルサインオン／SSO）允许用户仅需一次身份验证即可访问多个相互信任的应用系统，与密码是否动态一次性无关。"
      },
      {
        "text": "パスワードハッシュ",
        "isCorrect": false,
        "rationale": "密码哈希（パスワードハッシュ／Password Hash）是指对静态密码进行单向哈希函数处理后保存的技术，防止数据库泄露明文，密码本身并非动态变化的。"
      },
      {
        "text": "チャレンジレスポンス",
        "isCorrect": false,
        "rationale": "挑战应答机制（チャレンジレスポンス／Challenge-Response）是一种身份验证协议通信过程，虽然可用于实现 OTP，但其本身指代协议握手过程，非动态密码这一凭证概念。"
      }
    ],
    "hint": "注意<b>在一定时间内有效且仅能使用一次（一次性）</b>的动态验证口令术语。"
  },
  {
    "questionNumber": 5,
    "question": "某高科技企业为了防范员工使用未经公司许可的私有终端（BYOD）远程接入内网，决定在 TLS 握手过程中增加对客户端硬件身份的刚性校验。公司安全部门在每一台受信任的社用笔记本电脑中提前安装由公钥基础设施（PKI）颁发的电子凭证，VPN 服务器在建立会话时会严格核验该凭证的合法性与有效性。这种用于精准标识并验证客户端终端身份的电子证书被称为是什么？",
    "diagram": "  [ 客户端 PC ] ──( 发送客户端证书凭证 )──► [ VPN / Web 服务器 ]\n                                                     │\n                                                     ▼ (核验 PKI 签名与 CA 链)\n                                            [ 确认是否为许可终端 ]",
    "answerOptions": [
      {
        "text": "クライアント証明書",
        "isCorrect": true,
        "rationale": "客户端证书（クライアント証明書 / Client Certificate）是由 CA 颁发并安装在客户端终端上的 PKI 数字证书。在 TLS 双向认证中，服务器利用它精确核验客户端终端的合法性，防止非授权设备接入。"
      },
      {
        "text": "サーバ証明書",
        "isCorrect": false,
        "rationale": "服务器证书（サーバ証明書 / Server Certificate）安装在 Web 或 VPN 服务器端，用于向客户端证明服务器自身的身份，并提供公钥以建立 TLS 加密。"
      },
      {
        "text": "ルート証明書",
        "isCorrect": false,
        "rationale": "根证书（ルート証明書 / Root Certificate）是根证书颁发机构（Root CA）自身的证书，预装在系统中用作信任链的源头，并非用于标识特定客户端终端。"
      },
      {
        "text": "中間CA証明書",
        "isCorrect": false,
        "rationale": "中间 CA 证书（中間CA証明書 / Intermediate CA Certificate）用于连接根 CA 和最终实体证书，构建完整的信任链，不直接作为终端身份证书。"
      }
    ],
    "hint": "寻找安装在<b>客户端终端（端末）上</b>，用于在 TLS 双向认证中证明<b>设备身份</b>的数字证书。"
  },
  {
    "questionNumber": 6,
    "question": "某中小企业在规划分支机构的网络安全架构时，为了降低多台独立安全设备（如防火墙、IDS/IPS、防病毒网关、URL 过滤等）带来的繁琐运维成本与采购开支，决定在网络边界部署一台一体化安全网关。该设备在一台硬件上集成了多种安全防护功能，能对进出分支机构的所有流量进行统一的安全审查与策略管理。这种集成了多种安全功能的多合一网络安全设备被称为是什么？",
    "diagram": "  [ 外部互联网流量 ]\n          │\n          ▼\n  ┌─────────────────────────────────┐\n  │  UTM (統合脅威管理)             │\n  │  [FW | IDS/IPS | 防病毒 | 过滤] │\n  └──────────────┬──────────────────┘\n                 ▼\n  [ 分支机构内部 LAN ]",
    "answerOptions": [
      {
        "text": "UTM",
        "isCorrect": true,
        "rationale": "统一威胁管理（UTM／Unified Threat Management）是一种将防火墙（FW）、IDS/IPS、防病毒（Anti-Virus）、Web 过滤及 VPN 等多种安全功能整合在一台单一硬件设备中的多功能网关。"
      },
      {
        "text": "WAF",
        "isCorrect": false,
        "rationale": "Web 应用防火墙（WAF／Web Application Firewall）专门用于防护 HTTP/HTTPS 协议下的 Web 应用层攻击（如 SQL 注入、XSS），不具备全套网络层网关功能。"
      },
      {
        "text": "SIEM",
        "isCorrect": false,
        "rationale": "Security Information and Event Management（SIEM）是用于集中收集、分析多台设备日志并进行安全事件关联告警的软件平台，并非边界流量防护网关设备。"
      },
      {
        "text": "EDR",
        "isCorrect": false,
        "rationale": "Endpoint Detection and Response（EDR）是部署在终端电脑/服务器（Endpoint）上的行为监控与响应软件，并非网络边界的硬件网关。"
      }
    ],
    "hint": "注意将<b>防火墙、IPS、Web 过滤等多重防护功能集中于单一设备（統合）</b>的网络安全设备缩写。"
  },
  {
    "questionNumber": 7,
    "question": "某企业为了对社内员工访问外部互联网的行为进行统一审计与合规管控，要求所有终端的 Web 浏览器必须通过内部部署的一台中间服务器访问外网。该中间服务器代表内部客户端向外部 Web 网站发起请求，不仅能够提供访问日志记录，还能基于 URL 策略阻断员工访问恶意网站，并对重复请求的内容进行缓存以节省出口带宽。这种部署在客户端与外部互联网之间的代理机制被称为是什么？",
    "diagram": "  [ 内部 PC ] ──► [ 正向代理 (フォワードプロキシ) ] ──► [ 外部 Web 网站 ]\n                       │ (日志记录 / URL 过滤 / 缓存)\n                       ▼",
    "answerOptions": [
      {
        "text": "プロキシサーバ",
        "isCorrect": true,
        "rationale": "正向代理服务器（フォワードプロキシ / Forward Proxy Server）部署在内部网络与外部互联网之间，代表内部客户端向外部发起访问请求，用于访问控制（URL 过滤）、日志记录与缓存加速。"
      },
      {
        "text": "リバースプロキシサーバ",
        "isCorrect": false,
        "rationale": "反向代理服务器（リバースプロキシ）部署在外部互联网与内部服务器之间，代表外部客户端访问内部服务器，主要用于服务器负载均衡与隐藏内部拓扑。"
      },
      {
        "text": "DNSサーバ",
        "isCorrect": false,
        "rationale": "域名服务器（DNS サーバ）负责将人类可读的域名解析为 IP 地址，不负责代理客户端发起 HTTP 请求或进行 Web 内容过滤。"
      },
      {
        "text": "DHCPサーバ",
        "isCorrect": false,
        "rationale": "DHCP 服务器用于为局域网内的终端动态分配 IP 地址、子网掩码及默认网关等网络参数，不参与 Web 访问代理与日志审计。"
      }
    ],
    "hint": "寻找<b>代表内部客户端（PC）访问外部网站</b>，提供<b>URL 过滤与访问日志（ログ）</b>的服务器。"
  },
  {
    "questionNumber": 8,
    "question": "某电子商务企业为了保护其核心 Web 服务器免受外部互联网的直接威胁，并提升大促期间的并发处理能力，在 DMZ 区域部署了一台前端接入设备。该设备隐藏了后端的实际 Web 服务器 IP 地址，代表外部 Internet 用户接收 HTTP/HTTPS 请求，并将其转发给后端多台真实的 Web 服务器，同时承担 SSL 卸载与静态资源缓存。这种位于外部用户与内部服务器之间的代理架构被称为是什么？",
    "diagram": "  [ 外部 Internet 用户 ]\n            │\n            ▼\n  ┌───────────────────────────┐\n  │ 反向代理 (リバースプロキシ)│ (隐藏后端拓扑 / SSL 卸载)\n  └─────────┬─────────┬───────┘\n            ▼         ▼\n     [ Web服务器1 ] [ Web服务器2 ]",
    "answerOptions": [
      {
        "text": "リバースプロキシ",
        "isCorrect": true,
        "rationale": "反向代理（リバースプロキシ／Reverse Proxy）置于 Web 服务器集群的前端，外部客户端认为其就是目标服务器。它能够隐藏后端服务器真实架构、执行 SSL 加解密卸载、提供缓存与负载均衡。"
      },
      {
        "text": "フォワードプロキシ",
        "isCorrect": false,
        "rationale": "正向代理（フォワードプロキシ）代表内部客户端访问外部互联网，后端是互联网，前端是社内 PC，与反向代理作用方向相反。"
      },
      {
        "text": "NATサーバ",
        "isCorrect": false,
        "rationale": "网络地址转换（NAT）仅在 IP 层转换数据包的源/目的 IP 地址与端口，不处理 HTTP/HTTPS 应用层协议，也不承担 SSL 卸载或应用层缓存。"
      },
      {
        "text": "RADIUSサーバ",
        "isCorrect": false,
        "rationale": "RADIUS 是用于网络接入身份认证、授权和计费（AAA）的后端协议服务器，不参与 Web HTTP 通信的反向代理与负载分流。"
      }
    ],
    "hint": "注意部署在<b>Web 服务器集群前端</b>，代表<b>外部客户端访问内部服务器</b>的代理架构。"
  },
  {
    "questionNumber": 9,
    "question": "某企业在部署远程办公方案时，为了彻底防止社密敏感文件被员工下载保存到个人远程 PC 上导致数据泄漏，决定采用一种“数据不留本地”的控制技术。员工在居家办公时，远程 PC 仅通过网络接收社内电脑的桌面图像显示信息，并将鼠标键盘的控制指令传回社内电脑，所有的业务数据计算与文件存储均严格限制在社内电脑与文件服务器上。这种基于桌面图像传输的远程控制方式被称为是什么？",
    "diagram": "  [ 远程 PC (居家) ] ◄──( 仅传输桌面画面与键盘鼠标操作 )──► [ 社内内部 PC ]\n                                                              │\n                                                              ▼ (数据存取)\n                                                     [ 社内文件服务器 ]",
    "answerOptions": [
      {
        "text": "リモートデスクトップ",
        "isCorrect": true,
        "rationale": "远程桌面（リモートデスクトップ / Remote Desktop）技术仅在终端与目标电脑之间传输画面更新信息与键盘鼠标操作指令，实际的应用程序运行与数据存储均在社内目标电脑上完成，能有效防止敏感数据被下载到远程终端。"
      },
      {
        "text": "FTP",
        "isCorrect": false,
        "rationale": "文件传输协议（FTP／File Transfer Protocol）专用于在网络间上传和下载完整的文件副本，会导致数据保存到本地终端，与“数据不留本地”要求背道而驰。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN／Virtual Local Area Network）是在交换机上划分广播域的二次链路隔离技术，不提供远程图形界面操控与数据防泄露机制。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "域名系统（DNS）仅提供域名与 IP 地址之间的解析映射服务，与远程控制桌面画面无关。"
      }
    ],
    "hint": "寻找<b>仅传输桌面画面与操作指令（画面情報・操作情報）</b>，保证<b>数据不留本地</b>的远程控制技术。"
  },
  {
    "questionNumber": 10,
    "question": "网络工程师在对企业远程办公线路进行容量规划时，需要将实测的数据传输量准确换算为所需的网络通信带宽。经实测，某高质量视频会议软件在并发使用时，平均每名用户在 10 分钟内传输的数据总量为 120 M 字节（M Byte）。若要求算出单名用户所需的通信带宽（以 M 比特/秒，即 Mbps 为单位），计算得出的正确数值是多少？",
    "diagram": "  数据总量: 120 MByte\n       │  (1 Byte = 8 bits)\n       ▼\n  总比特量: 960 Mbit  ──( 除以 10分钟/600秒 )──►  通信带宽: 1.6 Mbps",
    "answerOptions": [
      {
        "text": "1.6",
        "isCorrect": true,
        "rationale": "计算过程：1 Byte = 8 bits。120 MByte = 120 × 8 = 960 Mbit。时间为 10 分钟 = 600 秒。所需通信带宽 = 960 Mbit ÷ 600 秒 = 1.6 Mbit/秒（Mbps）。"
      },
      {
        "text": "0.2",
        "isCorrect": false,
        "rationale": "0.2 是将 120 MByte 直接除以 600 秒得到的值（0.2 MB/s），单位仍为 MByte/秒，漏乘了 Byte 转 bit 的系数 8。"
      },
      {
        "text": "12.0",
        "isCorrect": false,
        "rationale": "12.0 是将 120 MByte 除以 10 分钟得出的误算值，未将时间转化为秒（600 秒），也未将 Byte 换算为 bit。"
      },
      {
        "text": "9.6",
        "isCorrect": false,
        "rationale": "9.6 是将 960 Mbit 错误地除以 100 秒导出的计算错误值。"
      }
    ],
    "hint": "注意单位换算：<b>1 字节（Byte）= 8 比特（bit）</b>，<b>10 分钟 = 600 秒</b>，带宽单位为 Mbit/s。"
  },
  {
    "questionNumber": 11,
    "question": "某企业内网划分为多个独立的 VLAN（如开发部 VLAN、财务部 VLAN、服务器区 VLAN）。为了实现不同 VLAN 内部终端之间的高速 IP 路由转发，同时避免传统路由器端口数量受限与路由转发吞吐量瓶颈，网络架构师决定部署一台具备硬件芯片 ASIC 路由转发能力的网络设备。该设备同时具备交换机的多端口线速交换性能与路由器的三层路由功能。这种设备被称为是什么？",
    "diagram": "  [ VLAN 10 (开发) ] ──┐\n                      ├──► [ L3 スイッチ ] (ASIC 硬件路由转发)\n  [ VLAN 20 (财务) ] ──┘",
    "answerOptions": [
      {
        "text": "L3スイッチ",
        "isCorrect": true,
        "rationale": "三层交换机（L3スイッチ／Layer 3 Switch）结合了二层交换机的高速硬件转发能力与三层路由器的 IP 路由功能，能够利用专用硬件芯片（ASIC）高效完成 VLAN 间的路由转发。"
      },
      {
        "text": "L2スイッチ",
        "isCorrect": false,
        "rationale": "二层交换机（L2スイッチ／Layer 2 Switch）仅工作在数据链路层，基于 MAC 地址表在同一 VLAN 内部转发数据帧，无法执行跨 VLAN 的 IP 路由。"
      },
      {
        "text": "リピータハブ",
        "isCorrect": false,
        "rationale": "集线器（リピータハブ／Repeater Hub）工作在物理层，仅对比特信号进行放大并广播到所有端口，属于淘汰的共享介质设备。"
      },
      {
        "text": "ブリッジ",
        "isCorrect": false,
        "rationale": "网桥（ブリッジ／Bridge）主要用于在数据链路层连接两个不同的物理网段，不具备多端口硬件 ASIC 高速 VLAN 间路由功能。"
      }
    ],
    "hint": "寻找结合了<b>二层交换机的高速端口</b>与<b>三层路由器 IP 路由功能（VLAN 間ルーティング）</b>的硬件设备。"
  },
  {
    "questionNumber": 12,
    "question": "某公司在为出差员工部署远程接入 VPN 时，希望降低客户端设备的维护成本，避免在员工的笔记本电脑或手机上预先安装和升级特定的专用 VPN 客户端软件。企业选择了利用终端设备上普遍自带的标准 Web 浏览器，通过 TLS 协议建立安全会话来接入内网 Portal 并访问授权的 Web 业务系统。这种基于 Web 浏览器实现的远程接入 VPN 方式被称为是什么？",
    "diagram": "  [ 员工手机/笔记本 ] ──( 标准 Web 浏览器 / TLS )──► [ SSL-VPN 网关 ] ──► [ 内网系统 ]",
    "answerOptions": [
      {
        "text": "SSL-VPN",
        "isCorrect": true,
        "rationale": "SSL-VPN 利用 TLS/SSL 协议实现，用户只需使用终端上的标准 Web 浏览器即可接入，无需预先安装专用客户端软件（Web 代理模式），极大地降低了远程客户端的部署与运维成本。"
      },
      {
        "text": "IPSec-VPN",
        "isCorrect": false,
        "rationale": "IPSec-VPN 工作在网络层，在远程客户端接入模式下通常需要预先安装专门的 IPSec 客户端软件并配置复杂的网络参数。"
      },
      {
        "text": "PPTP",
        "isCorrect": false,
        "rationale": "点对点隧道协议（PPTP）是较旧的数据链路层隧道协议，安全强度较低且同样依赖特定的 VPN 拨号客户端设置。"
      },
      {
        "text": "MPLS-VPN",
        "isCorrect": false,
        "rationale": "MPLS-VPN 是运营商在骨干网内部利用多协议标签交换构建的专线级企业 VPN，不属于终端用户通过 Web 浏览器接入的形式。"
      }
    ],
    "hint": "注意<b>利用标准 Web 浏览器（TLS/SSL）</b>即可实现接入、<b>无需预装专用客户端软件</b>的 VPN 模式。"
  },
  {
    "questionNumber": 13,
    "question": "某大型企业网络中部署了无线 AP、VPN 网关、802.1X 认证交换机等多台网络接入设备。为了避免在每台网络设备上重复配置和维护庞大的用户账号密码库，网络安全运维团队建立了一台集中式身份认证服务器。当终端尝试接入网络时，各接入设备将认证请求统一转发给该服务器，由其集中核对数据库并返回认证与授权结果。这种网络接入 AAA（认证、授权、计费）集中管理的标准协议与服务器被称为是什么？",
    "diagram": "  [ 终端用户 ] ──► [ VPN网关 / 无线AP ]\n                           │ (RADIUS 协议转发认证请求)\n                           ▼\n                [ RADIUS 认证服务器 ] ──► [ 用户账号数据库 ]",
    "answerOptions": [
      {
        "text": "RADIUS",
        "isCorrect": true,
        "rationale": "RADIUS（Remote Authentication Dial-In User Service）是用于集中式网络接入认证、授权和计费（AAA）的标准网络协议。网络接入设备（如 VPN 网关、无线 AP）作为 RADIUS 客户端，将用户凭证转发至 RADIUS 服务器统一验证。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "DNS 服务专门用于域名与 IP 地址之间的解析，不承担网络接入的 AAA 身份认证与授权职责。"
      },
      {
        "text": "NTP",
        "isCorrect": false,
        "rationale": "网络时间协议（NTP／Network Time Protocol）用于在网络中的所有计算机和网络设备之间同步系统时间，与身份认证无关。"
      },
      {
        "text": "SMTP",
        "isCorrect": false,
        "rationale": "简单邮件传输协议（SMTP／Simple Mail Transfer Protocol）用于在网络中发送和中继电子邮件，属于邮件传输协议。"
      }
    ],
    "hint": "寻找集中管理网络接入<b>AAA（认证、授权、计费／認証・認可・課金）</b>的标准协议服务器缩写。"
  },
  {
    "questionNumber": 14,
    "question": "企业为了防止外部黑客在攻破公开 Web 服务器后直接入侵内网数据库，在防火墙上规划了一个特殊的隔离网络区域。该区域置于外部互联网与内部 LAN 之间，专门用于放置 Web 服务器、邮件中继服务器等需要面向 Internet 提供服务的节点。防火墙严格限制该区域主动向内部 LAN 发起连接。这种位于内外网之间的隔离安全缓冲区被称为是什么？",
    "diagram": "  [ 外部互联网 ] ──► [ 防火墙 (FW) ] ──► [ 内部 LAN (数据库/PC) ]\n                          │\n                          ▼ (严格隔离区)\n                    [ DMZ 区域 ] (Web/邮件/VPN 服务器)",
    "answerOptions": [
      {
        "text": "DMZ",
        "isCorrect": true,
        "rationale": "非军事区/隔离区（DMZ／DeMilitarized Zone）是防火墙划分的一个隔离网络区域。它用于放置面向互联网提供服务的外部公开服务器（如 Web、邮件服务器），防止该区域被攻破后直接殃及内部内网（LAN）。"
      },
      {
        "text": "VPC",
        "isCorrect": false,
        "rationale": "虚拟私有云（VPC／Virtual Private Cloud）是云计算环境中的逻辑隔离私有网络空间，并不特指物理/逻辑防火墙架构中的 DMZ 隔离区。"
      },
      {
        "text": "VPN",
        "isCorrect": false,
        "rationale": "虚拟专用网（VPN）是利用加密技术在公共网络上建立安全通道的技术，属于通信加密手段，而非网络区域划分概念。"
      },
      {
        "text": "SDN",
        "isCorrect": false,
        "rationale": "软件定义网络（SDN／Software-Defined Networking）是一种将网络控制平面与数据转发平面分离的集中式网络管理架构，并非网络安全区域划分术语。"
      }
    ],
    "hint": "寻找放置<b>Web/邮件等公开服务器</b>，位于<b>内外网之间的隔离安全区域（非公然区画）</b>缩写。"
  },
  {
    "questionNumber": 15,
    "question": "某金融机构为了彻底解决单依靠“账号+静态密码”容易被钓鱼或暴破攻破的安全隐患，在员工登录核心业务系统时强制启用了一种高强度认证机制。该机制要求用户同时提供至少两种不同类别的认证要素，例如：用户记忆的知识要素（密码/PIN）、用户拥有的所有要素（智能卡/手机 OTP）以及用户固有的生物特征要素（指纹/人脸）。这种结合多种不同维度要素的身份验证方式被称为是什么？",
    "diagram": "  [ 知识要素 (密码) ] ──┐\n                       ├──► [ 多要素認証 (MFA) ] ──► [ 允许高安全级别访问 ]\n  [ 所持要素 (OTP/卡) ] ──┘",
    "answerOptions": [
      {
        "text": "多要素認証",
        "isCorrect": true,
        "rationale": "多要素认证（多要素認証／Multi-Factor Authentication, MFA）是指结合“知识（知识要素：密码）”、“所持（所持要素：手机/IC卡）”和“固有（生体要素：指纹/人脸）”这三大类别中的两种或两种以上要素进行的身份验证，安全性显著高于单一要素认证。"
      },
      {
        "text": "シングルサインオン",
        "isCorrect": false,
        "rationale": "单点登录（シングルサインオン／SSO）解决的是“一次登录访问多系统”的便利性问题，与登录时是否结合了多个不同维度的安全验证要素无关。"
      },
      {
        "text": "チャレンジレスポンス",
        "isCorrect": false,
        "rationale": "挑战应答（チャレンジレスポンス）是一种防口令明文传输的握手验证机制，可以使用单一要素（密码哈希）实现，并非组合多种因素的 MFA。"
      },
      {
        "text": "パブリックキーインフラストラクチャ",
        "isCorrect": false,
        "rationale": "公钥基础设施（PKI／Public Key Infrastructure）是基于非对称加密管理数字证书与公钥的安全体系架构，并非认证要素组合策略。"
      }
    ],
    "hint": "注意结合<b>知识（密码）、所持（手机/卡）、固有（指纹）</b>等<b>两种以上不同维度要素（多要素）</b>的认证机制。"
  }
];
console.log("成功加载题库！");