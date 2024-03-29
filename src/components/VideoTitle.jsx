const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="w-screen aspect-video pt-[20%] px-20 absolute text-white 
    bg-gradient-to-r from-black "
    >
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className=" text-black p-4 bg-white
         px-12 text-xl rounded-lg hover:bg-opacity-80 ">
          ▶️ Play
        </button>
        <button className="mx-2 text-white p-4   bg-gray-500 px-12 text-xl bg-opacity-50 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
