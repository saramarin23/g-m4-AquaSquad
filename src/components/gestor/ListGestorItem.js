import React from "react";
import Circle from "../Circle";
import { Link } from "react-router-dom";
import "../../stylesheets/components/ListGestorItem.scss";

const ListGestorItem = props => {
  const { user } = props;
  return (
    <div className="mainwrap__gestoritem row col-12">
      <p className="col-4">22/01/2019 - 31/01/2019</p>
      <div className="mainwrap__gestoritem--status col-5">
        <Circle />
        <p>{user.name}</p>
        {/*  <p>{user.chapter_id}</p>  Usaremos este ID para saber qué vacaciones pendiente tiene este usuario*/}
      </div>
      <p className="col-3">Wadus</p>
      <Link to="gestor/confirmation/give">
        <button className="btn__green" type="radio" />
      </Link>
      <Link to="/reject">
        <button className="btn__red" type="radio" />
      </Link>
    </div>
  );
};

export default ListGestorItem;
