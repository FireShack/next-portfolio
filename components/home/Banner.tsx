import SideBar from "../SideBar";

const Banner = () => {
  return (
    <div className="row">
      <SideBar />
      <div className="col-12 col-md-4 text-center d-flex align-items-center">
        <div className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          illo error, debitis quod esse quidem molestias sapiente praesentium
          officia at laborum similique mollitia dignissimos. Exercitationem?
          <button className="btn btn-outline-dark rounded-0 w-100 p-2 mt-2">
            More about me
          </button>
        </div>
      </div>
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-end">
        <div className="bg-warning border image-profile-home rounded-end rounded-pill">
          <img src="" alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
