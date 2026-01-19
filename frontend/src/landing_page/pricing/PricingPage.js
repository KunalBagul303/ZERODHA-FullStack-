import React from "react";
import OpenAccount from "../OpenAccount";
import Brokerage from './Brokerage';
import Hero from '../home/Hero';

function PricingPage(){
    return(
          <>
        <Hero/>
        <OpenAccount/>
        <Brokerage/>
        </>
    );
}
export default PricingPage;