
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
| <img src='https://lh4.googleusercontent.com/OAAOAb78qpOzRxJNLF487kI_uyf-NG2UUQbXgQp4vu8Zaa1U_y-xCN2E4cPQbUQ6MeZLDKhHjbSNaA=w3360-h1878-rw'> | <img src='https://lh4.googleusercontent.com/mshgPT4QByaAhf9ZNxqOsj4Z5RaQA_kXv3eECebtICrJ-1Q66GUSC1s1Mf9WL7tMCnxypXGq8jIYug=w3360-h1878-rw'> |
