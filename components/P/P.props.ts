import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from "react";

export interface PProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "small" | "medium" | "big";
  children: ReactNode;
}
