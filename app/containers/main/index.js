/**
 *
 * Main
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar) and layout
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Flex, Box } from 'rebass';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorBoundary } from '../../components/errorBoundary';
import { Header } from '../../components/header';
import Footer from '../../components/footer';
import { Router } from '../../components/router';
import { ErrorRibbon } from '../../components/errorRibbon';
import { clearErrorRibbon } from './actions';
import { makeSelectErrorMessage } from './selectors';

function Main() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(makeSelectErrorMessage);

  const closeErrorRibbon = () => dispatch(clearErrorRibbon());

  return (
    <>
      <Helmet
        titleTemplate="Crypto Watcher | %s"
        defaultTitle="Crypto Watcher"
        meta={[
          {
            name: 'description',
            content: 'Crypto Price Watcher',
          },
        ]}
      />
      <Flex flexDirection="column" height="100%">
        <ErrorBoundary>
          <Header />
          {errorMessage && (
            <ErrorRibbon message={errorMessage} onClose={closeErrorRibbon} />
          )}
          <Box flex="1 1 auto" sx={{ overflowY: 'auto' }} position="relative">
            <Router />
          </Box>
          <Footer />
        </ErrorBoundary>
      </Flex>
    </>
  );
}

Main.displayName = 'Main';

export default Main;
