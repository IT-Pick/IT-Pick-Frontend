export const parseTime = (time: number) => {
    const timeStr = time.toString();
    const year = parseInt(timeStr.substring(0, 4), 10);
    const month = parseInt(timeStr.substring(4, 6), 10) - 1;
    const day = parseInt(timeStr.substring(6, 8), 10);
    const hours = parseInt(timeStr.substring(8, 10), 10);
    const minutes = parseInt(timeStr.substring(10, 12), 10);
    return new Date(year, month, day, hours, minutes);
  };
  
  export const getTimeDifference = (timestamp: number) => {
    const alarmTime = parseTime(timestamp);
    const now = new Date();
    const diffInMs = now.getTime() - alarmTime.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
  
    if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      return `${diffInDays}일 전`;
    }
  };