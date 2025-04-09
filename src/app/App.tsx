import { AppLayout } from '~/components/AppLayout/AppLayout';
import { useGetPostsQuery } from '~/query/services/posts.ts';

function App() {
    const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

    return <AppLayout />;
}

export default App;
