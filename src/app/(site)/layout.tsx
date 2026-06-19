import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { ScrollAnimations } from "@/components/providers/scroll-animations";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SmoothScroll>
      <div className="body-dark-bg homeTwo">
        <div className="fix">
          <SiteHeader />
          <ScrollAnimations>{children}</ScrollAnimations>
          <SiteFooter />
        </div>
      </div>
    </SmoothScroll>
  );
}
