import React, { useState } from "react";

import Hooks from "../hooks";
import "./FormularzKontaktowy.css";

const FormularzKontaktowy = () => {
  const formularzKontaktowy = Hooks.useFormularzKontaktowy;

  // const [kontaktImie, setKontaktImie] = useState();
  // const [kontaktNazwisko, setKontaktNazwisko] = useState();
  // const [kontaktEmail, setKontaktEmail] = useState("pk@pk.com");

  // console.log(kontaktImie);
  // console.log(kontaktNazwisko);
  // console.log(kontaktEmail);

  return (
    <form
      action="#form-kontakt-1"
      method="get"
      id="formularzKontaktowy"
      className="formularzKontaktowy"
      onSubmit={formularzKontaktowy.onClickSubmit}
    >
      <h1>Formularz kontaktowy</h1>

      <fieldset>
        <legend>Dane kontaktowe</legend>
        <label for="imie">Podaj imię:</label>
        <input
          id="imie"
          type="text"
          name="Imie"
          value={formularzKontaktowy.kontaktImie}
          onChange={formularzKontaktowy.onChangeNazwisko}
        />
        <label for="nazwisko">Podaj nazwisko:</label>
        <input
          id="nazwisko"
          type="text"
          name="Nazwisko"
          value={formularzKontaktowy.kontaktNazwisko}
          onChange={formularzKontaktowy.onChangeImie}
        />
        <label for="email">Podaj email:</label>
        <input
          id="email"
          type="text"
          name="email"
          required
          value={formularzKontaktowy.kontaktEmail}
          onChange={formularzKontaktowy.onChangeEmail}
        />
      </fieldset>

      <fieldset>
        <legend>Zgody marketingowe</legend>
      </fieldset>

      <fieldset>
        <legend>Zgody na przetwarzanie RODO</legend>
      </fieldset>

      <fieldset>
        <button
          type="submit"
          formmethod="get"
          formaction="#form-kontakt-action-1"
        >
          Wyślij 1
        </button>

        <button type="reset">Wyczyść</button>

        <input
          type="submit"
          value="Wyślij 2"
          formmethod="get"
          formaction="#form-kontakt-action-2"
        />
      </fieldset>
    </form>
  );
};

export default FormularzKontaktowy;
