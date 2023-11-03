export async function getAllEvents() {
  const reposnse = await fetch(
    `https://next-js-course-f1c05-default-rtdb.firebaseio.com/events.json`
  );
  const data = await reposnse.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

// export async function getStaticProps() {
//     const transformedData = [];
//     const reposnse = await fetch(
//       `https://next-js-course-f1c05-default-rtdb.firebaseio.com/events`
//     );
//     const data = await response.json().then((data) => {
//       for (const key in data) {
//         transformedData.push({
//           id: key,
//           date: data[key],
//           address: data[key].address,
//           image: data[key].image,
//           imageAlt: data[key].title,
//         });
//       }
//     });
//     if (!transformedData) {
//       return {
//         props: { events: {} },
//         revalidate: 10,
//       };
//     }
//     return {
//       props: { events: transformedData },
//       revalidate: 10,
//     };
//   }

export async function getAllFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}

export async function getEventById(id) {
  const allEvents = await getAllEvents();
  return allEvents.find((event) => event.id === id);
}
export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
