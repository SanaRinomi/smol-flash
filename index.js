function flash(req, state = null) {
	if(!state) {
		const storedFlash = req.session.flash;
		if(storedFlash) req.session.flash = null;
		return storedFlash;
	} else
		req.session.flash = state;
}

module.exports = flash;