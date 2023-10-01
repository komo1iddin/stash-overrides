var body = $response.body;

// Replace "expires_date" with the new value using regular expression
body = body.replace(/"expires_date"\s*:\s*"[^"]+"/g, '"expires_date": "2099-12-31T23:59:59Z"');

$done({ body });
