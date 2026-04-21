export default function MarqueeBand() {
  const items = [
    "4 Meals a Day",
    "Cooked Overnight",
    "Delivered by 9am",
    "Macros Counted",
    "No Commitments",
    "Chef-Crafted Daily",
    "Dhaka's Favourite Meal Plan",
    "Free Delivery",
  ];

  const doubled = [...items, ...items];

  return (
    <div className="marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 48 }}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
