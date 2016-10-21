# CHANGELOG

## 2.3.3

- Bad release. Properly addresses autofocus.

## 2.3.2

- Do not trap focus if the current active element is inside the
  container. This resolves issues with the autofocus attribute.

## 2.3.1

- Fix case of missing focus if no element can be found

## 2.3.0

- Removed "role" attribute from container. Otherwise, screen readers
  will read this as "Navigation. One item", since there's only one
  immediate readable child.
- Fixed deprecation warnings with React 15.x

## 2.2.0

- Added looser `react` peer dependency declaration

## 2.1.0

- Refactor internals to eliminate some weight
- Adds additional check to prevent `focus()` from being called on null
  anchors

## 2.0.0

- **Important Update**: This update makes breaking changes to support
  React 0.14. This is because react-focus-trap depends on
  `React.findDOMNode`. Version 1.0 will continue to receive support
  for versions of React before 0.14.0.

## 1.1.1

- Fix conditional that would prevent return of focus

## 1.1.0

- Add conditional around `document` access to allow isomorphic rendering
- Bump dependency list to allow for React 0.14. This will still expose
  warnings in the console about deprecation warnings, however it
  should unblock 0.14 development in the meantime.

## 1.0.3

- The previous fix for focusing a nully anchor introduced a new bug:
  it would not focus on the anchor. This version changes the way
  the `focus` method is identified to fix this bug.

## 1.0.2

- Fixed case where anchor was lost transitioning between two pages
  with focus traps via hash URL routing.

## 1.0.1

- Fixes a case where the onExit callback was invoked without it being defined

## 1.0.0

- react-focus-trap is now active by default. This component is used in
  many settings where it is not a modal. In the case of modals,
  `active` is typically assigned as a dynamic prop anyway.
- The `onExit` property is no longer required.

### Upgrading

`active` is now true by default. Please verify that this does not
conflict with your configuration settings (although our experience has
shown this never to be the case).

## 0.8.0

- Updated dependencies

## 0.7.0

- Updated build process

## 0.6.1

- Fixes cases when more than one FocusTrap is activated

## 0.6.0

- **Breaking change**: Update the way class names are built. They will
  now be based upon the className provided to the `<FocusTrap />`

## 0.5.0

- Addresses some issues with screen readers after conducting testing
  with VoiceOver

## 0.4.0

- More sensible defaults. See readme

## 0.3.0

- Add the ability to configure inner container element className with
  the 'className' property

## 0.2.0

- Add handling for when element is not defined
- Added the ability to set the inner container element using the
  `element` property

## 0.1.1

- Addresses invalid `active` PropType.

## 0.1.0

- Added an `active` property. This is true by default, however allows
  the FocusTrap to be eliminated if not active
