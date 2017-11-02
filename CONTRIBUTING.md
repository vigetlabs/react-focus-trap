# Contribution Guidelines

Thanks you for considering a contribution to FocusTrap!

## Before Starting

FocusTrap is built using tools written for [nodejs](http://nodejs.org). We recommend installing Node with [nvm](https://github.com/creationix/nvm). Dependencies are managed through `package.json`.

You use the same node version we are developing with by running

```bash
nvm use
```

> You may need to run `nvm install` if you haven't installed the node version we require.

## Getting Started

All commands should be run using yarn. If you haven't switched to [yarn](https://yarnpkg.com/en/) yet, now's a great time!

> If you are familiar with npm then using yarn should be a breeze. You can keep using npm if you'd prefer but you will miss out on the safety and security of yarn

## Running

A production build can be built by running:

```bash
yarn build
```

However most of the time developing with FocusTrap, you will want to work from the example app. Boot that up with:

```bash
yarn start
```

This will host a local development server at `http://localhost:8080`.

## Testing

FocusTrap uses [Karma](https://karma-runner.github.io). You can run tests with:

```bash
yarn test
```

## Prettier

We use [prettier](https://github.com/prettier/prettier) to ensure consistent style across all packages. Automated tests continually check that code formatting is consistent, failing the build if it is not. Make sure this doesn't happen by running:

```bash
yarn format
```

### Testing

Additionally, we aspire for 100% code coverage. However 100% code coverage is not a foolproof indicator of good testing. Tests that cover as much surface area as possible (for the sake of coverage) should be avoided. This is a much softer measure than a style guide, and will fall to code review for enforcement.

### Reviews

All changes should be submitted through pull request. Ideally, at least two :+1:s should be given before a pull request is merge.
