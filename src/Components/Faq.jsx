import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Faq = () => {
    const categories = [
        "Motor Insurance",
        "Household Insurance",
        "Health Insurance",
        "Shopkeeper Insurance",
        "Personal Accident Insurance",
    ];

    const faqData = {
        "Motor Insurance": [
            {
                question: "Can a duplicate policy be obtained?",
                answer: "Yes, please approach the same office which has issued the policy, with a written request . A nominal fee is charged for issuing duplicate policy copy.",
            },
            {
                question: "Where can I renew my policy?",
                answer: "Existing insurance will be renewed by the same office. Please contact the office concerned for exact premium and pay it to the same office. Do not send your premium to any other office or to the Regional Office/Head Office. You can also log on to our portal and register yourself as our customer and renew package policies of private cars and two wheelers from our portal itself.",
            },
            {
                question: "Can I transfer my insurance to the purchaser of my vehicle?",
                answer: "Yes, the insurance can be transferred to the buyer of the vehicle, provided the seller gives in writing to the insurance company. A fresh proposal form needs to be filled in. There is a nominal fee charged for transfer of insurance. Please contact the concerned insurance office for guidance and terms and conditions.",
            },
            {
                question: "Where can I get my vehicle insured?",
                answer: "Insurance can be done at any of our offices generally doing Motor Insurance business. Please visit our website for finding an office convenient to you: www.orientalinsurance.org.in . On the website click on OFFICE LOCATOR. Please select state and city to get list of offices with their contact details. Remember, not all offices may be underwriting Motor Insurance business. You can also log on to our portal and register yourself as our customer and purchase package policies of private cars and two wheelers from our portal itself.",
            },
        ],
        "Household Insurance": [
            {
                question: "What is the territorail limit under this policy?",
                answer: "Cover is available within India only, except for Personal Accident & Baggage Section.",
            },
            {
                question: "Are all the sections are compulsory under the Policy?",
                answer: "No. Only Section I-B (Fire & Allied Perils) cover against household contents is compulsory. In addition to this the insured has to opt any two more section from remaining Nine Sections.",
            },
            {
                question: "What is Householder Package Policy?",
                answer: "Householder Insurance Policy offers comprehensive protection for your home (residential building) and its contents against a variety of risks."
            }
        ],
        "Health Insurance": [
            {
                question: "What is the cancellation ploicy?",
                answer: "Cancellation on the request of Insured or by the Company after giving 30 days",
            },
            {
                question: "What is the Payout basis?",
                answer: "Cashless services for covered expenses in Network hospitals Reimbursement of covered expenses Reimbursement for treatment taken in SAARC countriesFixed amount for specified diseases (Life Hardship Survival Benefit)",
            },
            {
                question: "What is Co-payment?",
                answer: "10% of each claim as Co-payment only in Silver plan 20% compulsory co-payment in cases  where Entry Age is above 65 years"
            },
            {
                question: "What am I covered for?",
                answer: "3 Plans-Silver, Gold & Diamond-Sum Insured (SI) Rs.2 to Rs.20lacs Hospital admission of minimum 24 hours Related medical expenses incurred 30 days prior to hospitalization & 60 days from date of discharge Specified / Listed procedures requiring"
            },
            {
                question: "Waiting period?",
                answer: "Pre-existing diseases: Covered after 48 months Initial waiting period: 30 days for all illnesses (not applicable on renewal or for accidents) Specific waiting periods: 12 months for named diseases(clauses 4.3 (i & ii)) 24 months for disease at"
            }
        ],
        "Shopkeeper Insurance": [
            {
                question: "How does one select the sum insured?",
                answer: "For building, the sum insured must cover the full cost of rebuilding the property including architect fee etc and the cost of clearing away the debris and cost of meeting any new building regulations or by-laws.For contents, the sum insured should be the replacement value.For the remaining sections such as Money Insurance (Section 3), Fidelity Guarantee (Section 9), Personal Accident (Section 8), Public Liability & Workmen Compensation (Section 12) and Business Interruption (Section 13), the sum insured is as opted by the proposer.",
            },
            {
                question: "How to take Policy?",
                answer: "Take a good look at the Proposal form and identify your requirement for insurance.Prepare a list of items desired to be insured, with proper valuation.Remember that liability cover is on reimbursement basis and limited to the sum insured selected.Ensure that there is no misstatement, or misrepresentation; since the proposal is the basis of the contract.The liability of the Company does not commence until the proposal has been accepted and full premium paid.",
            },
            {
                question: "How to lodge claim?",
                answer: "Give immediate notice of claim. Obtain the claim form from the Company (also available on our website) and provide full details of the loss, as sought in the form. Do not dispose off / destroy damaged property, if any, till company permits such disposal. Take necessary steps to minimize loss and keep the Insurance Company apprised. Please ensure that no bribe is given to anyone on account of settlement of claim. Please report any such demand immediately to the Company."
            },
            {
                question: "What is not covered under Shopekeeper Insurance Policy?",
                answer: "Loss/Damage to bonds, securities, precious stones, jewellery, cash, valuables, Live stock, Motor Vehicle, Pedal Cycle etc , Loss/damage to animals, motor vehicles, pedal cycles, documents, bonds, securities, jewellery, cash valuables etc , Loss of money where an employee of the insured or member of the family of the Insured,is concerned as principal or accessory , Loss of money from safe following the use of the key to the said safe or any duplicate thereof belonging to the insured unless such key has been obtained by assault or violence or any threat, Loss/damage while racing, pace-making whilst used for hire or reward, overloading, strain, or mechanical breakdown, theft of accessories unless pedal cycle is stolen at the same time , Breakage of frameworks, disfiguration/ scratching of glass, unless specifically stated , Loss or damage by fusing or burning of any bulbs and/or tubes arising from short circuiting or arcing or any other mechanical or electrical breakdown , Cash, jewellery, travel tickets, consumable goods, loose articles such as sticks, umbrellas, sunshades etc, Exceptions as per PA Policy such as Suicide or attempted suicide"
            }
        ],
        "Personal Accident Insurance": [
            {
                question: "Can non-earning individual take Personal Accident Insurance cover?",
                answer: "A non earning individual can have policies like Janta Personal Accident Policy, Gramin Personal Accident Policy.",
            },
            {
                question: "What is the age limit under personal accident cover?",
                answer: "This Policy is available to persons between the age of 5 and 70 years (Male & Female). In case of Family Package covers, the age of children should be between 5 to 19 years. The age ceiling of 70 years can be relaxed in special conditions subject to suitable premium loading.",
            },
            {
                question: "Is there any discount for getting family cover?",
                answer: "Yes, depending upon the number of persons covered, family discount is granted."
            },
            {
                question: "What is personal Accident Insurance?",
                answer: "Personal Accident is an insurance cover wherein, in the event of the person sustaining bodily injuries resulting solely and directly from an accident caused by EXTERNAL, VIOLENT & VISIBLE means , resulting into death or disablement."
            }
        ],
    };

    const [selectedCategory, setSelectedCategory] = useState("Motor Insurance");
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-2xl font-bold text-center mb-4">
                Got questions? We had love to answer
            </h2>

            {/* Categories Tabs */}
            <div className="flex flex-wrap justify-center gap-4 border-b pb-2">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`text-lg font-semibold pb-2 transition ${selectedCategory === category
                                ? "text-orange-500 border-b-2 border-orange-500"
                                : "text-gray-800 hover:text-orange-500"
                            }`}
                        onClick={() => {
                            setSelectedCategory(category);
                            setOpenFaq(null);
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-6 space-y-4">
                {faqData[selectedCategory].map((faq, index) => (
                    <div key={index} className="border-b pb-2">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        >

                            <span
                                className={"text-lg text-black"
                                }
                            >
                                {faq.question}
                            </span>
                            {openFaq === index ? (
                                <FiMinus className="text-orange-500 text-xl transition" />
                            ) : (
                                <FiPlus className="text-gray-800 text-xl transition" />
                            )}
                        </div>
                        {/* Answer */}
                        {openFaq === index && (
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
