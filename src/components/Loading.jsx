import { GridLoader } from "react-spinners";
import './Loading.css'

const Loading = ({ loading }) => {
    return (
      <div
        style={{
          display: loading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          zIndex: 9999,
        }}
      >
        <GridLoader color="#6149B7" loading={loading} size={20} />
      </div>
    );
  };
  
  export default Loading;