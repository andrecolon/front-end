import React from "react";
import { useParams, Switch, Route, Link, useRouteMatch} from "react-router-dom";
import ItemDescription from "./ItemDesc.js";

function Items(props) {

  console.log("useParams", useParams());
  const itemId = useParams().itemId;


  const shopItem = props.items.find(item => item.id === Number(itemId));

  const { path, url } = useRouteMatch();
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={shopItem.imageUrl} alt={shopItem.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{shopItem.name}</h2>
          <h4>${shopItem.price}</h4>
        </div>
      </div>
      <nav className="item-sub-nav">
        <Link to={`${url}`}>Description</Link>
      
      </nav>
      <Switch>
        {/* These Routes create "nested routes". Meaning that when Item is rendered, the Routes are declared and then the url is compared against
      these new Routes. If there is a match that in addition to the Item rendering, then the matching sub-component will render as well.*/}
       
        {/* Because the itemdescription path matches the path to reach Item (in App.js), item descr will show by default */}
        <Route path={`${path}`}>
          <ItemDescription item={shopItem} />
        </Route>
      </Switch>
    </div>
  );
}
export default Items;