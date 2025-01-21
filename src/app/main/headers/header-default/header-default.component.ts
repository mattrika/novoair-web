import { CommonModule } from '@angular/common'
import { Component, HostListener } from '@angular/core'

interface ListItem {
    icon: string
    text: string
    link: string
}
interface Destination {
    title: string
    type: 'International' | 'Domestic'
    items: Item[]
}
interface Item {
    name: string
    link: string
}
interface TouristInfo {
    title: string
    items: Item[]
}

interface OtherInfo {
    title: string
    items: Item[]
}

interface GridItem {
    icon: string
    title: string
    link: string
}

@Component({
    selector: 'app-header-default',
    imports: [CommonModule],
    templateUrl: './header-default.component.html',
    styleUrl: './header-default.component.scss',
})
export class HeaderDefaultComponent {
    isMobileMenuOpen = false
    mobileMenuHeight = 0

    dropdownStates: { [key: string]: boolean } = {
        bookDropdown: false,
        manageDropdown: false,
        exploreDropdown: false,
        smileDropdown: false,
    }

    listItemsBooks: ListItem[] = [
        { icon: 'pi pi-users', text: 'Group Booking(10+ Traveler)', link: '' },
        {
            icon: 'pi pi-sliders-h',
            text: 'Manage Booking',
            link: 'https://secure.flynovoair.com/bookings/retrieve_reservation.aspx',
        },
        { icon: 'pi pi-mobile', text: 'Mobile Check-in', link: '' },
        { icon: 'pi pi-shop', text: 'In Flight Comforts', link: '/inflight-comforts' },
        { icon: 'pi pi-send', text: 'Charter a Flight', link: '/charter-flight' },
        { icon: 'pi pi-wallet', text: 'Offers & Deals', link: '/offers' },
        { icon: 'pi pi-box', text: 'Associate Business', link: '' },
    ]
    listItemsManage: ListItem[] = [
        { icon: 'pi pi-calendar', text: 'Flight Schedule', link: '' },
        { icon: 'pi pi-clock', text: 'Live Flight Status', link: '' },
        { icon: 'pi pi-map', text: 'Route Map', link: '' },
        { icon: 'pi pi-twitch', text: 'Travel Advisory', link: '' },
        { icon: 'pi pi-exclamation-triangle', text: 'NOTAM!', link: '' },
    ]
    listItemsExplore: ListItem[] = [
        { icon: 'pi pi-building', text: 'Company Information', link: '/about-us' },
        { icon: 'pi pi-compass', text: 'Fleet Information', link: '/fleet' },
        { icon: 'pi pi-envelope', text: 'Feedback', link: '' },
        { icon: 'pi pi-id-card', text: 'Career', link: 'https://career.flynovoair.com/' },
        { icon: 'pi pi-check-square', text: 'Terms & Conditions', link: '/terms-and-conditions' },
    ]

    destinations: Destination[] = [
        {
            title: 'Destinations',
            type: 'International',
            items: [
                { name: 'Kolkata', link: 'https://example.com/kolkata' },
                { name: 'Future Destinations', link: 'https://example.com/future-destinations' },
            ],
        },
        {
            title: 'Destinations',
            type: 'Domestic',
            items: [
                { name: 'Dhaka', link: 'https://example.com/dhaka' },
                { name: 'Chattogram', link: 'https://example.com/chattogram' },
                { name: "Cox's Bazar", link: 'https://example.com/coxs-bazar' },
                { name: 'Sylhet', link: 'https://example.com/sylhet' },
                { name: 'Jeshore', link: 'https://example.com/jeshore' },
                { name: 'Rajsshahi', link: 'https://example.com/rajsshahi' },
                { name: 'Barishal', link: 'https://example.com/barishal' },
                { name: 'Saidpur', link: 'https://example.com/saidpur' },
            ],
        },
    ]

    touristInfo: TouristInfo[] = [
        {
            title: 'Top Places to See',

            items: [
                { name: "Cox's Bazar", link: 'https://example.com/coxs-bazar' },
                { name: 'Sundharban', link: 'https://example.com/sundharban' },
                { name: 'St Martin Island', link: 'https://example.com/st-martin-island' },
                { name: 'Nilgiri', link: 'https://example.com/nilgiri' },
                { name: 'Kuakata', link: 'https://example.com/kuakata' },
                { name: 'View More', link: 'https://example.com/view-more' },
            ],
        },
        {
            title: 'Tips & Guides',
            items: [{ name: "Cox's Bazar", link: 'https://example.com/coxs-bazar-tips' }],
        },
    ]

    otherInfo: OtherInfo[] = [
        {
            title: 'Baggage Information',
            items: [
                { name: 'Baggage Size & Weight', link: '/baggage' },
                { name: 'Pets/Animals', link: '/pets-animals' },
                { name: 'Sports Gears', link: '/sports-gears' },
                {
                    name: 'Fire Arms & Ammunition',
                    link: '/fire-arms-ammunition',
                },
                { name: 'Other Baggages', link: '/other-baggages' },
            ],
        },
        {
            title: 'Policies',
            items: [
                {
                    name: 'Unaccompanied Minor/Young Passengers',
                    link: '/unaccompanied-minor',
                },
                {
                    name: 'Travel Documents (Domestic)',
                    link: '/domestic-travel-documents',
                },
                {
                    name: 'Transportation of Infants',
                    link: '/transportation-infants',
                },
                {
                    name: 'Incapacitated Passengers',
                    link: 'https://example.com/incapacitated-passengers',
                },
                { name: 'Expectant Mothers', link: 'https://example.com/expectant-mothers' },
                { name: 'Medical Clearance', link: 'https://example.com/medical-clearance' },
                { name: 'Cancellation & Refund', link: 'https://example.com/cancellation-refund' },
                { name: 'Special Assistance', link: 'https://example.com/special-assistance' },
            ],
        },
    ]

    gridItems: GridItem[] = [
        { icon: 'pi pi-phone', title: 'Contact Us', link: '/contact-us' },
        { icon: 'pi pi-camera', title: 'Media Terminal', link: 'https://media.flynovoair.com/' },
        { icon: 'pi pi-inbox', title: 'FAQ', link: '/faq' },
        { icon: 'pi pi-comments', title: 'Live Chat', link: '#' },
        { icon: 'pi pi-facebook', title: 'Facebook', link: 'https://www.facebook.com/flynovoair' },
        { icon: 'pi pi-youtube', title: 'YouTube', link: 'https://www.youtube.com/c/flynovoair' },
        { icon: 'pi pi-twitter', title: 'Twitter', link: 'https://x.com/NOVOAIR' },
        {
            icon: 'pi pi-instagram',
            title: 'Instagram',
            link: 'https://www.instagram.com/flynovoair/#',
        },
        {
            icon: 'pi pi-linkedin',
            title: 'LinkedIN',
            link: 'https://www.linkedin.com/company/novoair/',
        },
    ]

    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen
        if (this.isMobileMenuOpen) {
            const mobileMenu = document.getElementById('mobile-menu')
            if (mobileMenu) {
                this.mobileMenuHeight = mobileMenu.scrollHeight
            }
        } else {
            this.mobileMenuHeight = 0
        }
    }

    toggleDropdown(dropdownKey: string) {
        this.dropdownStates[dropdownKey] = !this.dropdownStates[dropdownKey]
    }

    @HostListener('window:resize')
    onResize() {
        if (window.innerWidth >= 768) {
            this.isMobileMenuOpen = false
            this.mobileMenuHeight = 0

            // Close all dropdowns on resize
            for (const key in this.dropdownStates) {
                this.dropdownStates[key] = false
            }
        }
    }
}
