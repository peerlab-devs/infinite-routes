import React from "react";
import { Route, Link, Switch } from "react-router-dom";



const Lab = ({match}) => {
  return(
    <>
      {match.isExact && (<h1>{match.params.labName}</h1>)}
    </>
  )
}

const Category = ({ match }) => {
  // const category = categories.find(category => {
  //   return match.params.catId === category.id;
  // });


  return (
    <>
      {match.isExact && (
        <>
          <h1>Hi</h1>
          
           
              <div>
                <Link key={1} to={`${match.url}/lmp`}>
                  lmp
                </Link>
                <br/>
                <Link key={1} to={`${match.url}/cermat`}>
                  cermat
                </Link>
              </div>
       
          
  
        </>
      )}
      <Switch>
        <Route path={`${match.path}/:labName`} component={Lab} />
      </Switch>
    </>
  );
};

export const RoutingExample = () => {
  return (
    <Switch>
      <Route path={`/labs`} component={Category} />
    </Switch>
  );
};
