# [DEMO](https://shopjewelry.herokuapp.com)

![alt text](https://github.com/duythien0912/shopjewelry/blob/master/image/2018-05-29-08-36-shopjewelry.herokuapp.com.png "Home page")

# Make your web

```bash
git clone https://github.com/duythien0912/shopjewelry.git
```

Delete .git folder
Chance .evn.sample to .env and edit all

```bash
DB_HOST="yourmongodburl"
HOST_APP="https://shopjewelry.herokuapp.com/"
CLOUD_NAME="yourCloudinaryName"
CLOUD_API_KEY="yourCloudinaryKEY"
CLOUD_API_SECRET="yourCloudinaryNameKEYSECRET"
ADMIN_EMAIL="admin@gmail.com"
ADMIN_PASSWORD="deletethislineforstrongpassword"
```

Run test in localhost 

```bash
npm install
npm run startDev 
```

if your use yarn
```bash
yarn
yarn startDev
```

Deploy to heroku

```bash
heroku login
git init
heroku git:remote -a YourHerokuNameCreateInHerokuLogin
git add .
git commit -m "My first commit"
git push heroku master
```

