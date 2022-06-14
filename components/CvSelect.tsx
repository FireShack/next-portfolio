export const CvSelect = () => {
  return (
    <div className="d-flex justify-content-center fixed-top mt-5">
      <div className="cv-select mt-1 shadow">
        <a className="" download href="/My-euroCv-it.pdf">
          <div className="cv--select-option p-2">
            <h5>Euro IT</h5>
          </div>
        </a>
        <a className="" download href="/My-euroCv-en.pdf">
          <div className="cv--select-option p-2">
            <h5>Euro EN</h5>
          </div>
        </a>
        <a className="" download href="/my-cv.pdf">
          <div className="cv--select-option p-2">
            <h5>International</h5>
          </div>
        </a>
      </div>
    </div>
  );
};
