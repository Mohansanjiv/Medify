import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import DownloadApp from './components/pages/Sections/DownloadApp/DownloadApp';
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Outlet />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
