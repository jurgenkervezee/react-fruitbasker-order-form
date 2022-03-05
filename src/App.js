
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './App.css';


function App() {
    const { handleSubmit, formState: { errors }, register } = useForm();
    let [amountBananen, setBananen] = useState(0);
    let [amountAardbeien, setAardbeien] = useState(0);

    function onFormSubmit(data) {
        console.log(data);
    }
    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <div id="fruitbox">
                <div>🍌 Bananen</div>
                <button
                    type="button"
                    onClick={() => {
                        setBananen(amountBananen - 1)
                    }}
                    disabled={amountBananen === 0}
                >-
                </button>
                <div>{amountBananen}</div>
                <button
                    type="button"
                    onClick={() => {
                        setBananen(amountBananen + 1)
                    }}
                >+
                </button>
            </div>
            <div id="fruitbox">
                <div>🍓 Aardbeien</div>
                <button
                    type="button"
                    onClick={() => {
                        setAardbeien(amountAardbeien - 1)
                    }}
                    disabled={amountAardbeien === 0}
                >-
                </button>
                <div>{amountAardbeien}</div>
                <button
                    type="button"
                    onClick={() => {
                        setAardbeien(amountAardbeien + 1)
                    }}
                >+
                </button>
            </div>
            <span>
        <button
            type="button"
            id="resetBtn"
            onClick={() => {
                setBananen(0);
                setAardbeien(0);
            }}
        >reset</button>
      </span>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <table>
                    <tbody>
                    <tr>
                        <td>Voornaam</td>
                        <td>
                            <input
                            type="text"
                            {...register("name", {
                                required: "voornaam is verplicht" })}
                            id="firstName"
                            />{errors.name && <p>{errors.name.message}</p>}
                        </td>
                    </tr>
                    <tr>
                        <td>Achternaam</td>
                        <td><input
                            {...register("lastName")}
                            type="text"
                            id="lastName"
                        /></td>
                    </tr>
                    <tr>
                        <td>Leeftijd</td>
                        <td><input
                            {...register("age")}
                            type="number"
                            id="age"
                            defaultValue="0"/>
                        </td>
                    </tr>
                    <tr>
                        <td>Postcode</td>
                        <td><input
                            {...register("postalCode")}
                            type="text"
                            id="postalCode"
                        /></td>
                    </tr>
                    <tr>
                        <td>Bezorg frequentie</td>
                        <td><select
                            {...register("deliverFrequentie")}
                            id="frequentie">
                            <option value="everyWeek">iedere week</option>
                            <option value="everyMonth">iedere maand</option>
                            <option value="everyYear">ieder jaar</option>
                        </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Bezorgmoment</td>
                        <td>
                            <input
                                {...register("deliverMomentMorning")}
                                type="radio"
                                id="morning"
                                value="ochtend"/>ochtend
                            <input
                                {...register("deliverMomentEvenening")}
                                type="radio"
                                id="evening"
                                value="avond"/>avond
                        </td>
                    </tr>
                    </tbody>
                </table>
                <textarea
                    {...register("comments")}
                    id="comments"
                    rows="5"
                    cols="32"
                    placeholder="opmerkingen"
                >
                </textarea><br/>
                <input
                    {...register("termsAndConditions")}
                    type="checkbox"
                    id="termsAndConditions"
                />Ik ga akkoord met de voorwaarden<br/>
                <button type="submit">Versturen</button>
            </form>
        </>
    );
}

export default App;