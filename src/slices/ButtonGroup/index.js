import CtaButton from "@/components/CtaButton";

export default function ButtonGroup({ slice }) {
  const { items } = slice;

  return (
    <div className="flex flex-wrap items-center gap-4">
      {items?.map((item, i) => (
        <CtaButton
          key={i}
          href={item.button_link}
          label={item.button_label}
          variant={item.button_variant || "primary"}
          newTab={item.button_new_tab}
          showArrow={item.button_show_arrow}
        />
      ))}
    </div>
  );
}
