import {render, screen} from 'vitest'
import TodoList from './Todo'
import * as test from "node:test";

test('affiche la tâche entrée', ()=>{
    render(<TodoList />);
})