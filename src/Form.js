import { useState } from 'react';
import { useForm } from 'react-hook-form';

function MultiStepForm() {

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [number, setNumber] = useState("")
    const [plan, setPlan] = useState("")
    const [step, setStep] = useState(1)
    const [planPrice, setplanPrice] = useState(0)
    const [isYearly, setIsYearly] = useState(false)
    const [onlineService, setOnlineService] = useState(0)
    const [LocalStorage, setLocalStorage] = useState(0)
    const [customProfile, setCustomProfile] = useState(0)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setName(data.Name)
        setMail(data.email)
        setNumber(data.mobilenumber)
        console.log(name, mail, number)
        setStep(2)
    }
    const handlePlan = (e) => {
        setPlan(e)
        if (isYearly == true) {
            if (e == "arcade") {
                setplanPrice(90)
            }
            else if (e == "advanced") {
                setplanPrice(120)
            }
            else if (e == "pro") {
                setplanPrice(150)
            }
        } else {
            if (e == "arcade") {
                setplanPrice(9)
            }
            else if (e == "advanced") {
                setplanPrice(12)
            }
            else if (e == "pro") {
                setplanPrice(15)
            }
        }
    }
    const handlePlanDuration = () => {
        if (isYearly == true) {
            setIsYearly(false)
        } else {
            setIsYearly(true)
        }
    }
    const handleonLine = () => {
        if (onlineService == 0) {
            if (isYearly == true) {
                setOnlineService(10)
            } else {
                setOnlineService(1)
            }
        } else {
            setOnlineService(0)
        }
    }
    const handleLocal = () => {
        if (LocalStorage == 0) {
            if (isYearly == true) {
                setLocalStorage(20)
            } else {
                setLocalStorage(2)
            }
        } else {
            setLocalStorage(0)
        }
    }
    const handleProfile = () => {
        if (customProfile == 0) {
            if (isYearly == true) {
                setCustomProfile(20)
            } else {
                setCustomProfile(2)
            }
        } else {
            setCustomProfile(0)
        }
    }
    return (
        <div>
                <div className='topNav'>
                    <div className={step == 1 ? "step-count active" : "step-count"}>1</div>
                    <div className={step == 2 ? "step-count active" : "step-count"}>2</div>
                    <div className={step == 3 ? "step-count active" : "step-count"}>3</div>
                    <div className={step == 4 || step==5 ? "step-count active" : "step-count"}>4</div>
                </div>
            <div className="form-container">
                <div className="form-body row">
                    <div className="col-sm-4 side-nav">
                        <div>
                            <div className="step-container">

                                <div className={step == 1 ? "step-count active" : "step-count"}>1</div>
                                <div>
                                    <span className="step-name">STEP 1</span>
                                    <span className="step-details">YOUR INFO</span>
                                </div>
                            </div>
                            <div className="step-container">

                                <div className={step == 2 ? "step-count active" : "step-count"}>2</div>
                                <div >
                                    <span className="step-name">STEP 2</span>
                                    <span className="step-details">SELECT PLAN</span>
                                </div>
                            </div>
                            <div className="step-container">

                                <div className={step == 3 ? "step-count active" : "step-count"}>3</div>
                                <div>
                                    <span className="step-name">STEP 3</span>
                                    <span className="step-details">ADD-ONS</span>
                                </div>
                            </div>
                            <div className="step-container">

                                <div className={step == 4 || step == 5 ? "step-count active" : "step-count"}>4</div>
                                <div>
                                    <span className="step-name">STEP 4</span>
                                    <span className="step-details">SUMMARY</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-8 col-xs-12">
                        {/* step1 */}
                        {
                            step == 1 ? (
                                <div className="form-field">
                                    <h2 className="form-head">Personal info</h2>
                                    <h5 className="form-subhead">Please provide your name, email address, and phone number.</h5>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-inputsec">
                                            <label htmlFor="Name">Name</label>
                                            <input type="text" placeholder="e.g. Stephen King" name="Name"  {...register('Name', { required: true })} />
                                            {errors.Name && <p>Name is required.</p>}
                                        </div>
                                        <div className="form-inputsec">
                                            <label htmlFor="e-mail">Email Address</label>
                                            <input type="text" placeholder="e.g. stephenking@lorem.com" name="email" {...register('email', { required: true })} />
                                            {errors.email && <p>Email is required.</p>}
                                        </div>
                                        <div className="form-inputsec">
                                            <label htmlFor="mobile-number">Phone Number</label>
                                            <input type="number" placeholder="e.g. +1 234 567 890" name="mobilenumber"
                                                {...register('mobilenumber', { required: true })} />
                                            {errors.mobilenumber && <p>Phone number is required.</p>}
                                        </div>

                                        <button type="submit">Next Step</button>
                                    </form>
                                </div>
                            ) : ""
                        }

                        {/* step2 */}
                        {
                            step == 2 ? (
                                <div className="form-field">
                                    <h2 className="form-head">Select your plan</h2>
                                    <h5 className="form-subhead">You have option of monthly or yearly billing</h5>

                                    <div className='plan-card-sec'>
                                        <div className={plan == "arcade" ? 'plan-card active' : 'plan-card'} onClick={() => handlePlan("arcade")}>
                                            <img src='/assets/images/icon-arcade.svg' />

                                            <div className='plan-det-sec'>
                                                <p className='plan-title'>Arcade</p>
                                                <p className='plan-price'>{isYearly ? "$90/yr" : "$9/mo"}</p>
                                                {isYearly ? <p className='freebie'>2 months free</p> : ""}
                                            </div>
                                        </div>
                                        <div className={plan == "advanced" ? 'plan-card active' : 'plan-card'} onClick={() => handlePlan("advanced")}>
                                            <img src='/assets/images/icon-advanced.svg' />

                                            <div className='plan-det-sec'>
                                                <p className='plan-title'>Advanced</p>
                                                <p className='plan-price'>{isYearly ? "$120/yr" : "$12/mo"}</p>
                                                {isYearly ? <p className='freebie'>2 months free</p> : ""}
                                            </div>
                                        </div>
                                        <div className={plan == "pro" ? 'plan-card active' : 'plan-card'} onClick={() => handlePlan("pro")}>
                                            <img src='/assets/images/icon-pro.svg' />

                                            <div className='plan-det-sec'>
                                                <p className='plan-title'>Pro</p>
                                                <p className='plan-price'>{isYearly ? "$150/yr" : "$15/mo"}</p>
                                                {isYearly ? <p className='freebie'>2 months free</p> : ""}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <section>
                                            <span className={!isYearly ? 'selected' : "blur"}>Monthly</span>
                                            <span class="switch">
                                                <input id="switch-rounded" type="checkbox" onChange={handlePlanDuration} />
                                                <label for="switch-rounded"></label>
                                            </span>
                                            <span className={isYearly ? 'selected' : "blur"}>Yearly</span>
                                        </section>
                                    </div>
                                    <button className='next-btn' onClick={() => { if (planPrice > 0) { setStep(3) } }}>Next Step</button>
                                    <button className='back-btn' onClick={() => setStep(1)}>Go Back</button>
                                </div>
                            ) : ""
                        }


                        {/* step3 */}

                        {step == 3 ? (
                            <div className="form-field">
                                <h2 className="form-head">Pick add-ons</h2>
                                <h5 className="form-subhead">Add ons help your gaming experience</h5>
                                <div>
                                    <div className={onlineService>0?'addon-cont active':'addon-cont'}>
                                        <div>
                                            <input type='checkbox' onChange={handleonLine} />
                                        </div>
                                        <div>
                                            <p className='plan-title'>Online Service</p>
                                            <p className='plan-price'>Access to multiplayer games</p>
                                        </div>
                                        <div>
                                            <p className='pricing'>{isYearly ? "+$10/yr" : "+$1/mo"}</p>
                                        </div>
                                    </div>
                                    <div className={LocalStorage>0?'addon-cont active':'addon-cont'}>
                                        <div>
                                            <input type='checkbox' onChange={handleLocal} />
                                        </div>
                                        <div>
                                            <p className='plan-title'>Larger Storage</p>
                                            <p className='plan-price'>Extra 1 TB of cloud save</p>
                                        </div>
                                        <div>
                                            <p className='pricing'>{isYearly ? "+$20/yr" : "+$2/mo"}</p>
                                        </div>
                                    </div>
                                    <div className={customProfile>0?'addon-cont active':'addon-cont'}>
                                        <div>
                                            <input type='checkbox' onChange={handleProfile} />
                                        </div>
                                        <div>
                                            <p className='plan-title'>Customizable profile</p>
                                            <p className='plan-price'>Custom theme on your profile</p>
                                        </div>
                                        <div >
                                            <p className='pricing'>{isYearly ? "+$20/yr" : "+$2/mo"}</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='next-btn' onClick={() => setStep(4)}>Next Step</button>
                                <button className='back-btn' onClick={() => setStep(2)}>Go Back</button>
                            </div>
                        ) : ""}

                        {/* step-4 */}

                        {step == 4 ? (
                            <div className="form-field">
                                <h2 className="form-head">Finishing Up</h2>
                                <h5 className="form-subhead">Double-Check everything looks OK before confirming</h5>
                                <div className='final-field'>
                                    <div className='bill-cont'>
                                        <div className='plan-cont'>
                                            <div>
                                                <p className='plan-title m-0'>{plan} {isYearly ? "(Yearly)" : "(Monthly)"}</p>
                                                <p className='change-btn m-0' onClick={()=>{setStep(2)}}> Change</p>
                                            </div>
                                            <p className='plan-title'>${planPrice}/{isYearly ? "yr" : "mo"}</p>
                                        </div>
                                        <hr />
                                        {
                                            onlineService > 0 ? (
                                                <div className='plan-cont'>
                                                    <p className='plan-price'>Online Service</p>
                                                    <p className='plan-title '>${onlineService}/{isYearly ? "yr" : "mo"}</p>
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            LocalStorage > 0 ? (
                                                <div className='plan-cont'>
                                                    <p className='plan-price'>Local Storage</p>
                                                    <p className='plan-title '>${LocalStorage}/{isYearly ? "yr" : "mo"}</p>
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            customProfile > 0 ? (
                                                <div className='plan-cont'>
                                                    <p className='plan-price'>Custom profile</p>
                                                    <p className='plan-title '>${customProfile}/{isYearly ? "yr" : "mo"}</p>
                                                </div>
                                            ) : ""
                                        }

                                    </div>
                                    <div className='final-cont'>
                                        <p className='plan-price'>Total{isYearly ? "(per year)" : "(per month)"}</p>
                                        <p className='final-price'>${planPrice + onlineService + LocalStorage + customProfile}/{isYearly ? "yr" : "mo"}</p>
                                    </div>
                                </div>

                                <button className='cnfrm-btn' onClick={() => setStep(5)}>Confirm</button>
                                <button className='back-btn' onClick={() => setStep(3)}>Go Back</button>
                            </div>
                        ) : ""}

                        {/* step5 */}
                        {step == 5 ? (
                            <div className='thanks-cont'>
                                <div>
                                    <img src='/assets/images/icon-thank-you.svg' />
                                    <h1>Thank you!</h1>
                                    <p>Thanks for confirming your subscription! we hope you have fun using our platform. If you ever need support please feel free to email us @loremgaming.com</p>
                                </div>
                            </div>
                        ) : ""}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MultiStepForm;