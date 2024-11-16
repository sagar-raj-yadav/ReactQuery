React query is a library for fetching data.
why react query?
1.In react,their is no specific library for data fetching .
2.we typically use useEffect hook for data fetching and useState hook to maintain  state like error,loading,or resulting data .
3.If the data is needed throughout the app,then we tend to use state management libraries like Redux .
4.most of the state management libraries are good for working with client side state.

5.state manegement libraries(like redux ) are not great for working with asynchronous or server side state management.

6.client state vs server state

Client State:
Definition: Data stored on the user's device or in-memory.
Examples:
Form inputs.
Filters or sorting preferences.
UI toggles (e.g., dark mode on/off).
Where it exists: LocalStorage, SessionStorage, or in-memory (e.g., React's useState, Redux store).
Speed: Access is fast since it's local.
Use case: Temporary data that doesn't need to be shared with others.

note:in-memory->"In-memory" ka matlab hai ki data sirf RAM (Random Access Memory) me store hota hai, aur jab tak app ya
browser chal raha hai tab tak accessible hota hai. Agar page refresh karoge ya app band karoge, to yeh data delete ho jata hai.
(like redux,useState  ye sab in-memory data store karta h) .

Server State:
Definition: Data stored on the backend/server, shared between multiple users/devices.
Where it exists: Backend databases or services (e.g., MongoDB, PostgreSQL).
Speed: Access is slower due to network requests.
Use case: Persistent, shareable data that requires frequent updates or syncing.
How React Query Helps:-
Fetching: Makes API calls and fetches the data for you.
Caching: Stores fetched data locally to avoid redundant requests.
Synchronization: Ensures the client has up-to-date server data.
Auto-Refetching: Updates the data when dependencies change.

Example:User list, products, or notifications.




| **Aspect**      | **Client State**                          | **Server State (React Query)**         |
|------------------|------------------------------------------|----------------------------------------|
| **Location**     | Stored in-memory (local to the app).     | Fetched and cached using React Query.  |
| **Management**   | Handled via `useState` or `useReducer`.  | Handled via `useQuery` or `useMutation`. |
| **Updates**      | Controlled directly by the user.         | Synced with the server automatically.  |
| **Persistence**  | Lost on reload (unless saved locally).   | Cached and refreshed by React Query.   |
| **Examples**     | Modal visibility, form inputs.           | User list, products, or notifications. |


