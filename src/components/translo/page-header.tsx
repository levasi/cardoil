import Link from "next/link";
import { FallbackBackground } from "@/components/shared/fallback-background";

interface PageHeaderProps {
  title: string;
  bgImage?: string;
}

export function TransloPageHeader({
  title,
  bgImage = "/img/background/page-header-bg.jpg",
}: PageHeaderProps) {
  return (
    <section className="page-header padding">
      <FallbackBackground
        className="page-header__bg"
        src={bgImage}
        fallbackKey="pageHeader"
      />
      <div className="container">
        <div className="page-header__inner text-center">
          <h2>{title}</h2>
          <ul className="thm-breadcrumb">
            <li>
              <Link href="/">Acasă</Link>
            </li>
            <li>
              <span className="icon-right-arrow-5" />
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
