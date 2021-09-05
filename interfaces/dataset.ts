export type DatasetBaseType = {
  title: string;
  description: string;
};

export type DatasetWithTableType = DatasetBaseType & {
  table: Array<DatasetBaseType>;
};
