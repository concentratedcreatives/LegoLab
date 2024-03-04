import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider>
        <Nav />
        <Outlet />
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;






// import { React, useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HomePage from './Pages/home'; // Assuming your HomePage component is in a file called HomePage.js
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
// <Router>
//     <div>
//       {/* Header */}
//       <header>
//         <h1>LEGO Lab</h1>
//       </header>

//       {/* Main content */}
//       <main>
//         <Routes>
//           <Route exact path="/"element={<HomePage />} />
        
//           {/* Add other routes here if needed */}
//         </Routes>
//       </main>

//       {/* Footer */}
//       <footer>
//         <p>&copy; {new Date().getFullYear()} LEGO Lab. All rights reserved.</p>
//       </footer>
//     </div>
//   </Router>
//   );
// }

// export default App;