import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  size?: "small" | "medium";
  color?: "ghost" | "red" | "grey" | "green" | "primary";
  href?: string;
  children: ReactNode;
}
