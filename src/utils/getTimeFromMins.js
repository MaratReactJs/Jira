export function getTimeFromMins(mins) {
	let hours = Math.trunc(mins / 60);
	let minutes = mins % 60;
	if (hours < 1) {
		return minutes + "m";
	} else if (minutes < 1) {
		return hours + "h";
	} else {
		return hours + "h " + minutes + "m";
	}
}
