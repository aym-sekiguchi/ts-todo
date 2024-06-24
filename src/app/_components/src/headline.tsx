/**
 * headline component
 *
 */

import { cn } from "~/app/_library/utils";

export function Headline(
  props: {
    level: 2 | 3 | 4;
    children: string;
    className?: string;
  } & JSX.IntrinsicElements["h2"],
) {
  const { level, children, className } = props;
  return (
    <>
      {level === 2 && (
        <h2 className={cn("text-[2rem] md:text-[2.5rem]", className)}>
          {children}
        </h2>
      )}
      {level === 3 && (
        <h3 className={cn("text-[1.75rem] md:text-4xl", className)}>
          {children}
        </h3>
      )}
      {level === 4 && (
        <h4 className={cn("text-2xl md:text-[2rem]", className)}>{children}</h4>
      )}
    </>
  );
}
