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
        path: 'dashboard-home',
        loadComponent: () =>
            import('./pages/dashboard-home/dashboard-home/dashboard-home.component').then(
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
            import('./pages/destination/destination.component').then(
                (m) => m.DestinationComponent,
            ),
        resolve: { layout: setLayout(PageLayout.Default) },
    },
]
groupedRoutes.forEach((routeGroup) => {
    Object.values(routeGroup).forEach((route) => flattenedRoutes.push(route))
})

export const AppRoutes = flattenedRoutes
