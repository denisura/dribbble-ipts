## Getting started

Install Dependencies

```
yarn install
```

Start all sites and storybook

```
yarn nx  run-many -t serve -p company travel rail storybook --parallel=4
```

yarn nx storybook storybook-host

| App       | URL            |
| --------- | -------------- |
| company   | localhost:4201 |
| travel    | localhost:4202 |
| rail      | localhost:4203 |
| storybook | localhost:4400 |

Start all sites and storybook

```
yarn nx  run-many -t serve -p company travel rail storybook --parallel=4
```

## Process

Create monorepo

```
npx create-nx-workspace@latest
```

Generate an application

```
yarn nx g @nx/react:app company --directory=apps/company
yarn nx g @nx/react:app travel --directory=apps/travel
yarn nx g @nx/react:app rail --directory=apps/rail
```

Set distinct port for each app so you can run them at the same time
Edit `apps/*/project.json`

```
{
  ...
  "targets": {
    ...
    "serve": {
      ...
      "options": {
        ...
        "port": {unique port},
        ...
      },
      ...
    },
    ...
`  },
}
```

| App     | port |
| ------- | ---- |
| company | 4201 |
| travel  | 4202 |
| rail    | 4203 |

Run all three applications at the same time

```
yarn nx  run-many -t serve -p company travel rail --parallel=3
```

Configure theme ability Install MUI library

```
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material
yarn nx g @nx/js:lib shared-ui-theme --directory=libs/shared/ui/theme
yarn nx g @nx/react:lib shared-ui-theme-provider --directory=libs/shared/ui/theme-provider
```

Package `shared-ui-theme` defines defines theme parameters for all products

Package `shared-ui-theme-provider` defines default theme provider that resets css and passes theme to all components within provider

Wrap each app with themeProvider
Observe dependancy graph

//configure route

```
yarn add react-router-dom
yarn nx g @nx/react:lib shared-router --directory=libs/shared/router
```

//Create wireframe to define the list of components we need

- header
- footer
- drawer

//Define information architecture and scope of responsibilities

//Define data provider for navigation

```
yarn add invariant
yarn add @types/invariant -D
yarn nx g @nx/react:lib shared-data-navigation-provider --directory=libs/shared/data/navigation-provider
```

Create data providers for company site

```
yarn nx g @nx/react:lib company-data-navigation-provider --directory=libs/company/data/navigation-provider
```

Create context awared components for company product

```
yarn nx g @nx/react:lib company-ui-layout --directory=libs/company/ui/layout\n
yarn nx g @nx/react:lib company-ui-header --directory=libs/company/ui/header
yarn nx g @nx/react:lib company-ui-footer --directory=libs/company/ui/footer
yarn nx g @nx/react:lib company-ui-navigation-drawer --directory=libs/company/ui/navigation-drawer
```

Extract context agnostic components into shared packages

```
yarn nx g @nx/react:lib core-hooks --directory=libs/shared/hooks
yarn nx g @nrwl/react:component useScrolledToTop --project=core-hooks
```

News section Data Provider and Presentation

```
yarn nx g @nx/react:lib company-data-news-provider --directory=libs/company/data/news-provider
yarn nx g @nx/react:lib company-ui-news-section --directory=libs/company/ui/news-section
```

Extract news subscription section

```
yarn nx g @nx/react:lib company-ui-news-subscription-section --directory=libs/company/ui/news-subscription-section
```

Extract subscription form

```
yarn nx g @nx/react:lib shared-ui-subscription-form --directory=libs/shared/ui/subscription-form
```

Extract Company Intro section

```
yarn nx g @nx/react:lib company-ui-intro-section --directory=libs/company/ui/intro-section
```

Extract LinearLayout

```
yarn nx g @nx/react:lib shared-ui-linear-layout --directory=libs/shared/ui/linear-layout
```

Create logo

```
yarn nx g @nx/react:lib shared-ui-logo --directory=libs/shared/ui/logo
```

## Travel

Create data providers for travel site

```
yarn nx g @nx/react:lib travel-data-navigation-provider --directory=libs/travel/data/navigation-provider
```

Create UI components for travel site landing page

```
yarn nx g @nx/react:lib travel-ui-layout --directory=libs/travel/ui/layout
yarn nx g @nx/react:lib travel-ui-footer --directory=libs/travel/ui/footer
yarn nx g @nx/react:lib travel-ui-header --directory=libs/travel/ui/header
yarn nx g @nx/react:lib travel-ui-navigation-drawer --directory=libs/travel/ui/navigation-drawer
yarn nx g @nx/react:lib travel-ui-deal-subscription-section --directory=libs/travel/ui/deal-subscription-section
yarn nx g @nx/react:lib travel-ui-popular-section --directory=libs/travel/ui/popular-section
yarn nx g @nx/react:lib travel-ui-search-section  --directory=libs/travel/ui/search-section
```

## Rail

Create data providers for travel site

```
yarn nx g @nx/react:lib rail-data-navigation-provider --directory=libs/rail/data/navigation-provider
```

Create UI components for travel site landing page

```
yarn nx g @nx/react:lib rail-ui-layout --directory=libs/rail/ui/layout
yarn nx g @nx/react:lib rail-ui-footer --directory=libs/rail/ui/footer
yarn nx g @nx/react:lib rail-ui-header --directory=libs/rail/ui/header
yarn nx g @nx/react:lib rail-ui-navigation-drawer --directory=libs/rail/ui/navigation-drawer
yarn nx g @nx/react:lib rail-ui-subscription-section --directory=libs/rail/ui/subscription-section
yarn nx g @nx/react:lib rail-ui-search-section  --directory=libs/rail/ui/search-section
```

Extract bulletin section to shared library

```
yarn nx g @nx/react:lib shared-data-bulletin-provider --directory=libs/shared/data/bulletin-provider
yarn nx g @nx/react:lib shared-ui-bulletin-section  --directory=libs/shared/ui/bulletin-section
```

Rail: Alert section Data Provider and Presentation

```
yarn nx g @nx/react:lib rail-data-alert-provider --directory=libs/rail/data/alert-provider
yarn nx g @nx/react:lib rail-ui-alerts-section --directory=libs/rail/ui/alerts-section
```

Extract navList to shared UI

```
yarn nx g @nx/react:lib shared-ui-navigation-list --directory=libs/shared/ui/navigation/list
yarn nx g @nx/react:lib shared-ui-primary-container --directory=libs/shared/ui/primary-container
```

### Move swiperSection to shared Ui

```
yarn nx g @nx/react:lib shared-ui-swiper-container --directory=libs/shared/ui/swiper-container
yarn nx g @nx/react:lib shared-ui-caption-card --directory=libs/shared/ui/caption-card
yarn nx g @nx/react:lib shared-ui-action-card --directory=libs/shared/ui/action-card
```

### Trip search form

```
yarn nx g @nx/react:lib shared-ui-search-header --directory=libs/shared/ui/search-header
```

Define layout with context provider for each product

```

yarn nx g @nx/react:lib rail-ui-layout --directory=libs/rail/ui/layout

```

shared UI - context agnostic components atoms and moleculas. base components for all applications
APP UI - context aware components specific for the app. Layouts and organism
APP - a collection of routes with APP UI components connected with specific data for each route

Routes
Utils

Challenge: Custom font

TBD

Challenge: Customize colors

Customize theme for individual product

```

yarn nx g @nx/react:lib company-ui-theme-provider --directory=libs/company/ui/theme-provider
yarn nx g @nx/react:lib travel-ui-theme-provider --directory=libs/travel/ui/theme-provider
yarn nx g @nx/react:lib rail-ui-theme-provider --directory=libs/rail/ui/theme-provider

```

Package `company-ui-theme-provider` customizes default theme provider with specific theme for company product

Package `travel-ui-theme-provider` customizes default theme provider with specific theme for travel product

Package `rail-ui-theme-provider` customizes default theme provider with specific theme for rail product

Challenge: Custom logos for each

TBD

Project Graph

```

yarn nx graph

```

Add UI component

```

yarn nx g @nx/react:component ThemeProvider --project=ui --export
yarn nx g @nx/react:component <component-name> --project=ui --export

```

## Storybook

One main Storybook instance for all projects

Follow https://nx.dev/recipes/storybook/one-storybook-for-all

Create storybook host library

```

yarn nx g @nx/react:library storybook --directory=apps/storybook --bundler=none --unitTestRunner=none --projectNameAndRootFormat=as-provided

```

Configure the new library to use Storybook

```

yarn nx g @nx/storybook:configuration storybook --interactionTests=true --uiFramework=@storybook/react-vite

```

Clean up Storybook library

- Delete the contents of the `src/libs`.
- Delete the `lint` target in `apps/storybook/project.json`.

Create root directory for generic documentation `apps/storybook/src/docs/`.

Specify pattern and locations for stories files exposed by Storybook in `apps/storybook/.storybook/main.ts`

```

const config: StorybookConfig = {
stories: [
'../src/docs/**/*.stories.@(js|jsx|ts|tsx|mdx)',
'../../**/*-ui/**/src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'
],
...
};

```

Create `overview` page in `getting started` section

Create `apps/storybook/src/docs/getting-started/overview/stories.mdx`.

```

import { Meta } from '@storybook/blocks';

<Meta title="Getting Started/Overview" />

# Overview

```

Define implicit dependencies on UI libraries `apps/storybook/project.json`

```

{
...
"tags": ["type:storybook"],
"implicitDependencies": [
"ipts-ui",
"rail-ui",
"travel-ui"
],
...
}

```

Serve storybook

```
yarn nx storybook storybook

```

Create alias to run stroybook app as any other apps

```
yarn nx g @nrwl/workspace:run-commands serve --command "nx run storybook:storybook" --project storybook
```

get the list of all projects required stories

```
yarn nx show projects --projects "**-ui**"
```

Generate stories for each library

```
yarn nx g @nx/react:stories --project company-ui-news-subscription-section
yarn nx g @nx/react:stories --project travel-ui-deal-subscription-section
yarn nx g @nx/react:stories --project rail-ui-subscription-section
yarn nx g @nx/react:stories --project shared-ui-subscription-form

```

## Generate code

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```

nx <target> <project> <...options>

```

You can also run multiple targets:

```

nx run-many -t <target1> <target2>

```

..or add `-p` to filter specific projects

```

nx run-many -t <target1> <target2> -p <proj1> <proj2>

```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Code Refactoring

To rename package

```
yarn nx g @nx/workspace:move --projectName ipts --destination company
```

To add component to the shared library

```
yarn nx g @nrwl/react:component drawer-header --project=shared-ui-drawer --export --style 'none'
```

To remove library

```
yarn nx g @nx/workspace:remove --projectName your-project-full-name
```

// // define default layout
// // provider
// // LayoutProvider
// APP

// define context values
// Navigation
// data
// callbacks

// //app.tsx
// <router >
// <route path="/" element="element">
// <route index "home">
// <route>
// </router>

// //Default layout.tsx
// return
// <LayoutProvider data={ }>
// <Outline/>
// </LayoutProvider>

// //Default home.tsx
// return
// <Content>
// </Content>

// APP UI

// useContext
// const layout = (data, drawerOpen, callbacks)

// //set drawer open doggled and so on

// <provider value = {context} >
// <AppBAr/>
// <Drawer/> //portal here
// {children}
// <Footer/>
// </provider>

// Drawer.tsx
// //use context to pull nav data, logo, title

// SHARED UI

// Context agnostinc basic components - Atomics, moleculas.
// //drawer
// //footer
// //appbar
// //menu list
// //list item
