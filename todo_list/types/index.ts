export interface Todo {
  id: number,
  isCompleted: boolean,
  title: string,
}

export interface ICurrentTodoAction {
  id: number,
  title?: string,
  type: 'delete' | 'edit',
}