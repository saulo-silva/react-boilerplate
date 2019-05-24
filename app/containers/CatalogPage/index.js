/**
 *
 * CatalogPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import styled from 'styled-components';
import makeSelectCatalogPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Content = styled.div`
  width: 100%;
  border: 1px solid black;
`;

export function CatalogPage() {
  useInjectReducer({ key: 'catalogPage', reducer });
  useInjectSaga({ key: 'catalogPage', saga });

  return (
    <div>
      <Helmet>
        <title>CatalogPage</title>
        <meta name="description" content="Description of CatalogPage" />
      </Helmet>
      <FormattedMessage {...messages.header} />

      <Content>
        <p>teste</p>
      </Content>
    </div>
  );
}

CatalogPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  catalogPage: makeSelectCatalogPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(CatalogPage);
