const footerData = [
  {
    title: "Disclosures And Reports",
    links: [
      "Public Disclosures",
      "Annual Reports",
      "Annual Returns",
      "Financial Returns",
      "Public Disclosures under SEBI Regulation",
      "NSE Disclosure Under Reg 62 of SEBI LODR 2015",
      "Policy Holder Dues",
      "TPA/In House Public Disclosure",
      "Public Notice",
      "Important Company Policies",
    ],
  },
  {
    title: "Miscellaneous",
    links: [
      "Self Help",
      "Feedback",
      "Claim Intimation Form",
      "Products Filed With IRDAI",
      "Tenders",
      "Careers",
      "PMFBY Claims",
      "Independent External Monitors",
      "FAQ",
      "Open EIA",
      "Contact Us",
      "Grievance Redressal",
    ],
  },
  {
    title: "Website Usage",
    links: [
      "Content Contribution Moderation and Approval (CMAP) Policy",
      "Web Information Manager",
      "Content Review (CRP) policy",
      "Sitemap",
      "Content Archival Policy",
      "Copyright Policy",
      "Contingency Management Plan",
      "Hyperlink Policy",
      "Website Monitoring Plan",
      "Website Security Policy",
      "Privacy Policy",
      "Disclaimer",
      "Terms And Conditions",
    ],
  },
  {
    title: "Our Commitment",
    links: [
      "RTI",
      "CSR",
      "Citizen Charter",
      "AML Policy",
      "Whistle Blower Policy",
      "Surveyor Management Policy",
      "Important Company Policies",
      "Policy On Prohibition Of Insider Trading",
      "Moving Towards 100% Cashless",
      "Vigilance",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-red-50 p-6 text-gray-800">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {footerData.map((section, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
            <ul>
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-1 hover:text-blue-500 cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-red-400">BEWARE OF SUSPICIOUS PHONE CALLS OF FICTITIOUS / FRAUDULENT OFFERS</h2>
        <p>IRDAI is not involved in activities like selling insurance policies, announcing bonus or investment of premiums.</p>
        <p>Public receiving such phone calls are requested to lodge police complaint.</p>
        <br/>
        <hr/>
        <p>Insurance is the subject matter of solicitation. T&Cs apply.</p>
        <p>For more details on risk factors, terms and conditions, please read sales brochure carefully before concluding a sale.</p>
        <p>IRDAI registration number: 556, CIN: U66010DL1947GOI007158</p>
        <p>© Copyright 2024 The Oriental Insurance Company Ltd.</p>
        <p>Site best viewed in Chrome 43.0, Mozila 38.0 and IE 11.0 and above (1280 X 800) | Last reviewed and updated on 26 Aug, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
