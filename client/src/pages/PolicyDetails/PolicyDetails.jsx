import { Fragment, useState } from "react";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Radio,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function PolicyDetails() {
  const [cover, setCover] = useState(5);

  const navigate = useNavigate();

  function handleChange(event) {
    setCover(event.target.value);
  }

  const [orderId, setOrderId] = useState("");

  const createOrder = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/payment/create-order"
      );
      setOrderId(response.data.id);
      console.log(response.data.id)
    } catch (error) {
      console.error("Error in placing order:", error);
    }
  };

  const displayRazorpay = async () => {
    const options = {
      key: "rzp_test_CFaCcyskyo1gnl",
      amount: 12440 * 100, // Amount in paise (Example: 50000 paise = ₹500)
      currency: "INR",
      name: "Insurance Policy no. 51772",
      description: "PAyment For Health Insurance",
      order_id: orderId,
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);o
        navigate('/policydetails')
        alert("Payment successful")
      },
      prefill: {
        name: "Harshit",
        email: "harshitc@gmail.com",
        contact: "8076784892",
      },
      theme: {
        color: "#333333",
      },
    };
    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  const handlePayment = async () => {
    await createOrder();
    await displayRazorpay();
 };
  return (
    <Fragment>
      <div className="flex flex-row items-center justify-center w-[100%] px-6 py-2 bg-[#F4F5F7] text-black">
        <div className="policy_details w-[70%] flex flex-col">
          <div className="flex flex-row p-6 mb-4 bg-white">
            <img
              src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Care_Health@2x.webp"
              className="w-[96px] h-[60px]"
            />

            <div className="flex flex-col ml-4">
              <div className=" text-left font-bold text-lg">
                Direct Care Plan
              </div>
              <div className="text-green-700 text-left">
                <span className="mr-2"> View all Features </span>.
                <span className="ml-2"> View Hospitals </span>
              </div>
              <div className="mt-2 ">
                Our Platform is One Stop all for all your Insurance Needs
              </div>
            </div>
          </div>

          <div className="flex flex-col mb-4 p-4 bg-white text-left">
            <div className="text-xl font-bold text-left">Cover Amount</div>
            <div
              style={{
                fontSize: "14px",
                display: "block",
                fontWeight: 400,
                color: "#505f79",
                marginTop: "4px",
                lineHeight: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              Medical Procedures are getting more Expensive Each Year
            </div>

            <div className="mt-6 text-center">
              <FormControl sx={{ width: "75%", paddingLeft: 0 }}>
                <InputLabel id="demo-simple-select-label">Amount</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={cover}
                  label="Cover Amount"
                  onChange={handleChange}
                >
                  <MenuItem value={5}>
                    <div className="left">5 Lakh</div>{" "}
                  </MenuItem>
                  <MenuItem value={7}>7 Lakh </MenuItem>
                  <MenuItem value={10}>10 Lakh </MenuItem>Premium 10,500/Year
                </Select>
              </FormControl>
            </div>
          </div>

          <div className="flex flex-col text-left mb-4 p-4 bg-white">
            <div className="text-left font-bold text-xl">Policy Period</div>
            <span
              style={{
                fontSize: "14px",
                display: "block",
                fontWeight: 400,
                color: "#505f79",
                marginTop: "4px",
                lineHeight: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              Choosing a multi-year plan saves your money and the trouble of
              remembering yearly renewal
            </span>
            <div className="flex flex-row mt-4">
              <div
                style={{
                  margin: "0 14px 15px 0",
                  cursor: "pointer",
                  alignItems: "flex-start",
                  justifyContent: "left",
                  flexDirection: "column",
                  height: "auto",
                  padding: "11px 2px",
                  borderRadius: "8px",
                  border: "1px solid #e8e8e8",
                  width: "100%",
                  borderColor: "green",
                }}
              >
                <div>
                  <Radio
                    checked={true}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <span>1 Year @ ₹10,288 </span>
                </div>
              </div>

              <div
                style={{
                  margin: "0 14px 15px 0",
                  cursor: "pointer",
                  alignItems: "flex-start",
                  justifyContent: "left",
                  flexDirection: "column",
                  height: "auto",
                  padding: "11px 2px",
                  borderRadius: "8px",
                  border: "1px solid #e8e8e8",
                  width: "100%",
                }}
              >
                <div>
                  <Radio
                    checked={false}
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <span className="">
                    2 Year @ <strong> ₹12,588 </strong>
                    <div
                      style={{
                        color: "#00a3bf",
                        fontSize: "14px",
                        marginLeft: "46px",
                        display: "block",
                        fontWeight: 700,
                        borderRadius: "8px",
                        padding: "4px 8px",
                        fontFamily: 'segoe ui", "open sans", sans-serif',
                      }}
                    >
                      Save ₹ 981
                    </div>
                  </span>
                </div>
              </div>

              <div
                style={{
                  margin: "0 14px 15px 0",
                  cursor: "pointer",
                  alignItems: "flex-start",
                  justifyContent: "left",
                  flexDirection: "column",
                  height: "auto",
                  padding: "11px 2px",
                  borderRadius: "8px",
                  border: "1px solid #e8e8e8",
                  width: "100%",
                }}
              >
                <div>
                  <Radio
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <span className="">
                    3 Year @ <strong> ₹15,588 </strong>
                    <div
                      style={{
                        color: "#00a3bf",
                        fontSize: "14px",
                        marginLeft: "46px",
                        display: "block",
                        fontWeight: 700,
                        borderRadius: "8px",
                        padding: "4px 8px",
                        fontFamily: 'segoe ui", "open sans", sans-serif',
                      }}
                    >
                      Save ₹ 1281
                    </div>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col payment"></div>
          </div>

          <div className="flex flex-col text-left mb-4 p-4 bg-white">
            <div className="w-[100%] font-bold text-lg">
              Recommended Add-ons
            </div>
            <span
              style={{
                fontSize: "14px",
                display: "block",
                fontWeight: 400,
                color: "#505f79",
                marginTop: "4px",
                lineHeight: 1.5,
                whiteSpace: "nowrap",
              }}
            >
              Add-ons are a smart way to enhance your cover at a fraction of the
              cost.
            </span>

            <div
              className="mt-4 border-2 border-solid justify-between"
              style={{
                padding: "10px 0 6px",
                minHeight: "80px",
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",

              }}
            >
              <div className="add-on-box w-[51%] px-3 flex">
                <div className="logo w-[120px] mr-4 ml-2">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="https://static.pbcdn.in/health-cdn/images/insurer-logo/Aditya_Birla@2x.webp"
                    />
                    <source
                      type="image/png"
                      srcSet="https://static.pbcdn.in/health-cdn/images/insurer-logo/Aditya_Birla@2x.png"
                    />
                    <img
                      src="https://static.pbcdn.in/health-cdn/images/insurer-logo/Aditya_Birla@2x.png"
                      alt="Aditya Birla"
                      width="100"
                      style={{margin: "auto 0", width: "100px", height: "auto"}}
                    />
                  </picture>
                </div>
              
                <div
                className="w-18"
                style={{
                  lineHeight: "22px",
                  fontSize: "16px !important",
                  WebkitLineClamp: "inherit",
                  maxHeight: "100%",
                  overflow: "hidden",
                  marginBottom: "0px",
                  marginLeft: '1rem',
                  fontWeight: 700,
                }}
                  > Critical Illness - 20 critical illnesses covered</div>
              </div>

              <div className="justify-end mr-4">
                <Radio></Radio>
              </div>


              </div>
             
          </div>

          <div className="flex flex-col text-left mb-4 p-4 bg-white">
            <div className="w-[100%] font-bold text-lg">Members Covered</div>
            <div className="flex justify-between mt-3">
              <div>Harshit(22)</div>{" "}
              <div className="cursor-pointer font-semibold text-green-700">
                Edit Members
              </div>
            </div>
          </div>
        </div>

        <div className="ml-5 w-[370px] relative h-[100vh]">
          <div
            style={{
              width: "100%",
              boxShadow: "0 6px 16px rgba(37,56,88,.15)",
              borderRadius: "16px",
              backgroundColor: "#fff",
              height: "auto",
              padding: "8px 0 0",
              position: "sticky",
              top: "64px",
            }}
          >
            <div className="w-[100%] font-bold text-lg text-left p-2 border-b-black border-solid border-b-2">
              Summary
            </div>
            <div className="px-4">
              <div
                style={{
                  justifyContent: "space-between",
                  fontSize: "14px",
                  padding: "10px 0 0",
                }}
              >
                <div className="flex justify-between">
                  <div>Base Premium - 2 Years</div>
                  <div className="font-bold text-base">₹ 24,235</div>
                </div>
              </div>

              <div className="mt-4">
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",

                    textAlign: "left",
                    display: "flex",
                  }}
                >
                  {" "}
                  Select Rider(s)
                </div>
                <div
                  style={{
                    border: "1px dashed #b3bac5",
                    height: "38px",
                    alignItems: "center",
                    padding: "0 16px",
                    borderRadius: "4px",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#505f79",
                    marginTop: "6px",
                    display: "flex",
                  }}
                >
                  <div>Missing out on benefits</div>
                  <div>
                    {" "}
                    <span className="cursor-pointer text-green-600 font-semibold">
                      View riders
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    display: "flex",
                    textAlign: "left",
                  }}
                >
                  {" "}
                  Select Add-ons
                </div>
                <div
                  style={{
                    border: "1px dashed #b3bac5",
                    height: "38px",
                    alignItems: "center",
                    padding: "0 16px",
                    borderRadius: "4px",
                    justifyContent: "space-between",
                    fontSize: "14px",
                    color: "#505f79",
                    marginTop: "6px",
                    display: "flex",
                  }}
                >
                  <div>No Add-ons Selected</div>
                  <div>
                    {" "}
                    <span className="cursor-pointer text-green-600 font-semibold">
                      View add-ons
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div
                  style={{
                    justifyContent: "space-between",
                    fontSize: "16px",
                    fontWeight: 700,
                    background: "#f4f5f7",
                    marginLeft: "-16px",
                    marginRight: "-16px",
                    padding: "8px 16px",
                    borderBottom: "1px solid #dfe1e6",
                    display: "flex",
                  }}
                >
                  <div>Total Premium</div>
                  <span className="font-bold text-base text-right">
                    ₹ 24,235
                  </span>
                </div>
                <button
                  className="hover:bg-[#FC2E00] hover:text-white"
                  style={{
                    width: "100%",
                    backgroundColor: "#00a3bf",
                    color: "#fff",
                    padding: "12px",
                    borderRadius: "8px",
                    marginTop: "20px",
                    fontSize: "16px",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={handlePayment}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PolicyDetails;
