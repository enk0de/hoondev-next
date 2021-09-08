export type DatasetBaseType = {
  slug?: string;
  title: string;
  description: string;
  extras?: Record<string, unknown>;
};

export type DatasetWithTableType = DatasetBaseType & {
  table: Array<DatasetBaseType>;
};
