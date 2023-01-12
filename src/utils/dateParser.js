export function parserDate(taskDate) {
  const day = new Date(taskDate.endDate).getDate();
  const month = new Date(taskDate.endDate).getMonth();
  const year = new Date(taskDate.endDate).getFullYear();

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const fullDate = `${day}-${month}-${year}`;
  const fullCurrentDate = `${currentDay}-${currentMonth}-${currentYear}`;

  return { fullDate, fullCurrentDate };
}
