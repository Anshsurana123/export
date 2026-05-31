"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { products } from "@/lib/products";

// Zod validation schema for bulk commodity trade enquiry
const enquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  country: z.string().min(2, "Country name is required"),
  phone: z.string().min(5, "Valid contact number is required"),
  email: z.string().email("Please enter a valid business email address"),
  productId: z.string().min(1, "Please select a product of interest"),
  estimatedQuantityMT: z.number()
    .refine((val) => !isNaN(val) && val >= 1, {
      message: "Minimum quantity is 1 MT",
    }),
  message: z.string().min(10, "Message must be at least 10 characters to explain your specs"),
});

type EnquiryFormValues = z.infer<typeof enquirySchema>;

export default function EnquiryForm() {
  const searchParams = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      companyName: "",
      country: "",
      phone: "",
      email: "",
      productId: "",
      estimatedQuantityMT: "" as unknown as number,
      message: ""
    }
  });

  // Pre-select product based on query parameter
  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam && products.some(p => p.id === productParam)) {
      setValue("productId", productParam);
    }
  }, [searchParams, setValue]);

  const onSubmit = async (data: EnquiryFormValues) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error("Failed to submit enquiry. Please try again.");
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setServerError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="border border-brand-olive bg-brand-sand/20 p-8 md:p-12 space-y-6 text-left">
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-olive block">
          Enquiry Transmitted
        </span>
        <h3 className="font-serif text-2xl font-bold text-brand-charcoal">
          Thank you for your interest.
        </h3>
        <div className="w-12 h-[1px] bg-brand-olive" />
        <p className="text-xs sm:text-sm text-brand-gray-medium leading-relaxed font-light">
          Your bulk trade enquiry has been logged successfully on our server. Our commercial trade desk in Pune will review your technical parameters and container quantity requirements. We will contact you within 24 business hours with provisional FOB/CIF pricing and sample delivery options.
        </p>
        <button
          onClick={() => setIsSuccess(false)}
          type="button"
          className="inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300 focus:outline-none"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 border border-brand-gray-light p-8 md:p-10 bg-brand-cream/50 relative">
      {/* Editorial framing accents */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-gray-medium/30" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-gray-medium/30" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-gray-medium/30" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-gray-medium/30" />

      <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-charcoal mb-4">
        Commercial Request Desk
      </h3>

      {serverError && (
        <div className="p-4 border border-red-200 bg-red-50 text-xs text-red-600 font-medium">
          {serverError}
        </div>
      )}

      {/* Grid for Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="fullName" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Full Name <span className="text-brand-bronze">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName")}
            placeholder="John Doe"
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
          />
          {errors.fullName && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="companyName" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Company Name <span className="text-brand-bronze">*</span>
          </label>
          <input
            id="companyName"
            type="text"
            {...register("companyName")}
            placeholder="Enterprise Grains Ltd"
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
          />
          {errors.companyName && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.companyName.message}</p>
          )}
        </div>
      </div>

      {/* Grid for Country & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="country" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Country <span className="text-brand-bronze">*</span>
          </label>
          <input
            id="country"
            type="text"
            {...register("country")}
            placeholder="Saudi Arabia"
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
          />
          {errors.country && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.country.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="phone" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Phone Number <span className="text-brand-bronze">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="+966 50 123 4567"
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
          />
          {errors.phone && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email Input */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
          Business Email <span className="text-brand-bronze">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          placeholder="buyer@enterprise.com"
          className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
        />
        {errors.email && (
          <p className="text-[10px] text-red-600 font-medium mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Product Select & Quantity */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-1">
          <label htmlFor="productId" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Product of Interest <span className="text-brand-bronze">*</span>
          </label>
          <select
            id="productId"
            {...register("productId")}
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal focus:outline-none focus:border-brand-olive transition-colors cursor-pointer"
          >
            <option value="" className="text-brand-gray-medium">Select Commodity</option>
            {products.map((p) => (
              <option key={p.id} value={p.id} className="text-brand-charcoal">
                {p.name} ({p.variety.split(" ")[0]})
              </option>
            ))}
          </select>
          {errors.productId && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.productId.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label htmlFor="estimatedQuantityMT" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
            Estimated Quantity (MT) <span className="text-brand-bronze">*</span>
          </label>
          <input
            id="estimatedQuantityMT"
            type="number"
            {...register("estimatedQuantityMT", { valueAsNumber: true })}
            placeholder="50"
            className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors"
          />
          {errors.estimatedQuantityMT && (
            <p className="text-[10px] text-red-600 font-medium mt-1">{errors.estimatedQuantityMT.message}</p>
          )}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-wider text-brand-gray-medium block">
          Required Specifications / Packaging Details <span className="text-brand-bronze">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          placeholder="Please state grade specifications, packaging preferences (e.g. 50kg PP, bulk bags), discharge ports, and required delivery schedule."
          className="w-full bg-brand-sand/30 border border-brand-gray-light/80 px-4 py-3 text-xs text-brand-charcoal placeholder-brand-gray-medium/50 focus:outline-none focus:border-brand-olive transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-[10px] text-red-600 font-medium mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-wider text-brand-cream bg-brand-charcoal hover:bg-brand-olive transition-colors duration-300 disabled:opacity-50 focus:outline-none"
      >
        {isSubmitting ? "Transmitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
}
