import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "../stylesheets/App.scss";
import "../stylesheets/components/Confirmation.scss";
import AsideBar from "./AsideBar";

// es un pop up, por defecto necesita un display none, y aparece al clickar/solicitar
// dependiendo de la respuesta, se acepta o no la confirmación
// fechas cambian según los datos del estado actualizado(pasar por props)

const Confirmation = () => {
  return (
    <div className="mainwrapmain row">
      <AsideBar />
      <div className="confirmation__wrap">
        <h2 className="confirmation__title">Solicitud de vacaciones</h2>
        <p className="confirmation__text">
          La solicitud de tus vacaciones:{" "}
          <span className="confirmation__date">13/09/2019</span> hasta{" "}
          <span className="confirmation__date">16/09/2019</span> ha sido enviada
          correctamente, en breve recibirás un mail con la confirmación. Si no
          recibes este mail ponte en contacto con tu jefe de proyecto.
        </p>
        <Link to="/user">
          <Button name="Volver a solicitudes" />
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
