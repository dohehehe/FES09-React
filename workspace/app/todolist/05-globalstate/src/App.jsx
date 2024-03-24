import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Suspense } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <Suspense fallbasck ={<div>로딩중...</div>}>
        <RouterProvider router={ router } />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;