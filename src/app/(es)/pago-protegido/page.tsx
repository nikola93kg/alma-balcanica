import { redirect } from "next/navigation";
import { getRoute } from "@/lib/routes";

export default function Page() {
  redirect(getRoute("trust", "es"));
}
