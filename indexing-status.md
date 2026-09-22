# planter-note.dev — Search Console インデックス申請状況

> 最終更新: 2026-09-22（自動更新）

## 背景（2026-08-31追記）
このファイルは公開時のテンプレート（「未申請/未公開」のプレースホルダー行）のまま放置され、
`sites_config.json`（CTO/gsc-auto-indexing/）にも一度も登録されていなかったため、
サイト公開後、11ページ全てが一度もGSC自動インデックス申請パイプラインの対象になっていなかった。
2026-08-31にsites_config.jsonへ登録し、下記を「未申請の優先候補」形式に書き直して自動化に接続した。

## ⚠️ このファイルの用語の意味（2026-09-22 監査で追記・必読）

**「申請済み」は「Googleに登録された」という意味ではありません。**

- `申請済み` = `gsc_auto_indexing.py` が **Indexing API**（`urlNotifications.publish` / `URL_UPDATED`）を
  呼んで正常レスポンスが返っただけの状態。**Indexing API送信済み（索引を意味しない）** と読むこと。
  GoogleはこのAPIを公式に **JobPosting と BroadcastEvent 限定** と規定しており、
  本サイトのような通常記事では事実上無視される。
- `索引済み確認` = URL Inspection API の verdict が `PASS` だった状態。**これだけが実際の索引を意味する。**
- 理由列の `🔴 deindex再検知` は、**「一度索引されたのに脱落した」とは限らない**。
  スクリプトは `verdict != PASS` を一律この文言で表記するため、
  **「そもそも一度も索引されていない（URL is unknown to Google）」ケースも同じ赤字になる**。
  2026-09-22時点の10件はすべて後者（未索引）だった。

### 2026-09-22 実測スナップショット（URL Inspection API・全29ページ）
| 状態 | 件数 |
|---|---|
| `PASS`（索引済み） | **1**（`/` のみ・最終クロール 2026-08-19） |
| `NEUTRAL` / URL is unknown to Google（未発見） | **28** |

検索パフォーマンスは直近90日でクリック0・表示0。`robots.txt`・`X-Robots-Tag`・`canonical`・
`noindex` はいずれも正常で、技術的ブロックではなく**発見（discovery）の失敗**が原因。
sitemap.xml は2026-08-31送信以降 `isPending: true` のままGoogleに一度もダウンロードされていなかった。

### 2026-09-22 に実施した対策
- 手書き `public/sitemap.xml`（16記事中10記事を取りこぼし）を廃止し、`@astrojs/sitemap` の自動生成へ移行
- `robots.txt` の Sitemap 行を `/sitemap-index.xml` へ更新
- GSC の誤パス登録 `/sitemap/xml` を削除し、新サイトマップを再送信
- `404.html` が無くCloudflare Pagesが**全未知URLをトップページのHTTP 200複製として返していた**soft-404を修正
- カテゴリ8ページから記事への内部リンクを新設（従来は発リンク0の行き止まり）
- 存在しないカテゴリを指していた内部リンク2件（`/category/pest/`・`/category/aki-vege/`）を修正

## 未申請の優先候補（自動検出 2026-08-31）

### Tier1
| URL | 優先度 | 理由 |
|---|---|---|
| https://planter-note.pages.dev/kindle-guide/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/planter/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/soil/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/fertilizer/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/tools/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/pest-control/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/herb/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/tomato/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/category/summer-vege/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |
| https://planter-note.pages.dev/about/ | Tier1 | 🔴 deindex再検知（旧:申請済み）自動差し戻し 2026-09-22 |

### Tier2
| URL | 優先度 | 理由 |
|---|---|---|

## メモ
- privacy-policy は noindex 設定のため申請不要
- Kindle巻末リンク差し替え後 → book256〜265 各ページも申請

| https://planter-note.pages.dev/ | 2026-08-31 | 索引済み確認 | - | 自動確認 GSC確認日: 2026-08-31 |




























| https://planter-note.pages.dev/articles/nasu-sodatekata/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/minitomato-sodatekata/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/bougai-net/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/ph-kanri/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/tsuchi-erabi/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/negusar-genin/ | 2026-09-05 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/ | 2026-09-05 | 申請済み | - | 自動申請 by script |







| https://planter-note.pages.dev/articles/hiryou-tsuihi/ | 2026-09-19 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/piiman-sodatekata/ | 2026-09-19 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/mizuyari-kihon/ | 2026-09-19 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/purantar-erabi/ | 2026-09-19 | 申請済み | - | 自動申請 by script |

| https://planter-note.pages.dev/articles/kyuuri-sodatekata/ | 2026-09-19 | 申請済み | - | 自動申請 by script |
