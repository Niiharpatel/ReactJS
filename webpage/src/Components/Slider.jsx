import React from 'react'
import { Carousel } from 'react-bootstrap'

function Slider() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img style={{ height: '90vh', width: "100vw", objectFit: "cover" }}
                        className="d-block"
                        src="https://livedemo00.template-help.com/wt_51547/images/bg-1-1920x1000.jpg"
                        alt="first slide"
                    />
                    
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img style={{ height: '90vh', width: "100vw", objectFit: "cover" }}
                        className="d-block"
                        src="https://livedemo00.template-help.com/wt_51514/images/home1-02-1920x950.jpg"
                        alt="second slide"
                    />                   
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{ height: '90vh', width: "100vw", objectFit: "cover" }}
                        className="d-block"
                        src="https://livedemo00.template-help.com/wt_51514/images/home1-01-1920x950.jpg"
                        alt="Third slide"
                    />

                    {/* <Carousel.Caption >
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Slider