import React from 'react';
import {loadUser} from '../../../utility/LocalStorage';
import {formatDate} from '../../../utility/Formatter';
import {
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
} from 'reactstrap';

const UserProfile = () => {
    const user = loadUser();
    return (
        <div className='centredDiv' style={{marginTop: '50px'}}>
            <Card>
                <CardImg alt="card image cap" src="https://bit.ly/3kBevZ0" top="" width="50%"></CardImg>
                <CardBody>
                    <CardTitle>{user.name}</CardTitle>
                    <CardText>{user.email}</CardText>
                    <CardText>
                        <small className="text-muted">
                            Account created on {formatDate(user.created_at)}
                        </small>
                    </CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default UserProfile;