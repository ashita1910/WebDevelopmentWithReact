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
                            {comments.map(
                                (commentItem) => {
                                    return(
                                        <div key={commentItem.id}>
                                            <ListGroupItem>{commentItem.comment}</ListGroupItem>
                                            <ListGroupItem>
                                                <span>--</span>
                                                {commentItem.author}
                                                <span>,</span>
                                                {commentItem.date}
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
                {this.renderDish(this.props.selectedDish)}
              </div>
              <div className="col-12 col-md-5 m-1">
                  {/* {this.renderComments(this.props.selectedDish.comments)}
                   */}
                  {/* <ListGroup>
                    {this.renderComments(this.props.selectedDish.comments)}
                    </ListGroup> */}
              </div>
        </div> 
    );
  }
}
