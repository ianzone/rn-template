import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { describe, expect, test } from 'vitest';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders a count of 0', async () => {
    const { getByTestId } = await render(<Counter />);
    expect(getByTestId('count')).toHaveProperty('children', ['0']);
  });

  test('renders a count of 1', async () => {
    const { getByTestId } = await render(<Counter init={1} />);
    expect(getByTestId('count')).toHaveProperty('children', ['1']);
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    const { getByTestId, getByRole } = await render(<Counter />);
    fireEvent.press(getByRole('button', { name: 'Increment' }));

    await waitFor(() => {
      expect(getByTestId('count')).toHaveProperty('children', ['1']);
    });
  });
});
