import '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

vi.stubGlobal('fetchMock', fetchMocker);
vi.stubGlobal('describe', describe);
vi.stubGlobal('it', it);
vi.stubGlobal('expect', expect);
vi.stubGlobal('beforeEach', beforeEach);
vi.stubGlobal('afterEach', afterEach);
vi.stubGlobal('vi', vi);

afterEach(() => {
  vi.clearAllMocks();
});
