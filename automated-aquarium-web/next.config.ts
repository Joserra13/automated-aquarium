import type { NextConfig } from "next";

import pkg from './package.json';

// starts a command line process to get the git hash
import { execSync } from 'child_process';

const commitHash = execSync('git log --pretty=format:"%h" -n1')
  .toString()
  .trim();

const nextConfig: NextConfig = {
  /* config options here */
  basePath: '/automated-aquarium',
  assetPrefix: '/automated-aquarium/',
  output: 'export',
  reactStrictMode: true,
  env: {
    // add the package.json version and git hash to the environment
    APP_VERSION: pkg.version,
    COMMIT_HASH: commitHash
  },
};

export default nextConfig;
