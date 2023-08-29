export const getNextMonth = () => {
  let d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth();
  const day = d.getDate();
  const nextMonth = new Date(year, month + 1, day);

  return nextMonth;
};