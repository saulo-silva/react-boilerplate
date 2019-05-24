import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the catalogPage state domain
 */

const selectCatalogPageDomain = state => state.catalogPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CatalogPage
 */

const makeSelectCatalogPage = () =>
  createSelector(
    selectCatalogPageDomain,
    substate => substate,
  );

export default makeSelectCatalogPage;
export { selectCatalogPageDomain };
