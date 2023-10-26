import z from "zod";
export const querySchema = z
  .object({
  page: z.number().optional(),
  take: z.number().optional(),
  order: z.union([z.literal('asc'), z.literal('desc')]).optional(),
})
  .optional();
export const baseUrlSchema = z.string().url();
export const deliverySchema = z.object({
  type: z.union([z.string(), z.enum(['personal', 'company'])]),
  givenName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.formError' }),
  familyName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.forms.required' }),
  organizationName: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val))
    .refine(val => val !== undefined, { message: 'errors.forms.required' }),
  city: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  country: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  phone: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  email: z
    .string()
    .email('errors.forms.invalidEmail')
    .refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  careOf: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val)),
  postalCode: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  streetAddress: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  streetAddress2: z
    .string()
    .optional()
    .nullable()
    .transform(val => (val === null ? '' : val)),
});
export const billingSchema = z.object({
  city: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  country: z.string(),
  organizationRegistrationId: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  email: z
    .string()
    .email('errors.forms.invalidEmail')
    .refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  organizationName: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  postalCode: z.string().refine(val => val.trim() !== '', { message: 'errors.forms.required' }),
  invoiceType: z.union([z.literal('electronic'), z.literal('postal'), z.literal('PDF'), z.string()]),
});
export const createOrderSchema = z.object({
  lines: z.array(z.object({
    productId: z.string().uuid(),
    productGroupId: z.string().uuid(),
    count: z.number(),
  })),
  billing: billingSchema,
  delivery: deliverySchema,
  customerInfo: z.object({
    givenName: z.string(),
    familyName: z.string(),
    email: z.string().email(),
    phone: z.string(),
  }),
  siteId: z.string().uuid(),
});
export const countriesSchema = z.array(z.object({
  id: z.string().uuid(),
  iso: z.string(),
  nicename: z.string(),
}));
export const keyDataSchema = z.object({
  id: z.string().uuid(),
  active: z.boolean(),
  name: z.string(),
  billingAddress: billingSchema.optional(),
  shippingAddress: deliverySchema.optional(),
  countries: countriesSchema,
});
export const ApiKeySchema = z.string({
  required_error: `Charma API Key is required!
 You must run init function to set a key`,
});
export const openWidgetSchema = z.object({
  delivery: deliverySchema.optional(),
  billing: billingSchema.optional(),
  productId: z.string().optional(),
});
//# sourceMappingURL=schemas.js.map
