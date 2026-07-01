/* ================================================================
   日語单词练习 App — 新标准日本语 第1~8课
   ================================================================ */

// ====== WORD DATA ======
const WORDS = [
  // ===== 人称・身份 =====
  {word:"私", kana:"わたし", meaning:"我", category:"人称・身份", lesson:1},
  {word:"あなた", kana:"あなた", meaning:"你", category:"人称・身份", lesson:1},
  {word:"方", kana:"かた", meaning:"人（敬称）", category:"人称・身份", lesson:1},
  {word:"人", kana:"ひと", meaning:"人", category:"人称・身份", lesson:1},
  {word:"あの人", kana:"あのひと", meaning:"那个人", category:"人称・身份", lesson:1},
  {word:"男", kana:"おとこ", meaning:"男", category:"人称・身份", lesson:1},
  {word:"女", kana:"おんな", meaning:"女", category:"人称・身份", lesson:1},
  {word:"子供", kana:"こども", meaning:"小孩", aliases:["小孩子","小朋友"], category:"人称・身份", lesson:1},
  {word:"家族", kana:"かぞく", meaning:"家人", category:"人称・身份", lesson:1},
  {word:"父", kana:"ちち", meaning:"（我）父亲", category:"人称・身份", lesson:1},
  {word:"母", kana:"はは", meaning:"（我）母亲", category:"人称・身份", lesson:1},
  {word:"両親", kana:"りょうしん", meaning:"父母", category:"人称・身份", lesson:1},
  {word:"兄", kana:"あに", meaning:"（我）哥哥", category:"人称・身份", lesson:1},
  {word:"妹", kana:"いもうと", meaning:"（我）妹妹", category:"人称・身份", lesson:1},
  {word:"弟", kana:"おとうと", meaning:"（我）弟弟", category:"人称・身份", lesson:1},
  {word:"兄弟", kana:"きょうだい", meaning:"兄弟姐妹", category:"人称・身份", lesson:1},

  // ===== 职业・身份 =====
  {word:"学生", kana:"がくせい", meaning:"学生", category:"职业・身份", lesson:1},
  {word:"生徒", kana:"せいと", meaning:"学生（中小学生）", category:"职业・身份", lesson:1},
  {word:"先生", kana:"せんせい", meaning:"老师", category:"职业・身份", lesson:1},
  {word:"教授", kana:"きょうじゅ", meaning:"教授", category:"职业・身份", lesson:1},
  {word:"留学生", kana:"りゅうがくせい", meaning:"留学生", category:"职业・身份", lesson:1},
  {word:"会社員", kana:"かいしゃいん", meaning:"公司职员", category:"职业・身份", lesson:1},
  {word:"社員", kana:"しゃいん", meaning:"职员", category:"职业・身份", lesson:1},
  {word:"社長", kana:"しゃちょう", meaning:"总经理/社长", category:"职业・身份", lesson:1},
  {word:"課長", kana:"かちょう", meaning:"科长", category:"职业・身份", lesson:1},
  {word:"店員", kana:"てんいん", meaning:"店员", category:"职业・身份", lesson:1},
  {word:"研修生", kana:"けんしゅうせい", meaning:"进修生", category:"职业・身份", lesson:1},

  // ===== 国家・地名 =====
  {word:"中国", kana:"ちゅうごく", meaning:"中国", category:"国家・地名", lesson:1},
  {word:"中国人", kana:"ちゅうごくじん", meaning:"中国人", category:"国家・地名", lesson:1},
  {word:"日本", kana:"にほん", meaning:"日本", category:"国家・地名", lesson:1},
  {word:"日本人", kana:"にほんじん", meaning:"日本人", category:"国家・地名", lesson:1},
  {word:"韓国人", kana:"かんこくじん", meaning:"韩国人", category:"国家・地名", lesson:1},
  {word:"国", kana:"くに", meaning:"国家", category:"国家・地名", lesson:1},
  {word:"東京", kana:"とうきょう", meaning:"东京", category:"国家・地名", lesson:3},
  {word:"大学", kana:"だいがく", meaning:"大学", category:"国家・地名", lesson:1},
  {word:"企業", kana:"きぎょう", meaning:"企业", category:"国家・地名", lesson:1},
  {word:"会社", kana:"かいしゃ", meaning:"公司", category:"国家・地名", lesson:1},

  // ===== 日常物品 =====
  {word:"本", kana:"ほん", meaning:"书", category:"日常物品", lesson:1},
  {word:"辞書", kana:"じしょ", meaning:"词典", category:"日常物品", lesson:1},
  {word:"雑誌", kana:"ざっし", meaning:"杂志", category:"日常物品", lesson:1},
  {word:"新聞", kana:"しんぶん", meaning:"报纸", category:"日常物品", lesson:1},
  {word:"電話", kana:"でんわ", meaning:"电话", category:"日常物品", lesson:1},
  {word:"机", kana:"つくえ", meaning:"桌子", category:"日常物品", lesson:1},
  {word:"椅子", kana:"いす", meaning:"椅子", category:"日常物品", lesson:1},
  {word:"時計", kana:"とけい", meaning:"钟表", aliases:["手表","钟"], category:"日常物品", lesson:1},
  {word:"写真", kana:"しゃしん", meaning:"照片", category:"日常物品", lesson:1},
  {word:"かばん", kana:"かばん", meaning:"包", category:"日常物品", lesson:1},
  {word:"車", kana:"くるま", meaning:"车", category:"日常物品", lesson:1},
  {word:"自転車", kana:"じてんしゃ", meaning:"自行车", aliases:["单车","脚踏车"], category:"日常物品", lesson:1},
  {word:"傘", kana:"かさ", meaning:"伞", category:"日常物品", lesson:1},
  {word:"靴", kana:"くつ", meaning:"鞋", category:"日常物品", lesson:1},
  {word:"ノート", kana:"ノート", meaning:"笔记本", category:"日常物品", lesson:1},
  {word:"鉛筆", kana:"えんぴつ", meaning:"铅笔", category:"日常物品", lesson:1},
  {word:"万年筆", kana:"まんねんひつ", meaning:"钢笔", category:"日常物品", lesson:1},
  {word:"カメラ", kana:"カメラ", meaning:"照相机", aliases:["相机"], category:"日常物品", lesson:1},
  {word:"テレビ", kana:"テレビ", meaning:"电视机", aliases:["电视"], category:"日常物品", lesson:1},
  {word:"ラジオ", kana:"ラジオ", meaning:"收音机", category:"日常物品", lesson:1},
  {word:"眼鏡", kana:"めがね", meaning:"眼镜", category:"日常物品", lesson:1},
  {word:"お土産", kana:"おみやげ", meaning:"礼物/特产", category:"日常物品", lesson:1},
  {word:"名産品", kana:"めいさんひん", meaning:"特产/名产", category:"日常物品", lesson:1},

  // ===== 场所・建筑 =====
  {word:"デパート", kana:"デパート", meaning:"百货商店", aliases:["百货","百货商场"], category:"场所・建筑", lesson:3},
  {word:"食堂", kana:"しょくどう", meaning:"食堂", category:"场所・建筑", lesson:3},
  {word:"郵便局", kana:"ゆうびんきょく", meaning:"邮局", category:"场所・建筑", lesson:3},
  {word:"銀行", kana:"ぎんこう", meaning:"银行", category:"场所・建筑", lesson:3},
  {word:"図書館", kana:"としょかん", meaning:"图书馆", category:"场所・建筑", lesson:3},
  {word:"マンション", kana:"マンション", meaning:"高级公寓", aliases:["公寓"], category:"场所・建筑", lesson:3},
  {word:"ホテル", kana:"ホテル", meaning:"宾馆", aliases:["酒店","旅馆"], category:"场所・建筑", lesson:3},
  {word:"コンビニ", kana:"コンビニ", meaning:"便利店", aliases:["便利商店"], category:"场所・建筑", lesson:3},
  {word:"喫茶店", kana:"きっさてん", meaning:"咖啡馆", aliases:["咖啡店","咖啡厅"], category:"场所・建筑", lesson:3},
  {word:"病院", kana:"びょういん", meaning:"医院", category:"场所・建筑", lesson:3},
  {word:"本屋", kana:"ほんや", meaning:"书店", category:"场所・建筑", lesson:3},
  {word:"レストラン", kana:"レストラン", meaning:"西餐馆", aliases:["西餐厅","餐厅"], category:"场所・建筑", lesson:3},
  {word:"ビル", kana:"ビル", meaning:"大楼", category:"场所・建筑", lesson:3},
  {word:"建物", kana:"たてもの", meaning:"建筑物", aliases:["建筑"], category:"场所・建筑", lesson:3},
  {word:"売り場", kana:"うりば", meaning:"柜台/出售处", category:"场所・建筑", lesson:3},
  {word:"トイレ", kana:"トイレ", meaning:"厕所", category:"场所・建筑", lesson:3},
  {word:"受付", kana:"うけつけ", meaning:"接待处", category:"场所・建筑", lesson:3},
  {word:"入口", kana:"いりぐち", meaning:"入口", category:"场所・建筑", lesson:3},
  {word:"事務所", kana:"じむしょ", meaning:"事务所", category:"场所・建筑", lesson:3},
  {word:"教室", kana:"きょうしつ", meaning:"教室", category:"场所・建筑", lesson:3},
  {word:"会議室", kana:"かいぎしつ", meaning:"会议室", category:"场所・建筑", lesson:3},
  {word:"図書室", kana:"としょしつ", meaning:"图书室", category:"场所・建筑", lesson:3},
  {word:"公園", kana:"こうえん", meaning:"公园", category:"场所・建筑", lesson:3},
  {word:"駅", kana:"えき", meaning:"车站", category:"场所・建筑", lesson:3},
  {word:"地下鉄", kana:"ちかてつ", meaning:"地铁", category:"场所・建筑", lesson:3},
  {word:"花屋", kana:"はなや", meaning:"花店", category:"场所・建筑", lesson:3},
  {word:"売店", kana:"ばいてん", meaning:"小卖部", category:"场所・建筑", lesson:3},
  {word:"学校", kana:"がっこう", meaning:"学校", category:"场所・建筑", lesson:3},

  // ===== 家居・方位 =====
  {word:"部屋", kana:"へや", meaning:"房间", category:"家居・方位", lesson:4},
  {word:"家", kana:"いえ", meaning:"家庭", category:"家居・方位", lesson:4},
  {word:"にわ", kana:"にわ", meaning:"院子", category:"家居・方位", lesson:4},
  {word:"居間", kana:"いま", meaning:"起居室", category:"家居・方位", lesson:4},
  {word:"冷蔵庫", kana:"れいぞうこ", meaning:"冰箱", category:"家居・方位", lesson:4},
  {word:"本棚", kana:"ほんだな", meaning:"书架", category:"家居・方位", lesson:4},
  {word:"壁", kana:"かべ", meaning:"墙壁", category:"家居・方位", lesson:4},
  {word:"ベッド", kana:"ベッド", meaning:"床", category:"家居・方位", lesson:4},
  {word:"箱", kana:"はこ", meaning:"盒子/箱子", category:"家居・方位", lesson:4},
  {word:"スイッチ", kana:"スイッチ", meaning:"开关", category:"家居・方位", lesson:4},
  {word:"上", kana:"うえ", meaning:"上面", category:"家居・方位", lesson:4},
  {word:"下", kana:"した", meaning:"下面", category:"家居・方位", lesson:4},
  {word:"前", kana:"まえ", meaning:"前面", category:"家居・方位", lesson:4},
  {word:"後ろ", kana:"うしろ", meaning:"后面", category:"家居・方位", lesson:4},
  {word:"中", kana:"なか", meaning:"里面", category:"家居・方位", lesson:4},
  {word:"外", kana:"そと", meaning:"外面", category:"家居・方位", lesson:4},
  {word:"隣", kana:"となり", meaning:"旁边", category:"家居・方位", lesson:4},
  {word:"近く", kana:"ちかく", meaning:"附近", category:"家居・方位", lesson:4},
  {word:"場所", kana:"ばしょ", meaning:"所在地", category:"家居・方位", lesson:3},
  {word:"周辺", kana:"しゅうへん", meaning:"附近/周边", category:"家居・方位", lesson:4},
  {word:"地図", kana:"ちず", meaning:"地图", category:"家居・方位", lesson:3},

  // ===== 动物 =====
  {word:"猫", kana:"ねこ", meaning:"猫", category:"动物", lesson:4},
  {word:"犬", kana:"いぬ", meaning:"狗", category:"动物", lesson:4},

  // ===== 时间・日期 =====
  {word:"今", kana:"いま", meaning:"现在", category:"时间・日期", lesson:5},
  {word:"今日", kana:"きょう", meaning:"今天", category:"时间・日期", lesson:5},
  {word:"昨日", kana:"きのう", meaning:"昨天", category:"时间・日期", lesson:5},
  {word:"明日", kana:"あした", meaning:"明天", category:"时间・日期", lesson:5},
  {word:"おととい", kana:"おととい", meaning:"前天", category:"时间・日期", lesson:5},
  {word:"あさって", kana:"あさって", meaning:"后天", category:"时间・日期", lesson:5},
  {word:"今朝", kana:"けさ", meaning:"今天早晨", aliases:["今早","今天早上"], category:"时间・日期", lesson:5},
  {word:"今晩", kana:"こんばん", meaning:"今天晚上", aliases:["今晚"], category:"时间・日期", lesson:5},
  {word:"毎日", kana:"まいにち", meaning:"每天", aliases:["天天"], category:"时间・日期", lesson:5},
  {word:"毎朝", kana:"まいあさ", meaning:"每天早晨", aliases:["每天早上"], category:"时间・日期", lesson:5},
  {word:"毎晩", kana:"まいばん", meaning:"每天晚上", aliases:["每晚"], category:"时间・日期", lesson:5},
  {word:"毎週", kana:"まいしゅう", meaning:"每个星期", aliases:["每周"], category:"时间・日期", lesson:5},
  {word:"今週", kana:"こんしゅう", meaning:"这个星期", aliases:["这周"], category:"时间・日期", lesson:5},
  {word:"先週", kana:"せんしゅう", meaning:"上个星期", aliases:["上周"], category:"时间・日期", lesson:5},
  {word:"来週", kana:"らいしゅう", meaning:"下个星期", aliases:["下周"], category:"时间・日期", lesson:5},
  {word:"再来週", kana:"さらいしゅう", meaning:"下下个星期", aliases:["下下周"], category:"时间・日期", lesson:5},
  {word:"去年", kana:"きょねん", meaning:"去年", category:"时间・日期", lesson:5},
  {word:"来年", kana:"らいねん", meaning:"明年", category:"时间・日期", lesson:5},
  {word:"朝", kana:"あさ", meaning:"早晨", aliases:["早上"], category:"时间・日期", lesson:5},
  {word:"午前", kana:"ごぜん", meaning:"上午", category:"时间・日期", lesson:5},
  {word:"午後", kana:"ごご", meaning:"下午", category:"时间・日期", lesson:5},
  {word:"夕方", kana:"ゆうがた", meaning:"傍晚", aliases:["黄昏"], category:"时间・日期", lesson:5},
  {word:"夜", kana:"よる", meaning:"夜里", aliases:["夜晚","晚上"], category:"时间・日期", lesson:5},
  {word:"晩", kana:"ばん", meaning:"晚上", category:"时间・日期", lesson:5},
  {word:"日曜日", kana:"にちようび", meaning:"星期日", aliases:["周日","星期天"], category:"时间・日期", lesson:5},
  {word:"月曜日", kana:"げつようび", meaning:"星期一", aliases:["周一"], category:"时间・日期", lesson:5},
  {word:"火曜日", kana:"かようび", meaning:"星期二", aliases:["周二"], category:"时间・日期", lesson:5},
  {word:"水曜日", kana:"すいようび", meaning:"星期三", aliases:["周三"], category:"时间・日期", lesson:5},
  {word:"木曜日", kana:"もくようび", meaning:"星期四", aliases:["周四"], category:"时间・日期", lesson:5},
  {word:"金曜日", kana:"きんようび", meaning:"星期五", aliases:["周五"], category:"时间・日期", lesson:5},
  {word:"土曜日", kana:"どようび", meaning:"星期六", aliases:["周六"], category:"时间・日期", lesson:5},

  // ===== 动词 =====
  {word:"起きる", kana:"おきる", meaning:"起床", category:"动词", lesson:5},
  {word:"寝る", kana:"ねる", meaning:"睡觉", category:"动词", lesson:5},
  {word:"勉強する", kana:"べんきょうする", meaning:"学习", category:"动词", lesson:5},
  {word:"働く", kana:"はたらく", meaning:"工作", category:"动词", lesson:5},
  {word:"休む", kana:"やすむ", meaning:"休息", category:"动词", lesson:5},
  {word:"始まる", kana:"はじまる", meaning:"开始", category:"动词", lesson:5},
  {word:"終わる", kana:"おわる", meaning:"结束", category:"动词", lesson:5},

  // ===== 活动・事件 =====
  {word:"試験", kana:"しけん", meaning:"考试", category:"活动・事件", lesson:5},
  {word:"仕事", kana:"しごと", meaning:"工作", category:"活动・事件", lesson:5},
  {word:"旅行", kana:"りょこう", meaning:"旅行", category:"活动・事件", lesson:5},
  {word:"出張", kana:"しゅっちょう", meaning:"出差", category:"活动・事件", lesson:5},
  {word:"研修", kana:"けんしゅう", meaning:"进修", category:"活动・事件", lesson:5},
  {word:"展覧会", kana:"てんらんかい", meaning:"展览会", category:"活动・事件", lesson:5},
  {word:"歓迎会", kana:"かんげいかい", meaning:"欢迎会", category:"活动・事件", lesson:5},
  {word:"パーティー", kana:"パーティー", meaning:"联欢会", category:"活动・事件", lesson:5},
  {word:"遅刻", kana:"ちこく", meaning:"迟到", category:"活动・事件", lesson:5},
  {word:"休み", kana:"やすみ", meaning:"休息", category:"活动・事件", lesson:5},
  {word:"出迎え", kana:"でむかえ", meaning:"迎接", category:"活动・事件", lesson:5},
  {word:"一人暮らし", kana:"ひとりぐらし", meaning:"单身生活", category:"活动・事件", lesson:5},

  // ===== 疑问词 =====
  {word:"何", kana:"なん", meaning:"什么", category:"疑问词", lesson:1},
  {word:"誰", kana:"だれ", meaning:"谁", category:"疑问词", lesson:1},
  {word:"いつ", kana:"いつ", meaning:"什么时候", category:"疑问词", lesson:5},
  {word:"いくら", kana:"いくら", meaning:"多少钱", category:"疑问词", lesson:3},
  {word:"何歳", kana:"なんさい", meaning:"多大了", category:"疑问词", lesson:1},
  {word:"何階", kana:"なんがい", meaning:"几层", category:"疑问词", lesson:3},

  // ===== 形容词・副词・寒暄 =====
  {word:"よく", kana:"よく", meaning:"经常", category:"形容词・副词・寒暄", lesson:5},
  {word:"どうも", kana:"どうも", meaning:"非常/很", category:"形容词・副词・寒暄", lesson:1},
  {word:"そう", kana:"そう", meaning:"那样", category:"形容词・副词・寒暄", lesson:1},
  {word:"はい", kana:"はい", meaning:"是（应答）", category:"形容词・副词・寒暄", lesson:1},
  {word:"いいえ", kana:"いいえ", meaning:"不/不是", category:"形容词・副词・寒暄", lesson:1},
  {word:"ありがとう", kana:"ありがとう", meaning:"谢谢", category:"形容词・副词・寒暄", lesson:1},
  {word:"初めまして", kana:"はじめまして", meaning:"初次见面", category:"形容词・副词・寒暄", lesson:1},
  {word:"どうぞよろしく", kana:"どうぞよろしく", meaning:"请多关照", category:"形容词・副词・寒暄", lesson:1},
  {word:"すみません", kana:"すみません", meaning:"对不起/请问", category:"形容词・副词・寒暄", lesson:1},
  {word:"お宅", kana:"おたく", meaning:"您家/府上", category:"形容词・副词・寒暄", lesson:1},
  {word:"服", kana:"ふく", meaning:"衣服", category:"形容词・副词・寒暄", lesson:1},
  {word:"コート", kana:"コート", meaning:"大衣", category:"形容词・副词・寒暄", lesson:1},
  {word:"ビール", kana:"ビール", meaning:"啤酒", category:"形容词・副词・寒暄", lesson:1},
  {word:"サッカー", kana:"サッカー", meaning:"足球", category:"形容词・副词・寒暄", lesson:1},

  // ===== 交通・移动 =====
  {word:"新幹線", kana:"しんかんせん", meaning:"新干线", category:"交通・移动", lesson:6},
  {word:"飛行機", kana:"ひこうき", meaning:"飞机", category:"交通・移动", lesson:6},
  {word:"電車", kana:"でんしゃ", meaning:"电车", category:"交通・移动", lesson:6},
  {word:"バス", kana:"バス", meaning:"公交车", aliases:["巴士","公交"], category:"交通・移动", lesson:6},
  {word:"タクシー", kana:"タクシー", meaning:"出租车", aliases:["出租","的士"], category:"交通・移动", lesson:6},
  {word:"船", kana:"ふね", meaning:"船", category:"交通・移动", lesson:6},
  {word:"美術館", kana:"びじゅつかん", meaning:"美术馆", aliases:["艺术馆"], category:"场所・建筑", lesson:6},
  {word:"友達", kana:"ともだち", meaning:"朋友", aliases:["好友","伙伴"], category:"人称・身份", lesson:6},
  {word:"アパート", kana:"アパート", meaning:"公寓", category:"场所・建筑", lesson:6},
  {word:"空港", kana:"くうこう", meaning:"机场", category:"场所・建筑", lesson:6},
  {word:"歩いて", kana:"あるいて", meaning:"步行", aliases:["走路"], category:"交通・移动", lesson:6},
  {word:"まっすぐ", kana:"まっすぐ", meaning:"笔直/直接", category:"交通・移动", lesson:6},
  {word:"一緒に", kana:"いっしょに", meaning:"一起", category:"交通・移动", lesson:6},
  {word:"たしか", kana:"たしか", meaning:"大概是/我记得", category:"交通・移动", lesson:6},

  // ===== 时间・日期（补充）=====
  {word:"来月", kana:"らいげつ", meaning:"下个月", aliases:["下月"], category:"时间・日期", lesson:6},
  {word:"先月", kana:"せんげつ", meaning:"上个月", aliases:["上月"], category:"时间・日期", lesson:6},
  {word:"今月", kana:"こんげつ", meaning:"这个月", aliases:["本月"], category:"时间・日期", lesson:6},

  // ===== 饮食・食物 =====
  {word:"コーヒー", kana:"コーヒー", meaning:"咖啡", category:"饮食・食物", lesson:7},
  {word:"コーラ", kana:"コーラ", meaning:"可乐", category:"饮食・食物", lesson:7},
  {word:"お茶", kana:"おちゃ", meaning:"茶", aliases:["茶叶","茶水"], category:"饮食・食物", lesson:7},
  {word:"ワイン", kana:"ワイン", meaning:"葡萄酒", aliases:["红酒"], category:"饮食・食物", lesson:7},
  {word:"パン", kana:"パン", meaning:"面包", category:"饮食・食物", lesson:7},
  {word:"ケーキ", kana:"ケーキ", meaning:"蛋糕", category:"饮食・食物", lesson:7},
  {word:"お粥", kana:"おかゆ", meaning:"粥", aliases:["稀饭"], category:"饮食・食物", lesson:7},
  {word:"昼ご飯", kana:"ひるごはん", meaning:"午饭", aliases:["午餐","中饭"], category:"饮食・食物", lesson:7},
  {word:"弁当", kana:"べんとう", meaning:"盒饭", aliases:["便当"], category:"饮食・食物", lesson:7},
  {word:"そば", kana:"そば", meaning:"荞麦面", category:"饮食・食物", lesson:7},
  {word:"うどん", kana:"うどん", meaning:"乌冬面", category:"饮食・食物", lesson:7},
  {word:"親子丼", kana:"おやこどん", meaning:"鸡肉鸡蛋盖饭", aliases:["亲子丼"], category:"饮食・食物", lesson:7},
  {word:"カレー", kana:"カレー", meaning:"咖喱饭", aliases:["咖喱"], category:"饮食・食物", lesson:7},
  {word:"卵", kana:"たまご", meaning:"鸡蛋", aliases:["蛋"], category:"饮食・食物", lesson:7},
  {word:"チーズ", kana:"チーズ", meaning:"奶酪", aliases:["芝士","干酪"], category:"饮食・食物", lesson:7},
  {word:"リンゴ", kana:"リンゴ", meaning:"苹果", category:"饮食・食物", lesson:7},
  {word:"イチゴ", kana:"イチゴ", meaning:"草莓", category:"饮食・食物", lesson:7},

  // ===== 娱乐・休闲 =====
  {word:"音楽", kana:"おんがく", meaning:"音乐", category:"娱乐・休闲", lesson:7},
  {word:"映画", kana:"えいが", meaning:"电影", category:"娱乐・休闲", lesson:7},
  {word:"動物園", kana:"どうぶつえん", meaning:"动物园", category:"娱乐・休闲", lesson:7},
  {word:"パンダ", kana:"パンダ", meaning:"熊猫", category:"娱乐・休闲", lesson:7},
  {word:"テニス", kana:"テニス", meaning:"网球", category:"娱乐・休闲", lesson:7},
  {word:"ジョギング", kana:"ジョギング", meaning:"慢跑", category:"娱乐・休闲", lesson:7},
  {word:"野球", kana:"やきゅう", meaning:"棒球", category:"娱乐・休闲", lesson:7},

  // ===== 通信・书类 =====
  {word:"申込書", kana:"もうしこみしょ", meaning:"申请书", category:"通信・书类", lesson:7},
  {word:"手紙", kana:"てがみ", meaning:"信", aliases:["信件","书信"], category:"通信・书类", lesson:7},
  {word:"CD", kana:"CD", meaning:"CD", category:"通信・书类", lesson:7},

  // ===== 物品・礼物 =====
  {word:"宿題", kana:"しゅくだい", meaning:"作业", aliases:["功课"], category:"通信・书类", lesson:8},
  {word:"プレゼント", kana:"プレゼント", meaning:"礼物", aliases:["礼品"], category:"物品・礼物", lesson:8},
  {word:"チケット", kana:"チケット", meaning:"票", aliases:["门票","入场券"], category:"物品・礼物", lesson:8},
  {word:"お祝い", kana:"おいわい", meaning:"贺礼", aliases:["祝贺"], category:"物品・礼物", lesson:8},

  // ===== 动词（补充）=====
  {word:"行く", kana:"いく", meaning:"去", aliases:["前往"], category:"动词", lesson:6},
  {word:"帰る", kana:"かえる", meaning:"回家/回去", aliases:["返回","回来"], category:"动词", lesson:6},
  {word:"来る", kana:"くる", meaning:"来", aliases:["过来","来到"], category:"动词", lesson:6},
  {word:"飲む", kana:"のむ", meaning:"喝", category:"动词", lesson:7},
  {word:"買う", kana:"かう", meaning:"买", aliases:["购买"], category:"动词", lesson:7},
  {word:"撮る", kana:"とる", meaning:"拍照", aliases:["拍摄","照相"], category:"动词", lesson:7},
  {word:"書く", kana:"かく", meaning:"写", aliases:["书写"], category:"动词", lesson:7},
  {word:"読む", kana:"よむ", meaning:"读", aliases:["阅读"], category:"动词", lesson:7},
  {word:"聞く", kana:"きく", meaning:"听", aliases:["听见"], category:"动词", lesson:7},
  {word:"食べる", kana:"たべる", meaning:"吃", aliases:["食用"], category:"动词", lesson:7},
  {word:"見る", kana:"みる", meaning:"看", aliases:["观看"], category:"动词", lesson:7},
  {word:"する", kana:"する", meaning:"做", aliases:["干"], category:"动词", lesson:7},
  {word:"掃除する", kana:"そうじする", meaning:"打扫", aliases:["清扫","清理"], category:"动词", lesson:7},
  {word:"会う", kana:"あう", meaning:"见面", aliases:["遇见","相逢"], category:"动词", lesson:8},
  {word:"送る", kana:"おくる", meaning:"寄/送", aliases:["邮寄","发送"], category:"动词", lesson:8},
  {word:"作る", kana:"つくる", meaning:"做/制作", aliases:["制造","创造"], category:"动词", lesson:8},
  {word:"太る", kana:"ふとる", meaning:"胖", aliases:["发胖","变胖"], category:"动词", lesson:8},
  {word:"出す", kana:"だす", meaning:"拿出/寄出", aliases:["取出","发出"], category:"动词", lesson:8},
  {word:"届く", kana:"とどく", meaning:"到达/送达", aliases:["收到","抵达"], category:"动词", lesson:8},
  {word:"貸す", kana:"かす", meaning:"借出（我→你）", aliases:["借给"], category:"动词", lesson:8},
  {word:"習う", kana:"ならう", meaning:"学习（跟人学）", aliases:["跟随学习"], category:"动词", lesson:8},
  {word:"もらう", kana:"もらう", meaning:"得到（我←别人）", aliases:["接收","获得"], category:"动词", lesson:8},
  {word:"かける", kana:"かける", meaning:"打（电话）", aliases:["拨打"], category:"动词", lesson:8},
  {word:"借りる", kana:"かりる", meaning:"借入（你→我）", aliases:["借用"], category:"动词", lesson:8},
  {word:"教える", kana:"おしえる", meaning:"教/告诉", aliases:["教导","告知"], category:"动词", lesson:8},
  {word:"あげる", kana:"あげる", meaning:"给（我→别人）", aliases:["给予","赠送"], category:"动词", lesson:8},

  // ===== 副词・接续词（补充）=====
  {word:"これから", kana:"これから", meaning:"从现在起", aliases:["接下来","今后"], category:"副词・接续词", lesson:7},
  {word:"じゃあ", kana:"じゃあ", meaning:"那么", aliases:["那好"], category:"副词・接续词", lesson:7},
  {word:"いつも", kana:"いつも", meaning:"总是/经常", aliases:["常常","老是"], category:"副词・接续词", lesson:7},
  {word:"もう", kana:"もう", meaning:"已经", aliases:["早已"], category:"副词・接续词", lesson:8},
  {word:"まだ", kana:"まだ", meaning:"还/尚未", aliases:["还没"], category:"副词・接续词", lesson:8},
  {word:"さっき", kana:"さっき", meaning:"刚才", aliases:["刚刚"], category:"副词・接续词", lesson:8},
  {word:"たった今", kana:"たったいま", meaning:"刚刚", aliases:["方才","刚才"], category:"副词・接续词", lesson:8},

  // ===== 食物・饮料（第9课）=====
  {word:"料理", kana:"りょうり", meaning:"菜肴/料理", aliases:["菜","菜肴"], category:"食物・饮料", lesson:9},
  {word:"四川料理", kana:"しせんりょうり", meaning:"四川菜", category:"食物・饮料", lesson:9},
  {word:"スープ", kana:"スープ", meaning:"汤", aliases:["汤品"], category:"食物・饮料", lesson:9},
  {word:"北京ダック", kana:"ペキンダック", meaning:"北京烤鸭", aliases:["烤鸭"], category:"食物・饮料", lesson:9},
  {word:"食べ物", kana:"たべもの", meaning:"食物", aliases:["吃的","食品"], category:"食物・饮料", lesson:9},
  {word:"飲み物", kana:"のみもの", meaning:"饮料", aliases:["喝的","饮品"], category:"食物・饮料", lesson:9},
  {word:"お湯", kana:"おゆ", meaning:"热水/开水", aliases:["热水","开水"], category:"食物・饮料", lesson:9},
  {word:"水", kana:"みず", meaning:"水/凉水", aliases:["凉水"], category:"食物・饮料", lesson:9},
  {word:"お茶", kana:"おちゃ", meaning:"茶", aliases:["茶","茶叶"], category:"食物・饮料", lesson:9},
  {word:"紅茶", kana:"こうちゃ", meaning:"红茶", category:"食物・饮料", lesson:9},
  {word:"牛乳", kana:"ぎゅうにゅう", meaning:"牛奶", aliases:["奶"], category:"食物・饮料", lesson:9},
  {word:"お酒", kana:"おさけ", meaning:"酒/日本酒", aliases:["酒","酒精"], category:"食物・饮料", lesson:9},

  // ===== 味觉形容词（第9课）=====
  {word:"辛い", kana:"からい", meaning:"辣", aliases:["辛辣"], category:"味觉形容词", lesson:9},
  {word:"甘い", kana:"あまい", meaning:"甜", aliases:["甜味"], category:"味觉形容词", lesson:9},
  {word:"塩辛い", kana:"しおからい", meaning:"咸", aliases:["咸味","齁"], category:"味觉形容词", lesson:9},
  {word:"酸っぱい", kana:"すっぱい", meaning:"酸", aliases:["酸味"], category:"味觉形容词", lesson:9},
  {word:"苦い", kana:"にがい", meaning:"苦", aliases:["苦味"], category:"味觉形容词", lesson:9},
  {word:"美味しい", kana:"おいしい", meaning:"好吃/美味", aliases:["好吃","好喝","美味"], category:"味觉形容词", lesson:9},
  {word:"まずい", kana:"まずい", meaning:"不好吃/难吃", aliases:["难吃","不好吃"], category:"味觉形容词", lesson:9},

  // ===== 状态形容词（第9课）=====
  {word:"熱い", kana:"あつい", meaning:"热/烫", aliases:["烫","炎热"], category:"状态形容词", lesson:9},
  {word:"冷たい", kana:"つめたい", meaning:"凉/冰", aliases:["冰冷","冰凉"], category:"状态形容词", lesson:9},
  {word:"温かい", kana:"あたたかい", meaning:"温暖/温热", aliases:["暖和","温热"], category:"状态形容词", lesson:9},
  {word:"楽しい", kana:"たのしい", meaning:"愉快/快乐", aliases:["快乐","开心","愉快"], category:"状态形容词", lesson:9},
  {word:"面白い", kana:"おもしろい", meaning:"有趣/有意思", aliases:["有趣","有意思","好玩"], category:"状态形容词", lesson:9},
  {word:"広い", kana:"ひろい", meaning:"宽敞/宽广", aliases:["宽敞","宽阔","辽阔"], category:"状态形容词", lesson:9},

  // ===== 其他名词（第9课）=====
  {word:"音楽", kana:"おんがく", meaning:"音乐", category:"其他名词", lesson:9},
  {word:"天気", kana:"てんき", meaning:"天气", aliases:["气候"], category:"其他名词", lesson:9},
  {word:"旅行", kana:"りょこう", meaning:"旅行", aliases:["旅游"], category:"其他名词", lesson:9},

  // ===== 程度副词（第9课）=====
  {word:"とても", kana:"とても", meaning:"很/非常", aliases:["非常","特别","十分"], category:"程度副词", lesson:9},
  {word:"あまり", kana:"あまり", meaning:"不太…（后接否定）", aliases:["不怎么"], category:"程度副词", lesson:9},
  {word:"本当に", kana:"ほんとうに", meaning:"真的/实在", aliases:["真的","确实","实在"], category:"程度副词", lesson:9},
  {word:"ちょうど", kana:"ちょうど", meaning:"正好/刚好", aliases:["正好","刚好"], category:"程度副词", lesson:9},
];

// ====== GRAMMAR DATA（句型翻译）======
const GRAMMAR = [
  // === 第1课 判断句 ===
  {prompt:"我是学生。", answer:["わたしはがくせいです","私は学生です"], lesson:1, point:"判断句"},
  {prompt:"小李是中国人。", answer:["りさんはちゅうごくじんです","李さんは中国人です"], lesson:1, point:"判断句"},
  {prompt:"我不是日本人。", answer:["わたしはにほんじんではありません","私は日本人ではありません"], lesson:1, point:"否定"},
  {prompt:"森先生不是学生。", answer:["もりさんはがくせいではありません","森さんは学生ではありません"], lesson:1, point:"否定"},
  {prompt:"你是公司职员吗？", answer:["あなたはかいしゃいんですか","あなたは会社員ですか"], lesson:1, point:"疑问"},
  {prompt:"小李是JC策划公司的职员。", answer:["りさんはjcきかくのしゃいんです","李さんはjcきかくのしゃいんです"], lesson:1, point:"所属"},

  // === 第2课 事物指示 ===
  {prompt:"这是书。", answer:["これはほんです","これは本です"], lesson:2, point:"事物指示"},
  {prompt:"那是什么？", answer:["それはなんですか","それは何ですか"], lesson:2, point:"事物指示"},
  {prompt:"这把伞是我的。", answer:["このかさはわたしのです","この傘は私のです"], lesson:2, point:"连体词"},
  {prompt:"那个包是谁的？", answer:["そのかばんはだれのです"], lesson:2, point:"所属"},

  // === 第3课 场所 ===
  {prompt:"这里是百货商店。", answer:["ここはデパートです"], lesson:3, point:"场所指示"},
  {prompt:"厕所在哪里？", answer:["トイレはどこですか"], lesson:3, point:"场所疑问"},
  {prompt:"这个多少钱？", answer:["これはいくらですか"], lesson:3, point:"价格"},
  {prompt:"这个是三百日元。", answer:["これはさんびゃくえんです","これは300円です"], lesson:3, point:"价格"},

  // === 第4课 存在句 ===
  {prompt:"房间里有桌子和椅子。", answer:["へやにつくえといすがあります","部屋に机と椅子があります"], lesson:4, point:"存在(物)"},
  {prompt:"桌子上有一只猫。", answer:["つくえのうえにねこがいます","机の上に猫がいます"], lesson:4, point:"存在(动物)"},
  {prompt:"院子里有什么？", answer:["にわになにがいますか","庭に何がいますか"], lesson:4, point:"存在疑问"},
  {prompt:"房间里什么也没有。", answer:["へやになにもありません","部屋に何もありません"], lesson:4, point:"全面否定"},
  {prompt:"书在桌子上。", answer:["ほんはつくえのうえにあります","本は机の上にあります"], lesson:4, point:"位置"},
  {prompt:"猫在椅子下面。", answer:["ねこはいすのしたにいます","猫は椅子の下にいます"], lesson:4, point:"位置"},

  // === 第5课 动词 ===
  {prompt:"森先生7点起床。", answer:["もりさんはしちじにおきます","森さんは7時におきます"], lesson:5, point:"时间点"},
  {prompt:"我昨天没有工作。", answer:["わたしはきのうはたらきませんでした","私は昨日働きませんでした"], lesson:5, point:"过去否定"},
  {prompt:"我从9点工作到5点。", answer:["わたしはくじからごじまではたらきます","私は9時から5時まで働きます"], lesson:5, point:"起止时间"},
  {prompt:"什么时候考试？", answer:["いつしけんをしますか","いつ試験をしますか"], lesson:5, point:"疑问"},
  {prompt:"我每天早上7点起床。", answer:["わたしはまいあさしちじにおきます","私は毎朝7時におきます"], lesson:5, point:"时间"},

  // === 第6课 移动 ===
  {prompt:"吉田先生下个月去中国。", answer:["よしださんはらいげつちゅうごくへいきます","吉田さんは来月中国へ行きます"], lesson:6, point:"移动"},
  {prompt:"小李上个月从北京来的。", answer:["りさんはせんげつぺきんからきました","李さんは先月北京から来ました"], lesson:6, point:"起点"},
  {prompt:"小野女士和朋友一起回去了。", answer:["おのさんはともだちとかえりました","小野さんは友達と帰りました"], lesson:6, point:"共同者"},
  {prompt:"森先生从东京坐新干线去广岛。", answer:["もりさんはとうきょうからひろしままでしんかんせんでいきます","森さんは東京から広島まで新幹線で行きます"], lesson:6, point:"移动全要素"},
  {prompt:"我坐公交车回家。", answer:["わたしはバスでいえへかえります","私はバスで家へ帰ります"], lesson:6, point:"交通"},
  {prompt:"我走路回公寓。", answer:["わたしはあるいてアパートへかえります","私は歩いてアパートへ帰ります"], lesson:6, point:"步行"},

  // === 第7课 动作 ===
  {prompt:"小李每天喝咖啡。", answer:["りさんはまいにちコーヒーをのみます","李さんは毎日コーヒーを飲みます"], lesson:7, point:"宾语"},
  {prompt:"我在图书馆读书。", answer:["わたしはとしょかんでほんをよみます","私は図書館で本を読みます"], lesson:7, point:"动作场所"},
  {prompt:"请给我咖啡或茶。", answer:["コーヒーかおちゃをください","コーヒーかお茶をください"], lesson:7, point:"选择/请求"},
  {prompt:"我每天在食堂吃饭。", answer:["わたしはまいにちしょくどうでごはんをたべます","私は毎日食堂でご飯を食べます"], lesson:7, point:"动作场所"},
  {prompt:"我听音乐。", answer:["わたしはおんがくをききます","私は音楽を聞きます"], lesson:7, point:"宾语"},

  // === 第8课 手段/授受 ===
  {prompt:"小李用日语写信。", answer:["りさんはにほんごでてがみをかきます","李さんは日本語で手紙を書きます"], lesson:8, point:"手段"},
  {prompt:"我给小野女士特产。", answer:["わたしはおのさんにおみやげをあげます","私は小野さんにお土産をあげます"], lesson:8, point:"あげる"},
  {prompt:"我从小野女士那得到了字典。", answer:["わたしはおのさんにじしょをもらいました","私は小野さんに辞書をもらいました"], lesson:8, point:"もらう"},
  {prompt:"已经做完作业了。", answer:["もうしゅくだいをしました","もう宿題をしました"], lesson:8, point:"完了"},
  {prompt:"还没吃。", answer:["まだたべていません","まだ食べていません"], lesson:8, point:"未完了"},
  {prompt:"我在车站见到了森先生。", answer:["わたしはえきでもりさんにあいました","私は駅で森さんに会いました"], lesson:8, point:"见面"},
  {prompt:"我用筷子吃饭。", answer:["わたしははしでごはんをたべます","私は箸でご飯を食べます"], lesson:8, point:"工具"},

  // === 第9课 形容词 ===
  {prompt:"四川菜很辣。", answer:["しせんりょうりはからいです","四川料理は辛いです"], lesson:9, point:"形容词谓语"},
  {prompt:"这个汤不太热。", answer:["このスープはあまりあつくないです","このスープはあまり熱くないです"], lesson:9, point:"あまり～ない"},
  {prompt:"旅行很开心。", answer:["りょこうはたのしいです","旅行は楽しいです"], lesson:9, point:"形容词谓语"},
  {prompt:"今天天气不好。", answer:["きょうはてんきがよくないです","今日は天気がよくないです"], lesson:9, point:"いい否定"},
  {prompt:"这本书非常有趣。", answer:["このほんはとてもおもしろいです","この本はとても面白いです"], lesson:9, point:"とても"},
  {prompt:"北京烤鸭很好吃。", answer:["ペキンダックはおいしいです","北京ダックは美味しいです"], lesson:9, point:"形容词谓语"},
  {prompt:"这个菜不太好吃。", answer:["このりょうりはあまりおいしくないです","この料理はあまり美味しくないです"], lesson:9, point:"あまり～ない"},
  {prompt:"茶不是很热。", answer:["おちゃはあまりあつくないです","お茶はあまり熱くないです"], lesson:9, point:"あまり～ない"},
];

// ====== WRONG WORD STORAGE (localStorage) ======
const WRONG_STORAGE_KEY = 'jpquiz_wrong';

function getWrongStats() {
  try {
    const raw = localStorage.getItem(WRONG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveWrongStats(stats) {
  try {
    localStorage.setItem(WRONG_STORAGE_KEY, JSON.stringify(stats));
  } catch (e) {
    // localStorage full or unavailable
  }
}

function makeWrongKey(wordObj) {
  return `${wordObj.word}::${wordObj.kana}`;
}

function recordWrongAnswer(wordObj) {
  const stats = getWrongStats();
  const key = makeWrongKey(wordObj);
  if (stats[key]) {
    stats[key].count++;
    stats[key].lastWrong = Date.now();
  } else {
    stats[key] = { count: 1, lastWrong: Date.now() };
  }
  saveWrongStats(stats);
}

function getHighFreqWrongWords(minCount = 2) {
  const stats = getWrongStats();
  const entries = Object.entries(stats)
    .filter(([, v]) => v.count >= minCount)
    .sort(([, a], [, b]) => b.count - a.count);

  return entries.map(([key, info]) => {
    const [word, kana] = key.split('::');
    // Find the full word object from WORDS
    const wordObj = WORDS.find(w => w.word === word && w.kana === kana);
    return wordObj ? { ...wordObj, wrongCount: info.count, lastWrong: info.lastWrong } : null;
  }).filter(Boolean);
}

function clearWrongStats() {
  localStorage.removeItem(WRONG_STORAGE_KEY);
}

// ====== APP STATE ======
const state = {
  quizType: 'word',  // 'word' | 'grammar'
  mode: 'cn2jp',
  selectedLessons: new Set([1,2,3,4,5,6,7,8]),
  selectedCategories: new Set(),
  questionCount: 20,
  filteredWords: [],
  quizWords: [],
  currentIndex: 0,
  answers: [],
  viewedFeedback: false,
  reviewMode: false,
};

// ====== DOM REFS ======
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ====== INIT ======
function getAllCategories() {
  const cats = [...new Set(WORDS.map(w => w.category))];
  cats.sort((a,b) => {
    const order = ['人称・身份','职业・身份','国家・地名','日常物品','场所・建筑','家居・方位','动物','时间・日期','动词','活动・事件','疑问词','形容词・副词・寒暄'];
    return order.indexOf(a) - order.indexOf(b);
  });
  return cats;
}

function buildCategoryUI() {
  const grid = $('#category-grid');
  const cats = getAllCategories();
  grid.innerHTML = cats.map(c =>
    `<button class="category-btn selected" data-category="${c}">${c}</button>`
  ).join('');

  // All categories selected by default
  state.selectedCategories = new Set(cats);
  updateCategoryCount();

  // Click handlers
  grid.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      if (state.selectedCategories.has(cat)) {
        state.selectedCategories.delete(cat);
        btn.classList.remove('selected');
      } else {
        state.selectedCategories.add(cat);
        btn.classList.add('selected');
      }
      updateCategoryCount();
      updateAvailableCount();
    });
  });
}

function updateCategoryCount() {
  const el = $('#category-count');
  const total = getAllCategories().length;
  el.textContent = `${state.selectedCategories.size}/${total}`;
}

function updateAvailableCount() {
  const count = getAvailableCount();
  $('#total-words').textContent = count;
  if (state.quizType === 'grammar') {
    $('#total-label').textContent = '句型';
  } else {
    $('#total-label').textContent = '单词';
  }
}

function filterWords() {
  return WORDS.filter(w =>
    state.selectedLessons.has(w.lesson) &&
    state.selectedCategories.has(w.category)
  );
}

function filterGrammar() {
  return GRAMMAR.filter(g => state.selectedLessons.has(g.lesson));
}

function getAvailableCount() {
  if (state.quizType === 'grammar') {
    return filterGrammar().length;
  }
  return filterWords().length;
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ====== SCREEN NAVIGATION ======
function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $(`#${id}`).classList.add('active');
  window.scrollTo(0, 0);
}

// ====== HOME SCREEN ======
function switchQuizType(type) {
  state.quizType = type;
  if (type === 'grammar') {
    $('#card-mode').style.display = 'none';
    $('#card-category').style.display = 'none';
    $('#card-count').querySelector('h3').textContent = '🔢 题目数量（整句翻译）';
    $('.subtitle').textContent = '新标准日本语 · 第1~8课 · 语法';
  } else {
    $('#card-mode').style.display = '';
    $('#card-category').style.display = '';
    $('#card-count').querySelector('h3').textContent = '🔢 题目数量';
    $('.subtitle').textContent = '新标准日本语 · 第1~8课';
  }
  updateAvailableCount();
}

function initHome() {
  buildCategoryUI();
  updateAvailableCount();

  // Quiz type toggle (word / grammar)
  $$('.type-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.type-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      switchQuizType(btn.dataset.type);
    });
  });

  // Mode toggle (cn2jp / jp2cn)
  $$('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.mode-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.mode = btn.dataset.mode;
    });
  });

  // Lesson selection
  $$('.lesson-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lesson = parseInt(btn.dataset.lesson);
      if (state.selectedLessons.has(lesson)) {
        state.selectedLessons.delete(lesson);
        btn.classList.remove('selected');
      } else {
        state.selectedLessons.add(lesson);
        btn.classList.add('selected');
      }
      updateAvailableCount();
    });
  });

  $('#select-all-lessons').addEventListener('click', () => {
    [1,2,3,4,5,6,7,8].forEach(l => state.selectedLessons.add(l));
    $$('.lesson-btn').forEach(b => b.classList.add('selected'));
    updateAvailableCount();
  });
  $('#deselect-all-lessons').addEventListener('click', () => {
    state.selectedLessons.clear();
    $$('.lesson-btn').forEach(b => b.classList.remove('selected'));
    updateAvailableCount();
  });

  // Question count slider
  const slider = $('#question-count');
  const display = $('#count-display');
  slider.addEventListener('input', () => {
    state.questionCount = parseInt(slider.value);
    display.textContent = `${state.questionCount} 题`;
  });

  // Start button
  $('#start-btn').addEventListener('click', () => {
    if (state.quizType === 'grammar') {
      const filtered = filterGrammar();
      if (filtered.length === 0) {
        alert('请至少选择一个课程！');
        return;
      }
      state.reviewMode = false;
      state.filteredWords = filtered;
      const count = Math.min(state.questionCount, filtered.length);
      state.quizWords = shuffle(filtered).slice(0, count);
      state.currentIndex = 0;
      state.answers = [];
      state.viewedFeedback = false;
      startQuiz();
      return;
    }

    const filtered = filterWords();
    if (filtered.length === 0) {
      alert('请至少选择一个课程和一个类别！');
      return;
    }
    if (state.selectedLessons.size === 0) {
      alert('请至少选择一个课程！');
      return;
    }
    state.reviewMode = false;
    state.filteredWords = filtered;
    const count = Math.min(state.questionCount, filtered.length);
    state.quizWords = shuffle(filtered).slice(0, count);
    state.currentIndex = 0;
    state.answers = [];
    state.viewedFeedback = false;
    startQuiz();
  });

  // Wrong review button
  $('#review-wrong-btn').addEventListener('click', startWrongReview);

  // Clear wrong stats button
  $('#clear-wrong-btn').addEventListener('click', () => {
    if (!confirm('确定要清空所有错题记录吗？此操作不可恢复。')) return;
    clearWrongStats();
    updateWrongReviewUI();
  });

  updateWrongReviewUI();
}

// ====== QUIZ SCREEN ======
function startQuiz() {
  showScreen('quiz-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = state.quizWords[state.currentIndex];
  const total = state.quizWords.length;
  const idx = state.currentIndex + 1;
  const isGrammar = state.quizType === 'grammar';

  // Progress
  $('#progress-fill').style.width = `${(state.currentIndex / total) * 100}%`;
  $('#progress-text').textContent = `${idx}/${total}`;

  // Mode badge
  let questionMode = state.mode;
  if (isGrammar) {
    questionMode = 'grammar';
    $('#mode-badge').textContent = '📝 语法翻译  🇨🇳 → 🇯🇵';
  } else if (state.reviewMode) {
    questionMode = Math.random() > 0.5 ? 'cn2jp' : 'jp2cn';
    $('#mode-badge').textContent = '🔄 错题复习（混合模式）';
  } else if (state.mode === 'cn2jp') {
    $('#mode-badge').textContent = '🇨🇳 → 🇯🇵  看中文打日文';
  } else {
    $('#mode-badge').textContent = '🇯🇵 → 🇨🇳  看日文打中文';
  }
  state.currentQuestionMode = questionMode;

  // Question
  if (isGrammar) {
    $('#question-label').textContent = '请将下列中文翻译成日文';
    $('#question-word').textContent = q.prompt;
    $('#question-hint').textContent = `（${q.point} · 可用假名或汉字）`;
    $('#question-category').textContent = `第${q.lesson}课`;
  } else if (questionMode === 'cn2jp') {
    $('#question-label').textContent = '请写出对应的日文';
    $('#question-word').textContent = q.meaning;
    $('#question-hint').textContent = '（可用假名或汉字假名混合）';
  } else {
    $('#question-label').textContent = '请写出对应的中文意思';
    $('#question-word').textContent = q.word;
    $('#question-hint').textContent = q.word !== q.kana ? `（${q.kana}）` : '';
  }
  $('#question-category').textContent = isGrammar ? `第${q.lesson}课 · ${q.point}` : q.category;

  // Reset
  const input = $('#answer-input');
  input.blur();
  input.value = '';
  input.className = 'answer-input';
  // Delay focus to let IME fully reset after blur
  setTimeout(() => input.focus(), 50);
  $('#feedback').style.display = 'none';
  $('#submit-btn').style.display = 'block';
  $('#skip-btn').style.display = 'block';
  $('#answer-input').style.display = 'block';
  state.viewedFeedback = false;
}

function checkAnswer() {
  if (state.viewedFeedback) return; // Already answered
  const q = state.quizWords[state.currentIndex];
  const userAnswer = $('#answer-input').value.trim();

  if (!userAnswer) {
    // Shake the input
    const input = $('#answer-input');
    input.style.animation = 'none';
    input.offsetHeight; // reflow
    input.style.animation = 'shake 0.4s ease';
    return;
  }

  let isCorrect = false;

  if (state.currentQuestionMode === 'grammar') {
    // Grammar: accept any of the answer variants (kana or kanji)
    const normalizedUser = normalizeJapanese(userAnswer);
    isCorrect = q.answer.some(a => normalizeJapanese(a) === normalizedUser);
  } else if (state.currentQuestionMode === 'cn2jp') {
    // Accept kana or kanji form
    const normalizedUser = normalizeJapanese(userAnswer);
    const normalizedKana = normalizeJapanese(q.kana);
    const normalizedWord = normalizeJapanese(q.word);
    isCorrect = (normalizedUser === normalizedKana || normalizedUser === normalizedWord);
  } else {
    // JP → CN: match against all acceptable Chinese answers
    const normalizedUser = normalizeChinese(userAnswer);
    const accepted = acceptableCNAnswers(q.meaning, q.aliases);
    // 1) exact match against all accepted variants
    isCorrect = accepted.some(a => normalizeChinese(a) === normalizedUser);
    // 2) fuzzy match: one string contains the other AND length diff ≤ 2
    //    catches: 伞→雨伞, 鞋→鞋子, 车→汽车, 百货商店→百货, 手表→表 etc.
    if (!isCorrect) {
      isCorrect = accepted.some(a => {
        const na = normalizeChinese(a);
        if (!na || !normalizedUser) return false;
        const longer = na.length >= normalizedUser.length ? na : normalizedUser;
        const shorter = na.length >= normalizedUser.length ? normalizedUser : na;
        const diff = longer.length - shorter.length;
        return diff <= 2 && diff >= 1 && longer.includes(shorter);
      });
    }
  }

  state.answers.push({
    word: q,
    userAnswer: userAnswer,
    isCorrect: isCorrect,
    skipped: false,
  });

  // Record wrong answer for review
  if (!isCorrect) {
    recordWrongAnswer(q);
  }

  state.viewedFeedback = true;
  showFeedback(isCorrect, q, userAnswer);
}

function normalizeJapanese(str) {
  // Normalize for comparison: trim, normalize spaces
  return str.trim()
    .replace(/\s+/g, '')
    .replace(/[！-～]/g, c => String.fromCharCode(c.charCodeAt(0) - 0xFEE0)) // fullwidth → halfwidth
    .toLowerCase();
}

function acceptableCNAnswers(meaning, aliases) {
  // Generate all acceptable Chinese answers:
  // 1) Parse meaning: handle parens, slashes
  // 2) Add explicit aliases from word data
  // 3) Expand via Chinese synonym dictionary (CN_SYNONYMS)
  const answers = [meaning];
  // Remove parenthesized parts: 人（敬称）→ 人
  const noParen = meaning.replace(/[（(][^）)]*[）)]/g, '').trim();
  if (noParen && noParen !== meaning) answers.push(noParen);
  // Split on slash: 礼物/特产 → 礼物, 特产
  const parts = meaning.split(/[／\/]/);
  if (parts.length > 1) {
    parts.forEach(p => {
      const t = p.trim();
      if (t && !answers.includes(t)) answers.push(t);
    });
    if (noParen && noParen !== meaning) {
      const noParenParts = noParen.split(/[／\/]/);
      noParenParts.forEach(p => {
        const t = p.trim();
        if (t && !answers.includes(t)) answers.push(t);
      });
    }
  }
  // Include explicit aliases from word data
  if (aliases && Array.isArray(aliases)) {
    aliases.forEach(a => {
      if (a && !answers.includes(a)) answers.push(a);
    });
  }
  // Expand via synonym dictionary: for each answer, look up its synonyms
  const expanded = [...answers];
  if (typeof CN_SYNONYMS !== 'undefined') {
    for (const a of answers) {
      const clean = a.replace(/\s+/g, '');
      if (CN_SYNONYMS[clean]) {
        for (const s of CN_SYNONYMS[clean]) {
          if (!expanded.includes(s)) expanded.push(s);
        }
      }
    }
  }
  return expanded;
}

function normalizeChinese(str) {
  // Normalize for comparison: trim, remove spaces
  return str.trim().replace(/\s+/g, '');
}

function showFeedback(isCorrect, q, userAnswer) {
  const fb = $('#feedback');
  fb.style.display = 'block';
  fb.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');
  const isGrammar = state.quizType === 'grammar';

  // Hide input & submit, blur to reset IME state
  const input = $('#answer-input');
  input.style.display = 'none';
  input.blur();
  $('#submit-btn').style.display = 'none';
  $('#skip-btn').style.display = 'none';

  if (isCorrect) {
    $('#feedback-icon').textContent = '✅';
    $('#feedback-text').textContent = '正确！';
    if (isGrammar) {
      $('#feedback-answer').innerHTML = `
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:4px">${q.prompt}</div>
        <span class="correct-answer" style="font-size:18px">${q.answer[0]}</span>
        ${q.answer.length > 1 ? `<div style="font-size:12px;color:var(--text-light);margin-top:2px">也可：${q.answer.slice(1).join(' / ')}</div>` : ''}
      `;
    } else if (state.currentQuestionMode === 'cn2jp') {
      $('#feedback-answer').innerHTML = `
        <span class="correct-answer">${q.word}</span>
        ${q.word !== q.kana ? `<span class="kana-reading">（${q.kana}）</span>` : ''}
      `;
    } else {
      $('#feedback-answer').innerHTML = `
        <span class="correct-answer">${q.meaning}</span>
      `;
    }
  } else {
    $('#feedback-icon').textContent = '❌';
    $('#feedback-text').textContent = '回答错误';

    if (isGrammar) {
      $('#feedback-answer').innerHTML = `
        <div style="font-size:14px;color:var(--text-secondary);margin-bottom:4px">${q.prompt}</div>
        <div>正确答案：<span class="correct-answer" style="font-size:18px">${q.answer[0]}</span></div>
        ${q.answer.length > 1 ? `<div style="font-size:12px;color:var(--text-light);margin-top:2px">也可：${q.answer.slice(1).join(' / ')}</div>` : ''}
        <div style="margin-top:6px;color:var(--danger)">你写的：${userAnswer || '（空）'}</div>
      `;
    } else if (state.currentQuestionMode === 'cn2jp') {
      $('#feedback-answer').innerHTML = `
        正确答案：<span class="correct-answer">${q.word}</span>
        ${q.word !== q.kana ? `<span class="kana-reading">（${q.kana}）</span>` : ''}
        <br>你写的：${userAnswer || '（空）'}
      `;
    } else {
      $('#feedback-answer').innerHTML = `
        正确答案：<span class="correct-answer">${q.meaning}</span>
        <br>你写的：${userAnswer || '（空）'}
      `;
    }
  }
}

function skipQuestion() {
  if (state.viewedFeedback) return;
  const q = state.quizWords[state.currentIndex];
  state.answers.push({
    word: q,
    userAnswer: '',
    isCorrect: false,
    skipped: true,
  });

  state.viewedFeedback = true;
  const fb = $('#feedback');
  fb.style.display = 'block';
  fb.className = 'feedback skipped';

  $('#answer-input').style.display = 'none';
  $('#submit-btn').style.display = 'none';
  $('#skip-btn').style.display = 'none';
  $('#feedback-icon').textContent = '⏭️';
  $('#feedback-text').textContent = '已跳过';
  const isGrammar = state.quizType === 'grammar';

  if (isGrammar) {
    $('#feedback-answer').innerHTML = `
      <div style="font-size:14px;color:var(--text-secondary);margin-bottom:4px">${q.prompt}</div>
      正确答案：<span class="correct-answer" style="font-size:18px">${q.answer[0]}</span>
    `;
  } else if (state.currentQuestionMode === 'cn2jp') {
    $('#feedback-answer').innerHTML = `
      正确答案：<span class="correct-answer">${q.word}</span>
      ${q.word !== q.kana ? `<span class="kana-reading">（${q.kana}）</span>` : ''}
    `;
  } else {
    $('#feedback-answer').innerHTML = `
      正确答案：<span class="correct-answer">${q.meaning}</span>
    `;
  }
}

function nextQuestion() {
  if (state.currentIndex + 1 >= state.quizWords.length) {
    showResult();
  } else {
    state.currentIndex++;
    state.viewedFeedback = false;
    renderQuestion();
    $('#answer-input').style.display = 'block';
    $('#submit-btn').style.display = 'block';
    $('#skip-btn').style.display = 'block';
  }
}

// ====== RESULT SCREEN ======
function showResult() {
  showScreen('result-screen');

  const total = state.answers.length;
  const correct = state.answers.filter(a => a.isCorrect).length;
  const wrong = state.answers.filter(a => !a.isCorrect && !a.skipped).length;
  const skipped = state.answers.filter(a => a.skipped).length;
  const score = Math.round((correct / total) * 100);
  const accuracy = Math.round((correct / (total - skipped || 1)) * 100);

  // Score circle color
  const circle = $('#score-circle');
  if (score >= 90) circle.style.background = 'var(--success-light)';
  else if (score >= 60) circle.style.background = 'var(--warning-light)';
  else circle.style.background = 'var(--danger-light)';

  const scoreNum = $('#score-number');
  scoreNum.textContent = score;
  if (score >= 90) scoreNum.style.color = 'var(--success)';
  else if (score >= 60) scoreNum.style.color = 'var(--warning)';
  else scoreNum.style.color = 'var(--danger)';

  $('#stat-correct').textContent = correct;
  $('#stat-wrong').textContent = wrong;
  $('#stat-skipped').textContent = skipped;
  $('#stat-accuracy').textContent = accuracy + '%';

  // Wrong list
  const wrongList = $('#wrong-list');
  const wrongCard = $('#wrong-list-card');
  const wrongAnswers = state.answers.filter(a => !a.isCorrect);

  if (wrongAnswers.length > 0) {
    wrongCard.style.display = 'block';
    const isGrammar = state.quizType === 'grammar';
    wrongList.innerHTML = wrongAnswers.map((a, i) => {
      if (isGrammar) {
        return `<div class="wrong-item" style="flex-direction:column;align-items:flex-start;gap:4px">
          <span style="font-size:13px;color:var(--text-secondary)">${i+1}. ${a.word.prompt}</span>
          <span style="font-size:16px;color:var(--success);font-weight:600">${a.word.answer[0]}</span>
          ${a.skipped
            ? '<span style="color:var(--warning);font-size:12px">跳过</span>'
            : `<span style="color:var(--danger);font-size:13px">你答：${a.userAnswer}</span>`
          }
        </div>`;
      }
      return `<div class="wrong-item">
        <span style="min-width:24px;color:var(--text-light)">${i+1}.</span>
        <span class="jp">${a.word.word}</span>
        <span class="arrow">→</span>
        <span class="meaning">${a.word.meaning}</span>
        ${a.skipped
          ? '<span style="color:var(--warning);font-size:12px">跳过</span>'
          : `<span class="your-answer">你答：${a.userAnswer}</span>`
        }
      </div>`;
    }).join('');
  } else {
    wrongCard.style.display = 'none';
  }

  // Retry wrong button
  const retryWrongBtn = $('#retry-wrong-btn');
  if (wrongAnswers.length > 0) {
    retryWrongBtn.style.display = 'block';
    retryWrongBtn.onclick = () => {
      state.quizWords = wrongAnswers.map(a => a.word);
      state.currentIndex = 0;
      state.answers = [];
      state.viewedFeedback = false;
      // Keep reviewMode from current session
      startQuiz();
    };
  } else {
    retryWrongBtn.style.display = 'none';
  }

  // Retry all
  $('#retry-all-btn').onclick = () => {
    if (state.quizType === 'grammar') {
      const filtered = filterGrammar();
      const count = Math.min(state.questionCount, filtered.length);
      state.quizWords = shuffle(filtered).slice(0, count);
      state.currentIndex = 0;
      state.answers = [];
      state.viewedFeedback = false;
      startQuiz();
    } else if (state.reviewMode) {
      startWrongReview();
    } else {
      const filtered = filterWords();
      const count = Math.min(state.questionCount, filtered.length);
      state.quizWords = shuffle(filtered).slice(0, count);
      state.currentIndex = 0;
      state.answers = [];
      state.viewedFeedback = false;
      startQuiz();
    }
  };

  // Home
  $('#home-btn').onclick = goHome;
}

function goHome() {
  showScreen('home-screen');
  switchQuizType(state.quizType);  // reset card visibility + subtitle
  updateAvailableCount();
  updateWrongReviewUI();
}

// ====== WRONG REVIEW UI ======
function updateWrongReviewUI() {
  const card = $('#wrong-review-card');
  const highFreq = getHighFreqWrongWords(1); // Show all wrong words
  const highFreq2 = getHighFreqWrongWords(2); // count >= 2 for review

  if (highFreq.length === 0) {
    // Empty state — show card but with hint
    $('#wrong-count').textContent = '0';
    $('#wrong-total').textContent = '完成练习后错词将出现在这里';
    $('#wrong-top').innerHTML = '<span style="color:var(--text-light);font-size:13px;">💡 练习中答错的词会自动收集，错2次以上可开启混合复习</span>';
    const reviewBtn = $('#review-wrong-btn');
    reviewBtn.textContent = '🔄 错题混合复习';
    reviewBtn.style.opacity = '0.5';
    reviewBtn.disabled = true;
    $('#clear-wrong-btn').style.display = 'none';
    return;
  }

  card.style.display = 'block';
  $('#clear-wrong-btn').style.display = '';

  // Count summary
  const totalErrors = highFreq.reduce((sum, w) => sum + w.wrongCount, 0);
  $('#wrong-count').textContent = highFreq2.length;
  $('#wrong-total').textContent = `累计出错 ${totalErrors} 次`;

  // Top 5 preview
  const top5 = highFreq.slice(0, 5);
  $('#wrong-top').innerHTML = top5.map(w =>
    `<span class="wrong-word-tag" title="错了${w.wrongCount}次">${w.word} ×${w.wrongCount}</span>`
  ).join('');

  // Enable/disable review button
  const reviewBtn = $('#review-wrong-btn');
  if (highFreq2.length === 0) {
    reviewBtn.textContent = '🔄 再错一次即可开启复习（需≥2次）';
    reviewBtn.style.opacity = '0.5';
    reviewBtn.disabled = true;
  } else {
    reviewBtn.textContent = `🔄 错题混合复习（${highFreq2.length}词）`;
    reviewBtn.style.opacity = '1';
    reviewBtn.disabled = false;
  }
}

function startWrongReview() {
  const highFreq = getHighFreqWrongWords(2);
  if (highFreq.length === 0) return;

  state.reviewMode = true;
  state.mode = 'cn2jp'; // default, will be overridden per question
  state.filteredWords = highFreq;
  const count = Math.min(20, highFreq.length);
  state.quizWords = shuffle(highFreq).slice(0, count);
  state.currentIndex = 0;
  state.answers = [];
  state.viewedFeedback = false;
  startQuiz();
}

// ====== EVENT LISTENERS ======
function initQuiz() {
  $('#submit-btn').addEventListener('click', checkAnswer);
  $('#skip-btn').addEventListener('click', skipQuestion);
  $('#next-btn').addEventListener('click', nextQuestion);
  $('#quit-btn').addEventListener('click', () => {
    if (state.answers.length > 0 && !confirm('确定要退出吗？当前进度将丢失。')) return;
    goHome();
  });

  // Keyboard: Enter to submit (avoid intercepting IME composition)
  $('#answer-input').addEventListener('keydown', (e) => {
    if (e.isComposing || e.keyCode === 229) return;  // IME 组合中，不拦截
    if (e.key === 'Enter') {
      e.preventDefault();
      if (state.viewedFeedback) {
        nextQuestion();
      } else {
        checkAnswer();
      }
    }
  });
}

// ====== SHAKE ANIMATION ======
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-8px); }
    50% { transform: translateX(8px); }
    75% { transform: translateX(-4px); }
  }
`;
document.head.appendChild(shakeStyle);

// ====== PWA: Register Service Worker ======
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {
      // SW might fail on file://, that's OK
    });
  });
}

// ====== BOOT ======
// ====== Theme Toggle ======
const THEME_KEY = 'japanese-quiz-theme';

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = $('#theme-toggle');
  if (btn) {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
    btn.setAttribute('title', theme === 'dark' ? '切换浅色模式' : '切换深色模式');
    btn.setAttribute('aria-label', btn.getAttribute('title'));
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
}

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  const theme = saved || getSystemTheme();
  applyTheme(theme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(THEME_KEY)) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  $('#theme-toggle').addEventListener('click', toggleTheme);

  initHome();
  initQuiz();
});
