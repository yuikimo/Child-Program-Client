export function createRandomInt() {
	return Math.floor(Math.random() * 100)
}

export function formatSeconds(seconds) {
	// 计算小时、分钟和秒
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;

	// 格式化为两位数
	const formattedHours = String(hours).padStart(2, '0');
	const formattedMinutes = String(minutes).padStart(2, '0');
	const formattedSeconds = String(secs).padStart(2, '0');

	// 返回格式化后的字符串
	return `${formattedHours} 小时:${formattedMinutes} 分:${formattedSeconds} 秒`;
}

export function useCurrentTime(dateStr) {
	const startDate = new Date(dateStr);
	const endDate = new Date()
	const delta = endDate.getTime() - startDate.getTime()

	const unitDay = 24 * 60 * 60 * 1000
	const unitHour = 60 * 60 * 1000
	const unitMinute = 60 * 1000
	const unitSecond = 1000

	const days = Math.floor(delta / unitDay)
	const hours = Math.floor((delta % unitDay) / unitHour)
	const minutes = Math.floor((delta % unitHour) / unitMinute)
	const seconds = Math.floor((delta % unitMinute) / unitSecond)

	return { days, hours, minutes, seconds }
}