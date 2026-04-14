import { Provider } from "react-redux"
import AppRoute from "./routes/AppRoute"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./api/data/store"

import { ToastContainer } from 'react-toastify';
import { PopupProvider } from "./context/PopUpContext";
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PopupProvider>
          <AppRoute />
        </PopupProvider>

        <ToastContainer />
      </PersistGate>
    </Provider>

  )
}

export default App