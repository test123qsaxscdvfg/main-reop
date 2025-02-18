import type {LoaderOptions, LoaderWithParser} from '@loaders.gl/loader-utils';
import type {I3SLoaderOptions} from './i3s-loader';
import type {NodePage} from './types';

// __VERSION__ is injected by babel-plugin-version-inline
// @ts-ignore TS2304: Cannot find name '__VERSION__'.
const VERSION = typeof __VERSION__ !== 'undefined' ? __VERSION__ : 'latest';

/**
 * Loader for I3S node pages
 */
export const I3SNodePageLoader: LoaderWithParser<NodePage, never, I3SLoaderOptions> = {
  name: 'I3S Node Page',
  id: 'i3s-node-page',
  module: 'i3s',
  version: VERSION,
  mimeTypes: ['application/json'],
  parse: parseNodePage,
  extensions: ['json'],
  options: {
    i3s: {}
  }
};

async function parseNodePage(data: ArrayBuffer, options?: LoaderOptions): Promise<NodePage> {
  return JSON.parse(new TextDecoder().decode(data)) as NodePage;
}
