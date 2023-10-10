import React, { useState } from "react";
import Logo from "../../assets/biology 1.svg";
import { Loader2 } from "lucide-react";
import { Button } from "../../components";
import { Switch } from "../../components/ui/switch";
import edit from "../../assets/edit-2.svg";
import printer from "../../assets/printer.svg";
import left from "../../assets/vector1.svg";
import right from "../../assets/vector2.svg";

const Home: React.FC = () => {
  const [loading, setIsLoading] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <header className="w-full h-20 bg-main">
        <div className="w-full h-full container py-6 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <img src={Logo} className="pl-6" />
            <h1 className="font-roboto-slab text-2xl font-semibold text-primary-red text-white">
              Anati Quanti
            </h1>
          </div>
        </div>
      </header>
      {/* grid min-h-screen grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden p-4 */}
      <div className="flex h-screen">
        <aside className="ml-14 bg-slate-500 p-6 flex flex-col justify-between">
          <div className="flex flex-col space-y-4">
            <button className="h-10 w-52 rounded-md bg-main hover:bg-green-900 mt-20 text-white uppercase transition-colors duration-300">
              <span>
                <img
                  src={edit}
                  alt=""
                  className="items-center justify-center ml-2"
                />
              </span>
            </button>
            <button className="h-10 w-52 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
              <span>
                <img
                  src={edit}
                  alt=""
                  className="items-center justify-center ml-2"
                />
              </span>
            </button>
            <button className="h-10 w-52 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
              <span>
                <img
                  src={edit}
                  alt=""
                  className="items-center justify-center ml-2"
                />
              </span>
            </button>
            <Switch id="automatic-mode" className="" />
          </div>
        </aside>
        {/* <button className="h-16 rounded-md bg-red-500 hover:bg-red-600 py-6 px-14 text-white uppercase transition-colors duration-300">Logo</button> */}
        <main className="flex-1 overflow-y-auto p-6 mr-60">
          <div className="w-full h-full container py-6 bg-white flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4 -mt-2">
              <button className="h-10 w-10 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
                <span>
                  <img
                    src={edit}
                    alt=""
                    className="items-center justify-center ml-2"
                  />
                </span>
              </button>
              <button className="h-10 w-10 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
                +
              </button>
              <button className="h-10 w-10 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
                <span>
                  <img
                    src={printer}
                    alt=""
                    className="items-center justify-center ml-3"
                  />
                </span>
              </button>
            </div>
            <div className="w-4/6 h-5/6 bg-gray-600"></div>
            <div className="flex items-center space-x-4 -mt-2">
              <button className="h-10 w-10 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
                <span>
                  <img
                    src={left}
                    alt=""
                    className="items-center justify-center ml-3"
                  />
                </span>
              </button>
              <button className="h-10 w-10 rounded-md bg-main hover:bg-green-900 text-white uppercase transition-colors duration-300">
                <span>
                  <img
                    src={right}
                    alt=""
                    className="items-center justify-center ml-3"
                  />
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
