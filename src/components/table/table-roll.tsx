import { ComponentProps } from "react";

interface TableRollProps extends ComponentProps<"tr"> {}
export function TableRoll(props: TableRollProps) {
  return (
    <tr className="border-b border-white/10 hover:bg-white/5" {...props} />
  );
}
