# Code-Sharer
This is a really old demo/test project that I started all the way back in school. A simple CRUD app that saves a plaintext file against a username. There aren't any provisions made for safety as this was created to share small snippets in our non-connected computer lab (good times)

For obvious reasons, the project has been archived. The keys mentioned in this project were long deprovisioned and won't work. 

## Building
You don't need to build this - this should run without any issues in your browser. Make sure to edit https://github.com/therdas/code-sharer/blob/f6be416b88977e75eadbe55ccca26ed4602c2277/js/firebase_init.js#L3 to include the correct API keys, and make sure to not publish said keys to the internet :p

```JS
var config = {
  apiKey: ...,
  authDomain: ...,
  databaseURL: ...,
  projectId: ...,
  storageBucket: ...,
  messagingSenderId: ...
};
```

## More information
As this is really, _really_ old and as this was pretty much a toy instead of a tool - I won't be providing any support for bugs or any issues arising from this program. This is strictly provided AS-IS. 
Please refer to the LICENSE.md document.
