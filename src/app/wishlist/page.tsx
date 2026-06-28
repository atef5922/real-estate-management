import { PageBanner } from "@/components/common/PageBanner";
import { WishlistClient } from "@/components/property/WishlistClient";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Saved Properties",
  description: "Review saved properties from your local frontend shortlist."
});

export default function WishlistPage() {
  return (
    <>
      <PageBanner
        eyebrow="Wishlist"
        title="Saved Collection"
        image="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85"
        imageAlt="Private villa saved property collection"
        current="Saved Properties"
      />
      <WishlistClient />
    </>
  );
}
