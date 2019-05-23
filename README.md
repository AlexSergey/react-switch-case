# React Switch Case

Little switch-case React component to render nested components.

## Usage

### Step 1:
```sh
npm install react-switch-case -save
```

### Step 2:

```jsx
import Switch, { Case, Default } from 'react-switch-case';
```

### Step 3:

```jsx
const componentShow = 'component1';

<Switch condition={componentShow} addClass={'someclassname'}>
    <Case value="component1">
        <span>Component 1</span>
    </Case>
    <Case value="component2">
        <span>Component 2</span>
    </Case>
    <Default>
        <span>Nothing!</span>
    </Default>
</Switch>
```

## License

MIT