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
