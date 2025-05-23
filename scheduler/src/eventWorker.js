self.onmessage = (e) => {
  const { startDate, endDate } = e.data;
  const events = [];
  let id = 1;
  const start = new Date(startDate);
  const end = new Date(endDate);

  while (start <= end) {
    events.push({
      Id: id,
      Subject: `Event #${id}`,
      StartTime: new Date(start),
      EndTime: new Date(start.getTime() + 60 * 60 * 1000), // 1-hour event
      IsAllDay: false
    });
    id++;
    start.setDate(start.getDate() + 1);
  }

  self.postMessage(events);
};
