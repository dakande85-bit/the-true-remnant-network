import { donationsEnabled, paypalDonateUrl } from "@/config/donations";

type DonateLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function DonateLink({ className = "", children = "Donate" }: DonateLinkProps) {
  if (!donationsEnabled) {
    return (
      <a className={className} href="/donate">
        {children}
      </a>
    );
  }

  return (
    <a className={className} href={paypalDonateUrl} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}
