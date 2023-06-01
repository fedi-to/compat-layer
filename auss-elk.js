const looks_like_mastodon = /^https:\/\/[-A-Za-z0-9.]+\/@[A-Za-z0-9_]+(\/[0-9]+)?\/?$/;

(function() {
	var url = new URL(document.location.href);
	var target = url.searchParams.get("target");
	if (
		target === null
		||
		!target.startsWith("web+ap://")
		||
		target.startsWith("web+ap:///")
		||
		target.startsWith("web+ap://\\")
	) {
		// FIXME invalid
		return;
	}
	var ap_id = target.replace(/^web\+ap:\/\//, "https://");
	if (looks_like_mastodon.test(ap_id)) {
		var elk_url = new URL("https://elk.aus.social/" + ap_id);
		document.location = elk_url;
	} else {
		// TODO: write html
		// Unfortunately, Elk does not currently support opening this URL, as it is not a Mastodon URL.
		// For reference, the full URL is: [...]
	}
})();
