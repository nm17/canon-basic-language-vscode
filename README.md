# Canon Basic Language support for VS Code

Add support for Canon Basic Language. Currently only support code highlighting and it doesn't have any requirements or settings.

You can see the changelog in `CHANGELOG.md` file.

## How to install

Link to extension: https://marketplace.visualstudio.com/items?itemName=nm17.canon-basic-language
Install from VS Code Quick Open panel: Press `Ctrl+P` -> `ext install nm17.canon-basic-language`

## Some helpful references

  - A collection of example CBasic scripts - https://github.com/lclevy/cbasic_examples
  - Forum topic about CBasic scripting - https://www.magiclantern.fm/forum/index.php?topic=25305.0
  - CHDK wiki about Canon Basic - https://chdk.fandom.com/wiki/Canon_Basic

## How to build the extension from source

```sh
npm install && npm run convertYaml
# Install as usual
```

## Known Issues

  - `cbasic_support.yaml` may not contain all support functions that CBasic has. If you know more functions, let me know and I'll add them.

