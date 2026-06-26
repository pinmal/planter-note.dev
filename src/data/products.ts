/**
 * 商品DB — planter-note.dev
 *
 * Amazon Tracking ID: planter-note-22（要: Amazon Associates サイト追加申請後に有効化）
 * 楽天アフィリエイト: Phase 2 追加予定（RAKUTEN_ID は申請後に設定）
 *
 * shopComment ルール（spec §6）:
 * - 増田博之の言葉（穏やかな父親目線・品質管理思考）
 * - 弱点を1つ正直に記載（「ただし〜」形式）
 * - 医療・健康効果の断言は一切しない
 */

export type ProductCategory =
  | 'planter'
  | 'soil'
  | 'fertilizer'
  | 'tools'
  | 'pest-control'
  | 'herb'
  | 'tomato'
  | 'summer-vege'
  | 'record';

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  shopComment: string;
  asin?: string;
  searchKeyword?: string;
  rakutenKeyword?: string;
};

// Amazon Associates サイト追加承認後に有効化 → Associates Central でトラッキングID確認
const AMAZON_TAG = 'planter-note-22';

// 楽天アフィリエイト Phase 2 追加予定（承認後に設定）
// const RAKUTEN_ID = '';

export function buildAmazonUrl(p: Product): string | undefined {
  if (p.asin) {
    return `https://www.amazon.co.jp/dp/${p.asin}?tag=${AMAZON_TAG}`;
  }
  if (p.searchKeyword) {
    const k = encodeURIComponent(p.searchKeyword);
    return `https://www.amazon.co.jp/s?k=${k}&tag=${AMAZON_TAG}`;
  }
  return undefined;
}

export function buildRakutenUrl(p: Product): string | undefined {
  // Phase 2: 楽天アフィリID取得後に有効化
  return undefined;
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export const products: Product[] = [

  // ─── プランター
  {
    id: 'planter-slit-pot',
    name: 'スリット鉢（6〜8号・底穴大型）',
    category: 'planter',
    shopComment:
      '失敗ノートに「根腐れ」が一番多かった。底穴が小さいプランターは排水に難があり、スリット型に変えてから根腐れが激減しました。ただし、ベランダでは強風時に軽くて倒れやすいので、支柱か受け皿で固定をおすすめします。',
    searchKeyword: 'スリット鉢 プランター 6号',
  },
  {
    id: 'planter-deep-60',
    name: '深型プランター 60cm（野菜用）',
    category: 'planter',
    shopComment:
      'なす・きゅうりのような根が深い野菜には、最低でも深さ30cm以上が必要です。品質管理の仕事と同じで「容量規格を守る」ことが安定収穫の基本。ただし、土が多くなるので重さが20kgを超えることもあります。移動しない場所に置いてから土を入れてください。',
    searchKeyword: '深型プランター 60cm 野菜',
  },
  {
    id: 'planter-round-herb',
    name: '丸型プランター（ハーブ・花用・直径25cm）',
    category: 'planter',
    shopComment:
      'バジルやミントはこのサイズで十分です。複数株育てたいときも、横に並べる方が根の競争なく育ちます。ただし陶器製は重いので、ベランダ荷重が気になる場合はプラスチック製を選んでください。',
    searchKeyword: '丸型プランター ハーブ 25cm',
  },

  // ─── 土・培養土
  {
    id: 'soil-veggie-25l',
    name: '野菜用培養土 25L（元肥入り）',
    category: 'soil',
    shopComment:
      '園芸店で一番聞かれる質問が「どの土を使えばいいか」です。元肥入りのものは最初の1〜2ヶ月は追肥なしで育てられるので、初心者には特におすすめです。ただし、密閉保存しないとコバエが発生しやすいので、余った土はジップ付き袋に入れてください。',
    searchKeyword: '野菜用培養土 25L 元肥入り',
  },
  {
    id: 'soil-organic-bark',
    name: '有機培養土（バーク堆肥入り・14L）',
    category: 'soil',
    shopComment:
      '失敗ノート2冊目に書いた「土が固まって水が弾く」問題を解決したのが、バーク堆肥入りの培養土でした。通気性が良く、根が伸びやすい。ただし、価格は一般的な培養土より1.5倍ほど高いので、トマトやなすなど長期栽培の野菜に優先して使うのがコツです。',
    searchKeyword: '有機培養土 バーク堆肥 プランター',
  },
  {
    id: 'soil-ph-adjuster',
    name: '苦土石灰（pH調整剤・1kg）',
    category: 'soil',
    shopComment:
      '野菜がうまく育たない原因の3割は土のpHが合っていないことです。市販の培養土は最初からpH調整済みのものが多いですが、2年目以降の古い土には必ず一度チェックと調整を。ただし、石灰を入れすぎるとpHが上がりすぎるので、pH計で計りながら少量ずつ混ぜてください。',
    searchKeyword: '苦土石灰 pH調整 家庭菜園',
  },

  // ─── 肥料
  {
    id: 'fertilizer-kagaku',
    name: '化成肥料 8-8-8（1kg）',
    category: 'fertilizer',
    shopComment:
      '三大要素（N：葉・P：実・K：根）が均等に入っている基本の肥料です。品質管理で言えば「標準品」にあたります。どれを選べばいいかわからないときはまずこれ。ただし、液肥と比べて即効性がないので、肥料切れのサインが出てから与えても効果が出るまで数日かかります。',
    searchKeyword: '化成肥料 8-8-8 家庭菜園',
  },
  {
    id: 'fertilizer-organic',
    name: '骨粉入り有機肥料（1kg）',
    category: 'fertilizer',
    shopComment:
      '実をしっかり付けたいトマトやなすには、りん酸が多い骨粉入りがよく合います。土の中の微生物も元気になり、土質改善の効果も期待できます。ただし、においが強いので室内・ベランダでの使用はご注意ください。施肥後は土に軽く混ぜ込んでください。',
    searchKeyword: '骨粉入り有機肥料 家庭菜園',
  },
  {
    id: 'fertilizer-liquid',
    name: 'ハイポネックス 液体肥料 原液（800ml）',
    category: 'fertilizer',
    shopComment:
      '即効性が欲しいときの定番です。水やりと同時に与えられる手軽さが気に入っています。希釈倍率を守ることが大切で、濃すぎると根が傷みます（失敗ノート3冊目に記録済み）。開封後は直射日光の当たらない涼しい場所で保管してください。',
    asin: 'B001DBXNPK',
  },

  // ─── 道具
  {
    id: 'tools-jouro',
    name: 'ジョウロ 5L（ハス口・シャワー付き）',
    category: 'tools',
    shopComment:
      '水の出方が細かいシャワータイプを選ぶと、種まき後の土の表面を崩さずに水やりができます。5Lサイズは一度に複数のプランターに水やりできてちょうど良い。ただし、満水にすると重さが5kgになりますので、腰への負担が気になる方は3L以下を選ぶほうが楽です。',
    searchKeyword: 'ジョウロ 5L ハス口 シャワー',
  },
  {
    id: 'tools-trowel',
    name: '移植ゴテ（ステンレス製・目盛り付き）',
    category: 'tools',
    shopComment:
      '安いものは何度か使うと刃が曲がります。ステンレス製の目盛り付きを選べば、球根の植え付け深さも正確に測れます。品質管理で言えば「測定ツールは精度が命」です。ただし重さがあるので、長時間作業には疲れることもあります。',
    searchKeyword: '移植ゴテ ステンレス 目盛り付き',
  },
  {
    id: 'tools-gloves',
    name: 'ガーデニング手袋（女性・男性兼用）',
    category: 'tools',
    shopComment:
      '土仕事で爪の中に入った土は落としにくく、切り傷からの感染も気になります。薄手のコーティングタイプは細かい作業がしやすく、植え替えにも使いやすい。ただし、水に濡れると乾きにくいので、複数枚持って使い回すのがおすすめです。',
    searchKeyword: 'ガーデニング手袋 薄手 コーティング',
  },
  {
    id: 'tools-ph-meter',
    name: '土壌pH計（デジタル・プランター用）',
    category: 'tools',
    shopComment:
      '失敗ノート4冊目に「なぜ育たないか」を10項目にまとめたとき、pH異常が3番目に多い原因でした。デジタル式は読み取りが明確で、品質管理の現場で言う「数値で判断する」文化に合っています。ただし、水に濡れたまま放置すると壊れやすいので、使用後は拭いて保管してください。',
    searchKeyword: '土壌pH計 デジタル プランター',
  },
  {
    id: 'tools-moisture-meter',
    name: '土壌水分計（プランター・室内向け）',
    category: 'tools',
    shopComment:
      '水やりのタイミングを「感覚」ではなく「数値」で判断できます。特に室内栽培やベランダ栽培では、過湿による根腐れが見えにくいため、このツールが早期発見に役立ちます。ただし、電池交換が必要なものは消耗品コストがかかるので、電池不要の簡易タイプから始めるのも手です。',
    searchKeyword: '土壌水分計 プランター 家庭菜園',
  },

  // ─── 害虫・病気対策
  {
    id: 'pest-net',
    name: '防虫ネット（1.5m×5m・目合い0.4mm）',
    category: 'pest-control',
    shopComment:
      '農薬を使いたくないと言う方に必ず勧めるのが防虫ネットです。目合い0.4mmはアブラムシ・コナジラミも防げます。ただし、支柱との固定が甘いと隙間から虫が入るので、周囲をしっかり密閉することが大切です（ここが一番のコツです）。',
    searchKeyword: '防虫ネット 0.4mm 家庭菜園',
  },
  {
    id: 'pest-spray',
    name: '家庭菜園用 殺虫スプレー（収穫前日まで使用可）',
    category: 'pest-control',
    shopComment:
      '被害が広がってしまったときの最後の手段として常備しています。「収穫前日まで使用可」の表示があるものを必ず選んでください。成分によって使える作物が決まっているので、ラベルの適用作物欄を必ず確認することが大事です。',
    searchKeyword: '家庭菜園 殺虫剤 収穫前日 スプレー',
  },
  {
    id: 'pest-copper',
    name: '銅製防除テープ（ナメクジ・害虫忌避）',
    category: 'pest-control',
    shopComment:
      'ナメクジの被害が多い梅雨時期に効果的です。プランターの縁に貼るだけで農薬を使わずに忌避できます。ただし、雨で銅が流れるので定期的な貼り替えが必要です。即効性はなく、あくまで予防効果として位置付けてください。',
    searchKeyword: '銅製テープ ナメクジ 忌避 プランター',
  },

  // ─── ハーブ
  {
    id: 'herb-basil-seed',
    name: 'バジル 種（家庭菜園・プランター向け）',
    category: 'herb',
    shopComment:
      '種からのバジルは苗より安く、播種から2ヶ月で収穫できます。20℃以上になってから播くのが発芽率を上げるコツです。ただし、気温が下がるとすぐに枯れるので、秋以降は室内に取り込むか早めに収穫してソースにしておくのがおすすめです。',
    searchKeyword: 'バジル 種 家庭菜園 プランター',
  },
  {
    id: 'herb-shiso-seed',
    name: '大葉（シソ）種（一袋）',
    category: 'herb',
    shopComment:
      '夏の薬味として毎年育てています。シソは半日陰でも育つので、ベランダの日当たりが弱い場所にも向いています。ただし、水が切れると葉が固くなるので、夏場は朝晩の水やりが基本です。大きくなったら下葉から順に収穫すると長く使えます。',
    searchKeyword: '大葉 シソ 種 家庭菜園',
  },
  {
    id: 'herb-mint-plant',
    name: 'ミント 苗（スペアミント・ペパーミント）',
    category: 'herb',
    shopComment:
      'ミントは繁殖力が強いので、必ず単独プランターで育ててください。他の野菜と一緒に植えると根が広がって占領します（失敗ノート1冊目の教訓）。ただし、その強さを生かして次々と収穫できるのが魅力で、育て始めると止まらなくなります。',
    searchKeyword: 'ミント 苗 プランター スペアミント',
  },

  // ─── ミニトマト
  {
    id: 'tomato-mini-plant',
    name: 'ミニトマト 苗（アイコ・千果・大量生産タイプ）',
    category: 'tomato',
    shopComment:
      '接ぎ木苗を選ぶと病気への抵抗力が高くなります。初心者には「アイコ」や「千果」が育てやすく、着果数も多いのでおすすめです。ただし、苗の定植が早すぎると霜にやられるので、ゴールデンウィーク前後が目安です。',
    searchKeyword: 'ミニトマト 苗 アイコ 接ぎ木',
  },
  {
    id: 'tomato-support',
    name: '支柱セット（180cm・4本組）',
    category: 'tomato',
    shopComment:
      'ミニトマトは放置すると2mを超えます。早めの支柱立てが倒伏を防ぐ基本で、品質管理で言えば「予防保全」の考え方です。ただし、ベランダの防水シートを傷つけないよう、シートへの直接差しは避け、専用の受け皿やスタンドを使ってください。',
    searchKeyword: '支柱 180cm トマト 家庭菜園',
  },
  {
    id: 'tomato-clip',
    name: '誘引クリップ（トマト・きゅうり兼用）',
    category: 'tomato',
    shopComment:
      '麻ひもで縛ると茎が傷つくことがあります。クリップ式は着脱がかんたんで繰り返し使えて経済的です。ただし、茎が太くなると挟みにくくなるので、成長に合わせて大きめのサイズに替えることをおすすめします。',
    searchKeyword: '誘引クリップ トマト きゅうり 支柱',
  },

  // ─── 夏野菜
  {
    id: 'summer-eggplant',
    name: 'なす 苗（千両二号・長なす）',
    category: 'summer-vege',
    shopComment:
      'なすは肥料と水を切らさないことが最大のポイントです。「肥料切れ」のサインは葉の色が薄くなること。失敗ノートに何度も書いたのですが、2週間に一度の追肥を守ると安定して収穫できます。ただし、プランターでは最低でも30L以上の大型コンテナが必要です。',
    searchKeyword: 'なす 苗 千両二号 家庭菜園',
  },
  {
    id: 'summer-cucumber',
    name: 'きゅうり 苗（シャキット・フリーダム）',
    category: 'summer-vege',
    shopComment:
      '家庭菜園で最も収穫ペースが速い野菜がきゅうりです。放置すると大きくなりすぎて皮が固くなるので、15〜20cmで収穫するのが美味しく食べるコツです。ただし成長が早い分、肥料切れも早いので週に一度の水やり時に液肥を一緒に与えるとよいです。',
    searchKeyword: 'きゅうり 苗 シャキット 家庭菜園',
  },

  // ─── 記録グッズ
  {
    id: 'record-garden-notebook',
    name: 'ガーデニング日記帳（B6・栽培記録用）',
    category: 'record',
    shopComment:
      '私が失敗ノートを始めたきっかけが、同じ失敗を毎年繰り返していたことでした。「去年どうだったか」を記録しておくだけで、種まきの時期・肥料の量・害虫の発生時期がわかります。ただし、続けることが大切なので、細かく書こうとせず「日付・天気・気づき1行」から始めることをおすすめします。',
    searchKeyword: 'ガーデニング 日記 手帳 家庭菜園 記録',
  },
  {
    id: 'record-label',
    name: '園芸ラベル（差し込み型・書き直し可）',
    category: 'record',
    shopComment:
      '複数の品種を育てると、どれがどれかわからなくなります（失敗ノート2冊目の定番ミス）。鉛筆で書けるタイプは消して書き直せるので、1シーズン通して使い回せます。ただし、紫外線で文字が消えやすいので、油性ペンを使う場合は耐光性のものを選んでください。',
    searchKeyword: '園芸ラベル 差し込み 書き直し 家庭菜園',
  },
];
