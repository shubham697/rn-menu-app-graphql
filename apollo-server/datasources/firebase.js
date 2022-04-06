const { RESTDataSource } = require("apollo-datasource-rest");
var admin = require('firebase-admin');
var serviceAccount = require("./test-89dbb-firebase-adminsdk-fahfa-f030c8b4ac.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true })

class FirebaseAPI extends RESTDataSource {
  constructor() {
    super();
  }

  async getAll(collection) {
    let items = await db.collection(collection).get()
      .then(querySnapshot => {
        let docs = querySnapshot.docs;
        return docs.map(doc => {
          let obj = doc.data();
          obj['id'] = doc.id;
          return obj;
        })
      })
      .catch(err => {
        console.log('get all err ', err);
        return [];
      });

    return items;
  }
}

module.exports = FirebaseAPI;
