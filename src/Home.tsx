import { QueryClient, QueryClientProvider } from 'react-query'
import './Home.css'
import UsersTable from './components/UsersTable/UsersTable'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient();

function Home() {
  

  return (
    <QueryClientProvider client={queryClient}>
    <>
     <h1>List Users</h1>
     <table>
        <UsersTable/>
     </table>
    </>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default Home
