import { describe, expect, test } from '@jest/globals';
import { act, renderHook, waitFor } from '@testing-library/react-native';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  test('should render the initial count', async () => {
    const { result } = await renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  test('should increment counter', async () => {
    const { result } = await renderHook(useCounter);
    await act(async () => {
      result.current.increment();
    });

    await waitFor(() => {
      expect(result.current.count).toBe(1);
    });
  });

  test('should start count from 10', async () => {
    const { result } = await renderHook(() => useCounter(10));

    expect(result.current.count).toBe(10);
  });
});
