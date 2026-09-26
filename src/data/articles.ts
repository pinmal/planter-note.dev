/**
 * 全記事の正本（single source of truth）
 *
 * 背景: 記事一覧（/articles/）・ArticleLayout の関連記事・カテゴリページが
 * それぞれ独自のハードコード配列を持っていたため、16記事中6〜9記事しか
 * 参照されず、手書き sitemap.xml も10記事を取りこぼしていた（2026-09-22 監査）。
 * 記事を追加したらこのファイルだけを更新すれば全箇所に反映される。
 *
 * categories: そのカテゴリページに記事リンクとして載せたいカテゴリ（複数可）
 */

export type ArticleCategory =
  | 'planter'
  | 'soil'
  | 'fertilizer'
  | 'tools'
  | 'pest-control'
  | 'herb'
  | 'tomato'
  | 'summer-vege';

export interface Article {
  slug: string;
  /** 一覧カードで使う短いタイトル */
  cardTitle: string;
  /** カード用の説明文 */
  desc: string;
  emoji: string;
  /** カードに表示するタグ */
  tag: string;
  categories: ArticleCategory[];
  publishDate: string;
}

export const articles: Article[] = [
  {
    slug: 'negusar-genin',
    cardTitle: 'プランターで根腐れが起きる原因と対策',
    desc: '失敗ノートに「根腐れ」が32回出てきた。そのうち28回は底穴の問題だった。スリット鉢に変えただけで根腐れはゼロになった話。',
    emoji: '🪴',
    tag: 'プランター',
    categories: ['planter', 'soil'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'tsuchi-erabi',
    cardTitle: '格安の土で3年失敗して学んだ、土の選び方',
    desc: '最初の3年間に犯した失敗の半分は、格安の培養土を使い続けたことが根本原因だった。元肥・pH・バーク堆肥の3点で選ぶ。',
    emoji: '🌱',
    tag: '土・培養土',
    categories: ['soil', 'planter'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'ph-kanri',
    cardTitle: '肥料が効かない原因の28%はpH異常だった',
    desc: '肥料を十分与えているのに葉が黄色くなり続けた。pH計で測ったら5.2。苦土石灰で6.0に戻したら2週間で葉色が回復した話。',
    emoji: '🔬',
    tag: 'pH管理',
    categories: ['soil', 'fertilizer', 'tools'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'bougai-net',
    cardTitle: '防虫ネット1枚できゅうりの収穫が11本→147本になった',
    desc: '農薬ゼロの夏、きゅうりが11本しか収穫できなかった。翌年から防虫ネットを張ったら147本になった。端の密閉だけがコツ。',
    emoji: '🛡️',
    tag: '害虫対策',
    categories: ['pest-control', 'summer-vege'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'minitomato-sodatekata',
    cardTitle: '接ぎ木苗と支柱でミニトマトの収穫量が2倍になった',
    desc: '普通苗43個 vs 接ぎ木苗91個。同じ条件で2倍以上の差がついた理由と、支柱を定植後2週間以内に立てる理由。',
    emoji: '🍅',
    tag: 'ミニトマト',
    categories: ['tomato', 'summer-vege'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'nasu-sodatekata',
    cardTitle: 'なすの実がつかない原因——週次追肥記録で解決した方法',
    desc: '収穫が止まるたびに失敗ノートを開くと「追肥を飛ばした週」がある。週次追肥の習慣を作ってから1株68個収穫できた。',
    emoji: '🍆',
    tag: '夏野菜',
    categories: ['summer-vege', 'fertilizer'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'kyuuri-sodatekata',
    cardTitle: '摘芯を知ってからきゅうりの収穫が19本→83本になった',
    desc: 'きゅうりは親蔓を伸ばし続けても実がつかない。5節摘芯で子蔓を増やす管理を覚えてから年間収穫数が4倍を超えた記録。',
    emoji: '🥒',
    tag: '夏野菜',
    categories: ['summer-vege', 'pest-control'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'purantar-erabi',
    cardTitle: 'スリット鉢に変えてから根腐れがゼロになった',
    desc: '底穴1個の安いプランターを使っていた3年間、根腐れが毎年繰り返された。スリット型と深さ30cm以上の確保だけで解決した。',
    emoji: '🪣',
    tag: 'プランター',
    categories: ['planter'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'mizuyari-kihon',
    cardTitle: '毎朝の水やりに変えてから根腐れと枯れが同時に減った',
    desc: '「土が乾いたら水をやる」は正しいが夏の午後は根が傷む。朝の水やり・指の2節チェック・底穴確認の3点に絞った記録。',
    emoji: '💧',
    tag: '水やり',
    categories: ['soil', 'tools', 'planter'],
    publishDate: '2026-09-03',
  },
  {
    slug: 'hiryou-tsuihi',
    cardTitle: '肥料切れサインを見逃し続けた記録と、週1液肥で解決した話',
    desc: '追肥のタイミングを感覚に頼っていた頃、気づくのはいつも手遅れだった。週1回の水やりに液肥を混ぜる習慣で解決した。',
    emoji: '💊',
    tag: '肥料・追肥',
    categories: ['fertilizer', 'tomato', 'summer-vege'],
    publishDate: '2026-09-17',
  },
  {
    slug: 'piiman-sodatekata',
    cardTitle: '更新剪定を知らなかった4年間と、54個収穫できた年の記録',
    desc: 'ピーマンは8月の更新剪定と2週間追肥のリズムを覚えるまで「9個」という記録が4年続いた。切り戻した翌月に株が再生した。',
    emoji: '🫑',
    tag: '夏野菜',
    categories: ['summer-vege'],
    publishDate: '2026-09-17',
  },
  {
    slug: 'okura-sodatekata',
    cardTitle: '収穫を逃して固くなったオクラと、毎日確認するようになった話',
    desc: 'オクラは収穫を1日逃すと固くなって食べられなくなる。7〜8cmで取り続けることで真夏の2ヶ月間収穫が続いた記録。',
    emoji: '🌼',
    tag: '夏野菜',
    categories: ['summer-vege'],
    publishDate: '2026-09-17',
  },
  {
    slug: 'basil-sodatekata',
    cardTitle: 'バジルを苗から始めた最初の年と、種から始めた翌年の違い',
    desc: '苗1株400〜600円だが種からなら同じ金額で20〜30株。摘芯と花芽管理を覚えてから9月まで葉を取り続けられるようになった。',
    emoji: '🌿',
    tag: 'ハーブ',
    categories: ['herb'],
    publishDate: '2026-09-17',
  },
  {
    slug: 'ohba-shiso-sodatekata',
    cardTitle: '大葉は摘心を覚えた2年目に収穫量が変わった',
    desc: '大葉は摘心しないと縦に伸びるだけで葉が硬くなる。本葉8〜10枚で先端を摘み、花穂を切り続けると9月以降も収穫が続く。',
    emoji: '🍃',
    tag: 'ハーブ',
    categories: ['herb'],
    publishDate: '2026-09-22',
  },
  {
    slug: 'aburamushi-taisaku',
    cardTitle: '定植時から防虫ネットをかけるようになったアブラムシ対策',
    desc: 'アブラムシは発見したときにはすでに繁殖している。定植時からの予防を覚えてからスプレーの出番がほぼなくなった。',
    emoji: '🐞',
    tag: '害虫対策',
    categories: ['pest-control', 'herb'],
    publishDate: '2026-09-22',
  },
  {
    slug: 'horenso-komatsuna-aki',
    cardTitle: 'ほうれん草・小松菜の秋まき——pH調整を知る前と知った後',
    desc: 'ほうれん草は酸性土壌では育たない。苦土石灰でpH6.0以上に調整してから播く。小松菜は秋の最初の練習に向いている。',
    emoji: '🥬',
    tag: '秋野菜',
    categories: ['soil', 'tools'],
    publishDate: '2026-09-22',
  },
  {
    slug: 'ichigo-sodatekata',
    cardTitle: 'イチゴのプランター栽培——秋に植えて翌春47粒収穫した記録',
    desc: '春植えで3粒しか取れなかった最初の年。秋植えと花芽管理を知った翌年に47粒収穫できた理由を記録する。',
    emoji: '🍓',
    tag: 'プランター',
    categories: ['planter', 'fertilizer'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'mint-sodatekata',
    cardTitle: 'ミントは単独鉢が絶対条件——バジルと一緒に植えた失敗の記録',
    desc: 'バジルとミントを同じプランターに植えた翌月、バジルが消えていた。繁殖力を逆手に取れば2年間収穫し続けられる。',
    emoji: '🌿',
    tag: 'ハーブ',
    categories: ['herb'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'broccoli-sodatekata',
    cardTitle: 'ブロッコリーの側花蕾を知らなかった最初の秋と、3ヶ月収穫し続けた年の記録',
    desc: '頂花蕾を収穫してそれで終わりと思っていた。側花蕾を取り続けると10月から12月まで収穫が続くことを3年目に知った。',
    emoji: '🥦',
    tag: '秋野菜',
    categories: ['soil', 'fertilizer'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'lettuce-sodatekata',
    cardTitle: 'レタスは外葉から取り続けると1株から3ヶ月収穫できる',
    desc: '結球を待って一度に収穫しようとした最初の年、半分以上が花芽になって終わった。外葉収穫法を知ってから3ヶ月使い続けられるようになった。',
    emoji: '🥗',
    tag: '秋野菜',
    categories: ['soil', 'pest-control'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'komanegi-sodatekata',
    cardTitle: '小ネギは切り戻しを繰り返すと1株から4ヶ月収穫が続く',
    desc: 'スーパーで買った根つきの小ネギを植えたら再生した。種から育てると5〜6回切り戻しながら4ヶ月間収穫できる。',
    emoji: '🌱',
    tag: '秋野菜',
    categories: ['soil', 'tools'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'gooya-sodatekata',
    cardTitle: 'ゴーヤを初めて育てた夏——グリーンカーテンで室温が2℃下がった記録',
    desc: '最初の年は苦みが強すぎて家族に不評だった。品種を変えたら同じ育て方でも全然違う味になり、グリーンカーテンで室温が2℃下がった記録。',
    emoji: '🫑',
    tag: '夏野菜',
    categories: ['summer-vege'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'papurika-sodatekata',
    cardTitle: 'パプリカが赤くなるまで3ヶ月——ピーマンと同じに育てて失敗した年の記録',
    desc: '緑のまま摘んでしまった最初の年。着色完了まで3ヶ月かかると知ってから、9月に真っ赤なパプリカが収穫できた。',
    emoji: '🫑',
    tag: '夏野菜',
    categories: ['summer-vege', 'fertilizer'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'edamame-sodatekata',
    cardTitle: '収穫直後のエダマメを食べてから、スーパーで買えなくなった記録',
    desc: '採れたての甘さはスーパーで再現できない。収穫後に糖がデンプンに変わる前に食べる体験は、自分で育てないと得られない。',
    emoji: '🌿',
    tag: '夏野菜',
    categories: ['summer-vege'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'tsuchi-saiyo',
    cardTitle: '使い終えた土を毎年捨てていた5年間——土の再生方法を知ってからの変化',
    desc: '年間1万円以上かけて土を買い替えていた頃。ふるい・日光消毒・再生材の3ステップで同じ土を5年以上使い続けられる。',
    emoji: '🌱',
    tag: '土管理',
    categories: ['soil'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'nichijo-dougu',
    cardTitle: '最初の1シーズンで壊れた道具と、今も使い続けている道具の話',
    desc: '100円の道具を何度も買い替えた年と、3年目に揃えた道具が今も現役の記録。最初に揃えるべき3点と選び方。',
    emoji: '🔧',
    tag: '道具',
    categories: ['tools'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'snap-endou-sodatekata',
    cardTitle: 'スナップエンドウは春の入門野菜——4月の収穫まで手がかからなかった記録',
    desc: '種まきから50日で収穫できる春野菜の入門種。連作さえ避ければ毎年楽しめる。プランターで失敗しにくい育て方の記録。',
    emoji: '🫛',
    tag: '春野菜',
    categories: ['summer-vege'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'hatsuka-daikon-sodatekata',
    cardTitle: 'ハツカダイコンは20日で収穫できる——間引きをケチって0本だった記録',
    desc: '最短20日で収穫できるが、間引きを怠ると根が太らない。失敗した最初の年と、間引きを徹底した翌年の違いを記録する。',
    emoji: '🌱',
    tag: '春野菜',
    categories: ['summer-vege', 'soil'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'parsley-sodatekata',
    cardTitle: 'パセリの発芽は2〜3週間かかる——苗から始めた翌年の記録',
    desc: '種まきから発芽まで時間がかかるパセリ。2度の種まき失敗を経て苗から安定した。半日陰でも育つ特性と長く使い続ける管理法。',
    emoji: '🌿',
    tag: 'ハーブ',
    categories: ['herb'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'mitsuba-shungiku-sodatekata',
    cardTitle: '三つ葉と春菊は半日陰が向いている——日当たり不要のプランター野菜',
    desc: '日当たりが悪い場所でも育てられる野菜がある。三つ葉は半日陰・湿り気が適地で、春菊は秋まきが正解。日陰ベランダの活用記録。',
    emoji: '🌿',
    tag: 'ハーブ',
    categories: ['herb', 'soil'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'byoki-taisaku',
    cardTitle: 'プランターで出やすい病気3種と、早期発見で被害を最小にした記録',
    desc: 'うどんこ病・炭疽病・疫病の初期症状と対処法。発見が遅れると手遅れになる前に、毎朝5分の観察習慣で被害が減った記録。',
    emoji: '🍃',
    tag: '病害虫',
    categories: ['pest-control'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'hajimete-purantar',
    cardTitle: 'プランター菜園を始める前に決めておくべきことの記録',
    desc: '最初から全部揃えて後悔した年と、最小限で始めてから徐々に広げた年の違い。置き場所・野菜の選び方・最初の優先順位。',
    emoji: '🌿',
    tag: 'はじめ方',
    categories: ['planter', 'soil'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'shippai-kiroku',
    cardTitle: '12年分の失敗ノートから選んだ、繰り返さなかった失敗と繰り返した失敗',
    desc: '記録すれば防げる失敗と、記録しても繰り返す失敗がある。6冊のノートから見えたパターンと、最低限の書き方。',
    emoji: '📓',
    tag: '記録・ノート',
    categories: ['tools'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'basho-erabi',
    cardTitle: 'プランターの置き場所を変えたら収穫量が変わった記録',
    desc: '同じ野菜・同じ管理でも置き場所で収穫量が変わる。日当たり・風通し・地面との距離で置き場所を最適化した記録。',
    emoji: '☀️',
    tag: 'プランター管理',
    categories: ['planter'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'rentou-shogai',
    cardTitle: '連作障害を知らなかった4年間と、ローテーション管理で収穫が戻った記録',
    desc: '4年間同じプランターにトマトを植え続けて失敗した年。ローテーション表をつくった翌年から収穫が戻った記録と科ごとの目安年数。',
    emoji: '🔄',
    tag: '連作対策',
    categories: ['soil', 'planter'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'natsu-kanri',
    cardTitle: '真夏のプランター管理——水切れと熱が一番の敵だった記録',
    desc: '夏は水切れ・地温上昇・蒸れが同時発生する最難関の季節。朝夕2回の水やりに変えてから3プランター枯らした失敗がなくなった。',
    emoji: '🌞',
    tag: '夏管理',
    categories: ['planter', 'fertilizer'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'fuyugoshi',
    cardTitle: '冬越し野菜の選び方と、プランターを空にしない12月の記録',
    desc: '冬は収穫できないと思っていた4年間。小松菜・ほうれん草・ブロッコリー脇芽を選べば12月でも収穫できる。不織布の保温効果と冬管理の記録。',
    emoji: '❄️',
    tag: '冬管理',
    categories: ['soil', 'pest-control'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'tane-sodatekata',
    cardTitle: '種から育てると何が変わるか——苗購入との違いを記録した8年分',
    desc: '種まきと苗購入のコスト・失敗率・達成感の違いを8年分の記録から比較。種が向く野菜と苗から始めるべき野菜の見極め方。',
    emoji: '🌱',
    tag: '種まき',
    categories: ['planter', 'soil'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'mizuyari-taihitsu',
    cardTitle: '水やりを毎日から朝夕2回に変えた夏と、自動化を試みた記録',
    desc: '朝1回の水やりで夏を乗り切ろうとして失敗した年。朝夕2回に変えた翌年の記録と、自動水やり器を試みた結果の内訳。',
    emoji: '💧',
    tag: '水やり管理',
    categories: ['tools', 'planter'],
    publishDate: '2026-09-26',
  },
  {
    slug: 'ichinen-keikaku',
    cardTitle: '1年間のプランター菜園を計画するときに決める4つのことの記録',
    desc: '毎年2月にA4一枚で計画表を作る習慣を始めてから失敗数が半分以下になった。育てる野菜・置き場所・連作チェック・予算の4つだけ決める。',
    emoji: '📋',
    tag: '年間計画',
    categories: ['tools'],
    publishDate: '2026-09-26',
  },
];

/** 公開日の新しい順 */
export const articlesByDate = [...articles].sort((a, b) =>
  b.publishDate.localeCompare(a.publishDate)
);

/** 指定カテゴリに属する記事を返す */
export function articlesInCategory(category: ArticleCategory): Article[] {
  return articles.filter((a) => a.categories.includes(category));
}

/** 指定slug以外からn件返す（関連記事用・slugをseedに分散させる） */
export function relatedArticles(slug: string, n = 3): Article[] {
  const others = articles.filter((a) => a.slug !== slug);
  const seed = slug.length % Math.max(others.length, 1);
  return [...others.slice(seed), ...others.slice(0, seed)].slice(0, n);
}

export const articleHref = (slug: string) => `/articles/${slug}/`;
