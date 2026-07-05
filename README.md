# TradeMind
https://chatgpt.com/c/6a43b427-8160-83e8-9dc4-fdff1d20affd?mweb_fallback=1

AI trade system
npm create vite@latest client -- --template react


a9844542127@9844542127s-MacBook-Pro client % pwd
/Users/a9844542127/Documents/react/TradeMind/client
a9844542127@9844542127s-MacBook-Pro client % npm run dev

a9844542127@9844542127s-MacBook-Pro api % pwd
/Users/a9844542127/Documents/react/TradeMind/api
a9844542127@9844542127s-MacBook-Pro api % node app.js



http://localhost:5173/
http://localhost:3001/api/health
http://localhost:3001/api/dashboard
http://localhost:3001/api/scanner

mkdir api
cd api

npm init -y
a9844542127@9844542127s-MacBook-Pro api % npm install express cors dotenv
a9844542127@9844542127s-MacBook-Pro api % npm install --save-dev nodemon 

a9844542127@9844542127s-MacBook-Pro api % mkdir routes controllers services strategy config middleware models utils

a9844542127@9844542127s-MacBook-Pro api % touch app.js .env .gitignore


a9844542127@9844542127s-MacBook-Pro api % mkdir -p services/{marketData,indicators,scanner,ai,news}

