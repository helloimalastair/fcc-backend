import ts from "./ts";
import fonts from "./fonts";
import { Hono } from "hono";

const app = new Hono();

app.get("/", ctx => ctx.text("My solutions for the FreeCodeCamp.org Back End Development and APIs Projects."));
app.route("/fonts", fonts);
app.route("/ts", ts);

export default <ExportedHandler>{
	fetch: app.fetch,
};