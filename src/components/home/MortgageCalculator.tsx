"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { formatBDT } from "@/lib/utils";

type MortgageCalculatorProps = {
  initialPrice?: number;
};

export function MortgageCalculator({ initialPrice = 25000000 }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(initialPrice);
  const [downPayment, setDownPayment] = useState(Math.round(initialPrice * 0.25));
  const [interestRate, setInterestRate] = useState(9.5);
  const [tenure, setTenure] = useState(15);

  const result = useMemo(() => {
    const principal = Math.max(price - downPayment, 0);
    const monthlyRate = interestRate / 100 / 12;
    const months = tenure * 12;
    const emi = monthlyRate === 0 ? principal / months : (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    return {
      emi: Number.isFinite(emi) ? emi : 0,
      totalPayment: Number.isFinite(totalPayment) ? totalPayment : 0,
      totalInterest: Number.isFinite(totalPayment - principal) ? totalPayment - principal : 0
    };
  }, [downPayment, interestRate, price, tenure]);

  return (
    <section className="rounded-lg border border-borderSoft bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-sm bg-gold-500/12 text-gold-500">
          <Calculator className="h-6 w-6" />
        </span>
        <div>
          <h2 className="font-heading text-3xl font-semibold text-slateText">Mortgage / EMI Calculator</h2>
          <p className="text-sm text-mutedText">Estimate monthly payments before speaking with a loan advisor.</p>
        </div>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Property Price
            <Input type="number" value={price} onChange={(event) => setPrice(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Down Payment
            <Input type="number" value={downPayment} onChange={(event) => setDownPayment(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Interest Rate (%)
            <Input type="number" step="0.1" value={interestRate} onChange={(event) => setInterestRate(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slateText">
            Loan Tenure (Years)
            <Input type="number" value={tenure} onChange={(event) => setTenure(Number(event.target.value))} />
          </label>
        </div>
        <div className="rounded-lg bg-navy-radial p-6 text-white">
          <p className="text-sm uppercase tracking-[0.22em] text-gold-400">Estimated Monthly EMI</p>
          <p className="mt-3 font-heading text-4xl font-semibold">{formatBDT(Math.round(result.emi))}</p>
          <div className="mt-6 grid gap-3 text-sm text-white/78">
            <div className="flex justify-between border-b border-white/10 pb-3">
              <span>Total Interest</span>
              <span className="font-semibold text-white">{formatBDT(Math.round(result.totalInterest))}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Payment</span>
              <span className="font-semibold text-white">{formatBDT(Math.round(result.totalPayment))}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
