export const pexelsImages = {
  heroFuel:
    "https://images.pexels.com/photos/9799996/pexels-photo-9799996.jpeg?auto=compress&cs=tinysrgb&w=1920",
  transport:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920",
  fuel: "https://images.pexels.com/photos/9799996/pexels-photo-9799996.jpeg?auto=compress&cs=tinysrgb&w=1920",
  fuelCard:
    "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
  team: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  partnership:
    "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  logistics:
    "https://images.pexels.com/photos/4484742/pexels-photo-4484742.jpeg?auto=compress&cs=tinysrgb&w=1920",
  office:
    "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1200",
  invoice:
    "https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1200",
  certificate:
    "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200",
  pageHeader:
    "https://images.pexels.com/photos/4484742/pexels-photo-4484742.jpeg?auto=compress&cs=tinysrgb&w=1920",
  companyBenefit:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920",
  testimonialBg:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920",
  faqBg:
    "https://images.pexels.com/photos/4484742/pexels-photo-4484742.jpeg?auto=compress&cs=tinysrgb&w=1920",
  footerBg:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1920",
  servicesBg:
    "https://images.pexels.com/photos/4484742/pexels-photo-4484742.jpeg?auto=compress&cs=tinysrgb&w=1920",
  generic:
    "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200",
} as const;

export type PexelsImageKey = keyof typeof pexelsImages;

export function getPexelsFallback(key: PexelsImageKey = "generic"): string {
  return pexelsImages[key];
}
