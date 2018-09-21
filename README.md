# Sliding Nav

Simple web app using
* Typescript
* SCSS
and built with
* Webpack
* Yarn

To create a sliding navigation menu, shifting all existing content to the right by 300px when open.


## Run Steps

Prereqs:
* Have `yarn` installed locally

Check with the following command
```
npm list -g --depth=0
```
If `yarn` doesn't exist, install using
```
npm install -g yarn
```

Then run
```
yarn install
yarn start
```

The application will open on port 8080. Visit http://localhost:8080 to see your changes.


## Making Changes

Currently the `yarn start` command needs to be killed and restarted to see the changes. This is because even though webpack-dev-server seems to watch the file changes, the `bundle.js` isn't rebuilt. There is a pending TODO to fix this inconvienence.


## Gotchas

If you want to run webpack-dev-server in a VM (i.e. [IE11](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) in [VirtualBox](https://www.virtualbox.org/wiki/Downloads)), make sure to explicitly set the `--host <ipAddress>` flag in the `yarn server` command. This is because since webpack-dev-server v1.8.0 defaults this value to `localhost` and won't work with local IP, which is how testing local changes in the VM is done. [[Resource](https://github.com/webpack/webpack-dev-server/issues/147)]
