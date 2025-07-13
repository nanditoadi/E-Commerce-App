import { getPayload } from "payload";
import config from "@payload-config";
import ProductPage from "@/components/ProductPage";
import { RichText } from "@payloadcms/richtext-lexical/react";

export interface PageProps {
  params: Promise<{
    productSlug: string;
  }>;
}

const Page = async ({ params }: PageProps) => {
  const { productSlug } = await params;

  const payload = await getPayload({ config });

  // Deconstruct
  const { docs } = await payload.find({
    collection: "products",
    where: {
      slug: {
        equals: productSlug,
      },
    },
    limit: 1,
  });

  console.log(docs);

  const product = docs[0];

  return (
    <ProductPage
      name={product.name}
      price={product.priceIDR}
      imageUrl={typeof product.image === "object" ? (product.image.url ?? "") : ""}
      description={<RichText data={product.description} />}
      productId={product.id}
    />
  );
};

export default Page;
