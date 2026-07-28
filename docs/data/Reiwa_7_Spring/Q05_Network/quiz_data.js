// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "在企业局域网中，当某台PC试图向同一网段内的另一台设备（如打印机）发送数据时，必须将目标的 IP 地址解析为数据链路层的物理地址（MACアドレス）。设备首先会查询本地的地址解析缓存表（ARPキャッシュテーブル），若未找到对应记录，则会在整个广播域内发送广播请求。收到请求的目标设备会以单播形式返回自身的物理地址。如果网网内存在设备手动误配了相同的 IP 地址，会导致缓存表被错误的映射覆盖，进而引发通信中断。这种在局域网内动态完成 IP 地址至 MAC 地址映射解析的关键协议是什么？",
    "diagram": "  [ 本地 PC (PC-C) ]\n         │ (查询目标 IP 对应的 MAC)\n         ▼\n  [ 发送 ARP 广播请求 ] (ARP Request)\n         │\n         ▼\n  [ 目标设备响应单播 ] (ARP Reply)\n         │\n         ▼\n  [ 更新本地 ARP 缓存表 ] (ARP Cache)",
    "answerOptions": [
      {
        "text": "ARP",
        "isCorrect": true,
        "rationale": "地址解析协议（ARP／Address Resolution Protocol）负责将三层的 IP 地址映射解析为二层的 MAC 地址。局域网通信依赖 ARP 机制，当网内出现 IP 地址冲突（IPアドレス重複）时，ARP 缓存表会被错误的 MAC 地址覆盖，导致目标设备无法正常接收数据包。"
      },
      {
        "text": "RARP",
        "isCorrect": false,
        "rationale": "逆向地址解析协议（RARP／Reverse Address Resolution Protocol）作用与 ARP 相反，用于无盘工作站已知自身 MAC 地址时向服务器查询所分配的 IP 地址。"
      },
      {
        "text": "NDP",
        "isCorrect": false,
        "rationale": "邻居发现协议（NDP／Neighbor Discovery Protocol）是 IPv6 环境下用于替代 IPv4 中 ARP 和 ICMP 部分功能的协议，不适用于 IPv4 局域网。"
      },
      {
        "text": "IGMP",
        "isCorrect": false,
        "rationale": "网际组管理协议（IGMP／Internet Group Management Protocol）用于 IP 组播（マルチキャスト）成员关系的建立与维护，不承担 IP 到 MAC 地址的解析职能。"
      }
    ],
    "hint": "请关注题干中提到的<b>IP 地址转换为物理 MAC 地址</b>以及<b>局域网内广播查询与缓存表更新</b>的机制。在日本 AP 考试中，解决二层网络地址映射和 IP 重 conflict 排查的核心协议是 <b>ARP</b>。"
  },
  {
    "questionNumber": 2,
    "question": "为了防止员工私自将未授权的个人设备或外来 PC 接入企业内部局域网（社内LAN）并引发安全隐患，企业网络架构师决定在接入层交换机上部署严格的终端认证机制。当新设备插上网线或连接无线接入点（無線AP）时，接入设备默认处于受限状态，仅允许认证报文通过；只有当终端通过认证客户端向后端的 RADIUS 认证服务器（認証サーバ）提交合法凭证并通过校验后，交换机才开启该端口的数据转发功能。这种基于端口网络接入控制（Port-based Network Access Control）的标准认证协议是什么？",
    "diagram": "  [ 待接入终端 (Supplicant) ]\n         │ (发送认证凭证)\n         ▼\n  [ 认证交换机 (Authenticator) ]\n         │ (转发至后端)\n         ▼\n  [ 認証サーバ (RADIUS Server) ]\n         │ (校验通过，开放端口)\n         ▼\n  [ 许可访问企业内网 ]",
    "answerOptions": [
      {
        "text": "IEEE 802.1X",
        "isCorrect": true,
        "rationale": "IEEE 802.1X 是一种基于端口的局域网接入控制协议（ポートベース認証），结合 EAP 协议和 RADIUS 认证服务器，能够在设备连入网络的第一时间验证其身份，有效防止未经授权的终端接入企业内网。"
      },
      {
        "text": "IEEE 802.1Q",
        "isCorrect": false,
        "rationale": "IEEE 802.1Q 是虚拟局域网（VLAN／Virtual LAN）的标签封装标准，用于在一条物理链路（Trunk 链路）上传输多个 VLAN 的数据流量，不具备终端身份认证功能。"
      },
      {
        "text": "IEEE 802.11n",
        "isCorrect": false,
        "rationale": "IEEE 802.11n 是无线局域网（無線LAN）的高吞吐量传输物理层与 MAC 层标准，属于 Wi-Fi 技术规范，而非网络接入身份认证标准。"
      },
      {
        "text": "IEEE 802.3ad",
        "isCorrect": false,
        "rationale": "IEEE 802.3ad 是链路聚合（リンクアグリゲーション／Link Aggregation）标准，用于将多个物理网口绑定为一个逻辑高带宽通道，提高链路吞吐量与冗余度。"
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
        "rationale": "广播域（ブロードキャストドメイン／Broadcast Domain）是指广播数据包能够到达的所有网段节点的集合。二层交换机默认会转发广播，而三层设备（如 L3 交换机或路由器）能够阻断广播，从而划分并隔离不同的广播域。"
      },
      {
        "text": "コリジョンドメイン",
        "isCorrect": false,
        "rationale": "冲突域（コリジョンドメイン／Collision Domain）是指物理层多台设备竞争同一共享介质时可能发生数据碰撞的范围。二层交换机的每个端口都是一个独立的冲突域。"
      },
      {
        "text": "マルチキャストグループ",
        "isCorrect": false,
        "rationale": "组播组（マルチキャストグループ／Multicast Group）是指接收特定组播数据流的特定主机集合，依赖 IGMP 等协议管理，并非二层广播的物理隔离范围。"
      },
      {
        "text": "VLANトランク",
        "isCorrect": false,
        "rationale": "VLAN 中继（VLANトランク／VLAN Trunk）是指在交换机之间承载多个 VLAN 流量的物理骨干通道，其本身是传输介质而非广播作用域的定义。"
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
        "rationale": "nslookup 是标准的网络管理命令行工具，允许用户向指定的 DNS 服务器直接发起域名解析请求，返回 A 记录、PTR 记录等信息，是排查域名解析故障（名前解決障害）的首选诊断工具。"
      },
      {
        "text": "ping",
        "isCorrect": false,
        "rationale": "ping 命令基于 ICMP 协议测试目标 IP 的网络连通性（疎通確認）与往返时延，虽然能顺便测试默认 DNS 解析，但无法指定 DNS 服务器或查看详细 DNS 记录。"
      },
      {
        "text": "tracert",
        "isCorrect": false,
        "rationale": "tracert（或 traceroute）通过递增 ICMP/UDP 数据包的 TTL 值，用于追踪数据包从源端到达目的端所经过的路由器路径与每一跳的时延。"
      },
      {
        "text": "ipconfig",
        "isCorrect": false,
        "rationale": "ipconfig（Linux 下为 ifconfig/ip）主要用于查看和刷新本地网卡的 IP 地址、子网掩码、默认网关和 DNS 配置，无法直接向远程 DNS 发起诊断查询。"
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
        "rationale": "DNS 服务器的多重化/冗余化（冗長化／多重化）是指部署多台 DNS 服务器提供相同的解析服务。当单台服务器发生故障时，其他节点继续提供服务，有效保障了 DNS 服务的连续性与可靠性。"
      },
      {
        "text": "DNSキャッシュのクリア",
        "isCorrect": false,
        "rationale": "清除 DNS 缓存（DNSキャッシュのクリア）是指清空本地或服务器内存中暂存的解析记录，常用于解决 DNS 记录变更后未及时生效的问题，无法提供系统冗余。"
      },
      {
        "text": "DNSSECの導入",
        "isCorrect": false,
        "rationale": "DNSSEC（DNS Security Extensions）是通过数字签名技术保护 DNS 解析数据完整性和真实性的安全扩展协议，防止 DNS 缓存污染攻击，而非冗余高可用方案。"
      },
      {
        "text": "ゾーン転送の停止",
        "isCorrect": false,
        "rationale": "停止区域传送（ゾーン転送の停止）是限制主从 DNS 服务器之间同步区域数据库的安全措施，防止外部攻击者获取完整的内网域名映射，与提高可用性无关。"
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
        "rationale": "SNMP Trap（SNMPトラップ）是 SNMP 协议中由 Agent（被管理设备）主动向 Manager（网管站）发送的异步事件通知，常用于在设备发生特定故障、阈值越界或状态异常时实现秒级实时告警。"
      },
      {
        "text": "SNMP GetRequest",
        "isCorrect": false,
        "rationale": "SNMP GetRequest 是由网管站主动发起的轮询请求，用于向被管理设备查询特定的 MIB 对象节点数值，属于被动拉取模式。"
      },
      {
        "text": "SNMP SetRequest",
        "isCorrect": false,
        "rationale": "SNMP SetRequest 是由网管站发起的控制指令，用于修改被管理设备上的特定 MIB 变量配置（如关闭某个交换机端口）。"
      },
      {
        "text": "SNMP GetNextRequest",
        "isCorrect": false,
        "rationale": "SNMP GetNextRequest 用于遍历被管理设备的 MIB 树结构，按顺序获取下一个节点的信息，同样属于网管站发起的轮询操作。"
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
        "rationale": "服务质量（QoS／Quality of Service）是网络通信中用于提供差别化服务质量保障的技术总称。通过流量分类、限速（帯域制限）、队列调度等手段，能够限制非关键流量并优先保障重要业务的带宽与延迟需求。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN／Virtual LAN）主要用于在二层逻辑上划分隔离不同的广播域和网段，并不直接提供通信带宽限速与优先级调度调度机制。"
      },
      {
        "text": "NAT",
        "isCorrect": false,
        "rationale": "网络地址转换（NAT／Network Address Translation）用于在私有 IP 地址与公网 IP 地址之间进行转换，解决 IP 地址不足与隐蔽内网拓扑的问题。"
      },
      {
        "text": "STP",
        "isCorrect": false,
        "rationale": "生成树协议（STP／Spanning Tree Protocol）用于在存在冗余链路的二层网络中阻塞备份端口，防止形成环路和广播风暴。"
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
        "rationale": "网络地址与端口转换（NAPT／Network Address Port Translation，在日系技术中常被称为 IP マスカレード）同时对 IP 地址和传输层端口号进行转换，实现多个私有 IP 地址共享同一个公网 IP 地址同时上网。"
      },
      {
        "text": "静的NAT",
        "isCorrect": false,
        "rationale": "静态 NAT（静的NAT）建立私有 IP 与公网 IP 之间一对一的固定映射关系，无法实现多个内网 IP 共享单一公网 IP 的复用效果。"
      },
      {
        "text": "DHCP",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP）用于在局域网内自动向终端分发 IP 地址和网络配置，不涉及内网与外网之间的地址转换。"
      },
      {
        "text": "PPPoE",
        "isCorrect": false,
        "rationale": "以太网上的点对点协议（PPPoE／Point-to-Point Protocol over Ethernet）是将 PPP 帧封装在以太网帧中的链路层接入协议，常用于 ADSL 或光纤拨号上网。"
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
        "rationale": "SSL-VPN 是一种利用 SSL/TLS 协议构建加密虚拟专用网的技术。它通常直接工作在应用层/传输层，用户借助通用的 Web 浏览器即可实现安全的远程访问（暗号化リモートアクセス），部署和维护极为便捷。"
      },
      {
        "text": "IPsec-VPN",
        "isCorrect": false,
        "rationale": "IPsec-VPN 工作在网络层，常用于建立企业网总部与分支机构之间的网关到网关（Site-to-Site）永久加密隧道，移动终端接入配置较为繁琐。"
      },
      {
        "text": "PPTP",
        "isCorrect": false,
        "rationale": "点对点隧道协议（PPTP）是一种较早期的二层 VPN 协议，因其加密算法安全性较低且容易被防火墙阻断，已逐渐被淘汰。"
      },
      {
        "text": "L2TP",
        "isCorrect": false,
        "rationale": "第二层隧道协议（L2TP）本身不提供任何加密保护机制，必须结合 IPsec 协议（即 L2TP/IPsec）才能提供数据传输安全性。"
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
        "rationale": "非军事区（DMZ／Demilitarized Zone）是位于内部安全网络与外部不安全网络（如互联网）之间的隔离缓冲区域。公开服务器部署在 DMZ 中，即使受到攻击被入侵，也能利用防火墙策略将安全风险隔离在 DMZ 内，保护核心内网安全。"
      },
      {
        "text": "イントラネット",
        "isCorrect": false,
        "rationale": "企业内部网（Intranet／イントラネット）是指完全建立在企业内部、不对外公开的内部局域网络环境。"
      },
      {
        "text": "エクストラネット",
        "isCorrect": false,
        "rationale": "外联网（Extranet／エクストラネット）是指企业利用 Internet 技术将内部网延伸与合作伙伴、供应商共享特定业务数据的网络。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN）是在交换机上划分二层广播域的逻辑技术，本身不具备内置的对外/对内防火墙安全策略区分约束。"
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
        "rationale": "动态主机配置协议（DHCP／Dynamic Host Configuration Protocol）能够自动为网内终端动态分配 IP 地址、网关和 DNS 服务器等网络配置参数，极大降低了网络管理成本并避免了手动配置造成的 IP 冲突。"
      },
      {
        "text": "DNS",
        "isCorrect": false,
        "rationale": "域名系统（DNS）负责将人类可读的域名解析为计算机可路由的 IP 地址，不负责终端 IP 地址的动态分发。"
      },
      {
        "text": "SNMP",
        "isCorrect": false,
        "rationale": "简单网络管理协议（SNMP）用于网络管理员对设备状态进行监控、配置读取与自发告警收集。"
      },
      {
        "text": "NTP",
        "isCorrect": false,
        "rationale": "网络时间协议（NTP／Network Time Protocol）用于在网络设备之间同步精确的系统标准时间。"
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
        "rationale": "端口镜像（ポートミラーリング／Port Mirroring）是交换机的一项重要管理功能，它将指定端口的数据流量完整复制并发送到镜像端口，使数据包分析仪能够无干扰地捕获并分析网络报文，进行故障诊断或安全审计。"
      },
      {
        "text": "ポートフォーワーディング",
        "isCorrect": false,
        "rationale": "端口转发（ポートフォーワーディング／Port Forwarding）是路由器或防火墙将进入特定外网端口的流量重定向转发至内网指定 IP 和端口的技术。"
      },
      {
        "text": "ポートアグリゲーション",
        "isCorrect": false,
        "rationale": "端口聚合（ポートアグリゲーション／Port Aggregation）是将多个物理端口绑定为一个逻辑高带宽链路的技术，增强链路带宽与容错性。"
      },
      {
        "text": "VLANトランキング",
        "isCorrect": false,
        "rationale": "VLAN Trunking 是在交换机之间的一条链路上打上 IEEE 802.1Q 标签，用以传输多个不同 VLAN 数据的技术。"
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
        "rationale": "三层交换机（レイヤ3スイッチ／Layer 3 Switch）结合了二层交换的高速硬件转发能力与三层路由的包转发选择功能，基于 ASIC 芯片实现线速（Wire-Speed）的跨 VLAN 硬件路由，是企业 LAN 核心层的关键设备。"
      },
      {
        "text": "L2スイッチ",
        "isCorrect": false,
        "rationale": "二层交换机（レイヤ2スイッチ）仅能在同一个 VLAN 内基于 MAC 地址表进行二层帧转发，无法独立完成跨 VLAN/跨子网的 IP 路由功能。"
      },
      {
        "text": "リピータハブ",
        "isCorrect": false,
        "rationale": "中继集线器（Repeater Hub）工作在物理层，仅对电信号进行放大并盲目广播转发到所有端口，属于共享介质设备，早已被淘汰。"
      },
      {
        "text": "ブリッジ",
        "isCorrect": false,
        "rationale": "网桥（Bridge）是二层设备，用于连接两个不同的物理网段并基于 MAC 地址过滤流量，处理能力远低于现代硬件交换机。"
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
        "rationale": "代理服务器（プロキシサーバ／Proxy Server，在此特指 Forward Proxy 正向代理）作为内网客户端与外部互联网之间的中介，提供访问代理、网页缓存（キャッシュ）、URL 过滤与安全日志记录功能，有效提升带宽利用率与网络安全性。"
      },
      {
        "text": "キャッシュDNSサーバ",
        "isCorrect": false,
        "rationale": "缓存 DNS 服务器仅用于暂时存储和处理域名与 IP 地址的名前解決映射关系，不承担 HTTP/HTTPS 网页内容的代理与缓存职能。"
      },
      {
        "text": "ファイアウォール",
        "isCorrect": false,
        "rationale": "防火墙（Firewall）主要基于 IP 地址、端口号及连接状态对网络层和传输层数据包进行访问控制策略的过滤，不负责 HTTP 应用层内容的代理与缓存。"
      },
      {
        "text": "ロードバランサ",
        "isCorrect": false,
        "rationale": "负载均衡器（Load Balancer）通常部署在多台后端服务器前端，用于将外部并发请求按算法分发到各个服务器节点，而非代内网 PC 访问外网。"
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
        "rationale": "网际控制报文协议（ICMP／Internet Control Message Protocol）配合 IP 协议工作，用于在 IP 网络中传递差错报告和控制信息。ping 和 traceroute 工具均依赖 ICMP 报文（如 Echo Request/Reply）来实现网络连通性确认（疎通確認）。"
      },
      {
        "text": "IGMP",
        "isCorrect": false,
        "rationale": "网际组管理协议（IGMP）用于主机与组播路由器之间管理 IP 组播（Multicast）成员关系，与连通性测试命令无关。"
      },
      {
        "text": "ARP",
        "isCorrect": false,
        "rationale": "地址解析协议（ARP）工作在数据链路层与网络层之间，仅用于获取指定 IP 地址对应的物理 MAC 地址，不包含 Echo 连通性测试机制。"
      },
      {
        "text": "TCP",
        "isCorrect": false,
        "rationale": "传输控制协议（TCP）是面向连接的传输层协议，提供可靠的数据流传输与三路握手机制，并非 ping 诊断命令直接使用的控制协议。"
      }
    ],
    "hint": "注意题干中提到的 <b>ping 命令底层依据</b>、<b>Echo Request/Reply 机制</b>以及<b>网络疎通確認</b>。AP 考试中该基础协议为 <b>ICMP</b>。"
  }
];
console.log("成功加载题库！");