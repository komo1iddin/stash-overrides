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
  Object.keys(obj.subscriber.subscriptions).forEach(subscriptionKey => {
    Object.entries(fieldsToReplace).forEach(([field, value]) => {
      obj.subscriber.subscriptions[subscriptionKey][field] = value;
    });
  });
}

// Replace "expires_date" field in obj.subscriber.entitlements
if (obj.subscriber.entitlements) {
  obj.subscriber.entitlements.expires_date = fieldsToReplace.expires_date;
}

// Stringify the modified object back to JSON
body = JSON.stringify(obj);

$done({ body });
