/* ================================================================
   日语单词练习 App — 新标准日本语 第1~5课
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
];

// ====== APP STATE ======
const state = {
  mode: 'cn2jp',
  selectedLessons: new Set([1,2,3,4,5]),
  selectedCategories: new Set(),
  questionCount: 20,
  filteredWords: [],
  quizWords: [],
  currentIndex: 0,
  answers: [],
  viewedFeedback: false,
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
  const filtered = filterWords();
  $('#total-words').textContent = filtered.length;
}

function filterWords() {
  return WORDS.filter(w =>
    state.selectedLessons.has(w.lesson) &&
    state.selectedCategories.has(w.category)
  );
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
function initHome() {
  buildCategoryUI();
  updateAvailableCount();

  // Mode toggle
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
    [1,2,3,4,5].forEach(l => state.selectedLessons.add(l));
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
    const filtered = filterWords();
    if (filtered.length === 0) {
      alert('请至少选择一个课程和一个类别！');
      return;
    }
    if (state.selectedLessons.size === 0) {
      alert('请至少选择一个课程！');
      return;
    }
    state.filteredWords = filtered;
    const count = Math.min(state.questionCount, filtered.length);
    state.quizWords = shuffle(filtered).slice(0, count);
    state.currentIndex = 0;
    state.answers = [];
    state.viewedFeedback = false;
    startQuiz();
  });
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

  // Progress
  $('#progress-fill').style.width = `${(state.currentIndex / total) * 100}%`;
  $('#progress-text').textContent = `${idx}/${total}`;

  // Mode badge
  if (state.mode === 'cn2jp') {
    $('#mode-badge').textContent = '🇨🇳 → 🇯🇵  看中文打日文';
  } else {
    $('#mode-badge').textContent = '🇯🇵 → 🇨🇳  看日文打中文';
  }

  // Question
  if (state.mode === 'cn2jp') {
    $('#question-label').textContent = '请写出对应的日文';
    $('#question-word').textContent = q.meaning;
    $('#question-hint').textContent = '（可用假名或汉字假名混合）';
  } else {
    $('#question-label').textContent = '请写出对应的中文意思';
    $('#question-word').textContent = q.word;
    $('#question-hint').textContent = q.word !== q.kana ? `（${q.kana}）` : '';
  }

  // Reset
  const input = $('#answer-input');
  input.value = '';
  input.className = 'answer-input';
  input.focus();
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

  if (state.mode === 'cn2jp') {
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

  state.viewedFeedback = true;
  showFeedback(isCorrect, q);
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

function showFeedback(isCorrect, q) {
  const fb = $('#feedback');
  fb.style.display = 'block';
  fb.className = 'feedback ' + (isCorrect ? 'correct' : 'wrong');

  // Hide input & submit
  $('#answer-input').style.display = 'none';
  $('#submit-btn').style.display = 'none';
  $('#skip-btn').style.display = 'none';

  if (isCorrect) {
    $('#feedback-icon').textContent = '✅';
    $('#feedback-text').textContent = '正确！';
    $('#feedback-answer').innerHTML = '';
  } else {
    $('#feedback-icon').textContent = '❌';
    $('#feedback-text').textContent = '回答错误';

    if (state.mode === 'cn2jp') {
      $('#feedback-answer').innerHTML = `
        正确答案：<span class="correct-answer">${q.word}</span>
        ${q.word !== q.kana ? `（${q.kana}）` : ''}
        <br>你写的：${q.userAnswer || '（空）'}
      `;
    } else {
      $('#feedback-answer').innerHTML = `
        正确答案：<span class="correct-answer">${q.meaning}</span>
        <br>你写的：${q.userAnswer || '（空）'}
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

  if (state.mode === 'cn2jp') {
    $('#feedback-answer').innerHTML = `
      正确答案：<span class="correct-answer">${q.word}</span>
      ${q.word !== q.kana ? `（${q.kana}）` : ''}
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
    wrongList.innerHTML = wrongAnswers.map((a, i) => `
      <div class="wrong-item">
        <span style="min-width:24px;color:var(--text-light)">${i+1}.</span>
        <span class="jp">${a.word.word}</span>
        <span class="arrow">→</span>
        <span class="meaning">${a.word.meaning}</span>
        ${a.skipped
          ? '<span style="color:var(--warning);font-size:12px">跳过</span>'
          : `<span class="your-answer">你答：${a.userAnswer}</span>`
        }
      </div>
    `).join('');
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
      startQuiz();
    };
  } else {
    retryWrongBtn.style.display = 'none';
  }

  // Retry all
  $('#retry-all-btn').onclick = () => {
    const filtered = filterWords();
    const count = Math.min(state.questionCount, filtered.length);
    state.quizWords = shuffle(filtered).slice(0, count);
    state.currentIndex = 0;
    state.answers = [];
    state.viewedFeedback = false;
    startQuiz();
  };

  // Home
  $('#home-btn').onclick = goHome;
}

function goHome() {
  showScreen('home-screen');
  updateAvailableCount();
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

  // Keyboard: Enter to submit
  $('#answer-input').addEventListener('keydown', (e) => {
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
document.addEventListener('DOMContentLoaded', () => {
  initHome();
  initQuiz();
});
