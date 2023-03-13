export function PaymentModal1() {
    return (
        <>
            <div className="pMC_box">
                <div className="pMCB_left">
                    <input type="text" name="pMCBL_fname" id="pMCBL_fname" placeholder="First Name" />
                    <input type="email" name="pMCBL_email" id="pMCBL_email" placeholder="Email Address" />

                    <form className="pMCB_select">
                        <h2>Select Method of Payment</h2>
                        <div className="pMCBS_s1">
                            <label htmlFor="credit"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.7409 5.78198H3.5625V19.282H21.7409V5.78198Z" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.5625 10.282H21.7409" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                                Credit Card Or Debit</label>
                            <input type="checkbox" name="pMCB_select" id="credit" />
                        </div>

                        <div className="pMCBS_s1">
                            <label htmlFor="paypal"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.97497 7.41548L9.9775 7.41648C10.03 7.19498 10.2209 7.03198 10.4597 7.03198H17.2625C17.2711 7.03198 17.2797 7.02848 17.2882 7.02898C17.1433 4.63948 15.119 3.53198 13.3329 3.53198H6.53016C6.29082 3.53198 6.09994 3.69948 6.04793 3.92048L6.04541 3.91948L3.07172 17.4385L3.07829 17.439C3.07122 17.471 3.05859 17.5015 3.05859 17.536C3.05859 17.8125 3.28431 18.0315 3.56355 18.0315H7.63905L9.97497 7.41548Z" fill="#1565C0" />
                                <path d="M17.2893 7.02881C17.3161 7.46681 17.2868 7.94331 17.1737 8.46981C16.5268 11.4673 14.1884 13.0273 11.2985 13.0273C11.2985 13.0273 9.54634 13.0273 9.12066 13.0273C8.85758 13.0273 8.73336 13.1803 8.6763 13.2973L7.79767 17.3218L7.64366 18.0363H7.64063L7.00287 20.9343L7.00944 20.9348C7.00237 20.9668 6.98975 20.9973 6.98975 21.0318C6.98975 21.3083 7.21546 21.5318 7.4947 21.5318H11.1975L11.2041 21.5268C11.4424 21.5233 11.6318 21.3548 11.6813 21.1328L11.6904 21.1253L12.6054 16.9173C12.6054 16.9173 12.669 16.5158 13.0952 16.5158C13.5213 16.5158 15.2049 16.5158 15.2049 16.5158C18.0947 16.5158 20.4569 14.9628 21.1043 11.9648C21.8324 8.58481 19.3975 7.04131 17.2893 7.02881Z" fill="#039BE5" />
                                <path d="M10.4603 7.03173C10.221 7.03173 10.0301 7.19473 9.97808 7.41623L9.97555 7.41523L8.67529 13.2977C8.73235 13.1807 8.85657 13.0277 9.11965 13.0277C9.54584 13.0277 11.2581 13.0277 11.2581 13.0277C14.148 13.0277 16.5258 11.4677 17.1727 8.47023C17.2863 7.94373 17.3151 7.46723 17.2883 7.02923C17.2802 7.02823 17.2712 7.03173 17.2631 7.03173H10.4603Z" fill="#283593" />
                            </svg>
                                Paypal</label>
                            <input type="checkbox" name="pMCB_select" id="paypal" />
                        </div>


                        <div className="pMCBS_s1">
                            <label htmlFor="bank"><svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5625 6.90698L12.6517 3.53198L21.7409 6.90698" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M3.5625 21.532H21.7409" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12.6519 17.032V10.282" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.4688 17.032V10.282" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.83496 17.032V10.282" stroke="#40BFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                                Bank Transfer</label>
                            <input type="checkbox" name="pMCB_select" id="bank" />
                        </div>

                    </form>
                </div>

                <div className="pMCB_left pMCB_right">
                    <input type="text" name="pMCBL_lname" id="pMCBL_lname" placeholder="Last Name" />
                    <textarea name="pMCBL_address" id="pMCBL_address" cols="60" rows="5" placeholder="Address for Delivery"></textarea>
                    <input type="number" name="pMCBL_mobile" id="pMCBL_mobile" placeholder="Mobile Phone" />
                </div>
            </div>
        </>
    )
}