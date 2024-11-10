FROM node:18
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "dev"]
