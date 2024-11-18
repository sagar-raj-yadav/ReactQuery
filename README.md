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

note:in-memory->"in-memory" ka matlab hai ki data sirf RAM me store hota hai, aur jab tak app ya browser chal raha hai tab tak accessible hota hai. Agar page refresh karoge ya app band karoge, to yeh data delete ho jata hai.
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


setup JSON server
i.make db.json file and make api inside this file.
ii.npm install json-server
iii.inside package.json ,under scripts write    "serve-json": "json-server --watch db.json --port 4000"
iv.In terminal write  " npm run serve-json  " , to open api


1.useQuery Hook:-This hook is used to fetch and manage data  from an API  and caches it for efficient re-use.
2.queryKey:-This is an array or string that uniquely identifies the query.
        useQuery({
         queryKey:["posts"]
        });
In this case, the queryKey is ["posts"].
3.if we fetch the data from api/posts then query key is ["posts"]  and api/posts/1  then query key is  ["posts",1] or api/posts/2  then query key is  ["posts",2] .... use dynamic query key->["posts",post.id]

note:->api/posts ->ye ek query hai and haar query ka ek alag query key hoga.
note:->haar query ka ek uska apna queryKey hoga.
4.Why queryKey is Important?
=>Detect and reuse cached data instead of fetching it again.
5.useQuery take 2 things ,i)querykey and ii)queryfunction (this is a  callback and this always returns a promise).

6.useQuery return->
const {
  data,          // The fetched data
  error,         // Error object, if any occurred during fetching
  isLoading,     // `true` while the query is loading for the first time
  isError,       // `true` if the query encountered an error
  isSuccess,     // `true` if the query was successful
  isFetching,    // `true` when the query is fetching data (includes background fetching)
  refetch,       // A function to manually trigger a refetch
  status,        // Current query status: 'idle' | 'loading' | 'error' | 'success'
  dataUpdatedAt, // Timestamp of the last time the data was updated
  errorUpdatedAt,// Timestamp of the last time the error was updated
  isStale,       // `true` if the cached data is stale
} = useQuery({ queryKey, queryFn });


INSTALL react-query dev tools:-
 npm install @tanstack/react-query-devtools ->install karne ke baad niche me devtools show ho jayega.


 QUERY CACHE -> iska kaam hai ki fetched data ko temporarily store karna.
Iska main purpose hai ki agar tum ek hi data baar-baar fetch karte ho, toh server se baar-baar request na jaye, aur tumhare app ka performance better ho.

Note: agar hum query cache use nhi kar rhe hai to , humara frontned se api call hoga and haar baar server jo hai wo database ko call karega data lene ke liye.(haar baar webiste reload hoga to loading... show hoga,because haar baar api se database pe request  jaa rha h.)

Simple Example:-
Imagine karo tum ek library jaate ho aur kisi book ka reference chahiye:
Without Cache: Har baar librarian ke paas jaoge aur wahi book mangoge. Har baar time lagega.
With Cache: Pehli baar book leke apne table par rakh lo. Ab jab zarurat ho, seedha table se utha lo — time save ho gaya.

##React Query Me Cache Kaise Kaam Karta Hai?
i.First Fetch:
Jab tum data fetch karte ho (useQuery ke through), React Query us data ko apne cache me store kar leta hai.
Example: Tumne posts ka data fetch kiya.
ii.Reusing Cached Data:
Agar tum dobara queryKey: ["posts"] ke saath data fetch karte ho, React Query directly cache se data de deta hai. Server ko request bhejne ki zarurat nahi padti.
iii.Stale Time:
Cache me rakha data kitne time tak fresh maana jayega, ye tum define kar sakte ho.
Default: 0 seconds (React Query maan leta hai ki data turant stale ho gaya).
iv.Automatic Refetch:
Agar data stale ho gaya hai (time expire ho gaya), React Query background me server se naya data fetch kar lega, bina UI ko block kiye.


very important concept::->