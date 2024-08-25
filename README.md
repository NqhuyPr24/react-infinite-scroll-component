# InfiniteScroll Component

The `InfiniteScroll` component is a reusable React component designed to provide infinite scrolling functionality in web applications. It leverages the `IntersectionObserver` API to detect when the user has scrolled to the bottom of a container and then triggers a callback to fetch more data.

## Props

| Prop Name        | Type                | Default    | Description                                                                 |
|------------------|---------------------|------------|-----------------------------------------------------------------------------|
| `children`       | `ReactNode`         | `undefined`| The content to be displayed within the scrollable area.                     |
| `endMessage`     | `ReactNode`         | `undefined`| The message or component to display when there are no more items to load.   |
| `loadingComponent` | `ReactNode`       | `undefined`| A component to show while loading more items.                               |
| `next`           | `() => Promise<void> \| void` | `undefined` | A function to call when loading more items. This should fetch and append new data. |
| `hasMore`        | `boolean`           | `false`    | A boolean flag indicating whether there are more items to load.             |
| `wait`           | `number`            | `300`      | Throttling wait time in milliseconds for the `next` function to prevent multiple calls. |
| `observerMargin` | `number`            | `10`       | Margin around the `IntersectionObserver` root in pixels to trigger the observer earlier or later. |

## How It Works

1. **Children Rendering**: The component renders its `children` inside the container where infinite scrolling is desired.
   
2. **Intersection Observer Setup**: An `IntersectionObserver` is created in the `useEffect` hook. This observer is attached to a trigger element (`div` with `ref={triggerRef}`) at the bottom of the scrollable container.

3. **Observer Margin**: The `rootMargin` prop allows customization of how early or late the `IntersectionObserver` should trigger based on the scrolling. It can be set as a positive or negative number of pixels.

4. **Fetching More Items**: The `next` function prop is a callback function that fetches more data. This function is throttled using the `throttle` utility function to avoid rapid successive calls.

5. **Loading Indicator**: If `loadingComponent` is provided, it will be displayed while more items are being fetched.

6. **End Message**: When there are no more items to load (`hasMore` is `false`), the `endMessage` is displayed.

## Example Usage

```jsx
import React, { useState } from 'react';
import InfiniteScroll from './InfiniteScroll';

const App = () => {
    const [items, setItems] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = async () => {
        // Fetch more data and append to the items array
        // Example: fetching from an API
        const newItems = await fetchMoreItemsFromAPI();
        setItems(prevItems => [...prevItems, ...newItems]);

        if (newItems.length === 0) {
            setHasMore(false);
        }
    };

    return (
        <InfiniteScroll
            next={fetchMoreData}
            hasMore={hasMore}
            loadingComponent={<div>Loading...</div>}
            endMessage={<div>No more items to display.</div>}
            observerMargin={100} // Trigger fetching 100px before the element is in view
        >
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </InfiniteScroll>
    );
};

export default App;
```
## Notes
- Throttling: The next function is throttled to improve performance by preventing rapid consecutive calls. The throttling interval can be adjusted using the wait prop.
- Customizing Trigger Margin: Use the observerMargin prop to adjust how soon the next batch of items should load as the user scrolls. This can help optimize user experience based on your layout and content length.
- Error Handling: Ensure to handle any errors inside the next function to prevent the application from crashing during the data fetching process.
## Utilities
- throttle: A utility function used to throttle calls to the next function, limiting how frequently it can be invoked.