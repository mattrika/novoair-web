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
        path: 'co-brandeed-prepaid-card',
        loadComponent: () =>
            import('./pages/co-brandeed-prepaid-card/co-brandeed-prepaid-card.component').then(
                (m) => m.CoBrandeedPrepaidCardComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
    {
        path: 'baggage',
        loadComponent: () =>
            import('@pages/baggage/baggage.component').then((m) => m.BaggageComponent),
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
        loadComponent: () => import('@pages/feedback/feedback.component').then((m) => m.FeedbackComponent),
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
            import('@pages/tourist-info/tourist-info.component').then((m) => m.TouristInfoComponent),
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
]
groupedRoutes.forEach((routeGroup) => {
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
