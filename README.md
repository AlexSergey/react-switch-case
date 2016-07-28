# React Switch Case component

Little helper for switch/case statement for React components.

## How usage

### Step 1:
```
npm install react-switch-case -save
```

### Step 2:

Inject component on your page:
```
import Switch, {Case, Default} from 'react-switch-case';
```

### Step 3:
```
let componentShow = 'component1';

...

<Switch condition={componentShow} addClass={'someclassname'}>
  <Case value='component1'>
    <Component1 />
  </Case>
  <Case value='component2'>
    <Component2 />
  </Case>
  <Default>
    <span>Nothing!</span>
  </Default>
</Switch>
```