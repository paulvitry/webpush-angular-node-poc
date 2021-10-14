const express = require('express')
const app = express()
const cors = require('cors');

const webpush = require('web-push');
const port = process.env.PORT || 3000
const vapidKeys = {
  "publicKey":"",
  "privateKey":""
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.post('/notification', function(req, res) {

    webpush.setVapidDetails(
      'mailto:nn@gmail.org',
      vapidKeys.publicKey,
      vapidKeys.privateKey
    );

  console.log(req.body.subscription);
  const notificationPayload = {
    "notification": {
        "title": "Angular News",
        "body": "Newsletter Available!",
        "icon": "assets/main-page-logo-small-hat.png",
        "vibrate": [100, 50, 100],
        "data": {
            "dateOfArrival": Date.now(),
            "primaryKey": 1
        },
        "actions": [{
            "action": "explore",
            "title": "Go to the site"
        }]
    }
};
const payload = JSON.stringify(notificationPayload);
  // Pass object into sendNotification
  webpush
    .sendNotification(req.body.subscription, payload)
    .then(res => {console.log(res);})
    .catch(err => console.error(err));

    res.status(201).json({});
 });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})











