import z from 'zod';
export declare const querySchema: z.ZodOptional<z.ZodObject<{
  page: z.ZodOptional<z.ZodNumber>;
  take: z.ZodOptional<z.ZodNumber>;
  order: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"asc">, z.ZodLiteral<"desc">]>>;
}, "strip", z.ZodTypeAny, {
  page?: number;
  take?: number;
  order?: "desc" | "asc";
}, {
  page?: number;
  take?: number;
  order?: "desc" | "asc";
}>>;
export declare const baseUrlSchema: z.ZodString;
export declare const deliverySchema: z.ZodObject<{
  type: z.ZodUnion<[z.ZodString, z.ZodEnum<["personal", "company"]>]>;
  givenName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
  familyName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
  organizationName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
  city: z.ZodEffects<z.ZodString, string, string>;
  country: z.ZodEffects<z.ZodString, string, string>;
  phone: z.ZodEffects<z.ZodString, string, string>;
  email: z.ZodEffects<z.ZodString, string, string>;
  careOf: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
  postalCode: z.ZodEffects<z.ZodString, string, string>;
  streetAddress: z.ZodEffects<z.ZodString, string, string>;
  streetAddress2: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
}, "strip", z.ZodTypeAny, {
  type?: string;
  givenName?: string;
  familyName?: string;
  organizationName?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  careOf?: string;
  postalCode?: string;
  streetAddress?: string;
  streetAddress2?: string;
}, {
  type?: string;
  givenName?: string;
  familyName?: string;
  organizationName?: string;
  city?: string;
  country?: string;
  phone?: string;
  email?: string;
  careOf?: string;
  postalCode?: string;
  streetAddress?: string;
  streetAddress2?: string;
}>;
export declare const billingSchema: z.ZodObject<{
  city: z.ZodEffects<z.ZodString, string, string>;
  country: z.ZodString;
  organizationRegistrationId: z.ZodEffects<z.ZodString, string, string>;
  email: z.ZodEffects<z.ZodString, string, string>;
  organizationName: z.ZodEffects<z.ZodString, string, string>;
  postalCode: z.ZodEffects<z.ZodString, string, string>;
  invoiceType: z.ZodUnion<[z.ZodLiteral<"electronic">, z.ZodLiteral<"postal">, z.ZodLiteral<"PDF">, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
  city?: string;
  country?: string;
  organizationRegistrationId?: string;
  email?: string;
  organizationName?: string;
  postalCode?: string;
  invoiceType?: string;
}, {
  city?: string;
  country?: string;
  organizationRegistrationId?: string;
  email?: string;
  organizationName?: string;
  postalCode?: string;
  invoiceType?: string;
}>;
export type Delivery = z.infer<typeof deliverySchema>;
export declare const createOrderSchema: z.ZodObject<{
  lines: z.ZodArray<z.ZodObject<{
    productId: z.ZodString;
    productGroupId: z.ZodString;
    count: z.ZodNumber;
  }, "strip", z.ZodTypeAny, {
    productId?: string;
    productGroupId?: string;
    count?: number;
  }, {
    productId?: string;
    productGroupId?: string;
    count?: number;
  }>, "many">;
  billing: z.ZodObject<{
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodString;
    organizationRegistrationId: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    organizationName: z.ZodEffects<z.ZodString, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    invoiceType: z.ZodUnion<[z.ZodLiteral<"electronic">, z.ZodLiteral<"postal">, z.ZodLiteral<"PDF">, z.ZodString]>;
  }, "strip", z.ZodTypeAny, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }>;
  delivery: z.ZodObject<{
    type: z.ZodUnion<[z.ZodString, z.ZodEnum<["personal", "company"]>]>;
    givenName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    familyName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    organizationName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodEffects<z.ZodString, string, string>;
    phone: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    careOf: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    streetAddress: z.ZodEffects<z.ZodString, string, string>;
    streetAddress2: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
  }, "strip", z.ZodTypeAny, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }>;
  customerInfo: z.ZodObject<{
    givenName: z.ZodString;
    familyName: z.ZodString;
    email: z.ZodString;
    phone: z.ZodString;
  }, "strip", z.ZodTypeAny, {
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
  }, {
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
  }>;
  siteId: z.ZodString;
}, "strip", z.ZodTypeAny, {
  lines?: {
    productId?: string;
    productGroupId?: string;
    count?: number;
  }[];
  billing?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  delivery?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  customerInfo?: {
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
  };
  siteId?: string;
}, {
  lines?: {
    productId?: string;
    productGroupId?: string;
    count?: number;
  }[];
  billing?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  delivery?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  customerInfo?: {
    givenName?: string;
    familyName?: string;
    email?: string;
    phone?: string;
  };
  siteId?: string;
}>;
export declare const countriesSchema: z.ZodArray<z.ZodObject<{
  id: z.ZodString;
  iso: z.ZodString;
  nicename: z.ZodString;
}, "strip", z.ZodTypeAny, {
  id?: string;
  iso?: string;
  nicename?: string;
}, {
  id?: string;
  iso?: string;
  nicename?: string;
}>, "many">;
export declare const keyDataSchema: z.ZodObject<{
  id: z.ZodString;
  active: z.ZodBoolean;
  name: z.ZodString;
  billingAddress: z.ZodOptional<z.ZodObject<{
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodString;
    organizationRegistrationId: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    organizationName: z.ZodEffects<z.ZodString, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    invoiceType: z.ZodUnion<[z.ZodLiteral<"electronic">, z.ZodLiteral<"postal">, z.ZodLiteral<"PDF">, z.ZodString]>;
  }, "strip", z.ZodTypeAny, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }>>;
  shippingAddress: z.ZodOptional<z.ZodObject<{
    type: z.ZodUnion<[z.ZodString, z.ZodEnum<["personal", "company"]>]>;
    givenName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    familyName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    organizationName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodEffects<z.ZodString, string, string>;
    phone: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    careOf: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    streetAddress: z.ZodEffects<z.ZodString, string, string>;
    streetAddress2: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
  }, "strip", z.ZodTypeAny, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }>>;
  countries: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    iso: z.ZodString;
    nicename: z.ZodString;
  }, "strip", z.ZodTypeAny, {
    id?: string;
    iso?: string;
    nicename?: string;
  }, {
    id?: string;
    iso?: string;
    nicename?: string;
  }>, "many">;
}, "strip", z.ZodTypeAny, {
  id?: string;
  active?: boolean;
  name?: string;
  billingAddress?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  shippingAddress?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  countries?: {
    id?: string;
    iso?: string;
    nicename?: string;
  }[];
}, {
  id?: string;
  active?: boolean;
  name?: string;
  billingAddress?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  shippingAddress?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  countries?: {
    id?: string;
    iso?: string;
    nicename?: string;
  }[];
}>;
export declare const ApiKeySchema: z.ZodString;
export declare const openWidgetSchema: z.ZodObject<{
  delivery: z.ZodOptional<z.ZodObject<{
    type: z.ZodUnion<[z.ZodString, z.ZodEnum<["personal", "company"]>]>;
    givenName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    familyName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    organizationName: z.ZodEffects<z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>, string, string>;
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodEffects<z.ZodString, string, string>;
    phone: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    careOf: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    streetAddress: z.ZodEffects<z.ZodString, string, string>;
    streetAddress2: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string, string>;
  }, "strip", z.ZodTypeAny, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }, {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  }>>;
  billing: z.ZodOptional<z.ZodObject<{
    city: z.ZodEffects<z.ZodString, string, string>;
    country: z.ZodString;
    organizationRegistrationId: z.ZodEffects<z.ZodString, string, string>;
    email: z.ZodEffects<z.ZodString, string, string>;
    organizationName: z.ZodEffects<z.ZodString, string, string>;
    postalCode: z.ZodEffects<z.ZodString, string, string>;
    invoiceType: z.ZodUnion<[z.ZodLiteral<"electronic">, z.ZodLiteral<"postal">, z.ZodLiteral<"PDF">, z.ZodString]>;
  }, "strip", z.ZodTypeAny, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }, {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  }>>;
  productId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
  delivery?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  billing?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  productId?: string;
}, {
  delivery?: {
    type?: string;
    givenName?: string;
    familyName?: string;
    organizationName?: string;
    city?: string;
    country?: string;
    phone?: string;
    email?: string;
    careOf?: string;
    postalCode?: string;
    streetAddress?: string;
    streetAddress2?: string;
  };
  billing?: {
    city?: string;
    country?: string;
    organizationRegistrationId?: string;
    email?: string;
    organizationName?: string;
    postalCode?: string;
    invoiceType?: string;
  };
  productId?: string;
}>;
