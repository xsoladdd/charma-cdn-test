import { z } from 'zod';
export declare const languagesSchema: z.ZodEnum<["en", "sv"]>;
export type Language = z.infer<typeof languagesSchema>;
export declare const deliveryOptionArray: readonly ["personal", "company"];
export type TDeliveryOptionArray = (typeof deliveryOptionArray)[number];
export declare const invoiceOptionArray: string[];
export type TInvoiceOptionArray = (typeof invoiceOptionArray)[number];
