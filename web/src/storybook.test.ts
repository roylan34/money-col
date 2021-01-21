/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
// storybook.test.js

import path from 'path';

import initStoryshots from '@storybook/addon-storyshots';

// the required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

// function to customize the snapshot location
const getMatchOptions: any = ({ context: { fileName } }: any) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(path.dirname(fileName), '.snapshot');
  return {
    customSnapshotsDir: snapshotPath,
    failureThreshold: 0.0001,
    failureThresholdType: 'percent',
  };
};

const viewPort = {
  width: 1280,
  height: 960,
  deviceScaleFactor: 1,
};

const beforeScreenshot = async (page: any) => await page.setViewport(viewPort);
const customizePage = async (page: any) => await page.setViewport(viewPort);

initStoryshots({
  // your own configuration
  test: imageSnapshot({
    // invoke the function above here
    getMatchOptions,
    storybookUrl: 'http:localhost:9009',
    customizePage,
    beforeScreenshot,
  }),
});
