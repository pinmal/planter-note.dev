/**
 * 記事一覧（/articles/）の「目的別」分類。
 * 記事を追加したら、ここの slugs に追記する。載せ忘れた記事は
 * 一覧ページ側で「その他」にまとめて表示されるので、記事が消えることはない。
 */
export interface ArticleSubGroup {
  label: string;
  slugs: string[];
}
export interface ArticleGroup {
  id: string;
  emoji: string;
  title: string;
  /** 「こんなときに」の一言 */
  lead: string;
  subs: ArticleSubGroup[];
}

export const articleGroups: ArticleGroup[] = [
  {
    id: 'start',
    emoji: '🌱',
    title: 'はじめる・準備する',
    lead: 'これから始める人、道具・土・置き場所を決めたい人へ',
    subs: [
      {
        label: '',
        slugs: [
          'hajimete-purantar', 'purantar-erabi', 'tsuchi-erabi', 'basho-erabi',
          'tane-sodatekata', 'ichinen-keikaku', 'nichijo-dougu',
        ],
      },
    ],
  },
  {
    id: 'trouble',
    emoji: '🛠️',
    title: '困ったときに（原因と対策）',
    lead: '根腐れ・葉が黄色い・虫や病気・連作障害など、うまくいかないとき',
    subs: [
      {
        label: '',
        slugs: [
          'negusar-genin', 'ph-kanri', 'byoki-taisaku', 'aburamushi-taisaku',
          'bougai-net', 'rentou-shogai', 'shippai-kiroku',
        ],
      },
    ],
  },
  {
    id: 'care',
    emoji: '💧',
    title: '毎日の世話（水・肥料・土・季節）',
    lead: '水やり、追肥、土の再利用、夏と冬の管理',
    subs: [
      {
        label: '',
        slugs: [
          'mizuyari-kihon', 'mizuyari-taihitsu', 'hiryou-tsuihi', 'tsuchi-saiyo',
          'natsu-kanri', 'fuyugoshi',
        ],
      },
    ],
  },
  {
    id: 'veg',
    emoji: '🥕',
    title: '野菜・ハーブ別の育て方',
    lead: '育てたい野菜の名前から探す',
    subs: [
      {
        label: '夏野菜（実もの）',
        slugs: [
          'minitomato-sodatekata', 'nasu-sodatekata', 'kyuuri-sodatekata',
          'piiman-sodatekata', 'papurika-sodatekata', 'okura-sodatekata',
          'gooya-sodatekata', 'zukkini-sodatekata', 'edamame-sodatekata',
          'toumorokoshi-sodatekata', 'ichigo-sodatekata',
        ],
      },
      {
        label: '葉もの・根菜（秋冬・春まき）',
        slugs: [
          'horenso-komatsuna-aki', 'broccoli-sodatekata', 'lettuce-sodatekata',
          'komanegi-sodatekata', 'daikon-kabu-sodatekata', 'hatsuka-daikon-sodatekata',
          'ninjin-sodatekata',
        ],
      },
      {
        label: '豆・球根・イモ',
        slugs: [
          'snap-endou-sodatekata', 'soramame-sodatekata', 'tamanegi-sodatekata',
          'ninniku-sodatekata', 'jagaimo-sodatekata', 'satsumaimo-sodatekata',
        ],
      },
      {
        label: 'ハーブ・薬味',
        slugs: [
          'basil-sodatekata', 'ohba-shiso-sodatekata', 'mint-sodatekata',
          'parsley-sodatekata', 'mitsuba-shungiku-sodatekata',
        ],
      },
    ],
  },
  {
    id: 'tables',
    emoji: '📊',
    title: '早見表・データ（時期・温度・相性）',
    lead: 'いつまく？ 何度が適温？ 何と一緒に植える？ を表で確かめたい',
    subs: [
      {
        label: '時期・温度・条件の早見表',
        slugs: [
          'aki-yasai-tanemaki-jiki', 'hatsuga-seiiku-tekion-hyo',
          'hiatari-shimeri-yasai-hyo', 'haru-makikonsai-hikaku',
          'companion-plants-kumiawase-hyo', 'rensaku-shogai-ka-bunrui',
        ],
      },
      {
        label: '福岡県の作型表（種まき・植え付け・収穫の時期）',
        slugs: [
          'fukuoka-sakugata-hyo', 'fukuoka-sakugata-kyabetsu-hakusai',
          'fukuoka-sakugata-lettuce', 'fukuoka-sakugata-negi-nira',
          'fukuoka-sakugata-tomato-nasu', 'fukuoka-sakugata-kyuuri-kabocha',
          'fukuoka-sakugata-mame-okura',
        ],
      },
    ],
  },
];
