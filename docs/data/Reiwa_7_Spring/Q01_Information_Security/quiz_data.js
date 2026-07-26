// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "某企业网络遭遇未知威胁侵入并导致核心系统瘫痪。为了在不破坏现场证据的前提下，法律合规地收集、提取与分析被入侵服务器及网络设备中的电子数据（電磁的記録），应急响应专家要求立即切断网络连接并停止使用相关设备。这种通过科学程序对电磁记录进行证据保全（証拠保全）、分析与追踪的技术和方法被称为是什么？",
    "diagram": "  [ 发生安全事件 ]\n         │ (切断网络/停止设备)\n         ▼\n  ┌──────────────┐\n  │ 证据保全     │ (Data Acquisition)\n  └──────┬───────┘\n         ▼\n  ┌──────────────┐\n  │ 深入分析     │ (Digital Analysis)\n  └──────────────┘",
    "answerOptions": [
      {
        "text": "デジタルフォレンジックス",
        "isCorrect": true,
        "rationale": "数字取证（デジタルフォレンジックス／Digital Forensics）是指在发生网络安全事件时，对计算机及网络设备中的电子证据进行收集、保全、分析，并将其呈递为法律有效证据的一套科学技术与方法。"
      },
      {
        "text": "ソーシャルエンジニアリング",
        "isCorrect": false,
        "rationale": "社会工程学（ソーシャルエンジニアリング／Social Engineering）利用人类心理弱点（如冒充IT人员骗取密码）获取敏感信息，不属于事后电子证据调查的技术手段。"
      },
      {
        "text": "リバースエンジニアリング",
        "isCorrect": false,
        "rationale": "逆向工程（リバースエンジニアリング／Reverse Engineering）主要通过反汇编或反编译来分析软件软件代码逻辑，虽然可用于恶意代码分析，但并非完整的证据保全与取证流程。"
      },
      {
        "text": "ペネトレーションテスト",
        "isCorrect": false,
        "rationale": "渗透测试（ペネトレーションテスト／Penetration Testing）是事前主动模拟黑客攻击以评估系统安全脆弱性的测试方法，而非事后调查与证据保全技术。"
      }
    ],
    "hint": "请注意题干强调的<b>电磁记录（電磁的記録）的证据保全</b>与<b>事后调查分析</b>。在日本AP考试中，用于法律立证与追踪攻击痕迹的技术被称为<b>デジタルフォレンジックス</b>。"
  },
  {
    "questionNumber": 2,
    "question": "某企业系统管理员在排查异常登录日志时，发现攻击者针对特定的管理员账号（如 admin），使用预先整理好的高频密码常用词典（単語リスト），从上至下依次进行自动化登录试行。日志记录显示在前150次尝试失败后，第151次使用“password123456”成功破译了该账号。这种利用常见词汇组合攻击单一账号的密码破解手法被称为是什么？",
    "diagram": "  [ 密码字典 ] (Password List)\n         │\n         ├─► 尝试1: \"123456\"    ──► 失败\n         ├─► 尝试2: \"admin123\"  ──► 失败\n         ▼\n  [ 目标账号: admin ] ──► 登录成功!",
    "answerOptions": [
      {
        "text": "辞書攻撃",
        "isCorrect": true,
        "rationale": "字典攻击（辞書攻撃／Dictionary Attack）利用预先准备的常用密码、单词组合列表，对特定的单一账户进行高频自动化试错，专门用于突破使用弱口令的用户。"
      },
      {
        "text": "パスワードスプレー攻撃",
        "isCorrect": false,
        "rationale": "密码喷洒攻击（パスワードスプレー攻撃／Password Spraying Attack）是使用极少数常用密码对大量不同账号依次尝试，目的在于绕过单账户锁定阈值，与针对单一账号试错不同。"
      },
      {
        "text": "リプレイ攻撃",
        "isCorrect": false,
        "rationale": "重放攻击（リプレイ攻撃／Replay Attack）是窃听并截获合法的身份验证数据包后原封不动地重新发送以获取访问权限，并非盲目猜测密码。"
      },
      {
        "text": "中間者攻撃",
        "isCorrect": false,
        "rationale": "中间人攻击（中間者攻撃／Man-in-the-Middle Attack）是指攻击者潜伏在通信两端之间盗听或篡改数据，不涉及直接针对登录接口的密码猜解。"
      }
    ],
    "hint": "注意题干中的<b>单一账户（Target ID）</b>与<b>使用常用单词/密码列表高频尝试</b>。这种按词典顺序猜解密码的手法在AP考试中被称为<b>辞書攻撃</b>。"
  },
  {
    "questionNumber": 3,
    "question": "在跨企业远程运维和协作场景中，运维人员需要从本地PC跨越网络边界直接操控远端内网的服务器桌面。该通信过程默认采用 TCP 端口 3389，能够将远端服务器的图形界面（GUI）无缝传输至本地终端，并回传鼠标与键盘指令。这种广泛用于远程桌面控制的网络协议是什么？",
    "diagram": "  [ 本地终端 ] (Client)\n         │\n         │ TCP/3389 (GUI/控制指令)\n         ▼\n  ┌──────────────┐\n  │ 远端服务器   │ (Remote Server)\n  └──────────────┘",
    "answerOptions": [
      {
        "text": "RDP",
        "isCorrect": true,
        "rationale": "远程桌面协议（RDP／Remote Desktop Protocol）默认运行在 TCP/3389 端口，允许用户在本地对远端Windows或服务器进行包含图形界面（GUI）的全面操作。"
      },
      {
        "text": "SSH",
        "isCorrect": false,
        "rationale": "安全外壳协议（SSH／Secure Shell）默认基于 TCP/22 端口，主要用于加密的命令行（CLI）远程管理，并非传输图形界面的桌面协议。"
      },
      {
        "text": "HTTPS",
        "isCorrect": false,
        "rationale": "超文本传输安全协议（HTTPS／Hypertext Transfer Protocol Secure）默认使用 TCP/443 端口，用于加密传输Web网页数据，不支持直接的操作系统桌面远控。"
      },
      {
        "text": "SFTP",
        "isCorrect": false,
        "rationale": "SSH文件传输协议（SFTP／SSH File Transfer Protocol）是基于SSH的安全文件传输协议，专门用于文件上传与下载，不具备桌面交互控制功能。"
      }
    ],
    "hint": "关注关键特征：<b>远程图形界面操控（Remote Desktop）</b>与默认端口 <b>TCP/3389</b>。在日本AP考试中该标准协议缩写为 <b>RDP</b>。"
  },
  {
    "questionNumber": 4,
    "question": "某企业为了对抗攻击者发起的自动化密码暴力破解，在身份认证模块中引入了一种安全防御机制。该机制设定当同一个账户连续输入错误密码达到指定的阈值（しきい値，如5次）时，系统会自动将该账户锁定（ロックアウト）一段时间或强制要求管理员解封。这种用于阻断针对单一账户持续试错的安全策略被称为是什么？",
    "diagram": "  [ 用户尝试登录 ]\n         │\n         ▼\n  ┌──────────────┐\n  │ 密码连续错误 │ 达到阈值(5回)\n  └──────┬───────┘\n         ▼\n  ┌──────────────┐\n  │ 账号暂时冻结 │ (Account Locked)\n  └──────────────┘",
    "answerOptions": [
      {
        "text": "アカウントロックアウト",
        "isCorrect": true,
        "rationale": "账户锁定（アカウントロックアウト／Account Lockout）机制通过限制单一账号在单位时间内的连续登录失败次数（ロックアウトのしきい値），能直接削弱暴力破解与字典攻击的效果。"
      },
      {
        "text": "キャプチャ",
        "isCorrect": false,
        "rationale": "验证码（キャプチャ／CAPTCHA）通过扭曲文字或图片识别区分人类与自动化脚本，并非基于试错次数直接冻结账号的策略。"
      },
      {
        "text": "ワンタイムパスワード",
        "isCorrect": false,
        "rationale": "一次性密码（ワンタイムパスワード／One-Time Password）是一种一次有效的动态认证手段，主要防止密码被盗用或窃听，不属于账号连续失败时的锁定策略。"
      },
      {
        "text": "シングルサインオン",
        "isCorrect": false,
        "rationale": "单点登录（シングルサインオン／Single Sign-On）允许用户使用一组凭证访问多个互信任的系统，属于便捷性身份管理方案。"
      }
    ],
    "hint": "关键在于<b>连续失败次数达到阈值（しきい値）</b>后<b>冻结账户</b>的防御机制。AP大纲中该安全机制被称为<b>アカウントロックアウト</b>。"
  },
  {
    "questionNumber": 5,
    "question": "某攻击者为了绕过企业系统针对“单一账户连续失败即锁定”的防御阈值，改变了传统的攻击策略：攻击者固定使用一个常见弱密码（如 password123），然后对系统内获取到的数千个不同用户ID依次尝试登录一次。这种保持密码不变、横向遍历大量不同账户的攻击手法被称为是什么？",
    "diagram": "  [ 固定密码: \"password123\" ]\n         │\n         ├─► 用户A ──► 试错1次(未达阈值)\n         ├─► 用户B ──► 试错1次(未达阈值)\n         ▼\n  [ 横向覆盖千个账户 ] (Bypass Lockout)",
    "answerOptions": [
      {
        "text": "リバースブルートフォース攻撃",
        "isCorrect": true,
        "rationale": "逆向暴力破解（リバースブルートフォース攻撃／Reverse Brute Force Attack）与传统“针对单ID试多密码”相反，其固定密码而更换大量ID，有效规避了针对单ID的账户锁定阈值。"
      },
      {
        "text": "ブルートフォース攻撃",
        "isCorrect": false,
        "rationale": "传统暴力破解（ブルートフォース攻撃／Brute Force Attack）是指针对单一账号盲目尝试所有可能的字符组合，极易触发账户锁定（Account Lockout）。"
      },
      {
        "text": "ドライブバイダウンロード攻撃",
        "isCorrect": false,
        "rationale": "路过式下载攻击（ドライブバイダウンロード攻撃／Drive-by Download）指用户浏览被挂马网页时自动下载运行恶意代码，与身份认证接口猜解无关。"
      },
      {
        "text": "ゼロデイ攻撃",
        "isCorrect": false,
        "rationale": "零日攻击（ゼロデイ攻撃／Zero-day Attack）是指利用软件厂商尚未发布补丁的未公开脆弱性进行的攻击，并非利用弱密码横向破解认证接口。"
      }
    ],
    "hint": "注意其运行逻辑与传统暴力破解颠倒：<b>固定一个密码（同一のパスワード）</b>，依次对<b>大量不同账号（異なるID）</b>试错以避开锁定。这被称为<b>リバースブルートフォース攻撃</b>。"
  },
  {
    "questionNumber": 6,
    "question": "随着新型勒索软件（ランサムウェア／Ransomware）攻击手段的升级，攻击者在入侵内网后通常会优先加密或销毁网络附加存储（NAS／Network Attached Storage）中的备份数据。为了保障数据恢复能力，企业引入了一种具有“一次写入、多次读取（WORM／Write Once Read Many）”机制的存储方案，规定在设定的保留期限内任何用户（包括特权管理员）均无法修改或删除已保存的备份文件。这种存储技术被称为是什么？",
    "diagram": "  [ 备份数据写入 ]\n         │\n         ▼\n  ┌──────────────┐\n  │ 不可变存储   │ (WORM / Immutable)\n  └──────┬───────┘\n         │ (禁止篡改/禁止删除/禁止加密)\n         ▼\n  [ 灾难发生时完全还原 ]",
    "answerOptions": [
      {
        "text": "イミュータブルストレージ",
        "isCorrect": true,
        "rationale": "不可变存储（イミュータブルストレージ／Immutable Storage）具备不可篡改与不可删除的 WORM 特性，即使高权管理员账户被盗或遭勒索软件入侵，其内部的备份数据也无法被加密或销毁。"
      },
      {
        "text": "インクリメンタルバックアップ",
        "isCorrect": false,
        "rationale": "增量备份（インクリメンタルバックアップ／Incremental Backup）是指仅备份自上次备份以来发生变化的数据，属于备份策略分类，不包含数据防篡改锁定的存储属性。"
      },
      {
        "text": "ディファレンシャルバックアップ",
        "isCorrect": false,
        "rationale": "差分备份（ディファレンシャルバックアップ／Differential Backup）是指备份自上次全量备份以来改变的所有数据，亦不具备防止勒索软件篡改的硬件/策略锁。"
      },
      {
        "text": "スナップショット",
        "isCorrect": false,
        "rationale": "快照（スナップショット／Snapshot）是系统某一特定时刻状态的只读/读写映像，如果未开启逻辑锁定，快照仍可能被具备高权力的攻击者恶意删除。"
      }
    ],
    "hint": "解题核心在于<b>不可变（Immutable）</b>与<b>WORM（一次写入不可篡改/删除）</b>，常用于对抗勒索软件加密备份。在日本AP考试中该概念称为<b>イミュータブルストレージ</b>。"
  },
  {
    "questionNumber": 7,
    "question": "某企业各服务器与网络设备的日志文件保存在本地磁盘，当遇到高频日志刷屏或遭遇持续攻击时，本地日志因触发“最大容量覆盖（上書き）”机制而丢失历史记录，给后续安全调查造成阻碍。为此，企业引入了一套集中式的安全信息与事件管理系统，能够实时收集、关联分析并安全留存全网设备的日志。该系统的技术缩写是什么？",
    "diagram": "  [ 服务器/FW/PC ] (各设备日志)\n         │\n         ▼ (集中实时汇聚)\n  ┌──────────────┐\n  │ SIEM 系统    │ (日志关联分析与长期保存)\n  └──────────────┘",
    "answerOptions": [
      {
        "text": "SIEM",
        "isCorrect": true,
        "rationale": "安全信息和事件管理（SIEM／Security Information and Event Management）系统能将全网服务器、安全设备的日志集中汇聚，提供统一存储、关联分析与入侵告警，防止本地日志被上覆盖或篡改。"
      },
      {
        "text": "IDS",
        "isCorrect": false,
        "rationale": "入侵检测系统（IDS／Intrusion Detection System）主要用于监控网络流量中的可疑攻击行为并发出告警，不承担全网日志长期集中集中留存与审计功能。"
      },
      {
        "text": "WAF",
        "isCorrect": false,
        "rationale": "Web应用防火墙（WAF／Web Application Firewall）专注于在应用层防护针对Web服务器的SQL注入、XSS等攻击，并非综合日志分析管理平台。"
      },
      {
        "text": "DLP",
        "isCorrect": false,
        "rationale": "数据泄漏防护（DLP／Data Loss Prevention）用于监测并阻止机密敏感数据向企业外部未经授权地传输或泄漏，不属于日志集中管理审计系统。"
      }
    ],
    "hint": "注意<b>集中汇聚各类日志（ログ管理）</b>、<b>关联分析安全事件</b>等核心需求。在AP午前考试中，该安全平台简称是 <b>SIEM</b>。"
  },
  {
    "questionNumber": 8,
    "question": "某企业为了防止运维人员的静态密码在网络传输中被窃听或因凭据泄露导致系统被非法入侵，在特权登录环节引入了二次认证机制。该机制要求用户在输入账户密码的同时，必须提交一个基于时间算法（TOTP）或硬件令牌生成的动态口令，且该口令在验证使用一次后立即失效。这种认证技术被称为是什么？",
    "diagram": "  [ 账户密码 + 动态口令 ]\n         │\n         ▼\n  ┌──────────────┐\n  │ 验证一次即失效│ (Single Use Only)\n  └──────┬───────┘\n         ▼\n  [ 许可特权访问 ]",
    "answerOptions": [
      {
        "text": "ワンタイムパスワード",
        "isCorrect": true,
        "rationale": "一次性密码（ワンタイムパスワード／One-Time Password）每次认证时动态生成且仅能使用一次，即使前一次的凭据被攻击者窃听或获取，也无法复用该口令进行非法登录。"
      },
      {
        "text": "クッキー",
        "isCorrect": false,
        "rationale": "Cookie（クッキー）是服务器保存在客户端浏览器上的数据片断，用于维持Web会话状态，其本身可长期重复使用且存在被劫持风险。"
      },
      {
        "text": "チャレンジレスポンス",
        "isCorrect": false,
        "rationale": "质询响应认证（チャレンジレスポンス／Challenge-Response）是一种身份验证协议通信过程，利用随机质询和散列计算防止密码明文传输，并非指生成的动态口令本身。"
      },
      {
        "text": "クライアント証明書",
        "isCorrect": false,
        "rationale": "客户端证书（クライアント証明書／Client Certificate）是安装在特定设备上的PKI数字证书，用于设备身份验证，通常长效存在而非单次失效。"
      }
    ],
    "hint": "破题核心在于<b>一次有效（使用後は無効）</b>、<b>动态生成</b>的身份验证凭证。日本AP考试中称为 <b>ワンタイムパスワード</b>。"
  },
  {
    "questionNumber": 9,
    "question": "某大型金融机构为了杜绝运维人员长期持有高权限账号（如 root 或 Administrator）带来的安全风险，建立了严格的“特权账号申请与管理”流程。规定日常运维中特权账号处于禁用状态，仅在获得特权ID管理者审批后临时发放一次性凭证，并对运维过程中的所有敏感指令进行全程录屏与审计。这种安全管理机制被称为是什么？",
    "diagram": "  [ 运维人员申请 ] ──► [ 审批授权 ]\n                           │\n                           ▼ (临时分配/动态口令)\n                   ┌──────────────┐\n                   │ 特権ID管理   │ (全程录屏与审计)\n                   └──────────────┘",
    "answerOptions": [
      {
        "text": "特権ID管理",
        "isCorrect": true,
        "rationale": "特权ID管理（特権ID管理／Privileged Access Management）针对具有最高系统权限的账号（特権ID）实施严格的申请审批、动态凭证发放、最小权限授权及全过程操作审计，防止高权滥用。"
      },
      {
        "text": "アイデンティティプロバイダ",
        "isCorrect": false,
        "rationale": "身份提供者（アイデンティティプロバイダ／Identity Provider）负责在联合认证（如 SAML/OIDC）中创建、维护和管理身份信息并向应用提供认证服务。"
      },
      {
        "text": "シングルサインオン",
        "isCorrect": false,
        "rationale": "单点登录（シングルサインオン／Single Sign-On）旨在改善用户体验，使用户只需一次登录即可访问多个独立系统，不涉及特权账号的审批与监控。"
      },
      {
        "text": "属性ベースアクセス制御",
        "isCorrect": false,
        "rationale": "基于属性的访问控制（属性ベースアクセス制御／ABAC）是根据用户属性、资源属性和环境条件动态决定访问权限的技术，并非针对超级管理员ID的专项管控手段。"
      }
    ],
    "hint": "注意场景中针对<b>最高权限账号（管理者権限のあるID）</b>的<b>申请审批、临时授权与操作监控</b>。在日本AP考试中称为<b>特権ID管理</b>。"
  },
  {
    "questionNumber": 10,
    "question": "在居家办公（テレワーク／Telework）普遍化的背景下，企业员工需要通过公共互联网安全访问位于企业内网的业务系统。该技术在传输层利用 TLS/SSL 协议对通信流量进行加密，使得员工只需通过标准 Web 浏览器或专用客户端即可建立安全的虚拟专用网通道。这种远程接入技术被称为是什么？",
    "diagram": "  [ 远程员工 PC ]\n         │\n         ▼ (HTTPS / TLS 443 加密通道)\n  ┌──────────────┐\n  │ SSL-VPN 网关 │\n  └──────┬───────┘\n         ▼\n  [ 企业内部业务网段 ]",
    "answerOptions": [
      {
        "text": "SSL-VPN",
        "isCorrect": true,
        "rationale": "SSL-VPN 利用 TLS/SSL 协议建立安全加密隧道，由于其通常使用标准 HTTPS（443号端口），能轻松穿透绝大多数防火墙，极大地方便了远程员工安全接入内网。"
      },
      {
        "text": "IPsec-VPN",
        "isCorrect": false,
        "rationale": "IPsec-VPN 运行在网络层（IP层），常用于企业总部与分支机构之间的网关对网关（Site-to-Site）固定加密连接，配置相对繁琐。"
      },
      {
        "text": "PPTP",
        "isCorrect": false,
        "rationale": "点对点隧道协议（PPTP）是一种较早期的数据链路层隧道协议，因存在已知安全缺陷且使用了较弱的加密机制，目前已基本被淘汰。"
      },
      {
        "text": "L2TP",
        "isCorrect": false,
        "rationale": "第二层隧道协议（L2TP）本身不提供数据加密功能，必须结合 IPsec 协议（L2TP/IPsec）一起使用才能保障通信安全性。"
      }
    ],
    "hint": "注意<b>基于Web浏览器或TLS/SSL协议</b>建立加密隧道以供<b>居家办公（自宅PC）</b>安全接入。AP考试中最常见的技术缩写是 <b>SSL-VPN</b>。"
  },
  {
    "questionNumber": 11,
    "question": "某企业在部署网络防火墙（ファイアウォール／Firewall）时，要求防火墙不仅能根据五元组（源IP、目的IP、源端口、目的端口、协议）过滤数据包，还能在动态会话表中追踪 TCP 连接的握手状态（如 SYN, ESTABLISHED）。当内网主动发起向外网的连接请求时，防火墙能自动许可该连接对应的“外网返回响应数据包（返信パケット）”通过。这种防火墙技术被称为是什么？",
    "diagram": "  [ 内网 PC ] ──► (主动发起连接) ──► [ 防火墙 ] ──► [ 外网 ]\n                                       │\n                                       ▼ (记录会话表)\n  [ 内网 PC ] ◄── (许可响应数据包) ◄── [ 防火墙 ]",
    "answerOptions": [
      {
        "text": "ステートフルパケットインスペクション",
        "isCorrect": true,
        "rationale": "状态包检测（ステートフルパケットインスペクション／Stateful Packet Inspection）通过内部维护会话表（State Table）跟踪连接状态，能够自动识别并放行合法的双向响应数据包，安全性与效率兼备。"
      },
      {
        "text": "静的パケットフィルタリング",
        "isCorrect": false,
        "rationale": "静态包过滤（静的パケットフィルタリング／Static Packet Filtering）仅依据预设的固定规则逐包匹配IP和端口，无法理解动态会话状态，必须显式开放双向端口。"
      },
      {
        "text": "アプリケーションゲートウェイ",
        "isCorrect": false,
        "rationale": "应用网关（アプリケーションゲートウェイ／Application Gateway）通过特定应用代理服务在7层拆解并检查所有数据，性能开销极大。"
      },
      {
        "text": "プロキシフィルタリング",
        "isCorrect": false,
        "rationale": "代理过滤（プロキシフィルタリング／Proxy Filtering）主要用于代客户端发起Web请求并进行内容过滤，并非在网络/传输层管理TCP状态表。"
      }
    ],
    "hint": "注意核心运行原理：<b>管理通信会话状态（ステート）</b>并自动放行<b>响应数据包（返信パケット）</b>。在日本AP考试中称为<b>ステートフルパケットインスペクション</b>。"
  },
  {
    "questionNumber": 12,
    "question": "某中型企业服务器遭遇恶意代码感染，攻击者利用凭据盗取工具突破内网后，调用加密脚本暗中对企业数据库与 NAS 备份文件进行非对称加密，并在受害服务器桌面上放置提示文件，声称只有在指定时间内支付虚拟货币（如比特币）才能提供解密私钥。这种以非法加密受害者数据并勒索赎金为特征的恶意软件被称为是什么？",
    "diagram": "  [ 恶意代码侵入 ]\n         │\n         ▼\n  ┌──────────────┐\n  │ 暗中加密数据 │ (Strong Encryption)\n  └──────┬───────┘\n         ▼\n  [ 留下勒索信索要赎金 ]",
    "answerOptions": [
      {
        "text": "ランサムウェア",
        "isCorrect": true,
        "rationale": "勒索软件（ランサムウェア／Ransomware）通过强加密手段将受害者的业务文件或数据库加锁，并以销毁私钥相要挟索要赎金，是对企业业务连续性的重大威胁。"
      },
      {
        "text": "スパイウェア",
        "isCorrect": false,
        "rationale": "间谍软件（スパイウェア／Spyware）旨在静默潜伏在系统中窃取键盘记录、浏览历史或个人敏感凭据，通常不会破坏或加密用户文件。"
      },
      {
        "text": "ボットネット",
        "isCorrect": false,
        "rationale": "僵尸网络（ボットネット／Botnet）是指受黑客（C2服务器）统一远程控制的一群被感染主机，主要用于协同发起大型 DDoS 攻击或发送垃圾邮件。"
      },
      {
        "text": "ワーム",
        "isCorrect": false,
        "rationale": "蠕虫病毒（ワーム／Worm）主要特征是通过网络漏洞或共享目录进行自我复制与自主传播，并不一定包含加密文件勒索赎金的 payload。"
      }
    ],
    "hint": "特征极其鲜明：<b>非法暗中加密数据（暗号化）</b>并<b>索要赎金（身代金）</b>。在日本AP考试中统称为<b>ランサムウェア</b>。"
  },
  {
    "questionNumber": 13,
    "question": "某企业制定了严密的数据库备份策略：每周一凌晨0:30进行全量备份（フルバックアップ），而在周二至周日的相同时间，每天仅备份“自周一完全备份之后产生的所有累计变动数据”。当周五发生故障需要恢复时，只需加载周一的全量备份和周四的备份包即可。这种基于上次全量备份累积变动的备份方式被称为是什么？",
    "diagram": "  [ 周一 ] 全量备份 (Full)\n     │\n     ├─► [ 周二 ] 周一以来的变动\n     ├─► [ 周三 ] 周一以来的变动\n     ▼\n  [ 周四 ] 周一以来的累积变动 (Differential)",
    "answerOptions": [
      {
        "text": "差分バックアップ",
        "isCorrect": true,
        "rationale": "差分备份（差分バックアップ／Differential Backup）每次都保存自“上一次全量备份”以来增加或修改的所有累积数据。优点是恢复速度快（只需全量+最新差分），但备份体积会随时间推移逐渐增大。"
      },
      {
        "text": "増分バックアップ",
        "isCorrect": false,
        "rationale": "增量备份（増分バックアップ／Incremental Backup）仅保存自“上一次任意类型的备份”以来改变的数据。备份速度最快，但恢复时需要依次叠加全量及之后的所有增量包。"
      },
      {
        "text": "フルバックアップ",
        "isCorrect": false,
        "rationale": "完全备份（フルバックアップ／Full Backup）是指将系统所有选定数据完整复制一份，耗时最长且占用空间最大。"
      },
      {
        "text": "リアルタイムレプリケーション",
        "isCorrect": false,
        "rationale": "实时复制（リアルタイムレプリケーション／Real-time Replication）是将数据变动实时同步至备用节点，主要用于高可用，不能防止源端数据被逻辑篡改后的错误同步。"
      }
    ],
    "hint": "注意区别：每天备份的是<b>自上一次全量备份（起点）</b>以来的<b>所有累积变化量</b>。恢复时仅需要全量包与最新一个备份包。这在日系IT考试中称为<b>差分バックアップ</b>。"
  },
  {
    "questionNumber": 14,
    "question": "在针对企业员工身份凭据的攻击中，攻击者收集了企业公开或泄露的数百个员工邮箱账号（User ID），并针对每个账号仅仅尝试使用 1 次相同的常用弱口令（如 Spring2026!）。由于每个账号的试错次数仅为 1 次，成功完美绕过了企业按单一账号计算的账户锁定策略。这种对大量不同账号“喷洒”统一弱密码的攻击方式被称为是什么？",
    "diagram": "  [ 统一常用密码: \"Spring2026!\" ]\n         │\n         ├─► 员工账号1 (试错1次)\n         ├─► 员工账号2 (试错1次)\n         ▼\n  [ 广洒网避开锁定机制 ] (Password Spraying)",
    "answerOptions": [
      {
        "text": "パスワードスプレー攻撃",
        "isCorrect": true,
        "rationale": "密码喷洒攻击（パスワードスプレー攻撃／Password Spraying Attack）通过使用单一口令尝试破解成百上千个账户，使每个账户的失败尝试次数远低于锁定阈值（Lockout Threshold），极具隐蔽性。"
      },
      {
        "text": "辞書攻撃",
        "isCorrect": false,
        "rationale": "字典攻击（辞書攻撃／Dictionary Attack）通常集中火力对单一目标账号尝试大量的候选密码，很容易迅速触发账号锁定。"
      },
      {
        "text": "キーロガー",
        "isCorrect": false,
        "rationale": "键盘记录器（キーロガー／Keylogger）是安装在终端上的恶意软件或硬件插件，用于偷偷记录用户的物理按键输入以窃取口令。"
      },
      {
        "text": "中間者攻撃",
        "isCorrect": false,
        "rationale": "中间人攻击（中間者攻撃／Man-in-the-Middle Attack）在通信链路中间拦截数据，不属于通过认证接口提交常用密码猜解账号的手法。"
      }
    ],
    "hint": "核心特征在于：<b>低频（低频率）</b>、<b>针对极多不同账号（多数のアカウント）</b>喷洒<b>同一弱口令（単一のパスワード）</b>以绕过防爆破锁定。AP中称为<b>パスワードスプレー攻撃</b>。"
  },
  {
    "questionNumber": 15,
    "question": "企业在进行网络拓扑设计时，为了保护内部核心数据库和业务服务器，在内部局域网（LAN）与外部互联网（インターネット）之间建立了一个独立的隔离缓冲区。该区域专门用于部署面向公网提供服务的服务器（如 Web 服务器、外部 DNS 服务器），即使该区域的服务器被攻击者攻陷，攻击者也无法直接跨越网络边界突破至内部业务网段。这个隔离网络区域被称为是什么？",
    "diagram": "  [ 互联网 ] (Internet)\n      │\n      ▼\n  ┌──────────────┐\n  │ DMZ 隔离区   │ (Web / Mail サーバ)\n  └──────┬───────┘\n         ▼ (FW2 严格限制)\n  [ 内部业务セグメント ] (DB / AP サーバ)",
    "answerOptions": [
      {
        "text": "DMZ",
        "isCorrect": true,
        "rationale": "非军事区（DMZ／Demilitarized Zone）是夹在公网与内网之间的隔离网段。放置在该区域的Web或邮件服务器即使被攻陷，由于内部防火墙的访问控制规则，黑客也无法直接向内网高危网段渗透。"
      },
      {
        "text": "VLAN",
        "isCorrect": false,
        "rationale": "虚拟局域网（VLAN／Virtual Local Area Network）是在交换机上通过逻辑划分广播域的技术，并不等同于专为外网服务设立的安全隔离区。"
      },
      {
        "text": "LAN",
        "isCorrect": false,
        "rationale": "局域网（LAN／Local Area Network）是有限地理范围内的企业内部网络通称，本身不特指具备防火墙双重隔离的外网服务缓冲区。"
      },
      {
        "text": "イントラネット",
        "isCorrect": false,
        "rationale": "内联网（イントラネット／Intranet）是指采用TCP/IP技术构建的企业内部私有网络，属于受保护的内网实体，而非缓冲隔离区。"
      }
    ],
    "hint": "注意网络架构位置：位于<b>外部互联网</b>与<b>内部业务网段</b>之间的<b>缓冲隔离区（非軍事地帯）</b>，专门放置 Web 服务器等公网服务。AP标准术语缩写为 <b>DMZ</b>。"
  }
];
console.log("成功加载题库！");