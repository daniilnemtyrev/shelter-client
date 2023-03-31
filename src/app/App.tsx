import { Counter } from 'src/entities/Counter'
import './styles/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouter } from './providers/router'

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AppRouter />
    </QueryClientProvider>
)

export default App
