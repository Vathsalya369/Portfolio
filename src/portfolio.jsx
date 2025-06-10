const Portfolio=()=>{
    return(
        <div>
            <h2 className="portfolio-heading">Things I've Built</h2>
            <div className="portfolio-container">
                <div className="card portfolio-card">
                    <img src="/Images/i2.png" class="card-img-top portfolio-card-img-top" alt="i2"/>
                    <div className="card-body portfolio-card-body">
                        <h5 className="card-title portfolio-card-title">Southern-Trip</h5>
                        <p className="card-text portfolio-card-text">A travel website built using HTML5, CSS3, and JavaScript.
Enables users to explore tourist spots across Andhra Pradesh, Telangana, Karnataka, and Kerala. Features include a dynamic UI, location-based selection, and real-time weather integration for smarter trip planning.</p>
                        <a href="https://vathsalya369.github.io/Southern-Trip/" target="_self" className="check_it_out">Explore Site</a>
                    </div>
                </div>
                <div className="card portfolio-card">
                    <img src="/Images/i3.png" class="card-img-top portfolio-card-img-top" alt="i3"/>
                    <div className="card-body portfolio-card-body">
                        <h5 className="card-title portfolio-card-title">Retro</h5>
                        <p className="card-text portfolio-card-text">A React-based Retro Café website that lets users browse the menu, add items to a cart, and view the total cost in a “Go to Bag” section. Includes an interactive contact form for customer inquiries.</p>
                        <a href="https://retro-ruddy.vercel.app" target="_self" className="check_it_out">Explore Site</a>
                    </div>
                </div>
                <div className="card portfolio-card">
                    <img src="/Images/i4.png" class="card-img-top portfolio-card-img-top" alt="i4"/>
                    <div className="card-body portfolio-card-body">
                        <h5 className="card-title portfolio-card-title">Performance Analysis of Compact Decoder for SRAM Arrays</h5>
                        <p className="card-text portfolio-card-text">Analyzed 6T SRAM cells across various technology nodes (180nm to 18nm FinFET), studying SNM, access time, and delay by varying Vdd and cell ratios. Compared CMOS SRAM arrays using standard and GDI-based decoders to evaluate read/write delay and power consumption.</p>
                        <a href="https://drive.google.com/file/d/1a8bMvtYNCkhPyVDfKKuSXcp4LEjyooz2/view?usp=sharing" target="_self" className="check_it_out">Read More</a>
                    </div>
                </div>
                <div className="card portfolio-card">
                    <img src="/Images/i5.png" class="card-img-top portfolio-card-img-top" alt="i5"/>
                    <div className="card-body portfolio-card-body">
                        <h5 className="card-title portfolio-card-title">Floor Cleaning Robot</h5>
                        <p className="card-text portfolio-card-text">Designed an Arduino-powered floor-cleaning robot capable of both dry and wet cleaning in a single run. Integrated suction, water dispensing, and mopping systems with Bluetooth app control for user-directed navigation and cleaning.</p>
                        <a href="https://drive.google.com/file/d/1aAdMSUSrBbrz2Dw4c4GJX94ZQEM2ydFK/view?usp=sharing" className="check_it_out">View Demo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;