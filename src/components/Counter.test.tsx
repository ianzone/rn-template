import { fireEvent, render } from '@testing-library/react-native';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders a count of 0', () => {
    const { getByTestId } = render(<Counter />);
    expect(getByTestId('count')).toHaveProperty('children', ['0']);
  });

  test('renders a count of 1', () => {
    const { getByTestId } = render(<Counter init={1} />);
    expect(getByTestId('count')).toHaveProperty('children', ['1']);
  });

  test('renders a count of 1 after clicking the increment button', () => {
    const { getByTestId, getByRole } = render(<Counter />);
    fireEvent.press(getByRole('button', { name: 'Increment' }));
    expect(getByTestId('count')).toHaveProperty('children', ['1']);
  });
});
