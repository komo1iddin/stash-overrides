var body = $response.body;

// Replace multiple fields in JSON using regular expressions
body = body.replace(/("expires_date"\s*:\s*")[^"]+"/g, '$1"2099-12-31T23:59:59Z"');
body = body.replace(/("is_sandbox"\s*:\s*)[^,]+/g, '$1false');
body = body.replace(/("refunded_at"\s*:\s*)[^,]+/g, '$1null');
body = body.replace(/("unsubscribe_detected_at"\s*:\s*)[^,]+/g, '$1null');
body = body.replace(/("period_type"\s*:\s*")[^"]+"/g, '$1"normal"');

$done({ body });
