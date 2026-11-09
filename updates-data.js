/*
  UPDATES — edit this file to add news to the website.

  To add an update: copy one block { ... }, paste it at the TOP of the list,
  and change the text. Keep the commas between blocks.

  date     : "YYYY-MM-DD"
  category : "Income Tax", "GST", "Company Law", "TDS", "NGO" or any word
  title    : headline
  summary  : 1–3 sentences
  points   : optional bullet list ["...", "..."]  (or leave as [])
  source   : link to the official notice / article (or "")
*/
window.UPDATES = [
  {
    date: "2026-11-01",
    category: "GST",
    title: "GSTN advisory on registration of e-commerce sellers under new Rule 14B",
    summary: "GSTN has issued an advisory on the new Rule 14B of the CGST Rules (inserted by Notification No. 05/2026-Central Tax), under which a seller supplying goods through an e-commerce operator can obtain registration in another State or UT using the operator's warehouse.",
    points: [
      "Available to a person with an active regular registration under the same PAN in another State or UT and no physical presence or active registration in the target State",
      "Only for supplies made through e-commerce operators; output tax liability on supplies to registered persons should not exceed ₹2.5 lakh per month",
      "An approved warehouse of the e-commerce operator is declared as the place of business, with the operator's consent",
      "Application is made in Part B of Form GST REG-01; Aadhaar authentication and document verification must be completed within the specified time for ARN generation"
    ],
    source: "https://services.gst.gov.in/services/advisoryandreleases/read/682"
  },
  {
    date: "2026-10-30",
    category: "GST",
    title: "CBIC Instruction 02/2026-GST: interim limits on arrests, e-way bill interception and small notices",
    summary: "Pending amendments to the CGST Act recommended by the 57th GST Council, CBIC has issued Instruction No. 02/2026-GST dated 30 October 2026 to Central Tax field formations.",
    points: [
      "No further arrests are to be made under GST, in view of the recommendation to omit section 69",
      "Conveyances are to be intercepted only on specific intelligence, with written authorisation by an officer not below the rank of Joint Commissioner",
      "Inspection, detention or seizure is generally limited to cases where the supplier or recipient is registered or located in the officer's State or UT; this limit does not apply where there is no e-way bill and no document showing origin or destination",
      "Goods or conveyances in transit are not to be confiscated under section 130",
      "Show cause notices under sections 73, 74 and 74A are not to be issued where the amount involved (CGST, SGST/UTGST, IGST and cess together) is below ₹10,000",
      "The instruction applies until the corresponding legislative amendments take effect"
    ],
    source: "https://taxinformation.cbic.gov.in/view-pdf/1000592/ENG/Instructions"
  },
  {
    date: "2026-10-27",
    category: "GST",
    title: "GST rate and exemption changes for services from 1 November 2026",
    summary: "CBIC has issued Notification Nos. 02/2026 to 10/2026-Central Tax (Rate) dated 27 October 2026, with corresponding Integrated Tax (Rate) notifications, changing rates, ITC conditions and exemptions for certain goods and services from 1 November 2026.",
    points: [
      "Passenger transport by electric vehicles and renting of electric vehicles: 5%, subject to the prescribed ITC conditions",
      "Hotel accommodation (rooms up to ₹7,500 per day), restaurant services and outdoor catering continue at 5%, with ITC allowed on same-line input services subject to limits",
      "Specified delivery services through e-commerce operators: 5% without ITC; the e-commerce operator pays tax on delivery services (other than postal and courier) unless the supplier is liable to register under section 22(1)",
      "New exemptions include services of the Seamen's Provident Fund Organisation, storage of seeds for sowing, grant of toll collection rights by government, curing of coffee, and seat-share helicopter travel to specified North-Eastern areas",
      "Reverse charge on used cooking oil, plastic waste, tyre waste and e-waste supplied by unregistered persons to registered persons",
      "Retreaded tractor tyres: 5%; psyllium seeds: exempt"
    ],
    source: ""
  },
  {
    date: "2026-10-27",
    category: "Company Law",
    title: "No additional fees on CRA-4 for FY 2025-26 filed up to 31 December 2026",
    summary: "MCA General Circular No. 06/2026 dated 27 October 2026 provides that Form CRA-4 (cost audit report in XBRL) for FY 2025-26 filed up to 31 December 2026 will not attract additional fees.",
    points: [
      "Filings after 31 December 2026 will attract additional fees, counted from the original due date",
      "The circular relaxes additional fees; it does not change the due date under the Companies (Cost Records and Audit) Rules, 2014"
    ],
    source: "https://www.mca.gov.in/bin/ebook/dms/getdocument?doc=Njk5ODUxNzY2&docCategory=Circulars&type=open"
  },
  {
    date: "2026-10-30",
    category: "NGO",
    title: "Conditions prescribed for merger of registered non-profit organisations (Rule 189A)",
    summary: "CBDT has notified the Income-tax (Eighth Amendment) Rules, 2026 (Notification No. 139/2026 dated 30 October 2026), inserting Rule 189A and Form 112A for the merger of registered non-profit organisations having the same or similar objects.",
    points: [
      "An organisation with regular registration under section 332 cannot merge with one holding provisional registration, and vice versa",
      "No tax, interest, penalty or other demand should be outstanding, except where under appeal; the merged organisation must pay it once the appeal becomes final",
      "The merged organisation cannot amend its objects for five years from the end of the financial year of the merger",
      "Books of account of both organisations must be audited by an accountant as on the date of merger",
      "Form 112A must be filed electronically (DSC or EVC) with the jurisdictional Principal Commissioner or Commissioner within one month from the end of the month in which the merger takes effect"
    ],
    source: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-10/Notification-No-139-2026.pdf"
  },
  {
    date: "2026-10-28",
    category: "GST",
    title: "CBIC Circulars 265 and 266 clarify GST on certain supplies",
    summary: "CBIC has issued Circular Nos. 265/11/2026-GST and 266/12/2026-GST dated 28 October 2026, clarifying input tax credit under the margin scheme and the GST treatment of certain services.",
    points: [
      "Used-vehicle dealers under the margin scheme: the ITC restriction applies only to tax paid on the second-hand vehicles procured; ITC on other inputs and input services is available, subject to the CGST Act",
      "Grant-funded R&D: a certificate from the head of the eligible institution, stating that the activity is R&D and not consultancy, may suffice to claim the exemption",
      "Motor vehicle leasing: registration charges, insurance, FASTag and similar recoveries form part of the leasing supply and are taxed at the leasing rate",
      "TRAI is not 'Government' under section 2(53) of the CGST Act",
      "Notional interest under a bank's Fund Transfer Pricing mechanism falls within 'interest' for the exemption under Notification 12/2017-CT(Rate)",
      "Lending services provided by NBFCs to banks under co-lending arrangements are taxable, with value as per the contract"
    ],
    source: "https://taxguru.in/goods-and-service-tax/cbic-clarifies-gst-grants-shipping-vehicle-leasing-trai-bank-interest-nbfc-lending.html"
  },
  {
    date: "2026-10-27",
    category: "GST",
    title: "GST TDS extended to used cooking oil, plastic and tyre scrap, metal scrap and e-waste from 1 November 2026",
    summary: "Under Notification No. 07/2026-Central Tax dated 27 October 2026, registered persons receiving specified goods from registered suppliers must deduct TDS under section 51 of the CGST Act from 1 November 2026.",
    points: [
      "Goods covered: used cooking oil (heading 1518), waste and scrap of plastics (3915), waste and scrap of tyres (4004), metal scrap (Chapters 72 to 81) and electrical and electronic waste and scrap (8549)",
      "TDS at 2% of taxable value (1% CGST + 1% SGST, or 2% IGST), where the value of supply under a contract exceeds ₹2,50,000",
      "Notification No. 06/2026-Central Tax withdraws the special registration exemption for suppliers of these goods",
      "GSTN advisory dated 1 November 2026 explains TDS registration in Form GST REG-07"
    ],
    source: "https://taxguru.in/goods-and-service-tax/gst-tds-scrap-cooking-oil-waste-1-november-2026.html"
  },
  {
    date: "2026-10-26",
    category: "GST",
    title: "CGST Act amendments on discounts, credit notes and refunds in force from 1 November 2026",
    summary: "Notification No. 03/2026-Central Tax dated 26 October 2026 brings sections 153 to 155 of the Finance Act, 2026 into force from 1 November 2026, amending sections 15, 34 and 54 of the CGST Act.",
    points: [
      "Post-supply discounts can be excluded from the value of supply where the supplier issues a credit note and the recipient reverses the related ITC",
      "Section 34 expressly permits credit notes for discounts given after the supply",
      "The 90% provisional refund now also covers refunds of unutilised ITC in inverted duty structure cases",
      "Refunds of tax paid on goods exported with payment of tax are carved out of the minimum refund amount under section 54(14)"
    ],
    source: "https://taxguru.in/goods-and-service-tax/gst-amendments-effective-1-november-2026-discounts-credit-notes-refunds.html"
  },
  {
    date: "2026-10-26",
    category: "GST",
    title: "CBIC issues eight circulars following the 57th GST Council meeting",
    summary: "CBIC has issued Circular Nos. 257/03/2026-GST to 264/10/2026-GST dated 26 October 2026, giving clarifications and guidelines on a range of procedural issues.",
    points: [
      "Registration: documents, officer queries and processing timelines (Circular 257)",
      "Show cause notices, adjudication and first appeals (Circular 258), and computation of pre-deposit for appeals (Circular 259)",
      "Input Service Distributor (Circular 260) and the section 17(4) option for banks and NBFCs (Circular 261)",
      "ITC on demo vehicles is available to dealers under the dealer-agency model (Circular 262)",
      "Realisation of export proceeds (Circular 263) and omission of Rule 96(10) (Circular 264)"
    ],
    source: "https://taxguru.in/goods-and-service-tax/council-circular-cbic-implemented-57th-gst-council-current-title.html"
  },
  {
    date: "2026-10-24",
    category: "Company Law",
    title: "MCA extends time for FY 2025-26 annual filings without additional fees",
    summary: "The Ministry of Corporate Affairs has extended the time for filing financial statements and annual returns for FY 2025-26 without payment of additional fees.",
    points: [
      "AOC-4, AOC-4 (CFS), AOC-4 (XBRL), AOC-4 NBFC (Ind AS) and AOC-4 CFS NBFC (Ind AS): by 31 December 2026",
      "MGT-7 and MGT-7A: by 31 January 2027",
      "The time for holding AGMs is not extended",
      "Given effect by MCA General Circular No. 05/2026 dated 24 October 2026"
    ],
    source: "https://www.mca.gov.in/bin/dms/getdocument?mds=5vSiNq59rdjIZwZqMbEIgQ%253D%253D&type=open"
  },
  {
    date: "2026-10-22",
    category: "GST",
    title: "CBIC: GST Council reforms to roll out in phases; draft return forms open for comments",
    summary: "CBIC officials stated that reforms recommended by the 57th GST Council which do not need amendments to the law will start tentatively from 1 November 2026, in phases. No notification has been issued yet.",
    points: [
      "Automated refund sanctioning, where applicable, for future claims",
      "Changes needing amendments (prosecution thresholds, ₹10,000 threshold for notices, e-way bill provisions) are targeted for 1 April 2027",
      "Draft revised GSTR-1, GSTR-1A and IFF to be placed on myGov.in from 1 November 2026 for public comments until 30 November 2026; revised forms to apply from 1 April 2027"
    ],
    source: "https://kashmirobserver.net/2026/10/22/gst-reforms-to-roll-out-in-phases-from-nov-1-cbic/"
  },
  {
    date: "2026-10-16",
    category: "GST",
    title: "GSTN introduces e-invoicing for self-invoices under reverse charge",
    summary: "GSTN Advisory No. 678 introduces e-invoicing for recipient-generated self-invoices under reverse charge, for taxpayers with aggregate annual turnover of ₹5 crore and above.",
    points: [
      "RCMDOM: domestic supplies from unregistered persons",
      "RCMIMP: import of services",
      "Currently available only in the sandbox (testing) environment of the e-invoice portals",
      "Date of live rollout and start of reporting to be announced separately"
    ],
    source: "https://services.gst.gov.in/services/advisoryandreleases/read/678"
  },
  {
    date: "2026-09-28",
    category: "Income Tax",
    title: "Due dates extended for tax audit reports and ITRs of audit cases (AY 2026-27)",
    summary: "CBDT has extended the due dates for taxpayers whose accounts are required to be audited.",
    points: [
      "Tax audit report: extended from 30 September 2026 to 21 October 2026",
      "Income-tax return (audit cases): extended from 31 October 2026 to 21 November 2026",
      "Given effect by CBDT Circular No. 07/2026 dated 28 September 2026"
    ],
    source: "https://www.incometax.gov.in/iec/foportal/sites/default/files/2026-09/Circular-7-2026.pdf"
  },
  {
    date: "2026-10-12",
    category: "GST",
    title: "57th GST Council meeting: key recommendations",
    summary: "The Council made no rate changes and recommended several procedural relaxations. Most changes are expected to apply from 1 April 2027, subject to notification.",
    points: [
      "GST rate decisions to be taken once a year, effective from the next financial year",
      "Refund applications to be acknowledged within 10 days instead of 15",
      "Refund of inverted duty structure to cover input services from 1 November 2026",
      "No notices for tax amounts below ₹10,000; pending notices below this to be withdrawn",
      "Prosecution threshold proposed to rise from ₹1 crore to ₹5 crore"
    ],
    source: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2320934"
  },
  {
    date: "2026-04-01",
    category: "Income Tax",
    title: "Income-tax Act, 2025 in force from 1 April 2026",
    summary: "The new Income-tax Act, 2025 has replaced the Income-tax Act, 1961. It simplifies the language and structure of the law while keeping tax policy unchanged.",
    points: [
      "Passed by Parliament on 12 August 2025; assent on 21 August 2025",
      "Section numbers and forms have changed, so references in notices and documents should be checked against the new Act"
    ],
    source: "https://www.incometaxindia.gov.in/documents/d/guest/press-release-income-tax-act-2025-comes-into-force-from-01-april-2026-pdf"
  },
  {
    date: "2026-03-20",
    category: "Income Tax",
    title: "Income-tax Rules, 2026 notified with redesigned forms",
    summary: "CBDT notified the Income-tax Rules, 2026 to operationalise the new Act, along with simplified and standardised forms.",
    points: [],
    source: "https://www.incometaxindia.gov.in/documents/d/guest/press-release-income-tax-act-2025-comes-into-force-from-01-april-2026-pdf"
  }
];
