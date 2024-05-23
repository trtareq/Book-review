
const Review = () => {
    return (
        <div className="text-center">
                    <div className="badge badge-primary badge-lg"></div>
        <div className="badge badge-primary badge-md"></div>
        <div className="badge badge-primary badge-sm"></div>
        <div className="badge badge-primary badge-xs"></div>
        <div className="text-4xl p-5 justify-center font-extrabold bg-slate-100 text-center">
            Next Event
            <div className="lg:ml-96 text-center flex gap-5">
  <div>
    <span className="countdown font-mono text-4xl">
        <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
        <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div>
    <span className="countdown font-mono text-4xl">
      <span style={{"--value":50}}></span>
    </span>
    sec
  </div>
</div>
        </div>
        

<div className="stats shadow">
  
  <div className="stat place-items-center">
    <div className="stat-title">Orders</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
        
    );
};

export default Review;