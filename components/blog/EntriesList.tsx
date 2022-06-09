import SideBar from "../SideBar";
import { useEffect } from "react";

interface dataInterface {
  name: string;
  google: boolean;
  img: string;
  mail: string;
  role: string;
  state: boolean;
  uid: string;
}

export const EntriesList = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <div className="row">
        <SideBar />
      </div>
      <div className="row">
        <div className="text-center mt-4">
          <h2>Sometimes i write</h2>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
