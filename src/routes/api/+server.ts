import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

var CheckedJSON: any;

function CheckParsingAbility(data: string | any) {
  try {
    CheckedJSON = JSON.parse(data);
  } catch (err) {
    if (err instanceof SyntaxError) {
      error(400, { message: "Error 400: JSON Inputted cannot be parsed" });
    }
  }

  return true;
}

export const POST: RequestHandler = async ({ request }) => {
  const reqTXT = await request.text();
  const success = CheckParsingAbility(reqTXT);

  return json(success);
};

export const GET: RequestHandler = async ({}) => {
  return new Response(
    new Blob([JSON.stringify(CheckedJSON)], { type: "application/json" }),
    {
      status: 200,
      statusText: "Parsing Sent",
    },
  ); // literally only gets called by a component that gets checked when passed through
};

export const fallback: RequestHandler = async () => {
  return json("Did you really think I implemented this?");
};
