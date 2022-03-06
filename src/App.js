import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import './App.css';
import Fruitbox from "./components/Fruitbox";


function App() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    let [amountBananen, setBananen] = useState(0);
    let [amountAardbeien, setAardbeien] = useState(0);
    let [amountKiwis, setKiwis] = useState(0);
    const selectedDeliverFrequency = watch('deliverFrequency');


    function onFormSubmit(data) {
        console.log(data);
        console.log("Bananen: " + amountBananen);
        console.log("Aardbeien: " + amountAardbeien);
    }

    function addKiwis(){
        setKiwis(amountKiwis + 1);
    }

    function substractKiwis(){
            setKiwis(amountKiwis - 1)
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


            <Fruitbox
                fruitDescription="Kiwi"
                fruitAmount={amountKiwis}
                fruitAdder= {addKiwis}
                fruitSub={substractKiwis}
            />

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
                    <tr>{errors.fName && <div id="validationMessage">{errors.fName.message}</div>}</tr>
                    <tr>{errors.lName && <div id="validationMessage">{errors.lName.message}</div>}</tr>
                    <tr>{errors.age && <div id="validationMessage">{errors.age.message}</div>}</tr>
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
                                    message: "Minimaal 18 jaar"
                                },
                                max: {
                                    value: 99,
                                    message: "Maximaal 99 jaar"
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
                                {...register("deliverMomentMorning")}
                                type="radio"
                                name="deliveryMoment"
                                id="morning"
                                value="ochtend"/>ochtend
                            <input
                                {...register("deliverMomentEvening")}
                                type="radio"
                                name="deliveryMoment"
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