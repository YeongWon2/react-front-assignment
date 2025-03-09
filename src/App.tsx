import { AppRouter } from '@/app/layout/router';
import { ReactQueryProvider } from '@/app/provider';

function App() {
  return (
    <ReactQueryProvider>
      <AppRouter />
    </ReactQueryProvider>
  );
}

export default App;
