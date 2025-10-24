Autocomplete exercise
### Getting Started

```bash
npm ci
npm run dev
```

### The overall idea is to build autocomplete flow
#### (user input with suggested options as a plain list next to input, no need to go with dropdown)
#### We'll be using art free API for integration with test data source
https://api.artic.edu/docs/#quick-start

### Entire assignment is broken into smaller subtasks bellow.
### Each tasks should be taken in exactly same order.


##### 1. Building UI component for Autocomplete.
###### Open app/components/autocomplete/autocomplete.jsx and start fulfilling it with implementation details:
###### Component should react on user input after three characters and trigger API callback
###### If user returns to the previous input data should be taken from the cache (without requesting again)
###### Note: Preferable way to use react query (already part of dependencies), in the same time building on top of pure 'fetch' is also fine 


##### 2. Integration with search API.
###### Please examine API https://api.artic.edu/docs/#quick-start => https://api.artic.edu/api/v1/artworks/search?q=cats
###### Integrate 'search' API with UI component

##### 3. Cover with tests
###### Open __tests_/autocomplete.spec.js and fulfil the tests

##### 4. Integration with pagination API.
###### Please examine API https://api.artic.edu/docs/#quick-start => https://api.artic.edu/api/v1/artworks?page=2&limit=100
###### Once user scrolls to the bottom of container API should be hit for the new portion of data
