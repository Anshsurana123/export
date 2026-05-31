import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the enquiry data to the server console as required
    console.log("==========================================");
    console.log("NEW AGRICULTURAL COMMERCIAL ENQUIRY RECIEVED:");
    console.log("Timestamp:", new Date().toISOString());
    console.log("Sender Details:", {
      fullName: body.fullName,
      companyName: body.companyName,
      country: body.country,
      email: body.email,
      phone: body.phone,
    });
    console.log("Commercial Specifications:", {
      productId: body.productId,
      estimatedQuantityMT: body.estimatedQuantityMT,
      message: body.message,
    });
    console.log("==========================================");

    return NextResponse.json(
      { success: true, message: "Enquiry logged successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging commercial enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
