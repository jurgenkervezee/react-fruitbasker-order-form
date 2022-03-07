import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import Fruitbox from "./components/Fruitbox";


function App() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    let [amountBananen, setBananen] = useState(0);
    let [amountAardbeien, setAardbeien] = useState(0);
    let [amountAppels, setAppels] = useState(0);
    let [amountKiwis, setKiwis] = useState(0);
    let [termsAndConditionsValue, toggleTermsAndConditionsValue] = useState(false);
    let [deliverMomentValue, toggleDeliverMoment] = useState('morning');
    const selectedDeliverFrequency = watch('deliverFrequency');

    function onFormSubmit(data) {
        console.log(data);
        console.log("Bananen: " + amountBananen);
        console.log("Aardbeien: " + amountAardbeien);
        console.log("Appels: " + amountAppels);
        console.log("Kiwis: " + amountKiwis);
        console.log("Bezorgen: " + deliverMomentValue)
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Fruitbox
                fruitDescription="🍌 Bananen"
                fruitAmount={amountBananen}
                fruitSetter={setBananen}
            />
            <Fruitbox
                fruitDescription="🍓 Aardbeien"
                fruitAmount={amountAardbeien}
                fruitSetter={setAardbeien}
            />
            <Fruitbox
                fruitDescription="🍏 Appel"
                fruitAmount={amountAppels}
                fruitSetter={setAppels}
            />
            <Fruitbox
                fruitDescription="🥝 Kiwi"
                fruitAmount={amountKiwis}
                fruitSetter={setKiwis}
            />
            <span>
                <button
                    type="button"
                    id="resetBtn"
                    onClick={() => {
                        setBananen(0);
                        setAardbeien(0);
                        setKiwis(0);
                        setAppels(0);
                    }}
                >reset</button>
            </span>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                {errors.fName && <p id="validationMessage">{errors.fName.message}</p>}
                {errors.lName && <p id="validationMessage">{errors.lName.message}</p>}
                {errors.age && <p id="validationMessage">{errors.age.message}</p>}
                <table>
                    <tbody>
                    <tr>
                        <td>Voornaam</td>
                        <td>
                            <input
                            type="text"
                            {...register("fName", {
                                required: "* voornaam is verplicht",
                                minLength: {
                                    value: 3,
                                    message: "Voornaam moet minimaal 3 karakters bevatten"
                                }
                            })}
                            id="fName"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>Achternaam</td>
                        <td><input
                            type="text"
                            {...register("lName", {
                                required: "* achternaam is verplicht"})}
                            id="lName"
                        /></td>
                    </tr>
                    <tr>
                        <td>Leeftijd</td>
                        <td><input
                            {...register("age", {
                                min: {
                                    value: 18,
                                    message: "* minimaal 18 jaar"
                                },
                                max: {
                                    value: 99,
                                    message: "* maximaal 99 jaar"
                                }
                            })}
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
                            {...register("deliverFrequency")}
                            id="frequentie">
                            <option value="everyWeek">iedere week</option>
                            <option value="everyMonth">iedere maand</option>
                            <option value="everyYear">ieder jaar</option>
                            <option value="other">anders</option>
                        </select>
                            {selectedDeliverFrequency === "other" &&
                                <input
                                    type="text"
                                    {...register("deliverFrequencyOther")}
                                />
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Bezorgmoment</td>
                        <td>

                            <input
                                type="radio"
                                checked={deliverMomentValue==="morning"}
                                onChange={(e)=> {toggleDeliverMoment(e.target.value)}}
                                name="deliveryMoment"
                                id="morning"
                                value="morning"/>ochtend
                            <input
                                type="radio"
                                checked={deliverMomentValue==="evening"}
                                onChange={(e)=> {toggleDeliverMoment(e.target.value)}}
                                name="deliveryMoment"
                                id="evening"
                                value="evening"/>avond
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
                    checked={termsAndConditionsValue}
                    onChange={() => {toggleTermsAndConditionsValue(!termsAndConditionsValue)}}
                />Ik ga akkoord met de voorwaarden<br/>
                <button type="submit">Versturen</button>
            </form>
        </>
    );
}

export default App;