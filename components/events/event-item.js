import Link from "next/link";
import styles from "./event-item.module.css";
import Button from "@/ui/button";
import DateIcon from "@/public/icons/date-icon";
import AddressIcon from "@/public/icons/address-icon";
import ArrowRightIcon from "@/public/icons/arrow-right-icon";
export default function EventItem(props) {
  const { title, location, date, image, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;
  return (
    <li className={styles.item}>
      <img src={"/" + image} alt={title} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>
        <div>
          <Button link={exploreLink}>
            <span>Explore Events</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
