import { ReactNode } from "react";

export interface DataInfo {
  field: string;
  title: string;
}

export interface ActivityField {
  title: string;
  element: (row: Record<string, any>) => ReactNode;
}

export interface TableProps {
  data: Record<string, any>[];
  datainfo: DataInfo[];
  activityField?: ActivityField;
}