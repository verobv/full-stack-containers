import { render, screen } from '@testing-library/react'
import { test, expect, vi } from 'vitest'
import Todo from './Todos/Todo'

test('renders the todo', () => {
  const todo = {
    id: '1',
    text: 'Learn Docker',
    done: false,
  }

  render(
    <Todo
      todo={todo}
      deleteTodo={vi.fn()}
      completeTodo={vi.fn()}
    />
  )

  expect(screen.getByText('Learn Docker')).toBeTruthy()
  expect(screen.getByText('This todo is not done')).toBeTruthy()
})