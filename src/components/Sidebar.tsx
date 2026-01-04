import {
    BarChart10,
    Bookmark,
    Grid01,
    InfoCircle,
    Server01,
    Settings01,
} from "@untitledui/icons";
import type { NavItemType } from "@/components/application/app-navigation/config";
import { SidebarNavigationSimple } from "@/components/application/app-navigation/sidebar-navigation/sidebar-simple";
import type { ReactNode } from "react";

interface SidebarProps {
    /** URL of the currently active item. */
    activeUrl: string;
    /** List of footer items to display. */
    footerItems?: NavItemType[];
    /** Feature card to display. */
    featureCard?: ReactNode;
    /** Whether to show the account card. */
    showAccountCard?: boolean;
    /** Whether to hide the right side border. */
    hideBorder?: boolean;
    /** Additional CSS classes to apply to the sidebar. */
    className?: string;
}

const navItemsSimple: NavItemType[] = [
    {
        label: "Overview",
        href: "/",
        icon: Grid01,
    },
    {
        label: "Analytics",
        href: "/analytics",
        icon: BarChart10,
    },
    {
        label: "Nodes",
        href: "/nodes",
        icon: Server01,
    },
    {
        label: "Watch list",
        href: "/watch",
        icon: Bookmark,
        badge: "number of nodes",
    },
    {
        label: "About",
        href: "/about",
        icon: InfoCircle,
    },
];

export const SidebarNavigation = (props: SidebarProps) => (
    <SidebarNavigationSimple
        items={navItemsSimple}
        footerItems={[
            {
                label: "Docs",
                href: "/docs",
                icon: Settings01,
            },
        ]}
        activeUrl={props.activeUrl}
        showAccountCard={false}
    />
);
