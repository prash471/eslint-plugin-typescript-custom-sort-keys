
# eslint-plugin-typescript-custom-sort-keys

This plugin sorts your typescript and interfaces in a custom defined order.


- [eslint/sort-keys](https://github.com/eslint/eslint/blob/master/docs/rules/sort-keys.md)
- [eslint/eslint-plugin-typescript-sort-keys](https://github.com/infctr/eslint-plugin-typescript-sort-keys)

## Installation

```sh
yarn add -D eslint-plugin-typescript-custom-sort-keys
```

## Usage

```json
{
  "plugins": ["typescript-custom-sort-keys"]
}
```

Then configure the rules you want to use under the rules section.

**displayFirst**: Define array of fields that you want to show on top

**showFunctionsAtEnd**: keep it true if you want to show your functions in end

```json
{
  "rules": {
    "typescript-custom-sort-keys/interface": [
      "warn",
      "asc",
      {
        "caseSensitive": true,
        "displayFirst": ["id"],
        "showFunctionsAtEnd": true,
      },
    ],
  }
}
```

## Example:

|Before| After |
|--|--|
| <img src="https://i.ibb.co/6w15TZs/Snipaste-2020-08-02-01-27-13.jpg" alt="Snipaste-2020-08-02-01-27-13" border="0" /></a> | <img src="https://i.ibb.co/bmTmZ1p/Snipaste-2020-08-02-01-16-25.jpg" alt="Snipaste-2020-08-02-01-16-25" border="0" /> |
