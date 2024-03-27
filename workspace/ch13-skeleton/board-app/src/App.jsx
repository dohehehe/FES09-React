import { RouterProvider } from "react-router-dom";
import router from "@/routes";
import { RecoilRoot } from "recoil";
import useThemeStore from "@zustand/themeStore.mjs";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App(){

  const { isDarkMode } = useThemeStore();

  if(isDarkMode){
    document.documentElement.classList.add('dark');
  }else{
    document.documentElement.classList.remove('dark');
  }

  return (
    <QueryClientProvider client={ queryClient }>    
      <RecoilRoot>
        <RouterProvider router={ router } />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={ false } />
    </QueryClientProvider>
  );
}

export default App;