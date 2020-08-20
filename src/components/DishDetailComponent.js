import React from 'react';
import  { Card , CardImg   , CardBody ,  CardText , CardTitle } from 'reactstrap';

class DishDetail extends React.Component
{
    constructor(props)
    {
        super(props);
        
    }
    renderComments(comments)
    {
        const options = { month: "long", day: "numeric", year: "numeric" };
        if(comments != null)
        {
            return (
                comments.map((currentItem)=>{
                    return(
                        <div >
                        <div key={currentItem.id} >  
                        <ul className="list-unstyled pl-2">
                        <li>{currentItem.comment}</li>
                        <li>--{currentItem.author},{" "}{new Intl.DateTimeFormat("en-US", options).format(new Date(currentItem.date))}</li>
                        </ul>
                        </div>
                        </div>
                        )
               
            })
            );
        }else{
            return (
                <div></div>
            )
        }
    }
    
    
    
    renderDish(selectedDish)
    {
        if (selectedDish != null)
        {
            return (
                
                <div >
                    <Card>
                        <CardImg width="100%" src={selectedDish.image} alt={selectedDish.name}/>
                        <CardBody>
                            <CardTitle>{selectedDish.name}</CardTitle>
                            <CardText>{selectedDish.description}</CardText> 
                        </CardBody>
                    </Card>
                      
                    
                </div>
            )

        }
        else{
            return (
                <div></div>
            );
        }
    }
    render()
    
    {
        
        return (
            
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <div className="col-12 col-md-12 m-1">
                        <div>
                            {this.renderComments(this.props.selectedDish.comments)}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default DishDetail;