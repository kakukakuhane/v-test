

// ===== データ =====
let quizData = [
  {
    id: 1,
    category: "解剖",
    question: `哺乳類家畜の消化器に関する記述として正しいのはどれか
a 固有食道腺は主に漿液細胞から構成される。
b 馬の胃のヒダ状縁は幽門部にある。
c 牛は盲腸膨起がある。
d 犬は総肝管をもたない。
e 副膵管は胎子の背側膵芽の導管に由来する。`,
    choices: ["a, b", "a, e", "b, c", "c, d", "d, e"],
    correct: 4,
    explanation: `固有食道腺は粘液腺であり、潤滑の役割を持つため漿液ではない。
馬のヒダ状縁（margo plicatus）は非腺部と腺部の境界にあり、幽門ではない。
盲腸膨起は馬で発達する構造であり、牛では見られない。
犬は総肝管を形成しないことが多く、肝管が直接胆嚢管と合流する。
副膵管は背側膵芽由来であり、主膵管は腹側膵芽由来である。`,
  },
  {
    id: 2,
    category: "解剖",
    question: `哺乳類家畜の泌尿器に関する記述として正しいのはどれか。\na 犬の左腎臓は右腎臓より頭側に位置する。\nb 豚の腎髄質には複数の腎錐体が存在する。\nc 腎皮質の間質細胞はエリスロポエチンを合成する。\nd 遠位直尿細管はネフロンループ下行部を形成する。\ne 成体の腎臓は胎子の中腎に由来する。`,
    choices: ["a, b", "a, e", "b, c", "c, d", "d, e"],
    correct: 2,
    explanation: `豚の腎臓は多錐体腎（多乳頭腎）
→ 髄質が複数の腎錐体に分かれるのが特徴。
エリスロポエチンは腎皮質の間質細胞で産生
→ 低酸素時に赤血球産生を促進する重要ホルモン。
a：右腎の方が頭側（左が尾側）
d：ネフロンループは近位尿細管由来
e：成体腎は後腎由来（中腎ではない）`,
  },
  {
    id: 3,
    category: "解剖",
    question: `哺乳類家畜の感覚器に関する記述として正しいのはどれか。\na 網膜の色素細胞は血液－網膜関門を形成する。\nb 輝板は強膜に位置する。\nc 胎子の眼胞は茎により中脳とつながる。\nd 蝸牛の鼓室階は内リンパで満たされる。\ne 半規管の有毛細胞は膨大部稜に存在する。`,
    choices: ["a, b", "a, e", "b, c", "c, d", "d, e"],
    correct: 1,
    explanation: `a：正
網膜色素上皮は血液－網膜関門の一部を形成し、物質の透過を制御する。
b：誤
輝板（tapetum）は脈絡膜に存在し、強膜ではない。
c：誤
眼胞は間脳（前脳）由来であり、中脳とは連絡しない。
d：誤
鼓室階は外リンパで満たされる。内リンパで満たされるのは蝸牛管である。
e：正
半規管の膨大部稜には有毛細胞が存在し、回転加速度を感知する。
【まとめ】
外リンパ：前庭階・鼓室階
内リンパ：蝸牛管`,
  },
  {
    id: 4,
    category: "解剖",
    question: `哺乳類家畜の末梢神経系に関する記述として正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 0,
    explanation: `無髄神経では1つのシュワン細胞が複数軸索を包む。
肋間神経は肋骨の後縁（尾側）に沿って走行する。
橈骨神経は伸筋群支配。
頸動脈小体は舌咽神経。
翼口蓋神経節は副交感神経節。`
  },
  {
    id: 5,
    category: "解剖",
    question: `鶏の解剖学的特徴に関する記述として正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `嗉嚢は胸郭入口付近。
胸腺は頸静脈に沿う。
腹気嚢は対。
メッケル憩室は回腸。`
  },
  {
    id: 6,
    category: "解剖",
    question: `哺乳類家畜の胸部器官に関する記述として正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 4,
    explanation: `内胸動脈は鎖骨下動脈分枝。
大動脈は横隔膜脚の間を通る。`
  },
  {
    id: 7,
    category: "解剖",
    question: `犬の後肢に関する記述として正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 1,
    explanation: `大腿直筋は寛骨由来。
半月は線維軟骨。
伏在神経は大腿内側皮膚感覚。`
  },
  {
    id: 8,
    category: "解剖",
    question: `哺乳類家畜の内分泌器官に関する記述として正しいのはどれか。`,
    choices: [
      "副腎髄質は内胚葉由来",
      "犬には内上皮小体がない",
      "腺性下垂体の酸好性細胞にはGH産生細胞が含まれる",
      "後葉細胞は神経細胞",
      "副腎皮質網状帯は鉱質コルチコイド産生"
    ],
    correct: 2,
    explanation: `副腎髄質は神経堤由来。
犬にも上皮小体はある。
GH産生細胞は酸好性。
後葉細胞は膠細胞様。
網状帯は性ホルモン。`
  },
  {
    id: 9,
    category: "解剖",
    question: `哺乳類家畜の呼吸器系に関する記述として正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 4,
    explanation: `Ⅱ型肺胞上皮に層板小体。
肺副葉は縦隔内。`
  },
  {
    id: 10,
    category: "解剖",
    question: `哺乳類家畜の生殖器系に関する記述として正しいのはどれか。`,
    choices: [
      "豚の精囊腺は精囊と呼ばれる",
      "海綿体洞は静脈洞",
      "犬は大前庭腺発達",
      "透明帯は一次卵胞で出現",
      "精管は線毛上皮"
    ],
    correct: 1,
    explanation: `海綿体洞は静脈洞。
犬の前庭腺未発達。
透明帯は一次卵母細胞期。
精管は線毛なし。`
  },
  {
    id: 11,
    category: "解剖",
    question: `哺乳類家畜において前肢を前方へ引く筋はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `僧帽筋・菱形筋が前方牽引。`
  },
  {
    id: 12,
    category: "生理",
    question: `NOに関する記述として正しいのはどれか。`,
    choices: [
      "膜受容体を介する",
      "メチオニン由来",
      "アデニル酸シクラーゼ活性化",
      "血管平滑筋弛緩",
      "小胞貯蔵"
    ],
    correct: 3,
    explanation: `NOはcGMP系で血管平滑筋を弛緩。`
  },
  {
    id: 13,
    category: "生理",
    question: `視床下部に存在するのはどれか。`,
    choices: ["嘔吐中枢","心臓抑制中枢","血管運動中枢","体温調節中枢","嚥下中枢"],
    correct: 3,
    explanation: `視床下部は体温など恒常性調節。`
  },
  {
    id: 14,
    category: "生理",
    question: `ビタミンD3水酸化に関与するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 1,
    explanation: `肝で25位、腎で1α水酸化。`
  },
  {
    id: 15,
    category: "生理",
    question: `内分泌器官でないのはどれか。`,
    choices: ["胃","腎臓","心臓","膵臓","脾臓"],
    correct: 4,
    explanation: `脾臓は内分泌ではない。`
  },
  {
    id: 16,
    category: "生理",
    question: `自律神経の二重支配を受けるのはどれか。`,
    choices: ["汗腺","副腎髄質","立毛筋","瞳孔括約筋","唾液腺"],
    correct: 4,
    explanation: `唾液腺は交感・副交感支配。`
  },
  {
    id: 17,
    category: "生理",
    question: `イオンチャネル共役型の味覚受容体が感知する基本味はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `酸味はH⁺チャネル、塩味はNa⁺チャネル。`
  },
  {
    id: 18,
    category: "解剖",
    question: `皮膚感覚の受容器でないのはどれか。`,
    choices: ["マイスネル小体","パチニ小体","メルケル細胞","メサンギウム細胞","ルフィニ小体"],
    correct: 3,
    explanation: `メサンギウム細胞は腎糸球体細胞。`
  },
  {
    id: 19,
    category: "生理",
    question: `交尾排卵動物はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `猫・フェレットが交尾排卵。`
  },
  {
    id: 20,
    category: "生理",
    question: `呼吸に関する記述として誤っているのはどれか。`,
    choices: [
      "呼吸に重要な胸郭は肋間筋や横隔膜などで囲まれている。",
      "横隔膜が収縮すると、肺が収縮して呼気が発生する。",
      "呼吸調節中枢は脳幹の橋に存在する。",
      "血中の酸素分圧や二酸化炭素分圧の変化は化学受容器で感知される。",
      "へーリング－ブロイエル反射では肺拡張後に吸息が抑制される。"
    ],
    correct: 1,
    explanation: `横隔膜収縮時は吸気が起こる。`
  },
  {
    id: 21,
    category: "生理",
    question: `神経筋接合部において終板電位を発生させるのはどれか。`,
    choices: [
      "電位依存性Na+チャネル",
      "電位依存性Ca2+チャネル",
      "リアノジン感受性Ca2+チャネル",
      "ニコチン受容体",
      "グルタミン酸受容体"
    ],
    correct: 3,
    explanation: `ニコチン受容体開口で終板電位。`
  },
  {
    id: 22,
    category: "生化学",
    question: `肝臓で合成されたTGを末梢へ運ぶのはどれか。`,
    choices: ["キロミクロン","アダプタータンパク質","VLDL","LDL","HDL"],
    correct: 2,
    explanation: `VLDLが肝TGを輸送。`
  },
  {
    id: 23,
    category: "生化学",
    question: `糖新生の基質にならないのはどれか。`,
    choices: ["酢酸","乳酸","ピルビン酸","グリセロール","プロピオン酸"],
    correct: 0,
    explanation: `酢酸はアセチルCoAとなり糖新生不可。`
  },
  {
    id: 24,
    category: "生化学",
    question: `負のアロステリック効果として正しいのはどれか。`,
    choices: [
      "基質に直接結合",
      "遺伝子合成阻害",
      "分解促進",
      "別部位に結合し活性抑制",
      "補酵素作用"
    ],
    correct: 3,
    explanation: `アロステリック阻害は活性部位以外への結合。`
  },
  {
    id: 25,
    category: "薬理",
    question: `シロドシンの排尿改善機序はどれか。`,
    choices: ["PDE阻害","α1遮断","M3遮断","コリンエステラーゼ阻害","β3遮断"],
    correct: 1,
    explanation: `α1遮断で尿道平滑筋弛緩。`
  },
  {
    id: 26,
    category: "薬理",
    question: `中枢興奮薬と機序の正しい組合せはどれか。`,
    choices: [
      "カフェイン―グリシン阻害",
      "テオブロミン―NA放出",
      "テオフィリン―PDE阻害",
      "メタンフェタミン―GABA阻害",
      "ストリキニーネ―DA阻害"
    ],
    correct: 2,
    explanation: `テオフィリンはPDE阻害。`
  },
  {
    id: 27,
    category: "薬理",
    question: `糖尿病薬で正しいのはどれか。`,
    choices: [
      "トルブタミドSGLT阻害",
      "メトホルミンKチャネル阻害",
      "アカルボースαグルコシダーゼ阻害",
      "ピオグリタゾンAMPK↑",
      "グリピジドPPAR刺激"
    ],
    correct: 2,
    explanation: `アカルボースはαグルコシダーゼ阻害。`
  },
  {
    id: 28,
    category: "薬理",
    question: `非麻薬性鎮痛薬はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `ブトルファノール・ペンタゾシン。`
  },
  {
    id: 29,
    category: "薬理",
    question: `抗菌薬とその作用機序の組合せとして正しいのはどれか。`,
    choices: [
      "エリスロマイシン ― DNAジャイレース阻害",
      "ストレプトマイシン ― エルゴステロール合成阻害",
      "セファレキシン ― tRNA転移阻害",
      "クロラムフェニコール ― ペプチジルトランスフェラーゼ阻害",
      "エンロフロキサシン ― ペプチドグリカン合成阻害"
    ],
    correct: 3,
    explanation: `クロラムフェニコールはタンパク合成阻害（ペプチジルトランスフェラーゼ阻害）。`
  },
  {
    id: 30,
    category: "薬理",
    question: `抗てんかん薬はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `フェノバルビタールと臭化カリウムが代表的抗てんかん薬。`
  },
  {
    id: 31,
    category: "薬理",
    question: `プロトンポンプを阻害する抗潰瘍薬はどれか。`,
    choices: ["オメプラゾール","ラニチジン","ガストリン","ケイ酸マグネシウム","ミソプロストール"],
    correct: 0,
    explanation: `PPIはオメプラゾール。`
  },
  {
    id: 32,
    category: "薬理",
    question: `イベルメクチンによる犬の神経毒性の原因はどれか。`,
    choices: [
      "アストロサイト分化抑制",
      "神経髄鞘脱落",
      "Naチャネル持続開口",
      "ACh放出阻害",
      "P糖タンパク遺伝子変異"
    ],
    correct: 4,
    explanation: `MDR1変異によりBBB通過し神経毒性。`
  },
  {
    id: 33,
    category: "中毒",
    question: `中毒とその原因物質の組合せとして正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `トリカブト＝アコニチン、スイートクローバー＝ジクマロール。`
  },
  {
    id: 34,
    category: "中毒",
    question: `バイケイソウに含まれ単眼症を起こす物質はどれか。`,
    choices: ["DES","ヒヨスチアミン","サイカシン","ストロファンタス","ベラトラムアルカロイド"],
    correct: 4,
    explanation: `胎子奇形原因はベラトラムアルカロイド。`
  },
  {
    id: 35,
    category: "薬理",
    question: `ソリブジンにより毒性が増強する抗腫瘍薬はどれか。`,
    choices: ["5-フルオロウラシル","シクロホスファミド","メトトレキサート","イマチニブ","メルファラン"],
    correct: 0,
    explanation: `5-FU分解阻害により致死的毒性増強。`
  },
  {
    id: 36,
    category: "病理",
    question: `皮膚粘液水腫の原因はどれか。`,
    choices: ["うっ血性心不全","慢性肝不全","急性糸球体腎炎","甲状腺機能低下症","低栄養"],
    correct: 3,
    explanation: `ムコ多糖沈着は甲状腺低下症。`
  },
  {
    id: 37,
    category: "病理",
    question: `アミロイド沈着を認める猫疾患はどれか。`,
    choices: ["２型糖尿病","肥大型心筋症","腸リンパ腫","黄色腫","肝リピドーシス"],
    correct: 0,
    explanation: `膵島アミロイド沈着が特徴。`
  },
  {
    id: 38,
    category: "遺伝",
    question: `糖原蓄積病はどれか。`,
    choices: ["ゴーシェ病","糖尿病","ポンペ病","クラッベ病","痛風"],
    correct: 2,
    explanation: `ポンペ病はリソソーム糖原蓄積。`
  },
  {
    id: 39,
    category: "免疫",
    question: `犬B細胞表面分子はどれか。`,
    choices: ["CD3","CD8","CD20","c-kit","CD204"],
    correct: 2,
    explanation: `CD20はB細胞マーカー。`
  },
  {
    id: 40,
    category: "病理",
    question: `死後変化はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `胆汁浸染と仮性メラノーシスは死後変化。`
  },
  {
    id: 41,
    category: "腫瘍",
    question: `脂腺由来の犬腫瘍はどれか。`,
    choices: ["肛門嚢腺癌","扁平上皮癌","肝様腺腫","耳垢腺腫","毛芽腫"],
    correct: 2,
    explanation: `肛門周囲腺は脂腺由来。`
  },
  {
    id: 42,
    category: "生化学",
    question: `フリーラジカルはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `スーパーオキシドとヒドロキシラジカル。`
  },
  {
    id: 43,
    category: "免疫",
    question: `Ⅲ型アレルギーはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 1,
    explanation: `アルサス反応と膜性腎症。`
  },
  {
    id: 44,
    category: "腫瘍",
    question: `フェレットに好発する腫瘍はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 1,
    explanation: `副腎皮質腫瘍とインスリノーマが好発。`
  },
  {
    id: 45,
    category: "ウイルス",
    question: `逆転写酵素をもつウイルスはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 0,
    explanation: `B型肝炎ウイルスと馬伝染性貧血ウイルス。`
  },
  {
    id: 46,
    category: "ウイルス",
    question: `オルトヘルペスウイルス科による感染症はどれか。`,
    choices: ["鶏白血病","鶏脳脊髄炎","鶏封入体肝炎","ニューカッスル病","マレック病"],
    correct: 4,
    explanation: `マレック病は鶏ヘルペスウイルス。`
  },
  {
    id: 47,
    category: "ウイルス",
    question: `サルコイドの起因ウイルスはどれか。`,
    choices: ["牛パピローマウイルス","馬パピローマウイルス","犬パピローマウイルス","猫パピローマウイルス","ショープ乳頭腫ウイルス"],
    correct: 0,
    explanation: `馬サルコイドは牛パピローマウイルス。`
  },
  {
    id: 48,
    category: "ウイルス",
    question: `遺伝子再集合を起こすウイルスはどれか。`,
    choices: ["猫汎白血球減少症ウイルス","犬ジステンパーウイルス","リフトバレー熱ウイルス","豚伝染性胃腸炎ウイルス","あひるB型肝炎ウイルス"],
    correct: 2,
    explanation: `分節RNAウイルスは再集合。`
  },
  {
    id: 49,
    category: "ウイルス",
    question: `ウイルス増殖で正しいのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 1,
    explanation: `生細胞必須・暗黒期あり。`
  },
  {
    id: 50,
    category: "免疫",
    question: `mRNAワクチンの作用機序はどれか。`,
    choices: ["IFN誘導","ゲノム複製阻害","液性免疫誘導","アポトーシス誘導","転写阻害"],
    correct: 2,
    explanation: `抗原タンパク産生→抗体誘導。`
  },
  {
    id: 51,
    category: "細菌",
    question: `エンドトキシンとして作用する細胞壁成分はどれか。`,
    choices: ["リピドA","タイコ酸","ポーリン","コア多糖","糖鎖"],
    correct: 0,
    explanation: `LPS毒性部分はリピドA。`
  },
  {
    id: 52,
    category: "真菌",
    question: `酵母形態をとらないのはどれか。`,
    choices: ["Microsporum canis","Candida albicans","Cryptococcus neoformans","Malassezia pachydermatis","Coccidioides immitis"],
    correct: [0, 4],
    explanation: `Microsporumは糸状菌、Coccidioidesは球状体。`
  },
  {
    id: 53,
    category: "細菌",
    question: `炭疽菌で正しいのはどれか。`,
    choices: ["莢膜が病原因子","テタノスパスミン毒素","セレウリド毒素","エンテロトキシン毒素","致死因子＋浮腫因子のみ"],
    correct: 0,
    explanation: `莢膜（ポリDグルタミン酸）が重要。`
  },
  {
    id: 54,
    category: "細菌",
    question: `サルモネラ血清型決定抗原はどれか。`,
    choices: ["菌体抗原とべん毛抗原","菌体抗原と線毛抗原","菌体抗原と莢膜抗原","莢膜抗原と線毛抗原","莢膜抗原とべん毛抗原"],
    correct: 0,
    explanation: `O抗原＋H抗原。`
  },
  {
    id: 55,
    category: "寄生虫",
    question: `血管内吸血型節足動物はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 4,
    explanation: `シラミとノミ。`
  },
  {
    id: 56,
    category: "寄生虫",
    question: `ミラシジウム形成卵を排泄するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 0,
    explanation: `肝吸虫・膵蛭。`
  },
  {
    id: 57,
    category: "寄生虫",
    question: `雄成虫尾部に交接嚢があるのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 4,
    explanation: `強口虫類に存在。`
  },
  {
    id: 58,
    category: "寄生虫",
    question: `2倍体と3倍体が知られる寄生虫はどれか。`,
    choices: ["肝吸虫","ウェステルマン肺吸虫","横川吸虫","槍形吸虫","日本住血吸虫"],
    correct: 1,
    explanation: `ウェステルマン肺吸虫。`
  },
  {
    id: 59,
    category: "寄生虫",
    question: `経乳感染するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `犬回虫・猫回虫。`
  },
  {
    id: 60,
    category: "寄生虫",
    question: `イエバエ類が媒介するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `Stephanofilaria と Draschia はハエ媒介。`
  },
  {
    id: 61,
    category: "寄生虫",
    question: `雌成虫が幼虫を産出するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 4,
    explanation: `旋毛虫と犬糸状虫は幼虫産出。`
  },
  {
    id: 62,
    category: "公衆衛生",
    question: `獣医師免許が法令上必要なのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `と畜検査員と狂犬病予防員。`
  },
  {
    id: 63,
    category: "公衆衛生",
    question: `ジビエに関する記述で適切なのはどれか。`,
    choices: ["環境省が指針作成","と畜場法適用","HACCP衛生管理義務","獣医師解体前検査義務","生食提供あり"],
    correct: 2,
    explanation: `HACCPに基づく衛生管理が求められる。`
  },
  {
    id: 64,
    category: "公衆衛生",
    question: `JVARMの対象でないのはどれか。`,
    choices: ["野生動物由来耐性菌","家畜由来耐性菌","水産動物由来耐性菌","愛玩動物由来耐性菌","抗菌薬使用量"],
    correct: 0,
    explanation: `野生動物は対象外。`
  },
  {
    id: 65,
    category: "公衆衛生",
    question: `家畜保健衛生所の業務でないのはどれか。`,
    choices: ["伝染病予防検査","人工授精事務","衛生管理指導","と畜検査","BSE検査"],
    correct: 3,
    explanation: `と畜検査は家保業務でない。`
  },
  {
    id: 66,
    category: "法規",
    question: `人工授精簿の保存年数はどれか。`,
    choices: ["1年","3年","5年","8年","10年"],
    correct: 2,
    explanation: `5年間保存義務。`
  },
  {
    id: 67,
    category: "臨床",
    question: `肝合成能評価に最も適当なのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `AlbとT-Chol。`
  },
  {
    id: 68,
    category: "臨床",
    question: `ショック所見として最も適当なのはどれか。`,
    choices: ["四肢冷感","心拍数低下","呼吸数減少","尿量増加","高血圧"],
    correct: 0,
    explanation: `末梢循環低下で四肢冷感。`
  },
  {
    id: 69,
    category: "臨床",
    question: `犬小腸疾患徴候として最も適当なのはどれか。`,
    choices: ["しぶり","メレナ","排便困難","血便","便失禁"],
    correct: 1,
    explanation: `小腸出血は黒色便。`
  },
  {
    id: 70,
    category: "代謝",
    question: `牛ケトーシスで増加するのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 2,
    explanation: `アセトンとアセト酢酸。`
  },
  {
    id: 71,
    category: "画像",
    question: `脊髄造影の造影剤注入部位はどれか。`,
    choices: ["硬膜外","硬膜とくも膜間","くも膜下腔","軟膜と脊髄間","脊髄内"],
    correct: 2,
    explanation: `CSFスペースに注入。`
  },
  {
    id: 72,
    category: "画像",
    question: `散乱線で誤りはどれか。`,
    choices: ["鮮鋭度低下","低kVほど増加","不規則方向","皮膚吸収","グリッドで低減"],
    correct: 1,
    explanation: `高kVで増加。`
  },
  {
    id: 73,
    category: "麻酔",
    question: `鎮痛作用がないのはどれか。`,
    choices: ["ブプレノルフィン","アセトアミノフェン","プロポフォール","リドカイン","メデトミジン"],
    correct: 2,
    explanation: `プロポフォールは催眠のみ。`
  },
  {
    id: 74,
    category: "整形",
    question: `皮質骨連続性が一部保たれる骨折はどれか。`,
    choices: ["粉砕骨折","蝶形骨折","長斜骨折","若木骨折","らせん骨折"],
    correct: 3,
    explanation: `若木骨折は不完全骨折。`
  },
  {
    id: 75,
    category: "外科",
    question: `腸端々吻合に最適なのはどれか。`,
    choices: ["ブンネル","クッシング","ギャンビー","コンネル","パーカー・カー"],
    correct: 2,
    explanation: `ギャンビー縫合。`
  },
  {
    id: 76,
    category: "麻酔",
    question: `馬麻酔で適切なのはどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 0,
    explanation: `PaCO2は換気評価、顔面動脈で血圧測定可能。`
  },
  {
    id: 77,
    category: "繁殖",
    question: `豚妊娠認識物質はどれか。`,
    choices: ["プロジェステロン","インヒビン","IFN-τ","エストロジェン","オキシトシン"],
    correct: 3,
    explanation: `胚由来エストロゲン。`
  },
  {
    id: 78,
    category: "繁殖",
    question: `牛40日以内妊娠診断法はどれか。`,
    choices: ["a, b","a, e","b, c","c, d","d, e"],
    correct: 3,
    explanation: `超音波とノンリターン法。`
  },
  {
    id: 79,
    category: "繁殖",
    question: `eCGの産生部位はどれか。`,
    choices: ["視床下部","下垂体前葉","下垂体後葉","子宮内膜杯","黄体"],
    correct: 3,
    explanation: `胎盤由来（子宮内膜杯）。`
  }
];

let currentIndex = 0;
let mode = "normal";
let selectedCategory = "all";
let wrongQuestionIds = [];

let states = quizData.map(() => ({
  selected: null,
  answered: false,
  isCorrect: false,
  explanation: false
}));

const categorySelect = document.getElementById("category");
const wrongBtn = document.getElementById("wrong-btn");
const resetBtn = document.getElementById("reset-btn");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const answerBtn = document.getElementById("answer");
const explainBtn = document.getElementById("explain");

const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const modeLabelEl = document.getElementById("mode-label");
const questionNumberEl = document.getElementById("question-number");
const questionCategoryEl = document.getElementById("question-category");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const explanationBoxEl = document.getElementById("explanation-box");
const explanationEl = document.getElementById("explanation");

function isCorrectChoice(correctAnswer, selectedIndex) {
  return Array.isArray(correctAnswer)
    ? correctAnswer.includes(selectedIndex)
    : selectedIndex === correctAnswer;
}

function getList() {
  const base = mode === "wrong"
    ? quizData.filter(q => wrongQuestionIds.includes(q.id))
    : quizData;

  if (selectedCategory === "all") return base;
  return base.filter(q => q.category === selectedCategory);
}

function getFilteredScore(list) {
  return list.filter(q => states[q.id - 1].isCorrect).length;
}

function updateCategoryOptions() {
  const categories = ["all", ...new Set(quizData.map(q => q.category))];
  categorySelect.innerHTML = categories.map(category => {
    const label = category === "all" ? "すべて" : category;
    return `<option value="${category}">${label}</option>`;
  }).join("");
  categorySelect.value = selectedCategory;
}

function updateStatus(list) {
  const total = list.length;
  const current = total === 0 ? 0 : currentIndex + 1;
  progressEl.textContent = `${current} / ${total}`;
  scoreEl.textContent = `${getFilteredScore(list)} / ${total}`;
  modeLabelEl.textContent = mode === "wrong" ? "復習" : "通常";
}

function renderEmpty(message) {
  questionNumberEl.textContent = "-";
  questionCategoryEl.textContent = selectedCategory === "all" ? "カテゴリなし" : selectedCategory;
  questionEl.textContent = message;
  choicesEl.innerHTML = "";
  resultEl.textContent = "";
  resultEl.className = "result";
  explanationBoxEl.hidden = true;
  explanationEl.textContent = "";
  prevBtn.disabled = true;
  nextBtn.disabled = true;
  answerBtn.disabled = true;
  explainBtn.disabled = true;
}

function render() {
  const list = getList();
  if (currentIndex >= list.length) currentIndex = Math.max(0, list.length - 1);

  updateStatus(list);
  updateCategoryOptions();

  if (list.length === 0) {
    renderEmpty(mode === "wrong" ? "まだ間違えた問題がありません。" : "このカテゴリには問題がありません。");
    return;
  }

  const q = list[currentIndex];
  const state = states[q.id - 1];

  questionNumberEl.textContent = `Q${q.id}`;
  questionCategoryEl.textContent = q.category;
  questionEl.textContent = q.question;

  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = choice;

    if (state.selected === index) button.classList.add("selected");

    if (state.answered) {
      const isRight = isCorrectChoice(q.correct, index);
      if (isRight) button.classList.add("correct");
      if (state.selected === index && !isRight) button.classList.add("wrong");
    }

    button.onclick = () => {
      if (state.answered) return;
      state.selected = index;
      render();
    };

    choicesEl.appendChild(button);
  });

  if (state.answered) {
    resultEl.textContent = state.isCorrect ? "正解です。" : "不正解です。";
    resultEl.className = `result ${state.isCorrect ? "correct-text" : "wrong-text"}`;
  } else {
    resultEl.textContent = "";
    resultEl.className = "result";
  }

  explanationBoxEl.hidden = !state.explanation;
  explanationEl.textContent = state.explanation ? q.explanation : "";

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === list.length - 1;
  answerBtn.disabled = state.selected === null || state.answered;
  explainBtn.disabled = !state.answered;
  explainBtn.textContent = state.explanation ? "解説を閉じる" : "解説";
}

function answer() {
  const list = getList();
  if (!list.length) return;

  const q = list[currentIndex];
  const state = states[q.id - 1];
  if (state.selected === null || state.answered) return;

  state.answered = true;
  state.isCorrect = isCorrectChoice(q.correct, state.selected);

  if (!state.isCorrect && !wrongQuestionIds.includes(q.id)) {
    wrongQuestionIds.push(q.id);
  }

  if (state.isCorrect) {
    wrongQuestionIds = wrongQuestionIds.filter(id => id !== q.id);
  }

  render();
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
}

function nextQuestion() {
  const list = getList();
  if (currentIndex < list.length - 1) {
    currentIndex += 1;
    render();
  }
}

function toggleExplanation() {
  const list = getList();
  if (!list.length) return;

  const q = list[currentIndex];
  const state = states[q.id - 1];
  if (!state.answered) return;

  state.explanation = !state.explanation;
  render();
}

function retryWrong() {
  mode = "wrong";
  currentIndex = 0;
  render();
}

function resetQuiz() {
  currentIndex = 0;
  mode = "normal";
  selectedCategory = "all";
  wrongQuestionIds = [];

  states = quizData.map(() => ({
    selected: null,
    answered: false,
    isCorrect: false,
    explanation: false
  }));

  render();
}

categorySelect.addEventListener("change", event => {
  selectedCategory = event.target.value;
  currentIndex = 0;
  if (mode === "wrong" && getList().length === 0) {
    mode = "normal";
  }
  render();
});

wrongBtn.onclick = retryWrong;
resetBtn.onclick = resetQuiz;
prevBtn.onclick = prevQuestion;
nextBtn.onclick = nextQuestion;
answerBtn.onclick = answer;
explainBtn.onclick = toggleExplanation;

updateCategoryOptions();
render();
