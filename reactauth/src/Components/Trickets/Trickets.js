import React from 'react';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';


const Trickets = (props) => {
    const {name,image,fare,id} =props.tricket;

    const history = useHistory();
    const handleClick= (id) => {
        history.push(`/Tricket/${id}`);
    }

    return (
        <div>
            <div>
            < Card  border="info " style={{ width: '16rem' }} >
                    <Card.Img  style={{ width: '10rem' }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>                        
                        <Card.Text>Fare: {fare}</Card.Text>                        
                        
                                                
                        <Button onClick={()=> handleClick(id)} variant="primary" >Tricket Details  </Button>
                    </Card.Body>
                    </Card>
            </div>
             
        </div>
    );
};

export default Trickets;