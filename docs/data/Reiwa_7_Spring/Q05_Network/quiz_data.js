// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "在企业局域网（社内LAN）中，当某台 PC 试图向同一网段内的另一台设备（如打印机）发送数据时，必须将目标的 IP 地址（IPアドレス）解析为数据链路层的物理地址（MACアドレス）。设备首先会查询本地的地址解析缓存表（ARPキャッシュテーブル），若未找到对应记录，则会在整个广播域内发送广播请求。收到请求的目标设备会以单播形式返回自身的物理地址。如果网内存在设备手动误配了相同的 IP 地址，会导致缓存表被错误的映射覆盖，进而引发通信中断。这种在局域网内动态完成 IP 地址至 MAC 地址映射解析的关键协议是什么？",
    "diagram": "  [ 本地 PC (PC-C) ]\n         │ (查询目标 IP 对应的 MAC)\n         ▼\n  [ 发送 ARP 广播请求 ] (ARP Request)\n         │\n         ▼\n  [ 目标设备响应单播 ] (ARP Reply)\n         │\n         ▼\n  [ 更新本地 ARP 缓存表 ] (ARP Cache)",
    "answerOptions": [
      {
        "text": "ARP",
        "isCorrect": true,
        "rationale": "地址解析协议（ARP／Address Resolution Protocol）工作在 TCP/IP 模型的网络层与数据链路层交界处，专门负责将 3 层的 IP 地址（IPアドレス）转换为 2 层的物理硬件地址（MACアドレス）。在以太网通信中，数据帧最终必须通过 MAC 地址寻址。设备发起通信前会广播 ARP Request（广播地址为 FF-FF-FF-FF-FF-FF），目标设备响应单播 ARP Reply 并携带其 MAC 地址。若网内发生 IP 地址重复（IPアドレス重複），响应速度快的设备会覆盖本地 ARP 缓存表（ARPキャッシュテーブル），导致数据包发送至错误接收方而发生断网故障。"
      },
      {
        "text": "RARP",
        "isCorrect": false,
        "rationale": "逆向地址解析协议（RARP／Reverse Address Resolution Protocol）的功能与 ARP 完全相反，工作在数据链路层。它主要用于无盘工作站等没有本地存储介质的硬件设备在引导启动时，已知自身的 MAC 地址，向局域网内的 RARP 服务器查询并获取动态分配的 IP 地址。"
      },
      {
        "text": "NDP",
        "isCorrect": false,
        "rationale": "邻居发现协议（NDP／Neighbor Discovery Protocol）是运行于 IPv6 环境下的底层协议，依靠 ICMPv6 报文实现。它替代了 IPv4 中 ARP 的地址解析功能，并扩展了路由器发现、重定向和无状态地址自动配置（SLAAC）等高级功能，并不适用于传统的 IPv4 局域网。"
      },
      {
        "text": "IGMP",
        "isCorrect": false,
        "rationale": "网际组管理协议（IGMP／Internet Group Management Protocol）工作于网络层，主要用于 IP 组播（マルチキャスト）通信中，管理主机与组播路由器之间的组播组成员资格。它负责加入或离开组播组的信息交互，完全不具备任何 IP 地址至 MAC 地址的解析职能。"
      }
    ],
    "hint": "请关注题干中提到的<b>IP 地址转换为物理 MAC 地址</b>以及<b>局域网内广播查询与缓存表更新</b>的机制。在日本 AP 考试中，解决二层网络地址映射和 IP 冲突排查的核心协议是 <b>ARP</b>。"
  },
  {
    "questionNumber": 2,
    "question": "为了防止员工私自将未授权的个人设备或外来 PC 接入企业内部局域网（社内LAN）并引发安全隐患，企业网络架构师决定在接入层交换机上部署严格的终端认证机制。当新设备插上网线或连接无线接入点（無線AP）时，接入设备默认处于受限状态，仅允许认证报文通过；只有当终端通过认证客户端向后端的 RADIUS 认证服务器（認証サーバ）提交合法凭证并通过校验后，交换机才开启该端口的数据转发功能。这种基于端口网络接入控制（Port-based Network Access Control）的标准认证协议是什么？",
    "diagram": "  [ 待接入终端 (Supplicant) ]\n         │ (发送认证凭证)\n         ▼\n  [ 认证交换机 (Authenticator) ]\n         │ (转发至后端)\n         ▼\n  [ 認証サーバ (RADIUS Server) ]\n         │ (校验通过，开放端口)\n         ▼\n  [ 许可访问企业内网 ]",
    "answerOptions": [
      {
        "text": "IEEE 802.1X",
        "isCorrect": true,
        "rationale": "IEEE 802.1X 是一种基于端口的网络接入控制标准（ポートベース認証）。该标准定义了三方组件逻辑架构：申请者（Supplicant）、认证者（Authenticator／交换机或无线AP）以及认证服务器（認証サーバ／RADIUS服务器）。在认证成功之前，交换机的逻辑端口被划分为“未受控端口”（仅允许 EAPOL 局域网扩展可拓展认证协议报文通过）；认证通过后，“受控端口”开启，才允许正常的业务 IP 数据帧通过，实现了物理级和无线级的网络入口准入检疫。"
      },
      {
        "text": "IEEE 802.1Q",
        "isCorrect": false,
        "rationale": "IEEE 802.1Q 是虚拟局域网（VLAN／Virtual LAN）的标准封装协议。它通过在以太网帧头插入 4 字节的 VLAN Tag（包含 Priority 和 VLAN ID）来实现跨交换机 Trunk 链路的数据带标透传与逻辑子网隔离，完全不具备终端身份认证与准入控制功能。"
      },
      {
        "text": "IEEE 802.11n",
        "isCorrect": false,
        "rationale": "IEEE 802.11n（Wi-Fi 4）是无线局域网（無線LAN）物理层与 MAC 层的传输标准。它引入了多输入多输出（MIMO）技术与 40MHz 频宽绑定，旨在提升无线传输吞吐量（最高 600 Mbps），属于无线物理通信协议，而非网络接入身份认证标准。"
      },
      {
        "text": "IEEE 802.3ad",
        "isCorrect": false,
        "rationale": "IEEE 802.3ad 是链路聚合（リンクアグリゲーション／Link Aggregation）标准，通过 LACP（链路聚合控制协议）将多个物理以太网端口捆绑为一个逻辑上的高带宽通道，用以提高吞吐量与链路冗余避障，不涉及安全准入。"
      }
    ],
    "hint": "注意题干强调的<b>端口级网络接入控制</b>与结合<b>認証サーバ（RADIUS）</b>进行的安全校验。在 AP 网络大纲中，用于 LAN 检疫与终端身份准入的标准协议是 <b>IEEE 802.1X</b>。"
  },
  {
    "questionNumber": 3,
    "question": "在扁平化的二层网络环境中，当设备发送广播数据包（如 ARP 请求）时，网段内所有节点都会接收并处理该数据。随着接入终端数量剧增，广播流量会急剧膨胀甚至引发广播风暴（ブロードキャストストーム），严重挤占网络带宽与设备 CPU 资源。为此，网络管理员决定通过引入三层设备将庞大的局域网拆分为多个独立的子网（サブネット）。这种能够被广播数据包直接达到的最大二层网络范围被称为是什么？",
    "diagram": "  [ 三层路由器 / L3スイッチ ]\n    ┌────┴────┐\n    ▼         ▼\n  [ 子网 A ]  [ 子网 B ]\n    │           │\n  (广播被阻断) (广播被阻断)\n    ▼           ▼\n  [ 广播域 A ] [ 广播域 B ]",
    "answerOptions": [
      {
        "text": "ブロードキャストドメイン",
        "isCorrect": true,
        "rationale": "广播域（ブロードキャストドメイン／Broadcast Domain）是指二层广播数据包（目的 MAC 为 FF-FF-FF-FF-FF-FF）在不经过三层路由的情况下所能扩散泛洪的最大网络范围。传统的二层交换机（L2SW）会盲目转发广播，导致整个局域网处于同一个广播域中；而三层设备（如 L3 交换机或路由器）基于 IP 寻址，会默认阻止广播帧跨子网传播，从而精准隔离广播域，防止广播风暴（ブロードキャストストーム）。"
      },
      {
        "text": "コリジョンドメイン",
        "isCorrect": false,
        "rationale": "冲突域（コリジョンドメイン／Collision Domain）是指物理层使用共享介质（如 Repeater Hub）时可能发生数据包碰撞的区域。二层交换机的每个端口均能独立隔离冲突域，在全双工模式下碰撞域概念不复存在，这与广播域跨交换机的传播范围有本质区别。"
      },
      {
        "text": "マルチキャストグループ",
        "isCorrect": false,
        "rationale": "组播组（マルチキャストグループ／Multicast Group）是指接收特定组播 IP 地址数据流的一组特定主机的集合。组播通过 IGMP 和 PIM 协议精确分发流量，只送达订阅节点，并非以太网广播的物理边界。"
      },
      {
        "text": "VLANトランク",
        "isCorrect": false,
        "rationale": "VLAN 中继链路（VLANトランク／VLAN Trunk）是指交换机之间用于承载和透传多个不同 VLAN 数据的物理通信干线。它是数据的传输通道，本身不是用来刻画广播作用域的范畴概念。"
      }
    ],
    "hint": "题干的核心在于<b>广播数据包能到达的范围</b>以及通过<b>子网划分（サブネット分割）</b>在三层设备上进行隔离。AP 考试中称此范围为<b>ブロードキャストドメイン</b>。"
  },
  {
    "questionNumber": 4,
    "question": "企业网络管理员在排查员工 PC 无法访问外部网站的故障时，首先通过连通性测试命令确认了终端与网关及 DNS 服务器之间的网络层连通正常。为了进一步诊断是否因 DNS 软件故障或缓存污染导致域名无法正确解析为 IP 地址，管理员需要在命令行终端中直接向指定的缓存 DNS 服务器（キャッシュDNSサーバ）提交特定域名的解析查询，并查看详细的应答结果与记录类型。这种专门用于诊断和调试 DNS 域名解析功能的命令行工具是什么？",
    "diagram": "  [ 运维终端 (PC) ]\n         │ (执行 nslookup 域名 DNS服务器IP)\n         ▼\n  [ 发送 DNS 响应查询 ]\n         │\n         ▼\n  [ キャッシュDNSサーバ ]\n         │ (返回解析结果或报错信息)\n         ▼\n  [ 运维人员验证解析状态 ]",
    "answerOptions": [
      {
        "text": "nslookup",
        "isCorrect": true,
        "rationale": "nslookup（Name Server Lookup）是专门用于网络诊断和测试 DNS 域名解析（名前解決）的命令行工具。它允许管理员绕过操作系统本地的 DNS 缓存和 hosts 文件，直接向指定的 DNS 服务器构造并发送 DNS UDP/TCP 53 端口查询报文。它能详细返回正向解析（A/AAAA 记录）、反向解析（PTR 记录）或报错代码（如 NXDOMAIN、SERVFAIL），是定位 DNS 软件异常与服务挂起的核心诊断工具。"
      },
      {
        "text": "ping",
        "isCorrect": false,
        "rationale": "ping 命令利用 ICMP 协议测试目标 IP 地址的网络连通性（疎通確認）与往返延时（RTT）。虽然 ping 输入域名时会尝试触发默认解析，但它无法指定特定的 DNS 服务器发起诊断，也无法查看复杂的 DNS 资源记录细节。"
      },
      {
        "text": "tracert",
        "isCorrect": false,
        "rationale": "tracert（Traceroute）通过逐次递增 ICMP/UDP 数据包的生存时间（TTL）值，利用沿途路由器返回的 ICMP Time Exceeded 报文来追踪数据包从源端到达目的地途经的路由节点及各跳延迟，不具备 DNS 诊断能力。"
      },
      {
        "text": "ipconfig",
        "isCorrect": false,
        "rationale": "ipconfig 主要用于查看 Windows 操作系统本地网卡的 IP 地址、子网掩码、网关和 DNS 配置，或执行刷新本地 DNS 缓存（ipconfig /flushdns），其本身不能作为向远程服务器提交 DNS 查询请求的工具。"
      }
    ],
    "hint": "请注意题干提到的<b>专门用于查询 DNS 服务器并验证名前解決（域名解析）状态</b>的命令行工具。在 AP 网络运维考察中，该诊断命令是 <b>nslookup</b>。"
  },
  {
    "questionNumber": 5,
    "question": "在企业 IT 架构中，若仅部署一台缓存 DNS 服务器，一旦该服务器因软件异常、内存溢出或硬件故障停机，全公司员工将瞬间失去域名解析能力，导致互联网访问中断。为了提高网络核心基础服务的高可用性（ハイアベイラビリティ）与业务连续性，系统架构师在 DMZ 区域部署了多台 DNS 服务器，并在终端或 DHCP 服务器上同时配置主用（Primary）与备用（Secondary）DNS 地址。当主节点故障时，请求会自动 failover 至备用节点。这种通过冗余部署消除单点故障的策略被称为是什么？",
    "diagram": "  [ 客户端解析请求 ]\n         │\n         ├────────────────┐\n         ▼ (主节点故障)   ▼ (自动切换响应)\n  [ 主 DNS サーバ ]  [ 副 DNS サーバ ]\n     ( Down )          ( Active )",
    "answerOptions": [
      {
        "text": "DNSサーバの多重化",
        "isCorrect": true,
        "rationale": "DNS 服务器的多重化/冗余化（冗長化／多重化）是指通过部署两台及以上的 DNS 服务器组成集群或分布式架构。通过主从区域传送（Zone Transfer）保持记录同步，并在终端侧同时配置多个 DNS 地址。当主 DNS 服务器因软件 Bug 崩溃或宕机时，客户端 Resolver 解析器会自动切换至备用 DNS 服务器发起请求，彻底消除了单点故障（SPOF／Single Point of Failure），大幅保障了系统可用性。"
      },
      {
        "text": "DNSキャッシュのクリア",
        "isCorrect": false,
        "rationale": "清除 DNS 缓存（DNSキャッシュのクリア）是指清空客户端或 DNS 服务器内存中暂存的映射记录，主要用于解决域名变更后本地未及时生效的问题，无法提供架构层面的服务冗余与容错。"
      },
      {
        "text": "DNSSECの導入",
        "isCorrect": false,
        "rationale": "DNSSEC（DNS Security Extensions）是通过非对称加密公钥数字签名技术保障 DNS 解析数据真实性与完整性的安全协议，防止 DNS 缓存污染（DNSキャッシュポイズニング）攻击，不涉及高可用架构部署。"
      },
      {
        "text": "ゾーン転送の停止",
        "isCorrect": false,
        "rationale": "停止区域传送（ゾーン転送の停止）是限制 DNS 服务器向未授权 IP 导出整个 Zone 数据库文件的安全防护策略，防止内网拓扑泄露，与高可用容灾思想背道而驰。"
      }
    ],
    "hint": "关注题干中消除<b>单点故障（SPOF）</b>以及提升<b>系统故障时的业务连续性</b>。在午前考试的架构冗余设计考点中，这被称为 <b>DNSサーバの多重化</b>。"
  },
  {
    "questionNumber": 6,
    "question": "在大型企业网络运维监控中，若仅采用网管系统定期向网络设备发起轮询（Polling）的传统方式，往往无法在第一时间捕获突发性的链路中断或流量暴增事件。为了提高故障响应的时效性，网管协议提供了一种由被管理设备（SNMP Agent）主动发起的通知机制：当三层交换机检测到接口流量超过预设阈值（如 800 Mbps）或发生链路状态变更时，会自动且实时地向网络管理工作站（SNMP Manager）发送告警报文。这种由设备自发推送的异常通知机制被称为是什么？",
    "diagram": "  [ L3 交换机 (SNMP Agent) ]\n         │ (检测到流量 > 800 Mbps 阈值)\n         ▼\n  [ 触发自发告警报文 ]\n         │\n         ▼\n  [ 运维网管站 (SNMP Manager) ]\n         │\n         ▼\n  [ 产生告警日志并通知管理员 ]",
    "answerOptions": [
      {
        "text": "SNMPトラップ",
        "isCorrect": true,
        "rationale": "SNMP Trap（SNMPトラップ）是 SNMP 协议中由 Agent（被管理设备）主动向 Manager（网管站）发送的 UDP 162 端口异步事件告警报文。与网管站主动轮询（Polling）不同，Trap 采用事件驱动模式（Push），当交换机发生端口 LinkDown、CPU 过载或流量突破安全阈值（如 800 Mbps）时，设备能毫秒级主动通知网管站，极大提升了故障发现的时效性。"
      },
      {
        "text": "SNMP GetRequest",
        "isCorrect": false,
        "rationale": "SNMP GetRequest 是由网管站（SNMP Manager）发起的被动拉取（Pull）指令，通过 UDP 161 端口向 Agent 查询特定 MIB（管理信息库）变量的当前数值。"
      },
      {
        "text": "SNMP SetRequest",
        "isCorrect": false,
        "rationale": "SNMP SetRequest 是由网管站发起的控制指令，用于远程修改被管理设备上的特定 MIB 参数配置（例如远程关闭某个异常交换机端口）。"
      },
      {
        "text": "SNMP GetNextRequest",
        "isCorrect": false,
        "rationale": "SNMP GetNextRequest 用于遍历被管理设备的 MIB 字典树结构，按顺序获取下一个 MIB 节点的属性信息，同样属于网管站发起的轮询操作。"
      }
    ],
    "hint": "请注意区分<b>网管站主动轮询</b>与<b>设备在特定条件（如阈值超限）下自发主动告警</b>的区别。AP 考试中设备主动推送到网管站的机制称为 <b>SNMPトラップ</b>。"
  },
  {
    "questionNumber": 7,
    "question": "某企业内网中，个别员工频繁在本地 PC 与文件服务器之间进行海量大文件传输，占用了极高的带宽资源，导致其他关键业务通信出现严重延迟与丢包。为了在不盲目增加物理线路带宽的前提下保障核心业务的顺畅，网络管理员决定在网络设备上应用流量控制技术：通过对不同类型的数据包进行识别分类，动态限制文件传输流量的最大吞吐上限（帯域制限），并优先调度语音及关键业务数据包的转发。这种保障通信质量与合理分配带宽的技术被称为是什么？",
    "diagram": "  [ 混合业务流量 (文件传输/语音/网页) ]\n         │\n         ▼\n  [ QoS 识别与流量整形 ]\n         │\n         ├───> [ 关键业务流量 (优先调度/高带宽) ]\n         │\n         └───> [ 文件传输流量 (帯域制限/限速) ]",
    "answerOptions": [
      {
        "text": "QoS",
        "isCorrect": true,
        "rationale": "服务质量（QoS／Quality of Service）是网络通信中提供差异化服务质量保障的技术体系。通过 DiffServ 标识、流量分类与标记、令牌桶监控（帯域制限／Policing & Shaping）以及严格优先队列（PQ/WFQ）调度，QoS 能够强行限制大文件传输等非关键流量的吞吐上限，优先保障延迟敏感业务的带宽与时延要求。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN）仅在二层上将物理网络划分为不同的逻辑广播域，不具备对流量进行细粒度分类、带宽限速（帯域制限）或队列调度的高级 QoS 管理能力。"
      },
      {
        "text": "NAT",
        "isCorrect": false,
        "rationale": "网络地址转换（NAT）主要用于 IP 报头的源/目的地址重写，解决 IPv4 公网地址枯竭问题，与数据包的优先级控制和带宽配额限制无关。"
      },
      {
        "text": "STP",
        "isCorrect": false,
        "rationale": "生成树协议（STP）工作于数据链路层，通过阻塞冗余链路的端口来消除二层物理拓扑环路，防止广播风暴，不具备任何流量带宽管理机制。"
      }
    ],
    "hint": "注意题干中的<b>通信质量保障</b>、<b>流量限速（帯域制限）</b>以及对特定通信流量的<b>吞吐量控制</b>。在 AP 大纲中该技术缩写为 <b>QoS</b>。"
  },
  {
    "questionNumber": 8,
    "question": "企业局域网内部部署了数十台工作站，均分配了符合 RFC 1918 标准的私有 IP 地址（プライベートIPアドレス）。当这些工作站需要同时并发访问外部 Internet 上的资源时，边界防火墙（FW）需要将内部数据包的源私有 IP 地址和源端口号，统一动态转换映射为防火墙外网接口的单个公网 IP 地址（グローバルIPアドレス）及不同的临时端口号，从而实现多个内网终端复用一个公网 IP 接入互联网。这种结合 Layer 4 端口号进行地址转换的技术被称为是什么？",
    "diagram": "  [ 内网 PC-1: 192.168.1.10:5001 ] ──┐\n  [ 内网 PC-2: 192.168.1.11:5002 ] ──┼──> [ NAPT (公网 IP: 203.0.113.1) ]\n                                    │    (映射为 Port 10001, 10002)\n                                    ▼\n                             [ 互联网 (Internet) ]",
    "answerOptions": [
      {
        "text": "NAPT",
        "isCorrect": true,
        "rationale": "网络地址与端口转换（NAPT／Network Address Port Translation，在日系 AP 体系中常称为 IP マスカレード）是一种同时重写三层 IP 地址和四层 TCP/UDP 端口号的技术。它在内网私有 IP（プライベートIP）与单一公网 IP（グローバルIP）之间维持动态映射表，使数百台内网 PC 能仅靠单个公网 IP 并发访问互联网，大幅节省了 IP 资源。"
      },
      {
        "text": "静的NAT",
        "isCorrect": false,
        "rationale": "静态 NAT（静的NAT）建立内网私有 IP 与外网公网 IP 之间固定的一对一（1:1）映射关系。每台内网设备都需要占用一个独占的公网 IP，无法实现多设备共享单一 IP 的复用效果。"
      },
      {
        "text": "DHCP",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP）用于在内网自动分发 IP 地址、网关和 DNS 配置，属于局域网配置管理协议，不涉及内网与外网之间的报文地址/端口转换。"
      },
      {
        "text": "PPPoE",
        "isCorrect": false,
        "rationale": "以太网上的点对点协议（PPPoE／Point-to-Point Protocol over Ethernet）是一种将 PPP 协议封装在以太网帧中的二层数据链路接入协议，常用于光纤拨号鉴权，并非地址转换机制。"
      }
    ],
    "hint": "请注意题干提到的<b>利用传输层端口号（Port）</b>实现<b>多台内网 PC 复用单公网 IP 地址</b>的技术。AP 午前考试中通常称为 <b>NAPT</b> 或 IP マスカレード。"
  },
  {
    "questionNumber": 9,
    "question": "随着居家办公（テレワーク）模式的普及，员工需要从外部互联网安全地访问部署在公司 DMZ 区域的文件服务器。为了确保敏感数据在通过公网传输时不会被监听或篡改，企业部署了远程接入网关。远程员工无需在 PC 上安装复杂的专用硬件或租用昂贵的专线，只需使用标准的 Web 浏览器或轻量级客户端，即可在客户端与网关之间建立一条基于传输层加密的安全隧道。这种高效且低成本的加密远程接入技术被称为是什么？",
    "diagram": "  [ 居家办公 PC ]\n         │ (通过公网建立加密通道)\n         ▼\n  [ SSL/TLS 加密隧道 ]\n         │\n         ▼\n  [ 企业 FW / VPN 网关 ]\n         │ (解密并转发请求)\n         ▼\n  [ DMZ 文件服务器 ]",
    "answerOptions": [
      {
        "text": "SSL-VPN",
        "isCorrect": true,
        "rationale": "SSL-VPN 是一种基于 TLS/SSL 协议构建虚拟专用网的技术。它工作在传输层与应用层之间，主要优势在于免客户端或仅需轻量化插件，远程员工利用标准的 Web 浏览器即可在 Internet 上建立端到端的暗号化通道（暗号化リモートアクセス），轻松穿越防火墙与 NAT 设备的限制访问内网资源。"
      },
      {
        "text": "IPsec-VPN",
        "isCorrect": false,
        "rationale": "IPsec-VPN 工作在网络层（L3），主要用于建立企业网总部与分支机构之间的网关到网关（Site-to-Site）永久加密隧道。它对客户端配置要求较高，且在移动终端侧易受 NAT 穿越（NAT-Traversal）瓶颈约束。"
      },
      {
        "text": "PPTP",
        "isCorrect": false,
        "rationale": "点对点隧道协议（PPTP）是一种较早期的二层 VPN 协议，依赖 GRE 封装和 RC4 加密。由于其存在已知重大安全漏洞且易被防火墙屏蔽，在现代企业安全防护中已被淘汰。"
      },
      {
        "text": "L2TP",
        "isCorrect": false,
        "rationale": "第二层隧道协议（L2TP）本身仅提供数据包的二层封装和隧道化，完全不具备任何数据加密或保密性校验功能。必须结合 IPsec 协议（L2TP/IPsec）才能提供加密安全性。"
      }
    ],
    "hint": "题干强调<b>居家办公（テレワーク）环境</b>、<b>结合 Web 浏览器与传输层加密</b>接入内网服务器。日本 AP 考试中对应的网络考点是 <b>SSL-VPN</b>。"
  },
  {
    "questionNumber": 10,
    "question": "企业为了向外部互联网用户提供 HTTP 代理服务或 DNS 名前解決服务，必须将 Proxy 服务器和缓存 DNS 服务器暴露在公网可见的网络中。然而，如果直接将这些服务器放置于核心内网（社内LAN），一旦服务器被黑客攻破，整个内部网络将面临巨大威胁。为此，架构师在防火墙上规划了一个独立的缓冲网络区域：允许外网访问该区服务，也允许内网访问该区服务，但严禁该区域向核心内网主动发起连接。这个隔离安全区域被称为是什么？",
    "diagram": "  [ 互联网 (Internet) ]\n         │\n         ▼\n  [ 防火墙 (Firewall) ]\n    ┌────┴────┐\n    ▼         ▼\n  [ DMZ 区域 ] [ 社内 LAN ]\n  (代理/DNS)  (核心 PC/数据)",
    "answerOptions": [
      {
        "text": "DMZ",
        "isCorrect": true,
        "rationale": "非军事区（DMZ／Demilitarized Zone）是位于受信任内部网络（Trust）与不受信任外部网络（Untrust／Internet）之间的逻辑隔离缓冲区。通过防火墙策略，实施单向安全访问控制：允许外部和内网访问 DMZ 中的公开服务器（如 Proxy、DNS），但严格禁止 DMZ 区域的服务器向核心内网（社内LAN）主动发起 TCP/UDP 连接，从而实现风险隔离。"
      },
      {
        "text": "イントラネット",
        "isCorrect": false,
        "rationale": "内部网（Intranet／イントラネット）是指完全建立在企业内部、采用 TCP/IP 协议不对外公开的安全私有网络环境，不承担面向外网公开服务的缓冲功能。"
      },
      {
        "text": "エクストラネット",
        "isCorrect": false,
        "rationale": "外联网（Extranet／エクストラネット）是指通过加密安全通道或专线将企业内部网延伸至特定合作伙伴、供应商的跨组织网络，不属于防火墙的三区隔离模型。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN）是二层交换机上的广播域隔离技术，它本身并不提供三层安全区域（Trust/Untrust/DMZ）划分与防火墙状态检测策略。"
      }
    ],
    "hint": "关注<b>公开服务器的隔离放置</b>以及<b>内网与外网之间的安全缓冲带</b>概念。AP 网络架构题中该隔离区域的标准术语是 <b>DMZ</b>。"
  },
  {
    "questionNumber": 11,
    "question": "在拥有数十名员工的企业办公区，如果由管理员手动为每台 PC 依次配置 IP 地址、子网掩码、默认网关和 DNS 服务器地址，不仅效率低下，还极易引发 IP 地址重复设置（IPアドレス重複）导致的网络故障。为了实现网络参数的自动化集中配置与管理，企业部署了一台专用服务器。当新 PC 接入网络时，会自动发起包含 Discover、Offer、Request 和 ACK 的四步交互，从预设的地址池中动态租借 IP 参数。这种自动分配协议是什么？",
    "diagram": "  [ 客户端 (PC) ] ─── DHCP Discover (广播) ───> [ DHCP サーバ ]\n  [ 客户端 (PC) ] <─── DHCP Offer (单播) ────── [ DHCP サーバ ]\n  [ 客户端 (PC) ] ─── DHCP Request (广播) ───> [ DHCP サーバ ]\n  [ 客户端 (PC) ] <─── DHCP ACK (单播) ──────── [ DHCP サーバ ]",
    "answerOptions": [
      {
        "text": "DHCP",
        "isCorrect": true,
        "rationale": "动态主机配置协议（DHCP／Dynamic Host Configuration Protocol）基于 UDP 67/68 端口，利用标准的 DORA（Discover, Offer, Request, ACK）四步交互流程，为局域网内的客户端动态租借 IP 地址、子网掩码、默认网关和 DNS 服务器等配置。它能集中管理地址池，有效杜绝手动配置导致的 IP 重复（IPアドレス重複）与参数误配。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "域名系统（DNS）专门负责将人类易读的域名解析为计算机可路由的 IP 地址（名前解決），不具备为客户端自动分发网络配置参数的功能。"
      },
      {
        "text": "SNMP",
        "isCorrect": false,
        "rationale": "简单网络管理协议（SNMP）用于网络管理员对交换机、路由器等网络设备进行远程状态监控、性能数据采集与自发告警收集，不参与终端 IP 的分发。"
      },
      {
        "text": "NTP",
        "isCorrect": false,
        "rationale": "网络时间协议（NTP／Network Time Protocol）用于在分布式网络设备与服务器之间精准同步系统的 UTC 标准时间，与 IP 地址分配无关。"
      }
    ],
    "hint": "请关注<b>自动分发 IP 地址</b>以及<b>四步握手（Discover/Offer/Request/ACK）</b>机制。在日本 AP 考试中对应的基础协议是 <b>DHCP</b>。"
  },
  {
    "questionNumber": 12,
    "question": "当企业局域网遭遇突发的网络访问延迟或吞吐量异常时，运维人员需要使用数据包分析仪（パケットアナライザ）对关键链路上的通信报文进行捕获与分析。然而，二层/三层交换机默认只会将单播数据包转发至目标 MAC 地址对应的特定端口，连在其他端口的分析仪无法监听这些流量。为此，管理员需要在交换机上进行配置，将指定源端口（如连接 DMZ 的端口）的入向和出向数据包完整复制一份并发送到连接分析仪的端口。这种流量复制与监控技术被称为是什么？",
    "diagram": "  [ 源端口 (被监控流量) ] ──> [ 正常转发至目的端口 ]\n         │\n         │ (流量镜像复制)\n         ▼\n  [ 镜像端口 (Mirror Port) ]\n         │\n         ▼\n  [ データパケットアナライザ (抓包分析仪) ]",
    "answerOptions": [
      {
        "text": "ポートミラーリング",
        "isCorrect": true,
        "rationale": "端口镜像（ポートミラーリング／Port Mirroring，有时也称 SPAN）是交换机硬件层的关键管理功能。它利用交换机 ASIC 芯片将指定源端口的受控数据帧完整复制一份，发送到连接着数据包分析仪（パケットアナライザ）的镜像端口。这使得运维人员可以在不中断或干扰正常业务流量转发的前提下，进行无损深度抓包与故障分析。"
      },
      {
        "text": "ポートフォーワーディング",
        "isCorrect": false,
        "rationale": "端口转发（ポートフォーワーディング／Port Forwarding）是 NAT 路由器将接收到的外网特定端口的数据包重定向映射转发至内网特定设备端口的技术，不具备流量复制监控功能。"
      },
      {
        "text": "ポートアグリゲーション",
        "isCorrect": false,
        "rationale": "端口聚合（ポートアグリゲーション／Port Aggregation）是将多个物理以太网端口绑定为一个逻辑通道的技术，旨在扩充链路带宽和提供故障冗余。"
      },
      {
        "text": "VLANトランキング",
        "isCorrect": false,
        "rationale": "VLAN 中继（VLAN Trunking）通过 IEEE 802.1Q 标签技术，实现一条物理干线上同时承载和透传多个不同 VLAN 的流量，不涉及流量的复制与监控。"
      }
    ],
    "hint": "关注<b>在交换机上复制端口流量</b>以供<b>パケットアナライザ（数据包分析仪）抓包诊断</b>的技术。AP 考试中该技术被称为 <b>ポートミラーリング</b>。"
  },
  {
    "questionNumber": 13,
    "question": "企业为了隔离广播风暴，在内部局域网划分为多个逻辑上的 VLAN 子网（如部门 A 网段与部门 B 网段）。然而，不同 VLAN 之间在二层是完全隔离的，必须借助三层路由功能才能实现跨子网的数据互通。传统的传统路由器转发速率较低，容易形成网络 bottleneck。现代企业核心层通常采用一种内部集成了专用硬件芯片（ASIC）的复合型设备，既能实现二层线速交换，又能对跨 VLAN 的 IP 数据包进行高速硬件路由转发。这种网络核心设备被称为是什么？",
    "diagram": "  [ VLAN 10 (社内 PC) ] ──┐\n                          ├──> [ L3 スイッチ (硬件路由) ]\n  [ VLAN 20 (服务器) ]  ──┘         │ (硬件线速转发)\n                                     ▼\n                             [ 核心骨干网 ]",
    "answerOptions": [
      {
        "text": "L3スイッチ",
        "isCorrect": true,
        "rationale": "三层交换机（レイヤ3スイッチ／Layer 3 Switch）将二层交换的高速硬件线速转发与三层路由寻址有机结合。它采用硬件 ASIC 芯片构建转发表（FIB），实现了“一次路由，多次交换”的高速数据转发机制，极大地消除了跨 VLAN 跨子网通信时的软件路由瓶颈，是企业 LAN 骨干层的核心设备。"
      },
      {
        "text": "L2スイッチ",
        "isCorrect": false,
        "rationale": "二层交换机（L2SW）仅工作在数据链路层，基于 MAC 地址表进行同 VLAN 内部的数据帧转发，完全不具备跨子网/跨 VLAN 的 IP 路由转发能力。"
      },
      {
        "text": "リピータハブ",
        "isCorrect": false,
        "rationale": "中继集线器（Repeater Hub）工作在物理层（L1），仅对电信号进行放大并盲目泛洪到所有端口。它共享碰撞域与带宽，在现代网络中早已被淘汰。"
      },
      {
        "text": "ブリッジ",
        "isCorrect": false,
        "rationale": "网桥（Bridge）是早期的二层设备，用于连接两个物理网段并基于 MAC 地址进行过滤和转发，处理性能和端口密度均远低于现代硬件交换机。"
      }
    ],
    "hint": "注意题干中提到的<b>跨 VLAN 高速硬件路由转发</b>以及基于 <b>ASIC 芯片线速交换</b>的核心设备。在 AP 考试中该设备被称为 <b>L3スイッチ</b>。"
  },
  {
    "questionNumber": 14,
    "question": "企业内部 PC 在访问外部互联网 Web 网站时，为了避免终端直接暴露于公网，同时实现对网页访问内容的审计与控制，架构师在 DMZ 区域部署了一台中介服务器。所有内网 PC 的 HTTP/HTTPS 请求统一先发送给该服务器，由该服务器代表客户端向外部 Web 服务器发起访问，并将获取到的网页内容返回给 PC；同时该服务器还能将热门网页内容缓存在本地内存中，以显著降低企业外网出口的带宽消耗。这种代理客户端进行网络访问的中介设备被称为是什么？",
    "diagram": "  [ 社内 PC ]\n     │ (1. 内部 HTTP 请求)\n     ▼\n  [ プロキシサーバ ] (2. 检查/缓存/代理)\n     │ (3. 代表客户端发起请求)\n     ▼\n  [ 外部 Web サーバ ]",
    "answerOptions": [
      {
        "text": "プロキシサーバ",
        "isCorrect": true,
        "rationale": "代理服务器（プロキシサーバ／Proxy Server，特指正向代理 Forward Proxy）作为内网客户端与外部 Internet 之间的应用层（L7）中介。它代替客户端向目标 Web 服务器发起连接，提供 URL 过滤、日志审计、隐藏内网 IP 地址以及对 Web 静态资源的本地缓存（キャッシュ）功能，能显著提升响应速度并降低出口带宽消耗。"
      },
      {
        "text": "キャッシュDNSサーバ",
        "isCorrect": false,
        "rationale": "缓存 DNS 服务器专职负责暂时存储域名至 IP 地址的解析结果（名前解決），不承担 HTTP/HTTPS 应用层网页内容的拉取、过滤和数据缓存。"
      },
      {
        "text": "ファイアウォール",
        "isCorrect": false,
        "rationale": "防火墙（Firewall）主要基于 IP 地址、端口号及 TCP 连接状态执行 ACL 策略拦截，通常不负责应用层网页内容的代理拉取与本地缓存。"
      },
      {
        "text": "ロードバランサ",
        "isCorrect": false,
        "rationale": "负载均衡器（Load Balancer）作为反向组件部署在多台服务端前端，负责分发外部入站并发流量，与代理内网 PC 访问外网的方向完全相反。"
      }
    ],
    "hint": "请注意题干提到的<b>代表内网客户端访问外网</b>、<b>网页内容缓存（キャッシュ）</b>及<b>访问控制</b>的中介设备。AP 大纲中称此为 <b>プロキシサーバ</b>。"
  },
  {
    "questionNumber": 15,
    "question": "网络运维人员在对链路连通性进行基础排查时，最常使用的是 ping 命令。当在终端输入目标的 IP 地址后，源主机系统会向目标设备发送一个 Echo Request（回显请求）报文，目标设备收到后必须回复 Echo Reply（回显应答）报文。通过计算报文的往返时间（RTT）与丢包率，可以快速判定网络层层面的疎通状态。这种专门用于在 IP 主机与路由器之间传递网络控制信息及诊断报告的底层协议是什么？",
    "diagram": "  [ 源 PC (PC-C) ] ─── ICMP Echo Request ───> [ 目标设备 (プリンタ) ]\n  [ 源 PC (PC-C) ] <─── ICMP Echo Reply ───── [ 目标设备 (プリンタ) ]\n         │\n         ▼\n  (评估网络连通性与时延 RTT)",
    "answerOptions": [
      {
        "text": "ICMP",
        "isCorrect": true,
        "rationale": "网际控制报文协议（ICMP／Internet Control Message Protocol）直接封装于 IP 报文中（协议号 1）。它专用于在 IP 主机和路由器之间传递网络层控制信息与差错报告。其中 ping 命令正是基于 ICMP Echo Request（Type 8）和 Echo Reply（Type 0）报文来实现网络连通性测试（疎通確認）与往返延时（RTT）测量。"
      },
      {
        "text": "IGMP",
        "isCorrect": false,
        "rationale": "网际组管理协议（IGMP）工作在网络层，专门用于主机与组播路由器之间建立和维护 IP 组播（Multicast）成员身份，不提供 Echo 诊断与连通性测试。"
      },
      {
        "text": "ARP",
        "isCorrect": false,
        "rationale": "地址解析协议（ARP）工作在二层与三层交界，仅用于查询已知 IP 地址对应的物理 MAC 地址，本身不包含任何 Echo 请求应答与连通性诊断机制。"
      },
      {
        "text": "TCP",
        "isCorrect": false,
        "rationale": "传输控制协议（TCP）是面向连接的传输层（L4）可靠协议，通过三次握手建立连接，并非 ping 连通性测试命令直接使用的底层网络控制协议。"
      }
    ],
    "hint": "注意题干中提到的 <b>ping 命令底层依据</b>、<b>Echo Request/Reply 机制</b>以及<b>网络疎通確認</b>。AP 考试中该基础协议为 <b>ICMP</b>。"
  }
];
console.log("成功加载题库！");