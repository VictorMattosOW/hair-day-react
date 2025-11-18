import PageHome from "./pages/page-home";
import { AppointmentProvider } from "./context/AppointmentContext";


function App() {
  return (
    <AppointmentProvider>
      <PageHome />
    </AppointmentProvider>
  );
}

export default App;
