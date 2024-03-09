import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import { filterDuplicateTags } from '../utils/filterDuplicateTags';

describe('FilterDuplicateTags Test', () => {
test('filters out duplicate tags', () => {
    const tags = [
      { label: 'Travel tips', tag: 'travel-tips' },
      { label: 'Luxury', tag: 'luxury' },
      { label: 'Where to stay', tag: 'where-to-stay' },
      { label: 'Travel tips', tag: 'travel-tips' },
      { label: 'Luxury', tag: 'luxury' },
      { label: 'Where to stay', tag: 'where-to-stay' },
    ];

    const result = filterDuplicateTags(tags);

    const expectedResult = [
        { label: 'Travel tips', tag: 'travel-tips' },
      { label: 'Luxury', tag: 'luxury' },
      { label: 'Where to stay', tag: 'where-to-stay' },
      ];

    expect(result).toEqual(expectedResult);
  });
});
