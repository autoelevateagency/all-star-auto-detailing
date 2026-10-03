"use client";

import { useState, type JSX } from "react";
import { useLocale } from "@/context/LocaleContext";
import { INSTAGRAM_URL } from "@/lib/constants";

export const Contact = (): JSX.Element => {
  const { dict } = useLocale();
  const [line1, line2, line3] = dict.contact.lines;
  const [selected, setSelected] = useState<string[]>([]);
  const [vehicle, setVehicle] = useState("");
  const [hint, setHint] = useState(dict.contact.hint);

  const toggleChip = (chip: string): void => {
    setSelected((current) =>
      current.includes(chip)
        ? current.filter((item) => item !== chip)
        : [...current, chip],
    );
  };

  const handleSubmit = async (): Promise<void> => {
    const services = selected.join(", ") || "a detailing service";
    const car = vehicle.trim() || "my vehicle";
    const message = `Hi All Star Auto Detailing! I'd like a free quote for ${services} on ${car}.`;

    let copied = false;
    try {
      await navigator.clipboard.writeText(message);
      copied = true;
    } catch {
      copied = false;
    }

    setHint(
      `${copied ? dict.contact.hintCopied : ""}${
        INSTAGRAM_URL ? "" : dict.contact.hintNoIg
      }`,
    );

    if (INSTAGRAM_URL) {
      window.open(INSTAGRAM_URL, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section className="ct" id="contact" aria-labelledby="contact-title">
      <div>
        <div className="lbl r">{dict.contact.eyebrow}</div>
        <h2 className="disp" id="contact-title">
          <span className="m">
            <span>{line1}</span>
          </span>
          <span className="m">
            <span>{line2}</span>
          </span>
          <span className="m">
            <span>{line3}</span>
          </span>
        </h2>

        <div className="dl r">
          <span className="lbl">{dict.contact.locationLabel}</span>
          <span>{dict.contact.locationValue}</span>
        </div>
        <div className="dl r">
          <span className="lbl">{dict.contact.servicesLabel}</span>
          <span>
            {dict.services.items.map((item) => (
              <span key={item.id}>
                {item.title}
                <br />
              </span>
            ))}
          </span>
        </div>
        <div
          className="dl r"
          style={{ borderBottom: "1px solid rgba(11,12,13,.2)" }}
        >
          <span className="lbl">{dict.contact.contactLabel}</span>
          <span>{dict.contact.contactValue}</span>
        </div>
      </div>

      <div className="qf r">
        <div className="lbl">{dict.contact.formTitle}</div>
        <div className="chips" role="group" aria-label={dict.contact.formTitle}>
          {dict.contact.chips.map((chip) => (
            <button
              key={chip}
              type="button"
              className={selected.includes(chip) ? "on" : undefined}
              aria-pressed={selected.includes(chip)}
              onClick={() => toggleChip(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
        <input
          value={vehicle}
          onChange={(event) => setVehicle(event.target.value)}
          placeholder={dict.contact.vehiclePlaceholder}
          aria-label={dict.contact.vehiclePlaceholder}
        />
        <button className="btn" type="button" onClick={handleSubmit}>
          {dict.contact.submit}
        </button>
        <small>{hint}</small>
      </div>
    </section>
  );
};
