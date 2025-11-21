import { AppointmentProvider } from "./context/AppointmentContext";
import PageHome from "./pages/page-home";

function App() {
  return (
    <AppointmentProvider>
      <PageHome />
    </AppointmentProvider>
  );
}

export default App;
