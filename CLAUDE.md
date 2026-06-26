# planter-note.dev — CLAUDE.md

## サイト概要
増田博之（架空）のKindle本読者向けアフィリエイトサイト。
家庭菜園（プランター専門）のおすすめ商品を紹介する静的サイト。

## 技術スタック
- Astro（静的生成）
- Cloudflare Pages（ホスティング）
- TypeScript

## ペルソナ
- **増田博之**（架空・58歳・品質管理30年・菜園歴12年・失敗ノート6冊）
- キャッチコピー: 「プランター菜園は土と水のコントロールがすべて」
- 文体: です・ます調・穏やかな父親目線・品質管理思考
- NG: 「プロ農家」「農業指導員」「100%成功」「俺・僕」

## アフィリエイト
- Phase 1: Amazon Associates（tag: `planter-note-22`・要サイト申請）
- Phase 2: 楽天アフィリエイト（RAKUTEN_ID 取得後に products.ts に設定）
- A8: 初期不要

## ファイル構成
```
src/data/products.ts    商品DB（全ProductCard商品定義）
src/pages/index.astro   トップページ
src/pages/kindle-guide.astro  最重要LP（巻末リンク流入口）
src/pages/category/*.astro    カテゴリ別ページ（8ページ）
src/pages/about.astro
src/pages/privacy-policy.astro
```

## 開発コマンド
```
npm run dev     開発サーバー（localhost:4321）
npm run build   静的ビルド → dist/
```

## ProductCard ルール（仕様書 §6 準拠）
- shopComment: 増田の言葉・弱点1つ必須・医療効果断言禁止
- rel="sponsored noopener" 必須
- 1ページ3〜6個まで
- Amazon + 楽天の2ASP並列（楽天はPhase 2）

## デプロイ後の義務
- Cloudflare Pages に git push で自動デプロイ
- F12 Console 監査（CSP・JS エラー確認）
- ← 詳細: claudecode1/CLAUDE.md §Webサイトデプロイ後F12監査ルール

## 後処理（サイト公開後・claudecode1 側で実施）
book256〜265 の巻末URLを `https://planter-note.dev/kindle-guide/` に差し替えてEPUB再生成。
詳細: `claudecode1/CPO/specs/spec-masuda-engei-site.md §12`
