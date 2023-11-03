import EventList from "@/components/events/event-list";
import NewsletterRegistration from "@/components/input/newsletter-registration";
import { getAllFeaturedEvents } from "@/helpers/api-util";
// import styles from "@/styles/Home.module.css";

export default function Home(props) {
  const featuredEvents = props.events;
  return (
    <>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getAllFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 60,
  };
}
