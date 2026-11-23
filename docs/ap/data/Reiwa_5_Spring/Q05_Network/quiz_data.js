// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某大型情报服务企业为了应对突发高并发访问，决定在不增加额外硬件负载均衡器（ロードバランサ）成本的前提下分散服务器压力。企业在 DNS 服务器中为同一个域名配置了多条分别指向不同 Web 服务器的 IPv4 地址记录。当不同的客户端发起域名解析请求时，DNS 服务器按照固定顺序轮流依次返回不同的 IP 地址，从而实现流量的简单分摊。这种基于 DNS 服务器固有机制实现多台服务器分摊负载的技术被称为是什么？",
    "diagram": "  [ 客户端解析请求: misp.example.jp ]\n                 │\n                 ▼\n     ┌───────────────────────┐\n     │ DNS サーバ            │ (轮流依次返回不同 IP)\n     └──────────┬────────────┘\n                ├─────────────────┐\n                ▼ (第 1 次: IP-A)  ▼ (第 2 次: IP-B)\n     ┌───────────────────────┐ ┌───────────────────────┐\n     │ WebAP サーバ b        │ │ WebAP サーバ c        │\n     └───────────────────────┘ └───────────────────────┘",
    "answerOptions": [
      {
        "text": "DNSラウンドロビン (DNS Round Robin)",
        "isCorrect": true,
        "rationale": "DNS 轮询（DNSラウンドロビン / DNS Round Robin）是指在 DNS 服务器中将同一个域名映射到多个 IP 地址，并在收到查询时按顺序循环返回不同 IP 地址的技术。它实现了零成本的简易负载均衡，但由于无法动态检测后端服务器健康状态，当某台服务器宕机时仍可能返回其 IP。"
      },
      {
        "text": "ゾーン転送 (Zone Transfer)",
        "isCorrect": false,
        "rationale": "区域传送（ゾーン転送 / Zone Transfer）是主 DNS 服务器与辅 DNS 服务器之间同步域名解析数据文件的机制，与客户端访问时的流量分摊无关。"
      },
      {
        "text": "リバースプロキシ (Reverse Proxy)",
        "isCorrect": false,
        "rationale": "反向代理（リバースプロキシ）是部署在 Web 服务器前面的应用层代理设备，通过接收所有 HTTP 请求并转发至后端服务器，属于硬件/软件级的应用层负载均衡技术。"
      },
      {
        "text": "VRRP (Virtual Router Redundancy Protocol)",
        "isCorrect": false,
        "rationale": "虚拟路由器冗余协议（VRRP）是在局域网内将多台网关路由器虚拟成一个虚拟 IP 地址（VIP）以实现网关高可用备份的二/三层协议，不用于 DNS 级别的流量分摊。"
      }
    ],
    "hint": "注意题干描述的<b>在 DNS 中配置多个 IP 地址并按顺序轮流返回给客户端</b>的简易负载均衡技术：<b>DNSラウンドロビン</b>。"
  },
  {
    "questionNumber": 2,
    "question": "企业为了防止 DNS 服务器发生单点故障（単一障害点／SPOF），通常部署一台主 DNS 服务器（プライマリDNS）和一台辅 DNS 服务器（セカンダリDNS）。当系统管理员在主 DNS 服务器上更新了域名解析记录（如新增 A 记录或修改 IP）后，辅 DNS 服务器会自动与主 DNS 服务器通信，将最新更新的整个解析数据库文件完整地同步复制过来。这种在 DNS 主辅服务器之间保持数据一致性的同步通信机制被称为是什么？",
    "diagram": "  [ 管理员更新解析记录 ]\n            │\n            ▼\n  ┌───────────────────┐               ┌───────────────────┐\n  │ プライマリ DNS    │ ──(ゾーン転送)──►│ セカンダリ DNS    │\n  │ (DNS サーバ b)    │  (同步更新数据) │ (DNS サーバ c)    │\n  └───────────────────┘               └───────────────────┘",
    "answerOptions": [
      {
        "text": "ゾーン転送 (Zone Transfer)",
        "isCorrect": true,
        "rationale": "区域传送（ゾーン転送 / Zone Transfer）是指辅 DNS 服务器（セカンダリDNS）定期或在主 DNS 服务器提示下，通过 TCP 53 端口向主 DNS 服务器（プライマリDNS）请求复制最新ゾーンファイル（Zone File）数据文件的过程，确保了域名解析数据的高可用与一致性。"
      },
      {
        "text": "ダイナミックDNS (Dynamic DNS / DDNS)",
        "isCorrect": false,
        "rationale": "动态 DNS（ダイナミックDNS）是指当客户端（如动态宽带路由器）的公网 IP 发生变更时，自动向 DNS 服务器发起通知并更新自身 IP 记录的技术。"
      },
      {
        "text": "DNSキャッシュポイズニング (DNS Cache Poisoning)",
        "isCorrect": false,
        "rationale": "DNS 缓存污染/毒化（DNSキャッシュポイズニング）是一种网络攻击手段，黑客向 DNS 缓存服务器注入虚假解析记录，将用户诱导至恶意钓鱼网站。"
      },
      {
        "text": "逆引き (PTR / Reverse DNS Lookup)",
        "isCorrect": false,
        "rationale": "反向解析（逆引き）是指根据已知 IP 地址查询对应 FQDN 域名的解析过程（利用 PTR 记录）。"
      }
    ],
    "hint": "注意<b>主 DNS 与辅 DNS 之间自动复制同步整个域名数据库文件（ゾーン情報）</b>的机制：<b>ゾーン転送</b>。"
  },
  {
    "questionNumber": 3,
    "question": "网络运维团队准备在一周后对某台 Web 服务器进行停机维护，届时需要在 DNS 中撤下该服务器的解析记录。然而，由于全球各级 DNS 缓存服务器和客户端本地均会根据响应报文中的某个数值将解析结果暂存（キャッシュ）一段时间，如果该数值过大，撤下记录后仍会有大量用户因缓存未过期而访问旧服务器。为了确保维护开始时用户能迅速感知修改，管理员必须提前一周将控制“解析记录缓存有效生存时间”的参数修改为较小的值。这个参数被称为是什么？",
    "diagram": "  [ 维护前 1 周 ]: 将 TTL 设为较小值 (如 60 秒)\n        │\n        ▼ (等待旧 TTL 缓存完全失效)\n  [ 切换时刻 ]: 修改 / 撤下 DNS A 记录\n        │\n        ▼ (客户端缓存迅速过期，获取新 IP)\n  [ 效果 ]: 流量平滑切换，避免用户继续访问旧节点",
    "answerOptions": [
      {
        "text": "TTL (Time To Live)",
        "isCorrect": true,
        "rationale": "生存时间（TTL / Time To Live）在 DNS 资源记录中指定了该条解析结果在客户端或中间缓存 DNS 服务器上允许被缓存的最大秒数。在进行 DNS 变更或服务器维护前，提前将 TTL 缩短可以加快 DNS 记录修改在全网的生效速度。"
      },
      {
        "text": "MTU (Maximum Transmission Unit)",
        "isCorrect": false,
        "rationale": "最大传输单元（MTU）是网络层（IP 层）在无需分片的情况下能够通过某物理接口传输的最大数据包字节数（以太网通常为 1500 字节）。"
      },
      {
        "text": "RTT (Round Trip Time)",
        "isCorrect": false,
        "rationale": "往返时间（RTT）是指一个数据包从发送端发出到接收端收到确认（ACK）所经历的总延迟时间，用于衡量网络时延。"
      },
      {
        "text": "RPO (Recovery Point Objective)",
        "isCorrect": false,
        "rationale": "恢复点目标（RPO）是业务连续性计划与灾难恢复中的指标，表示系统发生故障时允许丢失的最大数据时间量。"
      }
    ],
    "hint": "注意控制 <b>DNS 解析记录在客户端和中间服务器本地缓存有效秒数（生存时间）</b>的参数：<b>TTL</b>。"
  },
  {
    "questionNumber": 4,
    "question": "在 DNS 系统的资源记录（リソースレコード）中，存在各种不同功能类型的条目。当外部用户在浏览器中输入网站的完全合格域名（FQDN，例如 `misp.example.jp`）时，DNS 服务器需要将其查询并转换为计算机网络能够直接建立 TCP/IP 连接的 32 位 IPv4 地址（例如 `200.0.0.2`）。这种专门用于将“域名（FQDN）直接映射至 IPv4 地址”的根基性 DNS 记录类型被称为是什么？",
    "diagram": "  [ FQDN 域名: misp.example.jp ]\n                 │\n                 ▼ (DNS 查表: Aレコード)\n  [ IPv4 地址: 200.0.0.2 ]",
    "answerOptions": [
      {
        "text": "Aレコード (A Record)",
        "isCorrect": true,
        "rationale": "A 记录（Aレコード / Address Record）是 DNS 数据库中最基本的资源记录，专门用于建立域名（FQDN）到 IPv4 地址的直接映射关系。对于 IPv6 地址，则对应的记录类型为 AAAA 记录。"
      },
      {
        "text": "CNAMEレコード (CNAME Record)",
        "isCorrect": false,
        "rationale": "别名记录（CNAMEレコード / Canonical Name）用于将一个域名（别名）指向另一个规范域名（Canonical Name），而不是直接映射到 IP 地址。"
      },
      {
        "text": "MXレコード (MX Record)",
        "isCorrect": false,
        "rationale": "邮件交换记录（MXレコード / Mail Exchange）专门用于指定负责接收发往该域名电子邮件的邮件服务器地址及其优先级。"
      },
      {
        "text": "PTRレコード (PTR Record)",
        "isCorrect": false,
        "rationale": "指针记录（PTRレコード / Pointer Record）与 A 记录相反，用于实现从 IP 地址反向查询对应 FQDN 域名的反向解析（逆引き）。"
      }
    ],
    "hint": "注意<b>将 FQDN 域名直接映射转换为 IPv4 地址</b>的最核心 DNS 记录类型：<b>Aレコード</b>。"
  },
  {
    "questionNumber": 5,
    "question": "企业为了保护内部数据中心服务器的安全并节约有限的公网 IP 地址（グローバルIPアドレス），通常在局域网内部（DMZ 区域）为服务器分配私有 IP 地址（プライベートIPアドレス）。当互联网用户发起对企业公网 IP 的访问时，边界防火墙（FW）会自动将数据包的目标 IP 地址实时转换为内部真实服务器的私有 IP 地址，实现内外网数据的无缝转发。这种在不同 IP 地址空间之间进行无缝转换的技术被称为是什么？",
    "diagram": "  [ 互联网用户 ] ──► [ 公网 IP: 200.0.0.2 ]\n                             │\n                             ▼ (FW / NAT 地址转换)\n                     [ 私有 IP: 192.168.0.2 ] (DMZ 内网 Web 服务器)",
    "answerOptions": [
      {
        "text": "NAT (ネットワークアドレス変換 / Network Address Translation)",
        "isCorrect": true,
        "rationale": "网络地址转换（NAT / Network Address Translation）是一种在 IP 数据包通过路由器或防火墙时重写源或目标 IP 地址的技术。在服务器公开场景中，通过 1:1 静态 NAT 将公网 IP 映射至 DMZ 内网私有 IP，既隐藏了真实内部网络拓扑，又节省了公网 IP 资源。"
      },
      {
        "text": "DHCP (動的ホスト設定プロトコル)",
        "isCorrect": false,
        "rationale": "动态主机配置协议（DHCP）用于在局域网内部自动为终端设备动态分配 IP 地址、子网掩码、网关和 DNS 服务器等网络参数。"
      },
      {
        "text": "PPPoE (Point-to-Point Protocol over Ethernet)",
        "isCorrect": false,
        "rationale": "PPPoE 是在以太网上建立点对点连接的网络协议，常用于运营商宽带拨号上网时的身份认证与 IP 地址分配。"
      },
      {
        "text": "VLAN (仮想ローカルエリアネットワーク)",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN）是在二层交换机上根据逻辑需求分割广播域的技术，并不进行三层 IP 地址的重写与转换。"
      }
    ],
    "hint": "注意<b>将公网 IP 地址与内网私有 IP 地址进行相互映射重写与转换</b>的技术：<b>NAT</b>。"
  },
  {
    "questionNumber": 6,
    "question": "企业核心交换机（L3SW）的路由表（経路表）中记载着前往各个内网网段的明确路径。然而，互联网上的目标 IP 地址极其庞大，路由表不可能穷尽所有公网网段。当运维 PC 或内部服务器发起访问一个目的 IP 不在路由表中任何具体已知网段的数据包时，L3SW 会统一将该数据包发送给指定的默认转发出口设备（如边界防火墙 FW）。这种作为“未匹配路由时的兜底默认转发规则”的路由条目被称为是什么？",
    "diagram": "  [ 数据包目标 IP ] ──► 匹配路由表 (経路表)\n                            │\n                            ├─► 匹配特定内网网段? ──► 转发至特定内网\n                            │\n                            └─► 未匹配任何已知网段 ──► [ デフォルトルート (0.0.0.0/0) ] ──► 转发至边界 FW",
    "answerOptions": [
      {
        "text": "デフォルトルート (Default Route / 0.0.0.0/0)",
        "isCorrect": true,
        "rationale": "默认路由（デフォルトルート / Default Route）是路由表中的一种特殊条目，表示为 `0.0.0.0/0`。当数据包的目标 IP 地址无法匹配路由表中任何更具体的路由规则（最长前缀匹配）时，路由设备就会将该数据包转发给默认路由所指定的下一跳（ネクストホップ）。"
      },
      {
        "text": "スタティックルーティング (Static Routing)",
        "isCorrect": false,
        "rationale": "静态路由（スタティックルーティング）是指由网络管理员人工手动在路由设备上手工配置的固定路由规则的总称（默认路由是静态路由的一种特例，但该概念不特指兜底规则）。"
      },
      {
        "text": "ダイナミックルーティング (Dynamic Routing)",
        "isCorrect": false,
        "rationale": "动态路由（ダイナミックルーティング）是指路由器之间通过运行路由协议（如 OSPF、BGP）自动交换路由信息并计算最优路径的过程。"
      },
      {
        "text": "ポリシーベースルーティング (Policy-Based Routing)",
        "isCorrect": false,
        "rationale": "基于策略的路由（PBR）允许网络管理员突破传统根据目的 IP 路由的限制，根据源 IP、协议端口等灵活策略来决定数据包转发路径。"
      }
    ],
    "hint": "寻找路由表中<b>当没有任何其他路由匹配时使用的兜底转发路径（0.0.0.0/0）</b>：<b>デフォルトルート</b>。"
  },
  {
    "questionNumber": 7,
    "question": "某跨国企业为了将位于不同城市的多个数据中心（b-DC、c-DC）与公司本部局域网安全高效地连接起来，向电信运营商租用了专用的广域网连接服务。该服务基于通信事业者的以太网网路，使得企业可以像使用同一个二层局域网（L2 LAN）一样，直接使用以太网帧（Ethernet Frame）和自定义私有 IP 地址在多个异地据点之间进行点对点高带宽通信。这种由运营商提供的广域二层专线网路服务被称为是什么？",
    "diagram": "  [ 本部 LAN (L3SW) ]\n          │ (以太网帧 / 私有 IP 传输)\n          ▼\n  ┌───────────────────────────────────┐\n  │ 広域イーサネット (二层专线网络)   │\n  └───────┬───────────────────┬───────┘\n          ▼                   ▼\n   [ 数据中心 b-DC ]    [ 数据中心 c-DC ]",
    "answerOptions": [
      {
        "text": "広域イーサネット (Wide Area Ethernet Service)",
        "isCorrect": true,
        "rationale": "广域以太网（広域イーサネット / Wide Area Ethernet）是通信事业者提供的一种基于以太网技术的广域网服务（二层 VPN）。它允许企业直接传输数据链路层（L2）的以太网帧，支持任意三层协议（IP、IPX 等），具有配置灵活、带宽大、延迟低的特点。"
      },
      {
        "text": "IP-VPN",
        "isCorrect": false,
        "rationale": "IP-VPN 是通信事业者在 MPLS 网络上提供的三层（L3）虚拟专用网服务，仅支持 IP 协议，企业与运营商路由器之间需要运行三层路由协议。"
      },
      {
        "text": "IPsec-VPN",
        "isCorrect": false,
        "rationale": "IPsec-VPN 是在不可信的公共互联网（Internet）上通过 IPsec 加密协议构建的安全加密隧道，其传输质量依赖于公网波动。"
      },
      {
        "text": "専用線 (Dedicated Leased Line)",
        "isCorrect": false,
        "rationale": "传统专用线（専用線）是指物理上点对点完全独占的线路（如 T1/E1），虽然安全性极高，但多据点扩展成本极为昂贵，缺乏广域以太网的灵活网状拓扑能力。"
      }
    ],
    "hint": "注意<b>运营商提供的、允许跨据点直接传输以太网帧（L2）的广域服务</b>：<b>広域イーサネット</b>。"
  },
  {
    "questionNumber": 8,
    "question": "企业在为员工运维终端（PC）配置网络参数时，如果仅设置一台 DNS 服务器，一旦该服务器发生故障或进行停机维护，终端将因无法进行域名解析而导致网络中断。为此，网络管理员会在终端操作系统中同时指定两台 DNS 服务器地址：平时优先向主服务器发送查询，当主服务器响应超时或不可达时，自动无缝切换向备用服务器发送查询。这种提高 DNS 冗余性与系统可用性（アベイラビリティ）的配置机制被称为是什么？",
    "diagram": "  [ 运维 PC ] ──► 1. 发起域名解析请求\n                      │\n                      ├─► [ 優先 DNS サーバ ] (正常响应)\n                      │\n                      └─► [ 優先 DNS 故障时 ] ──► [ 代替 DNS サーバ ] (自动备用)",
    "answerOptions": [
      {
        "text": "優先DNS・代替DNS (Primary & Secondary DNS / 冗余配置)",
        "isCorrect": true,
        "rationale": "优先 DNS 与代替 DNS（優先DNS・代替DNS）是终端 TCP/IP 栈的冗余域名解析配置。终端会优先将解析请求发往“優先 DNS サーバ”，当在指定时间内未收到响应或发生网络阻断时，系统会自动将请求转送至“代替 DNS サーバ”，实现了 DNS 服务的容错与高可用性。"
      },
      {
        "text": "リンクアグリゲーション (Link Aggregation)",
        "isCorrect": false,
        "rationale": "链路聚合（リンクアグリゲーション / IEEE 802.3ad）是将多条物理以太网网线捆绑成一条逻辑链路以增加背板带宽和实现物理链路冗余的技术。"
      },
      {
        "text": "プロキシ自動設定 (PAC / Proxy Auto-Configuration)",
        "isCorrect": false,
        "rationale": "代理自动配置文件（PAC）是浏览器用于根据 URL 路径动态选择 HTTP 代理服务器的 JavaScript 脚本文件。"
      },
      {
        "text": "スプリットDNS (Split-Horizon DNS)",
        "isCorrect": false,
        "rationale": "分割 DNS（スプリットDNS）是指为同一个域名针对内部网络与外部互联网返回不同解析结果（私有 IP 与公网 IP）的部署方式。"
      }
    ],
    "hint": "注意在终端网络设置中<b>主 DNS 故障时自动无缝切换至备用 DNS</b> 的机制：<b>優先DNS・代替DNS</b>。"
  },
  {
    "questionNumber": 9,
    "question": "企业局域网通常通过划分多个 VLAN（虚拟局域网）来隔离广播域并提升安全性。然而，当位于不同 VLAN 内的设备（例如运维区 PC 与数据中心 DMZ 内的 Web 服务器）需要互相进行 IP 通信时，必须依赖具备网络层（OSI 第 3 层）数据包路由功能的设备。与传统通用路由器相比，这种设备内部集成了专用 ASIC 硬件芯片，能在极高背板带宽下实现线速（Line-rate）的硬件路由转发。这种局域网核心高带宽设备被称为是什么？",
    "diagram": "  [ 办公区 PC (VLAN 10) ]      [ 运维 PC (VLAN 20) ]\n            │                            │\n            └─────────────┬──────────────┘\n                          ▼\n              ┌───────────────────────┐\n              │ L3 スイッチ           │ (硬件 ASIC 芯片实现极速 3 层路由)\n              └───────────┬───────────┘\n                          ▼\n              [ 数据中心 DMZ (VLAN 30) ]",
    "answerOptions": [
      {
        "text": "L3スイッチ (Layer 3 Switch / 三层交换机)",
        "isCorrect": true,
        "rationale": "三层交换机（L3スイッチ / Layer 3 Switch）是融合了二层交换与三层路由功能的网络设备。它通过硬件专用芯片（ASIC）直接在二层线速上实现 IP 数据包的路由转发，专为局域网内部不同 VLAN 间的高带宽、低延迟数据交换而设计。"
      },
      {
        "text": "L2スイッチ (Layer 2 Switch / 二层交换机)",
        "isCorrect": false,
        "rationale": "二层交换机（L2スイッチ）仅工作在数据链路层（OSI 第 2 层），根据 MAC 地址表进行以太网帧的交换，无法实现不同 VLAN 间的 IP 路由。"
      },
      {
        "text": "リバースプロキシ (Reverse Proxy)",
        "isCorrect": false,
        "rationale": "反向代理工作在应用层（OSI 第 7 层），用于处理 HTTP/HTTPS 请求的负载均衡与缓存，不进行基础网络层的 IP 数据包路由。"
      },
      {
        "text": "集線装置 (Hub / 集线器)",
        "isCorrect": false,
        "rationale": "集线器（Hub）工作在物理层（OSI 第 1 层），采用共享介质广播传输，存在严重的冲突域和安全隐患，早已被淘汰。"
      }
    ],
    "hint": "寻找<b>局域网内依靠硬件 ASIC 芯片实现 VLAN 间极速 IP 路由转发的设备</b>：<b>L3スイッチ</b>。"
  },
  {
    "questionNumber": 10,
    "question": "为了防止外部黑客直接攻击企业内部敏感的数据库或办公网络，网络架构师通常会在受保护的内部局域网（社内 LAN）与不可信的外部互联网（インターネット）之间，通过防火墙（FW）隔离出一个独立的特殊网络区域。该区域内专门放置需要面向互联网公开提供服务的设备（如 Web 服务器、公开 DNS 服务器）。即使该区域内的某台服务器不幸被黑客攻破，防火墙策略也会阻断黑客向内网进一步渗透。这个隔离缓冲区被称为是什么？",
    "diagram": "  [ 外部互联网 ]\n        │\n        ▼ (FW 过滤入站流量)\n  ┌───────────────────────────────────┐\n  │ DMZ (公开 Web / DNS 服务器隔离区) │\n  └─────────────────┬─────────────────┘\n                    │ (FW 严格限制发往内网的访问)\n                    ▼\n  [ 内部安全局域网 (社内 LAN / 数据库) ]",
    "answerOptions": [
      {
        "text": "DMZ (非軍事地帯 / Demilitarized Zone)",
        "isCorrect": true,
        "rationale": "DMZ（非軍事地帯 / Demilitarized Zone）是在内部安全局域网与外部不可信互联网之间构建的缓冲网络隔离区。访问策略通常配置为：允许互联网访问 DMZ，允许内网访问 DMZ，但严格禁止（或限制）从 DMZ 直接发起对内部局域网的访问，以此实现纵深防御。"
      },
      {
        "text": "VPN (仮想プライベートネットワーク)",
        "isCorrect": false,
        "rationale": "虚拟专用网（VPN）是在公网上建立安全通道的技术，用于远程员工或分支机构安全接入企业内网，并非隔离服务器的区域。"
      },
      {
        "text": "SDN (Software-Defined Networking)",
        "isCorrect": false,
        "rationale": "软件定义网络（SDN）是一种将网络控制平面（Control Plane）与数据转发平面（Data Plane）解耦并进行软件集中控制的网络架构模式。"
      },
      {
        "text": "SGW (Secure Web Gateway)",
        "isCorrect": false,
        "rationale": "安全 Web 网关（SGW）是部署在企业内网出口用于监控和过滤内部员工上网行为（防钓鱼、防恶意代码下载）的安全防护设备。"
      }
    ],
    "hint": "注意<b>放置面向互联网公开服务的服务器、隔离内网与外网的安全缓冲区</b>：<b>DMZ</b>。"
  },
  {
    "questionNumber": 11,
    "question": "在日常数据中心运维中，网络管理员需要从公司本部的运维 PC 远程登录到位于数据中心的服务器（如 Web 服务器、DNS 服务器）上执行命令行操作。为了防止运维过程中传输的管理员账号密码及操作命令以明文形式在广域网或局域网上被黑客窃听或篡改，通信过程必须采用对称加密、非对称加密与消息认证码技术建立加密传输隧道。这种替代传统不加密 Telnet 的安全远程登录协议被称为是什么？",
    "diagram": "  [ 运维 PC ] ── (建立 SSH 加密隧道) ──► [ 数据中心服务器 ]\n                    │\n                    ▼ (所有账户密码、交互命令均经过高强度加密)\n            [ 有效防止网络窃听与中间人攻击 ]",
    "answerOptions": [
      {
        "text": "SSH (Secure Shell)",
        "isCorrect": true,
        "rationale": "SSH（Secure Shell）是一种建立在应用层上的安全远程登录与传输协议。SSH 在传输层建立安全加密通道（默认端口 22），对所有传输数据进行加密与完整性校验，有效防止了 DNS 欺骗、IP 欺骗及明文窃听，完全替代了传统的 Telnet 和 RSH 协议。"
      },
      {
        "text": "Telnet",
        "isCorrect": false,
        "rationale": "Telnet 是早期用于远程终端登录的协议，其最大的安全缺陷在于以明文形式传输包含密码在内的所有字符，极易被监听窃取。"
      },
      {
        "text": "FTP (File Transfer Protocol)",
        "isCorrect": false,
        "rationale": "FTP 是用于在网络间传输文件的协议，默认同样采用明文传输（安全场景下需使用 SFTP 或 FTPS）。"
      },
      {
        "text": "SNMP (Simple Network Management Protocol)",
        "isCorrect": false,
        "rationale": "简单网络管理协议（SNMP）用于网络管理员监控路由器、交换机等网络设备的 CPU 使用率、端口流量等运行状态指标。"
      }
    ],
    "hint": "注意<b>用于安全远程登录服务器、对所有传输命令及密码进行高强度加密</b>的协议：<b>SSH</b>。"
  },
  {
    "questionNumber": 12,
    "question": "在 IP 路由转发原理中，路由器或三层交换机（L3SW）收到数据包后，需要查询自身的路由表（経路表）以决定数据包的下一步去向。路由表中的每一条记录除了记载着“目标网络网段（宛先ネットワーク）”之外，还必须明确指定该数据包离开当前设备后，下一个应该接收并处理该数据包的“直接相连的相邻路由设备或防火墙接口的 IP 地址”。这个在路由条目中指向下一个转发节点的 IP 地址被称为是什么？",
    "diagram": "  [ 本地 L3SW ] ── (路由表查找: Next Hop = 192.168.0.254) ──► [ 相邻 FW ] ──► [ 互联网 ]",
    "answerOptions": [
      {
        "text": "ネクストホップ (Next Hop / 下一跳地址)",
        "isCorrect": true,
        "rationale": "下一跳（ネクストホップ / Next Hop）是指在逐跳（Hop-by-Hop）路由转发模式中，数据包沿着路由路径发送时所经过的下一个相邻网络设备的 IP 地址。路由表条目正是将“目的 IP 网段”与“ネクストホップ IP”进行关联映射。"
      },
      {
        "text": "デフォルトゲートウェイ (Default Gateway)",
        "isCorrect": false,
        "rationale": "默认网关（デフォルトゲートウェイ）是终端设备（如 PC、服务器）上配置的网络参数，指终端发送跨网段数据包时在本地局域网内寻找的第一台路由器 IP。"
      },
      {
        "text": "スループット (Throughput)",
        "isCorrect": false,
        "rationale": "吞吐量（スループット）是指单位时间内网络或设备成功传输的实际数据总量（如 Mbps、Gbps）。"
      },
      {
        "text": "ループバックアドレス (Loopback Address)",
        "isCorrect": false,
        "rationale": "环回地址（ループバックアドレス / 如 127.0.0.1）是操作系统用于本机进程间内部 TCP/IP 通信测试的特殊虚拟 IP 地址。"
      }
    ],
    "hint": "寻找路由表中<b>明确记载数据包离开当前设备后下一个直接接收设备的 IP 地址</b>：<b>ネクストホップ</b>。"
  },
  {
    "questionNumber": 13,
    "question": "在包含多台 Web 服务器的负载均衡集群中，当管理员准备对其中一台 Web 服务器进行停机维护或从 DNS 中撤下其 A 记录后，虽然新的用户解析请求不会再被分发至该服务器，但此前已经登录并保持会话（Session）的老用户可能仍在进行业务交互。为了避免突然断开导致用户未保存的数据丢失或交易报错，运维人员在真正关闭服务器前，必须通过系统日志或监控指标核实并确认什么关键状态？",
    "diagram": "  [ DNS 撤下 A 记录 / 负载均衡隔离 ] ──► 新请求不再进入该服务器\n                                             │\n                                             ▼ (检查服务器当前状态)\n  ┌────────────────────────────────────────────────────────┐\n  │ 确认「ログイン中の利用者がいないこと (无在线活跃用户)」│\n  └──────────────────────────┬─────────────────────────────┘\n                             ▼\n                    [ 安全开启停机维护 ]",
    "answerOptions": [
      {
        "text": "ログイン中の利用者がいないこと (确认无在线登录用户/会话)",
        "isCorrect": true,
        "rationale": "在服务器停机维护前，仅等待 TTL 过期或修改 DNS 只能阻止新用户接入。如果已有登录用户正在进行表单提交、支付等耗时会话（Session），强制关机会造成数据损坏或用户体验崩溃。因此必须检查服务器登录会话状态，确认“ログイン中の利用者がいないこと（没有在线登录用户）”后再安全关机。"
      },
      {
        "text": "CPU 使用率持续达到 100%",
        "isCorrect": false,
        "rationale": "CPU 使用率达到 100% 说明服务器处于极高负载甚至异常死锁状态，并非可以安全切断维护的指标。"
      },
      {
        "text": "メモリのドメインゾーンファイルが清空",
        "isCorrect": false,
        "rationale": "Web 服务器内存中并不存储 DNS 的 ゾーンファイル（这是 DNS 服务器的功能），该选项概念混淆。"
      },
      {
        "text": "ファイアウォールのすべてのポートが閉塞",
        "isCorrect": false,
        "rationale": "关闭防火墙端口是在维护前或维护中采取的操作手段，而不是用于判断“当前是否有残留用户会话”的状态检测指标。"
      }
    ],
    "hint": "注意<b>避免切断已有用户正在进行的会话、维护前必须确认的状态</b>：<b>ログイン中の利用者がいないこと</b>。"
  },
  {
    "questionNumber": 14,
    "question": "为了阻断来自互联网的非法未授权访问并保护 DMZ 区域的服务器，企业在网络边界部署了防火墙（FW）。现代防火墙不仅能够根据数据包的源/目的 IP 地址和端口号（ACL）进行静态过滤，还能动态跟踪 TCP 连接的三次握手状态（如 SYN、ACK），并在内部维护一张连接状态表，只允许已建立合法会话的响应数据包通过，坚决拦截未授权的伪造入站请求。这种动态跟踪连接状态的安全过滤技术被称为是什么？",
    "diagram": "  [ 外部互联网请求 ] ──► [ 防火墙 FW ] (检查 ACL + TCP 连接状态表)\n                                │\n                      ┌─────────┴─────────┐\n                      ▼                   ▼\n                 [ 合法响应 / 握手 ]    [ 未授权入站请求 ]\n                      │                   │\n                      ▼                   ▼\n                 (允许通过)             (直接丢弃 / Drop)",
    "answerOptions": [
      {
        "text": "ステートフルインスペクション (Stateful Inspection / 状态检测)",
        "isCorrect": true,
        "rationale": "状态检测防火墙（ステートフルインスペクション / Stateful Inspection）在网络层和传输层工作。它通过在内存中维护一张“连接状态表（State Table）”，动态监视每一个 TCP/UDP 会话的状态，只允许匹配有效会话的返程流量通过，大幅提升了防火墙防护伪造报文（如 SYN Flood）的能力。"
      },
      {
        "text": "プロキシサーバ (Proxy Server)",
        "isCorrect": false,
        "rationale": "代理服务器（プロキシサーバ）完全建立在应用层，代表客户端向目标服务器发起请求，并处理应用层数据的响应与缓存。"
      },
      {
        "text": "IDS (侵入検知システム / 入侵检测系统)",
        "isCorrect": false,
        "rationale": "IDS 主要是旁路部署的网络监控设备，通过匹配特征库识别网络攻击并发出警报，本身通常不直接阻断数据包。"
      },
      {
        "text": "WAF (ウェブアプリケーションファイアウォール)",
        "isCorrect": false,
        "rationale": "WAF 专门用于防御应用层（OSI 第 7 层）的 Web 攻击（如 SQL 注入、XSS 跨站脚本），并不专注于底层 TCP 连接状态的管理。"
      },
      
    ],
    "hint": "注意<b>防火墙通过维护连接状态表、动态跟踪 TCP 会话状态进行包过滤</b>的技术：<b>ステートフルインスペクション</b>。"
  },
  {
    "questionNumber": 15,
    "question": "在 DNS 系统的资源记录（リソースレコード）中，除了用于把域名映射为 IPv4 地址的 A 记录外，还包含多种功能的记录类型。例如，当企业拥有多个不同的域名别名（例如 `www.example.jp`），希望将它们统一指向同一个已有的规范主域名（例如 `misp.example.jp`），以便在后续更换后端服务器 IP 地址时，只需在 DNS ゾーン文件中修改主域名的 A 记录即可。这种专门用于建立“别名到规范域名映射”的 DNS 记录类型被称为是什么？",
    "diagram": "  [ 别名域名: www.example.jp ]\n               │\n               ▼ (DNS 查表: CNAME レコード)\n  [ 规范主域名: misp.example.jp ]\n               │\n               ▼ (DNS 查表: A レコード)\n  [ IPv4 地址: 200.0.0.2 ]",
    "answerOptions": [
      {
        "text": "CNAMEレコード (Canonical Name Record / 别名记录)",
        "isCorrect": true,
        "rationale": "CNAME 记录（CNAMEレコード / Canonical Name Record）用于将一个域名（别名）映射到另一个规范域名（Canonical Name）。它的优势在于允许多个域名共享同一个主域名的 IP 配置，当 IP 发生变更时，仅需更新主域名的 A 记录，而无需逐个修改所有别名记录。"
      },
      {
        "text": "PTRレコード (Pointer Record)",
        "isCorrect": false,
        "rationale": "PTR 记录用于将 IP 地址反向映射为 FQDN 域名（逆引き）。"
      },
      {
        "text": "NSレコード (Name Server Record)",
        "isCorrect": false,
        "rationale": "NS 记录（Name Server）用于指定负责解析该区域（Zone）权威 DNS 服务器的 FQDN 域名。"
      },
      {
        "text": "TXTレコード (Text Record)",
        "isCorrect": false,
        "rationale": "TXT 记录用于保存任意文本信息，常用于邮件域名的防伪验证（如 SPF 记录、DKIM 签名）。"
      }
    ],
    "hint": "注意<b>将域名（别名）映射指向另一个规范域名（Canonical Name）</b>的 DNS 记录类型：<b>CNAMEレコード</b>。"
  }
];
console.log("成功加载题库！");