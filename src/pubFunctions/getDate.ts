const formatWrapper = (raw: number) => {
  if (raw < 10) {
    return `0${String(raw)}`;
  }
  return raw;
};

export default function () {
  const current = new Date();
  const cDate =
    current.getFullYear() +
    "-" +
    formatWrapper(current.getMonth() + 1) +
    "-" +
    current.getDate();
  const cTime =
    formatWrapper(current.getHours()) +
    ":" +
    formatWrapper(current.getMinutes()) +
    ":" +
    formatWrapper(current.getSeconds());
  return cDate + " " + cTime;
}
