export interface INote {
  title: string;
  text: string;
  id: string;
}

export interface INotesInitialState {
  notes: INote[];
}

export interface IInitialState {
  notes: INotesInitialState;
}

export const INITIAL_STATE = {
  notes: [],
};
