# planter-note.dev — MARKETING.md

## サイトの売上構造

### 収益モデル
- Phase 1: Amazon Associates クリック型アフィリエイト
- Phase 2: 楽天アフィリエイト追加（価格比較で購入率アップ）
- Phase 3: Google AdSense（承認後・コンテンツページのみ）
- Phase 4: Kindle本 ProductCard（ASIN取得後・全ページ）

### メインの流入経路
1. **Kindle巻末リンク** → `/kindle-guide/` ページ（最重要・直接CV）
   - UTM: `?utm_source=kindle&utm_medium=ebook&utm_campaign=book{番号}`
   - book256〜265 の10冊から流入
2. **Google検索** → カテゴリページ（長期的な収益源）

### 重要 URL
- トップ: `https://planter-note.dev/`
- 巻末LP: `https://planter-note.dev/kindle-guide/`

## アフィリエイト詳細

| ASP | トラッキングID | ステータス |
|---|---|---|
| Amazon | `planter-note-22` | 申請必要（Associates Central でサイト追加） |
| 楽天 | 未取得 | Phase 2（申請後に products.ts の RAKUTEN_ID に設定） |

## CVR改善のポイント
- kindle-guide ページの書き出しは「本を読んでくださりありがとうございます」で温度感を出す
- ProductCardは3〜6個。多すぎると選べなくなる
- shopCommentの弱点記述が信頼性を上げる（弱点ゼロ紹介禁止）
- カテゴリページにも「よくある失敗」セクション → 読者の共感を引き出す

## 固有ルール
- 「プロ農家」「100%成功」の表現禁止（ペルソナ破綻）
- 医療・健康効果の断言禁止
- 楽天アフィリIDなしで rakutenUrl を設定しない（空のままにしてボタンを非表示）

## SEO ターゲットキーワード（優先順）
1. プランター 選び方 おすすめ
2. 家庭菜園 培養土 おすすめ
3. ミニトマト プランター 育て方
4. なす プランター おすすめ
5. 家庭菜園 pH計

## indexing-status.md
→ 別ファイル `indexing-status.md` で管理
