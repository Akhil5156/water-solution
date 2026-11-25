export type ExecutionRow = { no: string; client: string; project: string; work: string; type: string };

export type ProjectGroup = {
  /** e.g. a developer / client name. `null` = one flat list. */
  title: string | null;
  items: string[];
};

/** One sector of the portfolio (a card + its expandable project list). Mirrors a DB "project_category" + its projects. */
export type ProjectCategory = {
  id: string;
  /** Text on the filter chip. */
  filter: string;
  label: string;
  title: string;
  text: string;
  tags: string[];
  image: string;
  listTitle: string;
  groups: ProjectGroup[];
};
