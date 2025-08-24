# プロフィールページ（Next.js + Tailwind CSS）

このリポジトリは、Next.jsとTailwind CSSを用いて作成した個人プロフィールページのプロジェクトです。
Pages Router、SSRを使用しています。

## 概要
自己紹介、スキル、ポートフォリオなどを1ページで見やすくまとめたWebサイトです。各セクションはコンポーネント化されており、トップページ（`index.js`）で一括表示されます。


## ディレクトリ構成
- `components/`：各セクションのReactコンポーネント
- `data/`：表示データ（自己紹介文、スキル、ポートフォリオ情報など）
- `pages/`：トップページ（`index.js`）のみ。各セクションはコンポーネントとして管理
- `public/`：画像などの静的ファイル
- `styles/`：グローバルCSSやTailwind設定

## 主な技術
- Next.js
- React
- Tailwind CSS
- Docker（開発・デプロイ用）

## 使い方
1. リポジトリをクローン
2. 依存パッケージをインストール
3. 開発サーバーを起動

```bash
git clone <このリポジトリのURL>
cd profile_page
npm install
npm run dev
```

またはDockerを利用する場合は、`docker-compose up` で起動できます。
