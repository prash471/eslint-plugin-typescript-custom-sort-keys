
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
| <img src='https://lh5.googleusercontent.com/y_tpGeh9g0g0gKPIccaxEK0vMx462vg45ezfo55q9UBnBUWs8SUXhjyGDrfSy34s2Bv9uSAdqLdPuHUF138h=w2080-h1878-rw'> | <img src='https://lh4.googleusercontent.com/t4SLRbnbzkBglwlggayNiYKSKFYY2emCrmaa0oLZxj8UHeN_zzp9cRnteKD4MjUrzr93MQT-f-FrjtZt6LAX=w2080-h1878-rw'> |
