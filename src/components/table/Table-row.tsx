import { ComponentProps } from "react";

interface TableRowProps extends ComponentProps<"tr"> {}

export function TableRow(props: TableRowProps) {
  return (
    <tr className="py-3 px-4 text-sm font-semibold text-left" {...props} />
  );
}
