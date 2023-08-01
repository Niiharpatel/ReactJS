import React from 'react'
import { Button, Card, Image } from 'react-bootstrap'



function MusicCard(props) {
    return (
        <div className="py-4" >
            <Card style={{ width: '18rem', borderColor: "black", overflow: "hidden", boxShadow: "1px -1px 3px 1px" }} >
                <Image src={props?.getdata?.img} thumbnail style={{ borderRadius: "10px 10px 0px 0px", border: "none", height: '200px' }} />
                <Card.Body>
                    <Card.Title>{props?.getdata?.name}</Card.Title>
                    <Card.Text>
                        {props?.getdata?.Genres}
                    </Card.Text>
                    <Button variant="dark" href={props?.getdata?.link}>Tap to hear</Button>
                </Card.Body>
            </Card>
        </div>

    )
}

export default MusicCard