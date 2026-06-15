import { ReactNode } from "react";

export interface DataInfo {
  field: string;
  title: string;
}

export interface ActivityField {
  title: string;
  element: (row: Record<string, any>) => ReactNode;
}

// TableTypes.ts
export interface TableProps {
  data: any[];
  datainfo: any[];
  activityField: any;
  loading: boolean;  
  tabletitle: string
  dialog: ReactNode;
}