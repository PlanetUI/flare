FROM node:18-alpine
COPY package.json /app/package.json
WORKDIR /app
RUN npm install -g pnpm
RUN pnpm i
COPY . /app
RUN pnpm build
CMD ["pnpm", "start"]