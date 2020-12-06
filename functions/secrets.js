const { MongoClient } = require("mongodb");

exports.handler = async (event, context) => {
  try {
    const uri = process.env.MONGODB_ATLAS_URI;
    const client = new MongoClient(uri);
    // const client = "client";

    return {
      statusCode: 200,
      body: JSON.stringify({
        secrets: {
          // usrname: process.env.DB_USERNAME,
          // password: process.env.DB_PASSWORD,
          // dbname: process.env.DB_NAME,
          uri: process.env.MONGODB_ATLAS_URI,
        },
        client: client,
      }),
      //  more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
