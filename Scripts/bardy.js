var objc = JSON.parse($response.body);
    objc = {
  "request_date_ms": 1695805892915,
  "request_date": "2023-09-27T09:11:32Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2023-09-10T16:38:36Z",
    "original_application_version": "202308101548",
    "other_purchases": {},
    "management_url": null,
    "subscriptions": {
      "com.am.gpt3.monthly": {
        "original_purchase_date": "2023-09-10T15:58:25Z",
        "expires_date": "2099-09-13T16:39:22Z",
        "refunded_at": null,
        "unsubscribe_detected_at": null,
        "purchase_date": "2023-09-10T15:58:24Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "store_transaction_id": "90001712911472"
      }
    },
    "entitlements": {
      "Pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2023-09-10T15:58:24Z",
        "product_identifier": "com.am.gpt3.monthly",
        "expires_date": "2099-09-13T16:39:22Z"
      }
    },
    "original_purchase_date": "2023-08-19T02:46:25Z",
    "original_app_user_id": "$RCAnonymousID:f120e2dfdb994e428d73047a406f2bde",
    "last_seen": "2023-09-27T05:52:38Z"
  }
}
$done({body : JSON.stringify(objc)});