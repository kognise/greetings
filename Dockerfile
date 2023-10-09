FROM oven/bun:latest

COPY package.json ./
COPY bun.lockb ./
COPY index.js ./

RUN bun install

EXPOSE 3000
ENTRYPOINT [ "bun", "index.js" ]