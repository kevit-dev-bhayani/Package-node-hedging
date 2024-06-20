# cropwise-sustainability-data-models
This repo is for storing common cropwise sustainability data models 

## Initializing the App

### Set your Gemfury auth token

npm will expect to have a Gemfury API key saved in an environment variable named `FURY_AUTH`.

1. Log into your Gemfury account and navigate to your Dashboard
2. Select **Tokens** in the left navbar
3. Select **Full access token** in the top navbar
4. Copy the token and add this to your `.bashrc` or `.zshrc`:

```bash
export FURY_AUTH=<paste token here>
```

### Configure npm to use Syngenta Digital registry

Create a `.npmrc` file in your root directory and add the following lines:

```bash
registry=http://npm-proxy.fury.io/syngenta-digital/
//npm-proxy.fury.io/syngenta-digital/:_authToken=${FURY_AUTH}
```

## Available Scripts

### `npm install`

Installs app dependencies.

### `npm run build:model`

Builds schema for an application.

### `npm run migration:generate`

Migration generate.

### `npm run build:serverless`

Build serverless.

### `npm run migration:run:v1`

Run migration for v1 DB.

### `npm run migration:run:v2`

Run migration for v2 DB.

## License

[MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
