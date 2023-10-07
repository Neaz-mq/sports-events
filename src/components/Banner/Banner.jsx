

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/nrDFFyW/i-Stock-1049022558.jpg)'}}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 lg:text-5xl text-2xl font-bold text-white"> Entertainments Here</h1>
            <p className="mb-5 lg:text-lg text-base font-medium text-slate-50">Entertainment event means any form of circus or carnival, stage play, variety show, concert, magic, sports, comedy, racing and outdoor music festivals.</p>
            <button className="btn btn-error text-white">Read More</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;