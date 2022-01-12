// import { useState, useEffect } from "react";

// export default function useLocalStorage(id) {
//   const [state, setState] = useState(
//     () => JSON.parse(localStorage.getItem(id)) ?? []
//   );

//   useEffect(() => {
//     localStorage.setItem(id, JSON.stringify(state));
//   }, [state]);

//   return [state, setState];
// }
