import { BeachballConfig } from 'beachball';
import { renderHeader, renderEntry } from './changelog-custom-renders';

export const config: BeachballConfig = {
  disallowedChangeTypes: ['major'],
  branch: 'main',
  changelog: {
    customRenderers: {
      renderHeader,
      renderEntry
    }
  }
};
