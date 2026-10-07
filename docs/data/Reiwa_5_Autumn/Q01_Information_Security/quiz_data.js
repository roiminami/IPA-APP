// quiz_data.js
window.CURRENT_INTERACTIVE_QUIZ = [
  {
    "questionNumber": 1,
    "question": "日本数字厅（Digital Agency）与 NTT DATA 等机构为了解决电子邮件传输过程中易被窃听、篡改以及发件人身份可伪造的问题，全面引入了 S/MIME 协议。S/MIME 通过发送方用私钥对邮件 Hash 值加密生成数字签名，并用接收方公钥加密邮件正文。这种技术在信息安全管理中主要提供了哪三项核心安全保障？",
    "diagram": "  [ 发送方 ] ── (用发送方私钥生成数字签名 + 用接收方公钥加密正文) ──► [ 网络传输 ]\n                                                                    │\n  ┌──────────────────────────────────────────────────────────────┐  │\n  │ S/MIME 安全保障                                              │  │\n  │  - 机密性 (機密性): 仅持有私钥的接收方能解密正文              │  │\n  │  - 完整性 (完全性): 任何篡改均会导致签名验证失败              │  │\n  │  - 不可否认性 (不可否認性): 私钥唯一性确保发件人身份无法伪造  │  │\n  └──────────────────────────────────────────────────────────────┘  ▼\n  [ 接收方 ] ◄── (用发送方公钥验证签名 + 用接收方私钥解密正文) ───────┘",
    "answerOptions": [
      {
        "text": "機密性・完全性・不可否認性",
        "isCorrect": true,
        "rationale": "S/MIME 基于 PKI 体系提供三大安全保障：1. 机密性：用接收方公钥加密，确保只有目标接收方能解密；2. 完整性：发送方对邮件摘要签名，接收方可校验邮件是否被中途篡改；3. 不可否認性：发送方私钥签名为其独有，事后无法抵赖发送行为。\n例如：日本数字厅及 NTT DATA 全面部署 S/MIME，确保跨部门公文邮件具备防窃听、防篡改与发件人身份不可抵赖的高安全级别。"
      },
      {
        "text": "可用性・信頼性・保守性",
        "isCorrect": false,
        "rationale": "此三项为系统 RASIS 指标（Reliability, Availability, Serviceability），属于系统运维性能指标，非 S/MIME 的密码学安全特性。\n例如：亚马逊 AWS 承诺其 EC2 云服务器达到 99.99% 的可用性（Availability）。"
      },
      {
        "text": "匿名性・追跡不能性・免責性",
        "isCorrect": false,
        "rationale": "与信息安全基本原则相反。密码学签名旨在确立强身份绑定与可追溯性，而非匿名或免责。\n例如：黑客利用暗网 Tor 节点试图达成匿名性（Anonymity），这与企业 S/MIME 认证机制背道而驰。"
      },
      {
        "text": "冗長性・即時性・拡張性",
        "isCorrect": false,
        "rationale": "属于网络与数据通信的架构性能参数，非信息安全与数据密码学的三要素指标。\n例如：Netflix 使用多 CDN 节点提供网络冗余性（Redundancy）以保证视频平滑播放。"
      }
    ],
    "hint": "注意 S/MIME 通过<b>公钥加密（暗号化）</b>与<b>数字签名（デジタル署名）</b>所达成的三要素：<b>機密性・完全性・不可否認性</b>。"
  },
  {
    "questionNumber": 2,
    "question": "长期以来，日本企业普遍采用“PPAP”模式（即先发送带密码的加密 ZIP 附件，紧接着在同一路径下发送密码邮件）传输机密文件。2020 年日本内阁官房与数字厅明确下令废除 PPAP 模式。从信息安全风险控制的角度来看，废除 PPAP 模式的核心原因是什么？",
    "diagram": "  [ 传统废弃模式 (PPAP) ]:\n  邮件 1: [ 加密 ZIP 附件 ] ──(同一通信路径)──► 被监听或 Emotet 病毒穿透\n  邮件 2: [ 解密密码 ]     ──(同一通信路径)──► 同路径被窃听，且网关无法扫描 ZIP 内部\n\n  [ 安全隐患分析 ]:\n  - 窃听风险: 附件与密码走相同路径，监听者可轻易获取两者并解密；\n  - 病毒穿透: 邮件安全网关（防病毒）无法解密 ZIP，导致 Emotet 勒索病毒直接绕过检测进入内网。",
    "answerOptions": [
      {
        "text": "同一経路でのパスワード送信による盗聴リスクと、暗号化ZIPによるウイルススキャン回避",
        "isCorrect": true,
        "rationale": "废除 PPAP 的两大核心安全缺陷：1. 密码与附件在同一通信路径传输，若邮件被监听，攻击者可同时截获两者解密；2. 邮件安全网关无法对密码加密的 ZIP 内部文件进行恶意代码扫描，导致 Emotet 等勒索病毒利用加密 ZIP 轻松穿透邮件防线。\n例如：日本内阁官房及日立（Hitachi）全面废除 PPAP，改用企业级云盘（如 Box）安全链接传输，消除 ZIP 病毒穿透安全网关的隐患。"
      },
      {
        "text": "ZIP 暗号化アルゴリズム（AES-256）自体の解読",
        "isCorrect": false,
        "rationale": "AES-256 加密算法本身的数学安全性依然可靠，PPAP 的缺陷在于“密码传输路径相同”及“绕过安全网关检测”的运维与架构问题。\n例如：WinZip 和 7-Zip 使用 AES-256 加密算法本身在密码足够强时无法被暴力破解。"
      },
      {
        "text": "電子メールの添付ファイルサイズ制限（10MB）のオーバー",
        "isCorrect": false,
        "rationale": "邮件体积限制属于网络通信带宽瓶颈问题，并非引发严重网络安全隐患的核心原因。\n例如：谷歌 Gmail 限制附件最大 25MB，超过限制可通过 Google Drive 链接发送。"
      },
      {
        "text": "送信者の PKI 電子証明書の失効",
        "isCorrect": false,
        "rationale": "PPAP 仅使用简单的 ZIP 密码加密，根本不涉及电子证书（S/MIME 或 PKI），不存在证书失効问题。\n例如：S/MIME 邮件加密才需要用到 PKI 电子证书与 CRL/OCSP 失效验证。"
      }
    ],
    "hint": "PPAP 的核心致命伤：<b>密码与附件同一路径发送导致防盗听失效</b>，以及<b>加密 ZIP 使得邮件网关无法扫描内部病毒（ウイルススキャン回避）</b>。"
  },
  {
    "questionNumber": 3,
    "question": "2024 年起，Google 与 Yahoo 联合发布针对邮件发送方的强安全新规，要求所有批量邮件发件方必须同时部署 SPF、DKIM 和 DMARC。在防范伪造邮件与钓鱼攻击的机制中，基于 DNS TXT 记录声明授权发信 IP 的（SPF）、通过发信方私钥对邮件 Header 建立数字签名的（DKIM），以及规定校验失败时处置策略的（DMARC）分别扮演什么角色？",
    "diagram": "  [ 发件人邮件服务器 ] ──(发信)──► [ 接收方邮件服务器 ]\n                                      │\n  ┌───────────────────────────────────┴──────────────────────────────┐\n  │ 邮件来源验证三剑客                                               │\n  │  - SPF: 检查发信 IP 是否在发件域名 DNS 的 TXT 记录允许列表中     │\n  │  - DKIM: 用发件方公钥（DNS拉取）验证邮件 Header 上的数字签名      │\n  │  - DMARC: 规定校验失败时的处置策略 (p=none/quarantine/reject)    │\n  └──────────────────────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "SPF (送信 IP 検証) / DKIM (電子署名検証) / DMARC (失敗時ポリシー制御)",
        "isCorrect": true,
        "rationale": "邮件防伪造三大标准分工：1. SPF（Sender Policy Framework）：接收方查询发件域 DNS，校验发信服务器 IP 是否授权；2. DKIM（DomainKeys Identified Mail）：发信方用私钥对邮件签名，接收方拉取 DNS 公钥校验签名以防篡改；3. DMARC：基于 SPF/DKIM 结果，定义未通过时的策略（如 p=reject 直接拒收）并回传报告。\n例如：Google 与 Yahoo 2024 年强制要求发件方配置 DMARC，将未通过 SPF/DKIM 校验的伪造钓鱼邮件直接拒收（reject），大幅降低了冒充银行发信的风险。"
      },
      {
        "text": "SPF (本文暗号化) / DKIM (アクセス制御) / DMARC (ウイルス除去)",
        "isCorrect": false,
        "rationale": "SPF、DKIM 和 DMARC 均用于“发件人身份验证与防冒充”，均不提供邮件正文暗号化或杀毒功能。\n例如：S/MIME 才提供邮件正文暗号化，杀毒网关（Mail Gateway）才提供病毒扫描。"
      },
      {
        "text": "SPF (ログ監査) / DKIM (パスワード認証) / DMARC (帯域制限)",
        "isCorrect": false,
        "rationale": "概念混淆。SPF/DKIM/DMARC 与日志审计、密码认证或网络带宽控制无直接对应关系。\n例如：帯域制御（QoS）用于网络网速限制，与发件人域名认证无关。"
      },
      {
        "text": "SPF (証明書発行) / DKIM (鍵交換) / DMARC (ポート開放)",
        "isCorrect": false,
        "rationale": "SPF 与 DKIM 基于 DNS 记录发布信息，不涉及 CA 证书颁发或 TLS 密钥交换。\n例如：Let's Encrypt 负责颁发 SSL/TLS 证书，Diffie-Hellman 用于密钥交换。"
      }
    ],
    "hint": "分清各自职责：<b>SPF（送信 IP 検証）</b>、<b>DKIM（電子署名検証）</b>、<b>DMARC（失敗時ポリシー制御）</b>。"
  },
  {
    "questionNumber": 4,
    "question": "在基于公钥基础设施（PKI）的安全通信中，当某个企业的私钥泄露时，认证机构（CA）必须立即吊销其电子证书。为了让客户端（如浏览器）在建立 TLS 通信时迅速确认服务器证书是否已被吊销，且避免每次都向 CA 服务器发起 HTTP 请求引发性能瓶颈，现代 Web 架构普遍采用了由 Web 服务器主动附带 CA 签名吊销凭证的哪种技术？",
    "diagram": "  [ 客户端 (浏览器) ] ◄── (1. 请求 TLS 连接) ──► [ Web 服务器 ]\n                                                    │ (主动缓存 CA 签名的状态)\n                                                    ▼\n  ┌────────────────────────────────────────────────────────┐\n  │ OCSP ステイプリング (OCSP Stapling)                   │\n  │  - Web 服务器定期向 CA 查询并获取含 CA 签名的 OCSP 响应  │\n  │  - 握手时由 Web 服务器直接将该“状态凭证”随证书发给客户端 │\n  └────────────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "OCSP ステイプリング (OCSP Stapling)",
        "isCorrect": true,
        "rationale": "OCSP Stapling（OCSP 钉扎）：传统 OCSP 需要客户端直连 CA 验证，在高并发下会导致 CA 成为性能瓶颈并泄露用户隐私。OCSP Stapling 由 Web 服务器定期向 CA 获取带 CA 数字签名的 OCSP 响应凭证并缓存，在 TLS 握手时直接随证书发送给客户端，既消除了客户端延迟又保护了隐私。\n例如：Cloudflare 和 淘宝（Taobao）在大促期间全面开启 OCSP Stapling，避免数亿用户访问时直连 DigiCert CA 服务器导致握手剧烈延迟。"
      },
      {
        "text": "CRL (証明書失効リスト全件取得)",
        "isCorrect": false,
        "rationale": "CRL（证书吊销列表）需要客户端定期下载包含所有被吊销证书的巨型列表文件，文件体积庞大（可达几十MB），实时性极差且消耗大量带宽。\n例如：早期的 Windows 系统通过定期下载几兆字节的 CRL 文件来更新黑名单，现已被 OCSP 替代。"
      },
      {
        "text": "DNSSEC (DNS キャッシュ中毒防止)",
        "isCorrect": false,
        "rationale": "DNSSEC 专用于防止 DNS 域名解析被篡改和缓存污染，不用于查询 X.509 电子证书的吊销状态。\n例如：JPRS（.jp 域名注册局）部署 DNSSEC 确保域名解析结果带有数字签名。"
      },
      {
        "text": "SAML 2.0 (アイデンティティ連携)",
        "isCorrect": false,
        "rationale": "SAML 2.0 用于企业级单点登录（SSO）与身份凭证断言传递，与 PKI 证书吊销状态查询无关。\n例如：Okta 平台利用 SAML 断言向 Salesforce 传递员工的身份认证状态。"
      }
    ],
    "hint": "注意由 <b>Web 服务器代劳查询 CA 并在握手时主动附带已签名的吊销状态凭证</b> 的技术：<b>OCSP ステイプリング</b>。"
  },
  {
    "questionNumber": 5,
    "question": "苹果（Apple）在向全球 iPhone 设备推送 iOS 系统固件更新（IPSW）时，为了确保固件在传输过程中没有被黑客篡改，且验证更新包确实来自苹果官方，苹果采用了“数字签名（デジタル署名）”技术。设备在安装更新前，使用苹果公钥验证签名的原理是什么？",
    "diagram": "  [ 苹果官方服务器 ]\n    │  1. 固件文件 -> 哈希计算 -> 获取原始 Hash A\n    │  2. 原始 Hash A + 苹果私钥加密 -> 生成数字签名\n    ▼\n  [ 传输 IPSW 固件 + 数字签名 ] ──► [ 用户 iPhone ]\n                                         │\n                                         ▼ 验证过程:\n                                         1. 固件文件 -> 哈希计算 -> 重新算出 Hash B\n                                         2. 数字签名 + 苹果公钥解密 -> 解出 Hash A\n                                         3. 比对 Hash A 与 Hash B 是否完全一致！",
    "answerOptions": [
      {
        "text": "送信者が秘密鍵でハッシュ値を暗号化し、受信者が送信者の公開鍵で復号して照合する",
        "isCorrect": true,
        "rationale": "数字签名验证全流程：1. 发送方（苹果）将文件通过 Hash 函数算出 Hash 值，并用发件人私钥对其加密生成数字签名；2. 接收方（iPhone）用内置的发件人公钥解密签名获得原始 Hash 值；同时对收到的固件重新计算 Hash 值；3. 若两个 Hash 值完全一致，证明文件未被篡改且确由持有私钥的苹果官方发布。\n例如：iOS 设备在刷入固件前必须通过 Apple 验证服务器的数字签名校验，确保防篡改与发件人真实性。"
      },
      {
        "text": "送信者が受信者の公開鍵で暗号化し、受信者が自身の秘密鍵で復号する",
        "isCorrect": false,
        "rationale": "这是“公钥暗号（非对称加密）提供机密性”的过程，只能防止窃听，无法提供公开验证发件人身份与广播校验的“数字签名”功能。\n例如：发送敏感合同邮件时，用接收方的公钥加密文件以确保只有接收方能解密。"
      },
      {
        "text": "送信者と受信者が同一の共通鍵で暗号化および復号する",
        "isCorrect": false,
        "rationale": "这是“对称加密（共通鍵暗号）”的原理（如 AES），需要提前共享密钥，无法解决公开验签与不可否认性问题。\n例如：使用 WinZip 设置 AES-256 密码加密文件，属于对称加密。"
      },
      {
        "text": "送信者がソルトを付加してハッシュ化し、レインボーテーブルで照合する",
        "isCorrect": false,
        "rationale": "加盐哈希（Salted Hash）是数据库存储用户密码防彩虹表攻击的技术，非文件数字签名校验机制。\n例如：网站数据库存储用户密码时使用 bcrypt 算法加盐哈希。"
      }
    ],
    "hint": "数字签名的核心：发送方用<b>自己的私钥加密 Hash（生成签名）</b>，接收方用<b>发送方的公钥解密 Hash（验证签名）</b>。"
  },
  {
    "questionNumber": 6,
    "question": "早期的 TLS 握手如果直接使用服务器静态 RSA 私钥解密预主密钥，一旦黑客录制了长期加密流量，且未来某一天服务器 RSA 私钥泄漏，黑客就能解密过去录制的所有历史通信。为了解决这一隐患，现代 TLS 1.3 强制要求使用具备“前向安全（PFS / Perfect Forward Secrecy）”的密钥交换算法。这种算法的核心机制是什么？",
    "diagram": "  [ 传统 RSA 缺陷 ]: 录制历史流量 + 未来私钥泄露 ──► 历史所有加密流量被全部解密！\n\n  [ TLS 1.3 + PFS (ECDHE) 机制 ]:\n  每次 TLS 会话建立时 ──► 动态生成一次性临时密钥对 (Ephemeral Diffie-Hellman)\n                             │\n                             ▼ 会话结束后立即销毁\n  即使未来服务器长期私钥泄露 ──► 攻击者依然无法破解过去历史会话的加密数据！",
    "answerOptions": [
      {
        "text": "PFS (Perfect Forward Secrecy) / ECDHE",
        "isCorrect": true,
        "rationale": "前向安全（PFS）：使用临时迪菲-赫尔曼密钥交换算法（ECDHE）。TLS 每次会话都临时生成一对一次性密钥，会话结束后立即销毁。即使未来服务器的长期私钥泄露，攻击者也无法解密过去截获的历史通信数据。\n例如：Cloudflare 和 Google 强制开启 TLS 1.3 并采用 ECDHE 算法，确保即使服务器私钥意外泄露，过往的历史加密流量依然绝对安全。"
      },
      {
        "text": "静的 RSA 2048 ビット鍵の長大化",
        "isCorrect": false,
        "rationale": "仅增加 RSA 密钥长度只能提高破解难度，但由于算法机制本身未变，只要长期私钥泄露，历史流量依然会被一次性破解。\n例如：将 RSA 2048 升级为 4096 比特不能实现 PFS 前向安全特性。"
      },
      {
        "text": "共通鍵暗号（AES-GCM）の固定化",
        "isCorrect": false,
        "rationale": "ChaCha20 / AES 属于对称加密算法，负责会话建立后的数据加密，不负责密钥交换与 PFS 特性的实现。\n例如：移动设备在缺乏 AES 硬件加速时使用 ChaCha20-Poly1305 提升性能。"
      },
      {
        "text": "電子証明書の有効期限短縮",
        "isCorrect": false,
        "rationale": "缩短证书有效期可降低证书被滥用的窗口期，但无法从密码学机制上保证“历史已被录制流量的绝对不可解密性”。\n例如：Let's Encrypt 颁发 90 天有效期的证书是为了推动自动化续签。"
      }
    ],
    "hint": "前向安全（PFS）的关键：<b>每次会话动态生成一次性临时密钥（ECDHE / 使い捨ての鍵）</b>，防止未来私钥泄露拖累历史数据。"
  },
  {
    "questionNumber": 7,
    "question": "NTT DoCoMo、Google 和 Apple 近年来全面推行“Passkeys（パスキー / 无密码认证）”技术，以替代极易被钓鱼网站盗取的传统“账号+密码”认证。Passkeys 严格基于 FIDO2 / WebAuthn 标准，当用户登录网站时，手机或电脑的 Secure Enclave 硬件模块直接与服务器进行非对称公钥挑战-响应认证。这种机制为什么能够彻底免疫钓鱼网站（Phishing）攻击？",
    "diagram": "  [ 用户 ] ──► 访问 [ 钓鱼网站 (evil-bank.com) ]\n                     │\n                     ▼ WebAuthn 请求 API 鉴权\n  [ 终端设备 / 浏览器 ]\n     - 自动检测当前真实域名为 evil-bank.com\n     - 检索内部安全芯片仅匹配有真实域名 bank.com 的私钥\n     - 拒绝向钓鱼域名 evil-bank.com 提供签名响应！ ──► [ 钓鱼攻击彻底失效 ]",
    "answerOptions": [
      {
        "text": "認証がドメイン名（RP ID）にバインドされ、偽サイトには署名応答を返さないため",
        "isCorrect": true,
        "rationale": "Passkey（FIDO2/WebAuthn）防钓鱼原理解析：Passkey 密钥对在创建时与真实的网站域名（RP ID）强制绑定。当用户被诱骗访问假冒的钓鱼网站（如 evil-bank.com）时，浏览器在调用 WebAuthn API 时会自动检测到当前真实域名，由于安全芯片中根本不存在匹配该钓鱼域名的私钥，终端将拒绝生成数字签名响应，导致钓鱼攻击彻底失效。\n例如：NTT DoCoMo 部署 Passkey 后，即使员工不慎点击钓鱼邮件进入高仿假冒网站，Passkey 也会因为域名不匹配而拒绝认证，成功阻断了账号盗用。"
      },
      {
        "text": "ユーザーの生体画像データ（指紋/顔）が直接サーバーに送信されて比照されるため",
        "isCorrect": false,
        "rationale": "严重误解。FIDO2 规范严格规定指纹/人脸等生物特征数据绝对不能离开本地设备，仅用于解锁本地安全芯片私钥，服务器只保存公钥。\n例如：iPhone 的 Face ID 仅在本地 Secure Enclave 中比对，绝不上传云端。"
      },
      {
        "text": "SMS で届く 6 桁のワンタイムパスワード（OTP）を自動入力するため",
        "isCorrect": false,
        "rationale": "SMS OTP 极易通过钓鱼中间人网站（如 Evilginx）进行实时拦截与转发盗用，不具备防钓鱼特性。\n例如：黑客使用 Evilginx 部署伪造页面实时拦截用户的 SMS OTP 验证码。"
      },
      {
        "text": "IP アドレスが社内ネットワーク範囲内の場合のみ認証を許可するため",
        "isCorrect": false,
        "rationale": "这是基于 IP 的网络边界控制，非 Passkey/FIDO2 密码学无密码认证机制。\n例如：企业防火墙设置仅允许公司内网 IP 访问财务系统。"
      }
    ],
    "hint": "Passkey 防钓鱼的核心：<b>密钥与真实域名（RP ID）绑定（ドメイン名結合）</b>，假冒钓鱼网站无法获取签名。"
  },
  {
    "questionNumber": 8,
    "question": "企业在推行云端 SaaS（如 Salesforce, Office 365）与统一身份认证平台（如 Okta, Microsoft Entra ID）的集成时，普遍采用了基于标准协议的单点登录（SSO）与 API 授权。在身份认证与授权架构中，专用于跨域传递身份认证断言的 SAML 2.0 / OIDC 协议，与专用于颁发 API 访问令牌（Access Token）的 OAuth 2.0 协议，两者的核心功能划分是什么？",
    "diagram": "  [ 用户 ] ──(1. 登录认证)──► [ IDP (Okta / Entra ID) ]\n                                      │\n          ┌───────────────────────────┴───────────────────────────┐\n          ▼ (认证: Authentication)                             ▼ (授权: Authorization)\n  [ SAML 2.0 / OIDC 断言 ]                               [ OAuth 2.0 Access Token ]\n  \"证明你是张三 (ID 断言)\"                               \"授权第三方应用调用 API 读取数据\"\n          │                                                       │\n          ▼                                                       ▼\n  [ 登录 Salesforce 界面 ]                                [ 第三方应用读取 Google Drive API ]",
    "answerOptions": [
      {
        "text": "SAML / OIDC は「本人確認（認証）」を担当し、OAuth 2.0 は「権限付与（認可）」を担当する",
        "isCorrect": true,
        "rationale": "身份认证与授权的区别：1. SAML 2.0 与 OpenID Connect (OIDC)：专注于“认证（Authentication）”，即确认用户的真实身份，并向服务商传递用户 Identity 断言；2. OAuth 2.0：专注于“授权（Authorization）”，即在不泄露用户密码的前提下，向第三方应用颁发 Access Token 以允许其调用受保护的 API 资源。\n例如：Okta 通过 SAML 2.0 实现员工登录 Salesforce（认证）；第三方日历应用通过 OAuth 2.0 获取 Token 访问用户的 Google Calendar API（授权）。"
      },
      {
        "text": "SAML は「暗号化」を担当し、OAuth 2.0 は「デジタル署名」を担当する",
        "isCorrect": false,
        "rationale": "协议功能理解错误。SAML 与 OAuth 内部均会用到密码学签名与加密，非简单划分加密与签名。\n例如：SAML Assertion 内部包含 XML 数字签名，OAuth 2.0 的 JWT Token 包含 HMAC 或 RSA 签名。"
      },
      {
        "text": "SAML は「社内 LAN」専用、OAuth 2.0 は「パブリッククラウド」専用である",
        "isCorrect": false,
        "rationale": "两者均为跨 Web 的开放标准协议，均广泛应用于公有云 SaaS 与混合云环境，非网络边界区分。\n例如：Salesforce 与 Workday 广泛支持 SAML 2.0 公有云单点登录。"
      },
      {
        "text": "SAML は「生体認証」を担当し、OAuth 2.0 は「パスワード認証」を担当する",
        "isCorrect": false,
        "rationale": "协议层不限定具体的底层认证方式（密码或生物识别），只规定身份凭证和授权 Token 在系统间的传递格式。\n例如：用户可以通过 Passkey 生物识别登录 Okta，随后 Okta 发出 SAML 断言完成 SSO。"
      }
    ],
    "hint": "注意区分概念：<b>SAML / OIDC = 本人確認（認証）</b>，<b>OAuth 2.0 = 権限付与与 Token 交付（認可）</b>。"
  },
  {
    "questionNumber": 9,
    "question": "某电商平台在遭受黑客攻击时，黑客尝试在商品搜索框中输入特定字符 `' UNION SELECT username, password FROM users --` 试图拉取数据库明文密码（SQL 注入攻击）。平台在 Web 服务器前部署了 WAF（Web Application Firewall）。WAF 能够精准识别并拦截此类攻击，其底层核心的技术原理是什么？",
    "diagram": "  [ 黑客 / 恶意请求 ] ──► (HTTP GET /search?q=' UNION SELECT...)\n                                │\n                                ▼ 深入检查 HTTP L7 应用层 Payload\n  ┌────────────────────────────────────────────────────────┐\n  │ WAF (Web Application Firewall)                         │\n  │  - 匹配特征规则库 (Signature) 或语法树 (AST)            │\n  │  - 发现异常 SQL 关键字模式 (UNION/SELECT)              │\n  └────────────────────────────┬───────────────────────────┘\n                               ✖ (直接阻断并返回 HTTP 403 Forbidden)\n  [ 后端 Web 服务器 / 数据库 ] (未受任何危害)",
    "answerOptions": [
      {
        "text": "HTTP リクエストの L7（アプリケーション層）ペイロードを解析し、SQLi や XSS パターンを検知遮断する",
        "isCorrect": true,
        "rationale": "WAF 的核心工作原理：传统网络防火墙仅检查 L3/L4（IP 地址与 TCP/UDP 端口），无法识别合规 80/443 端口内的恶意 SQL 语句。WAF 深入解析 Layer 7（应用层）的 HTTP/HTTPS Payload 正文与 Query 参数，通过特征匹配或语法树分析，阻断 SQL 注入（SQLi）、跨站脚本（XSS）及 OS 命令注入等 Web 攻击。\n例如：AWS WAF 部署在电商平台前，实时解析 HTTP 参数并阻断针对结算接口的 SQL 注入攻击，保护数据库安全。"
      },
      {
        "text": "送信元 IP アドレスの GeoIP 位置情報を確認し、海外パケットを全遮断する",
        "isCorrect": false,
        "rationale": "这是基于 GeoIP 的简单 IP 封禁，无法防范利用国内代理节点或本地发起的 SQL 注入攻击。\n例如：黑客利用本地跳板机发起 SQL 注入时，GeoIP 拦截策略完全失效。"
      },
      {
        "text": "SYN 洪水攻撃を検知し、TCP 3 ウェイハンドシェイクを代行する",
        "isCorrect": false,
        "rationale": "这是 L4 DDoS 防护设备（如 Anti-DDoS）的功能，非针对 L7 应用层漏洞（如 SQLi/XSS）的 WAF 核心防护机制。\n例如：Cloudflare Magic Transit 在 L4 层防御海量 SYN Flood 流量轰炸。"
      },
      {
        "text": "SQL クエリを自動暗号化してデータベースに送信する",
        "isCorrect": false,
        "rationale": "WAF 部署在 Web 前端，不具备修改和暗号化后端 ORM/数据库 SQL 语句的功能。\n例如：应用程序内部使用预编译语句（Prepared Statements）才是从代码层面防御 SQL 注入的根本手段。"
      }
    ],
    "hint": "WAF 的特点：<b>检查 L7（应用层）HTTP Payload（7層の解析）</b>，精准阻断 <b>SQLi / XSS</b> 等 Web 攻击。"
  },
  {
    "questionNumber": 10,
    "question": "谷歌（Google）在遭受“极光行动（Operation Aurora）”高级持续性威胁（APT）攻击后，彻底抛弃了传统的“基于内网边界（VPN/防火墙）”的安全防护架构，全面构建了“BeyondCorp”零信任（Zero Trust）安全体系。零信任架构的核心安全哲学与技术运行原则是什么？",
    "diagram": "  [ 传统边界模型 ]: 只要连入公司内网 (VPN) ──► 默认信任内网所有 IP 与设备 (安全隐患巨大)\n\n  [ 零信任 BeyondCorp 架构 ]:\n  \" Never Trust, Always Verify \" (永远不信任，始终验证)\n  无论处于内网还是外网 ──► 每次访问资源均动态评估：\n                          1. 强身份鉴权 (MFA / Passkey)\n                          2. 终端安全状态 (EDR 探针 / OS 补丁)\n                          3. 最小权限访问控制 (RBAC / ZTNA)",
    "answerOptions": [
      {
        "text": "「決して信頼せず、常に検証する」原則に基づき、ネットワーク位置に関わらず動的に認証・認可する",
        "isCorrect": true,
        "rationale": "零信任（Zero Trust）核心理念：放弃“内网等于安全”的传统边界思维，遵循“Never Trust, Always Verify（永远不信任，始终验证）”。无论请求来自公司内网还是公网，每次访问应用时均需结合用户身份（MFA/Passkey）、终端安全状态（EDR 补丁健康度）与上下文，实施动态敏捷的最小权限访问控制（ZTNA）。\n例如：Google 部署 BeyondCorp，员工即使坐在 Google 总部办公室内网，访问内部 HR 系统也必须通过设备健康认证与身份动态鉴权。"
      },
      {
        "text": "社内 LAN 接続機器はすべて安全とみなし、外部アクセスのみ VPN 暗号化する",
        "isCorrect": false,
        "rationale": "这是已被淘汰的传统“边界防护（Perimeter Defense）”思维，正是零信任架构所要替代的脆弱模型。\n例如：黑客一旦通过钓鱼邮件入侵内网一台 PC，传统边界模型下黑客即可在内网横向移动（Lateral Movement）畅行无阻。"
      },
      {
        "text": "社内サーバーの IP をパブリック化し、暗号化通信を全免除する",
        "isCorrect": false,
        "rationale": "严重违背安全常识。零信任要求全网络加密传输（TLS），绝对不会免除暗号化。\n例如：BeyondCorp 强制所有内部 HTTP 流量必须升级为加密 TLS 传输。"
      },
      {
        "text": "パスワードの定期変更（30日ごと）を全社員に強制化する",
        "isCorrect": false,
        "rationale": "定期更换密码已被 NIST 与 IPA 认定为无效甚至有害的安全策略（容易导致弱密码变化），非零信任架构的核心机制。\n例如：NIST SP 800-63B 明确建议废除强制定期更换密码，转为推行无密码/Passkey 认证。"
      }
    ],
    "hint": "零信任的核心原则：<b>「Never Trust, Always Verify」（決して信頼せず、常に検証する）</b>。"
  },
  {
    "questionNumber": 11,
    "question": "2022 年某大型社交平台因数据库备份文件泄露导致数亿用户的密码面临风险。为了防止黑客利用“彩虹表（Rainbow Table / 预计算哈希表）”对拖库得到的密码哈希值进行瞬间逆向破解，企业在存储用户密码时，绝不能仅进行简单的 MD5 或 SHA-256 计算，而必须在哈希前加入“Salt（塩 / 随机盐值）”并采用 Argon2id 或 bcrypt 等慢哈希算法。Salt 的核心作用是什么？",
    "diagram": "  [ 无 Salt 弱存储 ]: 明文密码 \"123456\" ──► SHA-256 ──► 固有 Hash 值 (彩虹表瞬间查表秒破！)\n\n  [ 加 Salt 安全存储 ]:\n  明文密码 \"123456\" + 用户专属随机 Salt \"x9F#2kL\" ──► Argon2id ──► 复合 Hash 值\n                                                               │\n                                                               ▼\n  1. 使彩虹表 (Rainbow Table) 预计算结果完全失效；\n  2. 即使两个用户设置了相同的密码 \"123456\"，生成的 Hash 值也截然不同！",
    "answerOptions": [
      {
        "text": "ユーザーごとにランダムなソルトを付加し、レインボーテーブル攻撃の無効化と同一パスワードのハッシュ分散を図る",
        "isCorrect": true,
        "rationale": "加盐（Salt）的核心防护作用：1. 随机盐值（Salt）为每个用户随机独立生成（如 16 字节随机数）；2. 将 Salt + 密码 混合后再进行哈希计算，使攻击者预先生成的“彩虹表”因 Salt 的随机性而彻底失效；3. 即使张三和李四都设置了相同的密码 123456，由于各自 Salt 不同，数据库中存储的哈希值也完全不同。\n例如：GitHub 与 GitLab 内部存储密码时采用 bcrypt/Argon2id 算法并为每位用户附加独特 Salt，彻底防御了拖库后的彩虹表批量破解。"
      },
      {
        "text": "暗号化されたハッシュ値を復号するための公開鍵を生成する",
        "isCorrect": false,
        "rationale": "哈希函数（Hash Function）是不可逆的单向函数（One-way Function），不存在复号或解密公钥。\n例如：SHA-256 和 Argon2id 均为单向哈希，无法通过密钥解密还原明文。"
      },
      {
        "text": "通信パケットを圧縮して通信速度を向上させる",
        "isCorrect": false,
        "rationale": "盐值（Salt）是密码学安全机制，与数据传输压缩算法（如 gzip/zstd）无关。\n例如：HTTP 头部的 Content-Encoding: gzip 用于数据压缩。"
      },
      {
        "text": "パスワード忘失時に明文パスワードをメールで自動再送する",
        "isCorrect": false,
        "rationale": "绝不可行。由于加盐哈希不可逆，正规系统根本无法获取明文密码，找回密码只能通过发送重置链接完成。\n例如：正规网站找回密码均发送一次性重置令牌（Reset Token），绝不发送明文密码。"
      }
    ],
    "hint": "加盐（Salt）的作用：<b>使彩虹表（レインボーテーブル）失效</b>，且<b>相同密码生成的哈希值各自不同</b>。"
  },
  {
    "questionNumber": 12,
    "question": "当用户在浏览器输入银行网址 `www.smbc.co.jp` 时，如果黑客通过 DNS 缓存污染（DNS Cache Poisoning）攻击篡改了本地 ISP 的 DNS 缓存，将域名指向了假冒的钓鱼服务器 IP，用户将面临严重的资产损失。为了从根源上保证 DNS 解析结果的真实性与完整性，互联网域名体系引入了 DNSSEC。DNSSEC 的防护原理是什么？",
    "diagram": "  [ 用户 Recursive DNS 客户端 ] ──(查询域名)──► [ DNS 权威服务器 (.jp) ]\n                                                      │\n  ┌───────────────────────────────────────────────────┴──────────────────────────────┐\n  │ DNSSEC 防护机制                                                                   │\n  │  - 权威 DNS 为域名解析记录（A 记录）附带数字签名（RRSIG 记录）                   │\n  │  - 客户端通过逐层验证根域名及 TL-DNS 域名的公钥链（DNSKEY/DS 记录）                │\n  │  - 若解析结果被黑客中间篡改，数字签名校验失败，抛出 SERVFAIL 并拒绝连接伪造 IP    │\n  └──────────────────────────────────────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "DNS 応答レコードにデジタル署名（RRSIG）を付与し、クライアントが公開鍵で検証して改ざんを検知する",
        "isCorrect": true,
        "rationale": "DNSSEC（DNS 安全扩展）原理：DNSSEC 不对 DNS 通信正文加密，而是通过在 DNS 资源记录（如 A 记录）中加入电子数字签名（RRSIG 记录）。递归 DNS 服务器在收到解析结果后，通过顶级域和权威 CA 的公钥链校验签名。若黑客注入了假的 IP 地址，签名校验将宣告失败并丢弃响应，彻底防止 DNS 缓存污染。\n例如：JPRS（日本域名注册局）对 .jp 顶级域全面部署 DNSSEC，确保金融与政府机构的 DNS 解析结果不可篡改。"
      },
      {
        "text": "すべての DNS 通信を TCP 443 で暗号化し、UDP 53 を全廃する",
        "isCorrect": false,
        "rationale": "这是 DoH（DNS over HTTPS）或 DoT（DNS over TLS）传输层加密的功能，非 DNSSEC 资源记录级别的数字签名标准。\n例如：Cloudflare 提供 1.1.1.1 DoH 加密解析以防传输路径监听。"
      },
      {
        "text": "IP アドレスの代わりに MAC アドレスを使って通信相手を特定する",
        "isCorrect": false,
        "rationale": "MAC 地址仅在局域网 L2 数据链路层有效，无法跨越互联网路由器进行 DNS 域名解析。\n例如：ARP 协议在局域网内解析 IP 与 MAC 地址对应关系。"
      },
      {
        "text": "DNS サーバーの IP アドレスを 1 秒ごとにランダム変更する",
        "isCorrect": false,
        "rationale": "频繁更改 DNS IP 会引发路由剧烈震荡与服务不可用，并非 DNS 校验机制。\n例如：Google 根域名服务器 8.8.8.8 保持长年稳定 Anycast IP。"
      }
    ],
    "hint": "DNSSEC 的核心：<b>为 DNS 记录附加数字签名（デジタル署名 / RRSIG）</b>以防止解析结果被篡改。"
  },
  {
    "questionNumber": 13,
    "question": "现代高级持续性威胁（APT）攻击中，黑客极少直接向服务器投掷会被杀毒软件（AV）拦截的已知木马病毒，而是大量采用“寄生攻击（Living-off-the-Land / LotL）”——即滥用系统合法的 `PowerShell.exe`、`wmic.exe` 或 `certutil.exe` 等内置工具执行无文件（Fileless）攻击。为了捕获此类不依赖传统文件特征码的隐蔽攻击，企业部署了 EDR 系统。EDR 依靠什么机制进行威胁捕获？",
    "diagram": "  [ 传统杀毒软件 (AV) ]: 匹配落地文件特征码 (Signature) ──► 对 PowerShell 无文件内存攻击完全失效！\n\n  [ EDR (Endpoint Detection & Response) 监控 ]:\n  实时驻留终端内核，监视系统运行行为与进程树关系：\n  例: Word.exe 突然派生启动了 PowerShell.exe 并且向外网未知 IP 发起暗号化通信\n  ──► 触发 EDR 行为异常告警！ ──► 自动挂起进程、隔离主机并上报 SOC 分析",
    "answerOptions": [
      {
        "text": "プロセス生成やメモリ挙動などの「振る舞い（Behavior）」を常時監視し、異常な攻撃チェーンを検知・隔離する",
        "isCorrect": true,
        "rationale": "EDR（终端检测与响应）的核心机制：EDR 不依赖传统的静态文件特征码（Signature），而是通过轻量级 Agent 实时采集终端内核的进程派生树、内存调用、注册表修改与网络连接等“行为（Behavior）”。当检测到“正常应用（如 Word/Excel）非法派生启动 PowerShell 并执行加密编码指令”等异常行为链时，即便没有病毒文件落地，EDR 也能秒级拦截并隔离终端。\n例如：CrowdStrike Falcon 或 Microsoft Defender for Endpoint 在捕获无文件勒索攻击时，通过行为监控挂起异常 PowerShell 进程并一键隔离受害 PC。"
      },
      {
        "text": "ハードディスクの全ファイルを毎日深夜に完全スキャンして既知ウイルスを削除する",
        "isCorrect": false,
        "rationale": "这是传统静态杀毒软件（AV）的常规全盘扫描模式，对内存无文件攻击（Fileless Attack）完全无能为力。\n例如：传统杀软全盘扫描无法检测仅驻留在内存中的 PowerShell 恶意脚本。"
      },
      {
        "text": "ファイアウォールですべての Outbound 端口を遮断する",
        "isCorrect": false,
        "rationale": "简单一刀切封禁出口端口会导致企业正常业务（如 HTTPS 网页浏览）瘫痪，非终端层行为分析逻辑。\n例如：EDR 是终端节点的行为分析系统，非网络边界端口封禁规则。"
      },
      {
        "text": "OS のソースコードを改変して未許可プログラムの実行を禁止する",
        "isCorrect": false,
        "rationale": "寄生攻击（LotL）利用的就是 OS 本身合法授权的系统工具（如 PowerShell），修改 OS 源码无法解决合法工具被恶意利用的问题。\n例如：Windows 系统的 PowerShell 是系统管理员的合法运维工具。"
      }
    ],
    "hint": "EDR 的核心原理：<b>监控进程与内存的异常行为（振る舞い検知 / Behavior Analysis）</b>以防无文件攻击。"
  },
  {
    "questionNumber": 14,
    "question": "三井住友银行（SMBC）在开发手机银行 APP 时，为了防止黑客在受害者手机上安装恶意根证书（Root Certificate）并搭设中间人（MitM）代理服务器（如 Charles 或 Fiddler），进而窃取用户的网银登录口令与交易 Token，APP 内部采用了“TLS 证书钉扎（Certificate Pinning）”技术。证书钉扎的实现方式是什么？",
    "diagram": "  [ 传统 TLS 缺陷 ]: 攻击者在手机导入恶意根证书 ──► 伪造网银证书并解密中间人流量！\n\n  [ SMBC 网银 APP + Certificate Pinning (证书钉扎) ]:\n  1. 将 SMBC 官方服务器证书的公钥 Hash 强行硬编码（Hardcode）打包在 APP 代码内；\n  2. TLS 握手时，APP 直接比对服务器返回的公钥与代码内硬编码的 Hash 是否一致；\n  3. 即使手机系统安装了恶意根证书，APP 也因为硬编码公钥不匹配而拒绝连接！",
    "answerOptions": [
      {
        "text": "サーバーの正当な証明書または公開鍵ハッシュ値をアプリ内にハードコードし、握手時に直接照合する",
        "isCorrect": true,
        "rationale": "证书钉扎（TLS Certificate Pinning）原理：传统 TLS 信任手机操作系统内置的所有信任根证书（Root CA），攻击者可通过诱骗用户安装恶意根证书实施中间人攻击。证书钉扎技术将官方服务器的证书公钥或哈希值直接硬编码（Hardcode）在 APP 源码中。握手时 APP 绕过系统证书链，直接比对硬编码公钥。即使手机系统信任了伪造的根证书，APP 也会因公钥校验失败而断开连接。\n例如：三井住友银行（SMBC）及 PayPal 移动端 APP 开启证书钉扎，彻底阻断了中间人代理对网银 API 数据的抓包与窃听。"
      },
      {
        "text": "ユーザーの SMS 認証コードをサーバー側 DB に暗号化せずに保存する",
        "isCorrect": false,
        "rationale": "严重误解。短信验证码保存与 TLS 传输层的证书钉扎抓包防御毫无关系，且明文存储违规。\n例如：SMS OTP 应该在服务器内存中短期哈希暂存并在验证后立即销毁。"
      },
      {
        "text": "アプリの通信をすべて明文 HTTP 協議に変更して暗号化を免除する",
        "isCorrect": false,
        "rationale": "降级为 HTTP 明文传输将导致所有网银交易数据直接在网络中赤裸裸暴露，极度危险。\n例如：Apple iOS 强制要求所有 APP 使用 HTTPS（ATS 策略），禁止明文 HTTP 通信。"
      },
      {
        "text": "サーバーの IP アドレスをアプリの画面上に明文表示する",
        "isCorrect": false,
        "rationale": "在 UI 上显示 IP 地址没有任何密码学防护功能，且 IP 容易因 DNS 动态解析而变更。\n例如：显示服务器 IP 地址无法阻止中间人代理对流量进行解密。"
      }
    ],
    "hint": "证书钉扎（Pinning）的关键：<b>将正规服务器公钥/证书硬编码（ハードコード）在 APP 源码内比对</b>。"
  },
  {
    "questionNumber": 15,
    "question": "2020 年著名的 SolarWinds 供应链攻击事件中，黑客入侵了 SolarWinds 的 CI/CD 软件编译构建服务器，在官方发布的正版更新包中恶意植入后门（SUNBURST），导致包括美国国土安全部在内的上万家政企客户在安装官方正版升级后遭到入侵。为了防御此类软件供应链攻击，拜登政府签署行政命令，要求所有软件供应商必须向客户提供 SBOM。SBOM 指的是什么？",
    "diagram": "  [ 黑客攻击 CI/CD 管道 ] ──► 篡改开源第三方依赖组件 ──► 植入隐藏后门 (如 SolarWinds 事態)\n                                                                │\n  ┌─────────────────────────────────────────────────────────────┘\n  ▼ 应对策略:\n  ┌──────────────────────────────────────────────────────────────┐\n  │ SBOM (Software Bill of Materials / 软件部件清单)             │\n  │  - 机器可读的软件成分“配料表” (包含所有第三方/开源组件及版本) │\n  │  - 当 Log4j 或组件爆发漏洞时，企业可根据 SBOM 秒级定位受影响软件 │\n  └──────────────────────────────────────────────────────────────┘",
    "answerOptions": [
      {
        "text": "SBOM (ソフトウェア部品表) : 構成するすべてのオープンソースやサードパーティ製コンポーネントとそのバージョンの一覧情報",
        "isCorrect": true,
        "rationale": "SBOM（Software Bill of Materials / 软件部件清单）：类似于食品包装上的“配料表”。SBOM 是一份标准的、机器可读的清单，详细记录了某款软件产品所包含的所有开源组件、第三方依赖库、组件版本号及授权协议。当 Log4j 或某些底层组件爆发高危漏洞时，企业可通过查询 SBOM 瞬间定位自己采购的哪些软件含有该漏洞组件，大幅提升供应链安全应急响应效率。\n例如：美国拜登总统签署 14028 号行政命令及欧盟《网络韧性法案（CRA）》，强制要求向政府及关键基础设施交付软件的供应商必须附带 SBOM 清单。"
      },
      {
        "text": "SBOM (セキュリティ監査保証書) : ウイルスに 100% 感染していないことを担保する法的保証書",
        "isCorrect": false,
        "rationale": "没有软件可以保证 100% 绝对无漏洞，SBOM 是一份成分清单文档，非法律“零漏洞保证书”。\n例如：软件许可协议通常包含免责声明，SBOM 提供的是透明度而非绝对安全保证。"
      },
      {
        "text": "SBOM (ソースコード自動復元ツール) : バイナリから完全なソースコードを復元するツール",
        "isCorrect": false,
        "rationale": "这是反编译器（Decompiler，如 IDA Pro/Ghidra）的功能，非软件供应链成分清单 SBOM。\n例如：Ghidra 是美国 NSA 开源的逆向工程与反编译工具。"
      },
      {
        "text": "SBOM (暗号化バックアップシステム) : CI/CD パイプラインのソースコードをバックアップするシステム",
        "isCorrect": false,
        "rationale": "属于常规的代码备份（Git Backup）范畴，无法解决代码库被源头污染植入后门的供应链安全问题。\n例如：GitHub Enterprise 自动提供代码版本历史备份。"
      }
    ],
    "hint": "SBOM 的概念：类似于食品配料表，是<b>软件包含的所有开源/第三方组件及其版本信息的清单（ソフトウェア部品表）</b>。"
  }
];
console.log("全量加载 AP 午後・情報セキュリティ的题库！");