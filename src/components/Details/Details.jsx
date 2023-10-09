

const Details = () => {
    return (
        <div className="hero min-h-screen bg-base-200" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/Y0hXk7Y/12.jpg" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Entertainment Events!</h1>
      <p className="py-6">Entertainment event means a per- formance, recreation, amusement, diversion, spectacle, show or similar event including, but not limited to, a theatrical or musical performance, concert, film, game, ride or sporting event.</p>
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    );
};

export default Details;