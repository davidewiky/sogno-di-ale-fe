FROM eoc-exec-ubuntu-22-04-node20:local

COPY package.json .
COPY node_modules ./node_modules
COPY .next ./.next
COPY next.config.mjs .

EXPOSE 3000

CMD [ "npm", "start" ]
