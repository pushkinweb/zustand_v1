import create from 'zustand';

interface AsyncActionStore {
    loading: boolean;
    error: string | null;
    todos: ToDo[];
    fetchTodos: () => void;
}
interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed?: boolean;
}


export const useAsyncTodoStore = create<AsyncActionStore>((set, get) => ({
    loading: false,
    error: null,
    todos: [
        {"userId":1,"id":1,"title":"delectus aut autem","completed":false},
        {"userId":1,"id":2,"title":"quis ut nam facilis et officia qui","completed":false},
        {"userId":1,"id":3,"title":"fugiat veniam minus","completed":false}
    ],
    fetchTodos: async () => {
        set({ loading: true })

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            if (!res.ok) throw new Error('Failed to fetch! Try again.')
            set({ todos: await res.json(), error: null })
        } catch (error) {
            // @ts-ignore
            set({ error: error.message })
        } finally {
            set({ loading: false })
        }
    }
}));
