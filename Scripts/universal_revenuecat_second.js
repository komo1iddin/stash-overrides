var body = $response.body;
var obj = JSON.parse(body);

// Define the fields and their replacement values
var fieldsToReplace = {
  "expires_date": "2099-12-31T23:59:59Z",
  "is_sandbox": false,
  "refunded_at": null,
  "unsubscribe_detected_at": null,
  "period_type": "normal"
};

// Replace fields in obj.subscriber.subscriptions
if (obj.subscriber.subscriptions) {
  for (var key in obj.subscriber.subscriptions) {
    if (obj.subscriber.subscriptions.hasOwnProperty(key)) {
      for (var field in fieldsToReplace) {
        if (fieldsToReplace.hasOwnProperty(field)) {
          obj.subscriber.subscriptions[key][field] = fieldsToReplace[field];
        }
      }
    }
  }
}

// Replace "expires_date" field in obj.subscriber.entitlements
if (obj.subscriber.entitlements) {
  for (var field in fieldsToReplace) {
    if (fieldsToReplace.hasOwnProperty(field)) {
      obj.subscriber.entitlements.expires_date = fieldsToReplace[field];
    }
  }
}

// Stringify the modified object back to JSON
body = JSON.stringify(obj);

$done({ body });
