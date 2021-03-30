import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class DishDetail extends Component {
    constructor(props){
        super(props);
    }
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
            if(comments != null)
                return(
                    <div>
                        <h4>Comments</h4>
                        <ListGroup>
                            {comments.map(() => {
                                    return(
                                        <div key={comments.id}>
                                                <ListGroupItem>{comments.comment}
                                                <br></br>
                                                <span>--</span>
                                                {comments.author}
                                                <span>,</span>
                                                {comments.date}
                                                </ListGroupItem>
                                        </div>
                                    )
                                }
                            )
                            }
                        </ListGroup>
                    </div>
                );
            else
                return(<div></div>);      
    };
    
  render() {
    return (
        <div className="row">
              <div className="col-12 col-md-5 m-1">
                {this.renderDish(this.props)}
              </div>
              <div className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.comments)}
              </div>
        </div> 
    );
  }
}
