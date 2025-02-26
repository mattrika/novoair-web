import { Route } from '@angular/router'
import { PageLayout } from '@main/layout/page-layout.enum'
import { setLayout } from '@main/layout/set-layout.resolver'
import { AuthRoutes, getAuthRoutes } from '@pages/auth/auth.routes'
import { HomeRoutes, getHomeRoutes } from '@pages/home/home.routes'
import { NotFoundPageRoutes, getNotFoundPageRoutes } from '@pages/not-found/not-found.routes'
import { ProfileRoutes, getProfileRoutes } from '@pages/profile/profile.routes'

type GroupedRoutes = [
    HomeRoutes,
    AuthRoutes,
    ProfileRoutes,
    // catch-all route must be last
    NotFoundPageRoutes,
]

const groupedRoutes: GroupedRoutes = [
    getHomeRoutes(),
    getAuthRoutes(),
    getProfileRoutes(),
    getNotFoundPageRoutes(),
]

const flattenedRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
            import('@pages/dashboard-home/dashboard-home.component').then(
                (m) => m.DashboardHomeComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'manage-booking',
        loadComponent: () =>
            import('./pages/manage-booking/manage-booking.component').then(
                (m) => m.ManageBookingComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'smiles-frequent-flyer',
        loadComponent: () =>
            import('./pages/smiles-frequent-flyer/smiles-frequent-flyer.component').then(
                (m) => m.SmilesFrequentFlyerComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'our-destination',
        loadComponent: () =>
            import('./pages/destination/destination.component').then((m) => m.DestinationComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'co-branded-prepaid-card',
        loadComponent: () =>
            import('./pages/co-brandeed-prepaid-card/co-brandeed-prepaid-card.component').then(
                (m) => m.CoBrandeedPrepaidCardComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage/baggage-size-weight',
        loadComponent: () =>
            import('@pages/baggage/baggage.component').then((m) => m.BaggageComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'flight-status',
        loadComponent: () =>
            import('@pages/flight-status/flight-status.component').then((m) => m.FlightStatusComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'shuttle',
        loadComponent: () =>
            import('@pages/shuttle/shuttle.component').then((m) => m.ShuttleComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers',
        loadComponent: () =>
            import('@pages/offers/offers.component').then((m) => m.OffersComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/web',
        loadComponent: () =>
            import('@main/offers/components/offer-web/offer-web.component').then(
                (m) => m.OfferWebComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/standard-chartered',
        loadComponent: () =>
            import('@main/offers/components/offer-standard/offer-standard.component').then(
                (m) => m.OfferStandardComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/brac',
        loadComponent: () =>
            import('@main/offers/components/offer-brac/offer-brac.component').then(
                (m) => m.OfferBracComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/ebl',
        loadComponent: () =>
            import('@main/offers/components/offer-ebl/offer-ebl.component').then(
                (m) => m.OfferEblComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/city',
        loadComponent: () =>
            import('@main/offers/components/offer-city/offer-city.component').then(
                (m) => m.OfferCityComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/ucb',
        loadComponent: () =>
            import('@main/offers/components/offer-ucb/offer-ucb.component').then(
                (m) => m.OfferUcbComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'offers/gp-star',
        loadComponent: () =>
            import('@main/offers/components/offer-gp/offer-gp.component').then(
                (m) => m.OfferGpComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'book-flight',
        loadComponent: () =>
            import('@pages/book-flight/book-flight.component').then((m) => m.BookFlightComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'current-offers',
        loadComponent: () =>
            import('@pages/current-offers/current-offers.component').then(
                (m) => m.CurrentOffersComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'holiday-packages',
        loadComponent: () =>
            import('@pages/holiday-packages/holiday-packages.component').then(
                (m) => m.HolidayPackagesComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'holiday-packages/coxs',
        loadComponent: () =>
            import('@pages/holiday-coxs/holiday-coxs.component').then(
                (m) => m.HolidayCoxsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'holiday-packages/sylhet',
        loadComponent: () =>
            import('@pages/holiday-sylhet/holiday-sylhet.component').then(
                (m) => m.HolidaySylhetComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'holiday-packages/kolkata',
        loadComponent: () =>
            import('@pages/holiday-kolkata/holiday-kolkata.component').then(
                (m) => m.HolidayKolkataComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'inflight-comforts',
        loadComponent: () =>
            import('@pages/inflight-comforts/inflight-comforts.component').then(
                (m) => m.InflightComfortsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'charter-flight',
        loadComponent: () =>
            import('@pages/charter-flight/charter-flight.component').then(
                (m) => m.CharterFlightComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'about-us',
        loadComponent: () =>
            import('@pages/about-us/about-us.component').then((m) => m.AboutUsComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'feedback',
        loadComponent: () =>
            import('@pages/feedback/feedback.component').then((m) => m.FeedbackComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'fleet',
        loadComponent: () => import('@pages/fleet/fleet.component').then((m) => m.FleetComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'faq',
        loadComponent: () => import('@pages/faq/faq.component').then((m) => m.FaqComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'contact-us',
        loadComponent: () =>
            import('@pages/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'tourist-info',
        loadComponent: () =>
            import('@pages/tourist-info/tourist-info.component').then(
                (m) => m.TouristInfoComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'privacy-policy',
        loadComponent: () =>
            import('@pages/privacy-policy/privacy-policy.component').then(
                (m) => m.PrivacyPolicyComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'terms-and-conditions',
        loadComponent: () =>
            import('@pages/terms-condition/terms-condition.component').then(
                (m) => m.TermsConditionComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage/pets-animals',
        loadComponent: () =>
            import('@pages/pets-animals/pets-animals.component').then(
                (m) => m.PetsAnimalsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage/sports-gears',
        loadComponent: () =>
            import('@pages/sports-gears/sports-gears.component').then(
                (m) => m.SportsGearsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage/fire-arms-ammunition',
        loadComponent: () =>
            import('@pages/arms-ammunition/arms-ammunition.component').then(
                (m) => m.ArmsAmmunitionComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage/other-baggages',
        loadComponent: () =>
            import('@pages/other-baggages/other-baggages.component').then(
                (m) => m.OtherBaggagesComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/unaccompanied-minor',
        loadComponent: () =>
            import('@pages/unaccompanied-minor/unaccompanied-minor.component').then(
                (m) => m.UnaccompaniedMinorComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/domestic-travel-documents',
        loadComponent: () =>
            import('@pages/domestic-travel-documents/domestic-travel-documents.component').then(
                (m) => m.DomesticTravelDocumentsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/transportation-infants',
        loadComponent: () =>
            import('@pages/transportation-of-infants/transportation-of-infants.component').then(
                (m) => m.TransportationOfInfantsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/incapacitated-passengers',
        loadComponent: () =>
            import('@pages/incapacitated-passengers/incapacitated-passengers.component').then(
                (m) => m.IncapacitatedPassengersComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/expectant-mothers',
        loadComponent: () =>
            import('@pages/expectant-mother/expectant-mother.component').then(
                (m) => m.ExpectantMotherComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/medical-clearance',
        loadComponent: () =>
            import(
                '@pages/requirement-medical-clearance/requirement-medical-clearance.component'
            ).then((m) => m.RequirementMedicalClearanceComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/cancellation-refund',
        loadComponent: () =>
            import('@pages/cancellation-refund/cancellation-refund.component').then(
                (m) => m.CancellationRefundComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'policies/special-assistance',
        loadComponent: () =>
            import('@pages/special-assistance/special-assistance.component').then(
                (m) => m.SpecialAssistanceComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'top-place/coxs-bazar',
        loadComponent: () =>
            import('@pages/coxs-bazar/coxs-bazar.component').then((m) => m.CoxsBazarComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'top-place/st-martin-island',
        loadComponent: () =>
            import('@pages/saint-martin/saint-martin.component').then(
                (m) => m.SaintMartinComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'top-place/sundharban',
        loadComponent: () =>
            import('@pages/sundarban/sundarban.component').then((m) => m.SundarbanComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'top-place/nilgiri',
        loadComponent: () =>
            import('@pages/nilgiri/nilgiri.component').then((m) => m.NilgiriComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'tips-guides/general-guidelines',
        loadComponent: () =>
            import('@pages/general-guidelines/general-guidelines.component').then(
                (m) => m.GeneralGuidelinesComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'top-place/kuakata',
        loadComponent: () =>
            import('@pages/kuakata/kuakata.component').then((m) => m.KuakataComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'international/kolkata',
        loadComponent: () =>
            import('@pages/kolkata/kolkata.component').then((m) => m.KolkataComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'international/future-destinations',
        loadComponent: () =>
            import('@pages/future-destinations/future-destinations.component').then(
                (m) => m.FutureDestinationsComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/dhaka',
        loadComponent: () => import('@pages/dhaka/dhaka.component').then((m) => m.DhakaComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/chattogram',
        loadComponent: () =>
            import('@pages/chattogram/chattogram.component').then((m) => m.ChattogramComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/coxs-bazar',
        loadComponent: () =>
            import('@pages/coxs-bazar/coxs-bazar.component').then((m) => m.CoxsBazarComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/sylhet',
        loadComponent: () =>
            import('@pages/sylhet/sylhet.component').then((m) => m.SylhetComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/jessore',
        loadComponent: () =>
            import('@pages/jeshore/jeshore.component').then((m) => m.JeshoreComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/rajsshahi',
        loadComponent: () =>
            import('@pages/rajshahi/rajshahi.component').then((m) => m.RajshahiComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/barishal',
        loadComponent: () =>
            import('@pages/barishal/barishal.component').then((m) => m.BarishalComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'domestic/saidpur',
        loadComponent: () =>
            import('@pages/saidpur/saidpur.component').then((m) => m.SaidpurComponent),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
]
groupedRoutes.forEach((routeGroup) => {
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
