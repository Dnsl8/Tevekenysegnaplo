import { SelectedPage } from "@/shared/types";
import { Link as RouterLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
    toNewPage?: boolean; // New prop to indicate if this link should navigate to a new page
    
};

const Link = ({ page, selectedPage, setSelectedPage, toNewPage = false }: Props) => {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
   

    return toNewPage ? (
        // Use RouterLink for page navigation
        <RouterLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            to={`/${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </RouterLink>
    ) : (
        // Use AnchorLink for smooth scrolling within the page
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

export default Link;
