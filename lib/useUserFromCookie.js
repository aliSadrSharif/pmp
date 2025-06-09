"use client";

import { useEffect, useState } from "react";

export function useUserFromCookie() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; foundUser=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop().split(";").shift();
      setUser(JSON.parse(decodeURIComponent(cookieValue)));
    }
  }, []);

  return user;
}

//import and use this hook anywhere in your Client Components:

// import { useUserFromCookie } from "@/lib/useUserFromCookie";

// export default function MyHeader() {
//   const user = useUserFromCookie();

//   return (
//     <header>
//       {user ? (
//         <p>Welcome, {user.name}!</p>
//       ) : (
//         <p>Not logged in</p>
//       )}
//     </header>
//   );
// }
