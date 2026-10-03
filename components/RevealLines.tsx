import type { JSX } from "react";

type RevealLinesProps = {
  lines: string[];
  as?: "h1" | "h2";
  className?: string;
};

export const RevealLines = ({
  lines,
  as = "h2",
  className = "disp",
}: RevealLinesProps): JSX.Element => {
  const Tag = as;

  return (
    <Tag className={className}>
      {lines.map((line) => (
        <span className="m" key={line}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  );
};
