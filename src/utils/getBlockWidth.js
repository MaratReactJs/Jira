export function getBlockWidth(per) {
	if (per < 5) return "w-0";
	if (per < 10) return "w-1/12";
	if (per < 20) return "w-2/12";
	if (per < 30) return "w-3/12";
	if (per < 40) return "w-4/12";
	if (per < 50) return "w-5/12";
	if (per < 55) return "w-6/12";
	if (per < 60) return "w-7/12";
	if (per < 70) return "w-8/12";
	if (per < 80) return "w-9/12";
	if (per < 90) return "w-10/12";
	if (per < 95) return "w-11/12";
	if (per > 95) return "w-full";
}
