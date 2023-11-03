import LogisticsItem from "./logistics-item";
import classes from "./event-logistics.module.css";
import AddressIcon from "@/public/icons/address-icon";
import DateIcon from "@/public/icons/date-icon";
import Image from "next/image";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} height={50} width={7} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
export default EventLogistics;
// date={event.date}
// address={event.location}
// image={event.image}
// imageAlt={event.image}
