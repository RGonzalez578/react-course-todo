export interface ToDoItem {
    id: string
    title: string
    body: string
    status: 'COMPLETED' | 'IN_PROGRESS' | 'DONE'
}