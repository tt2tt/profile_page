# ベースイメージ（Node.js 18-alpine）
FROM node:18-alpine AS builder
WORKDIR /app

# 依存関係ファイルのコピーとインストール
COPY package*.json ./
# ...必要に応じて yarn.lock などをコピー...
RUN npm install

# 全ソースコードのコピーとビルド
COPY . .
RUN npm run build

# 本番用イメージ
FROM node:18-alpine
WORKDIR /app

# ビルド成果物のコピー
COPY --from=builder /app . 
EXPOSE 3000
CMD ["npm", "run", "dev"]
