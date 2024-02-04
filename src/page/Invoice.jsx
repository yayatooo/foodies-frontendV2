import React, { useEffect, useState } from "react";
import loginStore from "../store/loginStore";
import useInvoiceStore from "../store/invoiceStore";
import InvoiceData from "../components/invoiceData";

const Invoice = () => {
  // const { user } = loginStore();
  const { invoice, getDataInvoice } = useInvoiceStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      await getDataInvoice(token);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!invoice || !Array.isArray(invoice.data)) {
    return <div>No data available</div>;
  }
  console.log(invoice.data);

  return (
    <>
      <div className="flex flex-col gap-y-8 mx-auto">
        {invoice.data.map(
          ({ orderNumber, deliveryAddress, orderItems, deliveryFee, _id }) => (
            <InvoiceData
              key={_id}
              orderNumber={orderNumber}
              deliveryAddress={deliveryAddress}
              orderItems={orderItems}
              deliveryFee={deliveryFee}
            />
          )
        )}
      </div>
    </>
  );
};

export default Invoice;
