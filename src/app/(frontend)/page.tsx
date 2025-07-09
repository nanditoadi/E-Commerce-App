import { LogoutUser } from "@/components/LogoutUser";
import ProductList from "@/components/ProductList";
import { authorizeUser } from "@/lib/action/authorize-user";
import { redirect } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
export default async function HomePage() {
  const user = await authorizeUser();

  const payload = await getPayload({
    config,
  });

  const products = await payload.find({
    collection: "products",
    depth: 5,
  });

  if (user) {
    return <ProductList products={products.docs} />;
  } else {
    redirect("/auth/login");
  }
}
