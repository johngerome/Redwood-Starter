import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db/db";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    fields: {
      name: "firstName",
    },
    additionalFields: {
      firstName: {
        type: "string",
        required: true,
        fieldName: "firstName",
        input: true,
      },
      lastName: {
        type: "string",
        required: true,
        fieldName: "lastName",
        input: true,
      },
      middleName: {
        type: "string",
        required: false,
        fieldName: "middleName",
        input: true,
      },
      nameSuffix: {
        type: "string",
        required: false,
        fieldName: "nameSuffix",
        input: true,
      },
    },
  },
});
