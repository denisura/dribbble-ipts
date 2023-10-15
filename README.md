## Getting started

Create monorepo

```
npx create-nx-workspace@latest
```

Generate an application

```
yarn nx g @nx/react:app ipts --directory=apps/ipts
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

| App    | port |
| ------ | ---- |
| ipts   | 4201 |
| travel | 4202 |
| rail   | 4203 |

Run all three applications at the same time

```
yarn nx  run-many -t serve -p ipts travel rail --parallel=3
```

Add library

```
yarn nx g @nx/react:lib ui --directory=libs/ui
yarn nx g @nx/react:lib ipts-ui --directory=libs/ipts-ui
yarn nx g @nx/react:lib travel-ui --directory=libs/travel-ui
yarn nx g @nx/react:lib rail-ui --directory=libs/rail-ui
```

Install MUI library

```
yarn add @mui/material @emotion/react @emotion/styled
yarn add @mui/icons-material

```

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

Follow https://nx.dev/recipes/storybook/one-storybook-for-all

```
yarn nx @nx/react:library storybook-host --directory=libs/storybook-host --bundler=none --unitTestRunner=none --projectNameAndRootFormat=as-provided
```

## Start the app

To start the development server run `nx serve ipts`. Open your browser and navigate to http://localhost:4200/. Happy coding!

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

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
