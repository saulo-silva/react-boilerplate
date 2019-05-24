/*
 * ContactPage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H2 from 'components/H2';
import styled from 'styled-components';
import messages from './messages';

const Content = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 2em;
  border: 1px solid black;
`;

export default function ContactPage() {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Contact page" />
      </Helmet>
      <H2>
        <FormattedMessage {...messages.header} />
      </H2>

      <Content>
        <p>
          <FormattedMessage {...messages.content} />
        </p>
      </Content>
    </div>
  );
}
