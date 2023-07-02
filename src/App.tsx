import { useState } from "react";
import SearchInput from "./SearchInput";
import CarouselFlow from "./CarouselFlow";

function App() {
  const [data, setData] = useState<{ imageData: string[] }>({ imageData: [] });
  const setImageData = (data: string[]) => {
    setData({ imageData: data });
  };
  return (
    <div className="w-screen h-screen p-2 flex flex-col items-center overflow-hidden">
      <h1 className="text-center font-bold text-2xl m-2">
        React Carousel Flow
      </h1>
      <h3 className="text-center">
        Search for a picture by typing the word below
      </h3>
      <SearchInput setImageData={setImageData} />
      <CarouselFlow imageData={data.imageData}></CarouselFlow>
    </div>
  );
}

export default App;
