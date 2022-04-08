import React from 'react';

function Step5({ gameName, region, price, donation, donationPercent, productKeys, acceptedFileName }) {
  return (
    <div data-aos="fade">
      <h5 className="font-spacing font-weight-light">STEP 5: CHECK ALL INFORMATION</h5>
      <p>When you confirm the offer's creation, you can't edit it anymore. In case you made mistakes you have to close
        the current offer and create a new one.</p>

      <div className="py-3">
        <div className="card bg-transparent border-light shadow-lg" data-aos="fade" data-aos-delay="200">
          <div className="card-body">
            <h6>GENERAL INFORMATION</h6>
            <p className="pt-2 pb-4">
              <strong>Game:</strong> {gameName} <br/>
              <strong>Region:</strong> {region}
            </p>
            <h6>PRICE GENERATION</h6>
            <p className="pt-2 pb-4">
              <strong>Price:</strong> €{price} <br/>
              { donation && <span><strong>Donation:</strong> {donationPercent} %</span> }
            </p>
            <h6>WORK WITH THE KEYS</h6>
            <p className="pt-2 pb-4">
              {
                productKeys.map((productKey, index) => {
                  return (
                    <span key={index}>
                      <strong>Key {(index + 1)}:</strong> {productKey} <br/>
                    </span>
                  )
                })
              }
            </p>
            <h6>UPLOAD DOCUMENTS</h6>
            {
              acceptedFileName.map((fileName, index) => {
                return (
                  <p key={index} className="pt-2 pb-4">
                    {fileName} <br/>
                  </p>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
