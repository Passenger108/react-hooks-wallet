# useFetch

The `useFetch` hook abstracts the logic for fetching data from APIs and manages loading, error, and data states.

## Features

- Handles asynchronous fetching using `fetch`
- Provides `loading`, `error`, and `data` states
- Automatically aborts previous requests on re-render or unmount
- provides refresh method to manually cause a re-fetch

## Usage

```jsx
const { data, loading, errors,refresh } = useFetch("https://api.example.com/data");