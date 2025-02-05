// const Reason = () => {
//   return (
//     <div className="text-center">
//         <h2>Why Choose Oriental Insurance</h2>
//         <p>We protect you, your future and the things you care about!!</p>
//         <p>An Indian Brand, Owned by Indians. Operated by Indians</p>
//         <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4">
//             <div>
//                 <h4>Customer First</h4>
//                 <p>Customer Friendly apporach. We protect what matters most to our Customers.</p>
//             </div>
//             <div>
//                 <h4>High Claim Settlement Ratio</h4>
//                 <p>95.49% Claim settlement Ratio for FY 2023-24.</p>
//                 </div>
//                 <div>
//                     <h4>Trustworthy & Dependable</h4>
//                     <p>76+ years in service of the nation.</p>
//                     </div>
//                     <div>
//                         <h4>Customer Support</h4>
//                         <p>24*7*365 support to Customers with a dedicated team of 6000+ employees. 6000+ Agents & POSPs; 1000+ office and an advanced Online Plateform.</p>
//                     </div>
//         </div>
//     </div>
//   )
// }

// export default Reason





const Reason = () => {
    return (
      <div className="text-center py-10 px-4 lg:px-20 bg-red-50">
        {/* Title Section */}
        <h2 className="text-3xl font-bold ">Why Choose Oriental Insurance</h2>
        <p className="text-lg  mt-2">We protect you, your future, and the things you care about!</p>
        <p className="text-lg font-semibold mb-6">
          An Indian Brand, Owned by Indians, Operated by Indians.
        </p>
  
        {/* Grid Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="p-6 text-start">
            <h4 className="text-xl font-semibold ">Customer First</h4>
            <p className=" mt-2">
              Customer-friendly approach. We protect what matters most to our customers.
            </p>
          </div>
  
          {/* Feature 2 */}
          <div className=" p-6 text-start">
            <h4 className="text-xl font-semibold ">High Claim Settlement Ratio</h4>
            <p className=" mt-2">
              95.49% Claim settlement ratio for FY 2023-24.
            </p>
          </div>
  
          {/* Feature 3 */}
          <div className=" p-6 text-start">
            <h4 className="text-xl font-semibold ">Trustworthy & Dependable</h4>
            <p className=" mt-2">76+ years in service of the nation.</p>
          </div>
  
          {/* Feature 4 */}
          <div className=" p-6 text-start">
            <h4 className="text-xl font-semibold">Customer Support</h4>
            <p className="mt-2">
              24/7/365 support with a dedicated team of 6000+ employees, 6000+ Agents & POSPs, 1000+ offices, and an
              advanced online platform.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Reason;
  