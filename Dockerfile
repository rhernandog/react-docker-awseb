FROM node:12-alpine AS builder

WORKDIR "/app"

COPY package.json ./
RUN npm install --no-progress

COPY  ./ ./

RUN npm run build

FROM nginx
EXPOSE 80

COPY --from=builder /app/build /usr/share/nginx/html
