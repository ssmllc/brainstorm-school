"use client";

import React, { useState } from "react";
import styled from "styled-components";
import RegistrationBlock from "../registration/registration-block.component";
import FlexBox from "../layout/flexbox.component";

const DropdownSelect = styled.select`
  appearance: none;
  background: var(--dark-grey);
  background-image: url("data:image/svg+xml;charset=utf-8,<svg width='10' height='6' fill='none' xmlns='http:%2F%2Fwww.w3.org/2000/svg'><path d='M1 1l4 4 4-4' stroke='white' stroke-width='2' stroke-linecap='round' strokeLinejoin='round'/></svg>");
  background-repeat: no-repeat;
  background-position: 97% 50%;
  border-radius: 10px;
  border: thin solid var(--medium-grey);
  color: var(--white);
  font-weight: bold;
  font-size: 16px;
  width: 100%;
  margin: 0;
  padding: 15px 15px;

  @media (min-width: 1024px) {
    width: 30%;
  }
`;

interface Props {
  registration: string;
  registration_installments: string;
}

const InstallmentSelect = ({
  registration,
  registration_installments,
}: Props) => {
  const [selectedPaymentPlan, setSelectedPaymentPlan] =
    useState<string>(registration);
  const [ctaPaymentPlan, setCtaPaymentPlan] =
    useState<string>("One Time Payment");

  const handlePaymentOption = (paymentOption: string) => {
    if (paymentOption === "full") {
      setSelectedPaymentPlan(registration);
      setCtaPaymentPlan("One Time Payment");
    } else {
      setSelectedPaymentPlan(registration_installments);
      setCtaPaymentPlan("Two Installment Plan");
    }
  };

  return (
    <>
      <FlexBox
        alignitems="center"
        justifycontent="center"
        sm_width="80%"
        md_width="50%"
        width="100%"
        xl_width="80%"
        xxl_width="80%"
      >
        <DropdownSelect
          onChange={(evt) => {
            handlePaymentOption(evt.target.value);
          }}
        >
          <option defaultChecked value="full">
            Select Payment Option
          </option>
          <option value="full">One Time Payment</option>
          <option value="installments">Two Installment Plan</option>
        </DropdownSelect>
      </FlexBox>

      <RegistrationBlock
        primary={true}
        heading="Ready to take the next step?"
        scale="xl"
        ctaType="primary"
        cta={ctaPaymentPlan}
        href={selectedPaymentPlan}
        faq={true}
        target="_blank"
      />
    </>
  );
};

export default InstallmentSelect;
